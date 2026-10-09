import { parseProject, parseTemplate, parseCatalog } from './core.js';
const KEY='maker-studio:v1';
export function createStore(storage) {
  return {
    read(){
      try { const raw=storage.getItem(KEY); if(!raw)return {value:null,error:null}; if(raw.length>2500000)throw new Error('datos locales demasiado grandes');
        const x=JSON.parse(raw); if(x.version!==1||!Array.isArray(x.archived)||x.archived.some(k=>typeof k!=='string'))throw new Error('formato local incompatible');
        return {value:{project:parseProject(x.project),templates:parseCatalog({format:'maker-catalog-1',templates:x.templates}),archived:x.archived},error:null};
      } catch {return {value:null,error:'No se pudo recuperar el guardado local. No lo sobrescribiremos hasta que hagas un cambio. Podés importar una copia de tu proyecto.'};}
    },
    write(value){try {const valid={version:1,project:parseProject(value.project),templates:value.templates.map(parseTemplate),archived:value.archived};const raw=JSON.stringify(valid);if(raw.length>2500000)throw new Error('capacidad');storage.setItem(KEY,raw);return null;}catch{return 'No se pudo guardar en este navegador. Descargá tu proyecto para no perder los cambios.';}}
  };
}
