/**
 * classic-lobby / demo-guards.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { config as configureZod } from "zod";
var e, createLazyInitializer, createCommonJSFactory, createModuleExports, i;
let xa, Sa, Ca;
function wa(e) {
  if (!e) return;
  let t = Ca.indexOf(e);
  (t >= 0 && Ca.splice(t, 1), Ca.push(e), Ca.length > 6 && Ca.shift());
}
let Ta, Ea;
function Da(e) {
  let t = e.target;
  return t instanceof Element
    ? (t.closest(`a,button,[role="button"],input,label,summary`) ?? t)
    : null;
}
function Oa(e) {
  if (!e || !e.isConnected) return null;
  let t = e.getBoundingClientRect();
  return t.width > 0 || t.height > 0 ? t : null;
}
function ka(e, t = xa) {
  let n = (window.__demoAvisos ??= []);
  if (
    (n.push({
      texto: t,
      t: Math.round(performance.now()),
    }),
    n.length > 40 && n.shift(),
    !document.body)
  )
    return;
  Ta ||
    ((Ta = document.createElement(`div`)),
    Ta.setAttribute(`role`, `status`),
    Ta.setAttribute(`aria-live`, `polite`),
    (Ta.className = `dm-aviso-demo`),
    Object.assign(Ta.style, {
      position: `fixed`,
      zIndex: `2147483000`,
      maxWidth: `min(320px, calc(100vw - 16px))`,
      boxSizing: `border-box`,
      padding: `9px 13px`,
      borderRadius: `11px`,
      background: `rgba(20,20,20,.96)`,
      color: `#ffffff`,
      font: `500 13px/1.35 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,
      boxShadow: `inset 0 0 0 1px rgba(255,255,255,.14), 0 12px 32px rgba(0,0,0,.55)`,
      pointerEvents: `none`,
      opacity: `0`,
      transform: `translateY(4px) scale(.97)`,
      transition: `opacity .18s ease, transform .22s cubic-bezier(.34,1.56,.64,1)`,
    }));
  let r = Ta;
  ((r.textContent = t), r.isConnected || document.body.appendChild(r));
  let i = Oa(e);
  for (let e = Ca.length - 1; !i && e >= 0; e--) i = Oa(Ca[e]);
  let a = document.documentElement.clientWidth || window.innerWidth,
    o = window.innerHeight;
  ((r.style.left = `0px`), (r.style.top = `0px`));
  let s = r.offsetWidth,
    c = r.offsetHeight,
    l,
    u;
  (i
    ? ((l = i.left + i.width / 2 - s / 2),
      (u = i.bottom + 8 + c <= o - 8 ? i.bottom + 8 : i.top - 8 - c))
    : ((l = a / 2 - s / 2), (u = o - c - 24)),
    (r.style.left = `${Math.round(Math.max(8, Math.min(a - s - 8, l)))}px`),
    (r.style.top = `${Math.round(Math.max(8, Math.min(o - c - 8, u)))}px`),
    requestAnimationFrame(() => {
      ((r.style.opacity = `1`), (r.style.transform = `none`));
    }),
    window.clearTimeout(Ea),
    (Ea = window.setTimeout(() => {
      ((r.style.opacity = `0`),
        (r.style.transform = `translateY(4px) scale(.97)`));
    }, 3400)));
}
function Aa(e) {
  let t = e.getAttribute(`href`) ?? ``;
  if (t === `` || t.startsWith(`#`) || /^javascript:/i.test(t))
    return {
      sale: !1,
      whatsapp: !1,
    };
  let n;
  try {
    n = new URL(e.href, window.location.href);
  } catch {
    return {
      sale: !0,
      whatsapp: !1,
    };
  }
  let r = /(^|\.)(wa\.me|whatsapp\.com)$/i.test(n.hostname),
    i = new URL(window.location.href),
    a =
      n.origin === i.origin &&
      n.pathname === i.pathname &&
      n.search === i.search;
  return {
    sale: r || !a || e.target === `_blank` || e.hasAttribute(`download`),
    whatsapp: r,
  };
}
function ja(e) {
  if (e.type === `auxclick` && e.button !== 1) return;
  let t = e.target;
  if (!(t instanceof Element)) return;
  let n = t.closest(`a[href]`);
  if (!(n instanceof HTMLAnchorElement)) return;
  let r = Aa(n);
  r.sale &&
    (e.preventDefault(),
    ka(n, r.whatsapp ? `Esto es una demo: no se manda ningún WhatsApp.` : Sa));
}
function installDemoGuards() {
  (document.addEventListener(`pointerdown`, (e) => wa(Da(e)), !0),
    document.addEventListener(
      `keydown`,
      (e) => {
        (e.key === `Enter` || e.key === ` `) && wa(Da(e));
      },
      !0,
    ),
    document.addEventListener(`click`, (e) => wa(Da(e)), !0),
    document.addEventListener(`click`, ja, !0),
    document.addEventListener(`auxclick`, ja, !0),
    (window.__demoAviso = (e, t) =>
      ka(e, t ?? `Esto es una demo: no se guarda nada ni se mueve plata.`)),
    (window.open = () => (ka(null, Sa), null)),
    (window.confirm = () => (ka(null, xa), !1)),
    (window.prompt = () => (ka(null, xa), null)),
    (window.alert = (e) => {
      ka(null, e == null || String(e) === `` ? xa : String(e));
    }));
  let e = !1;
  try {
    e = window.parent === window;
  } catch {
    e = !1;
  }
  if (e) {
    let e = () => {
      if (document.getElementById(`dm-cinta-demo`)) return;
      let e = document.createElement(`div`);
      ((e.id = `dm-cinta-demo`),
        (e.textContent = document.querySelector(
          `meta[name="dm-modo"][content="socio"]`,
        )
          ? `DEMO — nada es real`
          : `DEMO`),
        e.setAttribute(`aria-label`, `Vista de demostración`),
        Object.assign(e.style, {
          position: `fixed`,
          left: `50%`,
          bottom: `6px`,
          transform: `translateX(-50%)`,
          zIndex: `2147483001`,
          padding: `4px 9px`,
          borderRadius: `999px`,
          background: `rgba(0,0,0,.72)`,
          color: `#ffffff`,
          font: `700 10.5px/1 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,
          letterSpacing: `.14em`,
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,.22)`,
          pointerEvents: `none`,
        }),
        document.body.appendChild(e));
    };
    document.body
      ? e()
      : document.addEventListener(`DOMContentLoaded`, e, {
          once: !0,
        });
  }
}
function initializeDemoGuards() {
  configureZod({
    jitless: true,
  });
  e = Object.defineProperty;
  createLazyInitializer = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return (e && (t = e((e = 0))), t);
    } catch (e) {
      throw ((n = [e]), e);
    }
  };
  createCommonJSFactory = (e, t) => () => (
    t ||
      (e(
        (t = {
          exports: {},
        }).exports,
        t,
      ),
      (e = null)),
    t.exports
  );
  createModuleExports = (t, n) => {
    let r = {};
    for (var i in t)
      e(r, i, {
        get: t[i],
        enumerable: !0,
      });
    return (
      n ||
        e(r, Symbol.toStringTag, {
          value: `Module`,
        }),
      r
    );
  };
  xa = `Esto es una demo: no se guarda nada ni se mueve plata.`;
  Sa = `Esto es una demo: este enlace no se abre.`;
  Ca = [];
  Ta = null;
  Ea = 0;
  installDemoGuards();
}
export { createLazyInitializer, createModuleExports, initializeDemoGuards };
