import {WORLDS,WORLD_IDS} from './cinematic/schema.mjs';
export const WORLD_OPTIONS=Object.freeze(WORLD_IDS.map(id=>Object.freeze({id,name:WORLDS[id].name})));
export const DEFAULT_CINEMATIC=Object.freeze({world:'pirates',brandColors:false});
export const CINEMATIC_STORAGE='maker:cinematic:preferences:v1';
export function normalizeCinematic(value){return{world:typeof value?.world==='string'&&Object.hasOwn(WORLDS,value.world)?value.world:'pirates',brandColors:value?.brandColors===true};}
export function cinematicFromQuery(search,stored){const state=normalizeCinematic(stored),params=new URLSearchParams(search),world=params.get('world'),color=params.get('cinematicColor');if(world&&Object.hasOwn(WORLDS,world))state.world=world;if(color==='brand'||color==='world')state.brandColors=color==='brand';return state;}
export function cinematicPage(slug,view,settings){return(slug==='cinematic'&&view==='lobby'?'cinematic_'+normalizeCinematic(settings).world:slug)+':'+view;}
