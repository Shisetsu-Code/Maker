"""End-to-end acceptance tests. Same suite runs locally and in GitHub Actions."""
import json, os, pathlib, subprocess, time, unittest
from playwright.sync_api import sync_playwright, expect
ROOT = pathlib.Path(__file__).resolve().parents[1]
ARTIFACTS = ROOT / 'artifacts'

class MakerBrowser(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        ARTIFACTS.mkdir(exist_ok=True)
        cls.server = subprocess.Popen(['node','scripts/serve.mjs'],cwd=ROOT,stdout=subprocess.DEVNULL)
        cls.pw = sync_playwright().start()
        options = {'headless': True}
        if os.getenv('CHROMIUM_PATH'): options['executable_path'] = os.environ['CHROMIUM_PATH']
        cls.browser = cls.pw.chromium.launch(**options)
        time.sleep(.4)
    @classmethod
    def tearDownClass(cls):
        cls.browser.close(); cls.pw.stop(); cls.server.terminate(); cls.server.wait(timeout=5)
    def setUp(self):
        self.context = self.browser.new_context(viewport={'width':1440,'height':1000},accept_downloads=True)
        self.context.tracing.start(screenshots=True,snapshots=True)
        self.page = self.context.new_page(); self.errors=[]
        self.page.on('pageerror', lambda error:self.errors.append(str(error)))
        self.page.goto('http://127.0.0.1:4173/Maker/')
        expect(self.page.get_by_role('heading',name='Dale tu identidad')).to_be_visible()
    def tearDown(self):
        self.context.tracing.stop(path=str(ARTIFACTS/(self._testMethodName+'.zip')))
        self.context.close()
    def frame(self): return self.page.frame_locator('#site-preview')
    def test_01_editor_roundtrip(self):
        name=self.page.get_by_label('Nombre de tu marca',exact=True); name.fill('Nahuel Studio'); name.press('Tab')
        expect(self.frame().locator('.mk-brand')).to_contain_text('Nahuel Studio')
        self.page.get_by_role('button',name='Estilo',exact=True).click()
        self.page.get_by_role('button',name='Glass',exact=True).click()
        expect(self.frame().locator('.mk-site')).to_have_attribute('data-material','glass')
        self.page.get_by_role('button',name='Prisma',exact=True).click()
        expect(self.frame().locator('.mk-site')).to_have_attribute('data-layout','sidebar')
        expect(self.frame().locator('.mk-brand')).to_contain_text('Nahuel Studio')
        self.page.reload(); expect(self.frame().locator('.mk-brand')).to_contain_text('Nahuel Studio')
        self.assertFalse(self.errors)
    def test_02_template_import_and_export(self):
        self.page.get_by_role('button',name='Gestionar plantillas',exact=True).click()
        self.page.locator('#template-upload').set_input_files(str(ROOT/'templates/aurora.template.json'))
        expect(self.page.locator('#manager').get_by_role('heading',name='Aurora',exact=True)).to_be_visible()
        self.page.get_by_role('button',name='Usar Aurora',exact=True).click()
        expect(self.frame().locator('.mk-site')).to_have_attribute('data-layout','editorial')
        with self.page.expect_download() as download:
            self.page.get_by_role('button',name='Exportar HTML',exact=True).click()
        path=ARTIFACTS/'site-export.html';download.value.save_as(str(path))
        content=path.read_text();self.assertIn('<!doctype html>',content);self.assertNotIn('<script',content)
        exported=self.context.new_page();exported.goto(path.as_uri());expect(exported.locator('.mk-brand')).to_contain_text('NOVA CLUB');exported.close()
    def test_03_reject_executable_template(self):
        self.page.get_by_role('button',name='Gestionar plantillas',exact=True).click()
        template=json.loads((ROOT/'templates/aurora.template.json').read_text());template['script']='alert(1)'
        self.page.locator('#template-upload').set_input_files({'name':'bad.json','mimeType':'application/json','buffer':json.dumps(template).encode()})
        expect(self.page.get_by_role('alert')).to_contain_text('campo no permitido')
        expect(self.page.get_by_text('Aurora',exact=True)).to_have_count(0)
    def test_04_all_materials_and_mobile(self):
        for template in ['Órbita','Prisma','Atlas','Vértice']:
            self.page.get_by_role('button',name=template,exact=True).click()
            self.page.get_by_role('button',name='Estilo',exact=True).click()
            for material in ['Plano','Glass','Metal']:
                self.page.get_by_role('button',name=material,exact=True).click()
                expect(self.frame().locator('h1')).to_be_visible()
        self.page.get_by_role('button',name='Órbita',exact=True).click()
        self.page.get_by_role('button',name='Glass',exact=True).click()
        self.page.screenshot(path=str(ARTIFACTS/'editor-desktop.png'),full_page=True)
        self.page.get_by_role('button',name='Celular',exact=True).click()
        expect(self.page.locator('#site-preview')).to_have_attribute('data-device','mobile')
        self.page.screenshot(path=str(ARTIFACTS/'editor-mobile-preview.png'),full_page=True)
        self.page.set_viewport_size({'width':390,'height':844})
        self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'))
        self.page.screenshot(path=str(ARTIFACTS/'editor-phone.png'),full_page=True)
        self.assertFalse(self.errors)
    def test_05_project_and_share(self):
        self.page.get_by_label('Nombre de tu marca',exact=True).fill('Marca ñ')
        self.page.get_by_label('Nombre de tu marca',exact=True).press('Tab')
        with self.page.expect_download() as download:
            self.page.get_by_role('button',name='Descargar proyecto',exact=True).click()
        path=ARTIFACTS/'project.json';download.value.save_as(str(path))
        project=json.loads(path.read_text());self.assertEqual(project['site']['name'],'Marca ñ')
        self.page.get_by_role('button',name='Compartir diseño',exact=True).click()
        expect(self.page.get_by_label('Enlace del diseño',exact=True)).to_be_visible()
        url=self.page.get_by_label('Enlace del diseño',exact=True).input_value()
        clean=self.browser.new_context();other=clean.new_page();other.goto(url)
        expect(other.frame_locator('#site-preview').locator('.mk-brand')).to_contain_text('Marca ñ');clean.close()
    def test_06_admin_duplicate_archive(self):
        self.page.get_by_role('button',name='Gestionar plantillas',exact=True).click()
        self.page.get_by_role('button',name='Duplicar Órbita',exact=True).click()
        expect(self.page.get_by_label('Nombre de plantilla',exact=True)).to_be_visible()
        self.page.get_by_label('Nombre de plantilla',exact=True).fill('Mi nueva plantilla')
        self.page.get_by_role('button',name='Guardar plantilla',exact=True).click()
        expect(self.page.get_by_role('button',name='Usar Mi nueva plantilla',exact=True)).to_be_visible()
        self.page.get_by_role('button',name='Archivar Mi nueva plantilla',exact=True).click()
        expect(self.page.get_by_role('button',name='Restaurar Mi nueva plantilla',exact=True)).to_be_visible()
        self.page.get_by_role('button',name='Restaurar Mi nueva plantilla',exact=True).click()
        expect(self.page.get_by_role('button',name='Archivar Mi nueva plantilla',exact=True)).to_be_visible()
        self.page.screenshot(path=str(ARTIFACTS/'template-manager.png'),full_page=True)

    def test_07_logo_and_project_import(self):
        import base64
        png=self.page.evaluate("""() => { const c=document.createElement('canvas');c.width=96;c.height=96;const x=c.getContext('2d');x.fillStyle='#ff8252';x.fillRect(0,0,96,96);return c.toDataURL('image/png').split(',')[1]; }""")
        self.page.locator('#logo-upload').set_input_files({'name':'logo.png','mimeType':'image/png','buffer':base64.b64decode(png)})
        expect(self.frame().locator('.mk-brand img')).to_be_visible()
        with self.page.expect_download() as download:
            self.page.get_by_role('button',name='Descargar proyecto',exact=True).click()
        path=ARTIFACTS/'project-with-logo.json';download.value.save_as(str(path))
        saved=json.loads(path.read_text());self.assertTrue(saved['site']['logo'].startswith('data:image/'))
        self.page.get_by_role('button',name='Quitar',exact=True).click()
        expect(self.frame().locator('.mk-brand img')).to_have_count(0)
        self.page.locator('#project-upload').set_input_files(str(path))
        expect(self.frame().locator('.mk-brand img')).to_be_visible()
        self.assertFalse(self.errors)

    def test_08_sections_history_and_escaped_content(self):
        self.page.get_by_role('button',name='Estructura',exact=True).click()
        self.page.get_by_label('Catálogo',exact=True).uncheck()
        expect(self.frame().locator('#mk-catalog')).to_have_count(0)
        self.page.get_by_role('button',name='Deshacer',exact=True).click()
        expect(self.frame().locator('#mk-catalog')).to_be_visible()
        self.page.get_by_role('button',name='Rehacer',exact=True).click()
        expect(self.frame().locator('#mk-catalog')).to_have_count(0)
        self.page.get_by_role('button',name='Subir Preguntas frecuentes',exact=True).click()
        expect(self.frame().locator('.mk-main > section').nth(2)).to_have_attribute('id','mk-faq')
        ids=self.frame().locator('.mk-main > section').evaluate_all('(els)=>els.map(el=>el.id)')
        self.assertLess(ids.index('mk-faq'),ids.index('mk-features'))
        self.page.get_by_role('button',name='Marca',exact=True).click()
        self.page.get_by_label('Nombre de tu marca',exact=True).fill('<img src=x onerror=alert(1)>')
        expect(self.frame().locator('.mk-brand')).to_contain_text('<img src=x onerror=alert(1)>')
        expect(self.frame().locator('.mk-brand img')).to_have_count(0)
        self.assertFalse(self.errors)

if __name__=='__main__': unittest.main(verbosity=2)
