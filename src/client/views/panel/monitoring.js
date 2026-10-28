/**
 * panel / monitoring.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { classNames, og, Card, _g } from "./ui-components.js";
let fv, pv, mv, hv, gv;
function _v(e) {
  if (
    !fv(e) ||
    ![
      e.jugandoAhora,
      e.jugaronHoy,
      e.ventanaAhoraMin,
      e.apuestasUltimaHora,
    ].every(pv)
  )
    return null;
  let t = e.porMinuto;
  if (
    !Array.isArray(t) ||
    !t.every((e) => fv(e) && hv(e.hora) && pv(e.apuestas) && pv(e.jugadores))
  )
    return null;
  let n = e.pico;
  return n !== null && !(fv(n) && pv(n.apuestas) && hv(n.hora)) ? null : e;
}
function vv(e) {
  if (!fv(e)) return null;
  let { semaforo: t, copia: n, carga: r, memoria: i, disco: a } = e;
  return !fv(t) ||
    ![`procesador`, `memoria`, `disco`, `base`, `general`].every((e) =>
      gv.has(t[e]),
    ) ||
    !hv(t.resumen) ||
    !fv(n) ||
    !hv(n.nombre) ||
    !mv(n.memoriaMB) ||
    ![e.cpuPct, e.baseMs, e.encendidoHaceSeg].every(mv) ||
    typeof e.baseError != `boolean` ||
    (r !== null && !(fv(r) && mv(r.nucleos))) ||
    (i !== null &&
      !(
        fv(i) &&
        [i.totalMB, i.usadaMB, i.usadaPct].every(pv) &&
        (i.swap === null || (fv(i.swap) && mv(i.swap.usadaPct)))
      )) ||
    (a !== null && !(fv(a) && [a.usadoPct, a.totalGB, a.libreGB].every(pv)))
    ? null
    : e;
}
function yv(e) {
  if (fv(e)) {
    if (e.ok === !1 && (e.motivo === `sin-permiso` || e.motivo === `error`))
      return {
        ok: !1,
        motivo: e.motivo,
      };
    if (e.ok === !0)
      return {
        ok: !0,
        jugadores: _v(e.jugadores),
        servidor: vv(e.servidor),
        medidoEn: hv(e.medidoEn) ? e.medidoEn : ``,
      };
  }
  throw Error(`monitoreo: respuesta que no se entiende`);
}
async function bv(e, t = (e, t) => fetch(e, t), n = 1e4) {
  let r = new AbortController(),
    i = () => r.abort(),
    a = setTimeout(i, n);
  e?.aborted
    ? i()
    : e?.addEventListener(`abort`, i, {
        once: !0,
      });
  try {
    return yv(
      await (
        await t(`/api/monitoreo`, {
          cache: `no-store`,
          credentials: `same-origin`,
          headers: {
            accept: `application/json`,
          },
          signal: r.signal,
        })
      ).json(),
    );
  } finally {
    (clearTimeout(a), e?.removeEventListener(`abort`, i));
  }
}
function xv(e) {
  let t = e.cadaMs ?? 3e4,
    n = e.cadaEscondidaMs ?? 3e5,
    r = !0,
    i = null,
    a = e.yaHayDatos === !0,
    o = 0,
    s = !1,
    c = null,
    l = () => e.doc.visibilityState === `visible`;
  function u() {
    (c && clearTimeout(c), (c = setTimeout(f, s ? n : t)));
  }
  function d(t) {
    if (t.motivo === `sin-permiso` && (o++, !a && o >= 3)) {
      ((s = !0), e.alNegar());
      return;
    }
    s || e.alFallar();
  }
  function f() {
    if (((c = null), !r || i || !l())) return;
    let t = new AbortController();
    ((i = t),
      e
        .preguntar(t.signal)
        .then((t) => {
          if (r) {
            if (!t.ok) {
              d(t);
              return;
            }
            ((o = 0), (a = !0), (s = !1), e.alResponder(t));
          }
        })
        .catch(() => {
          r && !s && e.alFallar();
        })
        .finally(() => {
          ((i = null), r && u());
        }));
  }
  function p() {
    !r || !l() || (e.alTic(), !i && (c && clearTimeout(c), f()));
  }
  f();
  let m = setInterval(() => {
    r && l() && e.alTic();
  }, 1e3);
  return (
    e.doc.addEventListener(`visibilitychange`, p),
    () => {
      ((r = !1),
        i?.abort(),
        (i = null),
        c && clearTimeout(c),
        (c = null),
        clearInterval(m),
        e.doc.removeEventListener(`visibilitychange`, p));
    }
  );
}
let Sv;
function Cv() {
  let [e, t] = (0, React.useState)(() =>
      Sv
        ? {
            fase: `lista`,
            ...Sv,
            fallo: !1,
          }
        : {
            fase: `cargando`,
          },
    ),
    [n, r] = (0, React.useState)(() => (Sv ? Date.now() : 0));
  return (
    (0, React.useEffect)(
      () =>
        xv({
          preguntar: bv,
          yaHayDatos: Sv !== null,
          alResponder: (e) => {
            let n = Date.now();
            ((Sv = {
              jugadores: e.jugadores,
              servidor: e.servidor,
              recibidoEn: n,
            }),
              r(n),
              t({
                fase: `lista`,
                jugadores: e.jugadores,
                servidor: e.servidor,
                recibidoEn: n,
                fallo: !1,
              }));
          },
          alNegar: () => {
            ((Sv = null),
              t({
                fase: `nada`,
              }));
          },
          alFallar: () =>
            t((e) =>
              e.fase === `lista`
                ? {
                    ...e,
                    fallo: !0,
                  }
                : {
                    fase: `lista`,
                    jugadores: null,
                    servidor: null,
                    recibidoEn: null,
                    fallo: !0,
                  },
            ),
          alTic: () => r(Date.now()),
          doc: document,
        }),
      [],
    ),
    e.fase === `lista`
      ? {
          fase: `lista`,
          jugadores: e.jugadores,
          servidor: e.servidor,
          haceSeg:
            e.recibidoEn === null
              ? null
              : Math.max(0, Math.round((n - e.recibidoEn) / 1e3)),
          fallo: e.fallo,
        }
      : e
  );
}
function MonitoringCard({ i: e = 0 }) {
  return (0, JSXRuntime.jsx)(Xv, {
    m: Cv(),
    i: e,
  });
}
let Tv, Ev, Dv;
function Ov(e) {
  return e < 60
    ? `hace ${e} s`
    : e < 3600
      ? `hace ${Math.floor(e / 60)} min`
      : `hace ${Math.floor(e / 3600)} h`;
}
function kv(e) {
  return e < 3600
    ? `${Math.max(1, Math.floor(e / 60))} min`
    : e < 48 * 3600
      ? `${Math.floor(e / 3600)} h`
      : `${Math.floor(e / 86400)} días`;
}
function Av(e) {
  return `${e} ${e === 1 ? `núcleo` : `núcleos`}`;
}
let jv, Mv, Nv, Pv;
function Fv(e) {
  return e.haceSeg === null
    ? null
    : e.fallo
      ? `falla`
      : e.haceSeg >= 75
        ? `espera`
        : null;
}
function Iv(e) {
  return e === `falla`
    ? `Sin datos nuevos: no se sabe cómo está ahora`
    : `Datos viejos: actualizando…`;
}
function Lv({ texto: e, tono: t, late: n, falla: r }) {
  return (0, JSXRuntime.jsx)(_g, {
    texto: `MONITOREO`,
    derecha: (0, JSXRuntime.jsxs)(`span`, {
      className: classNames(`mo-cabeza`, r && `mo-falla`),
      children: [
        (0, JSXRuntime.jsx)(`span`, {
          "aria-hidden": !0,
          className: classNames(`punto`, !n && `mo-quieto`),
          style: og(t),
        }),
        (0, JSXRuntime.jsx)(`span`, {
          children: e,
        }),
      ],
    }),
  });
}
function Rv({ texto: e }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `mo-sindato`,
    children: [
      (0, JSXRuntime.jsx)(`b`, {
        children: `sin dato`,
      }),
      (0, JSXRuntime.jsx)(`span`, {
        children: e,
      }),
    ],
  });
}
function zv({ valor: e, tono: t, rot: n, sub: r }) {
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `mo-cifra`,
    style: og(t),
    children: [
      (0, JSXRuntime.jsx)(`div`, {
        className: `mo-cifra-n`,
        children: e,
      }),
      (0, JSXRuntime.jsx)(`div`, {
        className: `mo-cifra-rot`,
        children: n,
      }),
      (0, JSXRuntime.jsx)(`div`, {
        className: `mo-cifra-sub`,
        children: r,
      }),
    ],
  });
}
function Bv(e) {
  let t = e.porMinuto[0]?.hora,
    n = e.porMinuto[e.porMinuto.length - 1]?.hora;
  return `Apuestas por minuto en la última hora${t && n ? `, de ${t} a ${n}` : ``}: ${`${Tv(e.apuestasUltimaHora)} ${e.apuestasUltimaHora === 1 ? `apuesta` : `apuestas`} en total`}${e.pico ? `, con un pico de ${Tv(e.pico.apuestas)} a las ${e.pico.hora}` : ``}.`;
}
function Vv({ j: e }) {
  let t = Math.max(1, e.porMinuto.length),
    n = Math.max(1, ...e.porMinuto.map((e) => e.apuestas)),
    r = e.pico
      ? e.porMinuto.findIndex(
          (t) => t.hora === e.pico?.hora && t.apuestas === e.pico.apuestas,
        )
      : -1;
  return (0, JSXRuntime.jsx)(`svg`, {
    role: `img`,
    "aria-label": Bv(e),
    viewBox: `0 0 ${t * 10} 48`,
    preserveAspectRatio: `none`,
    className: `mo-grafico`,
    width: `100%`,
    height: 48,
    children: e.porMinuto.map((t, i) => {
      let a = t.apuestas > 0 ? Math.max(2, (t.apuestas / n) * 46) : 1,
        o = i === e.porMinuto.length - 1;
      return (0, JSXRuntime.jsx)(
        `rect`,
        {
          className: classNames(
            `mo-barra`,
            t.apuestas === 0 && `cero`,
            i === r && `pico`,
            o && `en-curso`,
          ),
          x: i * 10 + 1.5,
          y: 48 - a,
          width: 7,
          height: a,
          rx: 1,
          children: (0, JSXRuntime.jsx)(`title`, {
            children: `${o ? `minuto en curso · ` : ``}${t.hora} · ${Tv(t.apuestas)} ${t.apuestas === 1 ? `apuesta` : `apuestas`} · ${Tv(t.jugadores)} ${t.jugadores === 1 ? `jugador` : `jugadores`}`,
          }),
        },
        i,
      );
    }),
  });
}
function Hv({ j: e, vejez: t = null }) {
  return (0, JSXRuntime.jsxs)(`section`, {
    "aria-label": `Jugadores`,
    className: `mo-caja`,
    children: [
      (0, JSXRuntime.jsx)(`h2`, {
        className: `mo-tit`,
        children: `Jugadores`,
      }),
      e === null
        ? (0, JSXRuntime.jsx)(Rv, {
            texto: `No se pudieron contar los jugadores. Se vuelve a intentar solo.`,
          })
        : (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
            children: [
              (0, JSXRuntime.jsxs)(`div`, {
                className: `mo-cifras`,
                children: [
                  (0, JSXRuntime.jsx)(zv, {
                    valor: Tv(e.jugandoAhora),
                    tono: e.jugandoAhora > 0 && !t ? `verde` : `gris`,
                    rot: `Jugando ahora`,
                    sub: `apostaron en los últimos ${e.ventanaAhoraMin} min`,
                  }),
                  (0, JSXRuntime.jsx)(zv, {
                    valor: Tv(e.jugaronHoy),
                    tono: `tx`,
                    rot: `Jugaron hoy`,
                    sub: `desde la medianoche`,
                  }),
                ],
              }),
              (0, JSXRuntime.jsxs)(`div`, {
                className: `mo-hora`,
                children: [
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `mo-hora-cab`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        className: `mo-hora-rot`,
                        children: `Apuestas por minuto · última hora`,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        className: classNames(
                          `mo-pico`,
                          !e.pico && `mo-pico-no`,
                        ),
                        children: e.pico
                          ? `pico ${Tv(e.pico.apuestas)}/min`
                          : `sin apuestas`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsx)(Vv, {
                    j: e,
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    "aria-hidden": !0,
                    className: `mo-eje`,
                    children: [
                      (0, JSXRuntime.jsx)(`span`, {
                        children: e.porMinuto[0]?.hora ?? ``,
                      }),
                      (0, JSXRuntime.jsx)(`span`, {
                        children: `ahora`,
                      }),
                    ],
                  }),
                  (0, JSXRuntime.jsxs)(`div`, {
                    className: `mo-total`,
                    children: [
                      Tv(e.apuestasUltimaHora),
                      ` `,
                      e.apuestasUltimaHora === 1 ? `apuesta` : `apuestas`,
                      ` en la última hora`,
                    ],
                  }),
                ],
              }),
            ],
          }),
    ],
  });
}
function Uv({
  medida: e,
  nombre: t,
  valor: n,
  dicho: r = null,
  barra: i,
  estado: a,
  detalle: o,
  titulo: s,
  viejo: c,
}) {
  let l = n === null ? 0 : Math.min(100, Math.max(0, i));
  return (0, JSXRuntime.jsxs)(`div`, {
    className: `mo-med`,
    "data-medida": e,
    "data-estado": a,
    style: og(c ? `gris` : jv[a]),
    title: s,
    children: [
      (0, JSXRuntime.jsxs)(`div`, {
        className: `mo-med-fila`,
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            className: `mo-med-nom`,
            children: t,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            className: classNames(`mo-med-val`, r && `con-dicho`),
            children: n ?? `sin dato`,
          }),
          r &&
            (0, JSXRuntime.jsx)(`span`, {
              className: `mo-med-dicho`,
              children: r,
            }),
          (0, JSXRuntime.jsx)(`span`, {
            className: `mo-lector`,
            children: `(${Mv[a]}${c ? `, dato viejo` : ``})`,
          }),
        ],
      }),
      (0, JSXRuntime.jsx)(`div`, {
        "aria-hidden": !0,
        className: `mo-med-riel`,
        children: (0, JSXRuntime.jsx)(`div`, {
          className: classNames(`mo-med-lleno`, n !== null && `con-dato`),
          style: {
            width: `${l}%`,
          },
        }),
      }),
      o &&
        (0, JSXRuntime.jsx)(`div`, {
          className: `mo-med-det`,
          children: o,
        }),
    ],
  });
}
function Wv(e) {
  let t = Nv[e.semaforo.procesador],
    n = e.memoria,
    r = n?.swap?.usadaPct ?? null,
    i = r === null ? `` : ` · memoria de reserva ${Ev(r)}`;
  return {
    procesador: t,
    memoria: n
      ? `${Dv(n.usadaMB / 1024)} de ${Dv(n.totalMB / 1024)} GB${i}`
      : null,
    disco: e.disco
      ? `${Dv(e.disco.libreGB, 0)} GB libres de ${Dv(e.disco.totalGB, 0)}`
      : null,
    base:
      e.baseMs === null
        ? null
        : e.semaforo.base === `mal`
          ? `responde muy lento`
          : e.semaforo.base === `atento`
            ? `responde lento`
            : `responde al instante`,
  };
}
function Gv(e) {
  let t =
    e.copia.memoriaMB === null ? `` : `, que usa ${Tv(e.copia.memoriaMB)} MB`;
  return {
    texto:
      e.encendidoHaceSeg === null
        ? null
        : `Encendido hace ${kv(e.encendidoHaceSeg)}`,
    titulo: `Respondió la copia ${e.copia.nombre}${t}`,
  };
}
function Kv({ s: e, vejez: t = null }) {
  if (e === null)
    return (0, JSXRuntime.jsxs)(`section`, {
      "aria-label": `Servidor`,
      className: `mo-caja`,
      children: [
        (0, JSXRuntime.jsx)(`h2`, {
          className: `mo-tit`,
          children: `Servidor`,
        }),
        (0, JSXRuntime.jsx)(Rv, {
          texto: `No se pudo leer el estado del servidor. Se vuelve a intentar solo.`,
        }),
      ],
    });
  let n = e.semaforo.general,
    r = Wv(e),
    i = Gv(e),
    a = t !== null,
    o = t
      ? {
          estado: `viejo`,
          tono: t === `falla` ? `ambar` : `gris`,
          texto: Iv(t),
        }
      : {
          estado: n,
          tono: jv[n],
          texto: e.semaforo.resumen,
        },
    s = e.carga?.nucleos ?? null;
  return (0, JSXRuntime.jsxs)(`section`, {
    "aria-label": `Servidor`,
    className: `mo-caja`,
    children: [
      (0, JSXRuntime.jsx)(`h2`, {
        className: `mo-tit`,
        children: `Servidor`,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        role: `status`,
        className: `mo-resumen`,
        "data-estado": o.estado,
        style: og(o.tono),
        children: [
          (0, JSXRuntime.jsx)(`span`, {
            "aria-hidden": !0,
            className: `mo-resumen-punto`,
          }),
          (0, JSXRuntime.jsx)(`span`, {
            children: o.texto,
          }),
        ],
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `mo-meds`,
        children: [
          (0, JSXRuntime.jsx)(Uv, {
            medida: `procesador`,
            nombre: `Procesador`,
            valor: e.cpuPct === null ? null : Ev(e.cpuPct),
            barra: e.cpuPct ?? 0,
            estado: e.semaforo.procesador,
            detalle: r.procesador,
            viejo: a,
            titulo: s ? `La máquina tiene ${Av(s)}` : void 0,
          }),
          (0, JSXRuntime.jsx)(Uv, {
            medida: `memoria`,
            nombre: `Memoria`,
            valor: e.memoria ? Ev(e.memoria.usadaPct) : null,
            barra: e.memoria?.usadaPct ?? 0,
            estado: e.semaforo.memoria,
            detalle: r.memoria,
            viejo: a,
          }),
          (0, JSXRuntime.jsx)(Uv, {
            medida: `disco`,
            nombre: `Disco`,
            valor: e.disco ? Ev(e.disco.usadoPct) : null,
            barra: e.disco?.usadoPct ?? 0,
            estado: e.semaforo.disco,
            detalle: r.disco,
            viejo: a,
          }),
          (0, JSXRuntime.jsx)(Uv, {
            medida: `base`,
            nombre: `Base de datos`,
            valor: e.baseError
              ? `no contesta`
              : e.baseMs === null
                ? null
                : `${Tv(e.baseMs)} ms`,
            dicho:
              e.baseError || e.baseMs === null ? null : Pv[e.semaforo.base],
            barra: e.baseError ? 100 : (e.baseMs ?? 0) / 10,
            estado: e.semaforo.base,
            detalle: r.base,
            viejo: a,
          }),
        ],
      }),
      i.texto &&
        (0, JSXRuntime.jsx)(`div`, {
          className: `mo-pie`,
          title: i.titulo,
          children: i.texto,
        }),
    ],
  });
}
let qv, Jv;
function Yv({ i: e }) {
  return (0, JSXRuntime.jsxs)(Card, {
    i: e,
    clase: `mo mo-esqueleto`,
    "aria-label": `Monitoreo`,
    "aria-busy": `true`,
    children: [
      (0, JSXRuntime.jsx)(Lv, {
        texto: `cargando…`,
        tono: `gris`,
        late: !1,
        falla: !1,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `mo-bloques`,
        "aria-hidden": !0,
        children: [
          (0, JSXRuntime.jsx)(Hv, {
            j: qv,
          }),
          (0, JSXRuntime.jsx)(Kv, {
            s: Jv,
          }),
        ],
      }),
    ],
  });
}
function Xv({ m: e, i: t = 0 }) {
  if (e.fase === `nada`) return null;
  if (e.fase === `cargando`)
    return (0, JSXRuntime.jsx)(Yv, {
      i: t,
    });
  let n = Fv(e),
    r = e.haceSeg !== null && n === null,
    i = e.fallo
      ? e.haceSeg === null
        ? `no se pudo leer · se reintenta solo`
        : `no se pudo actualizar · datos de ${Ov(e.haceSeg)}`
      : e.haceSeg === null
        ? ``
        : `actualizado ${Ov(e.haceSeg)}`;
  return (0, JSXRuntime.jsxs)(Card, {
    i: t,
    clase: `mo`,
    "aria-label": `Monitoreo`,
    "data-viejo": n ?? void 0,
    children: [
      (0, JSXRuntime.jsx)(Lv, {
        texto: i,
        tono: r ? `verde` : e.fallo ? `ambar` : `gris`,
        late: r,
        falla: e.fallo,
      }),
      (0, JSXRuntime.jsxs)(`div`, {
        className: `mo-bloques`,
        children: [
          (0, JSXRuntime.jsx)(Hv, {
            j: e.jugadores,
            vejez: n,
          }),
          (0, JSXRuntime.jsx)(Kv, {
            s: e.servidor,
            vejez: n,
          }),
        ],
      }),
    ],
  });
}
function initializeMonitoring() {
  fv = (e) => typeof e == `object` && !!e && !Array.isArray(e);
  pv = (e) => typeof e == `number` && Number.isFinite(e);
  mv = (e) => e === null || pv(e);
  hv = (e) => typeof e == `string`;
  gv = new Set([`bien`, `atento`, `mal`, `sin dato`]);
  Sv = null;
  Tv = (e) => Math.round(e).toLocaleString(`es-AR`);
  Ev = (e) => `${Math.round(e)}%`;
  Dv = (e, t = 1) =>
    e.toLocaleString(`es-AR`, {
      minimumFractionDigits: t,
      maximumFractionDigits: t,
    });
  jv = {
    bien: `verde`,
    atento: `ambar`,
    mal: `rojo`,
    "sin dato": `gris`,
  };
  Mv = {
    bien: `bien`,
    atento: `atento`,
    mal: `mal`,
    "sin dato": `sin dato`,
  };
  Nv = {
    bien: `tranquilo`,
    atento: `algo exigido`,
    mal: `muy exigido`,
    "sin dato": null,
  };
  Pv = {
    bien: `al instante`,
    atento: `lenta`,
    mal: `muy lenta`,
    "sin dato": null,
  };
  qv = {
    jugandoAhora: 0,
    jugaronHoy: 0,
    ventanaAhoraMin: 5,
    porMinuto: Array.from(
      {
        length: 60,
      },
      () => ({
        hora: `00:00`,
        apuestas: 0,
        jugadores: 0,
      }),
    ),
    apuestasUltimaHora: 0,
    pico: {
      apuestas: 34,
      hora: `00:00`,
    },
  };
  Jv = {
    cpuPct: 22,
    carga: null,
    memoria: {
      totalMB: 8192,
      usadaMB: 4608,
      usadaPct: 56,
      swap: null,
    },
    disco: {
      usadoPct: 23,
      totalGB: 75,
      libreGB: 58,
      punto: ``,
    },
    encendidoHaceSeg: 3 * 86400,
    copia: {
      nombre: ``,
      memoriaMB: null,
    },
    baseMs: 4,
    baseError: !1,
    semaforo: {
      procesador: `bien`,
      memoria: `bien`,
      disco: `bien`,
      base: `bien`,
      general: `bien`,
      resumen: `Todo bien`,
    },
  };
}
export { MonitoringCard, initializeMonitoring };
