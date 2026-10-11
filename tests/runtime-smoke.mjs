import { test } from 'node:test';
import assert from 'node:assert/strict';
const origin = process.env.DEMO_ORIGIN || 'http://127.0.0.1:8787';
test('rootServesPersonalizerEntry', async () => {
  const response = await fetch(origin);
  assert.equal(response.status,200);
  assert.match(response.headers.get('content-type'),/text\/html/);
});
test('sixViewsAndCoreAssetsAreServed', async () => {
  for (const name of ['socio.html','vista-socio-lobby.html','vista-socio-panel.html','vista-azul.html','vista-blaze.html','vista-brasa.html','socio.js','socio-lobby.js','socio-panel.js','app.css','socio.css','panel.css']) {
    const response = await fetch(`${origin}/muestra/${name}`);
    assert.equal(response.status,200,name);
    assert.ok((await response.text()).length > 0,name);
  }
});
test('workerReturnsLocalGamePreviewAndDesignDemoState', async () => {
  const response = await fetch(`${origin}/api/muestra/juego-demo`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({demo:true,vendorCode:'PRAGMATIC',gameCode:'gates',channel:'desktop'})});
  assert.equal(response.status,200);
  const {url,demo} = await response.json();
  assert.equal(demo,true);
  assert.equal(new URL(url).origin,origin);
  assert.equal((await fetch(url)).status,200);
  const design = await fetch(`${origin}/api/demo/evento`,{method:'POST',body:'{}'});
  assert.equal(design.status,422);
  assert.equal((await design.json()).demo,true);
});
test('nestedCatalogImagesResolve', async () => {
  for (const asset of ['slot-playngo/bookofdead.webp','mini-spribe/Aviator.webp','PGSOFT/fortune-tiger.webp']) {
    const response = await fetch(`${origin}/muestra/games-cartas/${asset}`);
    assert.equal(response.status,200,asset);
    assert.match(response.headers.get('content-type'),/^image\//);
  }
});
