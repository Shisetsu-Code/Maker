import {readFile,writeFile} from 'node:fs/promises';
export async function installDesignEditor(){
  for(const name of ['socio.html','vista-socio-lobby.html','vista-socio-panel.html','vista-azul.html','vista-blaze.html','vista-brasa.html','resort.html']){
    const path='public/muestra/'+name;let html=await readFile(path,'utf8');
    if(!html.includes('src="design-editor.js"'))html=html.replace('</body>','<script type="module" src="design-editor.js"></script>\n</body>');
    await writeFile(path,html);
  }
  const path='public/muestra/socio.js';let source=await readFile(path,'utf8');
  source=source.replace('let n=ts(e,new Date),r=es(e.nombre);','let n={...ts(e,new Date),ajustes:window.__designExtras?.estado()},r=es(e.nombre);');
  await writeFile(path,source);
}
if(process.argv[1]?.endsWith('install-design-editor.mjs'))await installDesignEditor();
