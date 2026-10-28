/**
 * panel / staff-management.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { qo, Qo, rs, ss } from "./demo-services.js";
import { rl, bl } from "./cashier-rules.js";
import { Yd, Rp } from "./demo-api.js";
import {
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  useCashierBusyEffect,
} from "./cashier-controls.js";
import { Uh } from "./motion.js";
import {
  classNames,
  Icon,
  Card,
  _g,
  Button,
  wg,
  Tg,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Ig,
  Notice,
  Lg,
  Bg,
  Wg,
} from "./ui-components.js";
import { Zg, usePanelContext, B_ } from "./navigation.js";
import { db } from "./cash-transactions.js";
import { gb, _b, yb, xb, wb, Tb, Vb, Wb, Xb } from "./player-management.js";
let cx, lx, ux, dx, fx, px;
function mx() {
  if (typeof window > `u`)
    return {
      caja: ``,
      casino: ``,
    };
  let { origin: e, hostname: t, protocol: n } = globalThis.__demoSitio,
    r = t.split(`.`),
    i = r.length > 2 ? `${n}//${r.slice(1).join(`.`)}` : ``;
  return {
    caja: `${e}/staff`,
    casino: i,
  };
}
async function hx(e, t, n, r) {
  let i =
      t.slice(0, 12).join(`, `) +
      (t.length > 12 ? ` y ${t.length - 12} más` : ``),
    a = await e({
      texto: [
        `Vas a borrar ${t.length} ${n}:`,
        i,
        ``,
        r,
        ``,
        `Esto NO se deshace. Escribí BORRAR para confirmar.`,
      ].join(`
`),
      valor: ``,
      peligro: !0,
    });
  return a !== null && a.trim().toUpperCase() === `BORRAR`;
}
function gx(e) {
  return e
    ? {
        ok: e.ok,
        texto: e.text,
      }
    : null;
}
function _x({
  clave: e,
  opciones: t,
  valor: n,
  onElegir: r,
  buscarQue: i = `Buscar panel`,
  sinContar: a,
  pastillasHasta: o = 6,
}) {
  return (0, JSXRuntime.jsx)(Ig, {
    clave: e,
    opciones: t,
    valor: n,
    onElegir: r,
    buscarQue: i,
    sinContar: a,
    pastillasHasta: o,
    cuantos: `paneles`,
    vacio: `Ningún panel se llama así.`,
    etiqueta: `Paneles`,
  });
}
function vx({ roles: e, rol: t, onElegir: n }) {
  let r = (0, React.useRef)(null);
  return (
    Uh(
      r,
      e.findIndex((e) => e.valor === t),
    ),
    (0, JSXRuntime.jsx)(`div`, {
      ref: r,
      className: `eq-roles`,
      role: `radiogroup`,
      "aria-label": `Qué va a poder hacer`,
      children: e.map((e) => {
        let r = t === e.valor;
        return (0, JSXRuntime.jsxs)(
          `button`,
          {
            type: `button`,
            role: `radio`,
            "aria-checked": r,
            className: classNames(`eq-rol`, r && `on`),
            onClick: () => n(e.valor),
            children: [
              (0, JSXRuntime.jsxs)(`span`, {
                className: `eq-rol-cab`,
                children: [
                  (0, JSXRuntime.jsx)(`i`, {
                    className: `eq-rol-punto`,
                  }),
                  (0, JSXRuntime.jsx)(`b`, {
                    children: e.nombre,
                  }),
                  e.valor === `root`
                    ? (0, JSXRuntime.jsx)(Tg, {
                        tono: `rojo`,
                        children: `LA LLAVE DE TODO`,
                      })
                    : null,
                ],
              }),
              (0, JSXRuntime.jsx)(`span`, {
                className: `eq-rol-desc`,
                children: e.hace,
              }),
            ],
          },
          e.valor,
        );
      }),
    })
  );
}
function yx({ rot: e, valor: t, tipo: n }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `eq-renglon`,
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        children: e,
      }),
      (0, JSXRuntime.jsx)(`b`, {
        className: n,
        children: t,
      }),
    ],
  });
}
function bx({ creado: e, copiado: t, enlaces: n, onCopiar: r, aviso: i }) {
  let a = e.esDeLaMadre
    ? ` — la primera vez lo obliga a cambiar la contraseña.`
    : `. Esta contraseña no vence sola: si se la dictás por chat, pedile que la cambie desde Mi seguridad.`;
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `eq-ficha`,
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        className: `eq-ficha-tit`,
        children: `Acceso creado`,
      }),
      (0, JSXRuntime.jsxs)(`p`, {
        className: `eq-ficha-baj`,
        children: [
          (0, JSXRuntime.jsx)(`b`, {
            children: e.usuario,
          }),
          ` ya puede entrar como `,
          e.rol,
          ` a `,
          e.panel,
          a,
        ],
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `eq-msj`,
        children: [
          (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-msj-cab`,
            children: [
              (0, JSXRuntime.jsx)(`span`, {
                className: `rotulo`,
                children: `MENSAJE PARA PASARLE`,
              }),
              (0, JSXRuntime.jsx)(Button, {
                tono: `texto`,
                chico: !0,
                icono: `copiar`,
                clase: `eq-copiar`,
                onClick: r,
                children: t ? `Copiado ✓` : `Copiar`,
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-msj-cuerpo`,
            children: [
              (0, JSXRuntime.jsx)(yx, {
                rot: `LINK DE ADMIN`,
                valor: n.caja,
                tipo: `link`,
              }),
              (0, JSXRuntime.jsx)(`i`, {
                className: `eq-msj-sep`,
              }),
              (0, JSXRuntime.jsx)(yx, {
                rot: `USUARIO`,
                valor: e.usuario,
                tipo: `mono`,
              }),
              (0, JSXRuntime.jsx)(yx, {
                rot: `CONTRASEÑA`,
                valor: e.pass,
                tipo: `mono`,
              }),
              n.casino
                ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                    children: [
                      (0, JSXRuntime.jsx)(`i`, {
                        className: `eq-msj-sep`,
                      }),
                      (0, JSXRuntime.jsx)(yx, {
                        rot: `LINK JUGADOR`,
                        valor: n.casino,
                        tipo: `link`,
                      }),
                    ],
                  })
                : null,
            ],
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(Notice, {
        aviso: i,
      }),
      (0, JSXRuntime.jsx)(`p`, {
        className: `eq-ficha-pie`,
        children: `Copiala ahora: esta contraseña no se guarda en ningún lado y no se puede volver a mostrar.`,
      }),
    ],
  });
}
function xx({
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
  let u = () => (n ? i() : r());
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `eq-barra`,
    role: `region`,
    "aria-label": `Selección`,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `eq-barra-fila`,
        children: [
          (0, JSXRuntime.jsx)(jg, {
            marcada: n,
            onCambiar: u,
            label: `Seleccionar todos`,
            deshabilitado: l,
          }),
          (0, JSXRuntime.jsxs)(`button`, {
            type: `button`,
            className: `eq-barra-todos`,
            onClick: u,
            disabled: l,
            children: [
              `Seleccionar todos `,
              (0, JSXRuntime.jsxs)(`span`, {
                children: [`(`, t, ` visibles)`],
              }),
            ],
          }),
          (0, JSXRuntime.jsxs)(`b`, {
            className: classNames(`eq-barra-n`, e > 0 && `on`),
            children: [e, ` `, e === 1 ? `elegido` : `elegidos`],
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(wg, {
        children: [
          (0, JSXRuntime.jsx)(Button, {
            tono: e > 0 ? `rojo` : `secundario`,
            deshabilitado: s || e === 0 || l,
            clase: c ? `eq-creando` : void 0,
            onClick: a,
            children: c
              ? `Borrando…`
              : `Borrar ${e > 0 ? e : ``} personas`.replace(/\s+/g, ` `),
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
  });
}
function Sx({
  p: e,
  i: t,
  vos: n,
  puedeBorrar: r,
  casaPropia: i,
  bloqueado: a,
  roles: o,
  aviso: s,
  seleccion: c,
  onRol: l,
  onAcceso: u,
  onBorrar: d,
  contrasena: f,
  conRango: p = !0,
  puedeAcceso: m = !0,
}) {
  let h = e.activo
      ? e.tieneSegundoFactor
        ? null
        : (0, JSXRuntime.jsx)(Tg, {
            tono: `ambar`,
            children: `Sin autenticador`,
          })
      : (0, JSXRuntime.jsx)(Tg, {
          tono: `gris`,
          children: `Sin acceso`,
        }),
    g = n ? `No podés elegirte a vos mismo` : `Elegir a ${e.username}`;
  return (0, JSXRuntime.jsxs)(Card, {
    clase: `eq-persona`,
    i: t,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: classNames(`eq-quien`, !e.activo && `apagada`),
        children: [
          c.modo
            ? (0, JSXRuntime.jsx)(`span`, {
                className: classNames(`eq-marca`, n && `no`),
                title: g,
                children: (0, JSXRuntime.jsx)(jg, {
                  marcada: c.marcada,
                  onCambiar: c.alternar,
                  label: g,
                  deshabilitado: n,
                }),
              })
            : (0, JSXRuntime.jsx)(Bg, {
                nombre: e.username,
                tam: 42,
              }),
          (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-quien-txt`,
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-nombre`,
                children: [
                  (0, JSXRuntime.jsx)(`b`, {
                    children: e.username,
                  }),
                  n
                    ? (0, JSXRuntime.jsx)(Tg, {
                        tono: `gris`,
                        children: `VOS`,
                      })
                    : null,
                  h
                    ? (0, JSXRuntime.jsx)(`span`, {
                        className: `eq-chip`,
                        children: h,
                      })
                    : null,
                ],
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-entra`,
                children: [
                  `entra a `,
                  (0, JSXRuntime.jsx)(`span`, {
                    children: e.casa ?? `${i} (el tuyo)`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      p
        ? (0, JSXRuntime.jsx)(`div`, {
            className: classNames(`eq-seg`, !e.activo && `apagada`),
            children: (0, JSXRuntime.jsx)(kg, {
              opciones: o.map((e) => [e.valor, e.nombre, ux[e.valor]]),
              activo: e.role,
              onElegir: l,
              deshabilitado: n || a,
              etiqueta: `Qué puede hacer ${e.username}`,
            }),
          })
        : null,
      (0, JSXRuntime.jsxs)(`div`, {
        className: classNames(`eq-acceso`, !e.activo && `sin`),
        children: [
          n || !m
            ? null
            : (0, JSXRuntime.jsx)(Ag, {
                on: e.activo,
                onCambiar: u,
                deshabilitado: a,
                label: e.activo
                  ? `Sacarle el acceso a ${e.username}`
                  : `Darle acceso a ${e.username}`,
              }),
          (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-acceso-txt`,
            children: [
              (0, JSXRuntime.jsx)(`b`, {
                children: e.activo ? `Puede entrar` : `No puede entrar`,
              }),
              (0, JSXRuntime.jsxs)(`span`, {
                children: [`desde el `, e.desde],
              }),
            ],
          }),
          r && !n
            ? (0, JSXRuntime.jsx)(`button`, {
                type: `button`,
                className: `eq-tacho`,
                onClick: d,
                disabled: a,
                "aria-label": `Eliminar a ${e.username}`,
                title: `Eliminar a ${e.username}`,
                children: (0, JSXRuntime.jsx)(Icon, {
                  nombre: `tacho`,
                  tam: 18,
                  trazo: 2,
                }),
              })
            : null,
        ],
      }),
      f
        ? (0, JSXRuntime.jsx)(`div`, {
            className: `ct-persona-sep`,
            children: (0, JSXRuntime.jsx)(Xb, {
              usuario: e.username,
              puede: f.puede,
              generando: f.generando,
              bloqueado: a,
              nueva: f.nueva,
              onGenerar: f.onGenerar,
            }),
          })
        : null,
      (0, JSXRuntime.jsx)(Notice, {
        aviso: s,
      }),
    ],
  });
}
function StaffManagement({
  personal: e,
  casas: t,
  siteKey: n,
  rolesPermitidos: r,
  casaNombre: i,
  yoId: a,
  esMadre: o,
  filtroPanelInicial: s,
  limpiarFiltro: c,
  miRol: l,
  capacidades: u,
}) {
  let {
      confirmar: d,
      preguntar: f,
      dialogoAbierto: p,
      conAltaLibre: m,
      p: h,
    } = usePanelContext(),
    g = l ?? (h.esDueno ? `root` : h.isAdmin ? `admin` : `operator`),
    {
      puedeCrearCajeros: _,
      puedeTocarAcceso: v,
      puedeCambiarRol: y,
      puedeBorrarPersonal: b,
      cruzaCasas: x,
    } = u,
    S = (0, React.useMemo)(() => Zg(e, u), [e, u]),
    [C, w] = (0, React.useTransition)(),
    [T, E] = (0, React.useState)(!1);
  useCashierBusyEffect(C || T);
  let [D, O] = (0, React.useState)(null),
    [ee, te] = (0, React.useState)(`fila`),
    [k, A] = (0, React.useState)(``),
    [j, M] = (0, React.useState)(`operator`),
    [N, P] = (0, React.useState)(``),
    [F, ne] = (0, React.useState)(``),
    [I, L] = (0, React.useState)(0),
    [R, re] = (0, React.useState)(null),
    [ie, ae] = (0, React.useState)(!1),
    [oe, se] = (0, React.useState)(s ?? ``),
    [ce, le] = (0, React.useState)(``),
    [ue, de] = (0, React.useState)({}),
    [fe, pe] = (0, React.useState)(null);
  function me(e) {
    de((t) => {
      if (!e.some((e) => e in t)) return t;
      let n = {
        ...t,
      };
      for (let t of e) delete n[t];
      return n;
    });
  }
  let he = (e, t, n = `alta`) =>
      O({
        ok: e,
        text: t,
        donde: n,
      }),
    ge = (e) =>
      D && D.donde === e
        ? {
            ok: D.ok,
            texto: D.text,
          }
        : null,
    _e = db(),
    ve = C || p || T,
    ye = y ? (r ?? rl.map((e) => e.valor)) : [`operator`],
    be = rl.filter((e) => ye.includes(e.valor)),
    xe = (0, React.useMemo)(() => {
      let e = t
        .filter((e) => !e.esMadre && e.activa)
        .map((e) => ({
          id: e.id,
          label: e.nombre,
        }))
        .sort((e, t) => e.label.localeCompare(t.label, `es`));
      return [
        {
          id: ``,
          label: `${i} (el tuyo)`,
        },
        ...(o && x ? e : []),
      ];
    }, [t, i, o, x]);
  function Se(e, t) {
    navigator.clipboard
      ?.writeText(e)
      .then(t, () =>
        he(
          !1,
          `No se pudo copiar. Marcalo con el mouse y copialo a mano.`,
          `copiar`,
        ),
      );
  }
  function Ce(e) {
    let { caja: t, casino: n } = mx();
    return `Link de ADMIN\n${t}\n\nUSUARIO: ${e.usuario}\nCONTRASEÑA: ${e.pass}${n ? `\n\nLink JUGADOR\n${n}` : ``}`;
  }
  async function we() {
    if (C || T || !_) return;
    let e = k.trim().toLowerCase();
    if (!bl.test(e))
      return he(
        !1,
        `El usuario va de 3 a 24 caracteres: letras, números, punto, guion o guion bajo, y tiene que empezar y terminar con letra o número.`,
      );
    let t = qo(),
      a = Tb(t);
    if (a) return he(!1, a);
    let s = Qo();
    if (n && !F) return he(!1, `Marcá la casilla de verificación.`);
    let c = y ? j : `operator`,
      l = x ? N : ``;
    if (
      c === `root` &&
      !(await d({
        texto: `El dueño puede dar y quitar acceso al panel y cambiar cuánto cobra cada cajero. ¿Seguro?`,
      }))
    )
      return;
    let u = xe.find((e) => e.id === l)?.label ?? i;
    (te(`alta`),
      w(async () => {
        (O(null), _e.limpiar());
        let n = await lm(e, c, l || void 0).catch(() => null);
        if (!n) return he(!1, `No se pudo crear. Probá de nuevo.`);
        if (!n.ok) return he(!1, n.mensaje);
        let i = xb(`http://demo.invalid`, `demo`, {
            auth: {
              persistSession: !1,
              autoRefreshToken: !1,
              detectSessionInUrl: !1,
            },
          }),
          { error: a } = await i.auth.signUp({
            email: n.correo,
            password: t,
            options: {
              data: {
                username: e,
              },
              ...(F && {
                captchaToken: F,
              }),
            },
          });
        if (
          (ne(``), L((e) => e + 1), await i.auth.signOut().catch(() => {}), a)
        )
          return (
            await dm(n.adminId).catch(() => {}),
            he(
              !1,
              /captcha/i.test(a.message)
                ? `Venció la verificación anti-robot. Marcá de nuevo la casilla y volvé a intentar.`
                : `No se pudo crear la cuenta. Probá de nuevo.`,
            )
          );
        let d = await um(n.adminId, s).catch(() => null);
        if (
          (re({
            usuario: e,
            pass: s,
            rol: lx(c),
            panel: u,
            esDeLaMadre: o && l === ``,
          }),
          !d)
        )
          return he(
            !1,
            `La cuenta se creó pero no se pudo terminar de configurar. Guardá la contraseña de abajo y avisá antes de reintentar.`,
          );
        if (!d.ok) return he(!1, d.mensaje);
        (ae(!1),
          he(!0, d.mensaje),
          se(``),
          le(``),
          A(``),
          M(y ? (r?.[0] ?? `operator`) : `operator`),
          P(``));
      }));
  }
  async function Te(e) {
    let t = await hm(e.id).catch(() => null);
    return ss(t?.ok ? t.cuentas : null);
  }
  let Ee = (0, React.useRef)(!1);
  async function De(e, t, n, r = !1) {
    if (Ee.current) return !1;
    ((Ee.current = !0), E(!0));
    try {
      let i = t ? await Te(e) : ``;
      return await d({
        texto: n(i),
        peligro: r,
      });
    } finally {
      ((Ee.current = !1), E(!1));
    }
  }
  async function Oe(e, t) {
    if (C || t === e.role || !y) return;
    let n = `${e.username} pasa de ${lx(e.role)} a ${lx(t)}.`;
    (await De(e, rs(t) < rs(e.role), (e) =>
      e ? `${n}${e}\n\n¿Seguro?` : `${n} ¿Seguro?`,
    )) &&
      (te(`fila`),
      w(async () => {
        (O(null), _e.limpiar());
        let n = await pm(e.id, t).catch(() => null);
        (n?.ok && rs(t) > rs(e.role) && me([e.id]),
          _e.decirEn(e.id, n?.ok ?? !1, n?.mensaje ?? `No se pudo guardar.`));
      }));
  }
  async function ke(e) {
    if (C || !v) return;
    let t = e.activo
      ? `${e.username} deja de entrar al panel. Sus movimientos viejos quedan en el historial.`
      : `${e.username} vuelve a entrar al panel como ${lx(e.role)}.`;
    (await De(e, e.activo, (e) =>
      e ? `${t}${e}\n\n¿Seguro?` : `${t} ¿Seguro?`,
    )) &&
      (te(`fila`),
      w(async () => {
        (O(null), _e.limpiar());
        let t = await mm(e.id, !e.activo).catch(() => null);
        (t?.ok && e.activo && me([e.id]),
          _e.decirEn(e.id, t?.ok ?? !1, t?.mensaje ?? `No se pudo guardar.`));
      }));
  }
  async function Ae(e) {
    C ||
      !b ||
      ((await De(
        e,
        !0,
        (t) =>
          `Sacar a ${e.username} del panel. No lo vas a ver más en esta lista y no va a poder entrar.\n\nSi ya operó alguna vez, su nombre queda guardado por atrás para que el historial siga diciendo quién hizo cada movimiento.${t}\n\n¿Sacarlo?`,
        !0,
      )) &&
        (te(`fila`),
        w(async () => {
          (O(null), _e.limpiar());
          let t = await fm(e.id).catch(() => null);
          (t?.ok && me([e.id]),
            _e.decirEn(
              e.id,
              t?.ok ?? !1,
              t?.mensaje ?? `No se pudo eliminar.`,
            ));
        })));
  }
  let je =
      g && a
        ? {
            rol: g,
            id: a,
            esMadre: o,
            recibeCorreos: g === `root`,
          }
        : null,
    Me = (e) => Vb(je, e);
  function Ne(e) {
    C ||
      p ||
      T ||
      (confirm(Wb(e.username, e.tieneSegundoFactor)) &&
        (me([e.id]),
        pe(e.id),
        te(`fila`),
        w(async () => {
          (O(null), _e.limpiar());
          try {
            let t = await cx(e.id).catch(() => null);
            if (!t) {
              _e.decirEn(
                e.id,
                !1,
                `No llegó la respuesta del servidor. Puede que la contraseña ya se haya cambiado: generá una nueva antes de pasarle nada.`,
              );
              return;
            }
            if (!t.ok) {
              _e.decirEn(e.id, !1, t.mensaje);
              return;
            }
            de((n) => ({
              ...n,
              [e.id]: {
                usuario: t.usuario,
                contrasena: t.contrasena,
                detalle: t.mensaje,
                entraConUsuario: t.entraConUsuario,
              },
            }));
          } finally {
            pe(null);
          }
        })));
  }
  let Pe = (0, React.useMemo)(() => {
      let e = new Map();
      for (let t of S) e.set(t.casa ?? i, (e.get(t.casa ?? i) ?? 0) + 1);
      return [...e.entries()]
        .sort((e, t) =>
          e[0] === i ? -1 : t[0] === i ? 1 : e[0].localeCompare(t[0], `es`),
        )
        .map(([e, t]) => ({
          clave: e,
          label: e === i ? `${e} (el tuyo) (${t})` : `${e} (${t})`,
        }));
    }, [S, i]),
    Fe = x && Pe.some((e) => e.clave === oe) ? oe : ``,
    Ie = ce.trim().toLowerCase(),
    Le = S.filter((e) => (Fe ? (e.casa ?? i) === Fe : !0)).filter((e) =>
      Ie ? e.username.toLowerCase().includes(Ie) : !0,
    ),
    Re = S.length > 8 || ce.trim() !== ``,
    ze = (0, React.useMemo)(
      () =>
        b ? Le.filter((e) => !(a != null && e.id === a)).map((e) => e.id) : [],
      [Le, a, b],
    ),
    Be = _b(ze),
    Ve = (e) => S.find((t) => t.id === e)?.username ?? e;
  async function He() {
    if (C || Be.elegidos.size === 0 || !b) return;
    let e = [...Be.elegidos];
    (await hx(
      f,
      e.map(Ve),
      `personas`,
      `No van a poder entrar más. Si alguna ya operó, no se borra: queda archivada y su nombre sigue en el historial.`,
    )) &&
      (te(`masivo`),
      w(async () => {
        _e.limpiar();
        let t = await gb(`personal`, e).catch(() => null);
        if (t?.ok) {
          let n = new Set(t.fallados.map((e) => e.id));
          me(e.filter((e) => !n.has(e)));
        }
        let n = yb(t, Ve, `personas`);
        (he(n.ok, n.text, `masivo`), Be.salir());
      }));
  }
  let Ue = _e.flotante((e) => Le.some((t) => t.id === e)),
    We = S.filter((e) => e.activo && !e.tieneSegundoFactor).length,
    Ge = mx();
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `eq`,
    children: [
      Fe
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-cartel entra`,
            children: [
              (0, JSXRuntime.jsxs)(`span`, {
                children: [
                  `Sólo el equipo de `,
                  (0, JSXRuntime.jsx)(`b`, {
                    children: Fe,
                  }),
                ],
              }),
              (0, JSXRuntime.jsx)(Button, {
                tono: `secundario`,
                chico: !0,
                clase: `eq-btn44`,
                deshabilitado: C || T,
                onClick: () =>
                  m(() => {
                    (se(``), Object.keys(ue).length === 0 && c?.());
                  }),
                children: `Ver todos`,
              }),
            ],
          })
        : null,
      Ue
        ? (0, JSXRuntime.jsx)(B_, {
            aviso: {
              ok: Ue.ok,
              texto: Ue.text,
            },
            onCerrar: _e.limpiar,
          })
        : null,
      _
        ? (0, JSXRuntime.jsxs)(Card, {
            clase: `eq-alta`,
            i: 1,
            children: [
              (0, JSXRuntime.jsx)(Wg, {
                titulo: y ? `SUMAR A ALGUIEN AL PANEL` : `SUMAR UN CAJERO`,
                pasos: y ? dx : fx,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-bloque`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `rotulo`,
                    children: `NOMBRE DE USUARIO`,
                  }),
                  (0, JSXRuntime.jsx)(Ng, {
                    id: `eq-usuario`,
                    placeholder: `Nombre de usuario (ej. test1)`,
                    valor: k,
                    onCambiar: A,
                    onEnter: () => void we(),
                    max: 24,
                  }),
                  (0, JSXRuntime.jsx)(`p`, {
                    className: `eq-ayuda`,
                    children: `Con esto entra, y es el nombre que figura en cada movimiento. La contraseña se genera sola y te aparece acá abajo para copiar.`,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-bloque`,
                children: [
                  (0, JSXRuntime.jsx)(`span`, {
                    className: `rotulo`,
                    children: `QUÉ VA A PODER HACER`,
                  }),
                  y
                    ? (0, JSXRuntime.jsx)(vx, {
                        roles: be,
                        rol: j,
                        onElegir: M,
                      })
                    : (0, JSXRuntime.jsx)(`div`, {
                        className: `eq-roles`,
                        children: (0, JSXRuntime.jsxs)(`div`, {
                          className: `eq-rol on`,
                          children: [
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `eq-rol-cab`,
                              children: [
                                (0, JSXRuntime.jsx)(`i`, {
                                  className: `eq-rol-punto`,
                                }),
                                (0, JSXRuntime.jsx)(`b`, {
                                  children: lx(`operator`),
                                }),
                                (0, JSXRuntime.jsxs)(`span`, {
                                  className: `eq-rol-desc`,
                                  children: [`en `, i],
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `eq-rol-desc`,
                              children: px,
                            }),
                          ],
                        }),
                      }),
                ],
              }),
              x && xe.length > 1
                ? (0, JSXRuntime.jsxs)(`div`, {
                    className: `eq-bloque`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `rotulo`,
                        children: `A QUÉ PANEL ENTRA`,
                      }),
                      (0, JSXRuntime.jsx)(_x, {
                        clave: `alta`,
                        opciones: xe,
                        valor: N,
                        onElegir: P,
                      }),
                      (0, JSXRuntime.jsx)(`p`, {
                        className: `eq-ayuda`,
                        children: `Si lo mandás al panel de un socio, sólo ve los jugadores de ese socio — nunca los tuyos.`,
                      }),
                    ],
                  })
                : null,
              n
                ? (0, JSXRuntime.jsx)(`div`, {
                    className: `eq-turnstile`,
                    children: (0, JSXRuntime.jsx)(wb, {
                      siteKey: n,
                      resetKey: I,
                      onToken: ne,
                      onUnavailable: () =>
                        he(
                          !1,
                          `No cargó la verificación anti-robot. Desactivá el bloqueador de publicidad y recargá la página.`,
                        ),
                    }),
                  })
                : null,
              (0, JSXRuntime.jsxs)(`div`, {
                className: `eq-bloque eq-crear`,
                children: [
                  (0, JSXRuntime.jsx)(Button, {
                    tono: `naranja`,
                    ancho: !0,
                    clase: C ? `eq-creando` : void 0,
                    deshabilitado: ve,
                    onClick: () => void we(),
                    children:
                      C && ee === `alta`
                        ? `Creando…`
                        : `Crear acceso como ${lx(y ? j : `operator`)}`,
                  }),
                  (0, JSXRuntime.jsx)(Notice, {
                    aviso: ge(`alta`),
                  }),
                ],
              }),
              R
                ? (0, JSXRuntime.jsx)(
                    bx,
                    {
                      creado: R,
                      copiado: ie,
                      enlaces: Ge,
                      aviso: ge(`copiar`),
                      onCopiar: () =>
                        Se(Ce(R), () => {
                          (ae(!0), setTimeout(() => ae(!1), 2200));
                        }),
                    },
                    R.usuario,
                  )
                : null,
            ],
          })
        : null,
      We > 0 && o
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `eq-ambar entra e2`,
            children: [
              (0, JSXRuntime.jsx)(`i`, {}),
              (0, JSXRuntime.jsx)(`span`, {
                children: `Los marcados en naranja todavía no configuraron el autenticador del celular — hasta que lo hagan no pueden operar.`,
              }),
            ],
          })
        : null,
      Re || (Pe.length > 1 && x)
        ? (0, JSXRuntime.jsxs)(`div`, {
            className: `col eq-filtros entra e3`,
            children: [
              Re
                ? (0, JSXRuntime.jsx)(Mg, {
                    id: `eq-q`,
                    placeholder: `Buscar persona por nombre`,
                    valor: ce,
                    onCambiar: (e) => {
                      (le(e), _e.limpiar());
                    },
                    contador: `${Le.length} de ${S.length}`,
                  })
                : null,
              Pe.length > 1 && x
                ? (0, JSXRuntime.jsx)(_x, {
                    clave: `filtro`,
                    opciones: [
                      {
                        id: ``,
                        label: `Todos los paneles (${S.length})`,
                      },
                      ...Pe.map((e) => ({
                        id: e.clave,
                        label: e.label,
                      })),
                    ],
                    valor: Fe,
                    sinContar: ``,
                    pastillasHasta: 0,
                    onElegir: (e) => {
                      (se(e), _e.limpiar());
                    },
                  })
                : null,
            ],
          })
        : null,
      b && !Be.modo && Le.length > 0
        ? (0, JSXRuntime.jsx)(`div`, {
            className: `eq-sel-fila entra e3`,
            children: (0, JSXRuntime.jsx)(Button, {
              tono: `secundario`,
              ancho: !0,
              clase: `eq-btn44`,
              deshabilitado: p || T,
              onClick: () => Be.setModo(!0),
              children: `Seleccionar varios`,
            }),
          })
        : null,
      Be.modo
        ? (0, JSXRuntime.jsx)(xx, {
            n: Be.elegidos.size,
            visibles: ze.length,
            todosElegidos: Be.todosElegidos,
            onTodos: Be.todos,
            onNinguno: Be.ninguno,
            onBorrar: () => void He(),
            onSalir: Be.salir,
            pendiente: C,
            borrando: C && ee === `masivo`,
            bloqueado: p || T,
          })
        : null,
      (0, JSXRuntime.jsx)(Notice, {
        aviso: ge(`masivo`),
      }),
      Le.length === 0
        ? (0, JSXRuntime.jsx)(Card, {
            i: 3,
            children: (0, JSXRuntime.jsx)(Lg, {
              children: Ie
                ? `Nadie se llama "${ce.trim()}"${Fe ? ` en este panel` : ``}.`
                : `Todavía no hay nadie en este panel.`,
            }),
          })
        : (0, JSXRuntime.jsx)(`div`, {
            className: `eq-lista`,
            children: Le.map((e, t) => {
              let n = a != null && e.id === a,
                r = Me(e),
                o = ue[e.id] ?? null;
              return (0, JSXRuntime.jsx)(
                Sx,
                {
                  p: e,
                  i: 3 + t,
                  vos: n,
                  puedeBorrar: b,
                  casaPropia: i,
                  bloqueado: ve,
                  conRango: y,
                  puedeAcceso: v,
                  roles: rl.filter(
                    (t) => ye.includes(t.valor) || t.valor === e.role,
                  ),
                  aviso: gx(_e.de(e.id)),
                  seleccion: {
                    modo: Be.modo,
                    marcada: Be.elegidos.has(e.id),
                    alternar: () => Be.alternar(e.id),
                  },
                  onRol: (t) => void Oe(e, t),
                  onAcceso: () => void ke(e),
                  onBorrar: () => void Ae(e),
                  contrasena:
                    r || o
                      ? {
                          puede: r,
                          generando: fe === e.id,
                          nueva: o,
                          onGenerar: () => Ne(e),
                        }
                      : null,
                },
                e.id,
              );
            }),
          }),
      (0, JSXRuntime.jsxs)(Card, {
        i: 6,
        children: [
          (0, JSXRuntime.jsx)(_g, {
            texto: `DOS COSAS QUE CONVIENE SABER`,
          }),
          (0, JSXRuntime.jsxs)(`p`, {
            className: `eq-sabe`,
            children: [
              `· La primera vez que entren al panel les va a pedir configurar el `,
              (0, JSXRuntime.jsx)(`b`, {
                children: `autenticador del celular`,
              }),
              `. Hasta que lo hagan no pueden operar, y acá los vas a ver marcados.`,
            ],
          }),
          (0, JSXRuntime.jsxs)(`p`, {
            className: `eq-sabe`,
            children: [
              `· Sacarle el acceso a alguien `,
              (0, JSXRuntime.jsx)(`b`, {
                children: `no borra nada`,
              }),
              `: los movimientos que hizo siguen en el historial con su nombre, como tiene que ser.`,
            ],
          }),
        ],
      }),
    ],
  });
}
function initializeStaffManagement() {
  cx = (
    (e) =>
    async (...t) => {
      let n = Rp[`app/(admin)/personal-password-actions.ts#` + e];
      return n
        ? n(...t)
        : {
            ...Yd,
          };
    }
  )(`nuevaContrasenaPersonalAction`);
  lx = (e) => rl.find((t) => t.valor === e)?.nombre ?? e;
  ux = {
    operator: `var(--tx2)`,
    admin: `var(--naranja-claro)`,
    root: `var(--rojo)`,
  };
  dx = [
    `Nombre`,
    `Elegí qué puede hacer y a qué panel entra`,
    `Copiá el mensaje y pasáselo`,
  ];
  fx = [
    `Nombre`,
    `Entra como Cajero a tu panel`,
    `Copiá el mensaje y pasáselo`,
  ];
  px = rl.find((e) => e.valor === `operator`)?.hace ?? ``;
}
export { mx, hx, gx, StaffManagement, initializeStaffManagement };
