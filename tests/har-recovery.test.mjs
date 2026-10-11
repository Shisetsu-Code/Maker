import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { recoverArchives } from '../scripts/har-recovery.mjs';

const entry = (url, text, status = 200, mimeType = 'text/css', encoding) => ({
  request: { url, headers: [{ name: 'Authorization', value: 'SESSION_SENTINEL' }], cookies: [{ value: 'SESSION_SENTINEL' }] },
  response: { status, headers: [{ name: 'Set-Cookie', value: 'SESSION_SENTINEL' }], content: { text, mimeType, encoding } }
});
async function recover(entries) {
  const root = await mkdtemp(path.join(tmpdir(), 'rushybet-test-'));
  const archive = path.join(root, 'fixture.har');
  await writeFile(archive, JSON.stringify({ log: { entries } }));
  const out = path.join(root, 'public');
  return { out, report: await recoverArchives([archive], out) };
}
test('prefersSuccessfulBody', async () => {
  const { out, report } = await recover([entry('https://rushybet.com/muestra/a.css', 'body{color:red}'), entry('https://rushybet.com/muestra/a.css', 'not found', 404)]);
  assert.equal(await readFile(path.join(out, 'muestra/a.css'), 'utf8'), 'body{color:red}');
  assert.equal(report.written, 1);
});
test('decodesBinaryBase64', async () => {
  const { out } = await recover([entry('https://rushybet.com/a.woff2', 'd09GMgABAgM=', 200, 'font/woff2', 'base64')]);
  assert.deepEqual([...await readFile(path.join(out, 'a.woff2'))], [119, 79, 70, 50, 0, 1, 2, 3]);
});
test('rejectsTraversal', async () => {
  const { out, report } = await recover([entry('https://rushybet.com/%2e%2e/escape.css', 'escape'), entry('https://rushybet.com/%2f..%2fescape.css', 'escape')]);
  assert.equal(report.written, 0);
  assert.equal((await readdir(out)).length, 0);
  assert.equal(report.missing.length, 2);
});
test('reportsPathCollision', async () => {
  const { report } = await recover([entry('https://rushybet.com/a.css?v=1', 'a{}'), entry('https://rushybet.com/a.css?v=2', 'b{}')]);
  assert.equal(report.conflicts.length, 1);
});
test('omitsSessionData', async () => {
  const { out, report } = await recover([entry('https://rushybet.com/muestra/a.css?token=SESSION_SENTINEL', 'a{}'), entry('https://rushybet.com/api/private', '{"secret":"SESSION_SENTINEL"}', 200, 'application/json')]);
  assert.equal(await readFile(path.join(out, 'muestra/a.css'), 'utf8'), 'a{}');
  assert.equal(JSON.stringify(report).includes('SESSION_SENTINEL'), false);
  assert.equal(report.written, 1);
});
