import hashlib,json,subprocess,unittest
from pathlib import Path
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]

class CinematicArtTests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  code="import {WORLDS} from './public/muestra/cinematic/schema.mjs'; console.log(JSON.stringify(Object.fromEntries(Object.entries(WORLDS).map(([key,value])=>[key,value.art]))));"
  cls.art=json.loads(subprocess.check_output(['node','--input-type=module','-e',code],cwd=ROOT,text=True))
 def test_every_world_uses_independent_art_at_least_1200_pixels_per_side(self):
  self.assertEqual(len(self.art),27)
  for world,relative in self.art.items():
   with self.subTest(world=world),Image.open(ROOT/'public/muestra/cinematic'/relative) as image:
    self.assertGreaterEqual(min(image.size),1200,'The displayed hero must not use a small concept crop')
 def test_web_assets_keep_native_dimensions_without_descriptive_metadata(self):
  total=0
  for world,relative in self.art.items():
   path=ROOT/'public/muestra/cinematic'/relative;total+=path.stat().st_size
   with self.subTest(world=world),Image.open(path) as image,Image.open(ROOT/'artwork/cinematic-hd'/(world+'.png')) as master:
    self.assertEqual(image.size,master.size,'Packaging must not enlarge a small source')
    self.assertFalse(image.getexif())
    for key in ['xmp','comment','Software','XML:com.adobe.xmp']:self.assertFalse(image.info.get(key))
    image.load()
  self.assertLessEqual(total,30*1024*1024,'27 illustration assets must stay within the web delivery budget')

 def test_manifest_covers_exact_worlds_and_clean_native_masters(self):
  manifest=json.loads((ROOT/'artwork/cinematic-hd/manifest.json').read_text(encoding='utf8'))
  self.assertEqual(set(manifest['files']),set(self.art))
  self.assertEqual(manifest['resampling'],'none')
  for world,relative in self.art.items():
   with self.subTest(world=world):
    record=manifest['files'][world]
    for kind,path in [('png',ROOT/'artwork/cinematic-hd'/(world+'.png')),('avif',ROOT/'public/muestra/cinematic'/relative)]:
     self.assertEqual(hashlib.sha256(path.read_bytes()).hexdigest(),record[kind+'Sha256'])
     self.assertEqual(path.stat().st_size,record[kind+'Bytes'])
     with Image.open(path) as image:
      self.assertEqual(list(image.size),[record['width'],record['height']])
      self.assertFalse(image.getexif())
      for key in ['xmp','comment','Software','XML:com.adobe.xmp']:self.assertFalse(image.info.get(key))

if __name__=='__main__':unittest.main()
