/**
 * panel / player-management.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { createDemoRouter, qo, Qo, is } from "./demo-services.js";
import { bl } from "./cashier-rules.js";
import { Yd, Rp } from "./demo-api.js";
import { gm, useCashierBusyEffect } from "./cashier-controls.js";
import { Kh, Yh, Xh, Zh } from "./motion.js";
import {
  classNames,
  rg,
  ag,
  Icon,
  Portal,
  useEscapeKey,
  Card,
  xg,
  Button,
  wg,
  Tg,
  Dg,
  Og,
  Mg,
  Notice,
  Lg,
  Bg,
  Vg,
  Ug,
  Wg,
  Gg,
  Kg,
} from "./ui-components.js";
import { Qg, $g, usePanelContext } from "./navigation.js";
import { Z_, $_, ev } from "./referrals.js";
let gb;
function _b(e) {
  let [t, n] = (0, React.useState)(!1),
    [r, i] = (0, React.useState)(() => new Set()),
    a = e.join(`\0`),
    o = (0, React.useMemo)(() => new Set(a ? a.split(`\0`) : []), [a]);
  return (
    (0, React.useEffect)(() => {
      let e = setTimeout(() => {
        i((e) => {
          let t = new Set([...e].filter((e) => o.has(e)));
          return t.size === e.size ? e : t;
        });
      }, 0);
      return () => clearTimeout(e);
    }, [o]),
    {
      modo: t,
      setModo: n,
      elegidos: r,
      alternar: (e) =>
        i((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        }),
      todos: () => i(new Set(e)),
      ninguno: () => i(new Set()),
      salir: () => {
        (n(!1), i(new Set()));
      },
      todosElegidos: e.length > 0 && e.every((e) => r.has(e)),
    }
  );
}
function vb(e, t, n) {
  let r =
      e.slice(0, 12).join(`, `) +
      (e.length > 12 ? ` y ${e.length - 12} más` : ``),
    i = prompt(
      [
        `Vas a borrar ${e.length} ${t}:`,
        r,
        ``,
        n,
        ``,
        `Esto NO se deshace. Escribí BORRAR para confirmar.`,
      ].join(`
`),
      ``,
    );
  return i !== null && i.trim().toUpperCase() === `BORRAR`;
}
function yb(e, t, n) {
  let r = bb(e, t, n);
  return r.ok && !r.text.includes(`(demo)`)
    ? {
        ok: !0,
        text: r.text + ` (demo)`,
      }
    : r;
}
function bb(e, t, n) {
  if (!e || !e.ok)
    return {
      ok: !1,
      text: e?.mensaje ?? `No se pudo borrar. Probá de nuevo.`,
    };
  if (e.fallados.length === 0)
    return {
      ok: !0,
      text: `Listo: ${e.hechos} ${n} ${e.hechos === 1 ? `borrado` : `borrados`}.`,
    };
  let r = e.fallados
      .slice(0, 6)
      .map((e) => `${t(e.id)}: ${e.mensaje}`)
      .join(` · `),
    i = e.fallados.length > 6 ? ` · y ${e.fallados.length - 6} más` : ``;
  return {
    ok: e.hechos > 0,
    text: `${e.hechos} ${e.hechos === 1 ? `borrado` : `borrados`}, ${e.fallados.length} no: ${r}${i}`,
  };
}
function xb() {
  return {
    auth: {
      signUp: async (e) => {
        let t = globalThis.__demoSignUp,
          n = typeof t == `function` ? await t(e && e.email) : null;
        return n
          ? {
              data: {
                user: {
                  id: n,
                },
                session: null,
              },
              error: null,
            }
          : {
              data: null,
              error: {
                message: `demo`,
              },
            };
      },
      signInWithPassword: async () => ({
        data: null,
        error: {
          message: `demo`,
        },
      }),
      signOut: async () => ({
        error: null,
      }),
    },
  };
}
let Sb, Cb;
function wb({ siteKey: e, onToken: t, onUnavailable: n, resetKey: r = 0 }) {
  let i = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    o = (0, React.useRef)(t);
  (0, React.useEffect)(() => {
    o.current = t;
  }, [t]);
  let s = (0, React.useRef)(n);
  return (
    (0, React.useEffect)(() => {
      s.current = n;
    }, [n]),
    (0, React.useEffect)(() => {
      let t = !1;
      function n() {
        let n = Sb();
        t ||
          !i.current ||
          !n ||
          a.current ||
          (a.current = n.render(i.current, {
            sitekey: e,
            callback: (e) => o.current(e),
            "error-callback": () => {
              (o.current(``), s.current?.(`widget`));
            },
            "expired-callback": () => o.current(``),
            theme: `dark`,
            language: `es`,
            size: `flexible`,
          }));
      }
      let r = (e) => {
          t || a.current || (o.current(``), s.current?.(e));
        },
        c = setTimeout(() => r(`timeout`), 9e3);
      if (Sb()) n();
      else {
        let e = document.querySelector(`script[src="${Cb}"]`),
          t = e ?? document.createElement(`script`);
        (t.addEventListener(`load`, n),
          t.addEventListener(`error`, () => r(`script`)),
          e || ((t.src = Cb), (t.async = !0), document.head.appendChild(t)));
      }
      return () => {
        ((t = !0),
          clearTimeout(c),
          (a.current &&= (Sb()?.remove(a.current), null)));
      };
    }, [e]),
    (0, React.useEffect)(() => {
      r > 0 && a.current && (Sb()?.reset(a.current), o.current(``));
    }, [r]),
    (0, JSXRuntime.jsx)(`div`, {
      ref: i,
      style: {
        minHeight: `65px`,
        display: `flex`,
        justifyContent: `center`,
      },
    })
  );
}
function Tb(e) {
  return !e || e.length < 6
    ? `La contraseña debe tener al menos 6 caracteres.`
    : !/[a-z]/.test(e) ||
        !/[A-Z]/.test(e) ||
        !/\d/.test(e) ||
        !/[^A-Za-z0-9]/.test(e)
      ? `La contraseña necesita una mayúscula, una minúscula, un número y un símbolo (por ejemplo: Rushy2026!).`
      : null;
}
let Eb, Db, Ob, kb, Ab;
function jb() {
  if (typeof window > `u`) return ``;
  let { hostname: e, protocol: t } = globalThis.__demoSitio,
    n = e.split(`.`);
  return n.length > 2 ? `${t}//${n.slice(1).join(`.`)}` : ``;
}
function Mb(e, t) {
  let n = jb();
  return [
    n ? `Link para jugar\n${n}` : null,
    `USUARIO: ${e}`,
    `CONTRASEÑA: ${t}`,
    `Entrá con tu usuario (no hace falta email). La primera vez te va a pedir que elijas tu propia contraseña.`,
  ].filter(Boolean).join(`

`);
}
function Nb(e) {
  let t = e.toLowerCase();
  return t.includes(`captcha`)
    ? `Venció la verificación anti-robot. Marcá de nuevo la casilla y volvé a intentar.`
    : t.includes(`rate limit`) || t.includes(`too many`)
      ? `Se crearon demasiadas cuentas seguidas. Esperá un minuto y probá de nuevo.`
      : t.includes(`database error`)
        ? `No se pudo crear: puede que ese usuario lo haya tomado alguien recién. Probá con otro.`
        : `No se pudo crear el jugador. Probá de nuevo.`;
}
function Pb({ marcada: e, tam: t = 14 }) {
  let n = (0, React.useRef)(null);
  return (
    Xh(n, e, `casilla`),
    Zh(n, e),
    (0, JSXRuntime.jsx)(`span`, {
      ref: n,
      className: classNames(`casilla`, e && `on`),
      children: e
        ? (0, JSXRuntime.jsx)(Icon, {
            nombre: `tilde`,
            tam: t,
            trazo: 3,
          })
        : null,
    })
  );
}
function NewPlayerForm({ siteKey: e, alTerminar: t }) {
  let [n, r] = (0, React.useTransition)();
  useCashierBusyEffect(n);
  let [i, a] = (0, React.useState)(``),
    [o, s] = (0, React.useState)(!1),
    [c, l] = (0, React.useState)(``),
    [u, d] = (0, React.useState)(0),
    [f, p] = (0, React.useState)(null),
    [m, h] = (0, React.useState)(null),
    [g, _] = (0, React.useState)(!1),
    v = (e, t, n = `crear`) =>
      p({
        lugar: n,
        ok: e,
        text: t,
      });
  function y() {
    if (n) return;
    let u = i.trim().toLowerCase();
    if (!bl.test(u))
      return v(
        !1,
        `El usuario va de 3 a 24 caracteres: letras, números, punto, guion o guion bajo, y empieza y termina con letra o número.`,
      );
    if (!o)
      return v(!1, `Marcá que el jugador te dijo que es mayor de 18 años.`);
    if (e && !c) return v(!1, `Marcá la casilla de verificación.`);
    let f = qo(),
      m = Tb(f);
    if (m) return v(!1, m);
    let g = Qo();
    r(async () => {
      (p(null), _(!1));
      let e = await Db(u, !0).catch(() => null);
      if (!e) return v(!1, `No se pudo crear. Probá de nuevo.`);
      if (!e.ok) return v(!1, e.mensaje);
      let n = xb(`http://demo.invalid`, `demo`, {
          auth: {
            persistSession: !1,
            autoRefreshToken: !1,
            detectSessionInUrl: !1,
          },
        }),
        { error: r } = await n.auth.signUp({
          email: e.correo,
          password: f,
          options: {
            data: {
              username: e.usuario,
            },
            ...(c && {
              captchaToken: c,
            }),
          },
        });
      if (
        (l(``),
        d((e) => e + 1),
        await n.auth.signOut().catch(() => {}),
        r && !(await Ob(e.reservaId, g).catch(() => null))?.ok)
      )
        return (await kb(e.reservaId).catch(() => {}), v(!1, Nb(r.message)));
      h({
        usuario: e.usuario,
        pass: g,
        reservaId: e.reservaId,
        terminado: !1,
      });
      let i = await Ob(e.reservaId, g).catch(() => null);
      if (!i?.ok)
        return v(
          !1,
          `${i?.mensaje ?? `No se pudo terminar de configurar la cuenta.`} Guardá la contraseña de abajo y tocá "Reintentar".`,
        );
      (h({
        usuario: e.usuario,
        pass: g,
        reservaId: e.reservaId,
        terminado: !0,
      }),
        v(!0, i.mensaje),
        a(``),
        s(!1),
        t(e.usuario));
    });
  }
  function b() {
    !m ||
      n ||
      r(async () => {
        let e = await Ob(m.reservaId, m.pass).catch(() => null);
        if (!e?.ok)
          return v(
            !1,
            e?.mensaje ?? `Todavía no se pudo. Probá en un momento.`,
            `reintento`,
          );
        (h({
          ...m,
          terminado: !0,
        }),
          v(!0, e.mensaje),
          t(m.usuario));
      });
  }
  let x = (e) =>
    f && f.lugar === e
      ? {
          ok: f.ok,
          texto: f.text,
        }
      : null;
  return (0, JSXRuntime.jsxs)(Card, {
    clase: `jug-crear`,
    children: [
      (0, JSXRuntime.jsx)(Wg, {
        titulo: `CREAR JUGADOR`,
        pasos: Ab,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `jug-campo`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `rotulo`,
            children: `USUARIO`,
          }),
          (0, JSXRuntime.jsx)(`label`, {
            className: `campo`,
            children: (0, JSXRuntime.jsx)(`input`, {
              id: `jug-usuario`,
              type: `text`,
              value: i,
              onChange: (e) => {
                (a(e.target.value), p(null));
              },
              maxLength: 24,
              onKeyDown: (e) => {
                e.key === `Enter` && y();
              },
              autoCapitalize: `none`,
              autoCorrect: `off`,
              spellCheck: !1,
              autoComplete: `off`,
              placeholder: `Usuario (ej. test1)`,
            }),
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`button`, {
        type: `button`,
        role: `checkbox`,
        "aria-checked": o,
        className: `jug-check`,
        onClick: () => {
          (s((e) => !e), p(null));
        },
        children: [
          (0, JSXRuntime.jsx)(Pb, {
            marcada: o,
          }),
          (0, JSXRuntime.jsxs)(`span`, {
            className: `jug-check-txt`,
            children: [
              `El jugador me dijo que es `,
              (0, JSXRuntime.jsx)(`b`, {
                children: `mayor de 18 años`,
              }),
              `. Queda anotado a tu nombre.`,
            ],
          }),
        ],
      }),
      e &&
        (0, JSXRuntime.jsx)(`div`, {
          className: `jug-turnstile`,
          children: (0, JSXRuntime.jsx)(wb, {
            siteKey: e,
            resetKey: u,
            onToken: l,
            onUnavailable: () =>
              v(
                !1,
                `No cargó la verificación anti-robot. Desactivá el bloqueador de publicidad y recargá la página.`,
              ),
          }),
        }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `jug-boton-aviso`,
        children: [
          (0, JSXRuntime.jsx)(Button, {
            tono: `naranja`,
            ancho: !0,
            clase: classNames(`jug-alto`, n && `jug-pendiente`),
            pendiente: n,
            onClick: y,
            children: n ? `Creando…` : `Crear jugador`,
          }),
          (0, JSXRuntime.jsx)(Notice, {
            aviso: x(`crear`),
          }),
        ],
      }),
      m &&
        (0, JSXRuntime.jsxs)(`div`, {
          className: `jug-creado`,
          children: [
            (0, JSXRuntime.jsxs)(`div`, {
              className: `jug-creado-cab`,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  className: `jug-creado-tit`,
                  children: m.terminado
                    ? `Jugador creado`
                    : `Cuenta creada, falta terminar`,
                }),
                (0, JSXRuntime.jsx)(Button, {
                  tono: `secundario`,
                  clase: `jug-copiar`,
                  onClick: () => {
                    navigator.clipboard?.writeText(Mb(m.usuario, m.pass)).then(
                      () => {
                        (_(!0), setTimeout(() => _(!1), 2200));
                      },
                      () =>
                        v(
                          !1,
                          `No se pudo copiar. Marcalo con el dedo y copialo a mano.`,
                          `copiar`,
                        ),
                    );
                  },
                  children: g ? `Copiado ✓` : `Copiar mensaje`,
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(Notice, {
              aviso: x(`copiar`),
            }),
            (0, JSXRuntime.jsx)(`div`, {
              className: `jug-credenciales`,
              children: [
                [`USUARIO`, m.usuario],
                [`CONTRASEÑA`, m.pass],
                [`LINK PARA JUGAR`, jb()],
              ]
                .filter(([, e]) => e)
                .map(([e, t]) =>
                  (0, JSXRuntime.jsxs)(
                    `div`,
                    {
                      className: `jug-cred`,
                      children: [
                        (0, JSXRuntime.jsx)(`span`, {
                          className: `jug-cred-rot`,
                          children: e,
                        }),
                        (0, JSXRuntime.jsx)(`span`, {
                          className: classNames(
                            `jug-cred-val`,
                            e === `LINK PARA JUGAR` && `link`,
                          ),
                          children: t,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
            }),
            (0, JSXRuntime.jsx)(`p`, {
              className: `jug-creado-pie`,
              children: `Copiala ahora: esta contraseña no se guarda en ningún lado. Al entrar por primera vez, el jugador elige la suya.`,
            }),
            !m.terminado &&
              (0, JSXRuntime.jsxs)(`div`, {
                className: `jug-boton-aviso`,
                children: [
                  (0, JSXRuntime.jsx)(Button, {
                    tono: `naranja`,
                    ancho: !0,
                    clase: classNames(`jug-alto`, n && `jug-pendiente`),
                    pendiente: n,
                    onClick: b,
                    children: n ? `Reintentando…` : `Reintentar`,
                  }),
                  (0, JSXRuntime.jsx)(Notice, {
                    aviso: x(`reintento`),
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
function Ib(e) {
  return e.frozen
    ? {
        txt: `plata bloqueada`,
        tono: `rojo`,
      }
    : e.status === `closed`
      ? {
          txt: `cuenta cerrada`,
          tono: `ambar`,
        }
      : e.status === `blocked`
        ? {
            txt: `cuenta bloqueada`,
            tono: `rojo`,
          }
        : {
            txt: `puede jugar`,
            tono: `verde`,
          };
}
function PlayersScreen({ p: e, caja: t, filtroCasa: n, limpiarFiltro: r }) {
  let { conAltaLibre: i } = usePanelContext(),
    [a, o] = (0, React.useState)(``),
    [s, c] = (0, React.useState)(!1),
    l = (0, React.useMemo)(
      () => (n ? e.players.filter((e) => e.casaId === n.id) : e.players),
      [e.players, n],
    ),
    u = (0, React.useMemo)(() => {
      let e = a.trim().toLowerCase();
      return e ? l.filter((t) => t.username.toLowerCase().includes(e)) : l;
    }, [l, a]),
    d = e.capacidades.puedeCrearJugadores,
    f = e.capacidades.puedeBorrarJugadores,
    p = (0, React.useMemo)(
      () => u.filter((e) => Qg(e, f)).map((e) => e.playerId),
      [u, f],
    ),
    m = p.length > 0,
    h = _b(p),
    [g, _] = (0, React.useState)(!1),
    [v, y] = (0, React.useState)(null),
    b = (t) => e.players.find((e) => e.playerId === t)?.username ?? t;
  async function x() {
    if (g || h.elegidos.size === 0) return;
    let e = [...h.elegidos];
    if (
      vb(
        e.map(b),
        `jugadores`,
        `Sólo se borran los que NUNCA cargaron, jugaron ni tienen saldo; los demás se saltean (a ésos, bloquealos). Cada uno pasa por el mismo control que el borrado de a uno.`,
      )
    ) {
      _(!0);
      try {
        let t = await gb(`jugadores`, e).catch(() => null);
        (y(yb(t, b, `jugadores`)), h.salir());
      } finally {
        _(!1);
      }
    }
  }
  let S = h.elegidos.size;
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `jug`,
    children: [
      n &&
        (0, JSXRuntime.jsxs)(`div`, {
          className: `jug-filtro entra`,
          children: [
            (0, JSXRuntime.jsxs)(`span`, {
              className: `jug-filtro-txt`,
              children: [
                `Sólo los jugadores de `,
                (0, JSXRuntime.jsx)(`b`, {
                  children: n.nombre,
                }),
              ],
            }),
            (0, JSXRuntime.jsx)(Button, {
              tono: `secundario`,
              clase: `jug-ver-todos`,
              onClick: () => r?.(),
              children: `Ver todos`,
            }),
          ],
        }),
      (0, JSXRuntime.jsx)(Notice, {
        aviso: v
          ? {
              ok: v.ok,
              texto: v.text,
            }
          : null,
      }),
      !h.modo &&
        (d || m) &&
        (0, JSXRuntime.jsxs)(wg, {
          clase: `jug-botones`,
          children: [
            d &&
              (0, JSXRuntime.jsx)(Button, {
                tono: s ? `secundario` : `naranja`,
                "aria-expanded": s,
                onClick: () => i(() => c((e) => !e)),
                children: s ? `Cerrar` : `Crear jugador`,
              }),
            m &&
              (0, JSXRuntime.jsx)(Button, {
                tono: `secundario`,
                onClick: () =>
                  i(() => {
                    (c(!1), h.setModo(!0));
                  }),
                children: `Seleccionar varios`,
              }),
          ],
        }),
      s &&
        !h.modo &&
        d &&
        (0, JSXRuntime.jsx)(NewPlayerForm, {
          siteKey: e.turnstileSiteKey,
          alTerminar: (e) => o(e),
        }),
      h.modo &&
        (0, JSXRuntime.jsxs)(`div`, {
          className: `jug-barra`,
          role: `toolbar`,
          "aria-label": `Selección de jugadores`,
          children: [
            (0, JSXRuntime.jsxs)(`div`, {
              className: `jug-barra-fila`,
              children: [
                (0, JSXRuntime.jsxs)(`button`, {
                  type: `button`,
                  role: `checkbox`,
                  "aria-checked": h.todosElegidos,
                  className: `jug-check jug-todos`,
                  onClick: () => (h.todosElegidos ? h.ninguno() : h.todos()),
                  children: [
                    (0, JSXRuntime.jsx)(Pb, {
                      marcada: h.todosElegidos,
                    }),
                    (0, JSXRuntime.jsxs)(`span`, {
                      className: `jug-check-txt`,
                      children: [
                        `Seleccionar todos `,
                        (0, JSXRuntime.jsxs)(`em`, {
                          children: [`(`, p.length, ` visibles)`],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, JSXRuntime.jsxs)(`span`, {
                  className: classNames(`jug-contador`, S > 0 && `on`),
                  children: [S, ` `, S === 1 ? `elegido` : `elegidos`],
                }),
              ],
            }),
            (0, JSXRuntime.jsxs)(wg, {
              clase: `jug-barra-botones`,
              children: [
                (0, JSXRuntime.jsx)(Button, {
                  tono: S === 0 && !g ? `secundario` : `rojo`,
                  clase: g ? `jug-pendiente` : void 0,
                  pendiente: g,
                  deshabilitado: S === 0,
                  onClick: () => void x(),
                  children: g
                    ? `Borrando…`
                    : `Borrar ${S > 0 ? S : ``} jugadores`.replace(/\s+/g, ` `),
                }),
                (0, JSXRuntime.jsx)(Button, {
                  tono: `secundario`,
                  deshabilitado: g,
                  onClick: () => h.salir(),
                  children: `Cancelar`,
                }),
              ],
            }),
          ],
        }),
      (0, JSXRuntime.jsxs)(Card, {
        pad: `chico`,
        clase: `jug-tarjeta`,
        i: 3,
        children: [
          (0, JSXRuntime.jsx)(Mg, {
            id: `jug-q`,
            placeholder: `Buscar jugador`,
            valor: a,
            onCambiar: o,
            contador: `${u.length} de ${l.length}`,
          }),
          u.length === 0
            ? (0, JSXRuntime.jsx)(Lg, {
                children:
                  l.length === 0
                    ? n
                      ? `${n.nombre} todavía no tiene jugadores.`
                      : `Todavía no hay jugadores.`
                    : `Ningún jugador con ese nombre.`,
              })
            : (0, JSXRuntime.jsx)(Vg, {
                plana: !0,
                clase: `jug-lista`,
                children: u.map((e, n) =>
                  (0, JSXRuntime.jsx)(
                    PlayerRow,
                    {
                      j: e,
                      i: n,
                      modoSeleccion: h.modo,
                      marcado: h.elegidos.has(e.playerId ?? ``),
                      marcable: Qg(e, f),
                      onTocar: () =>
                        h.modo
                          ? Qg(e, f) && e.playerId
                            ? h.alternar(e.playerId)
                            : void 0
                          : t.abrir(e.username),
                    },
                    e.username,
                  ),
                ),
              }),
        ],
      }),
      (0, JSXRuntime.jsx)(`p`, {
        className: `jug-pie entra`,
        children: `Tocá un jugador para cargarle o descargarle saldo.`,
      }),
    ],
  });
}
function PlayerRow({
  j: e,
  i: t,
  modoSeleccion: n,
  marcado: r,
  marcable: i,
  onTocar: a,
}) {
  let o = Ib(e),
    s = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        n
          ? (0, JSXRuntime.jsx)(`span`, {
              className: classNames(`jug-marca`, !i && `apagada`),
              "aria-hidden": `true`,
              children: (0, JSXRuntime.jsx)(Pb, {
                marcada: i && r,
                tam: 13,
              }),
            })
          : (0, JSXRuntime.jsx)(Bg, {
              nombre: e.username,
              tono: `gris`,
            }),
        (0, JSXRuntime.jsxs)(`span`, {
          className: `fila-cuerpo`,
          children: [
            (0, JSXRuntime.jsxs)(`span`, {
              className: `fila-titulo`,
              children: [
                (0, JSXRuntime.jsx)(`b`, {
                  children: e.username,
                }),
                e.esStaff &&
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `chip-personal`,
                    children: `PERSONAL`,
                  }),
              ],
            }),
            (0, JSXRuntime.jsx)(`span`, {
              className: `fila-sub`,
              children: (0, JSXRuntime.jsx)(Ug, {
                texto: o.txt,
                tono: o.tono,
              }),
            }),
          ],
        }),
        (0, JSXRuntime.jsx)(`span`, {
          className: `fila-der`,
          children: (0, JSXRuntime.jsx)(`span`, {
            className: `fila-monto`,
            style: {
              color: ag(e.cents === 0 ? `gris` : `tx`),
            },
            children: (0, JSXRuntime.jsx)(xg, {
              texto: e.balance,
            }),
          }),
        }),
        (0, JSXRuntime.jsx)(`span`, {
          className: `fila-flecha`,
          children: (0, JSXRuntime.jsx)(Icon, {
            nombre: `derecha`,
            tam: 16,
            trazo: 2,
          }),
        }),
      ],
    }),
    c = rg(4 + t);
  return n && !i
    ? (0, JSXRuntime.jsx)(`div`, {
        className: classNames(`fila`, `jug-fila`, `jug-fila-apagada`, c),
        children: s,
      })
    : (0, JSXRuntime.jsx)(`button`, {
        type: `button`,
        className: classNames(`fila`, `tocable`, `jug-fila`, c),
        "aria-pressed": n ? r : void 0,
        onClick: a,
        children: s,
      });
}
let zb, Bb;
function Vb(e, t) {
  if (!e || !e.rol || !e.id || (t.email == null && e.recibeCorreos !== !1))
    return !1;
  let n = t.casa == null;
  return is(
    {
      rol: e.rol,
      id: e.id,
      casaId: Bb,
      esMadre: e.esMadre,
    },
    {
      id: t.id,
      rol: t.role,
      casaId: n ? Bb : `socio:${t.casa}`,
      esMadre: n ? e.esMadre : !1,
      esDemo: t.demo === !0,
      archivado: !1,
      activo: t.activo,
    },
  ).ok;
}
function Hb(e) {
  return `${e.trim().replace(/\/+$/, ``)}/staff`;
}
function Ub(e, t, n, r = !0) {
  return r
    ? `Usuario: ${e}\nContraseña: ${t}\nEntrá en ${n}: la primera vez te va a pedir que elijas tu propia contraseña.`
    : `Entrá en ${n} con el correo con el que te registraste (no con el usuario ${e}).\nContraseña: ${t}\nLa primera vez te va a pedir que elijas tu propia contraseña.`;
}
function Wb(e, t = !1) {
  let n = `¿Generar una contraseña nueva para ${e}? La actual deja de andar y se le cierran las sesiones. Va a tener que elegir la suya al entrar.`;
  return t
    ? `${n}\n\nTiene autenticador: al entrar le va a pedir el código de su celular. Si perdió el celular, esto NO lo destraba y se le cierra la sesión que tenga abierta.`
    : n;
}
let Gb;
function Kb() {
  let [e, t] = (0, React.useState)(null);
  function n(e) {
    if (!navigator.clipboard?.writeText) {
      t(`fallo`);
      return;
    }
    navigator.clipboard.writeText(e).then(
      () => {
        (t(`ok`), setTimeout(() => t((e) => (e === `ok` ? null : e)), 2200));
      },
      () => t(`fallo`),
    );
  }
  return {
    copia: e,
    copiar: n,
  };
}
let qb;
function Jb({
  origen: e,
  usuario: t,
  contrasena: n,
  textoACopiar: r,
  nota: i,
  detalle: a,
}) {
  let { copia: o, copiar: s } = Kb(),
    c = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      if (qb.has(e)) return;
      qb.add(e);
      let t =
        typeof window.matchMedia == `function` &&
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
      c.current?.scrollIntoView({
        block: `nearest`,
        behavior: t ? `auto` : `smooth`,
      });
    }, [e]),
    (0, React.useEffect)(() => {
      if (o !== `fallo`) return;
      let e =
        typeof window.matchMedia == `function` &&
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
      c.current?.scrollIntoView({
        block: `nearest`,
        behavior: e ? `auto` : `smooth`,
      });
    }, [o]),
    (0, JSXRuntime.jsxs)(`div`, {
      ref: c,
      className: `eq-ficha ct-ficha`,
      role: `status`,
      children: [
        (0, JSXRuntime.jsx)(`div`, {
          className: `eq-msj`,
          children: (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-msj-cuerpo`,
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-renglon`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    children: `USUARIO`,
                  }),
                  (0, JSXRuntime.jsx)(`b`, {
                    className: `mono`,
                    children: t,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-renglon`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    children: `CONTRASEÑA`,
                  }),
                  (0, JSXRuntime.jsx)(`b`, {
                    className: `mono ct-clave`,
                    children: n,
                  }),
                ],
              }),
            ],
          }),
        }),
        i
          ? (0, JSXRuntime.jsx)(`p`, {
              className: `ct-nota`,
              children: i,
            })
          : null,
        (0, JSXRuntime.jsxs)(`div`, {
          className: `ct-copiar`,
          children: [
            (0, JSXRuntime.jsx)(Button, {
              tono: `naranja`,
              icono: `copiar`,
              onClick: () => s(r()),
              children: o === `ok` ? `Copiado ✓` : `Copiar`,
            }),
            (0, JSXRuntime.jsx)(`span`, {
              className: `ct-una-vez`,
              children: `Se ve una sola vez.`,
            }),
          ],
        }),
        o === `fallo`
          ? (0, JSXRuntime.jsx)(Notice, {
              aviso: {
                ok: !1,
                texto: `No se pudo copiar. Marcala con el dedo y copiala a mano.`,
              },
            })
          : null,
        a
          ? (0, JSXRuntime.jsx)(`p`, {
              className: `ct-detalle`,
              children: a,
            })
          : null,
      ],
    })
  );
}
function Yb({ playerId: e, usuario: t }) {
  let { flotar: n } = usePanelContext(),
    [r, i] = (0, React.useTransition)(),
    [a, o] = (0, React.useState)(null),
    [s, c] = (0, React.useState)(null),
    l = (0, React.useRef)(!1);
  (0, React.useEffect)(
    () => (
      (l.current = !0),
      () => {
        l.current = !1;
      }
    ),
    [],
  );
  function u() {
    r ||
      (window.confirm(ev(t)) &&
        (o(null),
        c(null),
        i(async () => {
          let r = await zb(e).catch(() => null);
          if (!l.current) {
            r
              ? r.ok
                ? n(
                    !1,
                    `Se le cambió la contraseña a ${t} pero la hoja se cerró antes de mostrarla: la anterior ya no sirve, abrila y generá otra.`,
                  )
                : n(!1, `No se le cambió la contraseña a ${t}: ${r.mensaje}`)
              : n(
                  !1,
                  `No llegó la respuesta del servidor y la hoja se cerró: puede que a ${t} ya se le haya cambiado la contraseña. Abrila y generá una nueva antes de pasarle nada.`,
                );
            return;
          }
          if (!r) {
            c(
              `No llegó la respuesta del servidor. Puede que la contraseña ya se haya cambiado: generá una nueva antes de pasarle nada al jugador.`,
            );
            return;
          }
          if (!r.ok) {
            c(r.mensaje);
            return;
          }
          o({
            usuario: r.usuario,
            contrasena: r.contrasena,
            entraCon: r.entraCon === `correo` ? `correo` : `usuario`,
          });
        })));
  }
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `col ct-bloque`,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `ct-cab`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `rotulo`,
            children: `CONTRASEÑA`,
          }),
          (0, JSXRuntime.jsx)(`p`, {
            className: `ct-ayuda`,
            children: Gb,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(Button, {
        tono: `secundario`,
        ancho: !0,
        icono: `candado`,
        pendiente: r,
        onClick: u,
        children: r ? `Generando…` : `Nueva contraseña`,
      }),
      (0, JSXRuntime.jsx)(Notice, {
        aviso: s
          ? {
              ok: !1,
              texto: s,
            }
          : null,
      }),
      a && !r
        ? (0, JSXRuntime.jsx)(Jb, {
            origen: a,
            usuario: a.usuario,
            contrasena: a.contrasena,
            textoACopiar: () =>
              $_(
                a.usuario,
                a.contrasena,
                Z_(globalThis.__demoSitio.hostname),
                a.entraCon,
              ),
            nota:
              a.entraCon === `correo`
                ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                    children: [
                      `Se registró con su correo: entra con `,
                      (0, JSXRuntime.jsx)(`b`, {
                        children: `ese correo`,
                      }),
                      `, no con el usuario.`,
                    ],
                  })
                : void 0,
          })
        : null,
    ],
  });
}
function Xb({
  usuario: e,
  puede: t,
  generando: n,
  bloqueado: r,
  nueva: i,
  onGenerar: a,
}) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `col ct-persona`,
    children: [
      t
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `ct-persona-fila`,
            children: [
              (0, JSXRuntime.jsx)(`p`, {
                className: `ct-ayuda`,
                children: Gb,
              }),
              (0, JSXRuntime.jsx)(Button, {
                tono: `secundario`,
                icono: `candado`,
                deshabilitado: r,
                pendiente: n,
                onClick: a,
                "aria-label": n
                  ? `Generando una contraseña nueva para ${e}`
                  : `Generar una contraseña nueva para ${e}`,
                children: n ? `Generando…` : `Nueva contraseña`,
              }),
            ],
          })
        : null,
      i
        ? (0, JSXRuntime.jsx)(Jb, {
            origen: i,
            usuario: i.usuario,
            contrasena: i.contrasena,
            textoACopiar: () =>
              Ub(
                i.usuario,
                i.contrasena,
                Hb(globalThis.__demoSitio.origin),
                i.entraConUsuario !== !1,
              ),
            detalle: i.detalle,
          })
        : null,
    ],
  });
}
let Zb, Qb;
function $b(e) {
  return e.aviso
    ? {
        ok: e.aviso.ok,
        texto: e.aviso.text,
      }
    : null;
}
function ex({ caja: e }) {
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.abierto
        ? (0, JSXRuntime.jsx)(nx, {
            caja: e,
          })
        : null,
      e.aviso && !e.abierto
        ? (0, JSXRuntime.jsx)(tx, {
            ok: e.aviso.ok,
            texto: e.aviso.text,
          })
        : null,
    ],
  });
}
function tx({ ok: e, texto: t }) {
  let n = (0, React.useRef)(null);
  return (
    Kh(n, `${+!!e}|${t}`),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsx)(`div`, {
        ref: n,
        className: classNames(`pend-aviso-caja`, e ? `ok` : `mal`),
        role: e ? `status` : `alert`,
        children: t,
      }),
    })
  );
}
function nx({ caja: e }) {
  let t = (0, React.useRef)(null);
  (Yh(t, `hoja`), useEscapeKey(e.cerrar));
  let n = e.jugador,
    r = e.abierto ?? ``,
    [i, a] = (0, React.useState)(null);
  function o(t) {
    t === `mover`
      ? e.setFicha(`mover`)
      : t === `jugadas`
        ? (e.fallaronJugadas && a(e.jugadas), e.verJugadas())
        : t === `notas`
          ? e.verNotas()
          : e.setFicha(`cuenta`);
  }
  let s = (0, React.useRef)(e.notas),
    { notas: c, ficha: l, verNotas: u } = e;
  return (
    (0, React.useEffect)(() => {
      let e = s.current;
      ((s.current = c), e !== null && c === null && l === `notas` && u());
    }, [c, l, u]),
    (0, JSXRuntime.jsx)(Portal, {
      children: (0, JSXRuntime.jsx)(`div`, {
        ref: t,
        className: `hoja-fondo caja-fondo`,
        role: `presentation`,
        onClick: () => e.cerrar(),
        children: (0, JSXRuntime.jsxs)(`div`, {
          className: `hoja`,
          role: `dialog`,
          "aria-modal": `true`,
          "aria-label": `Caja de ${r}`,
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `tirador`,
            }),
            (0, JSXRuntime.jsxs)(`div`, {
              className: `caja-cab`,
              children: [
                (0, JSXRuntime.jsx)(Bg, {
                  nombre: r,
                  tam: 42,
                }),
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `caja-cab-txt`,
                  children: [
                    (0, JSXRuntime.jsx)(`span`, {
                      className: `caja-cab-nombre`,
                      children: r,
                    }),
                    (0, JSXRuntime.jsx)(`span`, {
                      className: `caja-cab-sub`,
                      children: n
                        ? n.disponible && n.disponible !== n.balance
                          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                              children: [
                                (0, JSXRuntime.jsxs)(`span`, {
                                  children: [
                                    `saldo actual · `,
                                    (0, JSXRuntime.jsx)(`b`, {
                                      children: n.balance,
                                    }),
                                    ` ·`,
                                  ],
                                }),
                                ` `,
                                (0, JSXRuntime.jsxs)(`span`, {
                                  className: `caja-ambar`,
                                  children: [
                                    `para retirar `,
                                    (0, JSXRuntime.jsx)(`b`, {
                                      children: n.disponible,
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, JSXRuntime.jsxs)(`span`, {
                              children: [
                                `saldo actual · `,
                                (0, JSXRuntime.jsx)(`b`, {
                                  children: n.balance,
                                }),
                              ],
                            })
                        : (0, JSXRuntime.jsx)(`span`, {
                            children: `saldo actual · —`,
                          }),
                    }),
                  ],
                }),
                (0, JSXRuntime.jsx)(`button`, {
                  type: `button`,
                  className: `caja-x`,
                  onClick: () => e.cerrar(),
                  "aria-label": `Cerrar`,
                  children: (0, JSXRuntime.jsx)(Icon, {
                    nombre: `cruz`,
                    tam: 20,
                    trazo: 2,
                  }),
                }),
              ],
            }),
            e.tomado &&
              e.tomado.username === e.abierto &&
              (0, JSXRuntime.jsxs)(`div`, {
                className: `caja-caja caja-pedido`,
                role: `note`,
                children: [
                  (0, JSXRuntime.jsxs)(`b`, {
                    children: [
                      `Resolviendo un pedido de `,
                      e.tomado.kind === `load` ? `carga` : `retiro`,
                      ` por `,
                      e.tomado.amount,
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    children: `Si cambiás el monto o el sentido, el pedido queda abierto y este movimiento va suelto.`,
                  }),
                ],
              }),
            (0, JSXRuntime.jsx)(Og, {
              opciones: Qb,
              activa: e.ficha,
              onElegir: o,
              clase: `caja-solapas`,
              etiqueta: `Ficha del jugador`,
            }),
            e.freno &&
              (0, JSXRuntime.jsxs)(`div`, {
                className: `caja-caja caja-freno`,
                role: `note`,
                children: [
                  (0, JSXRuntime.jsx)(`b`, {
                    children: e.freno.titulo,
                  }),
                  (0, JSXRuntime.jsx)(`span`, {
                    children: e.freno.texto,
                  }),
                ],
              }),
            e.ficha === `mover` &&
              (0, JSXRuntime.jsx)(rx, {
                caja: e,
              }),
            e.ficha === `jugadas` &&
              (0, JSXRuntime.jsx)(ix, {
                caja: e,
                jugadasDelFallo: i,
              }),
            e.ficha === `notas` &&
              (0, JSXRuntime.jsx)(ax, {
                caja: e,
              }),
            e.ficha === `cuenta` &&
              (0, JSXRuntime.jsx)(ox, {
                caja: e,
              }),
          ],
        }),
      }),
    })
  );
}
function rx({ caja: e }) {
  let t = e.jugador;
  if (e.logro)
    return (0, JSXRuntime.jsxs)(`div`, {
      className: `caja-exito caja-anim`,
      role: `status`,
      children: [
        (0, JSXRuntime.jsxs)(`b`, {
          children: [`✓ `, e.logro.texto],
        }),
        (0, JSXRuntime.jsx)(`span`, {
          children: `Ya figura en Movimientos. El saldo de arriba es el que quedó.`,
        }),
        (0, JSXRuntime.jsxs)(wg, {
          children: [
            (0, JSXRuntime.jsx)(Button, {
              tono: `secundario`,
              onClick: () => e.limpiarLogro(),
              children: `Hacer otro movimiento`,
            }),
            (0, JSXRuntime.jsx)(Button, {
              tono: `secundario`,
              onClick: () => e.cerrar(),
              children: `Cerrar`,
            }),
          ],
        }),
        (0, JSXRuntime.jsx)(Notice, {
          aviso: $b(e),
        }),
      ],
    });
  let n = !t?.frozen && t?.status === `active`,
    r = !t?.frozen,
    i = e.pideCodigo && !e.esCarga,
    a = !e.esCarga && t?.disponibleInput ? t.disponibleInput : null,
    o = Zb.map((e) => [String(e), e.toLocaleString(`es-AR`)]);
  return (
    a !== null && t && o.push([`todo`, `Todo (${t.disponible})`]),
    (0, JSXRuntime.jsxs)(`div`, {
      className: `col caja-col`,
      children: [
        (0, JSXRuntime.jsxs)(wg, {
          clase: `caja-sentido`,
          children: [
            (0, JSXRuntime.jsx)(Button, {
              tono: e.modo === `load` ? `verde` : `plano`,
              clase: e.modo === `load` ? void 0 : `caja-off`,
              deshabilitado: !n || i || e.pendiente,
              onClick: () => {
                (e.setModo(`load`), e.limpiarLogro());
              },
              children: `▲ Cargar`,
            }),
            (0, JSXRuntime.jsx)(Button, {
              tono: e.modo === `unload` ? `ambar` : `plano`,
              clase: e.modo === `unload` ? void 0 : `caja-off`,
              deshabilitado: !r || i || e.pendiente,
              onClick: () => {
                (e.setModo(`unload`), e.limpiarLogro());
              },
              children: `▼ Descargar`,
            }),
          ],
        }),
        (0, JSXRuntime.jsxs)(`label`, {
          className: classNames(
            `campo`,
            e.errorMonto && `error`,
            `caja-monto-campo`,
          ),
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `campo-pre`,
              children: `ARS`,
            }),
            (0, JSXRuntime.jsx)(`input`, {
              id: `caja-monto`,
              className: `grande`,
              type: `text`,
              inputMode: `decimal`,
              autoFocus: !0,
              autoComplete: `off`,
              placeholder: `0,00`,
              "aria-label": `Monto`,
              "aria-invalid": e.errorMonto ? !0 : void 0,
              value: e.monto,
              onChange: (t) => e.setMonto(t.target.value.replace(`,`, `.`)),
            }),
          ],
        }),
        (0, JSXRuntime.jsx)(Dg, {
          opciones: o,
          activo: `todo`,
          onElegir: (t) =>
            t === `todo`
              ? a === null
                ? void 0
                : e.setMonto(a)
              : e.setMonto(t),
          clase: `caja-rapidos`,
          etiqueta: `Montos rápidos`,
        }),
        e.errorMonto &&
          (0, JSXRuntime.jsx)(`p`, {
            className: `caja-ayuda mal`,
            children: e.errorMonto,
          }),
        !e.errorMonto &&
          !e.alcanza &&
          (0, JSXRuntime.jsxs)(`p`, {
            className: `caja-ayuda mal`,
            children: [
              `No le alcanza: tiene `,
              t?.disponible ?? t?.balance,
              ` para retirar.`,
            ],
          }),
        !e.errorMonto &&
          e.alcanza &&
          e.quedaria &&
          (0, JSXRuntime.jsxs)(`p`, {
            className: `caja-ayuda`,
            children: [
              `Quedaría en `,
              (0, JSXRuntime.jsx)(`b`, {
                children: e.quedaria,
              }),
            ],
          }),
        i &&
          (0, JSXRuntime.jsxs)(`div`, {
            className: `caja-codigo`,
            children: [
              (0, JSXRuntime.jsx)(`p`, {
                children: `Retiro grande: escribí el código de tu app autenticadora. En la demo sirve cualquier código de 6 números.`,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `caja-codigo-fila`,
                children: [
                  (0, JSXRuntime.jsx)(`label`, {
                    className: `campo caja-codigo-campo`,
                    children: (0, JSXRuntime.jsx)(`input`, {
                      id: `caja-codigo`,
                      type: `text`,
                      inputMode: `numeric`,
                      autoFocus: !0,
                      autoComplete: `off`,
                      maxLength: 6,
                      placeholder: `000000`,
                      "aria-label": `Código de la app autenticadora`,
                      value: e.codigo,
                      onChange: (t) =>
                        e.setCodigo(t.target.value.replace(/\D/g, ``)),
                    }),
                  }),
                  (0, JSXRuntime.jsx)(Button, {
                    tono: `naranja`,
                    deshabilitado: e.codigo.length !== 6 || e.pendiente,
                    onClick: () => e.mover(e.codigo),
                    children: `Confirmar`,
                  }),
                ],
              }),
            ],
          }),
        (0, JSXRuntime.jsx)(Button, {
          tono: `naranja`,
          ancho: !0,
          clase: `caja-principal`,
          deshabilitado: !e.listo,
          onClick: () => e.mover(),
          children: e.pendiente
            ? `Mandando…`
            : `${e.esCarga ? `Cargar` : `Descargar`}${e.montoEscrito ? ` ${e.montoEscrito}` : ` — poné un monto`}`,
        }),
        (0, JSXRuntime.jsx)(Notice, {
          aviso: $b(e),
        }),
      ],
    })
  );
}
function ix({ caja: e, jugadasDelFallo: t }) {
  let n =
      e.jugadas === null ||
      (!e.fallaronJugadas && t !== null && e.jugadas === t),
    r;
  return (
    (r = n
      ? (0, JSXRuntime.jsx)(`p`, {
          className: `caja-texto`,
          children: `Trayendo las jugadas…`,
        })
      : e.fallaronJugadas
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `caja-texto mal`,
            children: `No se pudieron traer las jugadas. NO quiere decir que no haya jugado — probá de nuevo en un momento.`,
          })
        : !e.jugadas || e.jugadas.length === 0
          ? (0, JSXRuntime.jsx)(`p`, {
              className: `caja-texto`,
              children: `Este jugador todavía no apostó.`,
            })
          : (0, JSXRuntime.jsx)(`div`, {
              className: `caja-lista`,
              role: `list`,
              children: e.jugadas.slice(0, 40).map((e) =>
                (0, JSXRuntime.jsxs)(
                  `div`,
                  {
                    className: `caja-jugada`,
                    role: `listitem`,
                    children: [
                      (0, JSXRuntime.jsxs)(`div`, {
                        className: `caja-jugada-izq`,
                        children: [
                          (0, JSXRuntime.jsxs)(`div`, {
                            className: `caja-jugada-juego`,
                            children: [
                              (0, JSXRuntime.jsx)(`span`, {
                                children: e.juego,
                              }),
                              e.retenido === `esperando`
                                ? (0, JSXRuntime.jsx)(Tg, {
                                    tono: `ambar`,
                                    children: `FRENADO`,
                                  })
                                : null,
                            ],
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            className: `caja-jugada-sub`,
                            children: [
                              (0, JSXRuntime.jsxs)(`span`, {
                                children: [e.cuando, ` ·`],
                              }),
                              ` `,
                              (0, JSXRuntime.jsxs)(`span`, {
                                children: [`quedó en `, e.saldo],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `caja-monto`,
                        children: e.apostado,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        className: classNames(
                          `caja-monto`,
                          e.anulada ? `anulada` : e.gano ? `gano` : `nada`,
                        ),
                        children: e.cobrado,
                      }),
                    ],
                  },
                  e.wager,
                ),
              ),
            })),
    (0, JSXRuntime.jsxs)(`div`, {
      className: `col caja-col`,
      children: [
        r,
        (0, JSXRuntime.jsx)(Notice, {
          aviso: $b(e),
        }),
      ],
    })
  );
}
function ax({ caja: e }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `col caja-col`,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `col caja-nota-alta`,
        children: [
          (0, JSXRuntime.jsx)(`label`, {
            className: `campo caja-nota-campo`,
            children: (0, JSXRuntime.jsx)(`input`, {
              id: `caja-nota`,
              type: `text`,
              maxLength: 400,
              autoComplete: `off`,
              placeholder: `Anotar algo de este jugador (lo ve el equipo)`,
              "aria-label": `Nota sobre el jugador`,
              value: e.notaTexto,
              onChange: (t) => e.setNotaTexto(t.target.value),
              onKeyDown: (t) => {
                t.key === `Enter` && e.guardarNota();
              },
            }),
          }),
          (0, JSXRuntime.jsx)(Button, {
            tono: `naranja`,
            ancho: !0,
            deshabilitado: e.notaTexto.trim().length < 3 || e.pendiente,
            onClick: () => e.guardarNota(),
            children: `Guardar`,
          }),
          (0, JSXRuntime.jsx)(Notice, {
            aviso: $b(e),
          }),
        ],
      }),
      e.notas === null
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `caja-texto`,
            children: `Trayendo las notas…`,
          })
        : e.notas.length === 0
          ? (0, JSXRuntime.jsx)(`p`, {
              className: `caja-texto`,
              children: `Todavía no hay notas de este jugador.`,
            })
          : (0, JSXRuntime.jsx)(`div`, {
              className: `caja-lista caja-notas`,
              role: `list`,
              children: e.notas.map((e) =>
                (0, JSXRuntime.jsxs)(
                  `div`,
                  {
                    className: `caja-nota`,
                    role: `listitem`,
                    children: [
                      (0, JSXRuntime.jsx)(`p`, {
                        children: e.texto,
                      }),
                      (0, JSXRuntime.jsxs)(`span`, {
                        children: [e.autor, ` · `, e.cuando],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
    ],
  });
}
function ox({ caja: e }) {
  let { permisos: t, p: n } = usePanelContext(),
    r = t.puedeRevisar && !n.demo,
    i = e.jugador;
  if (!i)
    return (0, JSXRuntime.jsxs)(`div`, {
      className: `col caja-col`,
      children: [
        (0, JSXRuntime.jsx)(`p`, {
          className: `caja-texto`,
          children: `Sin datos de esta cuenta.`,
        }),
        (0, JSXRuntime.jsx)(Notice, {
          aviso: $b(e),
        }),
      ],
    });
  let a = i.status === `active`;
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `col caja-col`,
    children: [
      (0, JSXRuntime.jsxs)(Kg, {
        clase: `caja-datos`,
        children: [
          (0, JSXRuntime.jsx)(Gg, {
            titulo: `CARGÓ`,
            valor: i.ficha.cargado,
          }),
          (0, JSXRuntime.jsx)(Gg, {
            titulo: `RETIRÓ`,
            valor: i.ficha.retirado,
          }),
          (0, JSXRuntime.jsx)(Gg, {
            titulo: `APOSTÓ`,
            valor: i.ficha.apostado,
          }),
          (0, JSXRuntime.jsx)(Gg, {
            titulo: `RETIROS`,
            valor: String(i.ficha.retiros),
          }),
          (0, JSXRuntime.jsx)(Gg, {
            titulo: `ALTA`,
            valor: i.ficha.alta,
          }),
        ],
      }),
      i.ficha.alerta &&
        (0, JSXRuntime.jsxs)(`div`, {
          className: `caja-alerta`,
          children: [
            (0, JSXRuntime.jsx)(`i`, {}),
            (0, JSXRuntime.jsx)(`span`, {
              children: i.ficha.alerta,
            }),
          ],
        }),
      i.limite &&
        (0, JSXRuntime.jsx)(`p`, {
          className: `caja-limite`,
          children: i.limite,
        }),
      i.nota &&
        (0, JSXRuntime.jsxs)(`div`, {
          className: `caja-ultima`,
          children: [
            (0, JSXRuntime.jsx)(`span`, {
              className: `rotulo`,
              children: `ÚLTIMA NOTA`,
            }),
            (0, JSXRuntime.jsx)(`p`, {
              children: i.nota.texto,
            }),
          ],
        }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `col gap-chico`,
        children: [
          (0, JSXRuntime.jsxs)(wg, {
            clase: `caja-botones-cuenta`,
            children: [
              (0, JSXRuntime.jsx)(Button, {
                tono: i.frozen ? `verde` : `corte`,
                deshabilitado: e.pendiente,
                onClick: () => e.bloquearPlata(!i.frozen),
                children: i.frozen ? `Liberar la plata` : `Bloquear la plata`,
              }),
              (0, JSXRuntime.jsx)(Button, {
                tono: a ? `corte` : `verde`,
                deshabilitado: e.pendiente,
                onClick: () => e.cambiarCuenta(),
                children: a ? `Bloquear la cuenta` : `Reabrir la cuenta`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(Notice, {
            aviso: $b(e),
          }),
        ],
      }),
      r && !i.esStaff && i.playerId && i.gestionable === !0
        ? a
          ? (0, JSXRuntime.jsx)(
              Yb,
              {
                playerId: i.playerId,
                usuario: i.username,
              },
              i.playerId,
            )
          : (0, JSXRuntime.jsxs)(`p`, {
              className: `caja-texto ct-cerrada`,
              children: [
                `Con la cuenta `,
                i.status === `closed` ? `cerrada` : `bloqueada`,
                ` no se le cambia la contraseña: igual no puede entrar.`,
              ],
            })
        : null,
      (0, JSXRuntime.jsx)(
        sx,
        {
          p: n,
          j: i,
        },
        `cajero-${i.playerId ?? i.username}`,
      ),
    ],
  });
}
function sx({ p: e, j: t }) {
  let n = createDemoRouter(),
    [r, i] = (0, React.useTransition)(),
    [a, o] = (0, React.useState)(null),
    s = $g(e, t);
  if (!s || !t.playerId) return null;
  let c = t.playerId;
  function l(e, a) {
    if (r) return;
    let s = a
      ? `La comisión por ${t.username} pasa a ser de ${a}. ¿Seguro?`
      : `${t.username} queda sin cajero: nadie cobra comisión por él hasta que se le asigne uno. ¿Seguro?`;
    confirm(s) &&
      (o(null),
      i(async () => {
        let t = await gm(c, e).catch(() => ({
          ok: !1,
          mensaje: `No se pudo guardar. Probá de nuevo.`,
        }));
        (o({
          ok: t.ok,
          texto: t.mensaje,
        }),
          t.ok && n.refresh());
      }));
  }
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `caja-ultima`,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `rotulo-fila`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `rotulo`,
            children: `CAJERO DE ESTE JUGADOR`,
          }),
          (0, JSXRuntime.jsx)(Tg, {
            tono: t.cajero ? `naranja` : `gris`,
            children: t.cajero ?? `todavía de nadie`,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`p`, {
        className: `caja-texto`,
        children: `A esta persona se le paga la comisión sobre lo que el casino gane con este jugador.`,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `chips`,
        children: [
          s.opciones.map((e) => {
            let n = e.username === t.cajero;
            return (0, JSXRuntime.jsx)(
              Button,
              {
                chico: !0,
                tono: n ? `naranja` : `secundario`,
                deshabilitado: r || n,
                "aria-pressed": n,
                onClick: () => l(e.id, e.username),
                children: e.username,
              },
              e.id,
            );
          }),
          s.puedeSoltar
            ? (0, JSXRuntime.jsx)(Button, {
                chico: !0,
                tono: `plano`,
                deshabilitado: r,
                onClick: () => l(null, null),
                children: `Dejarlo sin cajero`,
              })
            : null,
        ],
      }),
      r
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `caja-texto`,
            children: `Guardando…`,
          })
        : null,
      (0, JSXRuntime.jsx)(Notice, {
        aviso: a,
      }),
    ],
  });
}
function initializePlayerManagement() {
  gb = (
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/eliminar-varios-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    }
  )(`eliminarVariosAction`);
  Sb = () => window.turnstile;
  Cb = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`;
  Eb =
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/jugador-alta-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    };
  Db = Eb(`reservarJugadorAction`);
  Ob = Eb(`confirmarJugadorAction`);
  kb = Eb(`cancelarJugadorAction`);
  Ab = [
    `Poné el usuario con el que va a entrar`,
    `Se crea con una contraseña provisoria`,
    `Pasale el mensaje: la primera vez elige la suya`,
  ];
  zb = (
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/jugador-password-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    }
  )(`nuevaContrasenaJugadorAction`);
  Bb = `casa-propia`;
  Gb = `¿Se la olvidó? Le generás una provisoria y al entrar elige la suya.`;
  qb = new WeakSet();
  Zb = [1e3, 2e3, 5e3, 1e4];
  Qb = [
    [`mover`, `Cargar / Descargar`],
    [`jugadas`, `Jugadas`],
    [`notas`, `Notas`],
    [`cuenta`, `La cuenta`],
  ];
}
export {
  gb,
  _b,
  yb,
  xb,
  wb,
  Tb,
  PlayersScreen,
  Vb,
  Wb,
  Xb,
  ex,
  initializePlayerManagement,
};
