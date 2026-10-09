"""Exercise the compiled dist/ on loopback only; never deploy a public site.

The original acceptance scenarios stay in browser.py. This runner adds browser
selection, real HTTP readiness, request/error checks and per-combination evidence.
"""
import json
import os
from pathlib import Path
import subprocess
import sys
import time
import unittest
from urllib.error import URLError
from urllib.parse import urlsplit
from urllib.request import urlopen

import browser as acceptance
from playwright.sync_api import expect, sync_playwright

ROOT = Path(__file__).resolve().parents[1]
ENGINE = os.environ.get('BROWSER', 'chromium')
if ENGINE not in ('chromium', 'firefox'):
    raise SystemExit('BROWSER must be chromium or firefox')
ARTIFACTS = ROOT / 'artifacts' / ENGINE
acceptance.ARTIFACTS = ARTIFACTS
BASE_URL = 'http://127.0.0.1:4173'
CHECKED_VIEWS = []
MATERIAL_LABELS = {'flat': 'Plano', 'glass': 'Glass', 'metal': 'Metal'}


class MakerLocalhost(acceptance.MakerBrowser):
    @classmethod
    def setUpClass(cls):
        if not (ROOT / 'dist' / 'index.html').is_file():
            raise RuntimeError('Missing dist/index.html. Run npm run build first.')
        ARTIFACTS.mkdir(parents=True, exist_ok=True)
        cls.server_log = (ARTIFACTS / 'server.log').open('w', encoding='utf-8')
        cls.addClassCleanup(cls.server_log.close)
        env = dict(os.environ, SERVE_DIR=str(ROOT / 'dist'), PORT='4173')
        cls.server = subprocess.Popen(
            ['node', 'scripts/serve.mjs'], cwd=ROOT, env=env,
            stdout=cls.server_log, stderr=subprocess.STDOUT,
        )
        cls.addClassCleanup(cls.stop_server)
        deadline = time.monotonic() + 15
        while True:
            if cls.server.poll() is not None:
                raise RuntimeError('Local server exited; inspect server.log')
            try:
                with urlopen(BASE_URL + '/', timeout=1) as response:
                    if response.status == 200:
                        break
            except (URLError, TimeoutError):
                pass
            if time.monotonic() >= deadline:
                raise RuntimeError('Local server did not become ready; inspect server.log')
            time.sleep(0.1)
        cls.pw = sync_playwright().start()
        cls.addClassCleanup(cls.pw.stop)
        options = {'headless': True}
        if ENGINE == 'chromium' and os.environ.get('CHROMIUM_PATH'):
            options['executable_path'] = os.environ['CHROMIUM_PATH']
        cls.browser = getattr(cls.pw, ENGINE).launch(**options)
        cls.addClassCleanup(cls.browser.close)
        cls.browser_version = cls.browser.version
        print(f'LOCALHOST: {ENGINE} {cls.browser_version}; serving {ROOT / "dist"} at {BASE_URL}', flush=True)

    @classmethod
    def stop_server(cls):
        if cls.server.poll() is None:
            cls.server.terminate()
            try:
                cls.server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                cls.server.kill()
                cls.server.wait(timeout=5)

    @classmethod
    def tearDownClass(cls):
        # Class cleanups also run after a partially failed setUpClass.
        pass

    def setUp(self):
        self.errors = []
        self.http_errors = []
        self.external_requests = []
        self.context = self.browser.new_context(
            viewport={'width': 1440, 'height': 1000}, accept_downloads=True,
            service_workers='block',
        )
        self.addCleanup(self.context.close)
        self.context.tracing.start(screenshots=True, snapshots=True, sources=True)
        self.addCleanup(self.save_trace)
        self.context.route('**/*', self.guard_request)
        self.context.on('page', self.observe_page)
        self.page = self.context.new_page()
        self.page.goto(BASE_URL + '/')
        expect(self.page.get_by_role('heading', name='Dale tu identidad')).to_be_visible()

    def observe_page(self, page):
        page.on('pageerror', lambda error: self.errors.append(str(error)))
        page.on('response', self.observe_response)

    def observe_response(self, response):
        if response.status >= 400:
            self.http_errors.append(f'{response.status} {response.url}')

    def guard_request(self, route):
        parsed = urlsplit(route.request.url)
        local_http = parsed.scheme == 'http' and parsed.netloc == '127.0.0.1:4173'
        if local_http or parsed.scheme in ('about', 'data', 'blob', 'file'):
            route.continue_()
        else:
            self.external_requests.append(route.request.url)
            route.abort('blockedbyclient')

    def save_trace(self):
        self.context.tracing.stop(path=str(ARTIFACTS / (self._testMethodName + '.zip')))

    def tearDown(self):
        # Capture the actual last screen even when a scenario fails.
        try:
            if not self.page.is_closed():
                self.page.screenshot(
                    path=str(ARTIFACTS / (self._testMethodName + '.png')),
                    full_page=True, animations='disabled', timeout=10000,
                )
        finally:
            (ARTIFACTS / (self._testMethodName + '.json')).write_text(json.dumps({
                'browser': ENGINE, 'url': BASE_URL,
                'pageErrors': self.errors, 'httpErrors': self.http_errors,
                'blockedExternalRequests': self.external_requests,
            }, ensure_ascii=False, indent=2), encoding='utf-8')
        self.assertEqual(self.errors, [], 'Uncaught browser errors')
        self.assertEqual(self.http_errors, [], 'Failed HTTP responses')
        self.assertEqual(self.external_requests, [], 'The demo attempted an external request')

    def test_04_all_materials_and_mobile(self):
        catalog = json.loads((ROOT / 'dist' / 'templates' / 'catalog.json').read_text(encoding='utf-8'))
        self.page.get_by_role('button', name='Estilo', exact=True).click()
        for device in ('desktop', 'mobile'):
            if device == 'mobile':
                self.page.get_by_role('button', name='Celular', exact=True).click()
                expect(self.page.locator('#site-preview')).to_have_attribute('data-device', 'mobile')
            for template in catalog['templates']:
                self.page.get_by_role('button', name=template['name'], exact=True).click()
                for material in template['materials']:
                    with self.subTest(device=device, template=template['id'], material=material):
                        self.page.get_by_role('button', name=MATERIAL_LABELS[material], exact=True).click()
                        site = self.frame().locator('.mk-site')
                        expect(site).to_have_attribute('data-layout', template['layout'])
                        expect(site).to_have_attribute('data-material', material)
                        expect(self.frame().locator('h1')).to_be_visible()
                        expect(self.frame().locator('.mk-brand')).to_contain_text('NOVA CLUB')
                        self.assertTrue(self.frame().locator('html').evaluate(
                            '(el) => el.scrollWidth <= el.clientWidth + 1'
                        ), 'The site must not overflow horizontally')
                        image = f'{template["id"]}-{material}-{device}.png'
                        self.page.locator('#site-preview').screenshot(
                            path=str(ARTIFACTS / image), animations='disabled',
                        )
                        CHECKED_VIEWS.append({
                            'template': template['id'], 'material': material,
                            'device': device, 'screenshot': image,
                        })
        self.page.get_by_role('button', name='Glass', exact=True).click()
        self.page.set_viewport_size({'width': 390, 'height': 844})
        self.assertTrue(self.page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'))
        self.page.screenshot(path=str(ARTIFACTS / 'editor-phone.png'), full_page=True, animations='disabled')


def main():
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    suite = unittest.defaultTestLoader.loadTestsFromTestCase(MakerLocalhost)
    started = time.monotonic()
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    report = {
        'commit': os.environ.get('GITHUB_SHA', 'local'),
        'browser': ENGINE, 'browserVersion': getattr(MakerLocalhost, 'browser_version', None),
        'baseUrl': BASE_URL, 'servedDirectory': 'dist', 'deployment': False,
        'testsRun': result.testsRun, 'failures': len(result.failures),
        'errors': len(result.errors), 'skipped': len(result.skipped),
        'success': result.wasSuccessful(),
        'seconds': round(time.monotonic() - started, 2),
        'checkedViews': CHECKED_VIEWS,
        'failureDetails': [{'test': str(test), 'traceback': error} for test, error in result.failures + result.errors],
    }
    (ARTIFACTS / 'summary.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print('MAKER_LOCAL_RESULT ' + json.dumps({k: v for k, v in report.items() if k not in ('checkedViews', 'failureDetails')}, ensure_ascii=False))
    print(f'CHECKED_VIEWS {len(CHECKED_VIEWS)}')
    summary = os.environ.get('GITHUB_STEP_SUMMARY')
    if summary:
        with open(summary, 'a', encoding='utf-8') as stream:
            stream.write(f'## Maker on localhost — {ENGINE}\n\n')
            stream.write(f'Built `dist/` at `{BASE_URL}`. No public deployment.\n\n')
            stream.write(f'Tests: {result.testsRun}; failures: {len(result.failures)}; errors: {len(result.errors)}; checked template/style/device views: {len(CHECKED_VIEWS)}.\n\n')
            stream.write(f'Screenshots, traces, server log and JSON report: `maker-browser-evidence-{ENGINE}`.\n')
    return 0 if result.wasSuccessful() else 1


if __name__ == '__main__':
    sys.exit(main())
