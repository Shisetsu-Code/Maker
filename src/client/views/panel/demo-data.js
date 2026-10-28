/**
 * panel / demo-data.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { Hs } from "./demo-media.js";
import { Zl, Ql } from "./state-schema.js";
let KC, qC, Q, $, JC;
function YC(e) {
  let t = new Date(e - JC);
  return e - (Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), 1) + JC);
}
function createDemoState(e, t) {
  let n = e.ahora(),
    r = (t, r, i, a, o) => ({
      id: e.id(),
      nombre: t,
      esMadre: r,
      activa: i,
      permiteRojo: a,
      cupo: 0n,
      desde: n - o * Q,
    }),
    i = r(`Casa principal`, !0, !0, !1, 120),
    a = r(`Punto Norte`, !1, !0, !1, 64),
    o = r(`Punto Sur`, !1, !0, !0, 77),
    s = r(`Punto Oeste`, !1, !0, !1, 1),
    c = r(`Punto Delta`, !1, !1, !1, 95),
    l = (t, r, i, a, o = {}) => ({
      id: e.id(),
      username: t,
      role: r,
      casaId: i.id,
      activo: !0,
      desde: n - a * Q,
      correo: `${t}@demo.invalid`,
      comisionBps: null,
      segundoFactor: !1,
      demo: !1,
      whatsapp: null,
      enReparto: !1,
      alias: null,
      aliasTitular: null,
      ...o,
    }),
    u = l(Zl(t), `root`, i, 120, {
      segundoFactor: !0,
    }),
    d = l(`meli.admin`, `admin`, i, 110, {
      segundoFactor: !0,
      whatsapp: `5492610000142`,
    }),
    f = l(`caja.centro`, `operator`, i, 90, {
      comisionBps: 3e3,
      whatsapp: `5492610000117`,
      enReparto: !0,
      alias: `caja.centro.mp`,
      aliasTitular: `Caja Centro`,
    }),
    p = l(`caja.noche`, `operator`, i, 60, {
      comisionBps: 2500,
      segundoFactor: !0,
      whatsapp: `5492610000188`,
      enReparto: !0,
    }),
    m = l(`caja.finde`, `operator`, i, 45, {
      activo: !1,
      comisionBps: 2e3,
    }),
    h = l(`lu.norte`, `root`, a, 64, {
      segundoFactor: !0,
    }),
    g = l(`caja.norte`, `operator`, a, 62, {
      comisionBps: 3e3,
      segundoFactor: !0,
    }),
    _ = l(`fer.sur`, `root`, o, 77, {
      segundoFactor: !0,
    }),
    v = l(`caja.sur`, `operator`, o, 76, {
      comisionBps: 3e3,
      segundoFactor: !0,
    }),
    y = l(`caja.sur2`, `operator`, o, 30),
    b = l(`nico.delta`, `root`, c, 95, {
      activo: !1,
    }),
    x = {
      v: 2,
      creado: n,
      yoId: u.id,
      casas: [i, a, o, s, c],
      cupoMovs: [],
      personal: [u, d, f, p, m, h, g, _, v, y, b],
      bajas: [],
      jugadores: [],
      movimientos: [],
      jugadas: [],
      pedidos: [],
      notas: [],
      eventos: [],
      reservas: [],
      hilos: [],
      retenidos: [],
      resueltos: [],
      firmas: [],
      trabadas: [],
      vinculos: [],
      carpetas: [],
      flyers: [],
      accesos: [],
      reparto: {
        modo: `equitativo`,
        prioridadAdminId: null,
        prioridadPct: 70,
      },
      config: {
        rtp: `96%`,
        mantenimiento: !1,
        numeroGeneral: `5492610000100`,
        numeroGeneralGuardado: !0,
        bonoPrendido: !1,
        bonoGuardado: !0,
      },
      miLink: {
        link: null,
        registrados: 0,
        cargaron: 0,
      },
      floatBase: $(131e4),
      imagenes: {},
      sec: 1,
    },
    S = (e) => x.casas.find((t) => t.id === e.casaId),
    C = (e, t, r, i, a, o = null) => {
      e.esMadre ||
        ((e.cupo += r),
        x.cupoMovs.push({
          id: Ql(x),
          casaId: e.id,
          tipo: t,
          monto: r,
          saldo: e.cupo,
          motivo: o,
          quienId: a?.id ?? null,
          cuando: n - i,
        }));
    };
  (C(a, `recarga`, $(3e5), 60 * Q, u, `transferencia 1`),
    C(o, `recarga`, $(15e4), 75 * Q, u, `transferencia 1`),
    C(c, `recarga`, $(5e4), 90 * Q, u, null),
    C(a, `recarga`, $(12e4), 12 * Q, u, `transferencia 2`),
    C(a, `ajuste`, -$(2e4), 11 * Q, u, `cargué de más en la recarga`));
  let w = (t, r, i, a, o = {}) => {
      let s = {
        id: e.id(),
        walletId: e.id(),
        username: t,
        casaId: r.id,
        saldo: 0n,
        congelado: !1,
        estado: `active`,
        cajeroId: i?.id ?? null,
        alta: n - a * Q,
        esStaff: !1,
        alerta: null,
        limite: null,
        ...o,
      };
      return (x.jugadores.push(s), s);
    },
    T = (t, r, i, a, o) => {
      if (((t.saldo = r === `load` ? t.saldo + i : t.saldo - i), t.saldo < 0n))
        throw Error(`siembra: ${t.username} quedaría en negativo`);
      (x.movimientos.push({
        id: e.id(),
        tipo: r,
        monto: i,
        cuando: n - a,
        jugadorId: t.id,
        operadorId: o.id,
        saldoDespues: t.saldo,
        clave: ``,
        anulado: !1,
        anulaA: null,
        motivo: null,
      }),
        C(
          S(o),
          r === `load` ? `carga` : `descarga`,
          r === `load` ? -i : i,
          a,
          o,
        ));
    },
    E = (t, r, i, a, o) => {
      if (((t.saldo = t.saldo - i + a), t.saldo < 0n))
        throw Error(`siembra: ${t.username} quedaría en negativo`);
      let s = Ql(x);
      return (
        x.jugadas.push({
          id: e.id(),
          cuando: n - o,
          jugadorId: t.id,
          juego: r,
          apostado: i,
          pagado: a,
          saldoDespues: t.saldo,
          wager: s,
        }),
        s
      );
    },
    D = YC(n),
    O = (e) => Math.max(KC, Math.min(e, D - 10 * KC)),
    ee = (t, r, i, a, o) => {
      let s = x.movimientos[r];
      ((s.anulado = !0),
        (s.motivo = i),
        (t.saldo = s.tipo === `load` ? t.saldo - s.monto : t.saldo + s.monto),
        x.movimientos.push({
          id: e.id(),
          tipo: s.tipo,
          monto: s.monto,
          cuando: n - a,
          jugadorId: t.id,
          operadorId: o.id,
          saldoDespues: t.saldo,
          clave: ``,
          anulado: !1,
          anulaA: s.id,
          motivo: i,
        }));
    },
    te = w(`lucho_22`, i, f, 40),
    k = w(`caro.88`, i, u, 33),
    A = w(`tincho.r`, i, f, 9, {
      alerta: `Cargó ARS 40.000,00 y sólo apostó ARS 2.100,00.`,
    }),
    j = w(`maxi.b`, i, p, 6, {
      alerta: `Cargó ARS 100.000,00 y apostó muy poco.`,
    }),
    M = w(`juli_ok`, i, f, 80),
    N = w(`mica.v`, i, d, 70),
    P = w(`ro_bet`, i, p, 11, {
      alerta: `Cargó ARS 8.000,00 y sólo apostó ARS 300,00.`,
    }),
    F = w(`nahue10`, i, p, 55);
  w(`santi.k`, i, null, 2);
  let ne = w(`pili_09`, a, g, 50),
    I = w(`lauti.m`, a, g, 20),
    L = w(`bruno.t`, o, v, 70),
    R = w(`flor_21`, o, v, 25),
    re = w(`gonza77`, o, y, 18),
    ie = w(`dani.v`, c, b, 90);
  (T(te, `load`, $(6e4), 20 * Q, f),
    E(te, `Gates of Olympus`, $(3e4), $(41e3), 20 * Q - qC),
    T(te, `unload`, $(11800), 19 * Q, f),
    E(te, `Sweet Bonanza`, $(2e4), $(9e3), 27e7),
    T(te, `load`, $(25e3), 2 * Q, f),
    T(te, `load`, $(5e4), O(30 * qC), f),
    E(te, `Gates of Olympus`, $(6e4), $(15e3), O(29 * qC)),
    E(te, `Sugar Rush`, $(12e3), $(18500), 2 * qC),
    T(k, `load`, $(3e4), 15 * Q, u),
    E(k, `Big Bass Bonanza`, $(15e3), $(15e3), 14 * Q),
    T(k, `unload`, $(7250), 6 * Q, u),
    E(k, `Sweet Bonanza`, $(2e4), $(6e3), O(7 * qC)),
    E(k, `Aviator`, $(4e3), $(9600), 5 * qC),
    T(A, `load`, $(4e4), 8 * Q, f),
    E(A, `Sugar Rush`, $(2100), 0n, 8 * Q - 2 * qC),
    (A.congelado = !0),
    T(j, `load`, $(1e5), 5 * Q, u),
    T(j, `load`, $(1e5), 5 * Q - 10 * KC, u),
    ee(
      j,
      x.movimientos.length - 1,
      `cargué dos veces la misma transferencia`,
      5 * Q - 5 * KC,
      u,
    ));
  let ae = E(j, `Gates of Olympus`, $(1e3), 0n, 3 * qC);
  (T(M, `load`, $(12e3), 60 * Q, f),
    E(M, `Book of Dead`, $(30400), $(30800), 59 * Q),
    T(M, `unload`, $(9e3), 58 * Q, f),
    (M.estado = `closed`),
    T(N, `load`, $(7700), 13 * Q, d),
    E(N, `Mines`, $(7615), 0n, 13 * Q - qC),
    T(N, `load`, $(1e3), 972e5, d),
    E(N, `Plinko`, $(400), $(250), 936e5),
    T(N, `load`, $(12e3), O(3 * qC), d),
    E(N, `Mines`, $(12e3), $(2e3), O(9e6)),
    T(P, `load`, $(8e3), 10 * Q, p),
    E(P, `Sweet Bonanza`, $(300), 0n, 10 * Q - qC),
    T(P, `unload`, $(7500), 9 * Q, p),
    (P.estado = `blocked`),
    (P.congelado = !0),
    T(F, `load`, $(2e5), 4 * Q, p),
    E(F, `Crazy Time`, $(61200), $(78400), 3 * Q),
    T(F, `unload`, $(24e3), 2 * Q, p),
    E(F, `Crazy Time`, $(55e3), $(1e4), O(30 * qC)),
    E(F, `Lightning Roulette`, $(2e4), $(16e3), 4 * qC),
    T(ne, `load`, $(45e3), 40 * Q, g),
    E(ne, `Gates of Olympus`, $(2e4), $(38400), 39 * Q),
    T(ne, `unload`, $(3e4), 38 * Q, g),
    T(ne, `load`, $(15e3), 3 * Q, g),
    T(ne, `load`, $(75e3), O(50 * qC), g),
    E(ne, `Sweet Bonanza`, $(8e4), $(1e4), O(49 * qC)));
  let oe = E(ne, `Starlight Princess`, $(2e3), 0n, 26 * qC);
  (E(ne, `Starlight Princess`, $(9e3), $(4700), 6 * qC),
    T(I, `load`, $(22e3), 15 * Q, g),
    E(I, `Sweet Bonanza`, $(18e3), $(27200), 14 * Q),
    T(I, `unload`, $(9200), 13 * Q, g),
    E(I, `Gates of Olympus`, $(1e4), $(31e3), 2 * Q),
    T(I, `unload`, $(3e4), Q, g),
    T(L, `load`, $(12e4), 60 * Q, v),
    E(L, `Big Bass Bonanza`, $(4e4), $(91e3), 59 * Q),
    T(L, `load`, $(3e4), 7 * Q, v),
    E(L, `Big Bass Bonanza`, $(25e3), $(19e3), 2 * Q),
    T(R, `load`, $(5e3), 20 * Q, v),
    E(R, `Plinko`, $(18600), $(17600), 19 * Q),
    T(R, `load`, $(8e3), 4 * qC, v),
    T(re, `load`, $(3200), 15 * Q, y),
    E(re, `Aviator`, $(9800), $(9800), 14 * Q),
    T(re, `load`, $(1e4), O(20 * qC), y),
    E(re, `Plinko`, $(9e3), $(1500), O(19 * qC)),
    T(ie, `load`, $(2e4), 80 * Q, b),
    E(ie, `Sugar Rush`, $(15700), $(9e3), 79 * Q));
  for (let e of x.personal)
    e.id !== u.id &&
      w(e.username, S(e), null, Math.max(1, Math.round((n - e.desde) / Q)), {
        esStaff: !0,
      });
  let se = (t) => {
      let n = e.id();
      return (
        (x.imagenes[n] = `data:image/svg+xml,${encodeURIComponent(t)}`),
        n
      );
    },
    ce = se(Hs(`ARS 5.000,00`, `caro.88`, `4471`)),
    le = se(Hs(`ARS 12.000,00`, `pili_09`, `8841`));
  (x.pedidos.push(
    {
      id: e.id(),
      jugadorId: k.id,
      tipo: `load`,
      monto: $(5e3),
      nota: `Te transferí recién, comprobante 4471`,
      cuando: n - 12 * KC,
      comprobantes: [
        {
          id: e.id(),
          imagen: ce,
        },
      ],
    },
    {
      id: e.id(),
      jugadorId: ne.id,
      tipo: `load`,
      monto: $(12e3),
      nota: null,
      cuando: n - 6 * KC,
      comprobantes: [
        {
          id: e.id(),
          imagen: le,
        },
      ],
    },
    {
      id: e.id(),
      jugadorId: N.id,
      tipo: `unload`,
      monto: $(850),
      nota: `Mi alias es mica.demo`,
      cuando: n - 9 * KC,
      comprobantes: [],
    },
    {
      id: e.id(),
      jugadorId: P.id,
      tipo: `unload`,
      monto: $(2e3),
      nota: null,
      cuando: n - 2 * KC,
      comprobantes: [],
    },
  ),
    x.firmas.push(
      {
        id: Ql(x),
        jugadorId: F.id,
        monto: $(12e4),
        pedidoPorId: p.id,
        cuando: n - 35 * KC,
      },
      {
        id: Ql(x),
        jugadorId: L.id,
        monto: $(95e3),
        pedidoPorId: v.id,
        cuando: n - 3 * qC,
      },
    ),
    x.retenidos.push(
      {
        id: Ql(x),
        jugadorId: j.id,
        monto: $(51e3),
        wager: ae,
        cuando: n - 3 * qC,
        motivo: `supera el tope de un premio`,
      },
      {
        id: Ql(x),
        jugadorId: ne.id,
        monto: $(5e3),
        wager: oe,
        cuando: n - 26 * qC,
        motivo: `supera el tope por hora`,
      },
      {
        id: Ql(x),
        jugadorId: te.id,
        monto: $(22400),
        wager: x.jugadas.find(
          (e) => e.jugadorId === te.id && e.juego === `Sugar Rush`,
        ).wager,
        cuando: n - 2 * qC,
        motivo: `supera el tope de un premio`,
      },
    ),
    x.resueltos.push(
      {
        id: Ql(x),
        username: `pili_09`,
        monto: $(18400),
        wager: Ql(x),
        cuando: n - 39 * Q,
        motivo: `supera el tope de un premio`,
        acreditado: !0,
        quien: u.username,
      },
      {
        id: Ql(x),
        username: `lauti.m`,
        monto: $(9200),
        wager: Ql(x),
        cuando: n - 14 * Q,
        motivo: `supera el tope por hora`,
        acreditado: !0,
        quien: d.username,
      },
      {
        id: Ql(x),
        username: `bruno.t`,
        monto: $(51e3),
        wager: Ql(x),
        cuando: n - 2 * Q,
        motivo: `supera el tope de un premio`,
        acreditado: !1,
        quien: u.username,
      },
    ));
  let ue = Ql(x);
  x.trabadas.push({
    wagerId: ue,
    pairCode: `PP-${ue}`,
    jugadorId: te.id,
    monto: $(2e3),
    intentos: 3,
    ultimoError: `el proveedor no respondió a tiempo`,
    cuando: n - 12 * qC,
    ultimoIntento: n - 11 * qC,
    reintentadaEn: null,
  });
  let de = Ql(x);
  (x.trabadas.push({
    wagerId: de,
    pairCode: `PP-${de}`,
    jugadorId: null,
    monto: $(1500),
    intentos: 1,
    ultimoError: null,
    cuando: n - 30 * qC,
    ultimoIntento: n - 29 * qC,
    reintentadaEn: null,
  }),
    x.vinculos.push(
      {
        id: e.id(),
        donde: `La misma casa o el mismo wifi`,
        tecnico: `2001:db8:a1b2:c3d4::/64`,
        categoria: `revisar`,
        nivel: `alto`,
        ahora: !0,
        ultima: n - 40 * KC,
        desde: n - 5 * Q,
        cuentas: [
          {
            tipo: `jugador`,
            refId: j.id,
            nombre: j.username,
            vigente: !0,
          },
          {
            tipo: `jugador`,
            refId: F.id,
            nombre: F.username,
            vigente: !0,
          },
        ],
      },
      {
        id: e.id(),
        donde: `El mismo teléfono`,
        tecnico: `198.51.100.24`,
        categoria: `revisar`,
        nivel: `medio`,
        ahora: !1,
        ultima: n - 9 * Q,
        desde: n - 11 * Q,
        cuentas: [
          {
            tipo: `jugador`,
            refId: P.id,
            nombre: P.username,
            vigente: !0,
          },
          {
            tipo: `jugador`,
            refId: A.id,
            nombre: A.username,
            vigente: !1,
          },
        ],
      },
      {
        id: e.id(),
        donde: `La misma salida a internet`,
        tecnico: `203.0.113.18`,
        categoria: `solo-personal`,
        nivel: `bajo`,
        ahora: !1,
        ultima: n - 7 * qC,
        desde: null,
        cuentas: [
          {
            tipo: `staff`,
            refId: u.id,
            nombre: u.username,
            vigente: !0,
          },
          {
            tipo: `staff`,
            refId: p.id,
            nombre: p.username,
            vigente: !0,
          },
        ],
      },
    ),
    x.notas.push(
      {
        id: e.id(),
        jugadorId: te.id,
        texto: `Paga siempre por transferencia.`,
        autorId: f.id,
        cuando: n - 18 * Q,
      },
      {
        id: e.id(),
        jugadorId: j.id,
        texto: `Reclamó dos veces por el mismo premio. Antes de pagarle, mirale las jugadas.`,
        autorId: p.id,
        cuando: n - 4 * Q,
      },
      {
        id: e.id(),
        jugadorId: j.id,
        texto: `Le expliqué que el premio grande lo revisa el dueño.`,
        autorId: p.id,
        cuando: n - 2 * qC,
      },
      {
        id: e.id(),
        jugadorId: P.id,
        texto: `Retiró casi todo sin jugar. Bloqueada hasta hablar con él.`,
        autorId: u.id,
        cuando: n - 9 * Q,
      },
    ));
  let fe = (t, r, i, a = null, o = null) => ({
      id: e.id(),
      deJugador: t,
      staffId: t ? null : (a ?? u).id,
      texto: r,
      cuando: n - i,
      adjunto: o,
      oculto: !1,
    }),
    pe = (t, n, r, i) => ({
      id: e.id(),
      jugadorId: t.id,
      abierta: n,
      sinLeer: r,
      mensajes: i,
      pendientes: [],
      respondidas: 0,
    }),
    me = se(Hs(`ARS 5.000,00`, `caro.88`, `4471`));
  x.hilos.push(
    pe(k, !0, 2, [
      fe(!0, `Hola! Te mandé la transferencia de 5.000`, 4 * KC),
      fe(!0, ``, 3 * KC, null, me),
    ]),
    pe(R, !0, 3, [
      fe(!0, `Buenas, ¿a qué alias transfiero?`, 26 * KC),
      fe(!0, `¿Hay mínimo para cargar?`, 25 * KC),
      fe(!0, `Holaaa`, 12 * KC),
    ]),
    pe(te, !0, 0, [
      fe(!0, `¿Me podés retirar 10.000?`, 3 * qC),
      fe(!1, `Dale, ya te lo paso.`, 3 * qC - 2 * KC, f),
      fe(!0, `Me llegó, gracias!`, 96e5),
      fe(!1, `De nada, cualquier cosa escribime por acá.`, 948e4, u),
    ]),
    pe(ne, !0, 1, [
      fe(!0, `No me acuerdo la contraseña y no puedo entrar`, 972e5),
    ]),
    pe(F, !1, 0, [
      fe(!0, `¿El Crazy Time paga el bono de la ruleta?`, 108e6),
      fe(
        !1,
        `Sí, se paga igual que siempre. Si ves algo raro mandame captura.`,
        1044e5,
        p,
      ),
    ]),
  );
  let he = (t, r) => {
      let i = {
        id: e.id(),
        nombre: t,
        creadaEn: n - r * Q,
      };
      return (x.carpetas.push(i), i);
    },
    ge = (t, r, i, a) =>
      x.flyers.push({
        id: e.id(),
        carpetaId: t.id,
        nombre: r,
        imagen: `svg:${i}`,
        tipo: `image/svg+xml`,
        pesoBytes: 48e3 + i * 3117,
        ancho: 1080,
        alto: 1350,
        subidoEn: n - a * Q,
      }),
    _e = he(`Bono de bienvenida`, 30),
    ve = he(`Promos de fin de semana`, 21),
    ye = he(`Torneos`, 9);
  (ge(_e, `bienvenida-historia.png`, 0, 30),
    ge(_e, `bienvenida-cuadrado.png`, 1, 30),
    ge(_e, `bienvenida-estado.png`, 2, 29),
    ge(ve, `viernes-recarga.png`, 3, 21),
    ge(ve, `sabado-doble.png`, 4, 20),
    ge(ve, `domingo-cashback.png`, 5, 14),
    ge(ve, `finde-largo.png`, 6, 6),
    ge(ye, `torneo-slots.png`, 7, 9),
    ge(ye, `torneo-ruleta.png`, 8, 8),
    ge(ye, `ganadores-semana.png`, 9, 2),
    x.accesos.push(
      {
        carpetaId: _e.id,
        adminId: f.id,
      },
      {
        carpetaId: ve.id,
        adminId: f.id,
      },
      {
        carpetaId: _e.id,
        adminId: g.id,
      },
    ));
  let be = (t, r) =>
    x.eventos.push({
      id: e.id(),
      cuando: n - t,
      ...r,
    });
  (be(9 * Q, {
    event: `Cuenta BLOQUEADA`,
    tone: `bad`,
    username: P.username,
    fields: [
      {
        k: `Motivo`,
        v: `retiró casi todo sin jugar`,
      },
      {
        k: `Usuario`,
        v: P.username,
      },
      {
        k: `Operador`,
        v: u.username,
      },
    ],
    tipo: `account_blocked`,
    extra: {
      username: P.username,
    },
    actorId: u.id,
  }),
    be(8 * Q, {
      event: `Plata BLOQUEADA`,
      tone: `bad`,
      username: A.username,
      fields: [
        {
          k: `Usuario`,
          v: A.username,
        },
        {
          k: `Motivo`,
          v: `cargó y no juega`,
        },
        {
          k: `Operador`,
          v: f.username,
        },
      ],
      tipo: `wallet_frozen`,
      extra: {
        username: A.username,
        nota: `cargó y no juega`,
      },
      actorId: f.id,
    }),
    be(3 * qC, {
      event: `Premio retenido`,
      tone: `bad`,
      username: j.username,
      fields: [
        {
          k: `Motivo`,
          v: `supera el tope de un premio`,
        },
        {
          k: `Usuario`,
          v: j.username,
        },
        {
          k: `Monto`,
          v: `ARS 51.000,00`,
        },
      ],
      tipo: null,
      extra: null,
      actorId: null,
    }),
    be(5 * qC, {
      event: `Intento de ingreso FALLIDO`,
      tone: `bad`,
      username: null,
      fields: [
        {
          k: `IP`,
          v: `198.51.100.24`,
        },
        {
          k: `País`,
          v: `AR`,
        },
      ],
      tipo: null,
      extra: null,
      actorId: null,
    }),
    be(20 * qC, {
      event: `Ingreso al panel`,
      tone: `ok`,
      username: null,
      fields: [
        {
          k: `Usuario`,
          v: p.username,
        },
        {
          k: `IP`,
          v: `203.0.113.21`,
        },
        {
          k: `País`,
          v: `AR`,
        },
      ],
      tipo: null,
      extra: null,
      actorId: p.id,
    }),
    be(12 * Q, {
      event: `Cupo cargado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Panel`,
          v: a.nombre,
        },
        {
          k: `Monto`,
          v: `ARS 120.000,00`,
        },
      ],
      tipo: null,
      extra: null,
      actorId: u.id,
    }),
    be(64 * Q, {
      event: `Panel creado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Panel`,
          v: a.nombre,
        },
      ],
      tipo: `casa_creada`,
      extra: {
        panel: a.nombre,
      },
      actorId: u.id,
    }),
    be(Q, {
      event: `Panel creado`,
      tone: `warn`,
      username: null,
      fields: [
        {
          k: `Panel`,
          v: s.nombre,
        },
      ],
      tipo: `casa_creada`,
      extra: {
        panel: s.nombre,
      },
      actorId: u.id,
    }),
    be(30 * Q, {
      event: `RTP cambiado`,
      tone: `bad`,
      username: null,
      fields: [
        {
          k: `RTP`,
          v: `96%`,
        },
        {
          k: `Lo cambió`,
          v: u.username,
        },
      ],
      tipo: `rtp_cambiado`,
      extra: {
        rtp: `96%`,
      },
      actorId: u.id,
    }),
    x.eventos.sort((e, t) => e.cuando - t.cuando),
    x.movimientos.sort((e, t) => e.cuando - t.cuando),
    x.jugadas.sort((e, t) => e.cuando - t.cuando),
    x.cupoMovs.sort((e, t) => e.cuando - t.cuando));
  let xe = new Map();
  for (let e of x.cupoMovs) {
    let t = (xe.get(e.casaId) ?? 0n) + e.monto;
    (xe.set(e.casaId, t), (e.saldo = t));
  }
  return x;
}
function initializeDemoData() {
  KC = 6e4;
  qC = 60 * KC;
  Q = 24 * qC;
  $ = (e) => BigInt(e) * 100n;
  JC = 3 * qC;
}
export { createDemoState, initializeDemoData };
