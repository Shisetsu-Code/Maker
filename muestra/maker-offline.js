/* MAKER OFFLINE MODE: no real services and no outbound telemetry. */
(function(){'use strict';
const original=window.fetch.bind(window);
window.fetch=function(resource,options){
 let url;try{url=new URL(typeof resource==='string'?resource:resource.url,location.href)}catch{return Promise.reject(new TypeError('URL invalida'))}
 if(url.origin!==location.origin || url.pathname.startsWith('/api/')){
  return Promise.resolve(new Response(JSON.stringify({ok:false,reason:'demo',mensaje:'Maker funciona solo en modo demostracion local.'}),{status:200,headers:{'content-type':'application/json'}}));
 }
 return original(resource,options);
};
window.WebSocket=class{constructor(){this.readyState=3;this.onopen=null;this.onerror=null;this.onclose=null;this.onmessage=null}addEventListener(){}removeEventListener(){}send(){}close(){}};
window.EventSource=class{constructor(){this.readyState=2}addEventListener(){}removeEventListener(){}close(){}};
if(navigator.sendBeacon)try{navigator.sendBeacon=()=>false}catch{}
window.addEventListener('click',event=>{
 const a=event.target.closest?.('a[href]');if(!a)return;
 try{const dest=new URL(a.href,location.href);if(!['http:','https:'].includes(dest.protocol))return;if(dest.origin!==location.origin){event.preventDefault();event.stopPropagation()}}catch{}
},true);
})();
