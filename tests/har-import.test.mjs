import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { sanitizeBateupix } from '../scripts/sanitize-bateupix.mjs';
import { sanitizeLobby } from '../scripts/sanitize-lobby-har.mjs';

const run = promisify(execFile);
const recoverScript = fileURLToPath(new URL('../scripts/recover.mjs', import.meta.url));
const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl2nU8AAAAASUVORK5CYII=';
const entry = (url, text, mimeType = 'application/json', encoding) => ({
  request: { url },
  response: { status: 200, content: { text, mimeType, encoding } },
});
const image = url => entry(url, png, 'image/png', 'base64');
const json = (url, value, encoded) => entry(
  url,
  encoded ? Buffer.from(JSON.stringify(value)).toString('base64') : JSON.stringify(value),
  'application/json',
  encoded ? 'base64' : undefined,
);

test('recovery CLI accepts one HAR and writes its text and base64 assets', async () => {
  const temporary = await mkdtemp(path.join(tmpdir(), 'maker-single-har-'));
  try {
    const archive = path.join(temporary, 'one capture.har');
    const output = path.join(temporary, 'public');
    const css = ':root { --name: "Ñandú 🎲"; }';
    const script = 'export const label = "Volcán 🐉";';
    await writeFile(archive, JSON.stringify({ log: { entries: [
      entry('https://rushybet.com/muestra/single.css', css, 'text/css'),
      entry('https://rushybet.com/muestra/single.js', Buffer.from(script).toString('base64'), 'application/javascript', 'base64'),
    ] } }));

    const { stdout } = await run(process.execPath, [recoverScript, '--out', output, archive], { cwd: temporary });
    assert.deepEqual(JSON.parse(stdout), { written: 2, conflicts: 0, rejected: 0 });
    assert.equal(await readFile(path.join(output, 'muestra/single.css'), 'utf8'), css);
    assert.equal(await readFile(path.join(output, 'muestra/single.js'), 'utf8'), script);
    const manifest = JSON.parse(await readFile(path.join(temporary, 'work/recovery-manifest.json'), 'utf8'));
    assert.equal(manifest.resources.length, 2);
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});

function bateupixFixture(encoded) {
  const first = { name: 'Ñandú 🎲', game_code: 'nandu', provider_code: 'Proveedor Á', image_url: '/first.png' };
  const second = { name: 'Volcán 🐉', game_code: 'volcan', provider_code: 'pp', image_url: '/second.png' };
  return { log: { entries: [
    image('https://bateupix.com/first.png'),
    image('https://bateupix.com/second.png'),
    image('https://bateupix.com/banner.png'),
    json('https://bateupix.com/api/games/homepage-sections', [{ games: [first] }], encoded),
    json('https://bateupix.com/api/games', { data: [second] }, encoded),
    json('https://bateupix.com/api/banners', [{ image_url: '/banner.png' }], encoded),
  ] } };
}

test('Bateupix preserves the complete Unicode catalog and banners from base64 JSON', () => {
  const plain = sanitizeBateupix(bateupixFixture(false));
  const encoded = sanitizeBateupix(bateupixFixture(true));
  assert.deepEqual(encoded.data.games.map(game => game.name), ['Ñandú 🎲', 'Volcán 🐉']);
  assert.equal(encoded.data.banners.length, 1);
  assert.equal(encoded.assets.length, 3);
  assert.deepEqual(encoded, plain);
});

function lobbyFixture(slug, encoded) {
  const host = { cobraya: 'cobraya.vip', lunabet: 'lunabet.lat', multisala: 'multisala.net' }[slug];
  const game = { title: 'Ñandú 🎲', name: 'nandu', slug: 'nandu', provider: 'Proveedor Á', providerLabel: 'Proveedor Á', thumbnailFallback: '/first.png', thumbnailUrl: '/first.png' };
  const entries = [image(`https://${host}/first.png`)];
  if (slug === 'multisala') {
    entries.push(json(`https://${host}/multisala/api/games`, { games: [game] }, encoded));
  } else {
    entries.push(
      image(`https://${host}/banner.png`),
      json(`https://${host}/api/lobby`, { items: [game] }, encoded),
      json(`https://${host}/api/games/list`, { items: [{ ...game, title: 'Volcán 🐉', name: 'volcan' }] }, encoded),
      json(`https://${host}/api/banners`, [{ imageUrl: '/banner.png' }], encoded),
    );
  }
  return { log: { entries } };
}

for (const slug of ['cobraya', 'lunabet', 'multisala']) {
  test(`${slug} imports equivalent catalogs from plain and base64 JSON`, () => {
    const plain = sanitizeLobby(lobbyFixture(slug, false), slug);
    const encoded = sanitizeLobby(lobbyFixture(slug, true), slug);
    assert.equal(encoded.data.games.length, slug === 'multisala' ? 1 : 2);
    assert.equal(encoded.data.games[0].name, 'Ñandú 🎲');
    assert.equal(encoded.data.games[0].providerName, 'Proveedor Á');
    assert.equal(encoded.data.banners.length, slug === 'multisala' ? 0 : 1);
    assert.deepEqual(encoded, plain);
  });
}

const importers = [
  { name: 'Bateupix', url: 'https://bateupix.com/api/games', sanitize: sanitizeBateupix },
  { name: 'Lobby', url: 'https://cobraya.vip/api/lobby', sanitize: har => sanitizeLobby(har, 'cobraya') },
];

for (const importer of importers) {
  for (const fixture of [
    { name: 'unsupported encoding', text: '{"secret":"PRIVATE_SENTINEL"}', encoding: 'gzip', code: 'ERR_HAR_ENCODING' },
    { name: 'malformed base64', text: Buffer.from('{"secret":"PRIVATE_SENTINEL"}').toString('base64') + '!', encoding: 'base64', code: 'ERR_HAR_BASE64' },
    { name: 'invalid UTF-8', text: Buffer.from([0x22, 0xff, 0x22]).toString('base64'), encoding: 'base64', code: 'ERR_HAR_UTF8' },
    { name: 'malformed JSON', text: '{"secret":"PRIVATE_SENTINEL",}', encoding: undefined, code: 'ERR_HAR_JSON' },
  ]) {
    test(`${importer.name} reports ${fixture.name} instead of silently dropping catalog data`, () => {
      const har = { log: { entries: [entry(importer.url + '?token=PRIVATE_SENTINEL', fixture.text, 'application/json', fixture.encoding)] } };
      assert.throws(() => importer.sanitize(har), error => {
        assert.equal(error.code, fixture.code);
        assert.doesNotMatch(error.message, /PRIVATE_SENTINEL/);
        assert.match(error.message, /HAR/);
        return true;
      });
    });
  }

  test(`${importer.name} ignores unsupported encodings outside its permitted APIs`, () => {
    const har = { log: { entries: [entry('https://unrelated.invalid/private?token=PRIVATE_SENTINEL', '{"secret":"PRIVATE_SENTINEL"}', 'application/json', 'gzip')] } };
    assert.deepEqual(importer.sanitize(har).data.games, []);
  });
}
