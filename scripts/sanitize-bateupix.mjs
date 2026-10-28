import {readFile,writeFile,mkdir,readdir,unlink} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {HarJsonError,parseHarJson} from './har-json.mjs';
const ALLOWED_HOSTS=new Set(['bateupix.com','igamewin.com','gator.drakon.casino']);
const key=url=>{const u=new URL(url,'https://bateupix.com');return u.origin+u.pathname;};
const label=(value,max=100)=>typeof value==='string'?value.replace(/[\u0000-\u001f]/g,' ').trim().slice(0,max):'';
function extension(bytes,mime){if(mime==='image/png'&&bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))return'png';if(mime==='image/jpeg'&&bytes[0]===255&&bytes[1]===216&&bytes[2]===255)return'jpg';if(mime==='image/webp'&&bytes.toString('ascii',0,4)==='RIFF'&&bytes.toString('ascii',8,12)==='WEBP')return'webp';if(mime==='image/avif'&&bytes.toString('ascii',4,8)==='ftyp'&&/avif|avis/.test(bytes.toString('ascii',8,32)))return'avif';return null;}
export function sanitizeBateupix(har){
 const entries=har.log?.entries||[],images=new Map(),assets=[];
 for(const e of entries){try{const u=new URL(e.request.url),c=e.response?.content;if(!ALLOWED_HOSTS.has(u.hostname)||e.response.status!==200||!c?.text||c.encoding!=='base64')continue;const bytes=Buffer.from(c.text,'base64');if(bytes.length>8*1024*1024)continue;const ext=extension(bytes,(c.mimeType||'').split(';')[0]);if(!ext)continue;const id=key(u.href);if(images.has(id))continue;const target='assets/'+createHash('sha256').update(id).digest('hex').slice(0,20)+'.'+ext;images.set(id,target);assets.push({path:target,bytes});}catch{}}
 const json=path=>{for(const e of entries){try{const u=new URL(e.request.url);if(u.hostname==='bateupix.com'&&u.pathname===path&&e.response.status===200)return parseHarJson(e.response.content,path);}catch(error){if(error instanceof HarJsonError)throw error;}}return null;};
 const mapImage=url=>{try{const id=key(url);return images.get(id)||images.get(id+'.webp')||'';}catch{return'';}};
 const home=json('/api/games/homepage-sections')||[],all=json('/api/games')?.data||[],games=[],seen=new Set();
 for(const game of [...home.flatMap(s=>Array.isArray(s.games)?s.games:[]),...all]){const image=mapImage(game.image_url),name=label(game.name),code=label(game.game_code,120),provider=label(game.provider_code,120);if(!image||!name||!code||!provider)continue;const id=createHash('sha256').update(provider+':'+code).digest('hex').slice(0,16);if(seen.has(id))continue;seen.add(id);games.push({id,name,code,provider,image,category:label(typeof game.category==='string'?game.category:'slots',40)});}
 const banners=(json('/api/banners')||[]).map(b=>mapImage(b.image_url)).filter(Boolean);
 const used=new Set([...games.map(game=>game.image),...banners]);
 return {assets:assets.filter(asset=>used.has(asset.path)),data:{version:1,demo:true,banners,games}};
}
if(process.argv[1]?.endsWith('sanitize-bateupix.mjs')){const file=process.argv[2];if(!file)throw Error('Indicar HAR local');const result=sanitizeBateupix(JSON.parse(await readFile(file,'utf8')));const root=path.resolve('public/muestra/bateupix'),assetsRoot=path.join(root,'assets');await mkdir(assetsRoot,{recursive:true});const used=new Set(result.assets.map(asset=>path.basename(asset.path)));for(const name of await readdir(assetsRoot)){const target=path.resolve(assetsRoot,name);if(!target.startsWith(assetsRoot+path.sep))throw Error('Ruta fuera de destino');if(/^[a-f0-9]{20}\.(?:png|jpg|webp|avif)$/.test(name)&&!used.has(name))await unlink(target);}for(const asset of result.assets)await writeFile(path.join(root,asset.path),asset.bytes);await writeFile(path.join(root,'catalog.json'),JSON.stringify(result.data));console.log(JSON.stringify({images:result.assets.length,games:result.data.games.length,banners:result.data.banners.length,bytes:result.assets.reduce((sum,a)=>sum+a.bytes.length,0)}));}
