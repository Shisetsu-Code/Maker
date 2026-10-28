import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { assetReferences, checkAssets } from '../scripts/check-assets.mjs';

test('asset checks distinguish JavaScript methods from CSS URLs', () => {
  const references = assetReferences('view.js', `
    const validator = { url(value) { return value; } };
    const style = { backgroundImage: 'url("assets/hero-bg.png")' };
    const image = '/images/poster.webp';
  `);
  assert.deepEqual([...references].sort(), ['/images/poster.webp', 'assets/hero-bg.png']);
});

test('built resource checks follow runtime aliases and report broken catalog images', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'maker-assets-'));
  try {
    await mkdir(path.join(root, 'muestra/azul/assets'), { recursive:true });
    await mkdir(path.join(root, 'muestra/example/assets'), { recursive:true });
    await mkdir(path.join(root, 'games-cartas/vendor'), { recursive:true });
    await writeFile(path.join(root, 'muestra/azul.js'), 'const hero = "assets/hero-bg.png";');
    await writeFile(path.join(root, 'muestra/azul/assets/hero-bg.webp'), 'image fixture');
    await writeFile(path.join(root, 'games-cartas/vendor/game.webp'), 'image fixture');
    await writeFile(path.join(root, 'muestra/example/catalog.json'), JSON.stringify({ games:[{ image:'assets/missing.webp' }] }));
    await writeFile(path.join(root, 'muestra/example.html'), '<img src="/muestra/games-cartas/vendor/game.webp"><img src="https://cdn.example/remote.webp">');
    const report = await checkAssets(root);
    assert.deepEqual(report.missing, [{ resource:'/muestra/example/assets/missing.webp', consumers:['/muestra/example/catalog.json'] }]);
    assert.deepEqual(report.external, ['https://cdn.example/remote.webp']);
    await writeFile(path.join(root, 'muestra/example/assets/missing.webp'), 'image fixture');
    assert.deepEqual((await checkAssets(root)).missing, []);
  } finally {
    await rm(root, { recursive:true, force:true });
  }
});
