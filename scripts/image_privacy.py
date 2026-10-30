"""Remove descriptive image metadata without recompressing PNG/JPEG/WebP pixels.

ICC profiles and rendering/animation chunks are technical image data, retained.
JPEG orientation is baked into pixels when necessary. AVIF with metadata is
re-encoded because its item offsets cannot safely be removed as simple chunks.
"""
import argparse, io, json, struct, zlib
from pathlib import Path
from PIL import Image, ImageOps

PNG=b'\x89PNG\r\n\x1a\n'
def raster(data):
 return data.startswith((PNG,b'\xff\xd8',b'GIF8')) or data[:4]==b'RIFF' and data[8:12]==b'WEBP' or data[4:8]==b'ftyp'

def rendered(data,fmt):
 with Image.open(io.BytesIO(data)) as source:
  if getattr(source,'n_frames',1)>1:raise ValueError('Animated image needs frame-preserving conversion')
  profile=source.info.get('icc_profile'); image=ImageOps.exif_transpose(source)
  if image.mode=='P':image=image.convert('RGBA')
  clean=Image.frombytes(image.mode,image.size,image.tobytes())
  out=io.BytesIO();options={'icc_profile':profile} if profile else {}
  if fmt in ('JPEG','AVIF'):options.update(quality=95)
  if fmt=='WEBP':options.update(lossless=True)
  clean.save(out,format=fmt,**options);return out.getvalue()

def clean_image(data):
 if data.startswith(PNG):
  if b'eXIf' in data:
   with Image.open(io.BytesIO(data)) as im:
    if im.getexif().get(274,1)!=1:return rendered(data,'PNG')
  offset=8;out=bytearray(PNG)
  while offset+12<=len(data):
   length=int.from_bytes(data[offset:offset+4],'big');kind=data[offset+4:offset+8];end=offset+12+length
   if end>len(data):raise ValueError('Truncated PNG')
   payload=data[offset+8:offset+8+length]
   if kind not in (b'tEXt',b'zTXt',b'iTXt',b'eXIf',b'tIME'):
    # Repair CRCs of captured chunks; no pixel or layout changes.
    out.extend(struct.pack('>I',length)+kind+payload+struct.pack('>I',zlib.crc32(kind+payload)&0xffffffff))
   offset=end
   if kind==b'IEND':return bytes(out)
  raise ValueError('Missing PNG end')
 if data.startswith(b'\xff\xd8'):
  with Image.open(io.BytesIO(data)) as im:
   if im.getexif().get(274,1)!=1:return rendered(data,'JPEG')
  offset=2;out=bytearray(data[:2])
  while offset<len(data):
   start=offset
   if data[offset]!=255:raise ValueError('Invalid JPEG segment')
   while data[offset]==255:offset+=1
   marker=data[offset];offset+=1
   if marker in (0xda,0xd9):return bytes(out)+data[start:]
   if marker in (0x01,*range(0xd0,0xd8)):out.extend(data[start:offset]);continue
   length=int.from_bytes(data[offset:offset+2],'big');end=offset+length
   if length<2 or end>len(data):raise ValueError('Truncated JPEG')
   if marker not in (0xe1,0xed,0xfe):out.extend(data[start:end])
   offset=end
  raise ValueError('Missing JPEG end')
 if data[:4]==b'RIFF' and data[8:12]==b'WEBP':
  if b'EXIF' in data:
   with Image.open(io.BytesIO(data)) as im:
    if im.getexif().get(274,1)!=1:return rendered(data,'WEBP')
  offset=12;chunks=[]
  while offset+8<=len(data):
   kind=data[offset:offset+4];length=int.from_bytes(data[offset+4:offset+8],'little');end=offset+8+length
   if end>len(data):raise ValueError('Truncated WebP')
   payload=data[offset+8:end]
   if kind not in (b'EXIF',b'XMP '):
    if kind==b'VP8X':payload=bytes([payload[0]&~0x0c])+payload[1:]
    chunks.append(kind+struct.pack('<I',len(payload))+payload+(b'\0' if len(payload)%2 else b''))
   offset=end+(length%2)
  body=b'WEBP'+b''.join(chunks);return b'RIFF'+struct.pack('<I',len(body))+body
 if data.startswith(b'GIF8'):
  if len(data)<13:raise ValueError('Truncated GIF')
  offset=13+(3*(2**((data[10]&7)+1)) if data[10]&128 else 0);out=bytearray(data[:offset])
  def blocks(start):
   while start<len(data):
    size=data[start];start+=1
    if not size:return start
    start+=size
   raise ValueError('Truncated GIF blocks')
  while offset<len(data):
   start=offset;marker=data[offset];offset+=1
   if marker==0x3b:return bytes(out)+b';'
   if marker==0x21:
    label=data[offset];offset+=1;identifier=data[offset+1:offset+12];offset=blocks(offset)
    if label==0xfe or label==0xff and identifier not in (b'NETSCAPE2.0',b'ANIMEXTS1.0',b'ICCRGBG1012'):continue
   elif marker==0x2c:
    if offset+9>len(data):raise ValueError('Truncated GIF frame')
    packed=data[offset+8];offset+=9+(3*(2**((packed&7)+1)) if packed&128 else 0)
    offset=blocks(offset+1)
   else:raise ValueError('Invalid GIF block')
   out.extend(data[start:offset])
  raise ValueError('Missing GIF end')
 if data[4:8]==b'ftyp':
  with Image.open(io.BytesIO(data)) as im:
   if im.info.get('exif') or im.info.get('xmp'):return rendered(data,'AVIF')
 return data

def main():
 parser=argparse.ArgumentParser();parser.add_argument('--root',default='public');parser.add_argument('--check',action='store_true');args=parser.parse_args()
 root=Path(args.root).resolve();changed=[];invalid=[];count=0;saved=0
 for path in root.rglob('*'):
  if not path.is_file():continue
  with path.open('rb') as stream:signature=stream.read(16)
  if not raster(signature):continue
  count+=1
  try:
   data=path.read_bytes();clean=clean_image(data)
   with Image.open(io.BytesIO(clean)) as im:im.load()
   if clean!=data:
    changed.append(path.relative_to(root).as_posix());saved+=len(data)-len(clean)
    if not args.check:path.write_bytes(clean)
  except Exception as error:invalid.append({'path':path.relative_to(root).as_posix(),'error':type(error).__name__})
 print(json.dumps({'images':count,'changed':len(changed),'bytes_removed':saved,'invalid':invalid,'pending_paths':changed if args.check else []}))
 if invalid or args.check and changed:raise SystemExit(1)

if __name__=='__main__':main()
