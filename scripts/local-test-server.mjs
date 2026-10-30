import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import worker from '../src/worker.mjs';
const root=path.resolve('public'),port=Number(process.env.PORT||8802);
const mime={'.html':'text/html','.js':'application/javascript','.mjs':'application/javascript','.css':'text/css','.json':'application/json','.avif':'image/avif','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2','.svg':'image/svg+xml'};
const env={ASSETS:{async fetch(request){try{const pathname=decodeURIComponent(new URL(request.url).pathname),file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep))return new Response('Not found',{status:404});return new Response(await readFile(file),{headers:{'content-type':mime[path.extname(file)]||'application/octet-stream'}});}catch{return new Response('Not found',{status:404});}}}};
http.createServer(async(req,res)=>{try{const chunks=[];for await(const chunk of req)chunks.push(chunk);const request=new Request('http://127.0.0.1:'+port+req.url,{method:req.method,headers:req.headers,...(chunks.length?{body:Buffer.concat(chunks)}:{})}),response=await worker.fetch(request,env);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));}catch{res.writeHead(500);res.end('Test server error');}}).listen(port,'127.0.0.1',()=>console.log('Maker test server: http://127.0.0.1:'+port));
