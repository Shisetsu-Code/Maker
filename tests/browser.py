"""Faithfulness smoke tests: localhost only, no live services, no GitHub Pages."""
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
from urllib.request import urlopen
from urllib.parse import urlsplit
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
        self.http_errors={}
        self.page.on('pageerror',lambda error:self.console_errors.append(str(error)))
        def record_response(response):
            if response.status < 400: return
            url=urlsplit(response.url)
            if url.hostname not in ('127.0.0.1','localhost'): return
            key=f'{response.status} {url.path}'
            self.http_errors[key]=self.http_errors.get(key,0)+1
        self.page.on('response', record_response)
        self.page.goto(BASE+'/muestra/socio.html',wait_until='commit', timeout=8000)
        expect(self.page.locator('#seg-plantilla button[role="radio"]')).to_have_count(4,timeout=12000)
        # The original onboarding tour intercepts clicks until it is dismissed.
        skip = self.page.locator('#socio-tour .socio-tour-saltar')
        expect(skip).to_be_visible(timeout=8000)
        skip.click()
        expect(self.page.locator('#socio-tour')).to_be_hidden(timeout=5000)
    def tearDown(self):
        self.page.screenshot(path=str(ART/(self._testMethodName+'.png')),full_page=True,animations='disabled')
        (ART/(self._testMethodName+'.json')).write_text(json.dumps({'title':self.page.title(),'errors':self.console_errors,'http_errors':self.http_errors},ensure_ascii=False,indent=2,sort_keys=True),encoding='utf-8')
    def test_01_editor_is_the_original(self):
        expect(self.page.locator('#seg-vista [data-valor="lobby"]')).to_be_visible()
        expect(self.page.locator('#seg-disp [data-valor="celular"]')).to_be_visible()
        self.assertEqual(self.page.title(),'Demo de tu casino')
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
            # JS-ready can precede the actual visual render (the classic splash).
            # Wait for a settled screenshot and record how many images really decode.
            self.page.wait_for_timeout(2500)
            metrics = active.locator('iframe').evaluate("""el => {
                const doc=el.contentDocument;
                const imgs=Array.from(doc.querySelectorAll('img'));
                return {
                    title: doc.title,
                    text_length: (doc.body?.innerText||'').length,
                    image_total: imgs.length,
                    image_decoded: imgs.filter(x=>x.complete&&x.naturalWidth>0).length,
                    image_broken: imgs.filter(x=>x.complete&&x.naturalWidth===0).length,
                    image_pending: imgs.filter(x=>!x.complete).length,
                };
            }""")
            (ART/f'template-{template}.json').write_text(json.dumps(metrics,ensure_ascii=False,indent=2),encoding='utf-8')
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

    def test_06_every_editor_drawer_opens_and_returns(self):
        for option in ('p', 'b', 'f', 't', 's', 'im', 'n'):
            entry = self.page.locator(f'#filas [data-abrir="{option}"]')
            expect(entry).to_be_visible()
            entry.click()
            expect(self.page.locator('#pistas')).to_have_attribute('data-en', 'detalle', timeout=6000)
            detail = self.page.locator(f'#pista-detalle section[data-detalle="{option}"]')
            expect(detail).to_be_visible(timeout=6000)
            self.assertGreater(len(detail.inner_text().strip()), 30, f'{option} detail was empty')
            detail.locator('button.volver').click()
            expect(self.page.locator('#pistas')).to_have_attribute('data-en', 'lista', timeout=6000)

    def test_07_color_change_reset_and_undo(self):
        code = self.page.locator('#codigo-actual')
        before = code.inner_text()
        self.assertTrue(before.startswith('v=1&'))
        self.page.locator('#filas [data-abrir="p"]').click()
        picker = self.page.locator('#color-p')
        expect(picker).to_have_count(1)
        picker.evaluate("""el => {
            el.value='#00cc88';
            el.dispatchEvent(new Event('input', {bubbles:true}));
            el.dispatchEvent(new Event('change', {bubbles:true}));
        }""")
        expect(code).not_to_have_text(before, timeout=6000)
        modified = code.inner_text()
        self.assertIn('00cc88', modified.lower())
        self.page.locator('#btn-restablecer').click()
        expect(code).to_have_text(before, timeout=6000)
        undo = self.page.locator('#btn-deshacer')
        expect(undo).to_be_visible(timeout=3000)
        undo.click()
        expect(code).to_have_text(modified, timeout=6000)

    def test_08_invalid_import_is_rejected(self):
        self.page.locator('#pegar-codigo').fill('invalid-data')
        self.page.locator('#btn-aplicar-codigo').click()
        expect(self.page.locator('#pegar-codigo')).to_have_attribute('aria-invalid', 'true')
        expect(self.page.locator('#aviso-pegar-codigo')).to_contain_text('Ese código no sirve')

    def test_09_export_contains_selected_original_template(self):
        button = self.page.locator('#btn-bajar-diseno')
        expect(button).to_be_visible(timeout=10000)
        self.page.wait_for_timeout(1200)
        with self.page.expect_download(timeout=15000) as handle:
            button.click()
        download = handle.value
        target = ART / 'maker-export.json'
        download.save_as(str(target))
        data = json.loads(target.read_text(encoding='utf-8'))
        self.assertEqual(data.get('formato'), 'rushybet-diseno-1')
        self.assertEqual(data.get('plantilla'), 'clasica')
        self.assertIn('codigoMarca', data)
        self.assertIn('perillas', data)

if __name__ == '__main__':unittest.main(verbosity=2)
