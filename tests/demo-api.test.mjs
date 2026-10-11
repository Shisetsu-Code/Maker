import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleDemoRequest } from '../src/demo-api.mjs';

const launch = body => new Request('https://replica.example/api/muestra/juego-demo', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(body) });
test('launchesOnlyLocalDemo', async () => {
  const response = await handleDemoRequest(launch({demo:true,vendorCode:'PRAGMATIC',gameCode:'gates',channel:'desktop'}));
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.equal(data.ok, true);
  assert.equal(data.demo, true);
  assert.equal(new URL(data.url).origin, 'https://replica.example');
  assert.equal(new URL(data.url).pathname, '/muestra/juego-demo.html');
  assert.equal(new URL(data.url).searchParams.get('game'), 'gates');
});
test('missingGameHasDemoState', async () => {
  const response = await handleDemoRequest(launch({demo:true}));
  assert.equal(response.status, 422);
  assert.equal((await response.json()).demo, true);
});
test('rejectsMalformedAndRealGameRequests', async () => {
  for (const body of [{demo:false,vendorCode:'v',gameCode:'g'}, {demo:true,vendorCode:'v',gameCode:'x'.repeat(121)}]) {
    assert.equal((await handleDemoRequest(launch(body))).status, 422);
  }
  const response = await handleDemoRequest(new Request('https://replica.example/api/muestra/juego-demo',{method:'POST',body:'not-json'}));
  assert.equal(response.status, 400);
});
test('designSubmissionExplainsLocalDemo', async () => {
  const response = await handleDemoRequest(new Request('https://replica.example/api/demo/evento',{method:'POST',body:'{}'}));
  assert.equal(response.status, 422);
  const data = await response.json();
  assert.equal(data.ok, false);
  assert.equal(data.demo, true);
  assert.ok(data.mensaje.length > 0);
});
test('healthAndWinnersMeetConsumerContract', async () => {
  assert.equal((await (await handleDemoRequest(new Request('https://replica.example/api/health'))).json()).ok, true);
  assert.deepEqual((await (await handleDemoRequest(new Request('https://replica.example/api/winners'))).json()).winners, []);
});
test('neverContactsOriginalServices', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = () => { throw new Error('External request attempted'); };
  try {
    assert.equal((await handleDemoRequest(launch({demo:true,vendorCode:'v',gameCode:'g'}))).status,200);
    assert.equal((await handleDemoRequest(new Request('https://replica.example/api/monitoreo'))).status,200);
    assert.equal(await handleDemoRequest(new Request('https://replica.example/muestra/socio.html')),null);
  } finally { globalThis.fetch = original; }
});
test('requiresPostForDemoLaunch', async () => {
  const response = await handleDemoRequest(new Request('https://replica.example/api/muestra/juego-demo'));
  assert.equal(response.status, 405);
});
