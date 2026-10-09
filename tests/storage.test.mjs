import test from 'node:test';import assert from 'node:assert/strict';
import { createStore } from '../src/storage.js';import { newProject } from '../src/core.js';
const t={format:'maker-template-1',id:'orbita',version:'1.0.0',name:'Órbita',description:'Prueba',layout:'classic',hero:'split',columns:4,sections:['hero'],materials:['flat','glass']};
test('local state survives a round trip',()=>{let data;const s=createStore({getItem:()=>data,setItem:(k,v)=>data=v});const v={project:newProject(t),templates:[t],archived:[]};assert.equal(s.write(v),null);assert.deepEqual(s.read().value,v);});
test('storage quota and denied access produce visible errors',()=>{const s=createStore({getItem(){throw Error()},setItem(){throw Error()}});assert.ok(s.read().error);assert.ok(s.write({project:newProject(t),templates:[t],archived:[]}));});
test('corrupt storage is not overwritten on read',()=>{let writes=0;const s=createStore({getItem:()=>'{broken',setItem:()=>writes++});assert.equal(s.read().value,null);assert.equal(writes,0);});
