"""Faithfulness smoke tests: localhost only, no live services, no GitHub Pages."""
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
from urllib.request import urlopen
import os, time, json, subprocess, unittest

ROOT = Path(__file__).resolve().parents[1]
BROWSER = os.environ.get('BROWSER', 'chromium')
ART = ROOT / 'artifacts' / BROWSER
BASE = 'http://127.0.0.1:4173'

class OriginalMaker(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        ART.mkdir(parents=True, exist_ok=True)
        cls.proc = subprocess.Popen(['python', '-m', 'http.server', '4173', '--bind', '127.0.0.1', '--directory', str(ROOT)], stdout=(ART/'http.log').open('w'), stderr=subprocess.STDOUT)
        for i in range(80):
            try:
                with urlopen(BASE+'/muestra/socio.html', timeout=1) as resp:
                    if resp.status == 200: break
            except Exception:time.sleep(.2)
        else:raise RuntimeError('local server not ready')
        cls.pw = sync_playwright().start()
        cls.browser = getattr(cls.pw, BROWSER).launch(headless=True)
    @classmethod
    def tearDownClass(cls):
        cls.browser.close();cls.pw.stop();cls.proc.terminate();cls.proc.wait(timeout=5)
    def setUp(self):
        self.context = self.browser.new_context(viewport={'width':1440,'height':900},service_workers='block',accept_downloads=True)
        self.addCleanup(self.context.close)
        self.page = self.context.new_page()
        self.console_errors=[]
        self.page.on('pageerror',lambda error:self.console_errors.append(str(error)))
        self.page.goto(BASE+'/muestra/socio.html',wait_until='commit', timeout=8000)
        expect(self.page.locator('#seg-plantilla button[role="radio"]')).to_have_count(4,timeout=12000)
        # The original onboarding tour intercepts clicks until it is dismissed.
        skip = self.page.locator('#socio-tour .socio-tour-saltar')
        expect(skip).to_be_visible(timeout=8000)
        skip.click()
        expect(self.page.locator('#socio-tour')).to_be_hidden(timeout=5000)
    def tearDown(self):
        self.page.screenshot(path=str(ART/(self._testMethodName+'.png')),full_page=True,animations='disabled')
        (ART/(self._testMethodName+'.json')).write_text(json.dumps({'title':self.page.title(),'errors':self.console_errors},ensure_ascii=False,indent=2),encoding='utf-8')
    def test_01_editor_is_the_original(self):
        expect(self.page.locator('#seg-vista [data-valor="lobby"]')).to_be_visible()
        expect(self.page.locator('#seg-disp [data-valor="celular"]')).to_be_visible()
        self.assertIn('Maker',self.page.title())
        # Desktop drawer is always visible; the sheet handle exists only on mobile.
        expect(self.page.locator('#filas [data-abrir="p"]')).to_be_visible()
        self.assertEqual(self.page.locator('#seg-plantilla button').count(),4)
    def test_02_each_template_can_be_selected(self):
        for template in ('clasica','azul','blaze','brasa'):
            btn=self.page.locator(f'#seg-plantilla [data-valor="{template}"]')
            btn.click()
            expect(btn).to_have_attribute('aria-checked','true')
            # A selected tab alone is insufficient: assert the embedded template is actually ready.
            active = self.page.locator('#escena .marco[data-activo="true"]')
            expect(active).to_have_attribute('data-listo', 'true', timeout=20000)
            view_text = active.locator('iframe').evaluate('(el) => el.contentDocument?.body?.innerText || ""')
            self.assertGreater(len(view_text.strip()), 70, f'{template} is still empty')
            self.page.screenshot(path=str(ART/f'template-{template}.png'),animations='disabled')
    def test_03_panel_and_phone_switches(self):
        self.page.locator('#seg-vista [data-valor="panel"]').click()
        # The original demo shows another tour when switching to the panel.
        self.page.locator('#socio-tour .socio-tour-saltar').click(timeout=8000)
        expect(self.page.locator('#seg-vista [data-valor="panel"]')).to_have_attribute('aria-checked','true')
        self.page.locator('#seg-disp [data-valor="celular"]').click()
        expect(self.page.locator('#seg-disp [data-valor="celular"]')).to_have_attribute('aria-checked','true')
    def test_04_config_controls_exist(self):
        for key in ('p','b','f','t','s','im','n'):
            expect(self.page.locator(f'[data-abrir="{key}"]')).to_have_count(1)
    def test_05_external_endpoints_are_removed(self):
        from pathlib import Path
        src=(ROOT/'muestra'/'socio.js').read_text(encoding='utf-8')
        self.assertNotIn('rushyclub.com/api/demo/evento',src)
        self.assertTrue((ROOT/'muestra'/'maker-offline.js').is_file())
if __name__ == '__main__':unittest.main(verbosity=2)
