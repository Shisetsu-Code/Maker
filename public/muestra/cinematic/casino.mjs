import {normalizePresentation} from '../casino-settings.mjs';
import {setCatalogPresentation} from './app.mjs';
let current=normalizePresentation();
function install(){
 if(document.documentElement.dataset.casinoInstalled==='true')return;document.documentElement.dataset.casinoInstalled='true';
 const link=document.createElement('link');link.id='casino-styles';link.rel='stylesheet';link.href=new URL('./casino.css',import.meta.url).href;if(!document.getElementById('casino-styles'))document.head.append(link);
 const promotion=document.createElement('p');promotion.id='casino-promotion';document.querySelector('.hero-copy h1').after(promotion);
 const deck=document.querySelector('.category-deck');
 for(const [id,label,symbol]of [['roulette','Ruleta','card'],['blackjack','Blackjack','card'],['recent','Recientes','grid']]){const button=document.createElement('button');button.type='button';button.className='category casino-category';button.dataset.category=id;button.setAttribute('aria-pressed','false');button.innerHTML=`<svg class="icon" aria-hidden="true"><use href="#i-${symbol}"/></svg><span></span>`;button.querySelector('span').textContent=label;const drawings={roulette:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6l12 12M6 18 18 6"/>',blackjack:'<rect x="3" y="4" width="12" height="17" rx="2"/><path d="M9 1h12v17M9 8l3 5-3 4-3-4Z"/>',recent:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>'};button.querySelector('svg').innerHTML=drawings[id];deck.append(button);}
 document.querySelector('.catalog-heading .eyebrow').textContent='TU CASINO, A TU MANERA';
 document.getElementById('catalog-title').textContent='Encontrá tu próximo juego';
 document.querySelector('#provider').closest('label').querySelector('.sr-only').textContent='Filtrar por proveedor';
 document.querySelector('#provider option').textContent='Todos los proveedores';
}
export function applyCasinoSettings(value){install();current=normalizePresentation(value);const root=document.documentElement;
 root.dataset.layout=current.layout;root.dataset.ornaments=current.ornaments;root.dataset.cardSize=current.cardSize;
 root.style.setProperty('--casino-hero-height',current.heroHeight+'px');root.style.setProperty('--casino-columns',current.columns);root.style.setProperty('--casino-mobile-columns',current.mobileColumns);
 document.getElementById('casino-promotion').textContent=current.promotion;document.querySelector('[data-category=all]').lastElementChild.textContent=current.layout==='casino'?'Todos los juegos':'Descubrir';
 setCatalogPresentation(current);
}
