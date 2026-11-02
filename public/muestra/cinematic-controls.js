import {WORLD_OPTIONS,normalizeCinematic,cinematicFromQuery,CINEMATIC_STORAGE,DEFAULT_CINEMATIC} from './cinematic-settings.mjs';
let stored;try{stored=JSON.parse(localStorage.getItem(CINEMATIC_STORAGE));}catch{}
let state=cinematicFromQuery(location.search,stored),controls;const connected=new WeakSet();
const frames=()=>[...document.querySelectorAll('iframe')].filter(frame=>{try{return new URL(frame.src,location.href).pathname.endsWith('/cinematic/index.html');}catch{return false;}});
const active=frame=>frame.closest('[data-activo]')?.dataset.activo==='true';
function send(frame){try{frame.contentWindow?.postMessage({tipo:'maker-cinematic-config',settings:state},location.origin);}catch{}}
function paint(){
 const app=document.querySelector('#app'),visible=app?.dataset.plantilla==='cinematic'&&app?.dataset.vista==='lobby';
 if(controls){if(controls.hidden===visible)controls.hidden=!visible;const select=controls.querySelector('select');if(select.value!==state.world)select.value=state.world;controls.querySelector('input').checked=state.brandColors;for(const field of controls.querySelectorAll('[data-casino-setting]')){const key=field.dataset.casinoSetting,value=state.presentation[key];if(field.tagName==='SELECT'&&field.dataset.casinoSetting==='sectionOrder'&&![...field.options].some(option=>option.value===String(value))){const option=document.createElement('option');option.value=String(value);option.textContent='Orden personalizado';field.append(option);}if(field.value!==String(value))field.value=String(value);} }
 document.documentElement.dataset.cinematicWorld=state.world;
}
function set(value,{save=true}={}){
 const next=normalizeCinematic(value),changed=JSON.stringify(state)!==JSON.stringify(next);state=next;paint();
 if(save){try{localStorage.setItem(CINEMATIC_STORAGE,JSON.stringify(state));}catch{}try{const url=new URL(location.href);url.searchParams.set('world',state.world);url.searchParams.set('layout',state.presentation.layout);url.searchParams.set('cinematicColor',state.brandColors?'brand':'world');history.replaceState(history.state,'',url);}catch{}}
 if(changed)document.dispatchEvent(new CustomEvent('maker-cinematic-change',{detail:{...state}}));
 frames().forEach(send);
}
function mountCasinoControls(container){
 const definitions=[['layout','Distribución',[['cinematic','Cinemática'],['casino','Casino']]],['heroHeight','Altura de portada',[[180,'Baja'],[260,'Media'],[340,'Alta'],[440,'Amplia']]],['columns','Columnas en computadora',[[3,'3'],[4,'4'],[5,'5'],[6,'6']]],['mobileColumns','Columnas en celular',[[2,'2'],[3,'3']]],['cardSize','Tamaño de tarjetas',[['compact','Compactas'],['normal','Normales'],['large','Grandes']]],['ornaments','Adornos',[['off','Sin adornos'],['subtle','Sutiles'],['full','Completos']]]];
 for(const[key,text,options]of definitions){const label=document.createElement('label');label.textContent=text;const select=document.createElement('select');select.dataset.casinoSetting=key;select.setAttribute('aria-label',text);for(const[value,name]of options){const option=document.createElement('option');option.value=value;option.textContent=name;select.append(option);}label.append(select);container.append(label);select.addEventListener('change',()=>set({...state,presentation:{...state.presentation,[key]:['heroHeight','columns','mobileColumns'].includes(key)?Number(select.value):select.value}}));}
 const promo=document.createElement('label');promo.textContent='Texto promocional';const input=document.createElement('textarea');input.maxLength=180;input.rows=2;input.dataset.casinoSetting='promotion';input.setAttribute('aria-label','Texto promocional');promo.append(input);container.append(promo);input.addEventListener('input',()=>set({...state,presentation:{...state.presentation,promotion:input.value}}));
 const order=document.createElement('label');order.textContent='Orden de secciones';const select=document.createElement('select');select.dataset.casinoSetting='sectionOrder';select.setAttribute('aria-label','Orden de secciones');for(const[value,text]of [['featured,new,live,all','Destacados · Nuevos · En vivo · Más juegos'],['live,featured,new,all','En vivo · Destacados · Nuevos · Más juegos'],['new,featured,live,all','Nuevos · Destacados · En vivo · Más juegos']]){const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option);}order.append(select);container.append(order);select.addEventListener('change',()=>set({...state,presentation:{...state.presentation,sectionOrder:select.value.split(',')}}));
}
function mount(){
 const editor=document.querySelector('.design-editor');if(!controls&&editor){controls=document.createElement('section');controls.className='cinematic-controls';controls.hidden=true;controls.setAttribute('aria-label','Configuración Cinematic');
  const title=document.createElement('h4');title.textContent='Cinematic · prueba';const label=document.createElement('label');label.textContent='Mundo';const select=document.createElement('select');select.dataset.cinematicWorld='';select.setAttribute('aria-label','Mundo Cinematic');for(const world of WORLD_OPTIONS){const option=document.createElement('option');option.value=world.id;option.textContent=world.name;select.append(option);}label.append(select);
  const color=document.createElement('label');color.className='cinematic-color-choice';const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.dataset.cinematicBrand='';color.append(checkbox,document.createTextNode('Usar los colores de mi marca'));
  const note=document.createElement('p');note.textContent='Todos los mundos comparten la distribución y estos controles. Cada uno conserva su paleta y sus ediciones de elementos. Activá la opción de marca para usar tus colores.';
  controls.append(title,label,color,note);mountCasinoControls(controls);editor.querySelector(':scope > p').after(controls);select.addEventListener('change',()=>set({...state,world:select.value}));checkbox.addEventListener('change',()=>set({...state,brandColors:checkbox.checked}));
 }
 for(const frame of frames())if(!connected.has(frame)){connected.add(frame);frame.addEventListener('load',()=>send(frame));send(frame);}paint();
}
window.__makerCinematic={state:()=>({...state}),import:value=>set(value),reset:()=>set(DEFAULT_CINEMATIC)};
addEventListener('message',event=>{if(event.origin!==location.origin)return;const frame=frames().find(frame=>frame.contentWindow===event.source);if(!frame)return;
 if(event.data?.tipo==='maker-cinematic-ready')send(frame);
 else if(event.data?.tipo==='maker-cinematic-world'&&active(frame)){const next=normalizeCinematic({...state,world:event.data.world});if(next.world!==state.world)set(next);}
});
addEventListener('storage',event=>{if(event.key===CINEMATIC_STORAGE)try{set(JSON.parse(event.newValue),{save:false});}catch{}});
new MutationObserver(mount).observe(document.querySelector('#app')||document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-plantilla','data-vista','data-activo']});mount();document.dispatchEvent(new CustomEvent('maker-cinematic-change',{detail:{...state}}));
