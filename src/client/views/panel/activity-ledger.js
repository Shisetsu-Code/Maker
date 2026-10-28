/**
 * panel / activity-ledger.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { formatMoney, us } from "./money-and-phone.js";
function Js(e, t) {
  let n = 0n;
  return e.map((e) => {
    let r = e.netwinCents + n,
      i = r > 0n ? Ys(r, t) : 0n,
      a = r > 0n ? 0n : r,
      o = {
        mes: e.mes,
        netwinCents: e.netwinCents,
        arrastreEntraCents: n,
        baseCents: r,
        comisionCents: i,
        arrastreSaleCents: a,
      };
    return ((n = a), o);
  });
}
function Ys(e, t) {
  return t <= 0 || e <= 0n ? 0n : (e * BigInt(Math.round(t))) / 10000n;
}
function Xs(e) {
  let t = String(e ?? ``)
    .replace(/\s/g, ``)
    .replace(`%`, ``)
    .replace(`,`, `.`);
  if (!/^\d{1,3}(\.\d{1,2})?$/.test(t)) return null;
  let [n = `0`, r = ``] = t.split(`.`),
    i = Number(n) * 100 + Number(r.padEnd(2, `0`));
  return !Number.isFinite(i) || i < 0 || i > 1e4 ? null : i;
}
function Zs(e) {
  let t = Math.floor(e / 100),
    n = e % 100;
  return n === 0 ? `${t}%` : `${t},${String(n).padStart(2, `0`)}%`;
}
let Qs, $s, ec, tc;
function nc(e) {
  return typeof e == `string` && Object.hasOwn(ec, e);
}
function rc(e) {
  return ec[e].grupo;
}
let ic, ac;
function oc(e) {
  return e === `root`
    ? `dueno`
    : e === `admin`
      ? `admin`
      : e === `operator`
        ? `cajero`
        : null;
}
let sc, cc, lc;
function uc(e) {
  let t = oc(e.role);
  if (!t || !e.id || !e.casaId) return null;
  let n = {
      rol: t,
      esMadre: e.esMadre,
      yoId: e.id,
      casaId: e.casaId,
    },
    r = e.puedeReasignarCajero ? [`cajero_cambiado`] : [];
  if (t === `dueno` && e.esMadre) {
    let e = new Set(tc);
    return {
      ...n,
      tipos: e,
      grupos: dc(e),
      casaPlata: null,
      plataSinCasa: !0,
      casaCuentas: null,
      cuentasSinCasa: !0,
      equipo: `todo`,
      cupo: `todos`,
      casaNombres: null,
      vePanel: !0,
      veIp: !0,
      juegoSoloConJugador: !1,
    };
  }
  if (t === `dueno`) {
    let t = new Set(
      tc.filter(
        (e) =>
          e !== `config` &&
          e !== `paneles` &&
          e !== `cajero_cambiado` &&
          !cc.has(e),
      ),
    );
    for (let e of r) t.add(e);
    return {
      ...n,
      tipos: t,
      grupos: dc(t),
      casaPlata: e.casaId,
      plataSinCasa: !1,
      casaCuentas: e.casaId,
      cuentasSinCasa: !1,
      equipo: `casa`,
      cupo: `propio`,
      casaNombres: e.casaId,
      vePanel: !1,
      veIp: !1,
      juegoSoloConJugador: !1,
    };
  }
  if (t === `admin`) {
    let t = new Set([
      ...sc,
      `ronda`,
      ...tc.filter(
        (e) => rc(e) === `cuentas` && e !== `cajero_cambiado` && !cc.has(e),
      ),
      ...r,
      `acceso`,
      `link_referido`,
    ]);
    return {
      ...n,
      tipos: t,
      grupos: dc(t),
      casaPlata: e.esMadre ? null : e.casaId,
      plataSinCasa: e.esMadre,
      casaCuentas: e.casaId,
      cuentasSinCasa: e.esMadre,
      equipo: `alcance`,
      cupo: `no`,
      casaNombres: e.esMadre ? null : e.casaId,
      vePanel: e.esMadre,
      veIp: !1,
      juegoSoloConJugador: !1,
    };
  }
  let i = new Set([...sc, `ronda`, ...lc]);
  return {
    ...n,
    tipos: i,
    grupos: dc(i),
    casaPlata: e.casaId,
    plataSinCasa: e.esMadre,
    casaCuentas: e.casaId,
    cuentasSinCasa: e.esMadre,
    equipo: `nada`,
    cupo: `no`,
    casaNombres: e.esMadre ? null : e.casaId,
    vePanel: !1,
    veIp: !1,
    juegoSoloConJugador: !0,
  };
}
function dc(e) {
  return Qs.filter((t) => t === `todo` || [...e].some((e) => rc(e) === t));
}
function fc(e, t, n, r) {
  let i = new Set();
  for (let a of e.tipos)
    (t === `todo` ? a === `ronda` && !r : rc(a) !== t) ||
      (n && a !== n) ||
      (a === `ronda` && e.juegoSoloConJugador && !r) ||
      i.add(a);
  return i;
}
let pc, mc;
function hc(e) {
  let t = mc.exec(e);
  if (!t) return !1;
  let [n, r, i] = [Number(t[1]), Number(t[2]), Number(t[3])];
  if (n < 2020 || n > 2100) return !1;
  let a = new Date(Date.UTC(n, r - 1, i));
  return (
    a.getUTCFullYear() === n &&
    a.getUTCMonth() === r - 1 &&
    a.getUTCDate() === i
  );
}
function gc(e, t) {
  let n = Date.parse(`${e}T00:00:00Z`),
    r = Date.parse(`${t}T00:00:00Z`);
  return Math.round((r - n) / 864e5) + 1;
}
function _c(e, t, n) {
  return e === `hoy`
    ? {
        tipo: `dias`,
        dias: 1,
      }
    : e === `7` || e === `30` || e === `90`
      ? {
          tipo: `dias`,
          dias: Number(e),
        }
      : !t || !n || !hc(t) || !hc(n)
        ? {
            error: `Elegí las dos fechas.`,
          }
        : n < t
          ? {
              error: `La fecha «hasta» es anterior a «desde».`,
            }
          : gc(t, n) > 366
            ? {
                error: `El rango puede ser de hasta 366 días.`,
              }
            : {
                tipo: `fechas`,
                desde: t,
                hasta: n,
              };
}
let vc, yc;
function bc(e) {
  let t = e < 0n ? -e : e;
  return `${e > 0n ? `+\xA0` : e < 0n ? `−\xA0` : ``}${formatMoney(t)}`;
}
let xc, Sc;
function Cc(e) {
  return e.actor_tipo === `jugador`
    ? {
        nombre: e.jugador ?? `El jugador`,
        rol: `jugador`,
      }
    : e.actor_tipo === `auto`
      ? {
          nombre: `Automático`,
          rol: `auto`,
        }
      : e.actor_otra_casa
        ? {
            nombre: `Casa madre`,
            rol: `madre`,
          }
        : e.actor_nombre
          ? {
              nombre: e.actor_nombre,
              rol: xc[e.actor_rol ?? ``] ?? `auto`,
            }
          : {
              nombre: `Cuenta eliminada`,
              rol: `auto`,
            };
}
let wc;
function Tc(e) {
  let t = {};
  for (let n of wc.formatToParts(e)) t[n.type] = n.value;
  return {
    a: t.year ?? `0000`,
    m: t.month ?? `00`,
    d: t.day ?? `00`,
    h: t.hour ?? `00`,
    mi: t.minute ?? `00`,
  };
}
function Ec(e) {
  let t = Tc(e);
  return {
    corta: `${t.d}/${t.m}/${t.a.slice(2)} ${t.h}:${t.mi}`,
    larga: `${t.d}/${t.m}/${t.a} · ${t.h}:${t.mi}`,
    hora: `${t.h}:${t.mi}`,
    dia: `${t.a}-${t.m}-${t.d}`,
  };
}
function Dc(e) {
  return Ec(e).dia;
}
function Oc(e, t) {
  return e === t
    ? `Hoy`
    : gc(e, t) === 2
      ? `Ayer`
      : new Date(`${e}T12:00:00Z`).toLocaleDateString(`es-AR`, {
          weekday: `long`,
          day: `numeric`,
          month: `long`,
          timeZone: `UTC`,
        });
}
let kc, Ac, jc;
function Mc(e, t) {
  if (!nc(e.tipo)) return null;
  let n = e.tipo,
    r = e.extra ?? {},
    i = vc(e.monto),
    a = vc(e.quedo),
    o = Cc(e),
    s = Ec(e.fecha),
    c = ec[n].etiqueta,
    l = e.evento ? ic[e.evento] : void 0;
  (l?.etiqueta && (c = l.etiqueta),
    n === `acceso` && (c = kc(r)),
    n === `pedido_creado` &&
      (c = r.kind === `unload` ? `Pidió un retiro` : `Pidió una carga`),
    n === `tope_jugador` && (c = jc[String(r.tope ?? ``)] ?? c));
  let u = n === `ronda` ? (yc(r.juego) ?? `un juego`) : null;
  u && (c = `Ronda en ${u}`);
  let d = [],
    f = (e, t) => {
      t &&
        d.push({
          k: e,
          v: t,
        });
    };
  (f(`Jugador`, e.jugador),
    f(
      `Lo hizo`,
      o
        ? o.rol === `madre` || o.rol === `auto` || o.rol === `jugador`
          ? o.nombre
          : `${o.nombre} · ${Sc[o.rol]}`
        : null,
    ));
  let p = t.vePanel && e.jugador ? e.opero : null;
  if (
    (t.vePanel &&
      !n.startsWith(`cupo_`) &&
      n !== `paneles` &&
      f(`Panel`, e.jugador_panel),
    f(`Operó`, p),
    n === `ronda`)
  ) {
    let e = vc(r.apuesta),
      t = vc(r.premio),
      n = vc(r.cancelado);
    (e !== null && f(`Apostó`, formatMoney(e)),
      t !== null && t !== 0n && f(`Ganó`, formatMoney(t)),
      n !== null && n !== 0n && f(`Devuelto por anulación`, formatMoney(n)));
    let i = vc(r.retenido),
      a = vc(r.rechazado);
    (i !== null &&
      i !== 0n &&
      f(`Premio retenido`, `${formatMoney(i)} (esperando revisión)`),
      a !== null && a !== 0n && f(`Premio rechazado`, formatMoney(a)),
      f(`Juego`, u),
      f(`Ronda`, yc(r.wager)));
  }
  if (
    (a !== null &&
      f(
        e.quedo_cupo ? `Cupo que le quedó al panel` : `Saldo después`,
        formatMoney(a),
      ),
    f(`Lo pidió`, yc(r.pedido_por)),
    f(`Motivo`, e.motivo),
    f(`Anulada por`, e.anulada ? e.anulada_por : null),
    n === `nota` && f(`Nota`, yc(r.nota)),
    n.startsWith(`pedido_`) && f(`Nota del pedido`, yc(r.nota)),
    n === `billetera_congelada` && f(`Motivo`, yc(r.nota)),
    n === `cajero_cambiado` &&
      f(
        `Cajero`,
        `${yc(r.antes) ?? `sin cajero`} → ${yc(r.ahora) ?? `sin cajero`}`,
      ),
    n === `acceso` &&
      yc(r.ahora) &&
      f(
        `Rango`,
        `${Ac[String(r.antes)] ?? `—`} → ${Ac[String(r.ahora)] ?? `—`}`,
      ),
    n === `acceso` &&
      yc(r.rol) &&
      !yc(r.ahora) &&
      f(`Rango`, Ac[String(r.rol)] ?? null),
    n === `comision`)
  ) {
    f(`A quién`, yc(r.cuenta));
    let e = typeof r.bps == `number` ? r.bps : Number(r.bps);
    Number.isInteger(e) && e >= 0 && e <= 1e4 && f(`Comisión`, Zs(e));
  }
  if (
    (n === `config` && f(`Nuevo valor`, yc(r.rtp)),
    (n === `paneles` || n.startsWith(`cupo_`)) &&
      f(`Panel`, e.jugador_panel ?? yc(r.panel)),
    n === `cuenta_cerrada`)
  ) {
    let e = vc(r.saldo);
    e !== null && f(`Saldo al cerrar`, formatMoney(e));
  }
  ((n === `premio_retenido` ||
    n === `premio_liberado` ||
    n === `premio_rechazado`) &&
    f(`Ronda`, yc(r.wager)),
    n === `apuesta_cerrada` && (f(`Ronda`, yc(r.wager)), f(`Nota`, yc(r.nota))),
    t.veIp &&
      e.ip &&
      d.push({
        k: `IP`,
        v: e.ip,
        ip: !0,
      }));
  let m = null;
  return (
    i !== null &&
      (m =
        e.monto_neutro || n === `premio_rechazado` || n === `premio_retenido`
          ? {
              texto: formatMoney(i < 0n ? -i : i),
              signo: `neutro`,
            }
          : {
              texto: bc(i),
              signo: i >= 0n ? `pos` : `neg`,
            }),
    {
      k: `${e.fuente}:${e.id}`,
      tipo: n,
      grupo: rc(n),
      accion: c,
      jugador: e.jugador,
      quien: o,
      panel: t.vePanel ? e.jugador_panel : null,
      opero: p,
      monto: m,
      quedo:
        a === null
          ? null
          : {
              texto: formatMoney(a),
              cupo: e.quedo_cupo,
            },
      anulada: e.anulada,
      fecha: s,
      detalle: d,
    }
  );
}
function Nc(e, t, n) {
  let r = e - t;
  return {
    cargado: formatMoney(e),
    retirado: formatMoney(t),
    neto: bc(r),
    netoSigno: r > 0n ? `pos` : r < 0n ? `neg` : `neutro`,
    movimientos: n,
  };
}
function Pc(e) {
  return e == null ? null : e >= 500 ? `500+` : String(e);
}
function initializeActivityLedger() {
  Qs = [`todo`, `caja`, `premios`, `juego`, `cuentas`, `equipo`];
  $s = {
    todo: `Todo`,
    caja: `Caja`,
    premios: `Premios`,
    juego: `Juego`,
    cuentas: `Cuentas`,
    equipo: `Equipo`,
  };
  ec = {
    carga: {
      grupo: `caja`,
      etiqueta: `Carga de fichas`,
    },
    carga_anulacion: {
      grupo: `caja`,
      etiqueta: `Anuló una carga`,
    },
    retiro: {
      grupo: `caja`,
      etiqueta: `Retiro de fichas`,
    },
    retiro_anulacion: {
      grupo: `caja`,
      etiqueta: `Anuló un retiro`,
    },
    firma_pedida: {
      grupo: `caja`,
      etiqueta: `Retiro grande: pidió la segunda firma`,
    },
    firma_aprobada: {
      grupo: `caja`,
      etiqueta: `Retiro grande firmado`,
    },
    firma_rechazada: {
      grupo: `caja`,
      etiqueta: `Retiro grande rechazado`,
    },
    pedido_creado: {
      grupo: `caja`,
      etiqueta: `Pedido del jugador`,
    },
    pedido_atendido: {
      grupo: `caja`,
      etiqueta: `Pedido atendido`,
    },
    pedido_descartado: {
      grupo: `caja`,
      etiqueta: `Pedido descartado`,
    },
    pedido_cancelado: {
      grupo: `caja`,
      etiqueta: `Pedido cancelado por el jugador`,
    },
    premio_retenido: {
      grupo: `premios`,
      etiqueta: `Premio retenido`,
    },
    premio_liberado: {
      grupo: `premios`,
      etiqueta: `Premio liberado`,
    },
    premio_rechazado: {
      grupo: `premios`,
      etiqueta: `Premio rechazado`,
    },
    apuesta_cerrada: {
      grupo: `premios`,
      etiqueta: `Apuesta cerrada a mano`,
    },
    ronda: {
      grupo: `juego`,
      etiqueta: `Ronda de juego`,
    },
    jugador_creado: {
      grupo: `cuentas`,
      etiqueta: `Alta de jugador`,
    },
    billetera_congelada: {
      grupo: `cuentas`,
      etiqueta: `Congeló la billetera`,
    },
    billetera_descongelada: {
      grupo: `cuentas`,
      etiqueta: `Descongeló la billetera`,
    },
    cuenta_bloqueada: {
      grupo: `cuentas`,
      etiqueta: `Bloqueó la cuenta`,
    },
    cuenta_reabierta: {
      grupo: `cuentas`,
      etiqueta: `Reabrió la cuenta`,
    },
    cuenta_cerrada: {
      grupo: `cuentas`,
      etiqueta: `Cerró su cuenta`,
    },
    contrasena_jugador: {
      grupo: `cuentas`,
      etiqueta: `Contraseña nueva al jugador`,
    },
    nota: {
      grupo: `cuentas`,
      etiqueta: `Nota interna`,
    },
    tope_jugador: {
      grupo: `cuentas`,
      etiqueta: `Tope de juego responsable`,
    },
    cajero_cambiado: {
      grupo: `cuentas`,
      etiqueta: `Cambió el cajero del jugador`,
    },
    soporte_eliminada: {
      grupo: `cuentas`,
      etiqueta: `Eliminó una conversación del soporte`,
    },
    acceso: {
      grupo: `equipo`,
      etiqueta: `Acceso al panel`,
    },
    comision: {
      grupo: `equipo`,
      etiqueta: `Cambió una comisión`,
    },
    link_referido: {
      grupo: `equipo`,
      etiqueta: `Link de referido`,
    },
    cupo_recarga: {
      grupo: `equipo`,
      etiqueta: `Cargó cupo al panel`,
    },
    cupo_carga: {
      grupo: `equipo`,
      etiqueta: `Usó cupo en una carga`,
    },
    cupo_descarga: {
      grupo: `equipo`,
      etiqueta: `Le volvió cupo por un retiro`,
    },
    cupo_ajuste: {
      grupo: `equipo`,
      etiqueta: `Ajuste de cupo`,
    },
    config: {
      grupo: `equipo`,
      etiqueta: `Configuración del casino`,
    },
    paneles: {
      grupo: `equipo`,
      etiqueta: `Paneles de socios`,
    },
  };
  tc = Object.keys(ec);
  ic = {
    jugador_creado: {
      tipo: `jugador_creado`,
    },
    wallet_frozen: {
      tipo: `billetera_congelada`,
    },
    wallet_unfrozen: {
      tipo: `billetera_descongelada`,
    },
    account_blocked: {
      tipo: `cuenta_bloqueada`,
    },
    account_reopened: {
      tipo: `cuenta_reabierta`,
    },
    account_closed: {
      tipo: `cuenta_cerrada`,
    },
    jugador_password_reseteada: {
      tipo: `contrasena_jugador`,
    },
    cajero_del_jugador: {
      tipo: `cajero_cambiado`,
    },
    soporte_conversacion_eliminada: {
      tipo: `soporte_eliminada`,
    },
    acceso_al_panel: {
      tipo: `acceso`,
    },
    comision_cambiada: {
      tipo: `comision`,
    },
    referido_link_creado: {
      tipo: `link_referido`,
      etiqueta: `Creó su link de referido`,
    },
    referido_link_regenerado: {
      tipo: `link_referido`,
      etiqueta: `Regeneró su link de referido`,
    },
    rtp_cambiado: {
      tipo: `config`,
      etiqueta: `Cambió el RTP`,
    },
    maintenance_on: {
      tipo: `config`,
      etiqueta: `Cerró el sitio (mantenimiento)`,
    },
    maintenance_off: {
      tipo: `config`,
      etiqueta: `Reabrió el sitio`,
    },
    numero_general_cambiado: {
      tipo: `config`,
      etiqueta: `Cambió el WhatsApp general`,
    },
    reparto_cambiado: {
      tipo: `config`,
      etiqueta: `Cambió el reparto de jugadores`,
    },
    reparto_alguien_entra: {
      tipo: `config`,
      etiqueta: `Sumó a alguien al reparto`,
    },
    reparto_alguien_sale: {
      tipo: `config`,
      etiqueta: `Sacó a alguien del reparto`,
    },
    reparto_numero_cambiado: {
      tipo: `config`,
      etiqueta: `Cambió el WhatsApp de un cajero`,
    },
    reparto_alias_cambiado: {
      tipo: `config`,
      etiqueta: `Cambió el alias de cobro de un cajero`,
    },
    casa_creada: {
      tipo: `paneles`,
      etiqueta: `Creó un panel`,
    },
    casa_activada: {
      tipo: `paneles`,
      etiqueta: `Activó un panel`,
    },
    casa_desactivada: {
      tipo: `paneles`,
      etiqueta: `Desactivó un panel`,
    },
    casa_eliminada: {
      tipo: `paneles`,
      etiqueta: `Eliminó un panel`,
    },
    casa_rojo_permitido: {
      tipo: `paneles`,
      etiqueta: `Permitió cargar en rojo`,
    },
    casa_rojo_bloqueado: {
      tipo: `paneles`,
      etiqueta: `Bloqueó cargar en rojo`,
    },
  };
  ac = [
    `jugador_creado`,
    `wallet_frozen`,
    `wallet_unfrozen`,
    `account_blocked`,
    `account_reopened`,
    `account_closed`,
    `jugador_password_reseteada`,
    `cajero_del_jugador`,
    `soporte_conversacion_eliminada`,
  ];
  sc = tc.filter((e) => rc(e) === `caja` || rc(e) === `premios`);
  cc = new Set([`soporte_eliminada`]);
  lc = [
    `jugador_creado`,
    `billetera_congelada`,
    `billetera_descongelada`,
    `cuenta_bloqueada`,
    `cuenta_reabierta`,
    `cuenta_cerrada`,
    `nota`,
    `tope_jugador`,
  ];
  pc = [
    [`hoy`, `Hoy`],
    [`7`, `Últimos 7 días`],
    [`30`, `Últimos 30 días`],
    [`90`, `Últimos 90 días`],
    [`elegir`, `Elegir fechas`],
  ];
  mc = /^(\d{4})-(\d{2})-(\d{2})$/;
  vc = (e) => {
    if (e == null || e === ``) return null;
    if (typeof e == `bigint`) return e;
    let t = String(e).trim();
    return /^-?\d+$/.test(t) ? BigInt(t) : null;
  };
  yc = (e) => (typeof e == `string` && e.trim() !== `` ? e.trim() : null);
  xc = {
    root: `dueno`,
    admin: `admin`,
    operator: `cajero`,
  };
  Sc = {
    dueno: `Dueño`,
    admin: `Admin`,
    cajero: `Cajero`,
    jugador: `Jugador`,
    auto: `Automático`,
    madre: `Casa madre`,
  };
  wc = new Intl.DateTimeFormat(`es-AR`, {
    timeZone: us,
    year: `numeric`,
    month: `2-digit`,
    day: `2-digit`,
    hour: `2-digit`,
    minute: `2-digit`,
    hourCycle: `h23`,
  });
  kc = (e) => {
    let t = yc(e.cuenta) ?? `alguien`;
    return e.creada === !0 || e.creada === `true`
      ? `Creó la cuenta ${t}`
      : e.eliminada === !0 || e.eliminada === `true`
        ? `Eliminó la cuenta ${t}`
        : yc(e.ahora)
          ? `Cambió el rango de ${t}`
          : e.activo === !1 || e.activo === `false`
            ? `Sacó el acceso a ${t}`
            : e.activo === !0 || e.activo === `true`
              ? `Devolvió el acceso a ${t}`
              : `Dio acceso a ${t}`;
  };
  Ac = {
    root: `Dueño`,
    admin: `Admin`,
    operator: `Cajero`,
  };
  jc = {
    limite: `Se puso un tope`,
    limite_pedido: `Pidió subir un tope (corre en 24 h)`,
    autoexclusion: `Se autoexcluyó`,
    aviso: `Aviso de juego responsable`,
  };
}
export {
  Js,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  nc,
  rc,
  ic,
  ac,
  uc,
  fc,
  pc,
  hc,
  gc,
  _c,
  Sc,
  Ec,
  Dc,
  Oc,
  Mc,
  Nc,
  Pc,
  initializeActivityLedger,
};
