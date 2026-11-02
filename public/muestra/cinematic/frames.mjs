/** Local vector ornament. Geometry is trusted project data, never imported user CSS. */
const frame=(name,corner,line,radius='3px')=>Object.freeze({name,corner,line,radius});
export const FRAME_THEMES=Object.freeze({
 vegas:frame('Marquesina y fichas','M5 44V14a9 9 0 0 1 9-9h30M12 44V20a8 8 0 0 1 8-8h24M20 27a8 8 0 1 0 16 0 8 8 0 1 0-16 0M28 19v4m0 8v4m-8-8h4m8 0h4','M0 12h18m28 0h18M22 12l10-10 10 10-10 10ZM32 7v10M5 8h2m5 8h2m36-8h2m5 8h2','6px'),
 pirates:frame('Cabo trenzado y herrajes','M5 44V12Q5 5 12 5H44M11 44V16Q11 11 16 11H44M4 25l8-8m-8 20 8-8M25 4l-8 8m20-8-8 8M18 18l6 6m-6 0 6-6','M0 10Q8 2 16 10T32 10T48 10T64 10M0 14Q8 22 16 14T32 14T48 14T64 14M0 12h64'),
 olympus:frame('Greca de mármol','M5 45V5h40M12 38V12h26v18H21V21h9M19 45v-7h26','M0 18h8V6h16v12h-8v-6h16V6h16v12h-8v-6h16V6h8'),
 cyberpunk:frame('Circuitos y cortes de neón','M4 44V14L14 4h30M12 44V22L22 12h22M3 28h12M28 3v12M36 12v7h8','M0 16h12l8-8h14l8 8h12l6-6h4M22 12h10M46 8h6', '0px'),
 steampunk:frame('Latón, remaches y engranajes','M5 44V13a8 8 0 0 1 8-8h31M12 44V20a8 8 0 0 1 8-8h24M15 22a7 7 0 1 0 14 0 7 7 0 1 0-14 0M22 12v4m0 12v4m-10-10h4m12 0h4M15 15l3 3m8 8 3 3m0-14-3 3m-8 8-3 3','M0 12h20m24 0h20M25 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M32 2v4m0 12v4m-10-10h4m12 0h4'),
 space:frame('Órbitas y paneles de nave','M4 42V18A14 14 0 0 1 18 4h24M12 42V24A12 12 0 0 1 24 12h18M7 28h10m11-21v10M23 23a4 4 0 1 0 8 0 4 4 0 1 0-8 0','M0 12h16m32 0h16M20 12h4m16 0h4M26 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0','16px'),
 western:frame('Cuero repujado y estrellas','M5 44V5h39M11 44V11h33M17 22l4-9 4 9 10 1-8 6 2 10-8-5-8 5 2-10-8-6Z','M0 12h19m26 0h19M32 3l3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1Z'),
 candy:frame('Glaseado y ondas de caramelo','M5 44V15Q5 5 15 5h29M12 44V22q-6-5 0-10 5-6 10 0h22M21 21q10-8 16 3t-8 12q-9-6 2-10','M0 12q8-14 16 0t16 0 16 0 16 0M0 18q8-8 16 0t16 0 16 0 16 0','18px'),
 dinosaurs:frame('Lianas y marcas de garra','M6 44q12-15 2-26T44 6M14 44q11-19 0-27Q24 9 44 14M8 30q12 3 13-8-10 0-13 8M29 8q-1 12-11 11 1-10 11-11M31 25l-3 13m10-11-4 14','M0 15q16-13 32 0t32 0M12 10q6-11 13-5-2 10-13 5M40 17q8 10 14 1-6-9-14-1','5px'),
 phoenix:frame('Plumas y lenguas de fuego','M6 44Q0 19 20 14 12 4 44 5M12 44Q9 29 24 22q-1-9 20-10M19 43q-3-10 10-18 0 9-10 18M28 17q-4-10 13-10-3 9-13 10','M0 15q18 1 25-8-3 9 7 14 10-5 7-14 7 9 25 8M23 16q9-17 9-14 0 13 9 14'),
 egypt:frame('Pórticos y loto escalonado','M4 44V4h40M10 44V10h34M16 44V16h28M21 35l8-7 8 7m-8-7V19m-8 4 8 5 8-5','M0 17h18l5-5-5-5h8l6 6 6-6h8l-5 5 5 5h18M32 13v8','1px'),
 japan:frame('Ensamblajes y olas japonesas','M5 44V5h39M12 44V12h32M4 22h18V4M16 35q0-12 12-12m-6 18q0-12 12-12m-6 18q0-12 12-12','M0 18q8-16 16 0 8-16 16 0 8-16 16 0 8-16 16 0M4 18q4-8 8 0m8 0q4-8 8 0m8 0q4-8 8 0m8 0q4-8 8 0','1px'),
 china:frame('Celosías y nubes imperiales','M4 44V4h40M11 44V11h33M18 44V18h26M5 28h13V5M24 32q-7-10 2-11 7-2 7 5 10-3 10 6H24','M0 15h12q-4-10 5-10 5 0 5 6 8-4 11 3h8q-1-8 6-8 7 0 6 9h11','2px'),
 india:frame('Jali y pétalos de loto','M5 44V17Q5 8 15 9L25 3l9 6h10M12 44V22q0-8 10-9l8-5M21 31q-3-12 6-15 10 8 4 17M17 27q10-2 17 9-13 2-17-9','M0 17h16m32 0h16M32 3q-9 8 0 18 9-10 0-18M18 9q0 12 14 12 14 0 14-12-9 0-14 12-5-12-14-12','14px'),
 vikings:frame('Entrelazados y runas nórdicas','M5 44V5h39M11 44V11h33M4 31l22-22 9 9-22 22M5 22l17 17 17-17L22 5M22 14v16m0-12 7-4m-7 10 7 4','M0 12l12-8 12 16L40 4l12 16 12-8M0 12l12 8L28 4l12 16L52 4l12 8','1px'),
 atlantis:frame('Olas y conchas marinas','M5 44V19Q5 5 19 5h25M12 44V24Q12 12 24 12h20M21 37l-5-10q5-14 16-10 13 7 5 20H21Zm0 0 4-16m3 16 2-16m3 16 2-12','M0 15q8-10 16 0t16 0 16 0 16 0M0 20q8-10 16 0t16 0 16 0 16 0','20px'),
 dragons:frame('Escamas y herrajes de fortaleza','M4 44V14L14 4h30M11 44V20l9-9h24M18 31l9-9 9 9-9 12Zm9-9v21m-9-12h18','M0 12l8-8 8 8-8 8Zm16 0 8-8 8 8-8 8Zm16 0 8-8 8 8-8 8Zm16 0 8-8 8 8-8 8Z','2px'),
 vampires:frame('Arcos ojivales y tracería','M5 44V24Q5 10 24 4h20M12 44V28q0-13 17-17h15M21 41V29q0-7 8-12 8 5 8 12v12M21 32h16m-8-15v24','M0 18h16m32 0h16M20 18V12q0-6 12-10 12 4 12 10v6M26 18V12l6-5 6 5v6M32 7v14','12px'),
 artdeco:frame('Abanicos y geometría Art Déco','M4 44V4h40M10 44V10h34M16 44V16h28M16 36l20-20M16 28l12-12M16 44l28-28M24 44l20-20','M0 18h14l18-16 18 16h14M20 18 32 6l12 12M26 18l6-7 6 7M32 2v20','0px'),
 masquerade:frame('Filigrana veneciana','M5 44V21Q5 5 21 5h23M12 44V25q0-13 13-13h19M19 39q-9-10 1-17 13-6 17 6 2 10-8 10-7 0-5-6','M0 14q10-12 20 0-3 9-9 4-6-9 9-11 10-2 12 9 2-11 12-9 15 2 9 11-6 5-9-4 10-12 20 0','16px'),
 muertos:frame('Cempasúchil y papel picado','M5 44V5h39M12 44V12h32M25 19a5 5 0 1 0 0 10 5 5 0 1 0 0-10M25 16v-5m0 27v-5m-9-9h-5m27 0h-5m-15-7-4-4m19 19-4-4m4-11 4-4m-19 19 4-4','M0 4h64M0 5v9l8 7 8-7V5m0 0v9l8 7 8-7V5m0 0v9l8 7 8-7V5m0 0v9l8 7 8-7V5M6 9h4m12 0h4m12 0h4m12 0h4','10px'),
 alchemy:frame('Círculos y sellos alquímicos','M5 44V5h39M12 44V12h32M18 27a10 10 0 1 0 20 0 10 10 0 1 0-20 0M28 16l9 16H19Zm0 4v13','M0 12h18m28 0h18M22 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0M32 4l7 13H25ZM32 2v20','8px'),
 ice:frame('Facetas de cristal','M4 44V16L16 4h28M12 44V22l10-10h22M19 32l10-16 10 16-10 11Zm10-16v27M19 32h20','M0 12h18m28 0h18M20 12 32 2l12 10-12 10Zm12-10v20M20 12h24','2px'),
 forest:frame('Ramas y hojas entrelazadas','M5 44Q17 25 7 15T44 5M12 44Q24 23 15 17T44 12M17 29q-4-13 8-14 2 12-8 14M28 10q10-9 16-3-5 10-16 3M8 37q11-7 16 0-6 7-16 0','M0 16q16-14 32 0t32 0M14 10q4-13 13-7 0 10-13 7M38 16q7 12 16 5-3-10-16-5','12px'),
 racing:frame('Chicanas y damero','M4 44V14L14 4h30M12 44V24l12-12h20M18 35l17-17m-12 24 19-19M4 28h8M28 4v8','M0 16h14L24 6h16L50 16h14M18 18l8-8h12l8 8M2 6h6m-3-3v6m50-3h6','0px'),
 wasteland:frame('Chapas y remaches de metal','M4 44V4h40M12 44V20l8-8h24M4 17h8M17 4v8M18 34l16-16m-9 23 16-16M6 8h3m-1-1v3','M0 12h16m32 0h16M20 20 36 4m-8 16L44 4M4 8v8m56-8v8','0px'),
 eldorado:frame('Relieves escalonados de jade','M4 44V4h40M11 44V11h33M18 44V18h26M25 44V25h19M4 25h7V4M32 25v12h12','M0 18h8V12h8V6h8v12h16V6h8v6h8v6h8M26 12h12','1px'),
 astral:frame('Astrolabios y constelaciones','M5 44V22A17 17 0 0 1 22 5h22M12 44V25a13 13 0 0 1 13-13h19M22 28a7 7 0 1 0 14 0 7 7 0 1 0-14 0M29 16v24m-12-12h24M20 19l18 18','M0 12h12m40 0h12M16 12l8-7 8 14 8-14 8 7M32 2v20M27 12h10','14px'),
});
const svg=path=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 24"><path d="${path}" fill="none" stroke="black" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
const url=markup=>`url("data:image/svg+xml,${encodeURIComponent(markup)}")`;
export function applyFrameTheme(id){
 const theme=FRAME_THEMES[id]||FRAME_THEMES.pirates,root=document.documentElement;
 root.dataset.frameTheme=Object.hasOwn(FRAME_THEMES,id)?id:'pirates';
 root.style.setProperty('--ornament-line',url(svg(theme.line)));
 root.style.setProperty('--ornament-radius',theme.radius);
 root.style.setProperty('--ornament-corner',url(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="${theme.corner}" fill="none" stroke="black" stroke-width="1.15" stroke-linejoin="round" stroke-linecap="round"/></svg>`));
 root.style.setProperty('--ornament-corner-reverse',url(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path transform="rotate(180 24 24)" d="${theme.corner}" fill="none" stroke="black" stroke-width="1.15" stroke-linejoin="round" stroke-linecap="round"/></svg>`));
}
function init(){
 const hero=document.querySelector('#hero');if(!hero)return;
 const ornament=document.createElement('div');ornament.className='thematic-frame';ornament.setAttribute('aria-hidden','true');
 for(const position of ['tl','tr','br','bl']){const corner=document.createElement('i');corner.className='thematic-corner '+position;ornament.append(corner);}
 for(const side of ['top','bottom','left','right']){const edge=document.createElement('i');edge.className='thematic-edge '+side;ornament.append(edge);}
 hero.append(ornament);applyFrameTheme(document.documentElement.dataset.world);
 document.addEventListener('temas:themechange',()=>applyFrameTheme(document.documentElement.dataset.world));
}
if(typeof document!=='undefined')init();
