/**
 * azul / demo-guards.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
var e, t, n, r, i, a, o, s, c;
let l, u, d;
function f(e) {
  if (!e) return;
  let t = d.indexOf(e);
  (t >= 0 && d.splice(t, 1), d.push(e), d.length > 6 && d.shift());
}
let p, m;
function h(e) {
  let t = e.target;
  return t instanceof Element
    ? (t.closest(`a,button,[role="button"],input,label,summary`) ?? t)
    : null;
}
function g(e) {
  if (!e || !e.isConnected) return null;
  let t = e.getBoundingClientRect();
  return t.width > 0 || t.height > 0 ? t : null;
}
function _(e, t = l) {
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
  p ||
    ((p = document.createElement(`div`)),
    p.setAttribute(`role`, `status`),
    p.setAttribute(`aria-live`, `polite`),
    (p.className = `dm-aviso-demo`),
    Object.assign(p.style, {
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
  let r = p;
  ((r.textContent = t), r.isConnected || document.body.appendChild(r));
  let i = g(e);
  for (let e = d.length - 1; !i && e >= 0; e--) i = g(d[e]);
  let a = document.documentElement.clientWidth || window.innerWidth,
    o = window.innerHeight;
  ((r.style.left = `0px`), (r.style.top = `0px`));
  let s = r.offsetWidth,
    c = r.offsetHeight,
    u,
    f;
  (i
    ? ((u = i.left + i.width / 2 - s / 2),
      (f = i.bottom + 8 + c <= o - 8 ? i.bottom + 8 : i.top - 8 - c))
    : ((u = a / 2 - s / 2), (f = o - c - 24)),
    (r.style.left = `${Math.round(Math.max(8, Math.min(a - s - 8, u)))}px`),
    (r.style.top = `${Math.round(Math.max(8, Math.min(o - c - 8, f)))}px`),
    requestAnimationFrame(() => {
      ((r.style.opacity = `1`), (r.style.transform = `none`));
    }),
    window.clearTimeout(m),
    (m = window.setTimeout(() => {
      ((r.style.opacity = `0`),
        (r.style.transform = `translateY(4px) scale(.97)`));
    }, 3400)));
}
function v(e) {
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
function y(e) {
  if (e.type === `auxclick` && e.button !== 1) return;
  let t = e.target;
  if (!(t instanceof Element)) return;
  let n = t.closest(`a[href]`);
  if (!(n instanceof HTMLAnchorElement)) return;
  let r = v(n);
  r.sale &&
    (e.preventDefault(),
    _(n, r.whatsapp ? `Esto es una demo: no se manda ningún WhatsApp.` : u));
}
function installDemoGuards() {
  (document.addEventListener(`pointerdown`, (e) => f(h(e)), !0),
    document.addEventListener(
      `keydown`,
      (e) => {
        (e.key === `Enter` || e.key === ` `) && f(h(e));
      },
      !0,
    ),
    document.addEventListener(`click`, (e) => f(h(e)), !0),
    document.addEventListener(`click`, y, !0),
    document.addEventListener(`auxclick`, y, !0),
    (window.__demoAviso = (e, t) =>
      _(e, t ?? `Esto es una demo: no se guarda nada ni se mueve plata.`)),
    (window.open = () => (_(null, u), null)),
    (window.confirm = () => (_(null, l), !1)),
    (window.prompt = () => (_(null, l), null)),
    (window.alert = (e) => {
      _(null, e == null || String(e) === `` ? l : String(e));
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
        (e.textContent = `DEMO`),
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
  e = Object.create;
  t = Object.defineProperty;
  n = Object.getOwnPropertyDescriptor;
  r = Object.getOwnPropertyNames;
  i = Object.getPrototypeOf;
  a = Object.prototype.hasOwnProperty;
  o = (e, t) => () => (
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
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  };
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, {
            value: n,
            enumerable: !0,
          })
        : a,
      n,
    )
  );
  l = `Esto es una demo: no se guarda nada ni se mueve plata.`;
  u = `Esto es una demo: este enlace no se abre.`;
  d = [];
  p = null;
  m = 0;
  installDemoGuards();
}
export { initializeDemoGuards };
