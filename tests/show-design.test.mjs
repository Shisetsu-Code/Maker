import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import { rewriteShowDesign } from '../scripts/demo-rewrite.mjs';

test('show design opens current full view without submitting', async () => {
  const source = rewriteShowDesign(await readFile('public/muestra/socio.js','utf8'));
  const start = source.indexOf('function sl(t,n)');
  const end = source.indexOf('function cl(',start);
  let click, opened = 0, label, mounted;
  const anchor = {};
  const context = {
    il(id,text) { label=text; return {ancla:anchor,boton:{addEventListener(event,fn){assert.equal(event,'click');click=fn;}}}; },
    document:{getElementById(id){assert.equal(id,'btn-entera');return {click(){opened++;}};}}
  };
  vm.runInNewContext(source.slice(start,end)+';sl({}, {prepend(value){mounted=value;}})', {...context, set mounted(value){mounted=value;}});
  assert.equal(label,'Mostrar diseño');
  assert.equal(mounted,anchor);
  click();
  assert.equal(opened,1);
  assert.equal(rewriteShowDesign(source),source);
});
