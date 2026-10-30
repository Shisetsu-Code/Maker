import {readFile,writeFile,readdir} from 'node:fs/promises';
const policy="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'";
for(const file of await readdir('public/muestra')){
 if(!file.endsWith('.html'))continue;
 const path='public/muestra/'+file;let html=await readFile(path,'utf8');
 const meta='<meta http-equiv="Content-Security-Policy" content="'+policy+'">';
 if(!html.includes('Content-Security-Policy'))html=html.replace(/<head>/i,'<head>'+meta);
 else html=html.replace(/<meta http-equiv="Content-Security-Policy" content="connect-src 'self'">/,meta);
 if(!/name=["']referrer["']/i.test(html))html=html.replace(/<head>/i,'<head><meta name="referrer" content="no-referrer">');
 await writeFile(path,html);
}
