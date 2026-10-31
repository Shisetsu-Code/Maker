import {WORLD_OPTIONS,normalizeCinematic,cinematicFromQuery,CINEMATIC_STORAGE,DEFAULT_CINEMATIC} from './cinematic-settings.mjs';
let stored;try{stored=JSON.parse(localStorage.getItem(CINEMATIC_STORAGE));}catch{}
let state=cinematicFromQuery(location.search,stored),controls;const connected=new WeakSet();
const frames=()=>[...document.querySelectorAll('iframe')].filter(frame=>{try{return new URL(frame.src,location.href).pathname.endsWith('/cinematic/index.html');}catch{return false;}});
const active=frame=>frame.closest('[data-activo]')?.dataset.activo==='true';
function send(frame){try{frame.contentWindow?.postMessage({tipo:'maker-cinematic-config',settings:state},location.origin);}catch{}}
function paint(){
 const app=document.querySelector('#app'),visible=app?.dataset.plantilla==='cinematic'&&app?.dataset.vista==='lobby';
 if(controls){if(controls.hidden===visible)controls.hidden=!visible;const select=controls.querySelector('select');if(select.value!==state.world)select.value=state.world;controls.querySelector('input').checked=state.brandColors;}
 document.documentElement.dataset.cinematicWorld=state.world;
}
function set(value,{save=true}={}){
 const next=normalizeCinematic(value),changed=state.world!==next.world||state.brandColors!==next.brandColors;state=next;paint();
 if(save){try{localStorage.setItem(CINEMATIC_STORAGE,JSON.stringify(state));}catch{}try{const url=new URL(location.href);url.searchParams.set('world',state.world);url.searchParams.set('cinematicColor',state.brandColors?'brand':'world');history.replaceState(history.state,'',url);}catch{}}
 if(changed)document.dispatchEvent(new CustomEvent('maker-cinematic-change',{detail:{...state}}));
 frames().forEach(send);
}
function mount(){
 const editor=document.querySelector('.design-editor');if(!controls&&editor){controls=document.createElement('section');controls.className='cinematic-controls';controls.hidden=true;controls.setAttribute('aria-label','Configuración Cinematic');
  const title=document.createElement('h4');title.textContent='Cinematic · prueba';const label=document.createElement('label');label.textContent='Mundo';const select=document.createElement('select');select.dataset.cinematicWorld='';select.setAttribute('aria-label','Mundo Cinematic');for(const world of WORLD_OPTIONS){const option=document.createElement('option');option.value=world.id;option.textContent=world.name;select.append(option);}label.append(select);
  const color=document.createElement('label');color.className='cinematic-color-choice';const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.dataset.cinematicBrand='';color.append(checkbox,document.createTextNode('Usar los colores de mi marca'));
  const note=document.createElement('p');note.textContent='Cada mundo conserva su paleta. Activá esta opción para aplicar los colores del Maker. Las ediciones de elementos se guardan por mundo.';
  controls.append(title,label,color,note);editor.querySelector(':scope > p').after(controls);select.addEventListener('change',()=>set({...state,world:select.value}));checkbox.addEventListener('change',()=>set({...state,brandColors:checkbox.checked}));
 }
 for(const frame of frames())if(!connected.has(frame)){connected.add(frame);frame.addEventListener('load',()=>send(frame));send(frame);}paint();
}
window.__makerCinematic={state:()=>({...state}),import:value=>set(value),reset:()=>set(DEFAULT_CINEMATIC)};
addEventListener('message',event=>{if(event.origin!==location.origin)return;const frame=frames().find(frame=>frame.contentWindow===event.source);if(!frame)return;
 if(event.data?.tipo==='maker-cinematic-ready')send(frame);
 else if(event.data?.tipo==='maker-cinematic-world'&&active(frame)){const next=normalizeCinematic({world:event.data.world,brandColors:state.brandColors});if(next.world!==state.world)set(next);}
});
addEventListener('storage',event=>{if(event.key===CINEMATIC_STORAGE)try{set(JSON.parse(event.newValue),{save:false});}catch{}});
new MutationObserver(mount).observe(document.querySelector('#app')||document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-plantilla','data-vista','data-activo']});mount();document.dispatchEvent(new CustomEvent('maker-cinematic-change',{detail:{...state}}));
