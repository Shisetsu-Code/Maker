/* The original CTA submitted the design to another company. Use the local JSON export instead. */
(function(){'use strict';
const modify=()=>{
 const b=document.querySelector('#btn-mandar-diseno');
 if(b){b.title='Descargar tu diseño en JSON (sin enviar datos)';b.setAttribute('aria-label','Descargar diseño en JSON');const label=b.querySelector('.btn-tx');if(label && label.textContent!=='Descargar diseño')label.textContent='Descargar diseño';}
};
new MutationObserver(modify).observe(document.body,{subtree:true,childList:true});modify();
document.addEventListener('click',e=>{
 const btn=e.target.closest?.('#btn-mandar-diseno');if(!btn)return;
 e.preventDefault();e.stopImmediatePropagation();e.stopPropagation();
 const download=document.querySelector('#btn-bajar-diseno');if(download)download.click();
},true);
})();
