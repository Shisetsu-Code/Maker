export function rewriteDemoText(text) {
  return text
    .replaceAll('https://rushyclub.com/api/demo/evento','/api/demo/evento')
    .replace('null:{vendorCode:n,gameCode:r,channel:t.channel===`mobile`', 'null:{demo:!0,vendorCode:n,gameCode:r,channel:t.channel===`mobile`')
    .replace('/^https:\\/\\//i.test(n.url)', '/^https?:\\/\\//i.test(n.url)')
    .replaceAll('e.includes(`/css2?`)?`stylesheet`:`preconnect`', '(e.includes(`/css2?`)||e.includes(`/assets/external/fonts.googleapis.com/css2.`))?`stylesheet`:`preconnect`')
    .replace(/function ([\w$]+)\(e\)\{return`url\("/g, 'function $1(e){e=window.__demoAssetURL(e);return`url("')
    .replace(/img:([A-Za-z_$][\w$]*),vid:null,grad:/g, 'img:window.__demoAssetURL($1),vid:null,grad:')
    .replace(/imgRespaldo:([A-Za-z_$][\w$]*)/g,'imgRespaldo:window.__demoAssetURL($1)');
}
