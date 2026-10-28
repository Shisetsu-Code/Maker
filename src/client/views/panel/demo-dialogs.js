/**
 * panel / demo-dialogs.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { config as configureZod } from "zod";
var createCommonJSFactory, t;
let io, ao, oo;
function so(e) {
  if (!e) return;
  let t = oo.indexOf(e);
  (t >= 0 && oo.splice(t, 1), oo.push(e), oo.length > 6 && oo.shift());
}
let co, lo;
function B(e) {
  let t = e.target;
  return t instanceof Element
    ? (t.closest(`a,button,[role="button"],input,label,summary`) ?? t)
    : null;
}
function uo(e) {
  if (!e || !e.isConnected) return null;
  let t = e.getBoundingClientRect();
  return t.width > 0 || t.height > 0 ? t : null;
}
function fo(e, t = io) {
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
  co ||
    ((co = document.createElement(`div`)),
    co.setAttribute(`role`, `status`),
    co.setAttribute(`aria-live`, `polite`),
    (co.className = `dm-aviso-demo`),
    Object.assign(co.style, {
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
  let r = co;
  ((r.textContent = t), r.isConnected || document.body.appendChild(r));
  let i = uo(e);
  for (let e = oo.length - 1; !i && e >= 0; e--) i = uo(oo[e]);
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
    window.clearTimeout(lo),
    (lo = window.setTimeout(() => {
      ((r.style.opacity = `0`),
        (r.style.transform = `translateY(4px) scale(.97)`));
    }, 3400)));
}
function po(e) {
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
function mo(e) {
  if (e.type === `auxclick` && e.button !== 1) return;
  let t = e.target;
  if (!(t instanceof Element)) return;
  let n = t.closest(`a[href]`);
  if (!(n instanceof HTMLAnchorElement)) return;
  let r = po(n);
  r.sale &&
    (e.preventDefault(),
    fo(n, r.whatsapp ? `Esto es una demo: no se manda ningún WhatsApp.` : ao));
}
function installDemoGuards() {
  (document.addEventListener(`pointerdown`, (e) => so(B(e)), !0),
    document.addEventListener(
      `keydown`,
      (e) => {
        (e.key === `Enter` || e.key === ` `) && so(B(e));
      },
      !0,
    ),
    document.addEventListener(`click`, (e) => so(B(e)), !0),
    document.addEventListener(`click`, mo, !0),
    document.addEventListener(`auxclick`, mo, !0),
    (window.__demoAviso = (e, t) =>
      fo(e, t ?? `Esto es una demo: no se guarda nada ni se mueve plata.`)),
    (window.open = () => (fo(null, ao), null)),
    (window.confirm = () => (fo(null, io), !1)),
    (window.prompt = () => (fo(null, io), null)),
    (window.alert = (e) => {
      fo(null, e == null || String(e) === `` ? io : String(e));
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
let go, _o, vo, yo, bo;
function xo() {
  let e = window.event;
  if (e && e.type === `submit` && e.target instanceof HTMLFormElement) {
    let t = e.target,
      n = e.submitter;
    return () => {
      t.isConnected &&
        t.requestSubmit(
          n instanceof HTMLElement && n.isConnected && n.form === t
            ? n
            : void 0,
        );
    };
  }
  let t = e && e.target instanceof Element ? e.target : null;
  if (
    e &&
    t &&
    (e.type === `click` || e.type === `pointerup` || e.type === `keydown`)
  ) {
    if (e.type === `keydown` && t instanceof HTMLInputElement && t.form) {
      let e = t.form;
      return () => e.isConnected && e.requestSubmit();
    }
    let n = t.closest(`button,a,[role="button"],input,label,summary`) ?? t;
    return () => n.isConnected && n.click();
  }
  let n = So;
  return n ? () => n.isConnected && n.click() : null;
}
let So;
function Co() {
  return document.querySelector(`.v4 .v4-capas`) ?? document.body;
}
function wo(e, t, n) {
  return new Promise((r) => {
    yo = !0;
    let i = document.createElement(`div`);
    ((i.className = `dlg-fondo`),
      i.setAttribute(`role`, `presentation`),
      (i.dataset.fx = `nueva`),
      (i.dataset.dmDialogo = `1`));
    let a = document.createElement(`div`);
    ((a.className = `dlg`),
      a.setAttribute(`role`, `alertdialog`),
      a.setAttribute(`aria-modal`, `true`));
    let o = document.createElement(`p`);
    ((o.className = `dlg-texto`),
      (o.id = `dm-dlg-texto`),
      (o.textContent = t),
      a.setAttribute(`aria-labelledby`, o.id),
      a.appendChild(o));
    let s = null;
    if (e === `prompt`) {
      let e = document.createElement(`label`);
      ((e.className = `campo`),
        (s = document.createElement(`input`)),
        (s.type = `text`),
        (s.autocomplete = `off`),
        (s.value = n),
        s.setAttribute(
          `aria-label`,
          t.split(`
`)[0] ?? t,
        ),
        e.appendChild(s),
        a.appendChild(e));
    }
    let c = document.createElement(`div`);
    c.className = `dlg-botones`;
    let l = (e, t) => {
        let n = document.createElement(`button`);
        ((n.type = `button`), (n.className = `btn ${t}`));
        let r = document.createElement(`span`);
        return ((r.textContent = e), n.appendChild(r), n);
      },
      u = l(`Cancelar`, `btn-secundario`),
      d = l(`Aceptar`, bo.test(t) ? `btn-rojo` : `btn-naranja`);
    (c.append(u, d),
      a.appendChild(c),
      i.appendChild(a),
      document.querySelector(`.v4 .v4-capas`) ||
        (Object.assign(i.style, {
          position: `fixed`,
          inset: `0`,
          zIndex: `2147483000`,
          display: `grid`,
          placeItems: `center`,
          background: `rgba(4,4,4,.7)`,
        }),
        Object.assign(a.style, {
          background: `#1c1715`,
          color: `#fff`,
          padding: `20px`,
          borderRadius: `18px`,
          maxWidth: `360px`,
          whiteSpace: `pre-line`,
        })));
    let f =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null,
      p = (e) => {
        (document.removeEventListener(`keydown`, m, !0),
          i.remove(),
          (yo = !1),
          f?.focus?.({
            preventScroll: !0,
          }),
          r(e));
      },
      m = (e) => {
        if (e.key === `Escape`)
          (e.preventDefault(), e.stopPropagation(), p(null));
        else if (e.key === `Enter` && e.target === s)
          (e.preventDefault(),
            p({
              valor: s?.value ?? ``,
            }));
        else if (e.key === `Tab`) {
          let t = [s, u, d].filter((e) => e !== null),
            n = t.indexOf(document.activeElement);
          (e.preventDefault(),
            t[(n + (e.shiftKey ? t.length - 1 : 1)) % t.length]?.focus());
        }
      };
    (u.addEventListener(`click`, () => p(null)),
      d.addEventListener(`click`, () =>
        p({
          valor: s?.value ?? ``,
        }),
      ),
      document.addEventListener(`keydown`, m, !0),
      Co().appendChild(i),
      (s ?? u).focus({
        preventScroll: !0,
      }));
  });
}
function To(e, t, n) {
  let r = t == null ? `` : String(t),
    i = go[0];
  if (i) {
    if ((go.shift(), i.tipo === e)) return (_o.push(i), i.valor);
    ((go = []), (_o = []));
  }
  let a = xo(),
    o = e === `confirm` ? !1 : null;
  if (yo) return o;
  let s = _o;
  return (
    (_o = []),
    wo(e, r, n == null ? `` : String(n)).then((t) => {
      if (!t) return;
      if (!a) {
        fo(null, `No se pudo repetir la acción: tocala de nuevo.`);
        return;
      }
      let n =
        e === `confirm`
          ? {
              tipo: e,
              valor: !0,
            }
          : {
              tipo: e,
              valor: t.valor,
            };
      ((go = [...s, n]),
        window.clearTimeout(vo),
        (vo = window.setTimeout(() => {
          go = [];
        }, 6e3)),
        window.setTimeout(a, 0));
    }),
    o
  );
}
let Eo;
function Do(e) {
  let t = document.createElement(`div`);
  ((t.className = `dlg-fondo`),
    t.setAttribute(`role`, `dialog`),
    t.setAttribute(`aria-label`, `Imagen`),
    Object.assign(t.style, {
      cursor: `zoom-out`,
    }));
  let n = document.createElement(`img`);
  ((n.src = e),
    (n.alt = ``),
    Object.assign(n.style, {
      maxWidth: `min(92vw, 520px)`,
      maxHeight: `86vh`,
      borderRadius: `14px`,
      boxShadow: `0 20px 60px rgba(0,0,0,.6)`,
      background: `#fff`,
    }),
    t.appendChild(n),
    document.querySelector(`.v4 .v4-capas`) ||
      Object.assign(t.style, {
        position: `fixed`,
        inset: `0`,
        zIndex: `2147483000`,
        display: `grid`,
        placeItems: `center`,
        background: `rgba(4,4,4,.8)`,
      }));
  let r = () => {
      (document.removeEventListener(`keydown`, i, !0), t.remove());
    },
    i = (e) => {
      e.key === `Escape` && (e.stopPropagation(), r());
    };
  (t.addEventListener(`click`, r),
    document.addEventListener(`keydown`, i, !0),
    Co().appendChild(t));
}
function Oo(e) {
  let t = e.target;
  if (!(t instanceof Element)) return;
  e.isTrusted &&
    !t.closest(`[data-dm-dialogo]`) &&
    ((_o = []),
    (So = t.closest(`button,a,[role="button"],input,label,summary`) ?? t));
  let n = t.closest(`a[href]`);
  if (!(n instanceof HTMLAnchorElement)) return;
  let r = n.getAttribute(`href`) ?? ``;
  if (/^data:image\//i.test(r)) {
    if (n.hasAttribute(`download`)) {
      e.stopPropagation();
      return;
    }
    (e.preventDefault(), e.stopPropagation(), Do(r));
    return;
  }
  for (let [t, i] of Eo)
    if (t.test(r)) {
      (e.preventDefault(), e.stopPropagation(), fo(n, i));
      return;
    }
}
function installDemoDialogs() {
  ((window.confirm = (e) => To(`confirm`, e, ``)),
    (window.prompt = (e, t) => To(`prompt`, e, t)),
    window.addEventListener(`click`, Oo, !0),
    window.addEventListener(
      `pointerdown`,
      (e) => {
        e.isTrusted &&
          e.target instanceof Element &&
          !e.target.closest(`[data-dm-dialogo]`) &&
          (_o = []);
      },
      !0,
    ));
}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function initializeDemoDialogs() {
  configureZod({
    jitless: true,
  });
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
  io = `Esto es una demo: no se guarda nada ni se mueve plata.`;
  ao = `Esto es una demo: este enlace no se abre.`;
  oo = [];
  co = null;
  lo = 0;
  installDemoGuards();
  go = [];
  _o = [];
  vo = 0;
  yo = !1;
  bo =
    /eliminar|borrar|bloque|rechaz|cerrar el sitio|apag|anul|sacar|descart|no se deshace/i;
  So = null;
  Eo = [
    [
      /\/admin\/security\/?$/,
      `En la demo no hay «Mi seguridad»: en tu casino ahí cada uno pone su autenticador y cambia su contraseña.`,
    ],
    [/\/staff\/?$/, `Esto es una demo: la sesión no se cierra.`],
  ];
}
export { installDemoDialogs, initializeDemoDialogs };
