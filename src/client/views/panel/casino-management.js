/**
 * panel / casino-management.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { qo, Qo } from "./demo-services.js";
import { xl } from "./cashier-rules.js";
import {
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  lm,
  um,
  dm,
  useCashierBusyEffect,
} from "./cashier-controls.js";
import { qm, Xh, Zh } from "./motion.js";
import {
  classNames,
  ag,
  Icon,
  Card,
  xg,
  Button,
  Tg,
  Dg,
  jg,
  Mg,
  Ng,
  Notice,
  Bg,
  Wg,
  Kg,
} from "./ui-components.js";
import { usePanelContext, B_ } from "./navigation.js";
import { db } from "./cash-transactions.js";
import { gb, _b, yb, xb, wb, Tb } from "./player-management.js";
import { mx, hx, gx } from "./staff-management.js";
let wx, Tx;
function Ex({ titulo: e, valor: t, color: n, onClick: r, title: i }) {
  let a = (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        (0, JSXRuntime.jsx)(`span`, {
          className: `dato-rot`,
          children: e,
        }),
        (0, JSXRuntime.jsxs)(`span`, {
          className: `dato-valor`,
          style: {
            color: ag(n),
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
    }),
    o = r
      ? (0, JSXRuntime.jsx)(`button`, {
          type: `button`,
          className: `dato tocable`,
          onClick: r,
          title: i,
          children: a,
        })
      : (0, JSXRuntime.jsx)(`div`, {
          className: `dato`,
          children: a,
        });
  return t.length > 14
    ? (0, JSXRuntime.jsx)(`div`, {
        className: `socios-largo`,
        children: o,
      })
    : o;
}
function Dx(e, t) {
  let n = [
    {
      clave: `panel`,
      grupo: null,
      renglones: [
        {
          rot: `LINK DE ADMIN`,
          valor: t.caja,
          tipo: `link`,
        },
        {
          rot: `USUARIO`,
          valor: e.usuario,
          tipo: `mono`,
        },
        {
          rot: `CONTRASEÑA`,
          valor: e.pass,
          tipo: `mono`,
        },
      ],
    },
  ];
  return (
    t.casino &&
      n.push({
        clave: `casino`,
        grupo: null,
        renglones: [
          {
            rot: `LINK JUGADOR`,
            valor: t.casino,
            tipo: `link`,
          },
        ],
      }),
    n
  );
}
function Ox({ creado: e, copiado: t, enlaces: n, onCopiar: r, aviso: i }) {
  let a = Dx(e, n);
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `socios-ficha socios-anim`,
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        className: `socios-ficha-tit`,
        children: `Panel y acceso creados`,
      }),
      (0, JSXRuntime.jsxs)(`p`, {
        className: `socios-ficha-baj`,
        children: [
          `Pasale este mensaje a `,
          (0, JSXRuntime.jsx)(`b`, {
            children: e.panel,
          }),
          `. Esta contraseña no vence sola: si se la dictás por chat, pedile que la cambie desde Mi seguridad.`,
        ],
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `socios-msj`,
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            className: `socios-msj-cab`,
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                className: `socios-msj-rot`,
                children: `MENSAJE PARA EL SOCIO`,
              }),
              (0, JSXRuntime.jsx)(Button, {
                tono: `texto`,
                chico: !0,
                icono: t ? void 0 : `copiar`,
                clase: `socios-copiar`,
                onClick: r,
                children: t ? `Copiado ✓` : `Copiar`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`div`, {
            className: `socios-msj-cuerpo`,
            children: a.map((e, t) =>
              (0, JSXRuntime.jsxs)(
                React.Fragment,
                {
                  children: [
                    t > 0
                      ? (0, JSXRuntime.jsx)(`i`, {
                          className: `socios-msj-sep`,
                        })
                      : null,
                    e.grupo
                      ? (0, JSXRuntime.jsx)(`span`, {
                          className: `socios-msj-grupo`,
                          children: e.grupo,
                        })
                      : null,
                    e.renglones.map((e) =>
                      (0, JSXRuntime.jsxs)(
                        `div`,
                        {
                          className: `socios-renglon`,
                          children: [
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `socios-renglon-rot`,
                              children: e.rot,
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: classNames(
                                `socios-renglon-val`,
                                e.tipo,
                              ),
                              children: e.valor,
                            }),
                          ],
                        },
                        e.rot,
                      ),
                    ),
                  ],
                },
                e.clave,
              ),
            ),
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(Notice, {
        aviso: i,
      }),
      (0, JSXRuntime.jsx)(`p`, {
        className: `socios-ficha-pie`,
        children: `Copiala ahora: esta contraseña no se guarda en ningún lado y no se puede volver a mostrar.`,
      }),
    ],
  });
}
function kx({
  n: e,
  visibles: t,
  todosElegidos: n,
  onTodos: r,
  onNinguno: i,
  onBorrar: a,
  onSalir: o,
  pendiente: s,
  borrando: c,
  bloqueado: l,
}) {
  let u = (0, React.useRef)(null);
  return (
    Xh(u, n, `casilla`),
    Zh(u, n),
    (0, JSXRuntime.jsxs)(`div`, {
      className: `socios-barra`,
      children: [
        (0, JSXRuntime.jsxs)(`div`, {
          className: `socios-barra-fila`,
          children: [
            (0, JSXRuntime.jsxs)(`button`, {
              type: `button`,
              className: `socios-todos`,
              role: `checkbox`,
              "aria-checked": n,
              disabled: l,
              onClick: () => (n ? i() : r()),
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  ref: u,
                  className: classNames(`casilla`, n && `on`),
                  "aria-hidden": `true`,
                  children: n
                    ? (0, JSXRuntime.jsx)(Icon, {
                        nombre: `tilde`,
                        tam: 14,
                        trazo: 3,
                      })
                    : null,
                }),
                (0, JSXRuntime.jsxs)(`span`, {
                  children: [
                    `Seleccionar todos `,
                    (0, JSXRuntime.jsxs)(`em`, {
                      children: [`(`, t, ` visibles)`],
                    }),
                  ],
                }),
              ],
            }),
            (0, JSXRuntime.jsxs)(`b`, {
              className: classNames(`socios-elegidos`, e > 0 && `on`),
              children: [e, ` `, e === 1 ? `elegido` : `elegidos`],
            }),
          ],
        }),
        (0, JSXRuntime.jsxs)(`div`, {
          className: `socios-barra-fila`,
          children: [
            (0, JSXRuntime.jsx)(Button, {
              tono: `rojo`,
              deshabilitado: s || e === 0 || l,
              clase: c ? `socios-corriendo` : void 0,
              onClick: a,
              children: c
                ? `Borrando…`
                : `Borrar ${e > 0 ? e : ``} paneles`.replace(/\s+/g, ` `),
            }),
            (0, JSXRuntime.jsx)(Button, {
              tono: `secundario`,
              deshabilitado: s || l,
              onClick: o,
              children: `Cancelar`,
            }),
          ],
        }),
      ],
    })
  );
}
function CasinoManagement({ casas: e, puedeMandar: t, siteKey: n, verDe: r }) {
  let {
      confirmar: i,
      preguntar: a,
      dialogoAbierto: o,
      conAltaLibre: s,
    } = usePanelContext(),
    [c, l] = (0, React.useTransition)();
  useCashierBusyEffect(c);
  let [u, d] = (0, React.useState)(null),
    [f, p] = (0, React.useState)(`fila`),
    [m, h] = (0, React.useState)(!1),
    [g, _] = (0, React.useState)(``),
    [v, y] = (0, React.useState)(``),
    [b, x] = (0, React.useState)(0),
    [S, C] = (0, React.useState)(null),
    [w, T] = (0, React.useState)(!1),
    [E, D] = (0, React.useState)(``),
    [O, ee] = (0, React.useState)(`todos`),
    [te, k] = (0, React.useState)(null),
    [A, j] = (0, React.useState)(``),
    [M, N] = (0, React.useState)(``),
    [P, F] = (0, React.useState)(null),
    ne = (0, React.useRef)(null),
    I = (e, t, n = `alta`) =>
      d({
        ok: e,
        text: e && !t.includes(`(demo)`) ? t + ` (demo)` : t,
        donde: n,
      }),
    L = (e) =>
      u && u.donde === e
        ? {
            ok: u.ok,
            texto: u.text,
          }
        : null,
    R = db(),
    re = c || o;
  (0, React.useEffect)(() => {
    if (!P) return;
    let e = requestAnimationFrame(() =>
      ne.current?.scrollIntoView({
        behavior: qm() ? `auto` : `smooth`,
        block: `start`,
      }),
    );
    return () => cancelAnimationFrame(e);
  }, [P]);
  function ie(e) {
    let { caja: t, casino: n } = mx();
    return `Link de ADMIN\n${t}\n\nUSUARIO: ${e.usuario}\nCONTRASEÑA: ${e.pass}${n ? `\n\nLink JUGADOR\n${n}` : ``}`;
  }
  function ae() {
    if (c) return;
    let e = g.trim();
    if (e.length < 2)
      return I(!1, `El nombre del socio va de 2 a 40 caracteres.`);
    let t = xl(e);
    if (!t)
      return I(
        !1,
        `Con "${e}" no se puede armar un usuario. Poné un nombre de 3 a 24 letras o números (por ejemplo: test1).`,
      );
    let r = qo(),
      i = Tb(r);
    if (i) return I(!1, i);
    let a = Qo();
    if (n && !v) return I(!1, `Marcá la casilla de verificación.`);
    (p(`alta`),
      l(async () => {
        (d(null), R.limpiar());
        let n = await Wp(e).catch(() => null);
        if (!n) return I(!1, `No se pudo crear. Probá de nuevo.`);
        if (!n.ok || !n.id)
          return I(!1, n?.mensaje ?? `No se pudo crear el panel.`);
        let i = n.id,
          o = async (n) => {
            (await Kp(i).catch(() => null))?.ok
              ? I(!1, `${n} El panel no quedó creado: probá de nuevo.`)
              : I(
                  !1,
                  `${n} OJO: el panel ${e} quedó creado a medias. Andá a Equipo, sacá la cuenta de ${t} que quedó sin estrenar, y después borralo desde acá.`,
                );
          },
          s = await lm(t, `root`, i).catch(() => null);
        if (!s) return o(`No se pudo crear la cuenta.`);
        if (!s.ok) return o(s.mensaje);
        let c = xb(`http://demo.invalid`, `demo`, {
            auth: {
              persistSession: !1,
              autoRefreshToken: !1,
              detectSessionInUrl: !1,
            },
          }),
          { error: l } = await c.auth.signUp({
            email: s.correo,
            password: r,
            options: {
              data: {
                username: t,
              },
              ...(v && {
                captchaToken: v,
              }),
            },
          });
        if ((y(``), x((e) => e + 1), await c.auth.signOut().catch(() => {}), l))
          return (
            await dm(s.adminId).catch(() => {}),
            o(
              /captcha/i.test(l.message)
                ? `Venció la verificación anti-robot.`
                : `No se pudo crear la cuenta.`,
            )
          );
        let u = await um(s.adminId, a).catch(() => null);
        C({
          usuario: t,
          pass: a,
          rol: `Dueño`,
          panel: e,
        });
        let f = `El panel ${e} quedó creado y el usuario ${t} quedó tomado. Guardá la contraseña de abajo por si la cuenta quedó activa; si no entra, creale otra desde Equipo con OTRO nombre y avisá para revisar la que quedó a medias.`;
        if (!u)
          return I(!1, `No se pudo terminar de configurar la cuenta. ${f}`);
        if (!u.ok) return I(!1, `${u.mensaje} ${f}`);
        (T(!1),
          I(
            !0,
            `Listo: ${e} ya tiene su panel y su acceso. Pasale el mensaje de abajo y cargale fichas cuando te transfiera.`,
          ),
          _(``));
      }));
  }
  function oe(e) {
    !A.trim() ||
      c ||
      (p(`fila`),
      h(!0),
      l(async () => {
        (d(null), R.limpiar());
        let t = await Jp(e, A, M).catch(() => null);
        if (!t) return R.decirEn(e, !1, `No se pudo guardar. Probá de nuevo.`);
        (R.decirEn(e, t.ok, t.mensaje), t.ok && (j(``), N(``), k(null)));
      }));
  }
  function se(e) {
    (p(`fila`),
      h(!1),
      l(async () => {
        (d(null), R.limpiar());
        let t = await qp(e.id).catch(() => null);
        if (!t?.ok) return R.decirEn(e.id, !1, `No se pudo traer el detalle.`);
        F({
          casa: e.nombre,
          movimientos: t.movimientos,
        });
      }));
  }
  async function ce(e) {
    (e.activa &&
      !(await i({
        texto: `Apagar a ${e.nombre} deja a sus ${e.personal} usuarios afuera del panel al instante. ¿Seguro?`,
      }))) ||
      (p(`fila`),
      h(!1),
      l(async () => {
        (d(null), R.limpiar());
        let t = await Gp(e.id, !e.activa).catch(() => null);
        R.decirEn(e.id, t?.ok ?? !1, t?.mensaje ?? `No se pudo.`);
      }));
  }
  async function le(e) {
    if (c) return;
    let t = await a({
      texto: [
        `Borrar el panel de ${e.nombre}. Esto NO se deshace.`,
        ``,
        `Sólo se puede si está vacío: sin gente, sin jugadores, sin movimientos de fichas y en cero.`,
        `Si ya tiene historial, apagalo en vez de borrarlo — su gente queda afuera y no se pierde nada.`,
        ``,
        `Escribí ${e.nombre} para confirmar.`,
      ].join(`
`),
      valor: ``,
      peligro: !0,
    });
    if (t !== null) {
      if ((h(!1), t.trim().toLowerCase() !== e.nombre.trim().toLowerCase())) {
        (d(null),
          R.decirEn(e.id, !1, `No se borró: había que escribir ${e.nombre}.`));
        return;
      }
      (p(`fila`),
        l(async () => {
          (d(null), R.limpiar());
          let t = await Kp(e.id).catch(() => null);
          (R.decirEn(
            e.id,
            t?.ok ?? !1,
            t?.mensaje ?? `No se pudo borrar. Probá de nuevo.`,
          ),
            t?.ok &&
              (F((t) => (t && t.casa === e.nombre ? null : t)), k(null)));
        }));
    }
  }
  let ue = (0, React.useMemo)(() => {
      let t = E.trim().toLowerCase();
      return e
        .filter((e) => !e.esMadre)
        .filter((e) => (t ? e.nombre.toLowerCase().includes(t) : !0))
        .filter((e) =>
          O === `prendidos` ? e.activa : O === `apagados` ? !e.activa : !0,
        );
    }, [e, E, O]),
    de = e.filter((e) => !e.esMadre).length,
    fe = R.flotante((e) => ue.some((t) => t.id === e)),
    pe = (0, React.useMemo)(() => ue.map((e) => e.id), [ue]),
    me = _b(pe),
    he = (t) => e.find((e) => e.id === t)?.nombre ?? t;
  async function ge() {
    if (c || me.elegidos.size === 0) return;
    let e = [...me.elegidos];
    (await hx(
      a,
      e.map(he),
      `paneles`,
      `Sólo se borran los VACÍOS: los que tengan gente, jugadores, movimientos o fichas se saltean, y al final te digo cuáles.`,
    )) &&
      (p(`masivo`),
      l(async () => {
        R.limpiar();
        let t = yb(await gb(`casas`, e).catch(() => null), he, `paneles`);
        (I(t.ok, t.text, `masivo`), me.salir(), F(null), k(null));
      }));
  }
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      fe
        ? (0, JSXRuntime.jsx)(B_, {
            aviso: {
              ok: fe.ok,
              texto: fe.text,
            },
            onCerrar: R.limpiar,
          })
        : null,
      t
        ? (0, JSXRuntime.jsxs)(Card, {
            clase: `socios-alta`,
            i: 1,
            children: [
              (0, JSXRuntime.jsx)(Wg, {
                titulo: `NUEVO SOCIO`,
                pasos: Tx,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `socios-alta-fila`,
                children: [
                  (0, JSXRuntime.jsx)(Ng, {
                    id: `socios-nombre`,
                    placeholder: `Nombre del socio (ej. TEST 1)`,
                    valor: g,
                    onCambiar: _,
                    onEnter: ae,
                    max: 40,
                  }),
                  (0, JSXRuntime.jsx)(Button, {
                    tono: `naranja`,
                    ancho: !0,
                    clase: classNames(`socios-crear`, c && `socios-corriendo`),
                    deshabilitado: re,
                    onClick: ae,
                    children:
                      c && f === `alta` ? `Creando…` : `Crear panel y acceso`,
                  }),
                ],
              }),
              (0, JSXRuntime.jsx)(Notice, {
                aviso: L(`alta`),
              }),
              n
                ? (0, JSXRuntime.jsx)(`div`, {
                    className: `socios-turnstile`,
                    children: (0, JSXRuntime.jsx)(wb, {
                      siteKey: n,
                      resetKey: b,
                      onToken: y,
                      onUnavailable: () =>
                        I(
                          !1,
                          `No cargó la verificación anti-robot. Desactivá el bloqueador de publicidad y recargá la página.`,
                        ),
                    }),
                  })
                : null,
              S
                ? (0, JSXRuntime.jsx)(
                    Ox,
                    {
                      creado: S,
                      copiado: w,
                      enlaces: mx(),
                      aviso: L(`copiar`),
                      onCopiar: () => {
                        navigator.clipboard?.writeText(ie(S)).then(
                          () => {
                            (T(!0), setTimeout(() => T(!1), 2200));
                          },
                          () =>
                            I(
                              !1,
                              `No se pudo copiar. Marcalo con el mouse y copialo a mano.`,
                              `copiar`,
                            ),
                        );
                      },
                    },
                    S.usuario,
                  )
                : null,
            ],
          })
        : null,
      de > 0
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `socios-busca entra e2`,
            children: [
              (0, JSXRuntime.jsx)(Mg, {
                id: `socios-q`,
                placeholder: `Buscar socio por nombre`,
                valor: E,
                onCambiar: (e) => {
                  (D(e), R.limpiar());
                },
                contador: `${ue.length} de ${de}`,
              }),
              (0, JSXRuntime.jsx)(Dg, {
                opciones: wx,
                activo: O,
                onElegir: (e) => {
                  (ee(e), R.limpiar());
                },
                clase: `socios-chips`,
                etiqueta: `Filtrar socios`,
              }),
              t && !me.modo
                ? (0, JSXRuntime.jsx)(Button, {
                    tono: `secundario`,
                    clase: `socios-selbtn`,
                    deshabilitado: o,
                    onClick: () => me.setModo(!0),
                    children: `Seleccionar varios`,
                  })
                : null,
            ],
          })
        : null,
      me.modo
        ? (0, JSXRuntime.jsx)(kx, {
            n: me.elegidos.size,
            visibles: pe.length,
            todosElegidos: me.todosElegidos,
            onTodos: me.todos,
            onNinguno: me.ninguno,
            onBorrar: () => void ge(),
            onSalir: me.salir,
            pendiente: c,
            borrando: c && f === `masivo`,
            bloqueado: o,
          })
        : null,
      (0, JSXRuntime.jsx)(Notice, {
        aviso: L(`masivo`),
      }),
      ue.length === 0
        ? (0, JSXRuntime.jsx)(Card, {
            i: 3,
            children: (0, JSXRuntime.jsxs)(`div`, {
              className: `socios-vacio`,
              children: [
                (0, JSXRuntime.jsx)(`span`, {
                  className: `rotulo`,
                  children:
                    de === 0
                      ? `TODAVÍA NO HAY SOCIOS`
                      : `NINGUNO CON ESE FILTRO`,
                }),
                (0, JSXRuntime.jsx)(`p`, {
                  children:
                    de === 0
                      ? `Cuando crees uno, aparece acá con sus fichas y su gente. Cada socio tiene su panel y no ve nada de los tuyos.`
                      : `Probá con otro nombre o sacá el filtro.`,
                }),
              ],
            }),
          })
        : ue.map((e, n) => {
            let i = te === e.id,
              a = gx(R.de(e.id));
            return (0, JSXRuntime.jsxs)(
              Card,
              {
                clase: classNames(
                  `socios-tarjeta`,
                  !e.activa && `socios-apagado`,
                ),
                i: 3 + n,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `socios-cab`,
                    children: [
                      me.modo
                        ? (0, JSXRuntime.jsx)(jg, {
                            marcada: me.elegidos.has(e.id),
                            onCambiar: () => me.alternar(e.id),
                            label: `Elegir el panel de ${e.nombre}`,
                          })
                        : null,
                      (0, JSXRuntime.jsx)(Bg, {
                        nombre: e.nombre,
                      }),
                      (0, JSXRuntime.jsx)(`b`, {
                        className: `socios-nombre`,
                        children: e.nombre,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `socios-esp`,
                      }),
                      (0, JSXRuntime.jsxs)(`span`, {
                        className: `socios-cab-der`,
                        children: [
                          e.activa
                            ? null
                            : (0, JSXRuntime.jsx)(Tg, {
                                tono: `rojo`,
                                children: `APAGADO`,
                              }),
                          e.permiteRojo
                            ? (0, JSXRuntime.jsx)(Tg, {
                                tono: `ambar`,
                                children: `PUEDE IR EN ROJO`,
                              })
                            : null,
                          e.cupoNegativo
                            ? (0, JSXRuntime.jsx)(Tg, {
                                tono: `rojo`,
                                children: `EN ROJO`,
                              })
                            : null,
                          (0, JSXRuntime.jsxs)(`span`, {
                            className: `socios-desde`,
                            children: [`desde `, e.desde],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(Kg, {
                    clase: `socios-datos`,
                    children: [
                      (0, JSXRuntime.jsx)(Ex, {
                        titulo: `FICHAS`,
                        valor: e.cupo,
                        color: e.cupoNegativo ? `rojo` : `tx`,
                      }),
                      (0, JSXRuntime.jsx)(Ex, {
                        titulo: `EN SUS JUGADORES`,
                        valor: e.enJugadores,
                        color: `var(--tx2)`,
                      }),
                      (0, JSXRuntime.jsx)(Ex, {
                        titulo: `JUGADORES`,
                        valor: String(e.jugadores),
                        color: `var(--tx2)`,
                        title: `Ver jugadores de este panel`,
                        onClick: r ? () => s(() => r(e, `jugadores`)) : void 0,
                      }),
                      (0, JSXRuntime.jsx)(Ex, {
                        titulo: `SU EQUIPO`,
                        valor: String(e.personal),
                        color: `var(--tx2)`,
                        title: `Ver su equipo de este panel`,
                        onClick: r ? () => s(() => r(e, `equipo`)) : void 0,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `socios-acciones`,
                    children: [
                      t
                        ? (0, JSXRuntime.jsx)(Button, {
                            tono: i ? `secundario` : `naranja`,
                            clase: `socios-ancho`,
                            deshabilitado: re,
                            onClick: () => {
                              (k(i ? null : e.id), j(``), N(``));
                            },
                            children: i ? `Cancelar` : `Cargar fichas`,
                          })
                        : null,
                      (0, JSXRuntime.jsx)(Button, {
                        tono: `secundario`,
                        clase: `socios-ancho`,
                        deshabilitado: re,
                        onClick: () => se(e),
                        children: `Ver movimientos`,
                      }),
                      t
                        ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                            children: [
                              e.activa
                                ? (0, JSXRuntime.jsx)(Button, {
                                    tono: `corte`,
                                    deshabilitado: re,
                                    onClick: () => void ce(e),
                                    children: `Apagar panel`,
                                  })
                                : (0, JSXRuntime.jsx)(Button, {
                                    tono: `verde`,
                                    deshabilitado: re,
                                    onClick: () => void ce(e),
                                    children: `Prender panel`,
                                  }),
                              (0, JSXRuntime.jsx)(Button, {
                                tono: `corte`,
                                deshabilitado: re,
                                titulo: `Borrar el panel de ${e.nombre}`,
                                onClick: () => void le(e),
                                children: `Borrar`,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  a && !(i && m)
                    ? (0, JSXRuntime.jsx)(Notice, {
                        aviso: a,
                      })
                    : null,
                  i
                    ? (0, JSXRuntime.jsxs)(`div`, {
                        className: `socios-carga`,
                        children: [
                          (0, JSXRuntime.jsx)(`p`, {
                            className: `texto-chico`,
                            children: `Poné lo que te transfirió. Para corregir un error escribí el monto con un menos adelante (ej. −50.000) y el motivo: queda anotado y no se puede borrar.`,
                          }),
                          (0, JSXRuntime.jsxs)(`div`, {
                            className: `socios-carga-fila`,
                            children: [
                              (0, JSXRuntime.jsx)(Ng, {
                                id: `socios-monto`,
                                placeholder: `Monto`,
                                valor: A,
                                onCambiar: j,
                                modo: `decimal`,
                                clase: `socios-monto`,
                              }),
                              (0, JSXRuntime.jsx)(Ng, {
                                id: `socios-motivo`,
                                placeholder: `Motivo (opcional)`,
                                valor: M,
                                onCambiar: N,
                                max: 200,
                                clase: `socios-motivo`,
                              }),
                              (0, JSXRuntime.jsx)(Button, {
                                tono: `naranja`,
                                clase: `socios-cargar-ok`,
                                deshabilitado: c || !A.trim() || o,
                                onClick: () => oe(e.id),
                                children: `Cargar`,
                              }),
                            ],
                          }),
                          a && m
                            ? (0, JSXRuntime.jsx)(Notice, {
                                aviso: a,
                              })
                            : null,
                        ],
                      })
                    : null,
                ],
              },
              e.id,
            );
          }),
      P
        ? (0, JSXRuntime.jsxs)(
            `section`,
            {
              ref: ne,
              id: `socios-movs`,
              className: `tarjeta socios-movs-tarjeta socios-anim`,
              children: [
                (0, JSXRuntime.jsxs)(`div`, {
                  className: `socios-movs-cab`,
                  children: [
                    (0, JSXRuntime.jsxs)(`span`, {
                      className: `rotulo`,
                      children: [
                        `MOVIMIENTOS DE LAS FICHAS · `,
                        P.casa.toUpperCase(),
                      ],
                    }),
                    (0, JSXRuntime.jsx)(Button, {
                      tono: `secundario`,
                      chico: !0,
                      onClick: () => F(null),
                      children: `Cerrar`,
                    }),
                  ],
                }),
                P.movimientos.length === 0
                  ? (0, JSXRuntime.jsx)(`p`, {
                      className: `socios-movs-vacio`,
                      children: `Todavía no hay movimientos.`,
                    })
                  : (0, JSXRuntime.jsx)(`div`, {
                      className: `socios-movs`,
                      children: P.movimientos.map((e, t) =>
                        (0, JSXRuntime.jsxs)(
                          `div`,
                          {
                            className: `socios-mov socios-anim`,
                            style: {
                              animationDelay: `${(t * 0.05).toFixed(2)}s`,
                            },
                            children: [
                              (0, JSXRuntime.jsxs)(`div`, {
                                className: `socios-mov-l`,
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `socios-mov-cuando`,
                                    children: e.cuando,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `socios-mov-tipo`,
                                    children: e.tipo,
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`div`, {
                                className: `socios-mov-l`,
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `socios-mov-monto`,
                                    style: {
                                      color: e.monto.startsWith(`−`)
                                        ? `var(--rojo)`
                                        : `var(--verde)`,
                                    },
                                    children: (0, JSXRuntime.jsx)(xg, {
                                      texto: e.monto,
                                    }),
                                  }),
                                  (0, JSXRuntime.jsxs)(`span`, {
                                    className: `socios-mov-queda`,
                                    children: [`queda `, e.saldo],
                                  }),
                                  e.quien
                                    ? (0, JSXRuntime.jsxs)(`span`, {
                                        className: `socios-mov-quien`,
                                        children: [`· `, e.quien],
                                      })
                                    : null,
                                ],
                              }),
                              e.motivo
                                ? (0, JSXRuntime.jsx)(`div`, {
                                    className: `socios-mov-motivo`,
                                    children: e.motivo,
                                  })
                                : null,
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
              ],
            },
            P.casa,
          )
        : null,
    ],
  });
}
function initializeCasinoManagement() {
  wx = [
    [`todos`, `Todos`],
    [`prendidos`, `Prendidos`],
    [`apagados`, `Apagados`],
  ];
  Tx = [
    `Poné el nombre`,
    `Se crea el panel con su usuario y contraseña`,
    `Copiá el mensaje y cargale fichas cuando te transfiera`,
  ];
}
export { CasinoManagement, initializeCasinoManagement };
