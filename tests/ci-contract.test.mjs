import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const workflows = resolve(root, '.github/workflows');

test('first-stage CI cannot publish a website or request deployment permissions', () => {
  assert.equal(existsSync(resolve(workflows, 'pages.yml')), false, 'Remove the Pages deployment workflow');
  for (const file of readdirSync(workflows).filter(name => /\.ya?ml$/.test(name))) {
    const text = readFileSync(resolve(workflows, file), 'utf8');
    assert.doesNotMatch(text, /actions\/(?:configure-pages|deploy-pages|upload-pages-artifact)|cloudflare\/wrangler-action/);
    assert.doesNotMatch(text, /(?:pages|id-token):\s*write|permissions:\s*write-all/);
  }
});

test('CI runs built-site acceptance in Chromium and Firefox and retains evidence', () => {
  const text = readFileSync(resolve(workflows, 'ci.yml'), 'utf8');
  assert.match(text, /browser:\s*\[chromium, firefox\]/);
  assert.match(text, /fail-fast:\s*false/);
  assert.match(text, /python tests\/localhost\.py/);
  assert.match(text, /maker-browser-evidence-\$\{\{ matrix\.browser \}\}/);
  assert.match(text, /maker-static-site/);
  assert.match(text, /contents:\s*read/);
});

test('localhost acceptance suite is present and cannot rely on Pages', () => {
  const path = resolve(root, 'tests/localhost.py');
  assert.equal(existsSync(path), true, 'Add the built-site localhost test harness');
  const text = readFileSync(path, 'utf8');
  assert.match(text, /SERVE_DIR/);
  assert.match(text, /ROOT\s*\/\s*["']dist["']/);
  assert.match(text, /127\.0\.0\.1/);
  assert.doesNotMatch(text, /github\.io/);
});
