import importlib.util, io, unittest
from pathlib import Path
from PIL import Image, PngImagePlugin
spec=importlib.util.spec_from_file_location('privacy',Path(__file__).resolve().parents[1]/'scripts/image_privacy.py')
privacy=importlib.util.module_from_spec(spec)
if spec.loader: spec.loader.exec_module(privacy)

class ImagePrivacyTests(unittest.TestCase):
 def test_png_removes_text_without_changing_pixels(self):
  im=Image.new('RGBA',(5,3),(20,80,120,100)); meta=PngImagePlugin.PngInfo();meta.add_text('Author','PRIVATE_FIXTURE');meta.add_text('XML:com.adobe.xmp','PRIVATE_FIXTURE')
  out=io.BytesIO();im.save(out,format='PNG',pnginfo=meta)
  clean=privacy.clean_image(out.getvalue())
  self.assertNotIn(b'PRIVATE_FIXTURE',clean)
  with Image.open(io.BytesIO(clean)) as result:self.assertEqual(result.tobytes(),im.tobytes())
 def test_jpeg_removes_exif_and_preserves_orientation(self):
  im=Image.new('RGB',(8,4),'green');exif=Image.Exif();exif[315]='PRIVATE_FIXTURE';exif[274]=6
  out=io.BytesIO();im.save(out,format='JPEG',exif=exif)
  clean=privacy.clean_image(out.getvalue());self.assertNotIn(b'PRIVATE_FIXTURE',clean)
  with Image.open(io.BytesIO(clean)) as result:self.assertEqual(result.size,(4,8));self.assertFalse(result.getexif())
 def test_webp_removes_xmp_and_keeps_alpha(self):
  im=Image.new('RGBA',(3,2),(40,50,60,70));out=io.BytesIO();im.save(out,format='WEBP',lossless=True,xmp=b'PRIVATE_FIXTURE')
  clean=privacy.clean_image(out.getvalue());self.assertNotIn(b'PRIVATE_FIXTURE',clean)
  with Image.open(io.BytesIO(clean)) as result:self.assertEqual(result.tobytes(),im.tobytes())
 def test_avif_removes_exif_xmp(self):
  im=Image.new('RGB',(6,4),'red');out=io.BytesIO();exif=Image.Exif();exif[315]='PRIVATE_FIXTURE';im.save(out,format='AVIF',exif=exif,xmp=b'PRIVATE_FIXTURE')
  clean=privacy.clean_image(out.getvalue());self.assertNotIn(b'PRIVATE_FIXTURE',clean)
  with Image.open(io.BytesIO(clean)) as result:self.assertEqual(result.size,(6,4));self.assertFalse(result.getexif());self.assertFalse(result.info.get('xmp'))
 def test_clean_file_is_unchanged(self):
  out=io.BytesIO();Image.new('RGB',(3,3),'blue').save(out,format='PNG');self.assertEqual(privacy.clean_image(out.getvalue()),out.getvalue())
 def test_png_and_webp_keep_exif_orientation(self):
  for fmt in ['PNG','WEBP']:
   with self.subTest(format=fmt):
    image=Image.new('RGBA',(8,4),(40,80,120,70));exif=Image.Exif();exif[274]=6;exif[315]='PRIVATE_FIXTURE';out=io.BytesIO();image.save(out,format=fmt,exif=exif)
    clean=privacy.clean_image(out.getvalue())
    with Image.open(io.BytesIO(clean)) as result:self.assertEqual(result.size,(4,8));self.assertFalse(result.getexif());self.assertEqual(result.mode,'RGBA')
 def test_gif_removes_comments_and_keeps_animation(self):
  out=io.BytesIO();Image.new('RGB',(4,3),'red').save(out,format='GIF',save_all=True,append_images=[Image.new('RGB',(4,3),'blue')],duration=[100,200],loop=2,comment=b'PRIVATE_FIXTURE')
  clean=privacy.clean_image(out.getvalue());self.assertNotIn(b'PRIVATE_FIXTURE',clean)
  with Image.open(io.BytesIO(clean)) as result:self.assertEqual(result.n_frames,2);self.assertEqual(result.info['loop'],2);self.assertEqual(result.info['duration'],100)
 def test_oriented_palette_png_keeps_colors(self):
  image=Image.new('P',(8,4),1);image.putpalette([255,0,0,0,255,0]+[0]*762);exif=Image.Exif();exif[274]=6;out=io.BytesIO();image.save(out,format='PNG',exif=exif)
  with Image.open(io.BytesIO(privacy.clean_image(out.getvalue()))) as result:self.assertEqual(result.convert('RGBA').getpixel((0,0)),(0,255,0,255))

if __name__=='__main__':unittest.main()
