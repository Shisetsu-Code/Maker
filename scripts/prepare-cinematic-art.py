"""Package existing generated native artwork; this script does not generate/upscale images."""
import argparse,hashlib,json,io
from pathlib import Path
from PIL import Image
from image_privacy import clean_image
ROOT=Path(__file__).resolve().parents[1]
IDS=['pirates','olympus','cyberpunk','steampunk','space','western','candy','dinosaurs','phoenix']
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--import-sources',type=Path);args=parser.parse_args()
 masters=ROOT/'artwork/cinematic-hd';public=ROOT/'public/muestra/cinematic/assets/cinematic-hd';masters.mkdir(parents=True,exist_ok=True);public.mkdir(parents=True,exist_ok=True)
 sources=json.loads(args.import_sources.read_text(encoding='utf8')) if args.import_sources else {id:str(masters/(id+'.png'))for id in IDS}
 manifest={'kind':'independent generated illustrations','date':'2026-10-31','resampling':'none','webFormat':'AVIF','quality':85,'subsampling':'4:4:4','files':{}}
 for id in IDS:
  source=Path(sources[id]);raw=clean_image(source.read_bytes())
  with Image.open(io.BytesIO(raw)) as image:
   if min(image.size)<1200:raise ValueError('Source resolution too small: '+id)
   if getattr(image,'n_frames',1)!=1:raise ValueError('Expected one original illustration: '+id)
   pixels=image.convert('RGB');fresh=Image.frombytes('RGB',pixels.size,pixels.tobytes())
   fresh.save(masters/(id+'.png'),format='PNG');fresh.save(public/(id+'.avif'),format='AVIF',quality=85,speed=6,subsampling='4:4:4')
   size=list(fresh.size)
  png=masters/(id+'.png');avif=public/(id+'.avif')
  manifest['files'][id]={'width':size[0],'height':size[1],'pngBytes':png.stat().st_size,'pngSha256':hashlib.sha256(png.read_bytes()).hexdigest(),'avifBytes':avif.stat().st_size,'avifSha256':hashlib.sha256(avif.read_bytes()).hexdigest()}
 (masters/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf8')
 print(json.dumps({'illustrations':len(IDS),'dimensions':{id:[v['width'],v['height']]for id,v in manifest['files'].items()},'publicBytes':sum(v['avifBytes']for v in manifest['files'].values())}))
if __name__=='__main__':main()
