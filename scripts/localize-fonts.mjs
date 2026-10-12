import {readFile,writeFile} from 'node:fs/promises';
export async function localizeSharedFonts(){const path='public/assets/external/fonts.googleapis.com/css2.b4918935dc26.css';const css=await readFile(path,'utf8');const local=css.replace(/@font-face\s*\{[^}]*\}/g,block=>/https?:\/\//.test(block)?'':block);await writeFile(path,local);}
if(process.argv[1]?.endsWith('localize-fonts.mjs'))await localizeSharedFonts();
