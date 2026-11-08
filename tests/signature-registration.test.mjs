import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {registerLobbyTemplates} from '../scripts/install-lobby-templates.mjs';

// The captured editor exposes these registry hooks; exercise their output,
// including an existing template, without starting the complete browser UI.
const editor = [
  'function Bn(e){return e===`clasica`}',
  'const Wn=Object.freeze({clasica:Object.freeze({p:`#ff5500`,f:`#0f0f0f`,t:`#202020`})});',
  'function Nr(e){return e===`clasica`?`vista-socio-lobby.html`:undefined}',
  'function Xi(){return `${G.vista}-${G.disp}`}',
  'const zo=Object.freeze({clasica:`Rushybet`});',
].join('\n');

const themes = [
  ['aureum','Aureum','#d5b77b','#101815','#1b2520'],
  ['kitsune','Kitsune','#ff624c','#120f18','#211b27'],
  ['orbit','Orbit','#79f5d0','#0a101e','#141d30'],
];

test('signature templates expose their own Maker routes, palettes and view identities',()=>{
  const state={plantilla:'clasica',vista:'lobby',disp:'compu'};
  const registry=vm.runInNewContext(registerLobbyTemplates(editor)+';({accepts:Bn,route:Nr,view:Xi,palettes:Wn,names:zo})',{G:state});
  assert.equal(registry.accepts('unknown'),false);
  assert.equal(registry.route('clasica'),'vista-socio-lobby.html');
  assert.equal(registry.names.clasica,'Rushybet');
  for(const [slug,name,p,f,t] of themes){
    assert.equal(registry.accepts(slug),true,slug);
    assert.equal(registry.route(slug),slug+'.html');
    assert.equal(registry.names[slug],name);
    assert.deepEqual({...registry.palettes[slug]},{p,f,t});
    state.plantilla=slug;
    for(const disp of ['compu','celular']){
      state.disp=disp;state.vista='lobby';
      assert.equal(registry.view(),slug+'-'+disp);
      state.vista='panel';
      assert.equal(registry.view(),'panel-'+disp);
    }
  }
});

test('registration is idempotent and normalizes earlier lobby counts in one pass',()=>{
  for(const count of ['Cuatro','Cinco','Seis','Ocho','Nueve','Diez','Once','Trece','Diecisiete','Veinte']){
    const result=registerLobbyTemplates(editor+'\n// '+count+' diseños para tu lobby.');
    assert.ok(result.endsWith('// Veinte diseños para tu lobby.'),count);
    assert.equal(registerLobbyTemplates(result),result,count);
  }
});
