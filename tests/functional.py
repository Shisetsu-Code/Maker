"""Customer journeys against compiled Maker on localhost. No deployment or security scan."""
import base64
import json
import os
import sys
import time
import unittest
import localhost as base
from playwright.sync_api import expect

ARTIFACTS = base.ARTIFACTS / 'functional'
base.ARTIFACTS = ARTIFACTS
base.acceptance.ARTIFACTS = ARTIFACTS


class CustomerFlows(base.MakerLocalhost):
    def setUp(self):
        super().setUp()
        self.context.set_default_timeout(10000)

    def tab(self, name):
        self.page.get_by_role('button', name=name, exact=True).click()

    def fill(self, label, value):
        control = self.page.get_by_label(label, exact=True)
        control.fill(value)
        control.press('Tab')

    def read_project(self):
        with self.page.expect_download() as pending:
            self.tab('Descargar proyecto')
        path = ARTIFACTS / (self._testMethodName + '-project.json')
        pending.value.save_as(str(path))
        return json.loads(path.read_text(encoding='utf-8'))

    def upload_template(self, template, name='customer-template.json'):
        self.page.locator('#template-upload').set_input_files({
            'name': name, 'mimeType': 'application/json',
            'buffer': json.dumps(template, ensure_ascii=False).encode('utf-8'),
        })

    def template(self):
        return json.loads((base.ROOT / 'templates' / 'aurora.template.json').read_text(encoding='utf-8'))

    def png(self):
        encoded = self.page.evaluate('''() => {
          const c=document.createElement('canvas'); c.width=240; c.height=120;
          const x=c.getContext('2d'); x.fillStyle='#487aff'; x.fillRect(0,0,240,120);
          x.fillStyle='#fff'; x.fillRect(30,30,180,60);
          return c.toDataURL('image/png').split(',')[1];
        }''')
        return {'name': 'customer.png', 'mimeType': 'image/png', 'buffer': base64.b64decode(encoded)}

    def test_09_shared_copy_survives_reload_and_edits(self):
        self.fill('Nombre de tu marca', 'Diseño recibido')
        self.tab('Compartir diseño')
        url = self.page.get_by_label('Enlace del diseño', exact=True).input_value()
        receiver = self.browser.new_context(viewport={'width': 1440, 'height': 1000})
        self.addCleanup(receiver.close)
        receiver.set_default_timeout(10000)
        receiver.tracing.start(screenshots=True, snapshots=True)
        self.addCleanup(lambda: receiver.tracing.stop(path=str(ARTIFACTS / 'share-recipient.zip')))
        receiver.route('**/*', self.guard_request)
        receiver.on('page', self.observe_page)
        self.page = receiver.new_page()
        self.page.goto(url)
        expect(self.frame().locator('.mk-brand')).to_contain_text('Diseño recibido')
        self.page.reload()
        expect(self.frame().locator('.mk-brand')).to_contain_text('Diseño recibido')
        self.fill('Nombre de tu marca', 'Mi copia editada')
        expect(self.page.locator('#save-state')).to_have_text('Guardado en este navegador')
        self.page.reload()
        expect(self.frame().locator('.mk-brand')).to_contain_text('Mi copia editada')
        self.page.reload()
        expect(self.frame().locator('.mk-brand')).to_contain_text('Mi copia editada')

    def test_10_expanded_preview_escape_and_reopen(self):
        self.tab('Ampliar vista previa')
        expect(self.page.locator('#preview-wrap')).to_have_class('preview-wrap expanded')
        self.page.keyboard.press('Escape')
        expect(self.page.locator('#preview-wrap')).to_have_class('preview-wrap')
        expect(self.page.get_by_role('button', name='Ampliar vista previa', exact=True)).to_be_visible()
        self.tab('Ampliar vista previa')
        self.tab('Salir de vista ampliada')
        expect(self.page.locator('#preview-wrap')).to_have_class('preview-wrap')

    def test_11_color_picker_updates_contrast_and_palette_selection(self):
        color = self.page.get_by_label('Color principal', exact=True)
        color.evaluate("el => {el.value='#ffffff';el.dispatchEvent(new Event('input',{bubbles:true}));}")
        expected = self.page.evaluate("async () => {const m=await import('./src/core.js');return m.contrast('#ffffff',m.ink('#ffffff')).toFixed(1);}")
        expect(self.page.locator('.contrast-badge')).to_contain_text('Contraste ' + expected + ':1')
        expect(self.page.get_by_role('button', name='Paleta Mandarina', exact=True)).to_have_attribute('aria-pressed', 'false')
        color.evaluate("el => {el.value='#9878ff';el.dispatchEvent(new Event('input',{bubbles:true}));}")
        expect(self.page.get_by_role('button', name='Paleta Violeta', exact=True)).to_have_attribute('aria-pressed', 'true')
        self.assertEqual(self.read_project()['theme']['accent'], '#9878ff')

    def test_12_content_is_preserved_across_every_layout_and_material(self):
        self.fill('Nombre de tu marca', 'Ñandú Studio')
        self.tab('Contenido')
        fields = {'Antetítulo': 'Hecho para vos', 'Título principal': 'Tu marca.\nTu lugar.', 'Descripción': 'Un diseño propio con acentos: á, é, í, ó, ú.', 'Texto del botón': 'Ver nuestras colecciones', 'Categorías': 'Nuestros universos', 'Catálogo': 'Selección nueva', 'Destacados': 'Lo que nos diferencia', 'Preguntas frecuentes': 'Tus preguntas'}
        for label, value in fields.items():
            self.fill(label, value)
        original = self.read_project()['site']
        self.tab('Estilo')
        for template in ['Órbita', 'Prisma', 'Atlas', 'Vértice']:
            self.tab(template)
            for material in ['Plano', 'Glass', 'Metal']:
                self.tab(material)
                expect(self.frame().locator('h1')).to_contain_text('Tu marca.')
                expect(self.frame().locator('#mk-catalog h2')).to_have_text('Selección nueva')
        self.assertEqual(self.read_project()['site'], original)
        self.page.reload()
        self.assertEqual(self.read_project()['site'], original)

    def test_13_cover_image_export_and_undo(self):
        self.tab('Contenido')
        self.page.locator('[data-image="heroImage"]').set_input_files(self.png())
        image = self.frame().locator('.mk-hero-art img')
        expect(image).to_be_visible()
        self.assertTrue(image.evaluate('el => el.complete && el.naturalWidth > 0'))
        self.tab('Quitar imagen de portada')
        expect(self.frame().locator('.mk-hero-art img')).to_have_count(0)
        self.tab('Deshacer')
        expect(self.frame().locator('.mk-hero-art img')).to_be_visible()
        self.assertTrue(self.read_project()['site']['heroImage'].startswith('data:image/'))
        with self.page.expect_download() as pending:
            self.tab('Exportar HTML')
        path = ARTIFACTS / 'customer-cover-export.html'
        pending.value.save_as(str(path))
        exported = self.context.new_page()
        exported.goto(path.as_uri())
        expect(exported.locator('.mk-hero-art img')).to_be_visible()
        self.assertTrue(exported.locator('.mk-hero-art img').evaluate('el => el.complete && el.naturalWidth > 0'))
        exported.screenshot(path=str(ARTIFACTS / 'customer-export.png'), full_page=True, animations='disabled')
        exported.close()

    def test_14_catalog_conflict_is_atomic(self):
        self.tab('Gestionar plantillas')
        template = self.template()
        conflict = json.loads((base.ROOT / 'templates' / 'catalog.json').read_text(encoding='utf-8'))['templates'][0]
        conflict['description'] = 'Otra descripción, pero la misma versión'
        self.upload_template({'format': 'maker-catalog-1', 'templates': [template, conflict]})
        expect(self.page.get_by_role('alert')).to_contain_text('ya existe con otro contenido')
        expect(self.page.get_by_role('button', name='Usar Aurora', exact=True)).to_have_count(0)
        self.upload_template(template, 'valid-after-error.json')
        expect(self.page.get_by_role('button', name='Usar Aurora', exact=True)).to_be_visible()

    def test_15_current_template_can_be_archived_without_losing_project(self):
        self.fill('Nombre de tu marca', 'Proyecto conservado')
        self.tab('Gestionar plantillas')
        self.tab('Archivar Órbita')
        self.tab('Crear mi web')
        expect(self.frame().locator('.mk-brand')).to_contain_text('Proyecto conservado')
        self.page.reload()
        expect(self.frame().locator('.mk-brand')).to_contain_text('Proyecto conservado')
        self.tab('Gestionar plantillas')
        expect(self.page.get_by_role('button', name='Restaurar Órbita', exact=True)).to_be_visible()
        self.tab('Restaurar Órbita')
        expect(self.page.get_by_role('button', name='Archivar Órbita', exact=True)).to_be_visible()

    def test_16_duplicate_template_changes_real_composition(self):
        self.fill('Nombre de tu marca', 'Mi marca intacta')
        self.tab('Gestionar plantillas')
        self.tab('Duplicar Órbita')
        dialog = self.page.locator('#template-dialog')
        dialog.get_by_label('Nombre de plantilla', exact=True).fill('Boreal')
        dialog.get_by_label('Identificador', exact=True).fill('boreal')
        dialog.get_by_label('Distribución', exact=True).select_option('compact')
        dialog.get_by_label('Tipo de portada', exact=True).select_option('banner')
        dialog.get_by_label('Columnas de catálogo', exact=True).fill('6')
        for label in ['Categorías', 'Catálogo', 'Destacados']:
            dialog.get_by_label(label, exact=True).uncheck()
        self.tab('Guardar plantilla')
        self.tab('Usar Boreal')
        expect(self.frame().locator('.mk-site')).to_have_attribute('data-layout', 'compact')
        expect(self.frame().locator('.mk-hero-banner')).to_be_visible()
        expect(self.frame().locator('.mk-main > section')).to_have_count(2)
        expect(self.frame().locator('#mk-catalog')).to_have_count(0)
        expect(self.frame().locator('.mk-brand')).to_contain_text('Mi marca intacta')
        self.assertEqual(self.read_project()['template']['columns'], 6)

    def test_17_customer_edits_on_a_phone(self):
        self.page.set_viewport_size({'width': 390, 'height': 844})
        self.fill('Nombre de tu marca', 'Desde el celular')
        self.tab('Estilo')
        self.tab('Glass')
        self.page.get_by_label('Tipografía', exact=True).select_option('serif')
        self.tab('Contenido')
        self.fill('Título principal', 'Diseñado en mi teléfono')
        self.tab('Gestionar plantillas')
        self.upload_template(self.template())
        self.tab('Usar Aurora')
        expect(self.frame().locator('h1')).to_have_text('Diseñado en mi teléfono')
        expect(self.frame().locator('.mk-site')).to_have_attribute('data-material', 'glass')
        self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'))
        self.assertTrue(self.frame().locator('html').evaluate('(el) => el.scrollWidth <= el.clientWidth + 1'))
        self.page.screenshot(path=str(ARTIFACTS / 'customer-phone.png'), full_page=True, animations='disabled')
        self.page.reload()
        expect(self.frame().locator('.mk-brand')).to_contain_text('Desde el celular')

    def test_18_preview_navigation_and_faq_do_not_replace_the_site(self):
        self.frame().locator('.mk-hero .mk-primary').click()
        expect(self.frame().locator('#mk-catalog')).to_be_visible()
        expect(self.frame().locator('.mk-site')).to_have_count(1)
        self.assertTrue(self.frame().locator('html').evaluate('el => el.scrollTop > 0 || el.ownerDocument.body.scrollTop > 0'))
        faq = self.frame().locator('#mk-faq details').first
        faq.locator('summary').click()
        expect(faq).to_have_attribute('open', '')
        expect(faq.locator('p')).to_be_visible()
        faq.locator('summary').click()
        self.assertIsNone(faq.get_attribute('open'))
        self.frame().locator('.mk-brand').click()
        expect(self.frame().locator('.mk-site')).to_have_count(1)

    def test_19_glass_sliders_and_font_survive_reload(self):
        self.tab('Estilo')
        self.tab('Glass')
        for label in ['Redondeado', 'Desenfoque', 'Opacidad del vidrio']:
            slider = self.page.get_by_label(label, exact=False)
            slider.focus()
            slider.press('End')
        self.page.get_by_label('Tipografía', exact=True).select_option('geometric')
        theme = self.read_project()['theme']
        self.assertEqual((theme['radius'], theme['blur'], theme['opacity'], theme['font']), (32, 24, 95, 'geometric'))
        self.page.reload()
        self.assertEqual(self.read_project()['theme'], theme)
        self.assertEqual(self.frame().locator('.mk-site').evaluate("el => el.style.getPropertyValue('--mk-blur')"), '24px')

    def test_20_invalid_field_recovers_without_losing_valid_content(self):
        self.fill('Nombre de tu marca', 'Nombre válido')
        self.page.get_by_label('Nombre de tu marca', exact=True).fill('')
        self.page.get_by_label('Nombre de tu marca', exact=True).press('Tab')
        expect(self.page.get_by_label('Nombre de tu marca', exact=True)).to_have_value('Nombre válido')
        expect(self.frame().locator('.mk-brand')).to_contain_text('Nombre válido')
        self.fill('Nombre de tu marca', 'Ya corregido')
        expect(self.frame().locator('.mk-brand')).to_contain_text('Ya corregido')
        self.assertEqual(self.read_project()['site']['name'], 'Ya corregido')

    def test_21_incompatible_material_has_visible_fallback(self):
        self.tab('Estilo')
        self.tab('Glass')
        self.tab('Gestionar plantillas')
        template = self.template()
        template.update(id='simple', name='Simple', materials=['flat'])
        self.upload_template(template)
        self.tab('Usar Simple')
        expect(self.frame().locator('.mk-site')).to_have_attribute('data-material', 'flat')
        expect(self.page.locator('#notice')).to_contain_text('no admite el material anterior')
        expect(self.page.get_by_role('button', name='Glass', exact=True)).to_have_count(0)

    def test_22_template_versions_coexist_and_catalog_roundtrips(self):
        self.tab('Gestionar plantillas')
        v1 = self.template()
        v2 = dict(v1, version='2.0.0', name='Aurora renovada', columns=6)
        self.upload_template({'format': 'maker-catalog-1', 'templates': [v1, v2]})
        expect(self.page.get_by_role('button', name='Usar Aurora', exact=True)).to_be_visible()
        expect(self.page.get_by_role('button', name='Usar Aurora renovada', exact=True)).to_be_visible()
        with self.page.expect_download() as pending:
            self.tab('Exportar catálogo')
        path = ARTIFACTS / 'customer-catalog.json'
        pending.value.save_as(str(path))
        data = json.loads(path.read_text(encoding='utf-8'))
        self.assertEqual(len(data['templates']), 6)
        self.upload_template(data, 'catalog-roundtrip.json')
        self.tab('Usar Aurora renovada')
        self.assertEqual(self.read_project()['template']['version'], '2.0.0')
        self.page.reload()
        self.assertEqual(self.read_project()['template']['version'], '2.0.0')


