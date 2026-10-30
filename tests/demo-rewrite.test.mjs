import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { rewriteDemoText } from '../scripts/demo-rewrite.mjs';
import { handleDemoRequest } from '../src/demo-api.mjs';

test('rewrittenFontLinkStillLoadsStylesheet', () => {
  const source = 'for(let e of [`/assets/external/fonts.googleapis.com/css2.fixture.css`]){let t=document.createElement(`link`);t.rel=e.includes(`/css2?`)?`stylesheet`:`preconnect`,t.href=e,document.head.appendChild(t)}';
  const links=[];
  runInNewContext(rewriteDemoText(source),{document:{createElement:()=>({}),head:{appendChild:e=>links.push(e)}}});
  assert.equal(links[0].rel,'stylesheet');
});
test('computedRecoveredPostersUseLocalCopies', async () => {
  const script = await readFile('public/muestra/demo-assets.js','utf8');
  const context = {window:{__demoRecoveredAssets:{'https://common-static.ppgames.net/game_pic/square/200/vs20olympgate.png':'/assets/external/common-static.ppgames.net/game_pic/square/200/vs20olympgate.png'}},location:{href:'https://replica.example/muestra/vista-socio-lobby.html'},URL};
  runInNewContext(script,context);
  assert.equal(context.window.__demoAssetURL('https://common-static.ppgames.net/game_pic/square/200/'+'vs20olympgate'+'.png'),'/assets/external/common-static.ppgames.net/game_pic/square/200/vs20olympgate.png');
  assert.equal(context.window.__demoAssetURL('./games-cartas/a.webp'),'./games-cartas/a.webp');
  assert.equal(context.window.__demoAssetURL('https://unrecorded.example/a.png?token=PRIVATE'),'/muestra/imagen-no-disponible.svg');
});
test('catalogImageAndBackgroundBothResolveLocalCopy', () => {
  const source='function Ia(e){return`url("${e.replace(/"/g,``)}")`}let c=`https://cdn.example/poster.png`,g=`linear-gradient(red,blue)`;let item={img:c,vid:null,grad:g,bg:Ia(c)};item';
  const item=runInNewContext(rewriteDemoText(source),{window:{__demoAssetURL:()=>'/local/poster.png'}});
  assert.equal(item.img,'/local/poster.png');
  assert.equal(item.bg,'url("/local/poster.png")');
});
test('actualConsumerLaunchesLocalPreview', async () => {
  const bundle=await readFile('public/muestra/socio-lobby.js','utf8');
  const start=bundle.indexOf('function Ko(e){if(!e||typeof e!=`object`)return null;');
  const end=bundle.indexOf('function qo(e,t)',start);
  assert.ok(start>=0&&end>start);
  const body=runInNewContext(bundle.slice(start,end)+';Ko({demo:true,vendorCode:"PRAGMATIC",gameCode:"gates",channel:"desktop"})',{}, {timeout:100});
  const response=await handleDemoRequest(new Request('https://replica.example/api/muestra/juego-demo',{method:'POST',body:JSON.stringify(body)}));
  assert.equal(response.status,200);
});
