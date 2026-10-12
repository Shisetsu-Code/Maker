import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeContent,DEFAULT_CONTENT} from '../public/muestra/content-settings.mjs';
import {normalizeSettings} from '../public/muestra/design-settings.mjs';
test('section order is complete and unique; unknown sections are rejected',()=>{const c=normalizeContent({sections:['games','games','x','hero'],hidden:['x','hero','hero']});assert.deepEqual(c.sections,['games','hero','discover','lounge']);assert.deepEqual(c.hidden,['hero']);});
test('banner settings survive normalization/export and text is bounded',()=>{const c=normalizeSettings({content:{title:'x'.repeat(200),description:'Nueva portada',image:'https://remote/image.png',button:'Jugar'}}).content;assert.equal(c.title.length,100);assert.equal(c.description,'Nueva portada');assert.equal(c.image,'');assert.equal(c.button,'Jugar');assert.deepEqual(normalizeContent(null).sections,DEFAULT_CONTENT.sections);});
