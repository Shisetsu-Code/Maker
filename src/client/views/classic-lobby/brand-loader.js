/**
 * classic-lobby / brand-loader.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as JSXRuntime from "react/jsx-runtime";
let Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo;
function BrandLoader({
  vel: e = 0.75,
  unaVuelta: t = !1,
  marca: n = null,
  paleta: r = `naranja`,
} = {}) {
  let i = Po[r],
    a = (0, React.useId)().replace(/:/g, ``),
    o = (0, React.useRef)(null),
    s = (0, React.useRef)(null),
    c = (0, React.useRef)([]),
    l = (0, React.useRef)(null),
    u = (0, React.useRef)(null),
    d = (0, React.useRef)(null),
    f = (0, React.useRef)(null),
    p = n !== null,
    m = n
      ? (n.trazos ?? (n.aros ? n.aros.map((e, t) => Lo(e, t === 0)) : []))
      : [],
    h = n?.trazos != null,
    g = n?.grabado != null,
    _ = n?.frente ?? 0,
    v = h ? Io : Fo,
    y = (n?.ventana ?? [-4, -4, 108, 108]).join(` `);
  return (
    n &&
      (0, ReactDOM.preload)(n.src, {
        as: `image`,
        fetchPriority: `high`,
      }),
    (0, React.useEffect)(() => {
      let n = s.current,
        r = c.current.filter(Boolean),
        i = r.length / 3;
      if (!n || r.length % 3 != 0 || i > 2 || !l.current || !u.current) return;
      let a = Array.from(
        {
          length: i,
        },
        (e, t) => r[t * 3].getTotalLength(),
      );
      if (
        (r.forEach((e, t) => {
          e.style.strokeDasharray = String(a[Math.floor(t / 3)]);
        }),
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
      ) {
        (l.current.setAttribute(`offset`, `1`),
          u.current.setAttribute(`offset`, `1`),
          r.forEach((e) => {
            e.style.opacity = `0`;
          }));
        return;
      }
      let m = g
          ? {
              ...Mo,
              relleno: [0.25, 1.45],
              brillo: [0.3, 1.5],
              pulso: [1.3, 1.62],
            }
          : Mo,
        v = null,
        y = 0,
        b = (n) => {
          v === null && (v = n);
          let i = (n - v) / 1e3 / e,
            s = [
              Ro(i, Mo.bloque[0], Mo.bloque[1]),
              Ro(i, Mo.flecha[0], Mo.flecha[1]),
            ],
            c = Ro(i, m.relleno[0], m.relleno[1]);
          if (
            (r.forEach((e, t) => {
              let n = Math.floor(t / 3),
                r = t % 3;
              e.style.strokeDashoffset = String(a[n] * (1 - Bo(s[n])));
              let i = p ? (h ? Io : Fo) : No;
              e.style.opacity = String(Math.max(0, i[r].opacidad * (1 - c)));
            }),
            !l.current || !u.current)
          )
            return;
          let g = zo(c) * (1 + _);
          if (
            (l.current.setAttribute(`offset`, String(Math.min(1, g))),
            u.current.setAttribute(
              `offset`,
              String(Math.max(0, Math.min(1, g - _))),
            ),
            d.current)
          ) {
            let e = Ro(i, m.brillo[0], m.brillo[1]);
            (d.current.setAttribute(
              `transform`,
              `rotate(24 50 50) translate(${(150 * zo(e)).toFixed(2)} 0)`,
            ),
              d.current.setAttribute(
                `opacity`,
                Math.sin(Math.PI * e).toFixed(3),
              ));
          }
          if (f.current) {
            let e =
              1 + 0.055 * Math.sin(Math.PI * Ro(i, m.pulso[0], m.pulso[1]));
            f.current.setAttribute(
              `transform`,
              `translate(50 50) scale(${e.toFixed(4)}) translate(-50 -50)`,
            );
          }
          if (t) {
            if (i >= (p ? m.pulso[1] : Mo.relleno[1])) {
              (l.current.setAttribute(`offset`, `1`),
                u.current.setAttribute(`offset`, `1`),
                r.forEach((e) => {
                  e.style.opacity = `0`;
                }),
                o.current && (o.current.style.opacity = `1`),
                d.current?.setAttribute(`opacity`, `0`),
                f.current?.removeAttribute(`transform`));
              return;
            }
          } else
            (o.current &&
              (o.current.style.opacity = String(
                1 - Ro(i, Mo.salir[0], Mo.salir[1]),
              )),
              i >= Mo.fin && (v = n));
          y = requestAnimationFrame(b);
        };
      return ((y = requestAnimationFrame(b)), () => cancelAnimationFrame(y));
    }, [e, t, p, h, g, _]),
    (0, JSXRuntime.jsx)(`div`, {
      ref: o,
      role: `status`,
      "aria-label": `Abriendo el juego`,
      style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `clamp(76px, 26vw, 200px)`,
      },
      children: n
        ? (0, JSXRuntime.jsxs)(`svg`, {
            ref: s,
            viewBox: y,
            style: {
              height: `1.44em`,
              width: `auto`,
              overflow: `visible`,
              flex: `0 0 auto`,
              position: `relative`,
            },
            "aria-hidden": `true`,
            children: [
              (0, JSXRuntime.jsxs)(`defs`, {
                children: [
                  (0, JSXRuntime.jsxs)(`linearGradient`, {
                    id: `rell${a}`,
                    x1: `0`,
                    y1:
                      n.barrido === `abajo` || !n.barrido
                        ? `1`
                        : n.barrido === `diagonal`
                          ? `0.35`
                          : `0`,
                    x2: n.barrido === `abajo` || !n.barrido ? `0` : `1`,
                    y2: `0`,
                    children: [
                      (0, JSXRuntime.jsx)(`stop`, {
                        ref: l,
                        offset: `0`,
                        stopColor: `#fff`,
                      }),
                      (0, JSXRuntime.jsx)(`stop`, {
                        ref: u,
                        offset: `0`,
                        stopColor: `#fff`,
                        stopOpacity: `0`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`mask`, {
                    id: `tapa${a}`,
                    maskUnits: `userSpaceOnUse`,
                    x: `-12`,
                    y: `-12`,
                    width: `124`,
                    height: `124`,
                    children: (0, JSXRuntime.jsx)(`rect`, {
                      x: `-4`,
                      y: `-4`,
                      width: `108`,
                      height: `108`,
                      fill: `url(#rell${a})`,
                    }),
                  }),
                  (0, JSXRuntime.jsx)(`mask`, {
                    id: `metal${a}`,
                    maskUnits: `userSpaceOnUse`,
                    x: `-12`,
                    y: `-12`,
                    width: `124`,
                    height: `124`,
                    children: (0, JSXRuntime.jsx)(`image`, {
                      href: n.src,
                      x: `0`,
                      y: `0`,
                      width: `100`,
                      height: `100`,
                    }),
                  }),
                  (0, JSXRuntime.jsxs)(`linearGradient`, {
                    id: `franja${a}`,
                    x1: `0`,
                    y1: `0`,
                    x2: `1`,
                    y2: `0`,
                    children: [
                      (0, JSXRuntime.jsx)(`stop`, {
                        offset: `0`,
                        stopColor: n.brillo,
                        stopOpacity: `0`,
                      }),
                      (0, JSXRuntime.jsx)(`stop`, {
                        offset: `0.5`,
                        stopColor: n.brillo,
                        stopOpacity: `0.95`,
                      }),
                      (0, JSXRuntime.jsx)(`stop`, {
                        offset: `1`,
                        stopColor: n.brillo,
                        stopOpacity: `0`,
                      }),
                    ],
                  }),
                  Fo.map((e, t) =>
                    e.desenfoque
                      ? (0, JSXRuntime.jsx)(
                          `filter`,
                          {
                            id: `bl${t}${a}`,
                            x: `-150%`,
                            y: `-150%`,
                            width: `400%`,
                            height: `400%`,
                            children: (0, JSXRuntime.jsx)(`feGaussianBlur`, {
                              stdDeviation: e.desenfoque,
                            }),
                          },
                          t,
                        )
                      : null,
                  ),
                ],
              }),
              (0, JSXRuntime.jsxs)(`g`, {
                ref: f,
                children: [
                  n.grabado
                    ? (0, JSXRuntime.jsx)(`image`, {
                        href: n.src,
                        x: `0`,
                        y: `0`,
                        width: `100`,
                        height: `100`,
                        style: {
                          filter: n.grabado,
                        },
                      })
                    : null,
                  (0, JSXRuntime.jsxs)(`g`, {
                    mask: `url(#tapa${a})`,
                    children: [
                      (0, JSXRuntime.jsx)(`image`, {
                        href: n.src,
                        x: `0`,
                        y: `0`,
                        width: `100`,
                        height: `100`,
                      }),
                      (0, JSXRuntime.jsx)(`g`, {
                        mask: `url(#metal${a})`,
                        children: (0, JSXRuntime.jsx)(`rect`, {
                          ref: d,
                          x: `-44`,
                          y: `-30`,
                          width: `30`,
                          height: `160`,
                          fill: `url(#franja${a})`,
                          opacity: `0`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              m.map((e, t) =>
                v.map((r, i) =>
                  (0, JSXRuntime.jsx)(
                    `path`,
                    {
                      ref: (e) => {
                        c.current[t * 3 + i] = e;
                      },
                      d: e,
                      fill: `none`,
                      stroke: n.neon[i],
                      strokeWidth: r.ancho,
                      strokeLinecap: `round`,
                      filter: r.desenfoque ? `url(#bl${i}${a})` : void 0,
                      style: {
                        opacity: 0,
                      },
                    },
                    `${t}-${i}`,
                  ),
                ),
              ),
            ],
          })
        : (0, JSXRuntime.jsxs)(`svg`, {
            ref: s,
            viewBox: `-4 -4 43.873 38.442`,
            style: {
              height: `1.44em`,
              width: `auto`,
              overflow: `visible`,
              flex: `0 0 auto`,
              position: `relative`,
            },
            "aria-hidden": `true`,
            children: [
              (0, JSXRuntime.jsxs)(`defs`, {
                children: [
                  (0, JSXRuntime.jsxs)(`linearGradient`, {
                    id: `rell${a}`,
                    x1: `0`,
                    y1: `1`,
                    x2: `0`,
                    y2: `0`,
                    children: [
                      (0, JSXRuntime.jsx)(`stop`, {
                        ref: l,
                        offset: `0`,
                        stopColor: i.relleno,
                      }),
                      (0, JSXRuntime.jsx)(`stop`, {
                        ref: u,
                        offset: `0`,
                        stopColor: i.relleno,
                        stopOpacity: `0`,
                      }),
                    ],
                  }),
                  No.map((e, t) =>
                    e.desenfoque
                      ? (0, JSXRuntime.jsx)(
                          `filter`,
                          {
                            id: `bl${t}${a}`,
                            x: `-150%`,
                            y: `-150%`,
                            width: `400%`,
                            height: `400%`,
                            children: (0, JSXRuntime.jsx)(`feGaussianBlur`, {
                              stdDeviation: e.desenfoque,
                            }),
                          },
                          t,
                        )
                      : null,
                  ),
                ],
              }),
              (0, JSXRuntime.jsx)(`path`, {
                d: jo,
                fill: `url(#rell${a})`,
              }),
              (0, JSXRuntime.jsx)(`path`, {
                d: Ao,
                fill: `url(#rell${a})`,
              }),
              [jo, Ao].map((e, t) =>
                No.map((n, r) =>
                  (0, JSXRuntime.jsx)(
                    `path`,
                    {
                      ref: (e) => {
                        c.current[t * 3 + r] = e;
                      },
                      d: e,
                      fill: `none`,
                      stroke: i.neon[r],
                      strokeWidth: n.ancho,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      filter: n.desenfoque ? `url(#bl${r}${a})` : void 0,
                      style: {
                        opacity: 0,
                      },
                    },
                    `${t}-${r}`,
                  ),
                ),
              ),
            ],
          }),
    })
  );
}
function initializeBrandLoader() {
  Ao = `M 22.256 30.442 L 13.658 15.55 L 13.658 0 L 35.873 0 L 35.873 15.55 L 27.275 15.55 L 35.873 30.442 Z`;
  jo = `M 0 15.715 L 13.658 15.715 L 13.658 30.36 L 0 30.36 Z`;
  Mo = {
    bloque: [0, 0.52],
    flecha: [0.42, 1.26],
    relleno: [1.06, 1.52],
    salir: [1.98, 2.28],
    fin: 2.42,
    brillo: [1.12, 1.62],
    pulso: [1.36, 1.62],
  };
  No = [
    {
      ancho: 3.6,
      color: `#ff5a00`,
      opacidad: 0.42,
      desenfoque: 3.2,
    },
    {
      ancho: 2,
      color: `#ff7d33`,
      opacidad: 0.78,
      desenfoque: 1.3,
    },
    {
      ancho: 0.95,
      color: `#ffe2cc`,
      opacidad: 1,
      desenfoque: 0,
    },
  ];
  Po = {
    naranja: {
      neon: [No[0].color, No[1].color, No[2].color],
      relleno: `#ff5a00`,
    },
    azul: {
      neon: [`#183deb`, `#4285f4`, `#dce6ff`],
      relleno: `#ffffff`,
    },
  };
  Fo = [
    {
      ancho: 8.6,
      opacidad: 0.42,
      desenfoque: 7.7,
    },
    {
      ancho: 4.8,
      opacidad: 0.78,
      desenfoque: 3.1,
    },
    {
      ancho: 2.3,
      opacidad: 1,
      desenfoque: 0,
    },
  ];
  Io = [
    {
      ancho: 7,
      opacidad: 0.5,
      desenfoque: 6.4,
    },
    {
      ancho: 3.4,
      opacidad: 0.85,
      desenfoque: 2.6,
    },
    {
      ancho: 1.25,
      opacidad: 1,
      desenfoque: 0,
    },
  ];
  Lo = (e, t) => {
    let n = +!!t;
    return `M 50 ${50 - e} A ${e} ${e} 0 1 ${n} 50 ${50 + e} A ${e} ${e} 0 1 ${n} 50 ${50 - e}`;
  };
  Ro = (e, t, n) => Math.max(0, Math.min(1, (e - t) / (n - t)));
  zo = (e) => e * e * (3 - 2 * e);
  Bo = (e) => 1 - (1 - e) ** 3;
}
export { BrandLoader, initializeBrandLoader };
