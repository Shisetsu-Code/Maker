/**
 * panel / motion.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Hm() {
  let [e, t] = (0, React.useState)(!1);
  return (
    (0, React.useEffect)(() => {
      let e = !0,
        n = null,
        r = async () => {
          if (!(typeof document < `u` && document.hidden))
            try {
              let r = await (
                await fetch(`/api/health`, {
                  cache: `no-store`,
                })
              ).json();
              if (!e || !r.version || r.version === `desconocida`) return;
              if (n === null) {
                n = r.version;
                return;
              }
              r.version !== n && t(!0);
            } catch {}
        };
      r();
      let i = setInterval(() => void r(), 12e4);
      return () => {
        ((e = !1), clearInterval(i));
      };
    }, []),
    e
      ? (0, JSXRuntime.jsxs)(`div`, {
          role: `status`,
          style: {
            position: `fixed`,
            left: `50%`,
            bottom: `18px`,
            transform: `translateX(-50%)`,
            zIndex: 90,
            display: `flex`,
            alignItems: `center`,
            gap: `12px`,
            maxWidth: `calc(100vw - 28px)`,
            padding: `12px 14px 12px 16px`,
            borderRadius: `14px`,
            background: `#1C1D21`,
            border: `1px solid rgba(255,90,0,.45)`,
            boxShadow: `0 18px 44px rgba(0,0,0,.6)`,
            color: `#F4F4F5`,
            fontSize: `13px`,
            fontFamily: `inherit`,
          },
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              style: {
                flex: `0 0 7px`,
                width: `7px`,
                height: `7px`,
                borderRadius: `50%`,
                background: `#FF5A00`,
              },
            }),
            (0, JSXRuntime.jsx)(`span`, {
              style: {
                lineHeight: 1.4,
              },
              children: `Se actualizó el sistema. Recargá para seguir operando.`,
            }),
            (0, JSXRuntime.jsx)(`button`, {
              type: `button`,
              onClick: () => window.location.reload(),
              style: {
                flex: `0 0 auto`,
                height: `34px`,
                padding: `0 14px`,
                borderRadius: `10px`,
                background: `#FF5A00`,
                color: `#fff`,
                border: 0,
                fontSize: `12.5px`,
                fontWeight: 700,
                cursor: `pointer`,
                fontFamily: `inherit`,
              },
              children: `Recargar`,
            }),
          ],
        })
      : null
  );
}
let Um, Wm, Gm;
function Km(e) {
  try {
    return (
      typeof window < `u` &&
      typeof window.matchMedia == `function` &&
      window.matchMedia(e).matches
    );
  } catch {
    return !1;
  }
}
function qm() {
  return Km(`(prefers-reduced-motion: reduce)`);
}
function Jm() {
  return Km(Um);
}
function Ym() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function Xm(e) {
  try {
    return e();
  } catch {
    return;
  }
}
function Zm(e, t, n) {
  return qm() || typeof e.animate != `function` ? null : e.animate(t, n);
}
function Qm(e, t) {
  let n = (e ?? ``).split(/\s+/).filter(Boolean);
  return (n.includes(t) || n.push(t), n.join(` `));
}
function $m(e, t) {
  return (e ?? ``)
    .split(/\s+/)
    .filter((e) => e && e !== t)
    .join(` `);
}
function eh(e, t) {
  return (e ?? ``).split(/\s+/).includes(t);
}
function th(e, t) {
  return e < 0 || t < 0 || e === t ? 0 : t > e ? 1 : -1;
}
function nh(e, t, n, r, i) {
  let a = e ? th(r, i) : th(t, n);
  return a === 0 ? 1 : a;
}
function rh(e) {
  return {
    sale: [
      {
        transform: `translateX(0)`,
        filter: `brightness(1)`,
      },
      {
        transform: `translateX(${-e * 30}%)`,
        filter: `brightness(.55)`,
      },
    ],
    entra: [
      {
        transform: `translateX(${e * 100}%)`,
        boxShadow: `${-e * 24}px 0 44px -24px rgba(0,0,0,.95)`,
      },
      {
        transform: `translateX(0)`,
        boxShadow: `0 0 0 0 rgba(0,0,0,0)`,
      },
    ],
  };
}
function ih(e, t) {
  let n = Math.abs(t) > Math.abs(e);
  return {
    viejo: n ? (t > 0 ? `abajo` : `arriba`) : e >= 0 ? `der` : `izq`,
    nuevo: n ? (t > 0 ? `arriba` : `abajo`) : e >= 0 ? `izq` : `der`,
  };
}
function ah(e) {
  return Math.max(1, parseFloat(e) || 1.5);
}
function oh(e, t, n, r, i) {
  let a = r / 2,
    o = a,
    s = t - a,
    c = a,
    l = n - a,
    u = t / 2,
    d = n / 2,
    f = Math.max(0, Math.min((n - 2 * a) / 2, (t - 2 * a) / 2, (i || n) - a));
  switch (e) {
    case `der`:
      return `M ${s} ${d} V ${l - f} A ${f} ${f} 0 0 1 ${s - f} ${l} H ${o + f} A ${f} ${f} 0 0 1 ${o} ${l - f} V ${c + f} A ${f} ${f} 0 0 1 ${o + f} ${c} H ${s - f} A ${f} ${f} 0 0 1 ${s} ${c + f} V ${d}`;
    case `arriba`:
      return `M ${u} ${c} H ${s - f} A ${f} ${f} 0 0 1 ${s} ${c + f} V ${l - f} A ${f} ${f} 0 0 1 ${s - f} ${l} H ${o + f} A ${f} ${f} 0 0 1 ${o} ${l - f} V ${c + f} A ${f} ${f} 0 0 1 ${o + f} ${c} H ${u}`;
    case `abajo`:
      return `M ${u} ${l} H ${o + f} A ${f} ${f} 0 0 1 ${o} ${l - f} V ${c + f} A ${f} ${f} 0 0 1 ${o + f} ${c} H ${s - f} A ${f} ${f} 0 0 1 ${s} ${c + f} V ${l - f} A ${f} ${f} 0 0 1 ${s - f} ${l} H ${u}`;
    default:
      return `M ${o} ${d} V ${c + f} A ${f} ${f} 0 0 1 ${o + f} ${c} H ${s - f} A ${f} ${f} 0 0 1 ${s} ${c + f} V ${l - f} A ${f} ${f} 0 0 1 ${s - f} ${l} H ${o + f} A ${f} ${f} 0 0 1 ${o} ${l - f} V ${d}`;
  }
}
let sh;
function ch(e) {
  let t = sh.exec(String(e ?? ``).trim());
  if (!t) return null;
  let [, n, r, i, a] = t;
  if (i === void 0 || a === void 0) return null;
  let o = Number(i.replace(/\./g, ``) + a);
  if (!Number.isSafeInteger(o)) return null;
  let s = n ?? ``;
  return {
    centavos: s ? -o : o,
    prefijo: r,
    signo: s,
  };
}
function lh(e, t, n = `-`) {
  let r = Math.round(e),
    i = Math.abs(r),
    a = Math.floor(i / 100),
    o = i % 100,
    s = String(a).replace(/\B(?=(\d{3})+(?!\d))/g, `.`);
  return {
    cabeza: `${r < 0 ? n : ``}${t} ${s}`,
    cola: `,${String(o).padStart(2, `0`)}`,
  };
}
function uh(e) {
  return e >= 1 ? 1 : e <= 0 ? 0 : 1 - 2 ** (-10 * e);
}
function dh(e, t, n) {
  return Math.round(e + (t - e) * uh(n));
}
function fh(e) {
  return 80 + Math.max(0, e) * 60;
}
function ph(e) {
  return 40 + Math.max(0, e) * 40;
}
function mh(e) {
  return e <= 44 ? `tilde-nuevo` : `tilde-solo`;
}
function hh(e, t) {
  return e > 0 && t > 0 && e !== t;
}
function gh(e, t, n, r = 12) {
  return t < e.left - r || t > e.right + r || n < e.top - r || n > e.bottom + r;
}
function _h(e, t) {
  return (
    Math.abs(e.x - t.x) > 1 ||
    Math.abs(e.y - t.y) > 1 ||
    Math.abs(e.w - t.w) > 1
  );
}
function vh(e) {
  return e > 4e3;
}
let yh;
function bh(e, t) {
  return {
    inicio: e === `inicio`,
    paneles: e === `paneles`,
    cargar: !1,
    pendientes: e === `pendientes`,
    mas: (e !== `inicio` && e !== `paneles` && e !== `pendientes`) || t,
  };
}
function xh(e, t) {
  let n = bh(e, t);
  return yh.findIndex((e) => n[e]);
}
let Sh, Ch, wh, Th;
function Eh(e, t) {
  return e.classList?.contains(t) ?? !1;
}
function Dh(e, t = {}) {
  let n = t.sinCapas ?? !0,
    r = [e, ...Array.from(e.querySelectorAll(`*`))];
  for (let t of r) {
    let r = t.tagName.toLowerCase();
    if (t !== e) {
      if (
        Sh.has(r) ||
        Ch.some((e) => Eh(t, e)) ||
        (n && wh.some((e) => Eh(t, e)))
      ) {
        t.remove();
        continue;
      }
      if (
        r === `input` &&
        (t.getAttribute(`type`) ?? ``).toLowerCase() === `hidden`
      ) {
        t.remove();
        continue;
      }
    }
    for (let e of Th) t.removeAttribute(e);
    if (r === `input`) {
      let e = (t.getAttribute(`type`) ?? `text`).toLowerCase();
      e !== `checkbox` &&
        e !== `radio` &&
        (t.removeAttribute(`value`), `value` in t && (t.value = ``));
    } else
      r === `textarea` &&
        ((t.textContent = ``), `value` in t && (t.value = ``));
  }
  return (
    e.setAttribute(`inert`, ``),
    e.setAttribute(`aria-hidden`, `true`),
    e
  );
}
function Oh(e, t, n = {}) {
  let r = e.cloneNode(!0);
  return (Dh(r, n), r.classList.add(t), r);
}
let kh;
function Ah(e, t) {
  let n = kh.get(e),
    r = n?.get(t);
  r !== void 0 && (clearTimeout(r), n?.delete(t));
  let i = $m(e.getAttribute(`data-fx`), t);
  i ? e.setAttribute(`data-fx`, i) : e.removeAttribute(`data-fx`);
}
function jh(e, t, n, r = !1) {
  if (
    (eh(e.getAttribute(`data-fx`), t) &&
      (Ah(e, t), r && e.getBoundingClientRect()),
    e.setAttribute(`data-fx`, Qm(e.getAttribute(`data-fx`), t)),
    n !== void 0 && n > 0)
  ) {
    let r = kh.get(e) ?? new Map();
    (r.set(
      t,
      setTimeout(() => Ah(e, t), n),
    ),
      kh.set(e, r));
  }
}
function Mh() {
  return {
    current: null,
  };
}
var PanelMotionController;
let Ph;
function Fh() {
  return (0, React.useContext)(Ph);
}
function usePanelMotion() {
  let [e] = (0, React.useState)(() => new PanelMotionController());
  return ((0, React.useEffect)(() => e.conectar(), [e]), e);
}
var MotionBoundary;
let Rh, zh;
function Bh(e, t, n, r = 0) {
  let i = zh.get(e);
  i && (i.anims.forEach((e) => e.cancel()), i.svg?.remove());
  let a = (i?.gen ?? 0) + 1,
    o = {
      gen: a,
      anims: [],
      svg: null,
    };
  (zh.set(e, o),
    Ah(e, `borde-entra`),
    Ah(e, `borde-sale`),
    jh(e, t ? `borde-entra` : `borde-sale`));
  let s = e.offsetWidth,
    c = e.offsetHeight;
  if (!s || !c || qm()) {
    (Ah(e, `borde-entra`), Ah(e, `borde-sale`));
    return;
  }
  let l = getComputedStyle(e),
    u = ah(l.borderTopWidth),
    d = parseFloat(l.borderLeftWidth) || 0,
    f = parseFloat(l.borderTopWidth) || 0,
    p = document.createElementNS(Rh, `svg`);
  p.setAttribute(`class`, `fx-borde`);
  let m = l.overflowX !== `visible` || l.overflowY !== `visible`,
    h = s,
    g = c,
    _ = parseFloat(l.borderTopLeftRadius);
  (m
    ? ((h = e.clientWidth), (g = e.clientHeight), (_ -= f))
    : ((p.style.inset = `auto`),
      (p.style.left = `${-d}px`),
      (p.style.top = `${-f}px`),
      (p.style.width = `${s}px`),
      (p.style.height = `${c}px`)),
    p.setAttribute(`viewBox`, `0 0 ${h} ${g}`),
    p.setAttribute(`preserveAspectRatio`, `none`),
    p.setAttribute(`aria-hidden`, `true`));
  let v = document.createElementNS(Rh, `path`);
  (v.setAttribute(`d`, oh(n, h, g, u, _)),
    (v.style.strokeWidth = `${u}px`),
    p.appendChild(v),
    e.appendChild(p),
    (o.svg = p));
  let y = v.getTotalLength();
  v.style.strokeDasharray = String(y);
  let b = t
    ? Zm(
        v,
        [
          {
            strokeDashoffset: y,
          },
          {
            strokeDashoffset: 0,
          },
        ],
        {
          duration: 600,
          delay: r,
          easing: `cubic-bezier(.2,.7,.3,1)`,
          fill: `both`,
        },
      )
    : Zm(
        v,
        [
          {
            strokeDashoffset: 0,
          },
          {
            strokeDashoffset: -y,
          },
        ],
        {
          duration: 300,
          delay: r,
          easing: `cubic-bezier(.5,0,.8,.6)`,
          fill: `both`,
        },
      );
  if ((b && o.anims.push(b), t)) {
    let t = Zm(
      e,
      [
        {
          backgroundColor: `rgba(${getComputedStyle(e).getPropertyValue(`--dm-p-rgb`).trim() || `255,90,0`},0)`,
        },
        {
          backgroundColor: `rgba(${getComputedStyle(e).getPropertyValue(`--dm-p-rgb`).trim() || `255,90,0`},.1)`,
        },
      ],
      {
        duration: 600,
        delay: r,
        easing: `ease-out`,
        fill: `backwards`,
      },
    );
    t && o.anims.push(t);
  }
  let x = () =>
    Xm(() => {
      if (zh.get(e)?.gen !== a) {
        p.remove();
        return;
      }
      ((e.style.transition = `none`),
        Ah(e, `borde-entra`),
        Ah(e, `borde-sale`),
        e.offsetWidth,
        p.remove(),
        (o.svg = null),
        (o.anims = []),
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            e.style.transition = ``;
          }),
        ));
    });
  b ? b.finished.then(x, x) : x();
}
function Vh(e) {
  return Array.from(e.children).filter(
    (e) =>
      e instanceof HTMLElement && !Eh(e, `fx-pastilla`) && !Eh(e, `fx-borde`),
  );
}
function Hh(e, t) {
  let n = e.nextElementSibling,
    r = 0;
  for (; n && r < 12;)
    (Zm(
      n,
      [
        {
          opacity: 0,
          transform: `translateX(${t * 24}px)`,
        },
        {
          opacity: 1,
          transform: `translateX(0)`,
        },
      ],
      {
        duration: 380,
        delay: r * 30,
        easing: Wm,
        fill: `backwards`,
      },
    ),
      (n = n.nextElementSibling),
      r++);
}
function Uh(e, t, n) {
  let r = (0, React.useRef)(t),
    i = n?.deslizarHermanos === !0;
  (0, React.useLayoutEffect)(() => {
    let n = r.current;
    r.current = t;
    let a = e.current;
    !a ||
      n === t ||
      n < 0 ||
      t < 0 ||
      qm() ||
      Xm(() => {
        let e = Vh(a),
          r = e[t];
        if (!r) return;
        let o = e[n];
        if ((o && jh(o, `borde-sale`), jh(r, `borde-entra`), !o)) {
          Bh(r, !0, `izq`, 0);
          return;
        }
        let s = ih(
          r.offsetLeft + r.offsetWidth / 2 - (o.offsetLeft + o.offsetWidth / 2),
          r.offsetTop + r.offsetHeight / 2 - (o.offsetTop + o.offsetHeight / 2),
        );
        (i && Hh(a, t > n ? 1 : -1),
          Bh(o, !1, s.viejo, 0),
          Bh(r, !0, s.nuevo, 300));
      });
  }, [e, t, i]);
}
function Wh(e, t, n, r) {
  Xm(() => {
    if (!e) return;
    let i = t ?? e.querySelector(`:scope > .fx-pastilla`);
    if (!i) return;
    let a = Vh(e),
      o = a.find((e) => Eh(e, `on`));
    if (!o) {
      ((i.style.opacity = `0`), (n.current = null));
      return;
    }
    let s = o.offsetLeft,
      c = o.offsetTop;
    if (o.offsetParent !== e) {
      let t = e.getBoundingClientRect(),
        n = o.getBoundingClientRect();
      ((s = n.left - t.left - e.clientLeft), (c = n.top - t.top - e.clientTop));
    }
    let l = {
      x: s,
      y: c,
      w: o.offsetWidth,
      h: o.offsetHeight,
      idx: a.indexOf(o),
    };
    ((i.style.opacity = ``),
      (i.style.width = `${l.w}px`),
      (i.style.height = `${l.h}px`),
      (i.style.transform = `translate(${l.x}px,${l.y}px)`));
    let u = n.current,
      d = e.offsetWidth > 0 && u !== null && u.w > 0;
    (r &&
      d &&
      u &&
      _h(u, l) &&
      Zm(
        i,
        [
          {
            width: `${u.w}px`,
            height: `${u.h}px`,
            transform: `translate(${u.x}px,${u.y}px)`,
          },
          {
            width: `${l.w}px`,
            height: `${l.h}px`,
            transform: `translate(${l.x}px,${l.y}px)`,
          },
        ],
        {
          duration: 380,
          easing: `cubic-bezier(.25,.9,.3,1)`,
        },
      ) &&
      jh(o, `recien`, 420, !0),
      r && d && u && u.idx !== l.idx && !qm() && jh(o, `rebota`, 470, !0),
      (n.current = l));
  });
}
function Gh(e, t, n) {
  let r = (0, React.useRef)(null);
  ((0, React.useLayoutEffect)(() => {
    Wh(e.current, t.current, r, !0);
  }, [e, t, n]),
    (0, React.useEffect)(() => {
      let n = e.current;
      if (!n || typeof ResizeObserver > `u`) return;
      let i = new ResizeObserver(() => Wh(e.current, t.current, r, !1));
      return (
        i.observe(n),
        Array.from(n.children)
          .filter((e) => !e.classList.contains(`fx-pastilla`))
          .forEach((e) => i.observe(e)),
        () => i.disconnect()
      );
    }, [e, t]));
}
function Kh(e, t) {
  (0, React.useLayoutEffect)(() => {
    let t = e.current;
    t && Xm(() => jh(t, `nueva`, 1200, !0));
  }, [e, t]);
}
function qh() {
  let e = Fh();
  (0, React.useLayoutEffect)(() => {
    e && e.abrioVentana();
  }, [e]);
}
function Jh(e, t) {
  let n = Fh();
  (0, React.useLayoutEffect)(() => {
    let r = e.current;
    return () => {
      Xm(() => {
        if (!n || !r || qm()) return;
        let e = n.capa.current;
        if (!e || !e.isConnected || !r.isConnected) return;
        let i = t === `hoja` ? `.hoja` : `.dlg`,
          a = r.querySelector(i)?.scrollTop ?? 0,
          o = t === `hoja` && !Jm(),
          s = n.aperturas,
          c = Oh(r, `fx-fantasma`, {
            sinCapas: !1,
          });
        queueMicrotask(() =>
          Xm(() => {
            if (r.isConnected || n.aperturas !== s || !e.isConnected) return;
            e.appendChild(c);
            let t = c.querySelector(i);
            (t && (t.scrollTop = a),
              Zm(
                c,
                [
                  {
                    opacity: 1,
                  },
                  {
                    opacity: 0,
                  },
                ],
                {
                  duration: o ? 300 : 200,
                  easing: `ease-in`,
                  fill: `forwards`,
                },
              ),
              t &&
                Zm(
                  t,
                  o
                    ? [
                        {
                          transform: `translateY(0)`,
                        },
                        {
                          transform: `translateY(100%)`,
                        },
                      ]
                    : [
                        {
                          transform: `scale(1)`,
                        },
                        {
                          transform: `scale(.96)`,
                        },
                      ],
                  {
                    duration: o ? 320 : 200,
                    easing: `cubic-bezier(.4,0,1,1)`,
                    fill: `forwards`,
                  },
                ),
              setTimeout(() => c.remove(), o ? 340 : 220));
          }),
        );
      });
    };
  }, [e, t, n]);
}
function Yh(e, t) {
  (qh(), Kh(e), Jh(e, t));
}
function Xh(e, t, n) {
  let r = (0, React.useRef)(t);
  (0, React.useLayoutEffect)(() => {
    let i = r.current;
    r.current = t;
    let a = e.current;
    !a ||
      i === t ||
      Xm(() => {
        n === `switch`
          ? (Ah(a, t ? `apaga` : `prende`),
            jh(a, t ? `prende` : `apaga`, 420, !0))
          : t || jh(a, `apaga`, 320, !0);
      });
  }, [e, t, n]);
}
function Zh(e, t) {
  let n = Fh();
  (0, React.useLayoutEffect)(() => {
    let r = e.current;
    !t ||
      !r ||
      !n ||
      n.primeraCarga() ||
      qm() ||
      Xm(() => jh(r, mh(r.offsetWidth), 580, !0));
  }, [e, t, n]);
}
function Qh(e, t) {
  let n = (0, React.useRef)(t);
  (0, React.useLayoutEffect)(() => {
    let r = n.current;
    n.current = t;
    let i = e.current;
    i && hh(r, t) && Xm(() => jh(i, `pop`, 360, !0));
  }, [e, t]);
}
function $h() {
  try {
    return (
      typeof performance < `u` &&
      performance
        .getEntriesByType(`paint`)
        .some((e) => e.name === `first-contentful-paint`)
    );
  } catch {
    return !1;
  }
}
function eg(e, t, n, r) {
  let i = Fh(),
    a = (0, React.useRef)(null),
    o = (0, React.useRef)(!1);
  (0, React.useLayoutEffect)(() => {
    let s = a.current;
    a.current = e;
    let c = t.current,
      l = n.current;
    if (!r || !i || !c || !l) return;
    let u = s === null,
      d = s === e && o.current;
    if (!u && !d) {
      if (s !== e) {
        o.current = !1;
        let e = c.closest(`.numero`);
        e && Xm(() => jh(e, `cambio`, 950, !0));
      }
      return;
    }
    if (qm() || (u && (!i.enEntrada() || (i.primeraCarga() && $h())))) return;
    let f = ch(e);
    if (!f || f.centavos === 0) return;
    let p = Array.from(
        i.main.current?.querySelectorAll(`.numero .numero-valor .plata`) ?? [],
      ),
      m = fh(Math.max(0, p.indexOf(c))),
      h = document.createTextNode(``),
      g = document.createElement(`small`),
      _ = 0,
      v = !0,
      y = (e) => {
        let t = lh(e, f.prefijo, f.signo || `-`);
        ((h.data = t.cabeza), (g.textContent = t.cola));
      },
      b = () => {
        v &&
          ((v = !1),
          cancelAnimationFrame(_),
          Xm(() => {
            (l.replaceChildren(), Ah(c, `contando`));
          }));
      },
      x = Ym() + m;
    function S(e) {
      if (!v) return;
      if (!c || !c.isConnected) {
        b();
        return;
      }
      let t = Math.min(1, Math.max(0, (e - x) / 800));
      if (t >= 1) {
        ((o.current = !1), b());
        return;
      }
      (y(dh(0, f ? f.centavos : 0, t)), (_ = requestAnimationFrame(S)));
    }
    if (
      !Xm(
        () => (
          l.replaceChildren(h, g),
          y(0),
          jh(c, `contando`),
          (o.current = !0),
          (_ = requestAnimationFrame(S)),
          !0
        ),
      )
    ) {
      b();
      return;
    }
    return b;
  }, [e, r, i, t, n]);
}
function tg(e, t, n, r) {
  let i = (0, React.useRef)(null);
  (0, React.useLayoutEffect)(() => {
    let r = i.current,
      a = e.current,
      o = a ? Array.from(a.querySelectorAll(`:scope > .lat-item.sub`)) : [];
    ((i.current = {
      on: t,
      seccion: n,
      subs: new Set(o.map((e) => e.textContent?.trim() ?? ``)),
    }),
      !(!r || !a || !Jm() || qm()) &&
        Xm(() => {
          let e = a.querySelector(`:scope > .lat-item.on`);
          e && t !== r.on && jh(e, `lat-on`, 450, !0);
          let i = a.querySelector(`:scope > .lat-item.padre`);
          i && n !== r.seccion && jh(i, `lat-abre-padre`, 400, !0);
          let s = 0;
          o.forEach((e) => {
            let t = e.textContent?.trim() ?? ``;
            if (r.subs.has(t)) return;
            let n = ph(s++);
            (e.style.setProperty(`--fx-retraso`, `${n}ms`),
              jh(e, `lat-abre`, 380 + n, !0));
          });
        }));
  }, [e, t, n, r.join(``)]);
}
function initializeMotion() {
  Um = `(min-width: 900px)`;
  Wm = `cubic-bezier(.25,.9,.3,1)`;
  Gm = `cubic-bezier(.32,.72,0,1)`;
  sh = /^([−-])?(ARS|R\$)\s(\d{1,3}(?:\.\d{3})+|\d+),(\d{2})$/;
  yh = [`inicio`, `paneles`, `cargar`, `pendientes`, `mas`];
  Sh = new Set([
    `iframe`,
    `frame`,
    `object`,
    `embed`,
    `video`,
    `audio`,
    `script`,
    `noscript`,
    `template`,
  ]);
  Ch = [`fx-borde`, `fx-bajo`, `fx-pastilla`];
  wh = [`hoja-fondo`, `dlg-fondo`, `toast`, `flotante`];
  Th = [
    `id`,
    `name`,
    `for`,
    `form`,
    `data-fx`,
    `tabindex`,
    `autofocus`,
    `accesskey`,
    `action`,
    `formaction`,
    `aria-live`,
  ];
  kh = new WeakMap();
  PanelMotionController = class {
    raiz = Mh();
    marco = Mh();
    main = Mh();
    hueco = Mh();
    capa = Mh();
    inicio = null;
    entradaAbierta = !1;
    entradaHasta = 0;
    cuentaAperturas = 0;
    pendiente = null;
    deslizamiento = null;
    conectar() {
      this.inicio = Ym();
      let e = setTimeout(() => this.sinCascada(), 1e3),
        t = this.raiz.current;
      if (!t) return () => clearTimeout(e);
      let n = null,
        r = () => {
          let e = n;
          e &&
            ((n = null),
            Xm(() => {
              (Ah(e, `apretado`), jh(e, `soltando`, 470));
            }));
        },
        i = (e) =>
          Xm(() => {
            if (e.button > 0) return;
            let i =
              (e.target instanceof Element ? e.target : null)?.closest(
                `.btn,.chip,.solapa,.seg,.nav-item,.mas-fila,.fila.tocable,.sigue-fila,.dato.tocable,button.numero,.casilla,.switch,.lat-item,.flotante-x,.opcion,.sop-conv,.sop-atras,.sop-enviar,.sop-cab-accion,.sop-clip,.sop-res,.eq-rol,.eq-tacho,.eq-sel-op,.eq-sel-btn,.socios-todos,.eq-barra-todos,.lg-ctl,.lg-tr,.lg-pill-x,.lg-det-x,.pl-fila-sum`,
              ) ?? null;
            !i ||
              !t.contains(i) ||
              i.closest(`[inert]`) ||
              i.disabled === !0 ||
              i.getAttribute(`aria-disabled`) === `true` ||
              (r(), Ah(i, `soltando`), jh(i, `apretado`), (n = i));
          }),
        a = (e) => {
          let t = n;
          !t ||
            e.pointerType === `mouse` ||
            Xm(() => {
              gh(t.getBoundingClientRect(), e.clientX, e.clientY) && r();
            });
        },
        o = {
          passive: !0,
        };
      return (
        t.addEventListener(`pointerdown`, i, o),
        t.addEventListener(`pointerup`, r, o),
        t.addEventListener(`pointercancel`, r, o),
        t.addEventListener(`pointermove`, a, o),
        window.addEventListener(`blur`, r),
        () => {
          (clearTimeout(e),
            t.removeEventListener(`pointerdown`, i),
            t.removeEventListener(`pointerup`, r),
            t.removeEventListener(`pointercancel`, r),
            t.removeEventListener(`pointermove`, a),
            window.removeEventListener(`blur`, r),
            r(),
            this.cortarDeslizamiento(),
            (this.pendiente = null));
        }
      );
    }
    primeraCarga() {
      return this.inicio === null || Ym() - this.inicio < 400;
    }
    enEntrada() {
      return (
        this.inicio === null ||
        (this.entradaAbierta && Ym() < this.entradaHasta)
      );
    }
    get aperturas() {
      return this.cuentaAperturas;
    }
    sinCascada() {
      let e = this.marco.current;
      e && Xm(() => jh(e, `sin-cascada`));
    }
    abrioVentana() {
      (this.cuentaAperturas++, Xm(() => this.capa.current?.replaceChildren()));
    }
    prepararCambio(e) {
      return (
        (this.pendiente = null),
        (this.entradaAbierta = !0),
        (this.entradaHasta = Ym() + 1e3),
        this.sinCascada(),
        this.fotografiar(e)
      );
    }
    cerrarEntrada() {
      this.entradaAbierta = !1;
    }
    fotografiar(e) {
      let t = this.main.current;
      if (!t || !t.isConnected || qm()) return null;
      this.cortarDeslizamiento();
      let n = t.getBoundingClientRect(),
        r = {
          left: n.left,
          top: n.top,
          width: n.width,
        };
      return {
        copia: vh(t.getElementsByTagName(`*`).length)
          ? null
          : Oh(t, `fx-saliente`, {
              sinCapas: !0,
            }),
        rect: r,
        dir: e,
      };
    }
    deslizar(e) {
      let t = this.main.current;
      if (!t || !t.isConnected || qm()) return;
      this.cortarDeslizamiento();
      let { copia: n, rect: r, dir: i } = e,
        a = rh(i),
        o = this.hueco.current,
        s = null,
        c = null;
      (n &&
        o &&
        o.isConnected &&
        ((s = document.createElement(`div`)),
        (s.className = `fx-bajo`),
        s.setAttribute(`aria-hidden`, `true`),
        (s.style.cssText = `position:fixed;left:${r.left}px;top:0;bottom:0;width:${r.width}px;overflow:hidden;z-index:0;pointer-events:none`),
        (n.style.cssText = `position:absolute;left:0;top:${r.top}px;width:${r.width}px;margin:0`),
        s.appendChild(n),
        o.appendChild(s),
        (c = Zm(n, a.sale, {
          duration: 460,
          easing: Gm,
          fill: `forwards`,
        }))),
        jh(t, `deslizando`));
      let l = Zm(t, a.entra, {
          duration: 460,
          easing: Gm,
        }),
        u = !1,
        d = {},
        f = {
          limpiar: () => {
            u ||
              ((u = !0),
              d.reloj !== void 0 && clearTimeout(d.reloj),
              Xm(() => {
                (s?.remove(),
                  c?.cancel(),
                  l &&
                    l.playState !== `finished` &&
                    l.playState !== `idle` &&
                    l.cancel(),
                  Ah(t, `deslizando`));
              }),
              this.deslizamiento === f && (this.deslizamiento = null));
          },
        };
      if (((this.deslizamiento = f), !l)) {
        f.limpiar();
        return;
      }
      ((l.onfinish = f.limpiar),
        (l.oncancel = f.limpiar),
        (d.reloj = setTimeout(f.limpiar, 1060)));
    }
    empujar(e) {
      Xm(() => {
        this.sinCascada();
        let t = this.fotografiar(e);
        this.pendiente = t
          ? {
              foto: t,
              hasta: Ym() + 1e3,
            }
          : null;
      });
    }
    deslizarPendiente() {
      let e = this.pendiente;
      ((this.pendiente = null),
        e && Ym() <= e.hasta && Xm(() => this.deslizar(e.foto)));
    }
    cortarDeslizamiento() {
      let e = this.deslizamiento;
      ((this.deslizamiento = null), e?.limpiar());
    }
  };
  Ph = (0, React.createContext)(null);
  MotionBoundary = class extends React.Component {
    static contextType = Ph;
    motor() {
      return this.props.fx ?? this.context ?? null;
    }
    getSnapshotBeforeUpdate(e) {
      if (e.clave === this.props.clave) return null;
      let t = this.motor();
      if (!t) return null;
      let n = nh(
        Jm(),
        e.indiceNav,
        this.props.indiceNav,
        e.indiceLat,
        this.props.indiceLat,
      );
      return Xm(() => t.prepararCambio(n)) ?? null;
    }
    componentDidUpdate(e, t, n) {
      let r = this.motor();
      r && (n && Xm(() => r.deslizar(n)), r.cerrarEntrada());
    }
    render() {
      return this.props.children ?? null;
    }
  };
  Rh = `http://www.w3.org/2000/svg`;
  zh = new WeakMap();
}
export {
  Hm,
  Um,
  Wm,
  Gm,
  qm,
  Jm,
  rh,
  bh,
  xh,
  Ph,
  usePanelMotion,
  MotionBoundary,
  Uh,
  Gh,
  Kh,
  Yh,
  Xh,
  Zh,
  Qh,
  eg,
  tg,
  initializeMotion,
};
