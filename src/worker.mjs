import { handleDemoRequest } from './demo-api.mjs';

export default {
  async fetch(request, env) {
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
};
