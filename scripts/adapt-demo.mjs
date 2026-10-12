import { readFile, writeFile } from 'node:fs/promises';
import { rewriteDemoText } from './demo-rewrite.mjs';
import { installDesignEditor } from './install-design-editor.mjs';
const manifest = JSON.parse(await readFile('work/recovery-manifest.json','utf8'));
const mappings = Object.fromEntries(manifest.resources.filter(r => r.mime.startsWith('image/') && !r.source.startsWith('https://rushybet.com/')).map(r=>[r.source,'/'+r.target]));
await writeFile('public/muestra/demo-assets-map.js','window.__demoRecoveredAssets = Object.freeze('+JSON.stringify(mappings)+');\n');
for (const name of ['socio.js','socio-lobby.js','socio-panel.js','azul.js','blaze.js','brasa.js']) {
  const file = 'public/muestra/'+name;
  await writeFile(file,rewriteDemoText(await readFile(file,'utf8')));
}
for (const name of ['socio.html','vista-socio-lobby.html','vista-socio-panel.html','vista-azul.html','vista-blaze.html','vista-brasa.html']) {
  const file='public/muestra/'+name;
  let text=await readFile(file,'utf8');
  text=text.replace("connect-src 'self' https://rushyclub.com", "connect-src 'self'");
  if (!text.includes('src="demo-assets-map.js"')) text=text.replace('<head>','<head>\n<script src="demo-assets-map.js"></script>\n<script src="demo-assets.js"></script>');
  await writeFile(file,text);
}
console.log(JSON.stringify({localImageMappings:Object.keys(mappings).length,adaptedViews:6}));
await installDesignEditor();
