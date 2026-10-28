import './bateupix.js';
try{
 const data=await(await fetch('pinaplay/catalog.json')).json(),games=new Map(data.games.map(g=>[g.id,g])),root=document.querySelector('#pp-collections');
 for(const group of data.groups.slice(0,6)){
  const section=document.createElement('section');section.className='pp-collection';
  const header=document.createElement('div');header.className='pp-row-heading';const title=document.createElement('h2');title.textContent=group.name;const all=document.createElement('button');all.textContent='Ver todos →';all.dataset.filter='collection:'+group.id;header.append(title,all);
  const row=document.createElement('div');row.className='pp-row';
  group.games.slice(0,12).forEach((id,index)=>{const game=games.get(id);if(!game)return;const button=document.createElement('button');button.className='pp-game';button.dataset.game=id;button.setAttribute('aria-label','Ver '+game.name);const img=document.createElement('img');img.src='pinaplay/'+game.image;img.alt=game.name;img.loading='lazy';const label=document.createElement('span');label.textContent=game.name;const number=document.createElement('b');number.textContent=String(index+1).padStart(2,'0');button.append(img,label);if(section===root.firstElementChild||root.childElementCount===0)button.append(number);row.append(button);});section.append(header,row);root.append(section);
 }
}catch{document.querySelector('#pp-collections').textContent='Las colecciones no pudieron cargarse. Podés explorar el catálogo debajo.';}