def main():
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    names = sorted(name for name in CustomerFlows.__dict__ if name.startswith('test_'))
    suite = unittest.TestSuite(CustomerFlows(name) for name in names)
    started = time.monotonic()
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    report = {
        'commit': os.environ.get('GITHUB_SHA', 'local'), 'browser': base.ENGINE,
        'browserVersion': getattr(CustomerFlows, 'browser_version', None),
        'scope': 'functional customer journeys only', 'baseUrl': base.BASE_URL,
        'servedDirectory': 'dist', 'deployment': False, 'securityAudit': False,
        'testsRun': result.testsRun, 'failures': len(result.failures),
        'errors': len(result.errors), 'skipped': len(result.skipped),
        'success': result.wasSuccessful(), 'seconds': round(time.monotonic()-started, 2),
        'scenarios': names,
        'failureDetails': [{'test': str(test), 'traceback': error} for test, error in result.failures + result.errors],
    }
    (ARTIFACTS / 'summary.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print('MAKER_CUSTOMER_RESULT ' + json.dumps({k: v for k, v in report.items() if k not in ('scenarios', 'failureDetails')}, ensure_ascii=False))
    if os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'], 'a', encoding='utf-8') as out:
            out.write(f'\n## Customer journeys — {base.ENGINE}\n\n{result.testsRun} tests; {len(result.failures)} failures; {len(result.errors)} errors. Localhost only. No security audit or deployment.\n')
    return 0 if result.wasSuccessful() else 1


if __name__ == '__main__':
    sys.exit(main())
