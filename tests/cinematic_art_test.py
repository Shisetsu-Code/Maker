import json,subprocess,unittest
from pathlib import Path
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]

class CinematicArtTests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  code="import {WORLDS} from './public/muestra/cinematic/schema.mjs'; console.log(JSON.stringify(Object.fromEntries(Object.entries(WORLDS).map(([key,value])=>[key,value.art]))));"
  cls.art=json.loads(subprocess.check_output(['node','--input-type=module','-e',code],cwd=ROOT,text=True))
 def test_every_world_uses_independent_art_at_least_1200_pixels_per_side(self):
  self.assertEqual(len(self.art),9)
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
  self.assertLessEqual(total,10*1024*1024,'Nine illustration assets must stay within the web delivery budget')

if __name__=='__main__':unittest.main()
