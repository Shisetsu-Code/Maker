/**
 * panel / dashboard-projection.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { installDemoDialogs } from "./demo-dialogs.js";
import { formatMoney, formatMoneyInput, us } from "./money-and-phone.js";
import { Js, Zs } from "./activity-ledger.js";
import { Qc, al, ml, hl } from "./cashier-rules.js";
import { uu, vu, Cu, wu } from "./demo-operations.js";
import { jy, Iy } from "./dashboard.js";
let sw;
function cw(e) {
  if (!e)
    return {
      ...sw,
    };
  let t = (t) =>
    ml(
      {
        rol: e.role,
        esMadre: e.esMadre,
      },
      t,
    ).ok;
  return {
    puedeCrearCajeros: t(`personal.crear`),
    puedeTocarAcceso: t(`personal.acceso`),
    puedeCambiarRol: t(`personal.cambiar-rol`),
    puedeBorrarPersonal: t(`personal.eliminar`),
    puedeCrearJugadores: t(`jugador.crear`),
    puedeBorrarJugadores: t(`jugador.eliminar`),
    puedeReasignarCajero: t(`jugador.cambiar-cajero`),
    cruzaCasas: e.role === `root` && e.esMadre === !0,
  };
}
let lw;
function uw(e, t) {
  return hl(
    lw(e),
    {
      tipo: `jugador`,
      casaId: t ?? null,
    },
    `jugador.cambiar-cajero`,
  ).ok;
}
function dw(e, t, n) {
  return hl(
    lw(e),
    {
      tipo: `jugador`,
      casaId: t ?? null,
      cajeroActual: n ?? null,
    },
    `jugador.cambiar-cajero`,
  ).ok;
}
let fw;
function pw(e, t, n, r) {
  let i = n > 0n ? n : 0n;
  if (!e.enabled)
    return {
      activo: !1,
      topePorRetiroCents: null,
      restanteDiarioCents: null,
      usadoDiarioCents: t.dailyTotalCents,
      esperaSegundos: 0,
      descargasRestantes: null,
      maxSinCodigoCents: i,
      sinSaldo: i === 0n,
    };
  let a =
      e.maxDailyCents == null
        ? null
        : (() => {
            let n = e.maxDailyCents - t.dailyTotalCents;
            return n <= 0n ? 0n : fw(n, e.maxDailyCents);
          })(),
    o = (() => {
      if (e.cooldownSeconds <= 0 || !t.lastUnloadAt) return 0;
      let n = t.lastUnloadAt.getTime() + e.cooldownSeconds * 1e3 - r.getTime();
      return n > 0 ? Math.ceil(n / 1e3) : 0;
    })(),
    s =
      e.maxPerWindow == null
        ? null
        : Math.max(0, e.maxPerWindow - t.windowCount),
    c = o > 0 || s === 0,
    l = c ? 0n : i;
  return (
    !c &&
      e.maxPerWithdrawalCents != null &&
      (l = fw(l, e.maxPerWithdrawalCents)),
    !c && a != null && (l = fw(l, a)),
    {
      activo: !0,
      topePorRetiroCents: e.maxPerWithdrawalCents,
      restanteDiarioCents: a,
      usadoDiarioCents: t.dailyTotalCents,
      esperaSegundos: o,
      descargasRestantes: s,
      maxSinCodigoCents: l,
      sinSaldo: i === 0n,
    }
  );
}
function mw(e, t) {
  if (!e.activo || e.sinSaldo) return null;
  if (e.esperaSegundos > 0) {
    let t = Math.ceil(e.esperaSegundos / 60);
    return `Retiró recién: por ${t} ${t === 1 ? `minuto` : `minutos`} más, cualquier monto pide el código.`;
  }
  if (e.descargasRestantes === 0)
    return `Ya hizo todos los retiros seguidos que permite el sistema: el próximo pide el código.`;
  let n = [];
  return (
    e.maxSinCodigoCents > 0n
      ? n.push(`Hasta ${t(e.maxSinCodigoCents)} sin código`)
      : n.push(`Cualquier monto pide el código`),
    e.restanteDiarioCents != null &&
      n.push(`le quedan ${t(e.restanteDiarioCents)} de las últimas 24 h`),
    e.descargasRestantes != null &&
      n.push(
        `${e.descargasRestantes} ${e.descargasRestantes === 1 ? `retiro` : `retiros`} seguidos`,
      ),
    `${n.join(` · `)}.`
  );
}
function hw(e) {
  let t = e < 0n ? 0n : e;
  if (t < 60n) return `recién`;
  let n = t / 60n;
  if (n < 60n) return `hace ${n} min`;
  let r = n / 60n;
  return r < 24n ? `hace ${r} h` : `hace ${r / 24n} d`;
}
let gw, _w, vw, yw, bw, xw, Sw, Cw, ww, Tw;
function Ew(e) {
  let [t, n, r] = Tw.format(new Date(e)).split(`-`).map(Number);
  return Math.round(Date.UTC(t, n - 1, r) / gw);
}
let Dw, Ow;
function kw(e, t) {
  let n = Ew(e),
    r = Ew(t);
  return n === r
    ? `hoy ${Sw(e)}`
    : n === r - 1
      ? `ayer ${Sw(e)}`
      : `${xw(e)} ${Sw(e)}`;
}
function Aw(e) {
  let t = e.tipo === `load` ? 1n : -1n;
  return e.anulaA === null ? t * e.monto : -t * e.monto;
}
let jw;
function Mw(e, t) {
  let n = e.floatBase;
  for (let r of e.jugadas) r.cuando <= t && (n -= r.pagado - r.apostado);
  return n;
}
function projectPanelState(e, t) {
  let n = t.ahora,
    r = Ew(n),
    i = uu(e),
    a = e.personal.find((t) => t.id === e.yoId),
    o = {
      id: a.id,
      role: a.role,
      casaId: i.id,
      esMadre: !0,
    },
    s = new Map(e.personal.map((e) => [e.id, e])),
    c = new Map(e.jugadores.map((e) => [e.id, e])),
    l = (t) => vu(e, t),
    u = (n) =>
      n === i.id
        ? t.casaNombre
        : (e.casas.find((e) => e.id === n)?.nombre ?? `—`),
    d = new Map();
  for (let t of e.notas) d.set(t.jugadorId, [...(d.get(t.jugadorId) ?? []), t]);
  let f = (t) => {
      let n = 0n,
        r = 0n,
        i = 0;
      for (let a of e.movimientos)
        a.jugadorId !== t.id ||
          a.anulado ||
          a.anulaA !== null ||
          (a.tipo === `load` ? (n += a.monto) : ((r += a.monto), i++));
      let a = 0n;
      for (let n of e.jugadas) n.jugadorId === t.id && (a += n.apostado);
      return {
        cargado: n,
        retirado: r,
        retiros: i,
        apostado: a,
      };
    },
    p = [...e.jugadores]
      .sort((e, t) =>
        e.saldo === t.saldo
          ? e.username.localeCompare(t.username)
          : e.saldo > t.saldo
            ? -1
            : 1,
      )
      .map((t) => {
        let r = Qc(t.saldo, 0n),
          i = d.get(t.id) ?? [],
          a = i[i.length - 1],
          c = t.cajeroId ? (s.get(t.cajeroId) ?? null) : null,
          u = uw(o, t.casaId),
          p =
            u &&
            dw(
              o,
              t.casaId,
              c
                ? {
                    id: c.id,
                    rol: c.role,
                    casaId: c.casaId,
                  }
                : null,
            ),
          m = f(t);
        return {
          username: t.username,
          balance: formatMoney(t.saldo),
          cents: Number(t.saldo),
          disponible: formatMoney(r),
          disponibleInput: r > 0n ? formatMoneyInput(r) : null,
          frozen: t.congelado,
          status: t.estado,
          esStaff: t.esStaff,
          playerId: t.id,
          casaId: t.casaId,
          ...(p
            ? {
                cajero: c?.username ?? null,
              }
            : {}),
          gestionable: u,
          cajeroReasignable: p,
          ficha: {
            cargado: formatMoney(m.cargado),
            apostado: formatMoney(m.apostado),
            retirado: formatMoney(m.retirado),
            retiros: m.retiros,
            alta: vw(t.alta),
            alerta: t.alerta,
          },
          limite: mw(pw(Cu, wu(e, t.id, n), r, new Date(n)), formatMoney),
          nota: a
            ? {
                texto: a.texto,
                autor: l(a.autorId) ?? `—`,
                cuando: vw(a.cuando),
                total: i.length,
              }
            : null,
        };
      }),
    m = [...e.pedidos]
      .sort((e, t) => e.cuando - t.cuando)
      .flatMap((e) => {
        let t = c.get(e.jugadorId);
        if (!t) return [];
        let r = Qc(t.saldo, 0n),
          i = BigInt(Math.max(0, Math.floor((n - e.cuando) / 1e3)));
        return [
          {
            id: e.id,
            username: t.username,
            kind: e.tipo,
            amount: formatMoney(e.monto),
            amountInput: ww(e.monto),
            note: e.nota,
            when: hw(i),
            minutos: Math.floor(Number(i) / 60),
            saldo: formatMoney(r),
            alcanza: e.tipo !== `unload` || r >= e.monto,
            frozen: t.congelado,
            status: t.estado,
            ...(e.comprobantes.length
              ? {
                  comprobantes: e.comprobantes.map((e) => ({
                    id: e.id,
                    pdf: !1,
                  })),
                }
              : {}),
          },
        ];
      }),
    h = [...e.movimientos]
      .sort((e, t) => t.cuando - e.cuando)
      .slice(0, 60)
      .map((e) => {
        let t = jw(e);
        return {
          id: (e.tipo === `load` ? `i` : `o`) + e.id,
          kind: t ? `in` : `out`,
          amount: formatMoney(e.monto),
          when: vw(e.cuando),
          username: c.get(e.jugadorId)?.username ?? null,
          operador: l(e.operadorId),
          ref: e.id,
          anulado: e.anulado,
          esAnulacion: e.anulaA !== null,
          motivo: e.motivo,
          saldoDespues: formatMoney(e.saldoDespues),
        };
      }),
    g = 0n,
    _ = 0n;
  for (let t of e.jugadores)
    (t.saldo > 0n && (g += t.saldo), t.saldo > _ && (_ = t.saldo));
  let v = 0n,
    y = 0n,
    b = 0n,
    x = 0n;
  for (let t of e.movimientos) {
    let e = Aw(t),
      n = Ew(t.cuando) === r;
    t.tipo === `load` ? ((v += e), n && (b += e)) : ((y -= e), n && (x -= e));
  }
  let S = {
      inPlayers: formatMoney(g),
      loads: formatMoney(v),
      unloads: formatMoney(y),
      topPlayer: formatMoney(_),
      loadsHoy: formatMoney(b),
      unloadsHoy: formatMoney(x),
      netoHoy: Cw(b - x),
      netoHoyPositivo: b - x >= 0n,
    },
    C = (t, n) => {
      let r = 0n;
      for (let i of e.jugadas) {
        let e = Ew(i.cuando);
        e >= t && e <= n && (r += i.apostado - i.pagado);
      }
      return r;
    },
    w = (t, n) => {
      let r = 0n;
      for (let i of e.movimientos) {
        let e = Ew(i.cuando);
        e >= t && e <= n && (r += Aw(i));
      }
      return r;
    },
    T = (e, t, n) => {
      let i = t === null ? -1 / 0 : r - t + 1,
        a = C(i, r),
        o = w(i, r),
        s = t === null ? null : C(i - t, i - 1);
      return {
        k: e,
        v: Cw(a),
        positivo: a >= 0n,
        sub: `caja ${Cw(o)}`,
        caja: Cw(o),
        ref: s === null || n === null ? null : `${n}: ${Cw(s)}`,
      };
    },
    E = [
      T(`Hoy`, 1, `ayer`),
      T(`7 días`, 7, `7 previos`),
      T(`30 días`, 30, `30 previos`),
      T(`Desde siempre`, null, null),
    ],
    D = Mw(e, n),
    O = Mw(e, n - gw) - D,
    ee = {
      balance: Number(D) / 100,
      bajo: D < 40000000n,
      critico: D < 15000000n,
      caida: O > 0n ? formatMoney(O) : null,
      horas: O > 0n ? Number((D * 24n) / O) : null,
      enUso: `en jugadores ${formatMoney(g)} · libre ${Cw(D - g)}`,
      noAlcanza: D < g,
    },
    te = (e, t, n = ``) =>
      Array.from(
        {
          length: t,
        },
        (t, r) => {
          let i = e + r,
            a = C(i, i);
          return {
            valor: Number(a) / 100,
            etiqueta: xw(i * gw + 12 * _w),
            texto: `${n}${Cw(a)}`,
          };
        },
      ),
    k = (t, n, r = ``) =>
      Array.from(
        {
          length: n,
        },
        (n, i) => {
          let a = t + i,
            o = 0n,
            s = 0n;
          for (let t of e.movimientos) {
            if (Ew(t.cuando) !== a) continue;
            let e = Aw(t);
            e > 0n ? (o += e) : (s -= e);
          }
          return {
            etiqueta: xw(a * gw + 12 * _w),
            arriba: Number(o) / 100,
            abajo: Number(s) / 100,
            textoArriba: `${r}${formatMoney(o)}`,
            textoAbajo: `${r}${formatMoney(s)}`,
          };
        },
      ),
    A = Math.floor(n / _w) * _w,
    j = Array.from(
      {
        length: 14,
      },
      (t, n) => {
        let r = A - (13 - n) * _w,
          i = Mw(e, r);
        return {
          valor: Number(i) / 100,
          etiqueta: `${Sw(r)} h`,
          texto: formatMoney(i),
        };
      },
    ),
    M = {
      gananciaFallo: !1,
      cajaFallo: !1,
      ganancia: te(r - 29, 30),
      gananciaAntes: te(r - 59, 30, `ant. `),
      caja: k(r - 13, 14),
      cajaAntes: k(r - 27, 14, `ant. `),
      float: j,
    },
    N = e.personal.map((e) => ({
      id: e.id,
      username: e.username,
      role: e.role,
      activo: e.activo,
      email: e.correo,
      tieneSegundoFactor: e.segundoFactor,
      casa: e.casaId === i.id ? null : u(e.casaId),
      desde: yw(e.desde),
      demo: e.demo,
    })),
    P = e.jugadores.filter((e) => !e.esStaff),
    F = [...e.casas]
      .sort(
        (e, t) => Number(t.esMadre) - Number(e.esMadre) || e.desde - t.desde,
      )
      .map((t) => {
        let n = P.filter((e) => e.casaId === t.id),
          r = 0n;
        for (let e of n) e.saldo > 0n && (r += e.saldo);
        return {
          id: t.id,
          nombre: u(t.id),
          esMadre: t.esMadre,
          activa: t.activa,
          permiteRojo: t.permiteRojo,
          cupo: Cw(t.cupo),
          cupoNegativo: t.cupo < 0n,
          personal: e.personal.filter((e) => e.casaId === t.id).length,
          jugadores: n.length,
          enJugadores: formatMoney(r),
          desde: bw(t.desde),
        };
      }),
    ne = Dw(n),
    I = e.personal
      .filter((t) => t.id !== e.yoId)
      .map((t) => {
        let n = new Set(
            e.jugadores.filter((e) => e.cajeroId === t.id).map((e) => e.id),
          ),
          r = new Map();
        for (let t of e.jugadas) {
          if (!n.has(t.jugadorId)) continue;
          let e = Dw(t.cuando);
          r.set(e, (r.get(e) ?? 0n) + t.apostado - t.pagado);
        }
        r.has(ne) || r.set(ne, 0n);
        let i = [...r.entries()]
            .sort(([e], [t]) => e.localeCompare(t))
            .map(([e, t]) => ({
              mes: e,
              netwinCents: t,
            })),
          a = t.comisionBps ?? 0,
          o = Js(i, a),
          s = o.find((e) => e.mes === ne) ?? null,
          c = o.length ? o[o.length - 1].arrastreSaleCents : 0n;
        return {
          cajeroId: t.id,
          username: t.username,
          activo: t.activo,
          porcentaje: Zs(a),
          sinPorcentaje: a === 0,
          jugadores: n.size,
          netwinMes: formatMoney(s?.netwinCents ?? 0n),
          netwinMesNegativo: (s?.netwinCents ?? 0n) < 0n,
          comisionMes: formatMoney(s?.comisionCents ?? 0n),
          debeCents: c < 0n ? formatMoney(-c) : null,
          historial: o
            .slice(-6)
            .reverse()
            .map((e) => ({
              mes: e.mes,
              netwin: formatMoney(e.netwinCents),
              comision: formatMoney(e.comisionCents),
            })),
        };
      }),
    L = new Map();
  for (let t of e.movimientos) {
    if (t.anulado || t.anulaA !== null) continue;
    let e = c.get(t.jugadorId);
    if (!e || e.esStaff) continue;
    let n = Dw(t.cuando),
      r = `${e.id}|${n}`,
      i = L.get(r) ?? {
        j: e,
        mes: n,
        cargado: 0n,
        retirado: 0n,
        retiros: 0,
      };
    (t.tipo === `load`
      ? (i.cargado += t.monto)
      : ((i.retirado += t.monto), i.retiros++),
      L.set(r, i));
  }
  let R = [...L.values()]
      .filter((e) => e.retirado > e.cargado)
      .sort(
        (e, t) =>
          t.mes.localeCompare(e.mes) ||
          (t.retirado - t.cargado > e.retirado - e.cargado ? 1 : -1),
      )
      .slice(0, 20)
      .map((e) => ({
        username: e.j.username,
        mes: Ow(e.mes),
        cargado: formatMoney(e.cargado),
        retirado: formatMoney(e.retirado),
        neto: formatMoney(e.retirado - e.cargado),
        retiros: e.retiros,
      })),
    re = 0n,
    ie = 0n,
    ae = 0,
    oe = 0;
  for (let t of e.movimientos)
    t.operadorId !== a.id ||
      Ew(t.cuando) !== r ||
      t.anulaA !== null ||
      (t.tipo === `load` ? ((re += t.monto), ae++) : ((ie += t.monto), oe++));
  let se = {
      quien: a.username,
      cargas: {
        n: ae,
        total: formatMoney(re),
      },
      descargas: {
        n: oe,
        total: formatMoney(ie),
      },
      nuevos: P.filter((e) => Ew(e.alta) === r).length,
      enMano: Cw(re - ie),
      enManoNegativo: re - ie < 0n,
      porcentaje: null,
      comisionMes: null,
      jugadores: e.jugadores.filter((e) => e.cajeroId === a.id).length,
      debe: null,
    },
    ce = [...e.retenidos]
      .sort((e, t) => t.cuando - e.cuando)
      .map((e) => ({
        id: e.id,
        amount: formatMoney(e.monto),
        wager: e.wager,
        when: kw(e.cuando, n),
        username: c.get(e.jugadorId)?.username ?? null,
        motivo: e.motivo,
      })),
    le = 0n;
  for (let t of e.retenidos) le += t.monto;
  let ue = [...e.resueltos]
      .sort((e, t) => t.cuando - e.cuando)
      .slice(0, 40)
      .map((e) => ({
        id: e.id,
        amount: formatMoney(e.monto),
        wager: e.wager,
        when: kw(e.cuando, n),
        username: e.username,
        motivo: e.motivo,
        acreditado: e.acreditado,
        quien: e.quien,
      })),
    de = [...e.firmas]
      .sort((e, t) => e.cuando - t.cuando)
      .flatMap((e) => {
        let t = c.get(e.jugadorId);
        return t
          ? [
              {
                id: e.id,
                username: t.username,
                amount: formatMoney(e.monto),
                pedidoPor: l(e.pedidoPorId) ?? `—`,
                when: vw(e.cuando),
              },
            ]
          : [];
      }),
    fe = e.trabadas.map((e) => ({
      wagerId: e.wagerId,
      pairCode: e.pairCode,
      username: e.jugadorId ? (c.get(e.jugadorId)?.username ?? null) : null,
      monto: formatMoney(e.monto),
      intentos: e.intentos,
      ultimoError: e.ultimoError,
      cuando: vw(e.cuando),
      ultimoIntento: vw(e.ultimoIntento),
    })),
    pe = e.vinculos.map((e) => ({
      id: e.id,
      donde: e.donde,
      tecnico: e.tecnico,
      categoria: e.categoria,
      nivel: e.nivel,
      ahora: e.ahora,
      ultima: vw(e.ultima),
      desde: e.desde === null ? null : vw(e.desde),
      cuentas: e.cuentas.map((e) => {
        if (e.tipo === `staff`) {
          let t = s.get(e.refId);
          return {
            nombre: t?.username ?? e.nombre,
            tipo: t ? `staff` : `borrada`,
            username: null,
            vigente: e.vigente,
            detalle: `del casino`,
          };
        }
        let t = c.get(e.refId);
        if (!t)
          return {
            nombre: `cuenta borrada (${e.refId.slice(0, 8)})`,
            tipo: `borrada`,
            username: null,
            vigente: !1,
            detalle: `ya no existe`,
          };
        let n = f(t);
        return {
          nombre: t.username,
          tipo: `jugador`,
          username: t.username,
          vigente: e.vigente,
          detalle: `cargó ${formatMoney(n.cargado)} · retiró ${formatMoney(n.retirado)}`,
        };
      }),
    })),
    me = {
      revisar: e.vinculos.filter((e) => e.categoria === `revisar`).length,
      conPersonal: e.vinculos.filter((e) => e.categoria === `con-personal`)
        .length,
      soloPersonal: e.vinculos.filter((e) => e.categoria === `solo-personal`)
        .length,
    },
    he = e.casas.map((t) => {
      let n = new Set(
          e.jugadores.filter((e) => e.casaId === t.id).map((e) => e.id),
        ),
        r = 0n,
        i = 0n,
        a = 0n,
        o = 0n;
      for (let t of e.jugadores) n.has(t.id) && t.saldo > 0n && (r += t.saldo);
      for (let t of e.movimientos)
        n.has(t.jugadorId) && (t.tipo === `load` ? (i += Aw(t)) : (a -= Aw(t)));
      for (let t of e.jugadas)
        n.has(t.jugadorId) && (o += t.apostado - t.pagado);
      return {
        casaId: t.id,
        jugadores: P.filter((e) => e.casaId === t.id).length,
        enJugadoresCents: r,
        cargadoCents: i,
        descargadoCents: a,
        gananciaCents: o,
      };
    }),
    ge = 0n;
  for (let t of e.jugadas) ge += t.apostado - t.pagado;
  let _e = Iy(
      e.casas.map((e) => ({
        id: e.id,
        nombre: u(e.id),
        esMadre: e.esMadre,
        activa: e.activa,
        cupoCents: e.cupo,
      })),
      he,
      jy(
        {
          jugadores: P.length,
          cargadoCents: v,
          descargadoCents: y,
        },
        {
          enJugadoresCents: g,
          gananciaCents: ge,
        },
      ),
      formatMoney,
    ),
    ve = (t) =>
      new Set(
        e.jugadas.filter((e) => Ew(e.cuando) >= t).map((e) => e.jugadorId),
      ).size,
    ye = e.personal.filter((e) => e.activo);
  return {
    demo: !1,
    piel: null,
    players: p,
    clientes: P.length,
    requests: m,
    floatBalance: ee.balance,
    floatUi: ee,
    floatVivoUi: {
      texto: `1.000.000`,
      sub: `Paga las mesas en vivo`,
      estado: null,
      bajo: !1,
      vacio: !1,
      sinDatos: !1,
    },
    held: ce,
    firmas: de,
    heldTotal: {
      count: e.retenidos.length,
      amount: formatMoney(le),
    },
    resueltos: ue,
    rango: `7`,
    rangos: [
      {
        k: `1`,
        label: `Hoy`,
      },
      {
        k: `7`,
        label: `7 días`,
      },
      {
        k: `30`,
        label: `30 días`,
      },
      {
        k: `90`,
        label: `90 días`,
      },
      {
        k: `todo`,
        label: `Todo`,
      },
    ],
    ganancia: E,
    logs: [...e.eventos]
      .sort((e, t) => t.cuando - e.cuando)
      .slice(0, 40)
      .map((t) => ({
        id: t.id,
        event: t.event,
        when: vw(t.cuando),
        tone: t.tone,
        username:
          t.username && e.jugadores.some((e) => e.username === t.username)
            ? t.username
            : null,
        fields: t.fields.map((e) => ({
          k: e.k,
          v: e.v,
        })),
      })),
    movements: h,
    totals: S,
    isAdmin: !0,
    esDueno: !0,
    graficos: M,
    comisiones: I,
    ganadores: R,
    turno: se,
    mesEnCurso: new Date(n).toLocaleDateString(`es-AR`, {
      month: `long`,
      year: `numeric`,
      timeZone: us,
    }),
    vinculos: pe,
    vinculosTotal: me,
    maintenanceOn: e.config.mantenimiento,
    gente: {
      jugadores: P.length,
      nuevosHoy: P.filter((e) => Ew(e.alta) === r).length,
      jugaronHoy: ve(r),
      activos: ve(r - 30 + 1),
      agentes: ye.length,
      cajeros: ye.filter((e) => e.role === `operator`).length,
      administradores: ye.filter((e) => e.role !== `operator`).length,
      agentesBaja: e.personal.filter((e) => !e.activo).length,
    },
    diasActivo: 30,
    personal: N,
    casas: F,
    turnstileSiteKey: null,
    yoId: a.id,
    rolesPermitidos: [
      ...al({
        role: a.role,
        esMadre: !0,
      }),
    ],
    capacidades: cw({
      role: a.role,
      esMadre: !0,
    }),
    esMadre: !0,
    casaNombre: t.casaNombre,
    miCupo: null,
    rtp: e.config.rtp,
    trabadas: fe,
    plataPorPanel: _e,
    pendientesContados: {
      pedidos: e.pedidos.length,
      firmas: e.firmas.length,
    },
  };
}
function initializeDashboardProjection() {
  sw = Object.freeze({
    puedeCrearCajeros: !1,
    puedeTocarAcceso: !1,
    puedeCambiarRol: !1,
    puedeBorrarPersonal: !1,
    puedeCrearJugadores: !1,
    puedeBorrarJugadores: !1,
    puedeReasignarCajero: !1,
    cruzaCasas: !1,
  });
  lw = (e) => ({
    id: e.id,
    rol: e.role,
    casaId: e.casaId,
    esMadre: e.esMadre,
  });
  fw = (e, t) => (e < t ? e : t);
  gw = 864e5;
  _w = 36e5;
  vw = (e) =>
    new Date(e).toLocaleString(`es-AR`, {
      day: `2-digit`,
      month: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`,
      timeZone: us,
    });
  yw = (e) =>
    new Date(e).toLocaleDateString(`es-AR`, {
      day: `2-digit`,
      month: `2-digit`,
      year: `numeric`,
      timeZone: us,
    });
  bw = (e) =>
    new Date(e).toLocaleDateString(`es-AR`, {
      day: `2-digit`,
      month: `2-digit`,
      year: `2-digit`,
      timeZone: us,
    });
  xw = (e) =>
    new Date(e).toLocaleDateString(`es-AR`, {
      day: `2-digit`,
      month: `2-digit`,
      timeZone: us,
    });
  Sw = (e) =>
    new Date(e).toLocaleTimeString(`es-AR`, {
      hour: `2-digit`,
      minute: `2-digit`,
      hourCycle: `h23`,
      timeZone: us,
    });
  Cw = (e) => (e < 0n ? `−` : ``) + formatMoney(e < 0n ? -e : e);
  ww = (e) => `${(e / 100n).toString()}.${String(e % 100n).padStart(2, `0`)}`;
  Tw = new Intl.DateTimeFormat(`en-CA`, {
    timeZone: us,
    year: `numeric`,
    month: `2-digit`,
    day: `2-digit`,
  });
  Dw = (e) => Tw.format(new Date(e)).slice(0, 7);
  Ow = (e) => {
    let [t, n] = e.split(`-`).map(Number);
    return new Date(Date.UTC(t, n - 1, 15))
      .toLocaleDateString(`es-AR`, {
        month: `long`,
        year: `numeric`,
        timeZone: `UTC`,
      })
      .replace(` de `, ` `);
  };
  jw = (e) => Aw(e) > 0n;
  installDemoDialogs();
}
export { projectPanelState, initializeDashboardProjection };
