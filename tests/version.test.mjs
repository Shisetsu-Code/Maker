import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parseCatalog,addTemplate} from '../src/core.js';
const [template]=parseCatalog(readFileSync('templates/catalog.json','utf8'));
test('importing identical version with reordered JSON keys is idempotent',()=>{
  const reordered=Object.fromEntries(Object.entries(template).reverse());
  assert.equal(addTemplate([template],reordered).length,1);
});
