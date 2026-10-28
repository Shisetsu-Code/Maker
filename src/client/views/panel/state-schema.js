/**
 * panel / state-schema.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import {
  string as zodString,
  number as zodNumber,
  boolean as zodBoolean,
  bigint as zodBigint,
  array as zodArray,
  object as zodObject,
  record as zodRecord,
  enum as zodEnum,
  literal as zodLiteral,
} from "zod";
import { xl } from "./cashier-rules.js";
let Sl,
  U,
  Cl,
  W,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl;
function createDemoEnvironment() {
  return {
    ahora: () => Date.now(),
    id: () => {
      let e = globalThis.crypto;
      if (e?.randomUUID) return e.randomUUID();
      let t = new Uint8Array(16);
      (globalThis.crypto.getRandomValues(t),
        (t[6] = (t[6] & 15) | 64),
        (t[8] = (t[8] & 63) | 128));
      let n = [...t].map((e) => e.toString(16).padStart(2, `0`)).join(``);
      return `${n.slice(0, 8)}-${n.slice(8, 12)}-${n.slice(12, 16)}-${n.slice(16, 20)}-${n.slice(20)}`;
    },
  };
}
let Xl;
function Zl(e) {
  let t = xl(e ?? ``);
  return t && t.length <= 20 ? t : `dueno`;
}
function Ql(e) {
  return ((e.sec += 1), String(7e7 + e.sec));
}
function serializePanelState(e) {
  return JSON.stringify(e, (e, t) =>
    typeof t == `bigint`
      ? {
          $b: t.toString(),
        }
      : t,
  );
}
function parsePanelState(e) {
  if (!e) return null;
  let t;
  try {
    t = JSON.parse(e, (e, t) => {
      if (t && typeof t == `object` && !Array.isArray(t)) {
        let e = t,
          n = Object.keys(e);
        if (
          n.length === 1 &&
          n[0] === `$b` &&
          typeof e.$b == `string` &&
          /^-?\d{1,20}$/.test(e.$b)
        )
          return BigInt(e.$b);
      }
      return t;
    });
  } catch {
    return null;
  }
  let n = Jl.safeParse(t);
  return n.success && tu(n.data) ? n.data : null;
}
function tu(e) {
  let t = e.casas.filter((e) => e.esMadre);
  if (t.length !== 1) return !1;
  let n = t[0];
  if (n.cupo !== 0n || !n.activa) return !1;
  let r = new Set(e.casas.map((e) => e.id));
  if (r.size !== e.casas.length) return !1;
  let i = e.personal.find((t) => t.id === e.yoId);
  if (!i || i.role !== `root` || i.casaId !== n.id) return !1;
  let a = new Set(e.personal.map((e) => e.id)),
    o = new Set(e.jugadores.map((e) => e.id));
  if (
    e.personal.some((e) => !r.has(e.casaId)) ||
    e.jugadores.some((e) => !r.has(e.casaId)) ||
    e.jugadores.some((e) => e.cajeroId !== null && !a.has(e.cajeroId)) ||
    e.movimientos.some((e) => !o.has(e.jugadorId)) ||
    e.jugadas.some((e) => !o.has(e.jugadorId)) ||
    e.pedidos.some((e) => !o.has(e.jugadorId)) ||
    e.retenidos.some((e) => !o.has(e.jugadorId)) ||
    e.firmas.some((e) => !o.has(e.jugadorId)) ||
    e.trabadas.some((e) => e.jugadorId !== null && !o.has(e.jugadorId)) ||
    e.hilos.some((e) => !o.has(e.jugadorId)) ||
    e.reservas.some((e) => !r.has(e.casaId)) ||
    e.cupoMovs.some((e) => !r.has(e.casaId) || e.casaId === n.id)
  )
    return !1;
  let s = new Set(e.carpetas.map((e) => e.id));
  return !(e.flyers.some((e) => !s.has(e.carpetaId)) || !nu(e));
}
function nu(e) {
  let t = new Map();
  for (let n of e.cupoMovs) t.set(n.casaId, (t.get(n.casaId) ?? 0n) + n.monto);
  return e.casas.every((e) =>
    e.esMadre ? e.cupo === 0n : e.cupo === (t.get(e.id) ?? 0n),
  );
}
function ru(e) {
  return structuredClone(e);
}
function iu(e) {
  let t = (e, t) => (e.length > t ? e.slice(e.length - t) : e);
  if (
    ((e.movimientos = t(e.movimientos, Xl.movimientos)),
    (e.jugadas = t(e.jugadas, Xl.jugadas)),
    (e.eventos = t(e.eventos, Xl.eventos)),
    (e.notas = t(e.notas, Xl.notas)),
    (e.resueltos = t(e.resueltos, Xl.resueltos)),
    e.cupoMovs.length > Xl.cupoMovs)
  ) {
    let t = e.cupoMovs.slice(
        0,
        e.cupoMovs.length - Xl.cupoMovs + e.casas.length,
      ),
      n = e.cupoMovs.slice(t.length),
      r = new Map();
    for (let e of t) r.set(e.casaId, (r.get(e.casaId) ?? 0n) + e.monto);
    e.cupoMovs = [
      ...[...r.entries()].map(([n, r]) => ({
        id: Ql(e),
        casaId: n,
        tipo: `ajuste`,
        monto: r,
        saldo: r,
        motivo: `saldo de antes`,
        quienId: null,
        cuando: t[0].cuando,
      })),
      ...n,
    ];
  }
}
function au(e) {
  let t = new Set();
  for (let n of e.flyers) n.imagen.startsWith(`svg:`) || t.add(n.imagen);
  for (let n of e.pedidos) for (let e of n.comprobantes) t.add(e.imagen);
  for (let n of e.hilos) {
    for (let e of n.mensajes) e.adjunto && t.add(e.adjunto);
    for (let e of n.pendientes) e.adjunto && t.add(e.adjunto);
  }
  for (let n of Object.keys(e.imagenes)) t.has(n) || delete e.imagenes[n];
}
function ou(e) {
  let t = 0;
  for (let n of Object.values(e.imagenes)) t += n.length;
  return t;
}
function initializeStateSchema() {
  Sl = zodBigint();
  U = zodString().min(1).max(64);
  Cl = zodString().regex(/^\d{1,19}$/);
  W = (e) => zodString().max(e);
  wl = zodObject({
    id: U,
    nombre: zodString().min(1).max(40),
    esMadre: zodBoolean(),
    activa: zodBoolean(),
    permiteRojo: zodBoolean(),
    cupo: Sl,
    desde: zodNumber(),
  });
  Tl = zodObject({
    id: Cl,
    casaId: U,
    tipo: zodEnum([`recarga`, `ajuste`, `carga`, `descarga`]),
    monto: Sl,
    saldo: Sl,
    motivo: W(200).nullable(),
    quienId: U.nullable(),
    cuando: zodNumber(),
  });
  El = zodObject({
    id: U,
    username: zodString().min(1).max(40),
    role: zodEnum([`operator`, `admin`, `root`]),
    casaId: U,
    activo: zodBoolean(),
    desde: zodNumber(),
    correo: W(120),
    comisionBps: zodNumber().int().min(0).max(1e4).nullable(),
    segundoFactor: zodBoolean(),
    demo: zodBoolean(),
    whatsapp: zodString()
      .regex(/^\d{6,15}$/)
      .nullable(),
    enReparto: zodBoolean(),
    alias: W(60).nullable(),
    aliasTitular: W(60).nullable(),
  });
  Dl = zodObject({
    id: U,
    username: zodString().min(1).max(40),
    role: zodEnum([`operator`, `admin`, `root`]),
    casaId: U,
  });
  Ol = zodObject({
    id: U,
    walletId: U,
    username: zodString().min(1).max(40),
    casaId: U,
    saldo: Sl,
    congelado: zodBoolean(),
    estado: zodEnum([`active`, `closed`, `blocked`]),
    cajeroId: U.nullable(),
    alta: zodNumber(),
    esStaff: zodBoolean(),
    alerta: W(200).nullable(),
    limite: W(200).nullable(),
  });
  kl = zodObject({
    id: U,
    tipo: zodEnum([`load`, `unload`]),
    monto: Sl,
    cuando: zodNumber(),
    jugadorId: U,
    operadorId: U,
    saldoDespues: Sl,
    clave: W(64),
    anulado: zodBoolean(),
    anulaA: U.nullable(),
    motivo: W(200).nullable(),
  });
  Al = zodObject({
    id: U,
    cuando: zodNumber(),
    jugadorId: U,
    juego: W(80),
    apostado: Sl,
    pagado: Sl,
    saldoDespues: Sl,
    wager: Cl,
  });
  jl = zodObject({
    id: U,
    imagen: U,
  });
  Ml = zodObject({
    id: U,
    jugadorId: U,
    tipo: zodEnum([`load`, `unload`]),
    monto: Sl,
    nota: W(200).nullable(),
    cuando: zodNumber(),
    comprobantes: zodArray(jl).max(3),
  });
  Nl = zodObject({
    id: U,
    jugadorId: U,
    texto: W(500),
    autorId: U,
    cuando: zodNumber(),
  });
  Pl = zodObject({
    id: U,
    cuando: zodNumber(),
    event: W(80),
    tone: zodEnum([`bad`, `warn`, `ok`]),
    username: W(40).nullable(),
    fields: zodArray(
      zodObject({
        k: W(40),
        v: W(200),
      }),
    ).max(8),
    tipo: W(60).nullable(),
    extra: zodRecord(zodString().max(40), W(200)).nullable(),
    actorId: U.nullable(),
  });
  Fl = zodObject({
    id: U,
    tipo: zodEnum([`panel`, `jugador`]),
    username: W(40),
    rol: zodEnum([`operator`, `admin`, `root`]),
    casaId: U,
    cuando: zodNumber(),
    confirmable: zodBoolean(),
    correo: W(120),
  });
  Il = zodObject({
    id: U,
    deJugador: zodBoolean(),
    staffId: U.nullable(),
    texto: W(2e3),
    cuando: zodNumber(),
    adjunto: U.nullable(),
    oculto: zodBoolean(),
  });
  Ll = zodObject({
    id: U,
    texto: W(2e3),
    dueAt: zodNumber(),
    adjunto: U.nullable(),
  });
  Rl = zodObject({
    id: U,
    jugadorId: U,
    abierta: zodBoolean(),
    sinLeer: zodNumber().int().min(0),
    mensajes: zodArray(Il).max(200),
    pendientes: zodArray(Ll).max(10),
    respondidas: zodNumber().int().min(0),
  });
  zl = zodObject({
    id: Cl,
    jugadorId: U,
    monto: Sl,
    wager: Cl,
    cuando: zodNumber(),
    motivo: W(120),
  });
  Bl = zodObject({
    id: Cl,
    username: W(40).nullable(),
    monto: Sl,
    wager: Cl,
    cuando: zodNumber(),
    motivo: W(120),
    acreditado: zodBoolean(),
    quien: W(40).nullable(),
  });
  Vl = zodObject({
    id: Cl,
    jugadorId: U,
    monto: Sl,
    pedidoPorId: U,
    cuando: zodNumber(),
    clave: W(64).optional(),
    pedidoId: U.optional(),
  });
  Hl = zodObject({
    wagerId: Cl,
    pairCode: W(60),
    jugadorId: U.nullable(),
    monto: Sl,
    intentos: zodNumber().int().min(0),
    ultimoError: W(200).nullable(),
    cuando: zodNumber(),
    ultimoIntento: zodNumber(),
    reintentadaEn: zodNumber().nullable(),
  });
  Ul = zodObject({
    tipo: zodEnum([`jugador`, `staff`]),
    refId: U,
    nombre: W(40),
    vigente: zodBoolean(),
  });
  Wl = zodObject({
    id: U,
    donde: W(80),
    tecnico: W(80),
    categoria: zodEnum([`revisar`, `con-personal`, `solo-personal`]),
    nivel: zodEnum([`alto`, `medio`, `bajo`]),
    ahora: zodBoolean(),
    ultima: zodNumber(),
    desde: zodNumber().nullable(),
    cuentas: zodArray(Ul).min(2).max(6),
  });
  Gl = zodObject({
    id: U,
    nombre: zodString().min(1).max(60),
    creadaEn: zodNumber(),
  });
  Kl = zodObject({
    id: U,
    carpetaId: U,
    nombre: W(200),
    imagen: U,
    tipo: W(40),
    pesoBytes: zodNumber().int().min(0),
    ancho: zodNumber().int().nullable(),
    alto: zodNumber().int().nullable(),
    subidoEn: zodNumber(),
  });
  ql = zodObject({
    carpetaId: U,
    adminId: U,
  });
  Jl = zodObject({
    v: zodLiteral(2),
    creado: zodNumber(),
    yoId: U,
    casas: zodArray(wl).min(1).max(40),
    cupoMovs: zodArray(Tl).max(2e3),
    personal: zodArray(El).max(200),
    bajas: zodArray(Dl).max(200),
    jugadores: zodArray(Ol).max(500),
    movimientos: zodArray(kl).max(5e3),
    jugadas: zodArray(Al).max(2e3),
    pedidos: zodArray(Ml).max(200),
    notas: zodArray(Nl).max(2e3),
    eventos: zodArray(Pl).max(400),
    reservas: zodArray(Fl).max(100),
    hilos: zodArray(Rl).max(60),
    retenidos: zodArray(zl).max(100),
    resueltos: zodArray(Bl).max(200),
    firmas: zodArray(Vl).max(100),
    trabadas: zodArray(Hl).max(100),
    vinculos: zodArray(Wl).max(50),
    carpetas: zodArray(Gl).max(40),
    flyers: zodArray(Kl).max(200),
    accesos: zodArray(ql).max(400),
    reparto: zodObject({
      modo: zodEnum([`equitativo`, `prioridad`]),
      prioridadAdminId: U.nullable(),
      prioridadPct: zodNumber().int().min(1).max(100),
    }),
    config: zodObject({
      rtp: W(12).nullable(),
      mantenimiento: zodBoolean(),
      numeroGeneral: zodString().regex(/^\d{6,15}$/),
      numeroGeneralGuardado: zodBoolean(),
      bonoPrendido: zodBoolean(),
      bonoGuardado: zodBoolean(),
    }),
    miLink: zodObject({
      link: zodObject({
        id: U,
        codigo: zodString().min(4).max(16),
      }).nullable(),
      registrados: zodNumber().int().min(0),
      cargaron: zodNumber().int().min(0),
    }),
    floatBase: Sl,
    imagenes: zodRecord(U, zodString().max(7e5)),
    sec: zodNumber().int().min(1),
  });
  Xl = {
    movimientos: 5e3,
    jugadas: 2e3,
    eventos: 400,
    notas: 2e3,
    cupoMovs: 2e3,
    resueltos: 200,
    imagenes: 24,
    bytesImagenes: 15e5,
  };
}
export {
  createDemoEnvironment,
  Xl,
  Zl,
  Ql,
  serializePanelState,
  parsePanelState,
  ru,
  iu,
  au,
  ou,
  initializeStateSchema,
};
