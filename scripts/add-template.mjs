import {readFile,writeFile} from 'node:fs/promises';
import {installBateupix} from './register-bateupix.mjs';

export function addTemplate(source) {
  if (source.includes('duplicada:`Rushybet 2`')) return source.replaceAll('vista-rushybet-2.html','resort.html');
  source = source.replace(/([\w.]+)===`clasica`/g,'($1===`clasica`||$1===`duplicada`)')
    .replace(/([\w.]+)!==`clasica`/g,'($1!==`clasica`&&$1!==`duplicada`)')
    .replace('Wn=Object.freeze({clasica:', 'Wn=Object.freeze({duplicada:Object.freeze({p:`#d5b66d`,f:`#10251f`,t:`#213c32`}),clasica:')
    .replace('function Nr(e){return', 'function Nr(e){if(e===`duplicada`)return `resort.html`;return')
    .replace('function Xi(){return', 'function Xi(){if(G.plantilla===`duplicada`&&G.vista===`lobby`)return `duplicada-${G.disp}`;return')
    .replace('zo=Object.freeze({clasica:', 'zo=Object.freeze({duplicada:`Rushybet 2`,clasica:')
    .replace('Cuatro diseños para tu lobby:', 'Cinco diseños para tu lobby:')
    .replace('Cuatro diseños para tu lobby.', 'Cinco diseños para tu lobby.')
    .replace('RushyClub azul, BlazeBet y Brasa.', 'RushyClub azul, BlazeBet, Brasa y Rushybet 2.');
  return source;
}

if (process.argv[1]?.endsWith('add-template.mjs')) {
  const base='public/muestra/';
  await writeFile(base+'socio.js',addTemplate(await readFile(base+'socio.js','utf8')));
  let html=await readFile(base+'socio.html','utf8');
  if(!html.includes('data-valor="duplicada"')) html=html.replace('>Brasa</button>', '>Brasa</button>\n        <button type="button" class="tocable" role="radio" data-valor="duplicada" aria-checked="false">Rushybet 2</button>');
  await writeFile(base+'socio.html',html);
  await installBateupix();
}
