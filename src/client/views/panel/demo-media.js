/**
 * panel / demo-media.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let Bs, Vs;
function Hs(e, t, n) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="560" viewBox="0 0 360 560"><rect width="360" height="560" rx="18" fill="#f4f6f8"/><rect x="0" y="0" width="360" height="132" rx="18" fill="#1f7a5a"/><rect x="0" y="110" width="360" height="22" fill="#1f7a5a"/><circle cx="180" cy="62" r="30" fill="#ffffff" opacity=".18"/><path d="M166 62l10 10 20-22" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="180" y="168" font-family="system-ui,Segoe UI,Roboto,sans-serif" font-size="15" fill="#5b6470" text-anchor="middle">Transferencia enviada</text><text x="180" y="212" font-family="system-ui,Segoe UI,Roboto,sans-serif" font-size="34" font-weight="700" fill="#14181d" text-anchor="middle">${Vs(e)}</text><g font-family="system-ui,Segoe UI,Roboto,sans-serif" font-size="14" fill="#5b6470"><text x="32" y="276">De</text><text x="328" y="276" text-anchor="end" fill="#14181d">${Vs(t)}</text><text x="32" y="316">Para</text><text x="328" y="316" text-anchor="end" fill="#14181d">Cuenta de la casa</text><text x="32" y="356">Operación</text><text x="328" y="356" text-anchor="end" fill="#14181d">N.º ${Vs(n)}</text><text x="32" y="396">Fecha</text><text x="328" y="396" text-anchor="end" fill="#14181d">hoy</text></g><rect x="32" y="440" width="296" height="1" fill="#d5dae0"/><text x="180" y="486" font-family="system-ui,Segoe UI,Roboto,sans-serif" font-size="12" fill="#8a929c" text-anchor="middle">Comprobante de ejemplo · demo</text></svg>`;
}
let Us;
function Ws(e) {
  let [t, n, r, i] = Us[((e % Us.length) + Us.length) % Us.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><defs><radialGradient id="g" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="${n}" stop-opacity=".55"/><stop offset="1" stop-color="${t}" stop-opacity="0"/></radialGradient></defs><rect width="1080" height="1350" fill="${t}"/><rect width="1080" height="1350" fill="url(#g)"/><circle cx="880" cy="230" r="150" fill="${n}" opacity=".18"/><circle cx="170" cy="1130" r="210" fill="${n}" opacity=".12"/><g font-family="system-ui,Segoe UI,Roboto,sans-serif" text-anchor="middle" fill="#ffffff"><text x="540" y="610" font-size="118" font-weight="800" letter-spacing="4">${Vs(r)}</text><text x="540" y="760" font-size="132" font-weight="900" fill="${n}" letter-spacing="4">${Vs(i)}</text><text x="540" y="1150" font-size="44" font-weight="600" opacity=".85">Escribinos para cargar</text></g><rect x="340" y="1210" width="400" height="8" rx="4" fill="${n}"/></svg>`;
}
let Gs;
function Ks(e, t, n) {
  if (!e || typeof n != `string`) return Bs;
  if (t === `flyer`) {
    let t = e.flyers.find((e) => e.id === n);
    return t
      ? t.imagen.startsWith(`svg:`)
        ? Gs(Ws(Number(t.imagen.slice(4)) || 0))
        : (e.imagenes[t.imagen] ??
          `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`)
      : Bs;
  }
  if (t === `adjunto`) {
    for (let t of e.hilos) {
      let r = t.mensajes.find((e) => e.id === n);
      if (r?.adjunto)
        return (
          e.imagenes[r.adjunto] ??
          `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`
        );
    }
    return Bs;
  }
  if (t === `comprobante`) {
    for (let t of e.pedidos) {
      let r = t.comprobantes.find((e) => e.id === n);
      if (r)
        return (
          e.imagenes[r.imagen] ??
          `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`
        );
    }
    return Bs;
  }
  return Bs;
}
async function qs(e) {
  if (!e.type.startsWith(`image/`)) return null;
  try {
    let t = await createImageBitmap(e),
      n = Math.min(1, 640 / Math.max(t.width, t.height)),
      r = Math.max(1, Math.round(t.width * n)),
      i = Math.max(1, Math.round(t.height * n)),
      a = document.createElement(`canvas`);
    ((a.width = r), (a.height = i));
    let o = a.getContext(`2d`);
    return o
      ? ((o.fillStyle = `#ffffff`),
        o.fillRect(0, 0, r, i),
        o.drawImage(t, 0, 0, r, i),
        t.close?.(),
        {
          dataUrl: a.toDataURL(`image/jpeg`, 0.72),
          ancho: r,
          alto: i,
        })
      : null;
  } catch {
    return null;
  }
}
function initializeDemoMedia() {
  Bs = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
  Vs = (e) => e.replace(/[<>&"']/g, (e) => `&#${e.charCodeAt(0)};`);
  Us = [
    [`#3b1d6e`, `#f5b400`, `BONO DE`, `BIENVENIDA`],
    [`#0e3b5c`, `#4fd1c5`, `TU PRIMERA`, `CARGA x2`],
    [`#5c1430`, `#ffb38a`, `ARRANCÁ`, `CON TODO`],
    [`#14213d`, `#fca311`, `VIERNES`, `DE RECARGA`],
    [`#1b4332`, `#95d5b2`, `SÁBADO`, `DOBLE`],
    [`#3a0ca3`, `#f72585`, `DOMINGO`, `CASHBACK`],
    [`#2b2d42`, `#ef233c`, `FINDE`, `LARGO`],
    [`#03045e`, `#00b4d8`, `TORNEO`, `DE SLOTS`],
    [`#370617`, `#faa307`, `TORNEO`, `DE RULETA`],
    [`#10002b`, `#c77dff`, `GANADORES`, `DE LA SEMANA`],
  ];
  Gs = (e) => `data:image/svg+xml,${encodeURIComponent(e)}`;
}
export { Hs, Ks, qs, initializeDemoMedia };
