import {normalizePresentation} from '../public/muestra/casino-settings.mjs';
import {test} from 'node:test';import assert from 'node:assert/strict';
import {normalizeCinematic,cinematicFromQuery,cinematicPage,WORLD_OPTIONS} from '../public/muestra/cinematic-settings.mjs';
test('Cinematic accepts only 28 worlds and an explicit brand-color option',()=>{
 assert.equal(WORLD_OPTIONS.length,28);
 assert.deepEqual(normalizeCinematic({world:'candy',brandColors:true,script:'ignored'}),{world:'candy',brandColors:true,presentation:normalizePresentation()});
 for(const world of ['constructor','__proto__','../../outside','unknown'])assert.deepEqual(normalizeCinematic({world,brandColors:'true'}),{world:'pirates',brandColors:false,presentation:normalizePresentation()});
 assert.deepEqual(normalizeCinematic(null),{world:'pirates',brandColors:false,presentation:normalizePresentation()});
});
test('Cinematic query chooses a valid world without losing saved settings for unrelated URLs',()=>{
 assert.deepEqual(cinematicFromQuery('?editor=visual',{world:'phoenix',brandColors:true,presentation:normalizePresentation()}),{world:'phoenix',brandColors:true,presentation:normalizePresentation()});
 assert.deepEqual(cinematicFromQuery('?world=space&cinematicColor=world',{world:'phoenix',brandColors:true,presentation:normalizePresentation()}),{world:'space',brandColors:false,presentation:normalizePresentation()});
 assert.deepEqual(cinematicFromQuery('?world=constructor',{world:'candy',brandColors:true,presentation:normalizePresentation()}),{world:'candy',brandColors:true,presentation:normalizePresentation()});
});
test('visual edits belong to each Cinematic world while the panel remains shared',()=>{
 assert.equal(cinematicPage('cinematic','lobby',{world:'candy'}),'cinematic_candy:lobby');
 assert.equal(cinematicPage('cinematic','lobby',{world:'space'}),'cinematic_space:lobby');
 assert.equal(cinematicPage('cinematic','panel',{world:'space'}),'cinematic:panel');
 assert.equal(cinematicPage('ravenbet','lobby',{world:'space'}),'ravenbet:lobby');
});

test('expanded worlds preserve their own editor page and query selection',()=>{
 for(const world of ['egypt','japan','china','india','vikings','atlantis','dragons','vampires','artdeco','masquerade','muertos','alchemy','ice','forest','racing','wasteland','eldorado','astral']){
  assert.equal(normalizeCinematic({world}).world,world);
  assert.equal(cinematicFromQuery('?world='+world,{}).world,world);
  assert.equal(cinematicPage('cinematic','lobby',{world}),'cinematic_'+world+':lobby');
 }
});
