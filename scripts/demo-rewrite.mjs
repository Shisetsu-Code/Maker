export function rewriteShowDesign(text) {
  return text.replace(/function sl\(t,n\)\{[\s\S]*?\}function cl\(/,
    'function sl(t,n){let r=il(`btn-mandar-diseno`,`Mostrar diseño`,`i-expand`,!0,`Mostrar diseño`);r.boton.addEventListener(`click`,()=>{document.getElementById(`btn-entera`)?.click()}),n.prepend(r.ancla)}function cl(')
    .replaceAll('Mandame mi diseño', 'Mostrar diseño')
    .replaceAll('Cuando te guste, tocalo: nos llega tal cual, con plantilla, colores y logo, y con eso armamos tu casino.', 'Mirá tu diseño actual sin los controles del personalizador. Para volver a editarlo, tocá «Salir».')
    .replaceAll('Cuando te guste, tocalo: nos llega tal cual y con eso armamos tu casino.', 'Mirá tu diseño actual. Tocá «Salir» para volver a editarlo.');
}

export function rewriteDemoText(text) {
  return rewriteShowDesign(text)
    .replaceAll('https://rushyclub.com/api/demo/evento','/api/demo/evento')
    .replace('null:{vendorCode:n,gameCode:r,channel:t.channel===`mobile`', 'null:{demo:!0,vendorCode:n,gameCode:r,channel:t.channel===`mobile`')
    .replace('/^https:\\/\\//i.test(n.url)', '/^https?:\\/\\//i.test(n.url)')
    .replaceAll('e.includes(`/css2?`)?`stylesheet`:`preconnect`', '(e.includes(`/css2?`)||e.includes(`/assets/external/fonts.googleapis.com/css2.`))?`stylesheet`:`preconnect`')
    .replace(/function ([\w$]+)\(e\)\{return`url\("/g, 'function $1(e){e=window.__demoAssetURL(e);return`url("')
    .replace(/img:([A-Za-z_$][\w$]*),vid:null,grad:/g, 'img:window.__demoAssetURL($1),vid:null,grad:')
    .replace(/imgRespaldo:([A-Za-z_$][\w$]*)/g,'imgRespaldo:window.__demoAssetURL($1)');
}
