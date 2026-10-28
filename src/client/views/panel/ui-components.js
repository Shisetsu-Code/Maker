/**
 * panel / ui-components.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import * as ReactDOM from "react-dom";
import { Uh, Kh, Yh, Xh, Zh, Qh, eg } from "./motion.js";
var ng;
function classNames(...e) {
  return e.filter(Boolean).join(` `);
}
function rg(e) {
  return e === void 0 ? `entra` : `entra e${Math.min(12, e)}`;
}
let ig;
function ag(e) {
  return e ? (ig[e] ?? e) : `var(--tx)`;
}
function og(e) {
  return {
    "--c": ag(e),
  };
}
let sg;
function Icon({ nombre: e, d: t, tam: n = 18, trazo: r = 1.8, clase: i }) {
  return (0, JSXRuntime.jsx)(`svg`, {
    className: classNames(`ic`, i),
    width: n,
    height: n,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: r,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": `true`,
    children: (0, JSXRuntime.jsx)(`path`, {
      d: t ?? (e ? sg[e] : ``),
    }),
  });
}
function cg({ w: e = 26, h: t = 22, color: n = `currentColor` }) {
  return (0, JSXRuntime.jsxs)(`svg`, {
    className: `isotipo`,
    width: e,
    height: t,
    viewBox: `0 0 35.873 30.442`,
    "aria-hidden": `true`,
    children: [
      (0, JSXRuntime.jsx)(`path`, {
        d: `M 8.598 30.442 L 0 15.55 L 0 0 L 22.215 0 L 22.215 13.411 L 22.215 15.55 L 20.24 15.55 L 13.617 15.55 L 22.215 30.442 L 8.598 30.442 Z`,
        transform: `translate(13.658 0)`,
        style: {
          fill: n,
        },
      }),
      (0, JSXRuntime.jsx)(`rect`, {
        x: `0`,
        y: `15.715`,
        width: `13.658`,
        height: `14.645`,
        style: {
          fill: n,
        },
      }),
    ],
  });
}
let lg, ug;
function Portal({ children: e }) {
  let t = (0, React.useContext)(lg);
  return t ? (0, ng.createPortal)(e, t) : null;
}
let fg, pg;
function useBodyScrollLock(e) {
  (0, React.useEffect)(() => {
    if (
      e &&
      !(typeof window > `u` || typeof window.matchMedia != `function`) &&
      !window.matchMedia(`(min-width: 900px)`).matches
    ) {
      if (fg === 0) {
        let e = window.scrollY;
        ((pg = {
          y: e,
          position: document.body.style.position,
          top: document.body.style.top,
          width: document.body.style.width,
        }),
          (document.body.style.position = `fixed`),
          (document.body.style.top = `-${e}px`),
          (document.body.style.width = `100%`));
      }
      return (
        (fg += 1),
        () => {
          if ((--fg, fg > 0 || !pg)) return;
          let e = pg;
          ((pg = null),
            (document.body.style.position = e.position),
            (document.body.style.top = e.top),
            (document.body.style.width = e.width),
            window.scrollTo({
              top: e.y,
              behavior: `instant`,
            }));
        }
      );
    }
  }, [e]);
}
function useEscapeKey(e, t = !0) {
  (0, React.useEffect)(() => {
    if (!t || !e) return;
    let n = (t) => {
      t.key === `Escape` && e();
    };
    return (
      document.addEventListener(`keydown`, n),
      () => document.removeEventListener(`keydown`, n)
    );
  }, [e, t]);
}
function Card({
  pad: e = `normal`,
  clase: t,
  i: n,
  as: r = `section`,
  children: i,
  ref: a,
  ...o
}) {
  let s = classNames(
    `tarjeta`,
    e === `chico` && `pad-chico`,
    e === `no` && `pad-no`,
    t,
    rg(n),
  );
  return r === `div`
    ? (0, JSXRuntime.jsx)(`div`, {
        ref: a,
        className: s,
        ...o,
        children: i,
      })
    : (0, JSXRuntime.jsx)(`section`, {
        ref: a,
        className: s,
        ...o,
        children: i,
      });
}
function _g({ texto: e, derecha: t }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `rotulo-fila`,
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        className: `rotulo`,
        children: e,
      }),
      t
        ? (0, JSXRuntime.jsx)(`span`, {
            className: `rotulo-der`,
            children: t,
          })
        : null,
    ],
  });
}
let vg;
function yg(e) {
  let t = vg.exec(e);
  return t ? [t[1] ?? ``, t[2] ?? null] : [e, null];
}
function bg({ texto: e }) {
  let t = (0, React.useRef)(null),
    n = (0, React.useRef)(null);
  eg(e, t, n, !0);
  let [r, i] = yg(e);
  return (0, JSXRuntime.jsxs)(`span`, {
    className: `plata`,
    ref: t,
    children: [
      (0, JSXRuntime.jsxs)(`span`, {
        className: `plata-txt`,
        children: [
          r,
          i === null
            ? null
            : (0, JSXRuntime.jsx)(`small`, {
                children: i,
              }),
        ],
      }),
      (0, JSXRuntime.jsx)(`span`, {
        className: `plata-anim`,
        "aria-hidden": `true`,
        ref: n,
      }),
    ],
  });
}
function xg({ texto: e, contar: t = !1 }) {
  let n = String(e ?? ``);
  if (t)
    return (0, JSXRuntime.jsx)(bg, {
      texto: n,
    });
  let [r, i] = yg(n);
  return (0, JSXRuntime.jsxs)(`span`, {
    className: `plata`,
    children: [
      r,
      i === null
        ? null
        : (0, JSXRuntime.jsx)(`small`, {
            children: i,
          }),
    ],
  });
}
function Sg(e) {
  let t = classNames(`numero`, e.destacado && `destacado`, e.clase, rg(e.i)),
    n = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsxs)(`div`, {
          className: `numero-cab`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `numero-rot`,
              children: e.rot,
            }),
            e.icono
              ? (0, JSXRuntime.jsx)(`span`, {
                  className: `numero-ic`,
                  children: (0, JSXRuntime.jsx)(Icon, {
                    nombre: e.icono,
                    tam: 15,
                    trazo: 2,
                  }),
                })
              : null,
          ],
        }),
        (0, JSXRuntime.jsx)(`div`, {
          className: `numero-valor`,
          children: (0, JSXRuntime.jsx)(xg, {
            texto: e.valor,
            contar: e.contar,
          }),
        }),
        e.sub
          ? (0, JSXRuntime.jsx)(`div`, {
              className: `numero-sub`,
              children: e.sub,
            })
          : null,
      ],
    });
  return e.onClick
    ? (0, JSXRuntime.jsx)(`button`, {
        type: `button`,
        className: t,
        style: og(e.color),
        onClick: e.onClick,
        title: e.titulo,
        disabled: e.deshabilitado,
        children: n,
      })
    : (0, JSXRuntime.jsx)(`div`, {
        className: t,
        style: og(e.color),
        title: e.titulo,
        children: n,
      });
}
function Cg({ items: e, i: t = 0, clase: n }) {
  let r = e.length % 2 == 1;
  return (0, JSXRuntime.jsx)(`div`, {
    className: classNames(`numeros`, r && `impar`, n),
    children: e.map((n, i) =>
      (0, JSXRuntime.jsx)(
        Sg,
        {
          i: t + i,
          ...n,
          destacado: n.destacado ?? (r && i === e.length - 1),
        },
        n.clave ?? i,
      ),
    ),
  });
}
function Button({
  tono: e = `secundario`,
  ancho: t,
  chico: n,
  deshabilitado: r,
  pendiente: i,
  icono: a,
  clase: o,
  titulo: s,
  derecha: c,
  children: l,
  type: u = `button`,
  ...d
}) {
  return (0, JSXRuntime.jsxs)(`button`, {
    ...d,
    type: u,
    className: classNames(`btn`, `btn-${e}`, t && `ancho`, n && `chico`, o),
    disabled: r || i,
    "aria-busy": i || void 0,
    title: s,
    children: [
      a
        ? (0, JSXRuntime.jsx)(Icon, {
            nombre: a,
            tam: n ? 14 : 16,
            trazo: 2,
          })
        : null,
      (0, JSXRuntime.jsx)(`span`, {
        children: l,
      }),
      c,
    ],
  });
}
function wg({ dosFilas: e, clase: t, children: n }) {
  return (0, JSXRuntime.jsx)(`div`, {
    className: classNames(`botones`, e && `dos-filas`, t),
    children: n,
  });
}
function Tg({ tono: e = `gris`, children: t }) {
  return (0, JSXRuntime.jsx)(`span`, {
    className: classNames(`pastilla`, `p-${e}`),
    children: t,
  });
}
function Eg({ n: e, chico: t }) {
  let n = (0, React.useRef)(null);
  return (
    Qh(n, e),
    e > 0
      ? (0, JSXRuntime.jsx)(`span`, {
          ref: n,
          className: classNames(`badge`, t && `chico`),
          children: e,
        })
      : null
  );
}
function Dg({
  opciones: e,
  activo: t,
  onElegir: n,
  clase: r,
  deshabilitado: i,
  etiqueta: a,
}) {
  let o = (0, React.useRef)(null);
  return (
    Uh(
      o,
      e.findIndex(([e]) => e === t),
    ),
    (0, JSXRuntime.jsx)(`div`, {
      ref: o,
      className: classNames(`chips`, r),
      role: `group`,
      "aria-label": a,
      children: e.map(([e, r]) =>
        (0, JSXRuntime.jsx)(
          `button`,
          {
            type: `button`,
            className: classNames(`chip`, e === t && `on`),
            "aria-pressed": e === t,
            disabled: i,
            onClick: () => n(e),
            children: (0, JSXRuntime.jsx)(`span`, {
              children: r,
            }),
          },
          e,
        ),
      ),
    })
  );
}
function Og({
  opciones: e,
  activa: t,
  onElegir: n,
  clase: r,
  etiqueta: i,
  deshabilitado: a,
}) {
  let o = (0, React.useRef)(null);
  return (
    Uh(
      o,
      e.findIndex(([e]) => e === t),
      {
        deslizarHermanos: !0,
      },
    ),
    (0, JSXRuntime.jsx)(`div`, {
      ref: o,
      className: classNames(`solapas`, r),
      role: `tablist`,
      "aria-label": i,
      children: e.map(([e, r]) =>
        (0, JSXRuntime.jsx)(
          `button`,
          {
            type: `button`,
            role: `tab`,
            className: classNames(`solapa`, e === t && `on`),
            "aria-selected": e === t,
            disabled: a,
            onClick: () => n(e),
            children: (0, JSXRuntime.jsx)(`span`, {
              children: r,
            }),
          },
          e,
        ),
      ),
    })
  );
}
function kg({
  opciones: e,
  activo: t,
  onElegir: n,
  deshabilitado: r,
  clase: i,
  etiqueta: a,
}) {
  let o = (0, React.useRef)(null);
  return (
    Uh(
      o,
      e.findIndex(([e]) => e === t),
    ),
    (0, JSXRuntime.jsx)(`div`, {
      ref: o,
      className: classNames(`segmentado`, i),
      role: `radiogroup`,
      "aria-label": a,
      style: {
        gridTemplateColumns: `repeat(${e.length},minmax(0,1fr))`,
      },
      children: e.map(([e, i, a]) => {
        let o = e === t;
        return (0, JSXRuntime.jsx)(
          `button`,
          {
            type: `button`,
            role: `radio`,
            "aria-checked": o,
            className: classNames(`seg`, o && `on`),
            disabled: o || r,
            onClick: () => n(e),
            style:
              o && a
                ? {
                    "--c": a,
                  }
                : void 0,
            children: (0, JSXRuntime.jsx)(`span`, {
              children: i,
            }),
          },
          e,
        );
      }),
    })
  );
}
function Ag({ on: e, onCambiar: t, deshabilitado: n, label: r }) {
  let i = (0, React.useRef)(null);
  return (
    Xh(i, e, `switch`),
    (0, JSXRuntime.jsx)(`button`, {
      ref: i,
      type: `button`,
      role: `switch`,
      "aria-checked": e,
      className: classNames(`switch`, e && `on`),
      disabled: n,
      "aria-label": r,
      onClick: t,
      children: (0, JSXRuntime.jsx)(`span`, {
        className: `switch-pista`,
        children: (0, JSXRuntime.jsx)(`span`, {
          className: `switch-perilla`,
        }),
      }),
    })
  );
}
function jg({ marcada: e, onCambiar: t, deshabilitado: n, label: r }) {
  let i = (0, React.useRef)(null);
  return (
    Xh(i, e, `casilla`),
    Zh(i, e),
    (0, JSXRuntime.jsx)(`button`, {
      ref: i,
      type: `button`,
      role: `checkbox`,
      "aria-checked": e,
      className: classNames(`casilla`, e && `on`),
      disabled: n,
      "aria-label": r,
      onClick: t,
      children: e
        ? (0, JSXRuntime.jsx)(Icon, {
            nombre: `tilde`,
            tam: 14,
            trazo: 3,
          })
        : null,
    })
  );
}
function Mg({
  id: e,
  placeholder: t,
  valor: n,
  onCambiar: r,
  contador: i,
  etiqueta: a,
  clase: o,
}) {
  return (0, JSXRuntime.jsxs)(`label`, {
    className: classNames(`buscador`, o),
    children: [
      (0, JSXRuntime.jsx)(Icon, {
        nombre: `lupa`,
        tam: 16,
      }),
      (0, JSXRuntime.jsx)(`input`, {
        id: e,
        type: `search`,
        placeholder: t,
        value: n,
        onChange: (e) => r(e.target.value),
        autoComplete: `off`,
        "aria-label": a ?? t,
      }),
      i != null && i !== ``
        ? (0, JSXRuntime.jsx)(`span`, {
            className: `buscador-n`,
            children: i,
          })
        : null,
    ],
  });
}
function Ng({ inputRef: e, ...t }) {
  return (0, JSXRuntime.jsxs)(`label`, {
    className: classNames(`campo`, t.error && `error`, t.clase),
    children: [
      t.prefijo
        ? (0, JSXRuntime.jsx)(`span`, {
            className: `campo-pre`,
            children: t.prefijo,
          })
        : null,
      (0, JSXRuntime.jsx)(`input`, {
        ref: e,
        id: t.id,
        name: t.name,
        className: t.grande ? `grande` : void 0,
        type: t.tipo ?? `text`,
        inputMode: t.modo,
        placeholder: t.placeholder ?? ``,
        value: t.valor,
        onChange: (e) => t.onCambiar(e.target.value),
        onKeyDown: t.onEnter
          ? (e) => {
              e.key === `Enter` && (e.preventDefault(), t.onEnter?.());
            }
          : void 0,
        onBlur: t.onBlur,
        onFocus: t.onFocus,
        maxLength: t.max,
        autoComplete: t.autoComplete ?? `off`,
        disabled: t.deshabilitado,
        readOnly: t.soloLectura,
        "aria-label": t.etiqueta,
        "aria-invalid": t.error || void 0,
        autoFocus: t.enfocar,
      }),
      t.sufijo,
    ],
  });
}
function Pg({
  id: e,
  opciones: t,
  valor: n,
  onCambiar: r,
  clase: i,
  deshabilitado: a,
  etiqueta: o,
}) {
  return (0, JSXRuntime.jsxs)(`label`, {
    className: classNames(`campo`, `selector`, i),
    children: [
      (0, JSXRuntime.jsx)(`select`, {
        id: e,
        value: n,
        onChange: (e) => r(e.target.value),
        disabled: a,
        "aria-label": o,
        children: t.map(([e, t]) =>
          (0, JSXRuntime.jsx)(
            `option`,
            {
              value: e,
              children: t,
            },
            e,
          ),
        ),
      }),
      (0, JSXRuntime.jsx)(Icon, {
        nombre: `chevron`,
        tam: 14,
        trazo: 2,
      }),
    ],
  });
}
function Fg({
  clave: e,
  opciones: t,
  valor: n,
  onElegir: r,
  buscarQue: i,
  vacio: a,
  etiqueta: o,
  sinContar: s,
  enfocar: c = !0,
  onEscape: l,
  id: u,
}) {
  let [d, f] = (0, React.useState)(``),
    p = (0, React.useRef)(null),
    m = d.trim().toLowerCase(),
    h = m ? t.filter((e) => e.label.toLowerCase().includes(m)) : t,
    g = (e) => (s === void 0 ? e.length : e.filter((e) => e.id !== s).length);
  return (
    (0, React.useEffect)(() => {
      if (!c) return;
      let e = requestAnimationFrame(() => {
        window.matchMedia(`(hover: hover)`).matches &&
          p.current?.querySelector(`input`)?.focus();
      });
      return () => cancelAnimationFrame(e);
    }, [c]),
    (0, JSXRuntime.jsxs)(`div`, {
      className: `eq-sel-caja`,
      id: u,
      ref: p,
      onKeyDown: (e) => {
        e.key === `Escape` && l?.();
        let t = h.length === 1 ? h[0] : void 0;
        e.key === `Enter` && t && (e.preventDefault(), r(t.id));
      },
      children: [
        (0, JSXRuntime.jsx)(Mg, {
          id: `eq-sel-q-${e}`,
          placeholder: i,
          valor: d,
          onCambiar: f,
          contador: `${g(h)} de ${g(t)}`,
        }),
        (0, JSXRuntime.jsx)(`div`, {
          className: `eq-sel-lista`,
          role: `listbox`,
          "aria-label": o,
          children:
            h.length === 0
              ? (0, JSXRuntime.jsx)(`div`, {
                  className: `eq-sel-vacio`,
                  children: a,
                })
              : h.map((e, t) => {
                  let i = e.id === n,
                    a =
                      e.grupo !== void 0 &&
                      (t === 0 || h[t - 1]?.grupo !== e.grupo)
                        ? e.grupo
                        : null;
                  return (0, JSXRuntime.jsxs)(
                    React.Fragment,
                    {
                      children: [
                        a
                          ? (0, JSXRuntime.jsx)(`div`, {
                              className: `eq-sel-grupo`,
                              role: `presentation`,
                              children: a,
                            })
                          : null,
                        (0, JSXRuntime.jsxs)(`button`, {
                          type: `button`,
                          role: `option`,
                          "aria-selected": i,
                          className: classNames(`eq-sel-op`, i && `on`),
                          onClick: () => r(e.id),
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              children: e.label,
                            }),
                            e.sub
                              ? (0, JSXRuntime.jsx)(`small`, {
                                  className: `eq-sel-sub`,
                                  children: e.sub,
                                })
                              : null,
                            i
                              ? (0, JSXRuntime.jsx)(Icon, {
                                  nombre: `tilde`,
                                  tam: 16,
                                  trazo: 2.4,
                                })
                              : null,
                          ],
                        }),
                      ],
                    },
                    e.id || `propio`,
                  );
                }),
        }),
      ],
    })
  );
}
function Ig({
  clave: e,
  opciones: t,
  valor: n,
  onElegir: r,
  buscarQue: i,
  sinContar: a,
  pastillasHasta: o = 6,
  cuantos: s,
  vacio: c,
  etiqueta: l,
}) {
  let [u, d] = (0, React.useState)(!1),
    f = (0, React.useId)();
  if (t.length <= o)
    return (0, JSXRuntime.jsx)(Dg, {
      opciones: t.map((e) => [e.id, e.label]),
      activo: n,
      onElegir: r,
      clase: `eq-pastillas`,
      etiqueta: l,
    });
  let p = t.find((e) => e.id === n) ?? t[0],
    m = a === void 0 ? t.length : t.filter((e) => e.id !== a).length;
  function h(e) {
    (r(e), d(!1));
  }
  return (0, JSXRuntime.jsxs)(`div`, {
    className: classNames(`eq-sel`, u && `abierto`),
    children: [
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        className: `campo eq-sel-btn`,
        onClick: () => d((e) => !e),
        "aria-expanded": u,
        "aria-controls": f,
        "aria-haspopup": `listbox`,
        children: [
          (0, JSXRuntime.jsxs)(`span`, {
            className: `eq-sel-txt`,
            children: [
              (0, JSXRuntime.jsx)(`b`, {
                children: p?.label,
              }),
              (0, JSXRuntime.jsx)(`small`, {
                children: u
                  ? `Elegí uno de la lista`
                  : `Tocá para cambiar · ${m} ${s}`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `eq-sel-chev`,
            children: (0, JSXRuntime.jsx)(Icon, {
              nombre: `chevron`,
              tam: 16,
              trazo: 2,
            }),
          }),
        ],
      }),
      u
        ? (0, JSXRuntime.jsx)(Fg, {
            id: f,
            clave: e,
            opciones: t,
            valor: n,
            onElegir: h,
            buscarQue: i,
            vacio: c,
            etiqueta: l,
            sinContar: a,
            onEscape: () => d(!1),
          })
        : null,
    ],
  });
}
function Notice({ aviso: e, clave: t, clase: n }) {
  let r = (0, React.useRef)(null);
  return (
    Kh(
      r,
      e
        ? `${+!!e.ok}|${t ?? (typeof e.texto == `string` ? e.texto : ``)}`
        : null,
    ),
    e
      ? (0, JSXRuntime.jsx)(`div`, {
          ref: r,
          className: classNames(`aviso`, e.ok ? `ok` : `mal`, n),
          role: e.ok ? `status` : `alert`,
          children: e.texto,
        })
      : null
  );
}
function Lg({ children: e, clase: t }) {
  return (0, JSXRuntime.jsx)(`div`, {
    className: classNames(`vacio`, t),
    children: e,
  });
}
function Rg({ texto: e }) {
  let t = (0, React.useRef)(null);
  return (
    Zh(t, !0),
    (0, JSXRuntime.jsxs)(`div`, {
      ref: t,
      className: `al-dia`,
      children: [
        (0, JSXRuntime.jsx)(Icon, {
          nombre: `tilde`,
          tam: 16,
          trazo: 2.2,
        }),
        (0, JSXRuntime.jsx)(`span`, {
          children: e,
        }),
      ],
    })
  );
}
function zg(e) {
  return (String(e || `?`).trim()[0] || `?`).toUpperCase();
}
function Bg({ nombre: e, tam: t, tono: n }) {
  return (0, JSXRuntime.jsx)(`span`, {
    className: classNames(
      `avatar`,
      t && t !== 38 && `t${t}`,
      n === `gris` && `gris`,
    ),
    children: zg(e),
  });
}
function Vg({ plana: e, clase: t, children: n }) {
  return (0, JSXRuntime.jsx)(`div`, {
    className: classNames(`lista`, e && `plana`, t),
    children: n,
  });
}
function Hg(e) {
  let t =
      e.avatar === void 0
        ? e.icono
          ? (0, JSXRuntime.jsx)(`span`, {
              className: `fila-ic`,
              style: og(e.iconoColor ?? `naranja`),
              children: (0, JSXRuntime.jsx)(Icon, {
                nombre: e.icono,
                tam: 16,
                trazo: 2,
              }),
            })
          : null
        : (0, JSXRuntime.jsx)(Bg, {
            nombre: e.avatar,
            tono: e.avatarTono,
          }),
    n = e.derecha !== void 0 || e.derechaNode !== void 0,
    r = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        t,
        (0, JSXRuntime.jsxs)(`span`, {
          className: `fila-cuerpo`,
          children: [
            (0, JSXRuntime.jsxs)(`span`, {
              className: `fila-titulo`,
              children: [
                (0, JSXRuntime.jsx)(`b`, {
                  children: e.tituloNode ?? e.titulo,
                }),
                e.chip,
              ],
            }),
            e.sub
              ? (0, JSXRuntime.jsx)(`span`, {
                  className: `fila-sub`,
                  style: e.subColor
                    ? {
                        color: ag(e.subColor),
                      }
                    : void 0,
                  children: e.sub,
                })
              : null,
          ],
        }),
        n
          ? (0, JSXRuntime.jsxs)(`span`, {
              className: `fila-der`,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  className: `fila-monto`,
                  style: {
                    color: ag(e.derechaColor ?? `tx`),
                  },
                  children:
                    e.derechaNode ??
                    (0, JSXRuntime.jsx)(xg, {
                      texto: e.derecha ?? ``,
                    }),
                }),
                e.derechaSub
                  ? (0, JSXRuntime.jsx)(`span`, {
                      className: `fila-der-sub`,
                      children: e.derechaSub,
                    })
                  : null,
              ],
            })
          : null,
        e.flecha
          ? (0, JSXRuntime.jsx)(`span`, {
              className: `fila-flecha`,
              children: (0, JSXRuntime.jsx)(Icon, {
                nombre: `derecha`,
                tam: 16,
                trazo: 2,
              }),
            })
          : null,
      ],
    }),
    i = classNames(
      `fila`,
      e.onClick && `tocable`,
      e.tachado && `tachado`,
      e.clase,
      rg(e.i),
    );
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.onClick
        ? (0, JSXRuntime.jsx)(`button`, {
            type: `button`,
            className: i,
            onClick: e.onClick,
            disabled: e.deshabilitado,
            "aria-label": e.etiqueta,
            children: r,
          })
        : (0, JSXRuntime.jsx)(`div`, {
            className: i,
            children: r,
          }),
      e.extra,
    ],
  });
}
function Ug({ texto: e, tono: t }) {
  return (0, JSXRuntime.jsxs)(`span`, {
    className: `estado`,
    style: og(t),
    children: [(0, JSXRuntime.jsx)(`i`, {}), e],
  });
}
function Wg({ titulo: e, pasos: t }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `pasos-cab`,
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        className: `rotulo`,
        children: e,
      }),
      (0, JSXRuntime.jsx)(`ol`, {
        className: `pasos`,
        children: t.map((e, t) =>
          (0, JSXRuntime.jsxs)(
            `li`,
            {
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  className: `paso-num`,
                  children: t + 1,
                }),
                (0, JSXRuntime.jsx)(`span`, {
                  children: e,
                }),
              ],
            },
            t,
          ),
        ),
      }),
    ],
  });
}
function Gg({ titulo: e, valor: t, color: n, onClick: r, deshabilitado: i }) {
  let a = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        className: `dato-rot`,
        children: e,
      }),
      (0, JSXRuntime.jsxs)(`span`, {
        className: `dato-valor`,
        style: {
          color: ag(n ?? `tx`),
        },
        children: [
          (0, JSXRuntime.jsx)(xg, {
            texto: t,
          }),
          r
            ? (0, JSXRuntime.jsx)(Icon, {
                nombre: `derecha`,
                tam: 13,
                trazo: 2.4,
              })
            : null,
        ],
      }),
    ],
  });
  return r
    ? (0, JSXRuntime.jsx)(`button`, {
        type: `button`,
        className: `dato tocable`,
        onClick: r,
        disabled: i,
        children: a,
      })
    : (0, JSXRuntime.jsx)(`div`, {
        className: `dato`,
        children: a,
      });
}
function Kg({ clase: e, children: t }) {
  return (0, JSXRuntime.jsx)(`div`, {
    className: classNames(`datos`, e),
    children: t,
  });
}
function qg({ entra: e, sale: t, etiquetas: n }) {
  let r = Math.max(1, ...e, ...t);
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        className: `barras-caja`,
        children: e.map((e, i) =>
          (0, JSXRuntime.jsxs)(
            `div`,
            {
              className: `bc-col`,
              title: n[i],
              children: [
                (0, JSXRuntime.jsx)(`div`, {
                  className: `bc-arr`,
                  children: (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      height: `${(e / r) * 100}%`,
                    },
                  }),
                }),
                (0, JSXRuntime.jsx)(`i`, {
                  className: `bc-eje`,
                }),
                (0, JSXRuntime.jsx)(`div`, {
                  className: `bc-aba`,
                  children: (0, JSXRuntime.jsx)(`span`, {
                    style: {
                      height: `${((t[i] ?? 0) / r) * 100}%`,
                    },
                  }),
                }),
              ],
            },
            i,
          ),
        ),
      }),
      (0, JSXRuntime.jsx)(`div`, {
        className: `barras-eje`,
        children: n
          .map((e, t) => [e, t])
          .filter(([, e]) => e % 3 == 0 || e === n.length - 1)
          .map(([e, t]) =>
            (0, JSXRuntime.jsx)(
              `span`,
              {
                children: e,
              },
              t,
            ),
          ),
      }),
    ],
  });
}
function Jg({
  onCerrar: e,
  clase: t,
  claseHoja: n,
  etiqueta: r,
  sinEscape: i,
  children: a,
}) {
  let o = (0, React.useRef)(null);
  return (
    Yh(o, `hoja`),
    useBodyScrollLock(!0),
    useEscapeKey(e, !i),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsx)(`div`, {
        ref: o,
        className: classNames(`hoja-fondo`, t),
        role: `presentation`,
        onClick: () => e(),
        children: (0, JSXRuntime.jsxs)(`div`, {
          className: classNames(`hoja`, n),
          role: `dialog`,
          "aria-modal": `true`,
          "aria-label": r,
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `tirador`,
            }),
            a,
          ],
        }),
      }),
    })
  );
}
function Yg({ abierta: e = !0, ...t }) {
  return e
    ? (0, JSXRuntime.jsx)(Jg, {
        ...t,
      })
    : null;
}
function initializeUiComponents() {
  ng = ReactDOM;
  ig = {
    verde: `var(--verde)`,
    ambar: `var(--ambar)`,
    rojo: `var(--rojo)`,
    naranja: `var(--naranja-claro)`,
    tx: `var(--tx)`,
    gris: `var(--tx3)`,
  };
  sg = {
    inicio: `M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5`,
    paneles: `M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z`,
    pendientes: `M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 7v5l3 2`,
    movimientos: `M4 7h13M13 3l4 4-4 4M20 17H7M11 13l-4 4 4 4`,
    balance: `M5 20V10M12 20V4M19 20v-6`,
    alertas: `M12 3 2 20h20L12 3zM12 10v4M12 17v.5`,
    premios: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z`,
    soporte: `M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.6-.7L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z`,
    flyers: `M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 16l4.5-4.5 4 4L15 12l6 6M9 9a1.2 1.2 0 1 1-2.4 0A1.2 1.2 0 0 1 9 9z`,
    ajustes: `M21 7h-8M6 7H3M21 17h-3M10 17H3M10 7a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zM18 17a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z`,
    socios: `M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 7h18v13H3zM3 12h18`,
    equipo: `M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M11 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75`,
    jugadores: `M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8`,
    seguridad: `M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z`,
    actividad: `M3 12h4l3-8 4 16 3-8h4`,
    cargar: `M12 4v7M8.5 7.5 12 4l3.5 3.5M12 20v-7M8.5 16.5 12 20l3.5-3.5`,
    mas: `M4 6h16M4 12h16M4 18h16`,
    chevron: `M6 9l6 6 6-6`,
    derecha: `m9 18 6-6-6-6`,
    izquierda: `m15 18-6-6 6-6`,
    mantenimiento: `M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3z`,
    candado: `M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 10V7a3 3 0 0 1 6 0v3`,
    salir: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9`,
    ficha: `M12 3l8 4.5v9L12 21l-8-4.5v-9z`,
    sube: `M12 19V5M5 12l7-7 7 7`,
    baja: `M12 5v14M19 12l-7 7-7-7`,
    billetera: `M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM10 12h4`,
    tilde: `M20 6 9 17l-5-5`,
    cruz: `M18 6 6 18M6 6l12 12`,
    mas1: `M12 5v14M5 12h14`,
    lupa: `M16.5 10.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM20 20l-4.2-4.2`,
    tacho: `M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3`,
    power: `M12 3v9M18.4 6.6a9 9 0 1 1-12.8 0`,
    copiar: `M9 9h11v11H9zM5 15H4V4h11v1`,
    enviar: `M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z`,
    descargar: `M12 3v12M7 10l5 5 5-5M4 21h16`,
    compartir: `M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v14`,
    carpeta: `M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
    ojo: `M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z`,
    nota: `M4 4h16v16H4zM8 9h8M8 13h8M8 17h5`,
    dado: `M4 4h16v16H4zM8.5 8.5h.01M15.5 15.5h.01M15.5 8.5h.01M8.5 15.5h.01M12 12h.01`,
    usuario: `M19 21a7 7 0 0 0-14 0M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z`,
    reloj: `M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 7v5l3 2`,
    whatsapp: `M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3zM9 8.5c0 3.5 3 6.5 6.5 6.5l1.3-1.6-2.3-1-1 .9a4.5 4.5 0 0 1-2.3-2.3l.9-1-1-2.3z`,
    subir: `M12 21V9M7 14l5-5 5 5M4 3h16`,
    editar: `M4 20h4L20 8l-4-4L4 16zM14 6l4 4`,
    elegir: `M9 11l3 3 8-8M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11`,
    info: `M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 11v6M12 7.5v.5`,
    flecha: `M5 12h14M13 6l6 6-6 6`,
  };
  lg = (0, React.createContext)(null);
  ug = lg;
  fg = 0;
  pg = null;
  vg = /^(.*?)(,\d{2})$/;
}
export {
  classNames,
  rg,
  ag,
  og,
  Icon,
  cg,
  ug,
  Portal,
  useBodyScrollLock,
  useEscapeKey,
  Card,
  _g,
  xg,
  Cg,
  Button,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Notice,
  Lg,
  Rg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Yg,
  initializeUiComponents,
};
