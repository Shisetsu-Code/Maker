/**
 * classic-lobby / lobby-sections.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Declarations only; importing this module does not start the view.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { Ia } from "./game-catalog.js";
import { ic, B, lc, pc, hc, gc, vc, MemoGameCard } from "./game-cards.js";
import { Al, Pl, W } from "./desktop-lobby.js";
function CategoryDoors({ kind: e, onClick: t, marca: n = null }) {
  let r =
      e === `vivo` ? `pop-vivo` : e === `slots` ? `pop-slots` : `pop-deportes`,
    i = e === `vivo` ? `En vivo` : e === `slots` ? `Slots` : `Deportes`,
    a = n
      ? n.arte.marco
      : e === `vivo`
        ? {
            right: `calc(-3% + 6px)`,
            height: `calc(76% + 53px)`,
          }
        : e === `slots`
          ? {
              right: `-3%`,
              height: `calc(75% + 43px)`,
            }
          : {
              right: `-1%`,
              height: `calc(72% + 42px)`,
            },
    o = `.lb-promo-wrap{position:relative;min-height:120px;flex:1 1 207px;aspect-ratio:1580/830;max-height:min(262px,28vh);perspective:1500px}
    
    .lb-promo3d{position:absolute;inset:0;transition:transform .18s cubic-bezier(.2,.7,.3,1)}
    .lb-promo{position:absolute;inset:0;border:0;padding:0;border-radius:20px;overflow:hidden;
      cursor:pointer;background-color:${ic};background-repeat:no-repeat;background-position:center;
      background-size:cover;transition:transform .18s cubic-bezier(.2,.7,.3,1),box-shadow .28s ease}
    
    
    .lb-pventana{position:absolute;left:0;right:0;top:-29%;bottom:0;overflow:hidden;
      border-radius:0 0 20px 20px;pointer-events:none}
    .lb-parte{position:absolute;bottom:0;pointer-events:none;transition:transform .3s cubic-bezier(.2,.7,.3,1)}
    .lb-ptexto{position:absolute;left:7%;top:50%;transform:translateY(-50%);pointer-events:none;
      display:flex;flex-direction:column;align-items:flex-start;gap:clamp(6px,.8vw,12px);text-align:left}`,
    s = (0, React.useRef)(null),
    [c, l] = (0, React.useState)(null),
    u = (e) => {
      let t = s.current;
      if (!t) return;
      let n = t.getBoundingClientRect();
      l({
        x: (e.clientX - n.left) / n.width - 0.5,
        y: (e.clientY - n.top) / n.height - 0.5,
      });
    },
    d = c !== null,
    f = d ? -c.y * 9 : 0,
    p = d ? c.x * 8 : 0;
  return (0, JSXRuntime.jsxs)(`div`, {
    ref: s,
    className: `lb-promo-wrap`,
    onMouseMove: u,
    onMouseLeave: () => l(null),
    style: {
      perspective: `1500px`,
      zIndex: d ? 2 : void 0,
    },
    children: [
      (0, JSXRuntime.jsx)(`style`, {
        children: Al(o),
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lb-promo3d`,
        style: {
          transform: d
            ? `rotateX(${f}deg) rotateY(${p}deg) scale(1.012) translateY(-6px)`
            : `rotateX(0deg) rotateY(0deg) scale(1) translateY(0)`,
        },
        children: [
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            onClick: t,
            "aria-label": `${i} — jugar`,
            className: `lb-promo`,
            style: {
              backgroundImage: n ? n.base : Ia(`./rushybet/v2/base-carta.webp`),
              boxShadow: d
                ? `inset 0 1px 0 rgba(255,255,255,.13), ${-p * 0.9}px ${10 - f * 0.8}px 18px rgba(0,0,0,.55), ${-p * 2.6}px ${34 - f * 2.2}px 64px rgba(0,0,0,.68)`
                : `inset 0 1px 0 rgba(255,255,255,.07), 0 2px 5px rgba(0,0,0,.35), 0 12px 26px rgba(0,0,0,.38)`,
            },
            children: (0, JSXRuntime.jsxs)(`span`, {
              className: `lb-ptexto`,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontFamily: `var(--font-oswald), sans-serif`,
                    fontWeight: 700,
                    fontSize: `clamp(22px,2.3vw,36px)`,
                    letterSpacing: `.02em`,
                    lineHeight: `100%`,
                    color: `#fff`,
                    textTransform: `uppercase`,
                    textShadow: `0 2px 16px rgba(0,0,0,.6)`,
                  },
                  children: i,
                }),
                (0, JSXRuntime.jsx)(`span`, {
                  style: {
                    fontFamily: `var(--font-oswald), sans-serif`,
                    fontWeight: 600,
                    fontSize: `clamp(13px,1.2vw,18px)`,
                    letterSpacing: `.08em`,
                    color: n ? n.acento : B,
                    textTransform: `uppercase`,
                  },
                  children: `Jugar ›`,
                }),
              ],
            }),
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `lb-pventana`,
            children: (0, JSXRuntime.jsx)(`img`, {
              src: n ? n.arte.src : `${vc}${r}.webp`,
              alt: ``,
              "aria-hidden": `true`,
              decoding: `async`,
              draggable: !1,
              className: `lb-parte`,
              style: {
                ...a,
                width: `auto`,
                transform: d
                  ? `scale(1.035) translateY(-4px)`
                  : `scale(1) translateY(0)`,
                transformOrigin: `center bottom`,
              },
            }),
          }),
        ],
      }),
    ],
  });
}
function LazyVisible({ children: e, eager: t = !1 }) {
  let n = (0, React.useRef)(null),
    [r, i] = (0, React.useState)(t);
  return (
    (0, React.useEffect)(() => {
      if (r) return;
      let e = n.current;
      if (!e) return;
      if (typeof IntersectionObserver > `u`) {
        let e = setTimeout(() => i(!0), 0);
        return () => clearTimeout(e);
      }
      let t = new IntersectionObserver(
        (e) => {
          e.some((e) => e.isIntersecting) && i(!0);
        },
        {
          rootMargin: `700px 0px`,
        },
      );
      return (t.observe(e), () => t.disconnect());
    }, [r]),
    (0, JSXRuntime.jsx)(`div`, {
      ref: n,
      className: r ? void 0 : `lb-hold`,
      children: r ? e : null,
    })
  );
}
function LoadMoreSentinel({ onMore: e, hasta: t }) {
  let n = (0, React.useRef)(null),
    [r, i] = (0, React.useState)(!1),
    a = (0, React.useRef)(e);
  return (
    (0, React.useEffect)(() => {
      a.current = e;
    }, [e]),
    (0, React.useEffect)(() => {
      let e = n.current;
      if (!e) return;
      let t = () => e.getBoundingClientRect().top - window.innerHeight < 900,
        r = 0,
        o = () => {
          let e = Date.now();
          e - r < 150 || ((r = e), t() && a.current());
        };
      (window.addEventListener(`scroll`, o, {
        passive: !0,
      }),
        window.addEventListener(`resize`, o, {
          passive: !0,
        }));
      let s = setInterval(() => {
          t() && a.current();
        }, 1500),
        c = null;
      return (
        typeof IntersectionObserver > `u`
          ? setTimeout(() => i(!0), 1200)
          : ((c = new IntersectionObserver(
              (e) => {
                e.some((e) => e.isIntersecting) && a.current();
              },
              {
                rootMargin: `900px 0px`,
              },
            )),
            c.observe(e)),
        () => {
          (window.removeEventListener(`scroll`, o),
            window.removeEventListener(`resize`, o),
            clearInterval(s),
            c?.disconnect());
        }
      );
    }, []),
    (0, JSXRuntime.jsxs)(`div`, {
      ref: n,
      style: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        gap: `8px`,
        marginTop: `clamp(22px,2.4vw,38px)`,
        minHeight: `44px`,
      },
      children: [
        r &&
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            onClick: e,
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `10px`,
              background: `transparent`,
              border: 0,
              cursor: `pointer`,
              fontFamily: `var(--font-oswald), 'Oswald', 'Segoe UI', sans-serif`,
              fontWeight: 600,
              fontSize: `22px`,
              lineHeight: `100%`,
              color: `#929292`,
              minHeight: `44px`,
            },
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                children: `Ver más`,
              }),
              (0, JSXRuntime.jsx)(`span`, {
                style: {
                  display: `inline-flex`,
                  transform: `rotate(90deg)`,
                },
                children: (0, JSXRuntime.jsx)(W, {
                  size: 9,
                  color: `currentColor`,
                }),
              }),
            ],
          }),
        (0, JSXRuntime.jsx)(`span`, {
          "aria-live": `polite`,
          style: {
            fontFamily: hc,
            fontSize: `12px`,
            color: lc,
          },
          children: t,
        }),
      ],
    })
  );
}
function HorizontalGameList({
  games: e,
  onPlay: t,
  trackKey: n,
  isFav: r,
  onFav: i,
  acento: a = B,
}) {
  let o = (0, React.useRef)(null),
    [s, c] = (0, React.useState)(1),
    [l, u] = (0, React.useState)(0),
    d = () => {
      let e = o.current;
      if (!e || e.clientWidth === 0) return;
      let t = Math.min(
        10,
        Math.max(1, Math.ceil(e.scrollWidth / e.clientWidth)),
      );
      (c(t), u(Math.min(t - 1, Math.round(e.scrollLeft / e.clientWidth))));
    };
  (0, React.useEffect)(() => {
    d();
    let e = o.current;
    if (!e) return;
    let t = new ResizeObserver(d);
    return (t.observe(e), () => t.disconnect());
  }, [e.length]);
  let f = (e) => {
      let t = o.current;
      t &&
        t.scrollTo({
          left: e * t.clientWidth,
          behavior: `smooth`,
        });
    },
    p = (e) => {
      let t = o.current;
      t &&
        t.scrollBy({
          left: e * t.clientWidth * 0.8,
          behavior: `smooth`,
        });
    };
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        ref: o,
        className: `lb-track`,
        onScroll: d,
        children: e.map((e) =>
          (0, JSXRuntime.jsx)(
            MemoGameCard,
            {
              game: e,
              onOpen: t,
              fav: r?.(e),
              onFav: i,
            },
            `${n}-${e.idx}`,
          ),
        ),
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lb-ctrl`,
        children: [
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            "aria-label": `Anterior`,
            onClick: () => p(-1),
            disabled: l === 0,
            style: {
              width: 44,
              height: 32,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              background: `transparent`,
              border: 0,
              cursor: l === 0 ? `default` : `pointer`,
              opacity: l === 0 ? 0.3 : 1,
            },
            children: (0, JSXRuntime.jsx)(W, {
              flip: !0,
              color: a,
            }),
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `7px`,
            },
            children: Array.from(
              {
                length: s,
              },
              (e, t) =>
                (0, JSXRuntime.jsx)(
                  `button`,
                  {
                    type: `button`,
                    className: `lb-dot`,
                    "aria-label": `Ir al grupo ${t + 1}`,
                    onClick: () => f(t),
                    children: (0, JSXRuntime.jsx)(`i`, {
                      style: {
                        background: t === l ? a : pc,
                        transform: t === l ? `scale(1.35)` : `none`,
                      },
                    }),
                  },
                  t,
                ),
            ),
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            "aria-label": `Siguiente`,
            onClick: () => p(1),
            disabled: l >= s - 1,
            style: {
              width: 44,
              height: 32,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              background: `transparent`,
              border: 0,
              cursor: l >= s - 1 ? `default` : `pointer`,
              opacity: l >= s - 1 ? 0.3 : 1,
            },
            children: (0, JSXRuntime.jsx)(W, {
              color: a,
            }),
          }),
        ],
      }),
    ],
  });
}
function PromoCard({ onOpen: e, acento: t = B, naranja: n }) {
  let r = (0, React.useRef)(null),
    [i, a] = (0, React.useState)(1),
    [o, s] = (0, React.useState)(0),
    c = () => {
      let e = r.current;
      if (!e || e.clientWidth === 0) return;
      let t = Math.max(1, Math.ceil(e.scrollWidth / e.clientWidth));
      (a(t), s(Math.min(t - 1, Math.round(e.scrollLeft / e.clientWidth))));
    };
  (0, React.useEffect)(() => {
    c();
    let e = r.current;
    if (!e) return;
    let t = new ResizeObserver(c);
    return (t.observe(e), () => t.disconnect());
  }, []);
  let l = (e) => {
    let t = r.current;
    t &&
      t.scrollBy({
        left: e * t.clientWidth * 0.8,
        behavior: `smooth`,
      });
  };
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        ref: r,
        className: `lb-track`,
        onScroll: c,
        children: Pl.map((t) =>
          (0, JSXRuntime.jsx)(
            SportsCard,
            {
              s: t,
              small: !0,
              onOpen: e,
              naranja: n,
            },
            t.id,
          ),
        ),
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `lb-ctrl`,
        children: [
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            "aria-label": `Anterior`,
            onClick: () => l(-1),
            disabled: o === 0,
            style: {
              width: 44,
              height: 32,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              background: `transparent`,
              border: 0,
              cursor: o === 0 ? `default` : `pointer`,
              opacity: o === 0 ? 0.3 : 1,
            },
            children: (0, JSXRuntime.jsx)(W, {
              flip: !0,
              color: t,
            }),
          }),
          (0, JSXRuntime.jsx)(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: `7px`,
            },
            children: Array.from(
              {
                length: i,
              },
              (e, n) =>
                (0, JSXRuntime.jsx)(
                  `button`,
                  {
                    type: `button`,
                    "aria-label": `Ir al grupo ${n + 1}`,
                    onClick: () =>
                      r.current?.scrollTo({
                        left: n * r.current.clientWidth,
                        behavior: `smooth`,
                      }),
                    style: {
                      width: 6,
                      height: 6,
                      padding: 0,
                      border: 0,
                      borderRadius: `50%`,
                      background: n === o ? t : pc,
                      cursor: `pointer`,
                      transition: `background .2s ease, transform .2s ease`,
                      transform: n === o ? `scale(1.35)` : `none`,
                    },
                  },
                  n,
                ),
            ),
          }),
          (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            "aria-label": `Siguiente`,
            onClick: () => l(1),
            disabled: o >= i - 1,
            style: {
              width: 44,
              height: 32,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              background: `transparent`,
              border: 0,
              cursor: o >= i - 1 ? `default` : `pointer`,
              opacity: o >= i - 1 ? 0.3 : 1,
            },
            children: (0, JSXRuntime.jsx)(W, {
              color: t,
            }),
          }),
        ],
      }),
    ],
  });
}
function AnimatedCents({ cents: e, final: t, run: n, small: r = !1 }) {
  let [i, a] = (0, React.useState)(null);
  return (
    (0, React.useEffect)(() => {
      if (!n) return;
      let t = 0,
        r = 0,
        i = new Intl.NumberFormat(`es-AR`, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        o = (n) => {
          r ||= n;
          let s = Math.min(1, (n - r) / 900);
          if (s >= 1) {
            a(null);
            return;
          }
          let c = 1 - (1 - s) ** 3;
          (a(i.format((e * c) / 100)), (t = requestAnimationFrame(o)));
        };
      return ((t = requestAnimationFrame(o)), () => cancelAnimationFrame(t));
    }, [n, e]),
    (0, JSXRuntime.jsx)(`span`, {
      style: {
        display: `inline-flex`,
        alignItems: `baseline`,
        gap: r ? `3px` : `5px`,
        fontFamily: gc,
        fontWeight: 700,
        fontSize: r ? `16px` : `21px`,
        color: `#fff`,
        fontVariantNumeric: `tabular-nums`,
        letterSpacing: `.01em`,
      },
      children:
        n && i !== null
          ? (0, JSXRuntime.jsx)(`span`, {
              style: {
                opacity: 0.92,
              },
              children: i,
            })
          : t,
    })
  );
}
function ValueLabel({ value: e, label: t, small: n = !1, escalones: r }) {
  if (!t)
    return (0, JSXRuntime.jsx)(`span`, {
      style: {
        color: lc,
      },
      children: `—`,
    });
  let i = e >= 10 ? 2 : +(e >= 3),
    a = (r ?? [
      {
        bg: `rgba(255,255,255,.07)`,
        ring: `rgba(255,255,255,.14)`,
        fg: `#929292`,
        glow: `none`,
      },
      {
        bg: `rgba(255,85,0,.16)`,
        ring: `rgba(255,85,0,.45)`,
        fg: `#FF8A3D`,
        glow: `none`,
      },
      {
        bg: `linear-gradient(180deg,rgba(255,190,60,.28),rgba(255,120,0,.20))`,
        ring: `rgba(255,200,90,.6)`,
        fg: `#FFD27A`,
        glow: `0 0 18px rgba(255,170,40,.35)`,
      },
    ])[i];
  return (0, JSXRuntime.jsx)(`span`, {
    className: i === 2 ? `lb-mult-hot` : void 0,
    style: {
      display: `inline-flex`,
      alignItems: `center`,
      justifyContent: `center`,
      minWidth: n ? `46px` : `62px`,
      height: n ? `19px` : `26px`,
      padding: n ? `0 7px` : `0 10px`,
      borderRadius: `100px`,
      background: a.bg,
      boxShadow: `inset 0 0 0 1px ${a.ring}, ${a.glow}`,
      fontFamily: gc,
      fontWeight: 700,
      fontSize: n ? `11px` : `14px`,
      letterSpacing: `.04em`,
      color: a.fg,
      fontVariantNumeric: `tabular-nums`,
    },
    children: t,
  });
}
function SportsCard({ s: e, small: t = !1, onOpen: n, naranja: r }) {
  let i = r && e.c === `rgb(255,85,0)` ? r : e.c;
  return (0, JSXRuntime.jsx)(`div`, {
    role: n ? `button` : void 0,
    tabIndex: n ? 0 : void 0,
    "aria-label": n ? `Apuestas de ${e.label}` : void 0,
    onClick: n,
    onKeyDown: (e) => {
      n && (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), n());
    },
    className: n ? `lb-sport` : void 0,
    style: {
      position: `relative`,
      borderRadius: `10px`,
      aspectRatio: `3 / 4`,
      ...(t
        ? {
            flex: `0 0 132px`,
          }
        : {}),
      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${i} 100%), url(${vc}${e.img}.webp) ${e.fit} no-repeat`,
      cursor: n ? `pointer` : `default`,
    },
    children: (0, JSXRuntime.jsx)(`div`, {
      style: {
        position: `absolute`,
        left: `4%`,
        right: `4%`,
        top: `73.9%`,
        textAlign: `center`,
        fontFamily: `var(--font-oswald), 'Oswald', sans-serif`,
        fontWeight: 700,
        fontSize: t ? `17px` : `clamp(16px,1.5vw,26px)`,
        lineHeight: `100%`,
        color: `#fff`,
        textTransform: `uppercase`,
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        textOverflow: `ellipsis`,
      },
      children: e.label,
    }),
  });
}
export {
  CategoryDoors,
  LazyVisible,
  LoadMoreSentinel,
  HorizontalGameList,
  PromoCard,
  AnimatedCents,
  ValueLabel,
  SportsCard,
};
