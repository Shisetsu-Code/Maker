const assert=require('node:assert/strict'),path=require('node:path');
const {chromium}=require(process.env.WORKSPACE_NODE_MODULES?path.join(process.env.WORKSPACE_NODE_MODULES,'playwright'):'playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const origin=process.env.DEMO_ORIGIN||'http://127.0.0.1:8801';
  const skipTour=async()=>{const button=page.locator('.socio-tour-saltar');try{await button.waitFor({state:'visible',timeout:1500});await button.click();}catch{}};
  await page.goto(origin+'/muestra/socio.html#v=1&p=fdca55&f=1c1c1c&t=29251c&n=MiCasino&vista=lobby&disp=celular&pl=casinotower30');
  const select=page.getByRole('combobox',{name:'Plantilla del lobby'});
  await select.waitFor();await skipTour();
  assert.equal(await select.locator('option').count(),17);
  assert.equal(await select.inputValue(),'casinotower30');
  assert.equal(await page.locator('#seg-plantilla>button:visible').count(),0);
  await select.selectOption('pinaplay');await page.locator('iframe[src*="pinaplay.html"]').waitFor();
  assert.equal(await page.locator('#app').getAttribute('data-plantilla'),'pinaplay');
  await page.waitForFunction(()=>location.hash.includes('pl=pinaplay'));await page.reload();await select.waitFor();await skipTour();
  assert.equal(await select.inputValue(),'pinaplay');
  await select.focus();await select.press('Home');await select.press('End');await select.press('Enter');
  assert.equal(await select.inputValue(),'cobraya');await page.locator('iframe[src*="cobraya.html"]').waitFor();
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.getByRole('radio',{name:'Panel',exact:true}).click();await skipTour();assert.equal(await select.isVisible(),false);
  await page.getByRole('radio',{name:'Lobby',exact:true}).click();await skipTour();await select.waitFor();assert.equal(await select.inputValue(),'cobraya');
  await page.screenshot({path:'work/picker-desktop.png'});
  await page.setViewportSize({width:393,height:852});
  if(await page.locator('#cajon').getAttribute('data-abierto')!=='true')await page.locator('#hoja-cabeza').click();
  await select.waitFor();await select.selectOption('bet30');await page.waitForFunction(()=>document.querySelector('#app').dataset.plantilla==='bet30');
  assert.equal(await page.locator('#maker-template').inputValue(),'bet30');if(await page.locator('#cajon').getAttribute('data-abierto')!=='true')await page.locator('#hoja-cabeza').click();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.screenshot({path:'work/picker-mobile.png'});assert.deepEqual(errors,[]);
  console.log('PASS: 17 opciones, selección, teclado, recarga, panel/lobby y selección móvil sin desbordes.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack);process.exitCode=1;});
