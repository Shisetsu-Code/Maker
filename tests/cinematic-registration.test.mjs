import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {registerCinematic,installCinematicHtml} from '../scripts/install-cinematic.mjs';

test('Cinematic registers one allowed family, an independent frame and its label idempotently',async()=>{
 const initial=await readFile('public/muestra/socio.js','utf8'),source=registerCinematic(initial);
 assert.equal(registerCinematic(source),source);
 const allowed=source.match(/function Bn\(e\)\{[^}]+\}/)[0];assert.equal(vm.runInNewContext(allowed+';Bn(\"cinematic\")',{}),true);assert.equal(vm.runInNewContext(allowed+';Bn(\"constructor\")',{}),false);
 const start=source.indexOf('function Nr(e)'),end=source.indexOf('let Pr=',start);
 assert.equal(vm.runInNewContext(source.slice(start,end)+';Nr("cinematic")',{}),'cinematic/index.html');
 const at=source.indexOf('function Xi()'),until=source.indexOf('function Zi()',at);
 assert.equal(vm.runInNewContext(source.slice(at,until)+';Xi()',{G:{plantilla:'cinematic',vista:'lobby',disp:'celular'}}),'cinematic-celular');
 assert.ok(source.includes('cinematic:`Cinematic · prueba`'));
 const html=installCinematicHtml(await readFile('public/muestra/socio.html','utf8'));
 assert.equal((html.match(/data-valor="cinematic"/g)||[]).length,1);
 assert.equal(installCinematicHtml(html),html);
});

test('imported runtime uses independent art and nested-frame expansion styles',async()=>{
 const read=name=>readFile('public/muestra/cinematic/'+name,'utf8');
 const app=await read('app.mjs'),schema=await read('schema.mjs'),ui=await read('expansion-ui.mjs');
 assert.doesNotMatch(app,/prepareExpansionArt|TEMAS_ART|data:image\/png;base64,AAAA/);
 assert.doesNotMatch(schema,/EXPANSION_ART/);
 assert.match(schema,/art:cinematicArt\(id\)/);
 assert.match(app,/export async function setWorld/);
 assert.doesNotMatch(app,/no son renders individuales/);
 assert.match(app,/Las ilustraciones se generaron individualmente/);
 assert.match(ui,/new URL\('\.\/expansion\.css',import\.meta\.url\)/);
});
