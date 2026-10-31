import {test} from 'node:test';import assert from 'node:assert/strict';
import {normalizeCinematic,cinematicFromQuery,cinematicPage,WORLD_OPTIONS} from '../public/muestra/cinematic-settings.mjs';
test('Cinematic accepts only nine worlds and an explicit brand-color option',()=>{
 assert.equal(WORLD_OPTIONS.length,9);
 assert.deepEqual(normalizeCinematic({world:'candy',brandColors:true,script:'ignored'}),{world:'candy',brandColors:true});
 for(const world of ['constructor','__proto__','../../outside','unknown'])assert.deepEqual(normalizeCinematic({world,brandColors:'true'}),{world:'pirates',brandColors:false});
 assert.deepEqual(normalizeCinematic(null),{world:'pirates',brandColors:false});
});
test('Cinematic query chooses a valid world without losing saved settings for unrelated URLs',()=>{
 assert.deepEqual(cinematicFromQuery('?editor=visual',{world:'phoenix',brandColors:true}),{world:'phoenix',brandColors:true});
 assert.deepEqual(cinematicFromQuery('?world=space&cinematicColor=world',{world:'phoenix',brandColors:true}),{world:'space',brandColors:false});
 assert.deepEqual(cinematicFromQuery('?world=constructor',{world:'candy',brandColors:true}),{world:'candy',brandColors:true});
});
test('visual edits belong to each Cinematic world while the panel remains shared',()=>{
 assert.equal(cinematicPage('cinematic','lobby',{world:'candy'}),'cinematic_candy:lobby');
 assert.equal(cinematicPage('cinematic','lobby',{world:'space'}),'cinematic_space:lobby');
 assert.equal(cinematicPage('cinematic','panel',{world:'space'}),'cinematic:panel');
 assert.equal(cinematicPage('ravenbet','lobby',{world:'space'}),'ravenbet:lobby');
});
