/**
 * panel / dashboard.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import {
  classNames,
  ag,
  Icon,
  Card,
  _g,
  xg,
  Cg,
  Button,
  Tg,
  Mg,
  Lg,
  Rg,
  Vg,
  Hg,
  Gg,
  Kg,
  qg,
} from "./ui-components.js";
import { ReferralCard } from "./referrals.js";
import { MonitoringCard } from "./monitoring.js";
let Dy, Oy;
function ky(e, t) {
  return {
    jugadores: e.jugadores + t.jugadores,
    enJugadoresCents: e.enJugadoresCents + t.enJugadoresCents,
    cargadoCents: e.cargadoCents + t.cargadoCents,
    descargadoCents: e.descargadoCents + t.descargadoCents,
    gananciaCents: e.gananciaCents + t.gananciaCents,
  };
}
function Ay(e, t) {
  let n = e.find((e) => e.esMadre) ?? null,
    r = new Set(e.map((e) => e.id)),
    i = new Map();
  for (let e of t) {
    let t =
      e.casaId === null
        ? (n?.id ?? `sin-panel`)
        : r.has(e.casaId)
          ? e.casaId
          : Dy;
    i.set(t, ky(i.get(t) ?? Oy, e));
  }
  let a = [...e]
      .sort((e, t) => Number(t.esMadre) - Number(e.esMadre))
      .map((e) => ({
        id: e.id,
        nombre: e.nombre,
        esMadre: e.esMadre,
        activa: e.activa,
        cupoCents: e.esMadre ? null : e.cupoCents,
        ...(i.get(e.id) ?? Oy),
      })),
    o = i.get(Dy);
  return (
    o &&
      a.push({
        id: Dy,
        nombre: `Sin panel`,
        esMadre: !1,
        activa: !1,
        cupoCents: null,
        ...o,
      }),
    {
      paneles: a,
      total: t.reduce((e, t) => ky(e, t), Oy),
    }
  );
}
function jy(e, t) {
  return {
    jugadores: e.jugadores,
    cargadoCents: e.cargadoCents,
    descargadoCents: e.descargadoCents,
    enJugadoresCents: t ? t.enJugadoresCents : null,
    gananciaCents: t ? t.gananciaCents : null,
  };
}
let My, Ny;
function Py(e, t) {
  return Object.keys(My)
    .filter((n) => t[n] !== null && t[n] !== e[n])
    .map((e) => My[e]);
}
function Fy(e, t) {
  return (e < 0n ? `−` : ``) + t(e < 0n ? -e : e);
}
function Iy(e, t, n, r) {
  let { paneles: i, total: a } = Ay(e, t);
  return {
    paneles: i.map((e) => ({
      id: e.id,
      nombre: e.nombre,
      esMadre: e.esMadre,
      activa: e.activa,
      jugadores: e.jugadores,
      saldo: r(e.enJugadoresCents),
      cargado: Fy(e.cargadoCents, r),
      descargado: Fy(e.descargadoCents, r),
      ganancia: Fy(e.gananciaCents, r),
      gananciaNegativa: e.gananciaCents < 0n,
      cupo: e.cupoCents === null ? null : Fy(e.cupoCents, r),
      cupoNegativo: e.cupoCents !== null && e.cupoCents < 0n,
      sinMovimiento:
        e.jugadores === 0 &&
        e.enJugadoresCents === 0n &&
        e.cargadoCents === 0n &&
        e.descargadoCents === 0n &&
        e.gananciaCents === 0n &&
        (e.cupoCents === null || e.cupoCents === 0n),
    })),
    total: {
      jugadores: a.jugadores,
      saldo: r(a.enJugadoresCents),
      cargado: Fy(a.cargadoCents, r),
      descargado: Fy(a.descargadoCents, r),
      ganancia: Fy(a.gananciaCents, r),
      gananciaNegativa: a.gananciaCents < 0n,
    },
    noCuadra: Py(a, n),
  };
}
function Ly(e) {
  return e.normalize(`NFD`).replace(/\p{M}/gu, ``).toLowerCase().trim();
}
function Ry(e) {
  return e.esMadre || e.id === `sin-panel` ? !1 : !e.activa || e.sinMovimiento;
}
function zy(e, t) {
  if (e.length <= 6)
    return {
      modo: `tarjetas`,
      visibles: [...e],
      plegados: 0,
    };
  let n = Ly(t.busqueda);
  if (n)
    return {
      modo: `lista`,
      visibles: e.filter((e) => Ly(e.nombre).includes(n)),
      plegados: 0,
    };
  let r = e.filter((e) => !Ry(e)),
    i = e.filter(Ry);
  return t.verPlegados
    ? {
        modo: `lista`,
        visibles: [...r, ...i],
        plegados: 0,
      }
    : {
        modo: `lista`,
        visibles: r,
        plegados: i.length,
      };
}
let By, Vy, Hy;
function Uy(e) {
  let t = `No cuadra con el total del casino: ${e.join(`, `)}.`;
  return e.some((e) => Ny.includes(e))
    ? `${t} Se leyó todo en el mismo instante, así que no es una jugada que entró en el medio: avisale a soporte.`
    : `${t} Puede ser una carga, un pago o un registro que entró justo mientras se armaba la pantalla; se vuelve a calcular sola en unos segundos.`;
}
function Wy(e, t = !1) {
  let n = t ? `el casino entero, tus socios incluidos,` : `la casa`;
  return e === `Hoy`
    ? `Lo que ganó ${n} en los juegos hoy, desde las 0 h.`
    : e === `Desde siempre`
      ? `Lo que ganó ${n} en los juegos desde el primer día.`
      : `Lo que ganó ${n} en los juegos en los últimos ${e}.`;
}
function Gy(e, t, n = !1) {
  let r =
    e && t
      ? ` Abajo, en «Por panel», va separado lo tuyo de lo de cada socio.`
      : ``;
  return {
    ahora: {
      titulo: By.ahora.titulo,
      bajada: e
        ? `${By.ahora.bajadaMadre} El saldo de los jugadores es el de todo el casino, los de tus socios incluidos.${r}`
        : n
          ? By.ahora.bajadaSocio
          : By.ahora.bajadaSocioSinFichas,
    },
    movio: {
      titulo: By.movio.titulo,
      bajada: e
        ? `Lo que se les cargó a los jugadores y lo que se les pagó cuando retiraron, en todo el casino: lo tuyo y lo de tus socios, sumado.${r}`
        : By.movio.bajada,
    },
    ganaste: {
      titulo: e ? `LO QUE GANÓ EL CASINO` : By.ganaste.titulo,
      bajada: e
        ? `Todo el casino junto: lo tuyo y lo de tus socios. La ganancia es lo que apostaron los jugadores menos los premios que cobraron. No es lo mismo que la caja: alguien puede perder hoy y retirar mañana, por eso van las dos.${r}`
        : By.ganaste.bajada,
    },
    saldoJugadores: e
      ? `Lo que tienen cargado los jugadores de todo el casino, los de tus socios incluidos. No es tuyo: lo pueden retirar cuando quieran.`
      : Vy.saldoJugadores,
    mayorSaldo: e ? Vy.mayorSaldoMadre : Vy.mayorSaldo,
    cargadoHoy: e
      ? `Lo que se les cargó hoy, desde las 0 h, a los jugadores de todo el casino, lo hayas cargado vos o un socio. Lo anulado no cuenta.`
      : Vy.cargadoHoy,
    descargadoHoy: e
      ? `Lo que se les pagó hoy, desde las 0 h, a los jugadores de todo el casino, lo hayas pagado vos o un socio. Lo anulado no cuenta.`
      : Vy.descargadoHoy,
    gente: {
      titulo: e ? By.gente.tituloMadre : By.gente.titulo,
      bajada: e
        ? `${By.gente.bajadaMadre}${t ? ` Los jugadores de cada panel, por separado, están arriba en «Por panel».` : ``}`
        : By.gente.bajada,
      jugadores: e
        ? `Cuentas de jugadores de todo el casino, las de tus socios incluidas, sin contar al personal.`
        : Vy.jugadores,
      jugaronHoy: e
        ? `Jugadores distintos de todo el casino, tuyos o de un socio, que apostaron hoy.`
        : Vy.jugaronHoy,
      activos: (t) =>
        e
          ? `Jugadores de todo el casino, tuyos o de un socio, que apostaron al menos una vez en los últimos ${t} días.`
          : Vy.activos(t),
      equipo: e
        ? `Las personas que entran a los paneles de todo el casino: tu equipo y el de tus socios. El dueño de cada socio cuenta entre los admins.`
        : Vy.equipo,
    },
  };
}
function Ky(e) {
  return (
    `Antes: ` +
    e
      .replace(/^(\d+) previos:/, `los $1 días anteriores,`)
      .replace(/^ayer:/, `ayer,`)
  );
}
function qy(e, t = !1) {
  return `Por caja: ${e} (lo que entró menos lo que se pagó${t ? `, en todo el casino` : ``}).`;
}
function Jy(e, t = !1) {
  return t
    ? `${e} o más retiros grandes esperan la segunda firma.`
    : `${e} ${e === 1 ? `retiro grande espera` : `retiros grandes esperan`} la segunda firma.`;
}
function Yy(e, t, n) {
  return typeof e == `number`
    ? {
        n: e,
        oMas: !1,
      }
    : {
        n: t,
        oMas: t >= n,
      };
}
let Xy;
function Zy(e) {
  let t = e.length;
  return t >= 17 ? `lec-l${Math.min(22, t)}` : void 0;
}
function Qy(e) {
  return {
    ...e,
    contar: !0,
    clase: classNames(e.clase, Zy(e.valor)),
  };
}
function DashboardSummary({ p: e, irA: t }) {
  let n = (e) =>
      !e.permiteRojo &&
      !e.cupoNegativo &&
      /^[^0-9]*0(?:[.,]0+)?$/.test(e.cupo.replace(/[^0-9.,]/g, ``)),
    r = e.casas.filter((e) => !e.esMadre && (e.personal === 0 || n(e))).length,
    i = e.personal.filter((e) => e.activo && !e.tieneSegundoFactor).length,
    a = [
      ...(e.requests.length > 0
        ? [
            {
              txt: `${e.requests.length} ${e.requests.length === 1 ? `jugador está esperando` : `jugadores están esperando`} que les resuelvas un pedido`,
              ir: `pendientes`,
              boton: `Ver pendientes`,
            },
          ]
        : []),
      ...(e.heldTotal.count > 0 && e.isAdmin
        ? [
            {
              txt: e.esMadre
                ? `${e.heldTotal.count} ${e.heldTotal.count === 1 ? `premio frenado` : `premios frenados`} por el tope, esperando que decidas`
                : `${e.heldTotal.count} ${e.heldTotal.count === 1 ? `premio frenado` : `premios frenados`} por el tope: los resuelve el casino`,
              ir: `premios`,
              boton: `Ver premios`,
            },
          ]
        : []),
      ...(e.vinculosTotal.revisar > 0 && e.esDueno
        ? [
            {
              txt: `${e.vinculosTotal.revisar} ${e.vinculosTotal.revisar === 1 ? `grupo de cuentas se ve junto` : `grupos de cuentas se ven juntos`}`,
              ir: `alertas`,
              boton: `Ver alertas`,
            },
          ]
        : []),
      ...(r > 0 && e.esDueno
        ? [
            {
              txt: `${r} ${r === 1 ? `socio no terminó de arrancar` : `socios no terminaron de arrancar`}: les falta el acceso o las fichas`,
              ir: `paneles`,
              boton: `Ver socios`,
            },
          ]
        : []),
      ...(i > 0 && e.esDueno && e.esMadre
        ? [
            {
              txt: `${i} del equipo ${i === 1 ? `todavía no configuró` : `todavía no configuraron`} el autenticador`,
              ir: `paneles`,
              boton: `Ver equipo`,
            },
          ]
        : []),
    ],
    o = [];
  return (
    !e.esMadre &&
      e.miCupo &&
      o.push({
        clave: `cupo`,
        rot: e.esDueno ? `TUS FICHAS` : `FICHAS DEL PANEL`,
        valor: e.miCupo.texto,
        color: e.miCupo.enRojo ? `rojo` : e.miCupo.enCero ? `ambar` : `naranja`,
        sub: e.miCupo.enCero
          ? `estás en cero: pedí más al panel principal`
          : `cada carga sale de acá`,
        icono: `ficha`,
      }),
    o.push({
      clave: `cargas`,
      rot: `CARGASTE HOY`,
      valor: e.totals.loadsHoy,
      color: `verde`,
      icono: `sube`,
    }),
    o.push({
      clave: `descargas`,
      rot: `DESCARGASTE HOY`,
      valor: e.totals.unloadsHoy,
      color: `ambar`,
      icono: `baja`,
    }),
    o.push({
      clave: `neto`,
      rot: `TE TENDRÍA QUE QUEDAR`,
      valor: e.totals.netoHoy,
      color: e.totals.netoHoyPositivo ? `tx` : `rojo`,
      sub: `lo que entró menos lo que pagaste, hoy`,
      icono: `billetera`,
    }),
    (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
      children: [
        e.esMadre &&
          e.isAdmin &&
          !e.demo &&
          (0, JSXRuntime.jsx)(MonitoringCard, {
            i: 0,
          }),
        (0, JSXRuntime.jsx)(Cg, {
          items: o.map(Qy),
          i: 1,
          clase: `lec-nums`,
        }),
        (0, JSXRuntime.jsxs)(Card, {
          i: 5,
          children: [
            (0, JSXRuntime.jsx)(_g, {
              texto: `LO QUE SIGUE`,
            }),
            a.length === 0
              ? (0, JSXRuntime.jsx)(Rg, {
                  texto: `Estás al día. No hay nada esperándote.`,
                })
              : (0, JSXRuntime.jsx)(`div`, {
                  className: `sigue`,
                  children: a.map((e, n) =>
                    (0, JSXRuntime.jsxs)(
                      `div`,
                      {
                        className: `sigue-fila`,
                        children: [
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `sigue-ic`,
                            children: (0, JSXRuntime.jsx)(Icon, {
                              nombre:
                                e.boton === `Ver socios`
                                  ? `socios`
                                  : e.boton === `Ver equipo`
                                    ? `equipo`
                                    : e.ir,
                              tam: 16,
                              trazo: 2,
                            }),
                          }),
                          (0, JSXRuntime.jsx)(`span`, {
                            className: `sigue-txt`,
                            children: e.txt,
                          }),
                          (0, JSXRuntime.jsx)(Button, {
                            tono: `secundario`,
                            chico: !0,
                            clase: `sigue-btn`,
                            onClick: () => t(e.ir),
                            children: e.boton,
                          }),
                        ],
                      },
                      e.ir + n,
                    ),
                  ),
                }),
          ],
        }),
        (0, JSXRuntime.jsx)(ReferralCard, {
          i: 6,
        }),
      ],
    })
  );
}
function eb({ titulo: e, bajada: t }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `pl-cab`,
    children: [
      (0, JSXRuntime.jsx)(_g, {
        texto: e,
      }),
      t
        ? (0, JSXRuntime.jsx)(`p`, {
            className: `bal-bajada pl-bajada`,
            children: t,
          })
        : null,
    ],
  });
}
function tb(e, t = []) {
  let n = t.filter((e) => !!e);
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(`span`, {
        className: `pl-que`,
        children: e,
      }),
      n.map((e, t) =>
        (0, JSXRuntime.jsx)(
          `span`,
          {
            className: `pl-linea`,
            children: Xy(e),
          },
          t,
        ),
      ),
    ],
  });
}
function nb({ x: e }) {
  return (0, JSXRuntime.jsxs)(Kg, {
    clase: `pl-datos`,
    children: [
      (0, JSXRuntime.jsx)(Gg, {
        titulo: `JUGADORES`,
        valor: String(e.jugadores),
      }),
      (0, JSXRuntime.jsx)(Gg, {
        titulo: `SALDO DE SUS JUGADORES`,
        valor: e.saldo,
        color: `ambar`,
      }),
      (0, JSXRuntime.jsx)(Gg, {
        titulo: `CARGADO`,
        valor: e.cargado,
        color: `verde`,
      }),
      (0, JSXRuntime.jsx)(Gg, {
        titulo: `DESCARGADO`,
        valor: e.descargado,
        color: `ambar`,
      }),
      (0, JSXRuntime.jsx)(Gg, {
        titulo: `GANANCIA`,
        valor: e.ganancia,
        color: e.gananciaNegativa ? `rojo` : `verde`,
      }),
      (0, JSXRuntime.jsx)(Gg, {
        titulo: `FICHAS`,
        valor: e.cupo ?? (e.esMadre ? `no lleva` : `—`),
        color: e.cupoNegativo ? `rojo` : e.cupo === null ? `gris` : `tx`,
      }),
    ],
  });
}
function rb({ x: e }) {
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      e.esMadre
        ? (0, JSXRuntime.jsx)(Tg, {
            tono: `naranja`,
            children: `CASA MADRE · LO TUYO`,
          })
        : (0, JSXRuntime.jsx)(Tg, {
            tono: `gris`,
            children: `SOCIO`,
          }),
      !e.esMadre && !e.activa
        ? (0, JSXRuntime.jsx)(Tg, {
            tono: `gris`,
            children: `APAGADO`,
          })
        : null,
    ],
  });
}
function ib({ porPanel: e }) {
  let [t, n] = (0, React.useState)(``),
    [r, i] = (0, React.useState)(!1),
    a = zy(e.paneles, {
      busqueda: t,
      verPlegados: r,
    });
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsxs)(Card, {
        i: 12,
        clase: `pl-panel pl-total`,
        children: [
          (0, JSXRuntime.jsx)(_g, {
            texto: `Todo junto`,
          }),
          (0, JSXRuntime.jsxs)(Kg, {
            clase: `pl-datos`,
            children: [
              (0, JSXRuntime.jsx)(Gg, {
                titulo: `JUGADORES`,
                valor: String(e.total.jugadores),
              }),
              (0, JSXRuntime.jsx)(Gg, {
                titulo: `SALDO DE LOS JUGADORES`,
                valor: e.total.saldo,
                color: `ambar`,
              }),
              (0, JSXRuntime.jsx)(Gg, {
                titulo: `CARGADO`,
                valor: e.total.cargado,
                color: `verde`,
              }),
              (0, JSXRuntime.jsx)(Gg, {
                titulo: `DESCARGADO`,
                valor: e.total.descargado,
                color: `ambar`,
              }),
              (0, JSXRuntime.jsx)(Gg, {
                titulo: `GANANCIA`,
                valor: e.total.ganancia,
                color: e.total.gananciaNegativa ? `rojo` : `verde`,
              }),
            ],
          }),
          (0, JSXRuntime.jsx)(`p`, {
            className: `pl-pie`,
            children: Vy.todoJunto,
          }),
          e.noCuadra.length > 0
            ? (0, JSXRuntime.jsx)(`p`, {
                className: `pl-pie pl-no-cuadra`,
                role: `status`,
                children: Uy(e.noCuadra),
              })
            : null,
        ],
      }),
      a.modo === `tarjetas`
        ? (0, JSXRuntime.jsx)(`div`, {
            className: `pl-grilla`,
            children: a.visibles.map((e, t) =>
              (0, JSXRuntime.jsxs)(
                Card,
                {
                  i: 13 + t,
                  clase: `pl-panel`,
                  children: [
                    (0, JSXRuntime.jsx)(_g, {
                      texto: e.nombre,
                      derecha: (0, JSXRuntime.jsx)(rb, {
                        x: e,
                      }),
                    }),
                    (0, JSXRuntime.jsx)(nb, {
                      x: e,
                    }),
                  ],
                },
                e.id,
              ),
            ),
          })
        : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
            children: [
              (0, JSXRuntime.jsx)(Mg, {
                id: `plata-paneles-q`,
                placeholder: `Buscar panel por nombre`,
                valor: t,
                onCambiar: n,
                contador: `${a.visibles.length} de ${e.paneles.length}`,
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `pl-lista`,
                children: [
                  a.visibles.length === 0
                    ? (0, JSXRuntime.jsx)(Lg, {
                        children: `Ningún panel se llama así.`,
                      })
                    : null,
                  a.visibles.map((e) =>
                    (0, JSXRuntime.jsxs)(
                      `details`,
                      {
                        className: `pl-fila`,
                        children: [
                          (0, JSXRuntime.jsxs)(`summary`, {
                            className: `pl-fila-sum`,
                            children: [
                              (0, JSXRuntime.jsx)(Icon, {
                                nombre: `derecha`,
                                tam: 14,
                                trazo: 2.2,
                              }),
                              (0, JSXRuntime.jsxs)(`span`, {
                                className: `pl-fila-nombre`,
                                children: [
                                  (0, JSXRuntime.jsx)(`b`, {
                                    children: e.nombre,
                                  }),
                                  (0, JSXRuntime.jsx)(rb, {
                                    x: e,
                                  }),
                                ],
                              }),
                              (0, JSXRuntime.jsxs)(`span`, {
                                className: `pl-fila-der`,
                                children: [
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `dato-rot`,
                                    children: `GANANCIA`,
                                  }),
                                  (0, JSXRuntime.jsx)(`span`, {
                                    className: `pl-fila-monto`,
                                    style: {
                                      color: ag(
                                        e.gananciaNegativa ? `rojo` : `verde`,
                                      ),
                                    },
                                    children: (0, JSXRuntime.jsx)(xg, {
                                      texto: e.ganancia,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, JSXRuntime.jsx)(nb, {
                            x: e,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
              a.plegados > 0
                ? (0, JSXRuntime.jsxs)(Button, {
                    tono: `secundario`,
                    onClick: () => i(!0),
                    children: [
                      `Ver `,
                      a.plegados,
                      ` `,
                      a.plegados === 1
                        ? `socio apagado o sin movimiento`
                        : `socios apagados o sin movimiento`,
                    ],
                  })
                : null,
              r && !t.trim()
                ? (0, JSXRuntime.jsx)(Button, {
                    tono: `secundario`,
                    onClick: () => i(!1),
                    children: `Plegar los apagados y los que están en cero`,
                  })
                : null,
            ],
          }),
    ],
  });
}
function DashboardCharts({ p: e }) {
  let t = e.graficos.caja,
    n = t.map((e) => e.arriba),
    r = t.map((e) => e.abajo),
    i = t.map(
      (e) => `${e.etiqueta} · entró ${e.textoArriba} · salió ${e.textoAbajo}`,
    ),
    a = e.esDueno,
    o = e.esMadre,
    s = e.floatUi,
    c = e.floatVivoUi,
    l = Yy(e.pendientesContados?.pedidos, e.requests.length, 60),
    u = Yy(e.pendientesContados?.firmas, e.firmas.length, 50),
    d = a && o ? (e.plataPorPanel ?? null) : null,
    f = !o && a && !!e.miCupo,
    p = Gy(o, d !== null, f),
    m = [
      ...(o
        ? [
            {
              clave: `float`,
              rot: `FLOAT FOREVER`,
              valor:
                s.balance === null
                  ? `sin datos`
                  : `ARS ${s.balance.toLocaleString(`es-AR`, {
                      minimumFractionDigits: 2,
                    })}`,
              sub: tb(Vy.floatForever, [s.enUso && Vy.enUsoForever(s.enUso)]),
              color: s.critico ? `rojo` : s.bajo ? `ambar` : `tx`,
            },
            {
              clave: `float-vivo`,
              rot: `FLOAT GGR`,
              valor: c.texto,
              sub: tb(Vy.floatGgr, [c.sub, c.estado]),
              color: c.sinDatos
                ? `gris`
                : c.vacio
                  ? `rojo`
                  : c.bajo
                    ? `ambar`
                    : `tx`,
            },
          ]
        : []),
      ...(f && e.miCupo
        ? [
            {
              clave: `cupo`,
              rot: `TUS FICHAS`,
              valor: e.miCupo.texto,
              sub: tb(e.miCupo.enRojo ? Vy.tusFichasEnRojo : Vy.tusFichas),
              color: e.miCupo.enRojo
                ? `rojo`
                : e.miCupo.enCero
                  ? `ambar`
                  : `naranja`,
            },
          ]
        : []),
      {
        clave: `saldo`,
        rot: `SALDO DE LOS JUGADORES`,
        valor: e.totals.inPlayers,
        sub: tb(p.saldoJugadores),
        color: `ambar`,
      },
      {
        clave: `mayor`,
        rot: `MAYOR SALDO DE UN JUGADOR`,
        valor: e.totals.topPlayer,
        sub: tb(p.mayorSaldo),
        color: `tx`,
        destacado: !1,
      },
    ],
    h = [
      ...(a
        ? [
            {
              clave: `hoy-in`,
              rot: `CARGADO HOY`,
              valor: e.totals.loadsHoy,
              sub: tb(p.cargadoHoy),
              color: `verde`,
            },
            {
              clave: `hoy-out`,
              rot: `DESCARGADO HOY`,
              valor: e.totals.unloadsHoy,
              sub: tb(p.descargadoHoy),
              color: `ambar`,
            },
          ]
        : []),
      {
        clave: `entro`,
        rot: `CARGADO DESDE SIEMPRE`,
        valor: e.totals.loads,
        sub: tb(Vy.cargadoSiempre),
        color: `verde`,
      },
      {
        clave: `salio`,
        rot: `DESCARGADO DESDE SIEMPRE`,
        valor: e.totals.unloads,
        sub: tb(Vy.descargadoSiempre),
        color: `ambar`,
      },
    ],
    g = [
      {
        clave: `retenidos`,
        rot: `PREMIOS RETENIDOS`,
        valor: e.heldTotal.amount,
        sub: tb(o ? Vy.premiosMadre : Vy.premiosSocio, [
          `${e.heldTotal.count} esperando`,
        ]),
        color: e.heldTotal.count > 0 ? `ambar` : `tx`,
        destacado: !1,
      },
      ...(a
        ? [
            {
              clave: `pedidos`,
              rot: `PEDIDOS ESPERANDO`,
              valor: l.oMas ? `${l.n} o más` : String(l.n),
              sub: tb(Vy.pedidos, [u.n > 0 && Jy(u.n, u.oMas)]),
              color: l.n + u.n > 0 ? `ambar` : `tx`,
            },
          ]
        : []),
    ];
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      (0, JSXRuntime.jsx)(eb, {
        titulo: p.ahora.titulo,
        bajada: p.ahora.bajada,
      }),
      (0, JSXRuntime.jsx)(Cg, {
        i: 1,
        clase: `bal-nums`,
        items: m.map(Qy),
      }),
      (0, JSXRuntime.jsx)(eb, {
        titulo: p.movio.titulo,
        bajada: p.movio.bajada,
      }),
      (0, JSXRuntime.jsx)(Cg, {
        i: 4,
        clase: `bal-nums`,
        items: h.map(Qy),
      }),
      (0, JSXRuntime.jsxs)(Card, {
        i: 6,
        clase: `bal-tarjeta-caja`,
        children: [
          (0, JSXRuntime.jsx)(_g, {
            texto: `CAJA · DÍA POR DÍA`,
          }),
          (0, JSXRuntime.jsxs)(`p`, {
            className: `bal-bajada`,
            children: [
              `Arriba lo que entró, abajo lo que salió. `,
              t.length,
              ` días.`,
            ],
          }),
          t.length === 0
            ? (0, JSXRuntime.jsx)(`div`, {
                className: `bal-vacio`,
                children: `Todavía no se movió plata por la caja.`,
              })
            : (0, JSXRuntime.jsx)(`div`, {
                className: `bal-caja`,
                children: (0, JSXRuntime.jsx)(qg, {
                  entra: n,
                  sale: r,
                  etiquetas: i,
                }),
              }),
        ],
      }),
      (0, JSXRuntime.jsx)(eb, {
        titulo: p.ganaste.titulo,
        bajada: p.ganaste.bajada,
      }),
      (0, JSXRuntime.jsx)(Cg, {
        i: 7,
        clase: `bal-nums`,
        items: e.ganancia.map((e) =>
          Qy({
            clave: e.k,
            rot: e.k.toUpperCase(),
            valor: e.v,
            sub: tb(Wy(e.k, o), [
              qy(e.caja ?? e.sub.replace(/^caja\s*/, ``), o),
              a && e.ref && Ky(e.ref),
            ]),
            color: e.positivo ? `verde` : `rojo`,
            destacado: !1,
          }),
        ),
      }),
      e.esDueno &&
        e.comisiones.length > 0 &&
        (0, JSXRuntime.jsxs)(Card, {
          i: 10,
          children: [
            (0, JSXRuntime.jsx)(_g, {
              texto: `COMISIÓN DE LOS CAJEROS`,
            }),
            (0, JSXRuntime.jsx)(`p`, {
              className: `bal-bajada bal-bajada-com`,
              children: `Cada cajero cobra un porcentaje de lo que le ganó el casino a SUS jugadores, mes a mes.`,
            }),
            (0, JSXRuntime.jsx)(Vg, {
              plana: !0,
              clase: `bal-com`,
              children: e.comisiones.map((e) =>
                (0, JSXRuntime.jsx)(
                  Hg,
                  {
                    titulo: e.username,
                    chip: (0, JSXRuntime.jsxs)(`span`, {
                      className: `bal-com-med`,
                      children: [
                        e.jugadores,
                        ` `,
                        e.jugadores === 1 ? `jugador` : `jugadores`,
                        ` · `,
                        e.sinPorcentaje ? `sin porcentaje` : e.porcentaje,
                      ],
                    }),
                    derecha: e.comisionMes,
                    derechaColor: `tx`,
                  },
                  e.cajeroId,
                ),
              ),
            }),
          ],
        }),
      (0, JSXRuntime.jsx)(eb, {
        titulo: By.frenado.titulo,
        bajada: By.frenado.bajada,
      }),
      (0, JSXRuntime.jsx)(Cg, {
        i: 11,
        clase: `bal-nums`,
        items: g.map(Qy),
      }),
      d &&
        (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
          children: [
            (0, JSXRuntime.jsx)(eb, {
              titulo: By.porPanel.titulo,
              bajada: By.porPanel.bajada,
            }),
            (0, JSXRuntime.jsx)(`ul`, {
              className: `pl-leyenda`,
              children: Hy.map((e) =>
                (0, JSXRuntime.jsx)(
                  `li`,
                  {
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, JSXRuntime.jsx)(ib, {
              porPanel: d,
            }),
          ],
        }),
      (0, JSXRuntime.jsx)(eb, {
        titulo: p.gente.titulo,
        bajada: p.gente.bajada,
      }),
      (0, JSXRuntime.jsx)(Cg, {
        i: 13,
        clase: `bal-nums`,
        items: [
          Qy({
            clave: `jugadores`,
            rot: `JUGADORES`,
            valor: String(e.gente.jugadores),
            sub: tb(p.gente.jugadores, [`${e.gente.nuevosHoy} nuevos hoy`]),
            color: `tx`,
          }),
          Qy({
            clave: `jugaron`,
            rot: `JUGARON HOY`,
            valor: String(e.gente.jugaronHoy),
            sub: tb(p.gente.jugaronHoy),
            color: `tx`,
          }),
          Qy({
            clave: `activos`,
            rot: `ACTIVOS (${e.diasActivo} DÍAS)`,
            valor: String(e.gente.activos),
            sub: tb(p.gente.activos(e.diasActivo)),
            color: `tx`,
          }),
          Qy({
            clave: `equipo`,
            rot: `DEL EQUIPO`,
            valor: String(e.gente.cajeros + e.gente.administradores),
            sub: tb(p.gente.equipo, [
              `${e.gente.cajeros} cajeros · ${e.gente.administradores} admins`,
            ]),
            color: `tx`,
          }),
        ],
      }),
    ],
  });
}
function ob({ p: e }) {
  let t = e.vinculos.filter((e) => e.categoria === `revisar`);
  return (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
    children: [
      t.length === 0
        ? (0, JSXRuntime.jsx)(Card, {
            i: 1,
            children: (0, JSXRuntime.jsx)(Lg, {
              clase: `al-vacio`,
              children: `No hay cuentas que se vean juntas. Nada que revisar.`,
            }),
          })
        : t.map((e, t) =>
            (0, JSXRuntime.jsxs)(
              Card,
              {
                i: t + 1,
                clase: `al-grupo`,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `al-cab`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `al-donde`,
                        children: e.donde,
                      }),
                      e.ahora
                        ? (0, JSXRuntime.jsx)(`span`, {
                            className: `al-ahora`,
                            children: (0, JSXRuntime.jsx)(Tg, {
                              tono: `rojo`,
                              children: `AHORA MISMO`,
                            }),
                          })
                        : null,
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `al-ultima`,
                        children: e.ultima,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    className: `al-tecnico`,
                    children: e.tecnico,
                  }),
                  (0, JSXRuntime.jsx)(`div`, {
                    className: `al-cuentas`,
                    children: e.cuentas.map((e, t) =>
                      (0, JSXRuntime.jsxs)(
                        `div`,
                        {
                          className: classNames(
                            `al-cuenta`,
                            !e.vigente && `viejo`,
                          ),
                          children: [
                            (0, JSXRuntime.jsxs)(`span`, {
                              className: `al-quien`,
                              children: [
                                (0, JSXRuntime.jsx)(`i`, {
                                  className: `al-punto`,
                                }),
                                (0, JSXRuntime.jsx)(`span`, {
                                  className: `al-nombre`,
                                  children: e.nombre,
                                }),
                              ],
                            }),
                            (0, JSXRuntime.jsx)(`span`, {
                              className: `al-detalle`,
                              children: Xy(e.detalle),
                            }),
                          ],
                        },
                        e.nombre + t,
                      ),
                    ),
                  }),
                  e.desde
                    ? (0, JSXRuntime.jsxs)(`div`, {
                        className: `al-pie`,
                        children: [`Se ven juntas desde `, e.desde],
                      })
                    : null,
                ],
              },
              e.id,
            ),
          ),
      (0, JSXRuntime.jsxs)(Card, {
        i: t.length + 1,
        children: [
          (0, JSXRuntime.jsx)(_g, {
            texto: `ES UNA LUPA, NO UNA ALARMA`,
          }),
          (0, JSXRuntime.jsx)(`p`, {
            className: `al-texto`,
            children: `Que dos cuentas compartan conexión o aparato no prueba nada por sí solo: pasa en una casa, en un locutorio o con dos hermanos. Sirve para mirar con más atención antes de pagar algo grande, no para bloquear a nadie por una coincidencia.`,
          }),
        ],
      }),
    ],
  });
}
function initializeDashboard() {
  Dy = `sin-panel`;
  Oy = {
    jugadores: 0,
    enJugadoresCents: 0n,
    cargadoCents: 0n,
    descargadoCents: 0n,
    gananciaCents: 0n,
  };
  My = {
    jugadores: `jugadores`,
    enJugadoresCents: `saldo de los jugadores`,
    cargadoCents: `cargado`,
    descargadoCents: `descargado`,
    gananciaCents: `ganancia`,
  };
  Ny = [My.enJugadoresCents, My.gananciaCents];
  By = {
    ahora: {
      titulo: `LO QUE TENÉS AHORA`,
      bajadaMadre: `El float es el saldo que tiene el casino en cada proveedor de juegos: mientras tenga saldo, esos juegos andan; si llega a cero, se frenan para todos. Son dos cuentas, en dos proveedores que se recargan por separado: Forever (tragamonedas y deportivas) y GGR (mesas en vivo y las tragamonedas de sus estudios).`,
      bajadaSocio: `Lo que tenés para cargar y lo que tienen tus jugadores en este momento.`,
      bajadaSocioSinFichas: `Lo que tienen tus jugadores en este momento.`,
    },
    movio: {
      titulo: `LO QUE SE MOVIÓ POR CAJA`,
      bajada: `Lo que se les cargó a los jugadores y lo que se les pagó cuando retiraron.`,
    },
    ganaste: {
      titulo: `LO QUE GANASTE`,
      bajada: `La ganancia es lo que apostaron tus jugadores menos los premios que cobraron. No es lo mismo que la caja: alguien puede perder hoy y retirar mañana, por eso van las dos.`,
    },
    frenado: {
      titulo: `LO QUE ESTÁ FRENADO`,
      bajada: `Plata que todavía no se movió porque espera a una persona.`,
    },
    porPanel: {
      titulo: `POR PANEL: LO TUYO Y LO DE CADA SOCIO`,
      bajada: `Arriba está todo sumado. Acá va separado según de qué panel es cada jugador: los de la casa madre son lo tuyo y los de cada socio, lo suyo. Lo cargado, lo descargado y la ganancia son desde el primer día; los jugadores, su saldo y las fichas, de este momento.`,
    },
    gente: {
      titulo: `TU GENTE`,
      bajada: `No es plata, pero ayuda a leer los números de arriba.`,
      tituloMadre: `LA GENTE DEL CASINO`,
      bajadaMadre: `Todo el casino: lo tuyo y lo de tus socios. No es plata, pero ayuda a leer los números de arriba.`,
    },
  };
  Vy = {
    floatForever: `Lo que tenés en Forever, el proveedor que paga las tragamonedas y las deportivas. Si llega a cero, esos juegos se frenan para todos.`,
    enUsoForever: (e) => `Contando sólo este float: ${e}`,
    floatGgr: `Lo que tenés en GGR, el proveedor que paga las mesas en vivo y las tragamonedas de sus estudios. Se recarga aparte de Forever: uno puede quedar en cero con el otro lleno. Va sin «ARS» porque el proveedor no dice en qué moneda lo informa.`,
    tusFichas: `Las fichas que te dio el panel principal. Cada carga que hacés sale de acá y cada descarga que pagás vuelve acá (un retiro grande que firma el panel principal, por ahora no vuelve). En cero no podés cargar más, salvo que el panel principal te deje quedar en rojo.`,
    tusFichasEnRojo: `Estás en rojo: el panel principal te deja seguir cargando sin fichas, y este número es lo que cargaste por encima de las que te dio. Cada descarga que pagás vuelve acá (un retiro grande que firma el panel principal, por ahora no).`,
    saldoJugadores: `Lo que tienen cargado tus jugadores entre todos. No es tuyo: lo pueden retirar cuando quieran.`,
    mayorSaldo: `Lo que tiene el jugador con más saldo. Es lo máximo que te pueden pedir de una sola vez.`,
    mayorSaldoMadre: `Lo que tiene el jugador con más saldo de todo el casino, sea tuyo o de un socio. Es lo máximo que puede pedir un solo jugador de una vez.`,
    cargadoHoy: `Lo que se les cargó a los jugadores hoy, desde las 0 h. Lo anulado no cuenta.`,
    descargadoHoy: `Lo que se les pagó a los jugadores hoy, desde las 0 h. Lo anulado no cuenta.`,
    cargadoSiempre: `Todo lo que se les cargó a los jugadores desde el primer día, descontando lo anulado.`,
    descargadoSiempre: `Todo lo que se les pagó a los jugadores desde el primer día, descontando lo anulado.`,
    premiosMadre: `Premios que pasaron el tope y esperan que alguien los apruebe. Todavía no se pagaron.`,
    premiosSocio: `Premios de tus jugadores que pasaron el tope. Todavía no se pagaron: los resuelve el panel principal.`,
    pedidos: `Pedidos de carga o de retiro que todavía no atendiste. Un mismo jugador puede tener uno de cada.`,
    jugadores: `Cuentas de jugadores, sin contar al personal del panel.`,
    jugaronHoy: `Jugadores distintos que apostaron hoy.`,
    activos: (e) =>
      `Jugadores que apostaron al menos una vez en los últimos ${e} días.`,
    equipo: `Las personas que entran al panel.`,
    todoJunto: `La suma de todos los paneles. Cargado y descargado dan lo mismo que arriba; el saldo y la ganancia pueden correrse un poco si alguien está jugando, porque cambian con cada jugada.`,
  };
  Hy = [
    `Jugadores: los que son de ese panel. Los que todavía no quedaron en ninguno (entraron sin link y nadie les cargó) cuentan en la casa madre.`,
    `Saldo de sus jugadores: lo que tienen cargado ahora.`,
    `Cargado y descargado: lo que se les cargó y se les pagó a los jugadores de ese panel, lo haya hecho la gente de ese panel o la de la casa madre.`,
    `Ganancia: lo que apostaron sus jugadores menos los premios que cobraron.`,
    `Fichas: lo que le queda al socio para cargar. La casa madre no tiene fichas: carga de los floats.`,
  ];
  Xy = (e) => e.replace(/ARS /g, `ARS\xA0`);
}
export {
  jy,
  Iy,
  Xy,
  DashboardSummary,
  DashboardCharts,
  ob,
  initializeDashboard,
};
