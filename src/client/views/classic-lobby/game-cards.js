/**
 * classic-lobby / game-cards.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import ycData from "../../catalogs/catalog-3c2816e2e7f8.json";
import { Ia } from "./game-catalog.js";
let Js, Ys, Xs;
function Zs(e, t, n) {
  let r = (e + t + n) / 3,
    i = 1.9;
  ((e = r + (e - r) * i), (t = r + (t - r) * i), (n = r + (n - r) * i));
  let a = Math.min(2, 200 / Math.max(e, t, n, 1));
  ((e *= a), (t *= a), (n *= a));
  let o = (e) => Math.max(0, Math.min(255, Math.round(e)));
  return `${o(e)},${o(t)},${o(n)}`;
}
function Qs(e, t, n, r, i, a) {
  let o = 0,
    s = 0,
    c = 0,
    l = 0;
  for (let u = r; u < a; u++)
    for (let r = n; r < i; r++) {
      let n = (u * t + r) * 4;
      ((o += e[n]), (s += e[n + 1]), (c += e[n + 2]), l++);
    }
  return l ? Zs(o / l, s / l, c / l) : Ys;
}
function $s(e, t, n) {
  let r = (t / 3) | 0,
    i = ((2 * t) / 3) | 0,
    a = (n / 2) | 0;
  return [
    Qs(e, t, 0, 0, r, a),
    Qs(e, t, r, 0, i, a),
    Qs(e, t, i, 0, t, a),
    Qs(e, t, 0, a, r, n),
    Qs(e, t, r, a, i, n),
    Qs(e, t, i, a, t, n),
  ];
}
function ec(e) {
  let t = parseInt(e, 16);
  return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
}
function tc(e) {
  let t = (e.match(/#([0-9a-fA-F]{6})/g) || []).map((e) => ec(e.slice(1)));
  if (t.length === 0) return Xs;
  t.length === 1 && t.push(t[0]);
  let n = [];
  for (let e = 0; e < 6; e++) {
    let r = (e / 5) * (t.length - 1),
      i = Math.floor(r),
      a = Math.min(i + 1, t.length - 1),
      o = r - i,
      s = (e) => t[i][e] + (t[a][e] - t[i][e]) * o;
    n.push(Zs(s(0), s(1), s(2)));
  }
  return n;
}
let nc;
function rc({ game: e, on: t, live: n = 0 }) {
  let r = (0, React.useRef)(null),
    i = (0, React.useMemo)(() => tc(e.grad), [e.grad]),
    [a, o] = (0, React.useState)(Xs),
    s = e.vid ? a : i;
  if (
    ((0, React.useEffect)(() => {
      if (!t || !e.vid) return;
      let n = document.createElement(`canvas`);
      ((n.width = 24), (n.height = 14));
      let i = n.getContext(`2d`, {
        willReadFrequently: !0,
      });
      if (!i) return;
      let a = setInterval(() => {
        let e = r.current;
        if (!(!e || e.readyState < 2 || e.paused))
          try {
            (i.drawImage(e, 0, 0, 24, 14),
              o($s(i.getImageData(0, 0, 24, 14).data, 24, 14)));
          } catch {}
      }, 110);
      return () => clearInterval(a);
    }, [t, e.vid]),
    !t)
  )
    return null;
  let c = 0.62 + Math.max(0, Math.min(1, n)) * 0.33;
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.vid
        ? (0, JSXRuntime.jsx)(
            `video`,
            {
              ref: r,
              src: e.vid,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              "aria-hidden": !0,
              style: Js(
                `position:fixed;inset:-8%;width:116%;height:116%;object-fit:cover;filter:blur(82px) saturate(2.4) brightness(.5);pointer-events:none`,
              ),
            },
            `amb` + e.idx,
          )
        : (0, JSXRuntime.jsx)(`div`, {
            style: {
              ...Js(`position:fixed;inset:-8%;pointer-events:none`),
              background: e.amb,
              filter: `blur(96px) saturate(2.3) brightness(.5)`,
            },
          }),
      (0, JSXRuntime.jsx)(`div`, {
        style: {
          ...Js(`position:fixed;inset:0;pointer-events:none`),
          opacity: c,
          transition: `opacity 1.1s ease`,
        },
        children: nc.map((e, t) =>
          (0, JSXRuntime.jsx)(
            `div`,
            {
              className: `rb-amb-blob`,
              style: {
                ...Js(
                  `position:absolute;inset:0;pointer-events:none;mix-blend-mode:screen`,
                ),
                background: `radial-gradient(ellipse ${e.size} at ${e.at}, rgba(${s[t]},0.82), transparent 66%)`,
                "--rb-amb-dur": `${e.dur}s`,
                "--rb-amb-delay": `${e.delay}s`,
              },
            },
            t,
          ),
        ),
      }),
      (0, JSXRuntime.jsx)(`div`, {
        style: Js(
          `position:fixed;inset:0;background:radial-gradient(ellipse 66% 56% at 50% 46%,rgba(4,6,11,0),rgba(4,6,11,.85) 84%);pointer-events:none`,
        ),
      }),
    ],
  });
}
let ic, ac, oc, sc, B, cc, V, lc, uc, dc, fc, pc, mc, hc, gc, _c, vc, yc, bc;
function xc(e) {
  try {
    bc ||
      ((bc = document.createElement(`canvas`)),
      (bc.width = 20),
      (bc.height = 20));
    let t = bc.getContext(`2d`, {
      willReadFrequently: !0,
    });
    if (!t) return null;
    t.drawImage(e, 0, 0, 20, 20);
    let n = t.getImageData(0, 20 / 2, 20, 20 / 2).data,
      r = 0,
      i = 0,
      a = 0;
    for (let e = 0; e < n.length; e += 4) {
      let t = (n[e] ?? 0) / 255,
        o = (n[e + 1] ?? 0) / 255,
        s = (n[e + 2] ?? 0) / 255,
        c = Math.max(t, o, s),
        l = c - Math.min(t, o, s);
      if (l < 0.12 || c < 0.18) continue;
      let u = 0;
      u =
        c === t
          ? ((o - s) / l) % 6
          : c === o
            ? (s - t) / l + 2
            : (t - o) / l + 4;
      let d = (u * 60 * Math.PI) / 180;
      ((r += Math.cos(d) * l), (i += Math.sin(d) * l), (a += l));
    }
    if (a < 1.5) return null;
    let o = ((Math.atan2(i, r) * 180) / Math.PI + 360) % 360;
    return `hsla(${Math.round(o)}, 78%, 64%, .5)`;
  } catch {
    return null;
  }
}
let Sc;
function GameCard({ game: e, onOpen: t, width: n, fav: r, onFav: i }) {
  let [a, o] = (0, React.useState)(!1),
    [s, c] = (0, React.useState)(!1),
    l = e.vendorCode ? yc[`${e.vendorCode}|${e.gameCode}`] : void 0,
    [u, d] = (0, React.useState)(l == null ? null : `hsla(${l}, 78%, 64%, .5)`),
    [f, p] = (0, React.useState)(!1),
    [m, h] = (0, React.useState)(!1),
    g = (e) => {
      !e ||
        !e.complete ||
        e.naturalWidth === 0 ||
        h(e.naturalWidth <= e.naturalHeight * 1.05);
    },
    _ = f && e.imgRespaldo ? e.imgRespaldo : window.__demoAssetURL(e).img,
    v = Ia(_),
    y = !!(i && e.vendorCode && e.gameCode),
    b = {
      display: `flex`,
      flexDirection: `column`,
      gap: `7px`,
      minWidth: 0,
      ...(n
        ? {
            flex: `0 0 ${n}`,
          }
        : {}),
    },
    x = {
      position: `relative`,
      aspectRatio: `3 / 4`,
      borderRadius: `7px`,
      overflow: `hidden`,
      background: e.grad,
      cursor: `pointer`,
      transition: `transform .26s cubic-bezier(.34,1.56,.64,1), box-shadow .26s ease`,
      ...(a
        ? {
            transform: `translateY(-6px)`,
            boxShadow: `0 16px 34px rgba(0,0,0,.62)`,
          }
        : {}),
    };
  return (0, JSXRuntime.jsx)(`div`, {
    style: b,
    children: (0, JSXRuntime.jsxs)(`div`, {
      role: `button`,
      tabIndex: 0,
      "aria-label": e.n,
      title: `${e.n} · ${e.p}`,
      style: x,
      onClick: () => t(e),
      onKeyDown: (n) => {
        (n.key === `Enter` || n.key === ` `) && (n.preventDefault(), t(e));
      },
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        !s &&
          !m &&
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: `-12%`,
              background: `${v} center/cover no-repeat`,
              filter: `blur(20px) saturate(1.3) brightness(.45)`,
            },
          }),
        (0, JSXRuntime.jsx)(`img`, {
          src: _,
          alt: ``,
          "aria-hidden": `true`,
          loading: `lazy`,
          decoding: `async`,
          draggable: !1,
          onError: () => {
            !f && e.imgRespaldo ? p(!0) : c(!0);
          },
          ref: g,
          onLoad: (e) => {
            (g(e.currentTarget), l ?? d(xc(e.currentTarget)));
          },
          style: {
            position: `absolute`,
            inset: 0,
            width: `100%`,
            height: `100%`,
            objectFit: m ? `cover` : `contain`,
            display: s ? `none` : `block`,
          },
        }),
        s &&
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              padding: `12px`,
              textAlign: `center`,
            },
            children: (0, JSXRuntime.jsx)(`span`, {
              style: {
                fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                fontWeight: 700,
                fontSize: `13px`,
                lineHeight: 1.25,
                color: `#fff`,
                textShadow: `0 2px 10px rgba(0,0,0,.6)`,
                overflow: `hidden`,
                display: `-webkit-box`,
                WebkitLineClamp: 3,
                WebkitBoxOrient: `vertical`,
              },
              children: e.n,
            }),
          }),
        !s &&
          (0, JSXRuntime.jsxs)(`div`, {
            "aria-hidden": `true`,
            style: {
              position: `absolute`,
              inset: 0,
              pointerEvents: `none`,
            },
            children: [
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: `64%`,
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.68) 40%, rgba(0,0,0,.95) 100%)`,
                },
              }),
              (0, JSXRuntime.jsx)(`div`, {
                style: {
                  position: `absolute`,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: `58%`,
                  backgroundImage: `linear-gradient(180deg, transparent 0%, ${u ? u.replace(`, .5)`, `, .38)`).replace(`64%`, `56%`) : `rgba(255,255,255,.07)`} 78%, ${u ?? `rgba(255,255,255,.10)`} 100%)`,
                  WebkitMaskImage: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,.5) 45%, #000 100%)`,
                  maskImage: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,.5) 45%, #000 100%)`,
                },
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                style: {
                  position: `absolute`,
                  left: `7%`,
                  right: `7%`,
                  bottom: `9%`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  gap: `3px`,
                  textAlign: `center`,
                },
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      fontFamily: `var(--font-oswald), 'Oswald', sans-serif`,
                      fontWeight: 700,
                      fontSize: `clamp(13px, 1.05vw, 16px)`,
                      lineHeight: 1.06,
                      letterSpacing: `.01em`,
                      color: `#fff`,
                      textTransform: `uppercase`,
                      textShadow: `0 2px 8px rgba(0,0,0,.8)`,
                      overflow: `hidden`,
                      display: `-webkit-box`,
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: `vertical`,
                    },
                    children: e.n,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      fontFamily: `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`,
                      fontWeight: 600,
                      fontSize: `8.5px`,
                      letterSpacing: `.16em`,
                      color: `rgba(255,255,255,.72)`,
                      textTransform: `uppercase`,
                      whiteSpace: `nowrap`,
                      overflow: `hidden`,
                      textOverflow: `ellipsis`,
                      maxWidth: `100%`,
                    },
                    children: e.p,
                  }),
                ],
              }),
            ],
          }),
        y &&
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: `lb-fav`,
            "data-on": r ? `1` : `0`,
            "aria-pressed": !!r,
            "aria-label": r
              ? `Quitar ${e.n} de favoritos`
              : `Guardar ${e.n} en favoritos`,
            onClick: (t) => {
              (t.stopPropagation(), i?.(e));
            },
            onKeyDown: (e) => e.stopPropagation(),
            children: (0, JSXRuntime.jsx)(`svg`, {
              viewBox: `0 0 24 24`,
              width: `17`,
              height: `17`,
              "aria-hidden": `true`,
              focusable: `false`,
              children: (0, JSXRuntime.jsx)(`path`, {
                d: `M12 20.3 4.6 13a4.8 4.8 0 0 1 0-6.8 4.8 4.8 0 0 1 6.8 0l.6.6.6-.6a4.8 4.8 0 0 1 6.8 0 4.8 4.8 0 0 1 0 6.8Z`,
                fill: r ? Sc : `none`,
                stroke: r ? Sc : `#fff`,
                strokeWidth: `1.8`,
                strokeLinejoin: `round`,
              }),
            }),
          }),
      ],
    }),
  });
}
let MemoGameCard;
function initializeGameCards() {
  Js = (e) => {
    let t = {};
    for (let n of e.split(`;`)) {
      let e = n.indexOf(`:`);
      if (e < 0) continue;
      let r = n.slice(0, e).trim();
      r &&
        (t[r.replace(/-([a-z])/g, (e, t) => t.toUpperCase())] = n
          .slice(e + 1)
          .trim());
    }
    return t;
  };
  Ys = `10,16,28`;
  Xs = [Ys, Ys, Ys, Ys, Ys, Ys];
  nc = [
    {
      at: `6% 8%`,
      size: `72% 66%`,
      dur: 11,
      delay: 0,
    },
    {
      at: `50% -4%`,
      size: `92% 56%`,
      dur: 14,
      delay: -3,
    },
    {
      at: `94% 8%`,
      size: `72% 66%`,
      dur: 9,
      delay: -6,
    },
    {
      at: `6% 92%`,
      size: `72% 66%`,
      dur: 12,
      delay: -1.5,
    },
    {
      at: `50% 104%`,
      size: `92% 56%`,
      dur: 15,
      delay: -4.5,
    },
    {
      at: `94% 92%`,
      size: `72% 66%`,
      dur: 10,
      delay: -7.5,
    },
  ];
  ic = `#121212`;
  ac = `#141414`;
  oc = `#1A1A1A`;
  sc = `#1E1F21`;
  B = `#FF5500`;
  cc = `#2A0C00`;
  V = `#929292`;
  lc = `#545454`;
  uc = `#373737`;
  dc = `#242424`;
  fc = `#232323`;
  pc = `#464646`;
  mc = `0 4px 4px 0 rgba(0,0,0,0.25)`;
  hc = `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', Roboto, sans-serif`;
  gc = `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`;
  _c = gc;
  vc = `./rushybet/v2/`;
  yc = ycData;
  bc = null;
  Sc = `#ff5a00`;
  MemoGameCard = (0, React.memo)(GameCard);
}
export {
  rc,
  ic,
  ac,
  oc,
  sc,
  B,
  cc,
  V,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  MemoGameCard,
  initializeGameCards,
};
