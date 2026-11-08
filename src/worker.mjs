import { handleDemoRequest } from './demo-api.mjs';

const SECURITY_HEADERS = {
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'SAMEORIGIN',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'cross-origin-opener-policy': 'same-origin'
};
function withSecurityHeaders(response) {
  const secured = new Response(response.body, response);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    if (!secured.headers.has(name)) secured.headers.set(name, value);
  }
  return secured;
}

export default {
  async fetch(request, env) {
    return withSecurityHeaders(await route(request, env));
  }
};

async function route(request, env) {
    try {
      const url = new URL(request.url);
      if (url.pathname === '/') {
        return await env.ASSETS.fetch(new Request(new URL('/index.html',request.url),request));
      }
      if (url.pathname.startsWith('/muestra/games-cartas/')) {
        url.pathname = url.pathname.slice('/muestra'.length);
        return await env.ASSETS.fetch(new Request(url,request));
      }
      return await handleDemoRequest(request) ?? await env.ASSETS.fetch(request);
    } catch {
      console.error(JSON.stringify({event:'demo-request-failed',path:new URL(request.url).pathname}));
      return Response.json({ok:false,demo:true,error:'No se pudo cargar la demostración.'},{status:500});
    }
}
