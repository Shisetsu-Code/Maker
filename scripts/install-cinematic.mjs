import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
export const TEMAS_REVISION='7c4165ba90352dce24ef2c7e888b83db0a1a1499';
export const CINEMATIC_IDS=['pirates','olympus','cyberpunk','steampunk','space','western','candy','dinosaurs','phoenix','egypt','japan','china','india','vikings','atlantis','dragons','vampires','artdeco','masquerade','muertos','alchemy','ice','forest','racing','wasteland','eldorado','astral'];
export function registerCinematic(source){
 if(source.includes('cinematic:`Cinematic · prueba`'))return source;
 const patches=[
  ['function Bn(e){return','function Bn(e){return e===`cinematic`||'],
  ['Wn=Object.freeze({','Wn=Object.freeze({cinematic:Object.freeze({p:`#dfb96f`,f:`#07161b`,t:`#0c2026`}),'],
  ['function Nr(e){','function Nr(e){if(e===`cinematic`)return `cinematic/index.html`;'],
  ['function Xi(){','function Xi(){if(G.plantilla===`cinematic`&&G.vista===`lobby`)return `cinematic-${G.disp}`;'],
  ['zo=Object.freeze({','zo=Object.freeze({cinematic:`Cinematic · prueba`,'],
 ];
 for(const[from,to]of patches){if(!source.includes(from))throw Error('Cambió el punto de registro: '+from);source=source.replace(from,to);}
 return source.replaceAll('Diecisiete diseños para tu lobby','Dieciocho familias para tu lobby');
}
export function installCinematicHtml(html){
 if(!html.includes('data-valor="cinematic"'))html=html.replace('>Bateupix</button>','>Bateupix</button>\n<button type="button" class="tocable" role="radio" data-valor="cinematic" aria-checked="false">Cinematic · prueba</button>');
 if(!html.includes('href="cinematic-controls.css"'))html=html.replace('</head>','<link rel="stylesheet" href="cinematic-controls.css">\n</head>');
 if(!html.includes('src="cinematic-controls.js"'))html=html.replace('</body>','<script type="module" src="cinematic-controls.js"></script>\n</body>');
 return html;
}
export async function installCinematic(sourceDirectory){
 const source=path.resolve(sourceDirectory),target='public/muestra/cinematic';
 const revision=execFileSync('git',['-C',source,'rev-parse','HEAD'],{encoding:'utf8'}).trim();
 if(revision!==TEMAS_REVISION)throw Error('La fuente Temas no coincide con la revisión documentada');
 await mkdir(target+'/assets/cinematic',{recursive:true});await mkdir(target+'/assets/icons',{recursive:true});await mkdir(target+'/themes',{recursive:true});
 for(const file of ['app.mjs','schema.mjs','motion.mjs','styles.css','icons.mjs','icons.css','icon-registry.mjs','favicon.svg','expansion.mjs','expansion-ui.mjs','expansion-icons.mjs','expansion.css']){
  let text=await readFile(path.join(source,'public/cinematic',file),'utf8');
  if(file==='schema.mjs')text="import {cinematicArt} from './art.mjs';\n"+text.replace("import { EXPANSION_ART } from './expansion-art.mjs';",'').replace("from '../model.mjs'","from './model.mjs'").replace('art:EXPANSION_ART[id]?.file||`assets/cinematic/${id}.avif`','art:cinematicArt(id)').replace('/** The imagery is cropped from the approved concept board. Replace art URLs with HD renders when available. */','/** Independent generated illustrations, served locally at their native resolution. */');
  if(file==='app.mjs')text=text.replace("import { prepareExpansionArt } from './expansion-art.mjs';",'').replace("const KEY='temas:v1'","const KEY='maker:cinematic:catalog:v1'").replace('async function setWorld(','export async function setWorld(').replace("const art=id=>globalThis.TEMAS_ART?.[id]||(WORLDS[id].expansion?'data:image/png;base64,AAAA':WORLDS[id].art);","const art=id=>WORLDS[id].art;").replace('await prepareExpansionArt();','').replace(/Las ilustraciones proceden[^.]+\./,'Las ilustraciones se generaron individualmente y se sirven en alta resoluci\u00f3n desde recursos locales.');
  if(file==='expansion-ui.mjs')text=text.replace("link.href='cinematic/expansion.css'","link.href=new URL('./expansion.css',import.meta.url).href;link.id='expansion-styles'");
  await writeFile(target+'/'+file,text);
 }
 await copyFile(path.join(source,'public/model.mjs'),target+'/model.mjs');
 await copyFile(path.join(source,'public/themes/worlds.mjs'),target+'/themes/worlds.mjs');
 for(const id of CINEMATIC_IDS.slice(0,9))for(const group of ['cinematic','icons'])await copyFile(path.join(source,'public/assets',group,id+'.avif'),target+'/assets/'+group+'/'+id+'.avif');
 let html=await readFile(path.join(source,'public/index.html'),'utf8');
 html=html.replaceAll('href="cinematic/','href="').replaceAll('src="cinematic/','src="').replace('<body>','<body data-catalog="cinematic">');
  html=html.replaceAll('src="assets/cinematic/','src="assets/cinematic-hd/');
 html=html.replace('id="scene-image" src=','id="scene-image" src=').replace('alt="" aria-hidden="true" fetchpriority="high"','alt="Portada del mundo" fetchpriority="high"');
 const policy="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'";
 html=html.replace('<head>','<head><meta name="referrer" content="no-referrer"><meta http-equiv="Content-Security-Policy" content="'+policy+'">');
 html=html.replace('</head>','<link rel="stylesheet" href="maker.css">\n<link rel="stylesheet" href="frames.css">\n</head>').replace('</body>','<script type="module" src="maker-bridge.mjs"></script><script type="module" src="../design-editor.js"></script>\n</body>');
 await writeFile(target+'/index.html',html);
 await writeFile('public/muestra/socio.js',registerCinematic(await readFile('public/muestra/socio.js','utf8')));
 await writeFile('public/muestra/socio.html',installCinematicHtml(await readFile('public/muestra/socio.html','utf8')));
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await installCinematic(process.argv[2]||'../Temas-review');
