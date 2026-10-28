/**
 * azul / preview-bridge.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
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
let xt;
function St(e) {
  return e.includes(`url(`)
    ? e.replace(xt, (e, t, n) => {
        try {
          return `url("${new URL(n, document.baseURI).href}")`;
        } catch {
          return `url("${n}")`;
        }
      })
    : e;
}
let Ct;
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
            o.style.setProperty(t, St(n));
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
          !(Ct(n, i) && s.dibujos > 0) && ((i = n), t(i, a, `disc`)));
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
        Ct(o, a) || ((a = o), t(i, a, `imgs`));
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
  xt = /url\(\s*(["']?)(?!data:|blob:|https?:|\/\/|#)([^"')]+)\1\s*\)/gi;
  Ct = (e, t) => {
    let n = Object.keys(e);
    return n.length === Object.keys(t).length
      ? n.every((n) => e[n] === t[n])
      : !1;
  };
}
export { createPreviewBridge, notifyPreviewReady, initializePreviewBridge };
