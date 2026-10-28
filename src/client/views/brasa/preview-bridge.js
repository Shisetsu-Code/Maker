/**
 * brasa / preview-bridge.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let se;
let ce;
function readPreviewDefaults() {
  try {
    let e = document.getElementById(`dm-defecto`)?.textContent;
    if (e) {
      let t = JSON.parse(e);
      if (t && typeof t == `object`)
        return {
          disc: t.disc ?? {},
          vars: t.vars ?? {},
        };
    }
  } catch {}
  return {
    disc: {
      logoPropio: !1,
      aro: !1,
      imgOn: !0,
      nombre: `RushyBet`,
      tintaTexto: `calido`,
    },
    vars: {},
  };
}
let ue;
function de(e) {
  return e.includes(`url(`)
    ? e.replace(ue, (e, t, n) => {
        try {
          return `url("${new URL(n, document.baseURI).href}")`;
        } catch {
          return `url("${n}")`;
        }
      })
    : e;
}
let k;
function createPreviewBridge(e, t) {
  let n = readPreviewDefaults(),
    r = {
      ...n.vars,
    },
    i = {
      ...n.disc,
    },
    a = {},
    o = document.documentElement,
    s = {
      vista: e,
      listo: !1,
      dibujos: 0,
      vars(e) {
        if (!e || typeof e != `object`) return;
        for (let [t, n] of Object.entries(e))
          !t.startsWith(`--`) ||
            typeof n != `string` ||
            o.style.setProperty(t, de(n));
        r = {
          ...r,
          ...e,
        };
        let t = r[`--dm-img-filtro`];
        o.classList.toggle(
          `dm-filtro`,
          typeof t == `string` && t !== `` && t !== `none`,
        );
      },
      disc(e) {
        if (!e || typeof e != `object`) return;
        let n = {
          ...i,
          ...e,
        };
        (o.classList.toggle(`dm-aro`, n.aro === !0),
          !(k(n, i) && s.dibujos > 0) && ((i = n), t(i, a, `disc`)));
      },
      imgs(e) {
        if (!e || typeof e != `object`) return;
        let n = e,
          r =
            typeof n.entries == `function` && typeof n.get == `function`
              ? Array.from(n.entries())
              : Object.entries(e),
          o = {};
        for (let [e, t] of r)
          typeof e == `string` && typeof t == `string` && (o[e] = t);
        k(o, a) || ((a = o), t(i, a, `imgs`));
      },
      estado: () => ({
        vars: {
          ...r,
        },
        disc: {
          ...i,
        },
        imgs: {
          ...a,
        },
      }),
    };
  return (
    (window.__demo = s),
    window.addEventListener(`message`, (e) => {
      if (e.source !== window.parent || window.parent === window) return;
      let t = e.data;
      if (!t || typeof t != `object` || typeof t.tipo != `string`) return;
      let n = (e) =>
        t[e] ?? (t.tipo === e ? (t.datos ?? t.valor ?? t.v) : void 0);
      if (t.tipo === `vars` || t.tipo === `estado` || t.tipo === `todo`) {
        let e = n(`vars`);
        e && s.vars(e);
      }
      if (t.tipo === `imgs` || t.tipo === `estado` || t.tipo === `todo`) {
        let e = n(`imgs`);
        e && s.imgs(e);
      }
      if (t.tipo === `disc` || t.tipo === `estado` || t.tipo === `todo`) {
        let e = n(`disc`);
        e && s.disc(e);
      }
    }),
    o.classList.toggle(`dm-aro`, i.aro === !0),
    s
  );
}
function notifyPreviewReady(e) {
  if (window.parent !== window)
    try {
      window.parent.postMessage(
        {
          tipo: `listo`,
          vista: e,
        },
        `*`,
      );
    } catch {}
}
function initializePreviewBridge() {
  se = `RushyBet`;
  (Object.freeze({
    p: `#ff5500`,
    b: `auto`,
    ba: `liso`,
    f: `#0f0f0f`,
    t: `auto`,
    tb: !1,
    s: `auto`,
    x: `calido`,
    im: !0,
    ic: `p`,
    n: se,
    logo: !1,
  }),
    Object.freeze({
      logo: `rushybet/rushybet-logo.webp`,
      mark: `rushybet/v3/mark.png`,
      textura: `rushybet/v3/textura-banner.webp`,
      cutFichas: `rushybet/v3/cut-fichas.webp`,
      cutRuleta: `rushybet/v3/cut-ruleta.webp`,
      cutDeportes: `rushybet/v3/cut-deportes.webp`,
      popSlots: `rushybet/v2/pop-slots.webp`,
      popVivo: `rushybet/v2/pop-vivo.webp`,
      popDeportes: `rushybet/v2/pop-deportes.webp`,
      popFichas: `rushybet/v2/pop-fichas.webp`,
      bienvenida: `rushybet/v2/base-bienvenida.webp`,
      recarga: `rushybet/v2/recarga-fichas.webp`,
      panelR: `rushybet/v2/panel-r.webp`,
      baseCarta: `rushybet/v2/base-carta.webp`,
    }),
    Object.freeze({
      calido: [`#f3ece7`, `#b3a69d`, `#8a7d75`, `#675d57`],
      neutro: [`#ededed`, `#a9a9ab`, `#808082`, `#5e5e60`],
      frio: [`#e9eef5`, `#a3acba`, `#7a8494`, `#596272`],
    }));
  ce = (e, ...t) => t.map((t) => [`--dm-${t}`, e]);
  Object.freeze(
    Object.fromEntries([
      ...ce(
        `color`,
        `p`,
        `p-texto`,
        `p-claro`,
        `p-hondo`,
        `p-barra`,
        `p-tab`,
        `p-mas14`,
        `p-ink`,
        `p-ink-grande`,
        `p-crema`,
        `p-v4`,
      ),
      ...ce(`color`, `cajero-tinta`),
      ...ce(`color`, `avatar-1`, `avatar-2`),
      ...ce(
        `color`,
        `b`,
        `b-ink`,
        `b-ink-grande`,
        `b-borde`,
        `sup-borde`,
        `busca-borde`,
        `chat-ink`,
        `vidrio-borde`,
      ),
      ...ce(
        `color`,
        `f`,
        `f-afuera`,
        `sup`,
        `campo`,
        `riel`,
        `riel-lado`,
        `barra`,
        `hoja`,
        `campo-app`,
        `filo-campo`,
        `marco`,
        `f1`,
        `f3`,
      ),
      ...ce(
        `color`,
        `calido`,
        `badge-aro`,
        `n-lista`,
        `n-campo`,
        `n-cerrar`,
        `n-pedido`,
      ),
      ...ce(`color`, `t`, `t2`, `v4-sup`),
      ...ce(
        `color`,
        `mult3-ring`,
        `mult3-fg`,
        `deporte`,
        `neon-1`,
        `neon-2`,
        `neon-3`,
        `brillo`,
      ),
      ...ce(`color`, `tx`, `tx2`, `tx3`, `tx4`),
      ...ce(`fondo`, `b-grad`, `b-mas`, `cajero-fondo`, `chat-boton`, `vidrio`),
      ...ce(
        `fondo`,
        `velo-puerta`,
        `velo-dep`,
        `img-panel-r`,
        `puerta-base`,
        `ganador-fondo`,
        `img-promo-base`,
      ),
      ...ce(
        `fondo`,
        `luz-puerta`,
        `luz-dep`,
        `mult3-bg`,
        `anillo`,
        `billetera-brillo`,
        `img-bienvenida`,
      ),
      ...ce(`sombra`, `b-sombra`, `chat-sombra`, `vidrio-sombra`, `mult3-glow`),
      ...ce(`sombraTexto`, `saldo-brillo`),
      ...ce(
        `rgb`,
        `p-rgb`,
        `p-claro-rgb`,
        `b-rgb`,
        `b-ink-rgb`,
        `b-filo-rgb`,
        `b-activo-rgb`,
        `f-rgb`,
        `g1-rgb`,
        `g2-rgb`,
      ),
      ...ce(`numero`, `glow-a`),
      ...ce(`largo`, `logo-alto`),
    ]),
  );
  ue = /url\(\s*(["']?)(?!data:|blob:|https?:|\/\/|#)([^"')]+)\1\s*\)/gi;
  k = (e, t) => {
    let n = Object.keys(e);
    return n.length === Object.keys(t).length
      ? n.every((n) => e[n] === t[n])
      : !1;
  };
}
export { se, createPreviewBridge, notifyPreviewReady, initializePreviewBridge };
