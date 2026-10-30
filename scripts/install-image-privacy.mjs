import {readFile,writeFile} from 'node:fs/promises';
const path='public/muestra/socio.js';let source=await readFile(path,'utf8');
if(!source.includes('maker-clean-logo')){
 const upload='async function io(e,t){';
 if(!source.includes(upload))throw Error('Logo upload entry point changed');
 source=source.replace(upload,upload+'/*maker-clean-logo*/try{if(e.size>2097152)throw Error("Elegí un logo de hasta 2 MB.");const {sanitizeImageData}=await import("./image-privacy.mjs"),clean=await sanitizeImageData(await hi(e),2000000),raw=atob(clean.split(",")[1]),mime=clean.slice(5,clean.indexOf(";"));e=new File([Uint8Array.from(raw,c=>c.charCodeAt(0))],mime==="image/webp"?"logo.webp":"logo.png",{type:mime});}catch(error){Y(t,"error",error.message||"No pudimos limpiar ese logo.");return}');
 source=source.replace('creado:t.toISOString(),','').replace('original:e.logo.archivo,','');
 const listener='function ul(e){let t=il(`btn-bajar-diseno`,`Descargar mi diseño`,`i-download`,!1);t.boton.addEventListener(`click`,()=>{';
 if(!source.includes(listener))throw Error('Design download entry point changed');
 source=source.replace(listener,listener.replace('()=>{','async()=>{'));
 const download='let n={...ts(e,new Date),ajustes:window.__designExtras?.estado()},r=es(e.nombre);';
 if(!source.includes(download))throw Error('Design export payload changed');
 source=source.replace(download,'const {sanitizeImageData,sanitizeDesignImages}=await import("./image-privacy.mjs");try{if(e.logo){const clean=await sanitizeImageData(e.logo.original??e.logo.dataUrl,2000000);e={...e,logo:{...e.logo,original:clean,dataUrl:clean,archivo:"logo.png"}}}var cleanSettings=await sanitizeDesignImages(window.__designExtras?.estado());}catch(error){t.decir(error.message||"No pudimos preparar las imágenes.","aviso");return}let n={...ts(e,new Date),ajustes:cleanSettings},r=es(e.nombre);');
 await writeFile(path,source);
}
