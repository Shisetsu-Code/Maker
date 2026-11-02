const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs/promises');
const {chromium}=require(process.env.WORKSPACE_NODE_MODULES?path.join(process.env.WORKSPACE_NODE_MODULES,'playwright'):'playwright');
const origin=process.env.DEMO_ORIGIN||'http://127.0.0.1:8820';
const worlds=['egypt','japan','china','india','vikings','atlantis','dragons','vampires','artdeco','masquerade','muertos','alchemy','ice','forest','racing','wasteland','eldorado','astral'];
(async()=>{const browser=await chromium.launch({channel:'msedge',headless:true});try{
 const page=await browser.newPage(),errors=[],failures=[],external=[];page.setDefaultTimeout(15000);
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failures.push(r.status()+' '+r.url());});page.on('request',r=>{if(/^https?:/.test(r.url())&&new URL(r.url()).origin!==origin)external.push(r.url());});
 await fs.mkdir('work/expansion-layout',{recursive:true});
 for(const [label,viewport]of [['desktop',{width:1440,height:1000}],['mobile',{width:393,height:852}]]){
  await page.setViewportSize(viewport);
  for(const id of worlds){
   await page.goto(origin+'/muestra/cinematic/index.html?theme='+id);await page.locator('html[data-ready=true][data-world='+id+']').waitFor();
   const dimensions=await page.locator('#scene-image').evaluate(async img=>{await img.decode();return [img.naturalWidth,img.naturalHeight];});assert.ok(Math.min(...dimensions)>=1200,id+' native art');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),label+' '+id+' page overflow');
   await page.locator('#world-trigger').click();await page.locator('#world-dialog').waitFor({state:'visible'});
   const dialog=await page.locator('#world-dialog').evaluate(el=>({width:el.getBoundingClientRect().width,available:innerWidth,scroll:el.scrollWidth,client:el.clientWidth}));assert.ok(dialog.width<=dialog.available&&dialog.scroll<=dialog.client,label+' '+id+' universe dialog overflow '+JSON.stringify(dialog));
   await page.locator('#world-dialog [data-close]').first().click();
   if(['japan','egypt','astral','racing'].includes(id)){await page.locator('#motion-toggle').click();await page.screenshot({path:'work/expansion-layout/'+id+'-'+label+'.png'});}
  }
 }
 assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);assert.deepEqual(external,[]);console.log('PASS: 18 expansion worlds, desktop/mobile native artwork, page/dialog overflow, eight clean screenshots, no browser/request errors');
}finally{await browser.close();}})().catch(error=>{console.error(error.stack);process.exitCode=1;});
