import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeSettings,designCSS,DEFAULT_SETTINGS} from '../public/muestra/design-settings.mjs';
test('bounds imported preferences and rejects injected CSS and remote images',()=>{
  const result=normalizeSettings({font:'Arial; color:red',scale:999,radius:-1,shade:Infinity,image:'https://example.com/a.png',position:'top;display:none',weight:'900'});
  assert.equal(result.font,'original');assert.equal(result.scale,120);assert.equal(result.radius,0);assert.equal(result.image,'');assert.equal(result.position,'center');assert.equal(result.weight,'original');assert.equal(result.shade,55);
});
test('background can be disabled without discarding the selected image',()=>{
  const image='data:image/png;base64,YWJj';const settings=normalizeSettings({...DEFAULT_SETTINGS,image,imageEnabled:false});assert.equal(settings.image,image);assert.doesNotMatch(designCSS(settings),/background-image/);assert.match(designCSS({...settings,imageEnabled:true}),/background-image/);
});
test('reset restores original font and text size without a background',()=>{const css=designCSS(DEFAULT_SETTINGS);assert.doesNotMatch(css,/font-family|font-weight|background-image|font-size/);assert.equal(normalizeSettings(null).scale,100);});
