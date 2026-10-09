"""Regression: accepted edits must survive immediate reload without an unload hook."""
import json
import os
import sys
import time
import unittest
import localhost as base
from playwright.sync_api import expect

ARTIFACTS = base.ARTIFACTS / 'autosave'
base.ARTIFACTS = ARTIFACTS
base.acceptance.ARTIFACTS = ARTIFACTS


class ImmediateSave(base.MakerLocalhost):
    def test_23_immediate_save_and_reload(self):
        for iteration in range(8):
            name = f'Edición inmediata {iteration}'
            saved = self.page.evaluate('''async (name) => {
                const {createStore} = await import('./src/storage.js');
                const field = document.querySelector('[data-field="site.name"]');
                field.value = name;
                field.dispatchEvent(new Event('input', {bubbles: true}));
                // Read in the same event turn, before timers or unload can help.
                return createStore(localStorage).read().value?.project.site.name ?? null;
            }''', name)
            self.assertEqual(saved, name, 'An accepted edit was still pending only in memory')
            self.page.reload()
            expect(self.frame().locator('.mk-brand')).to_contain_text(name)
            expect(self.page.get_by_label('Nombre de tu marca', exact=True)).to_have_value(name)


def main():
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    started = time.monotonic()
    result = unittest.TextTestRunner(verbosity=2).run(unittest.TestSuite([
        ImmediateSave('test_23_immediate_save_and_reload'),
    ]))
    report = {
        'commit': os.environ.get('GITHUB_SHA', 'local'),
        'browser': base.ENGINE,
        'browserVersion': getattr(ImmediateSave, 'browser_version', None),
        'baseUrl': base.BASE_URL, 'servedDirectory': 'dist',
        'deployment': False, 'securityAudit': False,
        'testsRun': result.testsRun, 'reloadCycles': 8,
        'failures': len(result.failures), 'errors': len(result.errors),
        'skipped': len(result.skipped), 'success': result.wasSuccessful(),
        'seconds': round(time.monotonic() - started, 2),
        'failureDetails': [{'test': str(test), 'traceback': error} for test, error in result.failures + result.errors],
    }
    (ARTIFACTS / 'summary.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print('MAKER_AUTOSAVE_RESULT ' + json.dumps({k: v for k, v in report.items() if k != 'failureDetails'}, ensure_ascii=False))
    return 0 if result.wasSuccessful() else 1


if __name__ == '__main__':
    sys.exit(main())
