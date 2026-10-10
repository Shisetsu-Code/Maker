"""Verify HAR raster extraction without sending requests to the source website."""
import base64
import json
import sys
import tempfile
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from extract_har_assets import safe_name, restore

PNG = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4//8/AwAI/AL+XzAwvwAAAABJRU5ErkJggg==")

def entry(url, data=PNG, mime='image/png', method='GET', status=200):
    return {'request': {'method':method, 'url':url}, 'response': {'status':status, 'content': {'mimeType':mime, 'encoding':'base64', 'text':base64.b64encode(data).decode()}}}

class AssetRecovery(unittest.TestCase):
    def test_only_known_local_raster_paths(self):
        for url in [
            'http://rushybet.com/games-cartas/x.png',
            'https://evil.example/games-cartas/x.png',
            'https://rushybet.com/games-cartas/../x.png',
            'https://rushybet.com/games-cartas/%2e%2e/x.png',
            'https://rushybet.com/games-cartas/x.svg',
            'https://rushybet.com/api/sensitive.png',
            'https://rushybet.com/games-cartas/.hidden/x.png',
        ]:
            with self.subTest(url=url): self.assertIsNone(safe_name(url))
        self.assertEqual(safe_name('https://rushybet.com/games-cartas/a/b.png'),'games-cartas/a/b.png')
    def test_restores_safe_images_and_does_not_overwrite_without_permission(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)
            src=root/'capture.har'
            src.write_text(json.dumps({'log': {'entries': [
                entry('https://rushybet.com/games-cartas/demo/game.png'),
                entry('https://rushybet.com/games-cartas/demo/game.png'),
                entry('https://rushybet.com/games-cartas/not-raster.png',b'<script>x</script>'),
                entry('https://evil.example/games-cartas/x.png'),
                entry('https://rushybet.com/muestra/azul/broken.png',status=404),
                entry('https://rushybet.com/games-cartas/a.png',method='POST'),
            ]}}))
            dest=root/'public'
            dry=restore(src,dest,dry_run=True)
            self.assertEqual(dry['assets_available'],1)
            self.assertFalse(dest.exists())
            stats=restore(src,dest)
            self.assertEqual(stats['written'],1)
            target=dest/'games-cartas/demo/game.png'
            self.assertEqual(target.read_bytes(),PNG)
            self.assertEqual(restore(src,dest)['already_present'],1)
            target.write_bytes(b'changed by user')
            self.assertEqual(restore(src,dest)['existing_different'],1)
            self.assertEqual(target.read_bytes(),b'changed by user')
            self.assertEqual(restore(src,dest,overwrite=True)['written'],1)
            self.assertEqual(target.read_bytes(),PNG)

if __name__ == '__main__':
    unittest.main(verbosity=2)
