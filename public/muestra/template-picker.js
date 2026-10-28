const group=document.querySelector('#seg-plantilla');
if(group&&!group.querySelector('select')){
 const buttons=()=>[...group.querySelectorAll('button[role="radio"][data-valor]')];
 const label=document.createElement('label');label.htmlFor='maker-template';label.textContent='Plantilla';
 const select=document.createElement('select');select.id='maker-template';select.setAttribute('aria-label','Plantilla del lobby');
 const arrow=document.createElement('span');arrow.className='template-picker-arrow';arrow.setAttribute('aria-hidden','true');
 let fingerprint='';
 const sync=()=>{const source=buttons(),active=source.find(b=>b.getAttribute('aria-checked')==='true'),next=source.map(b=>b.dataset.valor+'\0'+b.textContent.trim()+'\0'+b.disabled).join('\n');if(next!==fingerprint){select.replaceChildren(...source.map(button=>{const option=document.createElement('option');option.value=button.dataset.valor;option.textContent=button.textContent.trim();option.disabled=button.disabled;return option;}));fingerprint=next;}if(active)select.value=active.dataset.valor;const disabled=source.every(b=>b.disabled);if(select.disabled!==disabled)select.disabled=disabled;};
 select.addEventListener('change',()=>{buttons().find(button=>button.dataset.valor===select.value)?.click();sync();});
 select.addEventListener('keydown',event=>event.stopPropagation());
 group.classList.add('template-picker');group.removeAttribute('role');group.removeAttribute('aria-label');group.append(label,select,arrow);
 new MutationObserver(sync).observe(group,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-checked','disabled']});sync();
}
