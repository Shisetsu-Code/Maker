import {readFile,writeFile,readdir} from 'node:fs/promises';
export async function localizeSharedFonts(){
 const root='public/assets/external/fonts.googleapis.com',fonts=new Set(await readdir('public/assets/external/fonts.gstatic.com',{recursive:true}));
 for(const file of await readdir(root)){
  if(!file.endsWith('.css'))continue;
  const path=root+'/'+file,css=await readFile(path,'utf8');
  const local=css.replace(/@font-face\s*\{[^}]*\}/g,block=>{
   const rewritten=block.replace(/https:\/\/fonts\.gstatic\.com\/([^)'"\s]+)/g,(whole,relative)=>fonts.has(relative)||fonts.has(relative.replaceAll('/','\\'))?'/assets/external/fonts.gstatic.com/'+relative:whole);
   return /https?:\/\//.test(rewritten)?'':rewritten;
  });
  await writeFile(path,local.trimEnd()+'\n');
 }
}
if(process.argv[1]?.endsWith('localize-fonts.mjs'))await localizeSharedFonts();
