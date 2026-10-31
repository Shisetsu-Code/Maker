import {setWorld} from './app.mjs';
import {WORLDS} from './schema.mjs';
import {normalizeCinematic,CINEMATIC_STORAGE} from '../cinematic-settings.mjs';
const root=document.documentElement,state={vars:{},disc:{},imgs:{}};let settings=normalizeCinematic(),applying=0,configured=parent===window;
const setProperty=(name,value)=>{if(root.style.getPropertyValue(name)!==value)root.style.setProperty(name,value);};
function colors(){
 const w=WORLDS[root.dataset.world]||WORLDS.pirates,values=[...w.colors];
 if(settings.brandColors){values[0]=state.vars['--dm-f']||values[0];values[1]=state.vars['--dm-t']||values[1];values[2]=state.vars['--dm-p']||values[2];const rgb=values[0].slice(1).match(/../g)?.map(v=>parseInt(v,16));const light=rgb&&rgb[0]*.299+rgb[1]*.587+rgb[2]*.114>150;values[3]=light?'#172126':'#f2f1ed';values[4]=light?'#536168':'#b6c2c8';}
 ['--bg','--panel','--accent','--ink','--muted'].forEach((key,index)=>setProperty(key,values[index]));
 root.dataset.makerBrandColors=String(settings.brandColors);setProperty('--maker-button',settings.brandColors?(state.vars['--dm-b']||values[2]):values[2]);setProperty('--maker-button-ink',settings.brandColors?(state.vars['--dm-b-ink']||'#171a1b'):(w.light?'#fff':'#171a1b'));
}
function brand(){
 const name=typeof state.disc.nombre==='string'?state.disc.nombre.slice(0,100):'',logo=state.imgs['rushybet/rushybet-logo.webp'];
 let localBlob=false;try{localBlob=typeof logo==='string'&&logo.startsWith('blob:')&&new URL(logo).origin===location.origin;}catch{}
 const custom=state.disc.logoPropio===true&&typeof logo==='string'&&(localBlob||/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(logo));
 document.querySelectorAll('.brand').forEach(link=>{let image=link.querySelector('.maker-brand-logo');if(!image){image=document.createElement('img');image.className='maker-brand-logo';image.alt='Logo de tu casino';image.hidden=true;link.prepend(image);}image.hidden=!custom;if(custom&&image.getAttribute('src')!==logo)image.src=logo;else if(!custom)image.removeAttribute('src');
  for(const child of [...link.children])if(child!==image)child.hidden=custom;
 });
 for(const node of document.querySelectorAll('.brand-name')){const text=name||WORLDS[root.dataset.world]?.brand||'Tu casino';if(node.textContent!==text)node.textContent=text;}
 document.body.classList.toggle('maker-art-off',state.disc.imgOn===false);
}
function paint(){colors();brand();}
async function configure(value){const version=++applying;settings=normalizeCinematic(value);const success=await setWorld(settings.world,{save:true});if(!success||version!==applying)return;paint();configured=true;}
window.__demo={vista:'lobby',listo:true,dibujos:1,vars(value){if(!value||typeof value!=='object')return;for(const[key,v]of Object.entries(value))if(key.startsWith('--dm-')&&typeof v==='string'&&!/[;{}]/.test(v)&&/^#[0-9a-f]{3,8}$/i.test(v))state.vars[key]=v;colors();},disc(value){if(value&&typeof value==='object')Object.assign(state.disc,value);brand();},imgs(value){if(value&&typeof value==='object')Object.assign(state.imgs,value);brand();},estado(){return{vars:{...state.vars},disc:{...state.disc},imgs:{...state.imgs}};}};
addEventListener('message',event=>{if(event.source!==parent||event.origin!==location.origin)return;const data=event.data;if(data?.tipo==='maker-cinematic-config')configure(data.settings).catch(()=>{});else for(const key of ['vars','disc','imgs'])if(data?.tipo===key&&data[key])window.__demo[key](data[key]);});
document.addEventListener('temas:themechange',()=>{paint();if(configured){const world=root.dataset.world;if(parent===window){settings={...settings,world};try{localStorage.setItem(CINEMATIC_STORAGE,JSON.stringify(settings));}catch{}}else parent.postMessage({tipo:'maker-cinematic-world',world},location.origin);}});
const scene=document.querySelector('#scene-image');new MutationObserver(()=>{const src=scene.getAttribute('src');if(src&&!/['"\\\n\r]/.test(src))document.querySelector('#hero').style.setProperty('--scene-url','url("'+src+'")');}).observe(scene,{attributes:true,attributeFilter:['src']});
if(parent===window){let stored;try{stored=JSON.parse(localStorage.getItem(CINEMATIC_STORAGE));}catch{}const params=new URLSearchParams(location.search);configure({...normalizeCinematic(stored),world:params.get('theme')||stored?.world,brandColors:params.get('cinematicColor')==='brand'||stored?.brandColors===true}).catch(()=>{});}
else{parent.postMessage({tipo:'listo',vista:'lobby'},location.origin);parent.postMessage({tipo:'maker-cinematic-ready'},location.origin);}paint();
