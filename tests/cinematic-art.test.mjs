import {test} from 'node:test';import assert from 'node:assert/strict';
import {cinematicArt,canonicalCinematicAsset} from '../public/muestra/cinematic/art.mjs';
test('worlds select local independent illustrations and reject unknown asset identifiers',()=>{
 assert.equal(cinematicArt('pirates'),'assets/cinematic-hd/pirates.avif');
 assert.equal(cinematicArt('phoenix'),'assets/cinematic-hd/phoenix.avif');
 for(const value of ['constructor','../../outside','https://outside.invalid/art'])assert.equal(cinematicArt(value),'assets/cinematic-hd/pirates.avif');
});
test('upgraded art keeps the same element identity so saved image replacements still apply',()=>{
 assert.equal(canonicalCinematicAsset('/muestra/cinematic/assets/cinematic-hd/space.avif'),'/muestra/cinematic/assets/cinematic/space.avif');
 assert.equal(canonicalCinematicAsset('/muestra/cinematic/assets/cinematic/space.avif'),'/muestra/cinematic/assets/cinematic/space.avif');
 assert.equal(canonicalCinematicAsset('/muestra/ravenbet/assets/space.avif'),'/muestra/ravenbet/assets/space.avif');
});
