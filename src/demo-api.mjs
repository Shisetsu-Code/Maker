const json = (data, status = 200) => Response.json(data, { status, headers: {'cache-control':'no-store','x-demo-mode':'true'} });
const unavailable = 'Esta réplica es una demostración local. No se envían mensajes ni diseños. Podés descargar tu diseño con el botón de descarga.';
async function boundedJson(request) {
  if (!request.body) throw new SyntaxError('Missing body');
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 4096) { await reader.cancel(); throw new RangeError('Body too large'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}
export async function handleDemoRequest(request) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/')) return null;
  if (url.pathname === '/api/health') return json({ok:true,demo:true,version:'replica-base-1'});
  if (url.pathname === '/api/winners') return json({winners:[],demo:true});
  if (url.pathname === '/api/demo/evento') return json({ok:false,demo:true,mensaje:unavailable,error:unavailable},422);
  if (url.pathname === '/api/muestra/juego-demo') {
    if (request.method !== 'POST') return json({ok:false,demo:true,error:'Usá POST para abrir una vista de demostración.'},405);
    let body;
    try { body = await boundedJson(request); }
    catch (error) { return json({ok:false,demo:true,error:'Solicitud de demostración inválida.'}, error instanceof RangeError ? 413 : 400); }
    const validCode = value => typeof value === 'string' && value.trim().length > 0 && value.trim().length <= 120;
    if (!body || body.demo !== true || !validCode(body.vendorCode) || !validCode(body.gameCode)) return json({ok:false,demo:true,error:'En esta muestra solo se abren vistas de demostración.'},422);
    const target = new URL('/muestra/juego-demo.html',url.origin);
    target.searchParams.set('vendor',body.vendorCode.trim());
    target.searchParams.set('game',body.gameCode.trim());
    target.searchParams.set('channel',body.channel === 'mobile' ? 'mobile' : 'desktop');
    return json({ok:true,demo:true,url:target.href});
  }
  return json({ok:false,demo:true,motivo:'demo'});
}
