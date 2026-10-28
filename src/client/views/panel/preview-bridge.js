/**
 * panel / preview-bridge.
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
let NC;
function PC(e) {
  return e.includes(`url(`)
    ? e.replace(NC, (e, t, n) => {
        try {
          return `url("${new URL(n, document.baseURI).href}")`;
        } catch {
          return `url("${n}")`;
        }
      })
    : e;
}
let FC;
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
            o.style.setProperty(t, PC(n));
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
          !(FC(n, i) && s.dibujos > 0) && ((i = n), t(i, a, `disc`)));
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
        FC(o, a) || ((a = o), t(i, a, `imgs`));
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
let RC, zC, BC, VC;
function HC(e = document) {
  let t = new URL(BC, document.baseURI).href;
  e.querySelectorAll(`img.logo, img.ing-seg-logo`).forEach((e) => {
    e.src !== t && (e.src = t);
  });
}
function UC() {
  let e = !1;
  new MutationObserver((t) => {
    e ||
      (t.some((e) => e.type === `attributes` || e.addedNodes.length) &&
        ((e = !0),
        requestAnimationFrame(() => {
          ((e = !1), HC());
        })));
  }).observe(document.documentElement, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeFilter: [`src`],
  });
}
function WC(e, t) {
  let n = e.logoPropio === !0 || e.logoTexto === !0 || zC(e) !== void 0,
    r =
      typeof t.isotipo == `string` && /^(data:image\/|blob:)/.test(t.isotipo)
        ? t.isotipo
        : ``,
    i = document.documentElement;
  (i.classList.toggle(`dm-marca-propia`, n && r !== ``),
    n && r
      ? i.style.setProperty(
          `--demo-iso`,
          `url("${r.replace(/["\\\r\n]/g, ``)}")`,
        )
      : i.style.removeProperty(`--demo-iso`));
}
function GC(e, t) {
  ((BC = VC(t)), HC(), WC(e, t));
}
function initializePreviewBridge() {
  NC = /url\(\s*(["']?)(?!data:|blob:|https?:|\/\/|#)([^"')]+)\1\s*\)/gi;
  FC = (e, t) => {
    let n = Object.keys(e);
    return n.length === Object.keys(t).length
      ? n.every((n) => e[n] === t[n])
      : !1;
  };
  RC = String(readPreviewDefaults().disc.nombre ?? `RushyBet`);
  zC = (e) => {
    let t = typeof e.nombre == `string` ? e.nombre.trim() : ``;
    return t && t !== RC ? t.toUpperCase() : void 0;
  };
  BC = `./rushybet/rushybet-logo.webp`;
  VC = (e) =>
    e.logo ??
    e[`rushybet/rushybet-logo.webp`] ??
    e[`./rushybet/rushybet-logo.webp`] ??
    e[`/rushybet/rushybet-logo.webp`] ??
    `./rushybet/rushybet-logo.webp`;
}
export {
  createPreviewBridge,
  notifyPreviewReady,
  zC,
  HC,
  UC,
  GC,
  initializePreviewBridge,
};
