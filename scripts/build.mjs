import {cp,mkdir,rm,readFile,writeFile} from 'node:fs/promises';
import {parseCatalog} from '../src/core.js';
const templates=parseCatalog(await readFile('templates/catalog.json','utf8'));
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const path of ['index.html','src','templates'])await cp(path,`dist/${path}`,{recursive:true});
await writeFile('dist/.nojekyll','');
console.log(`Built Maker: ${templates.length} templates, ${templates.reduce((n,t)=>n+t.materials.length,0)} combinations. No runtime dependencies.`);
