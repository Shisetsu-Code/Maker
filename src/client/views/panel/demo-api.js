/**
 * panel / demo-api.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { Qo, $o, es, ts, is, as, os } from "./demo-services.js";
import { formatMoney, us, ds, Fs, zs } from "./money-and-phone.js";
import { Ks, qs } from "./demo-media.js";
import {
  uu,
  Ou,
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  od,
  sd,
  cd,
  ud,
  dd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  Sd,
  Cd,
  wd,
  Td,
  Od,
  kd,
  jd,
  Md,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Kd,
  qd,
} from "./demo-operations.js";
import { Bp } from "./cashier-controls.js";
let Jd, Yd, Xd, Zd;
function Qd(e, t) {
  let n = Xd.almacen;
  return Promise.resolve(n ? e(n.leer()) : t);
}
async function G(e, t) {
  let n = Xd.almacen;
  if (!n) return t;
  let r = await n.operarAsync(async (t) => e(t, n));
  return (n.avisar(), r);
}
async function $d() {
  let e = Xd.almacen;
  if (!e) return;
  let t = e.env.ahora();
  Bd(e.leer(), t) &&
    (await e.operarAsync(async (n) => Vd(n, e.env, t)), e.avisar());
}
let ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  K,
  kp,
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  Fp,
  Ip,
  Lp,
  Rp;
function zp() {
  let e = globalThis;
  ((e.__demoSignUp = async (e) => {
    let t = Xd.almacen;
    return t && (await t.operarAsync(async (t) => Gu(t, e)))
      ? t.env.id()
      : null;
  }),
    (e.__demoImg = (e, t) => Ks(Xd.almacen?.leer() ?? null, e, t)),
    (e.__demoSitio = Bp));
}
function initializeDemoApi() {
  Jd = `Esto es una demo: no se guarda nada ni se mueve plata`;
  Yd = {
    ok: !1,
    mensaje: Jd,
    motivo: Jd,
    reason: `error`,
    error: Jd,
    movimientos: [],
    jugadas: [],
    notas: [],
    hilos: [],
    mensajes: [],
    carpetas: [],
    flyers: [],
    gente: [],
  };
  Xd = {
    almacen: null,
    casaNombre: `Mi casino`,
  };
  Zd = (e) =>
    new Date(e).toLocaleString(`es-AR`, {
      day: `2-digit`,
      month: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`,
      timeZone: us,
    });
  ef = () => Yd;
  tf = {
    ok: !1,
    mensaje: `No tenés permiso para esto.`,
  };
  nf = (e) => G((t, n) => Ou(t, n.env, e), ef());
  rf = (e) => G((t, n) => Au(t, n.env, e), ef());
  af = (e) =>
    G((t, n) => ju(t, n.env, e), {
      ok: !1,
    });
  of = (e) => G((t, n) => Mu(t, n.env, e), ef());
  sf = (e) => G((t, n) => Nu(t, n.env, e), ef());
  cf = (e, t) => G((n, r) => Pu(n, r.env, e, t), ef());
  lf = (e, t) => G((n, r) => Fu(n, r.env, e, t), ef());
  uf = (e) =>
    G((t, n) => Iu(t, n.env, e), {
      ok: !1,
      motivo: Jd,
    });
  df = (e) =>
    G((t, n) => Lu(t, n.env, e), {
      ok: !1,
      motivo: Jd,
    });
  ff = (e) => G((t, n) => void Ru(t, n.env, e, !0), void 0);
  pf = (e) => G((t, n) => void Ru(t, n.env, e, !1), void 0);
  mf = (e) =>
    Qd(
      (t) => {
        let n = t.jugadores.find((t) => t.username === e);
        if (!n)
          return {
            ok: !1,
            notas: [],
          };
        let r = (e) =>
          t.personal.find((t) => t.id === e)?.username ??
          t.bajas.find((t) => t.id === e)?.username ??
          `—`;
        return {
          ok: !0,
          notas: t.notas
            .filter((e) => e.jugadorId === n.id)
            .sort((e, t) => t.cuando - e.cuando)
            .map((e) => ({
              id: e.id,
              texto: e.texto,
              autor: r(e.autorId),
              cuando: Zd(e.cuando),
            })),
        };
      },
      {
        ok: !1,
        notas: [],
      },
    );
  hf = (e) =>
    Qd(
      (t) => {
        let n = t.jugadores.find((t) => t.username === e);
        if (!n)
          return {
            ok: !1,
            jugadas: [],
          };
        let r = (e) =>
            (e > 0n ? `+` : e < 0n ? `−` : ``) + formatMoney(e < 0n ? -e : e),
          i = new Map();
        for (let e of t.resueltos)
          i.set(e.wager, e.acreditado ? `aprobado` : `rechazado`);
        for (let e of t.retenidos) i.set(e.wager, `esperando`);
        return {
          ok: !0,
          jugadas: t.jugadas
            .filter((e) => e.jugadorId === n.id)
            .sort((e, t) => t.cuando - e.cuando)
            .map((e) => {
              let t = e.apostado > 0n ? (i.get(e.wager) ?? null) : null;
              return {
                wager: e.wager,
                apostado: formatMoney(e.apostado),
                cobrado: formatMoney(e.pagado),
                neto: r(e.pagado - e.apostado),
                gano: e.pagado > e.apostado,
                anulada: !1,
                cerrada: !0,
                retenido: t,
                juego: e.juego,
                cuando: Zd(e.cuando),
                saldo: formatMoney(e.saldoDespues),
              };
            }),
        };
      },
      {
        ok: !1,
        jugadas: [],
      },
    );
  gf = (e, t) => G((n, r) => zu(n, r.env, e, t), ef());
  _f = (e, t) => G((n, r) => Bu(n, r.env, e, t), ef());
  vf = (e, t, n) => G((r, i) => Wu(r, i.env, e, t, n), ef());
  yf = (e, t) => G((n, r) => Ku(n, r.env, e, t), ef());
  bf = (e) => G((t) => qu(t, e), void 0);
  xf = (e, t) => G((n, r) => Ju(n, r.env, e, t), ef());
  Sf = (e, t) => G((n, r) => Yu(n, r.env, e, t), ef());
  Cf = (e) => G((t, n) => Xu(t, n.env, e), ef());
  wf = (e) => G((t, n) => Zu(t, n.env, e), ef());
  Tf = () =>
    Qd(
      () => ({
        ok: !0,
        cuentas: [],
      }),
      {
        ok: !1,
        cuentas: [],
      },
    );
  Ef = () =>
    Promise.resolve({
      armada: !1,
      conCodigo: !1,
    });
  Df = () => Promise.resolve(!1);
  Of = () => Promise.resolve();
  kf = (e, t) =>
    G(
      (n, r) => {
        let i =
            e === `casas` || e === `personal` || e === `jugadores` ? e : null,
          a = Array.isArray(t)
            ? [...new Set(t.filter((e) => typeof e == `string`))].slice(0, 200)
            : [];
        if (!i || a.length === 0)
          return {
            ok: !1,
            hechos: 0,
            fallados: [],
            mensaje: `Elegí entre 1 y 200 elementos.`,
          };
        let o = i === `casas` ? rd : i === `personal` ? Xu : Zu,
          s = 0,
          c = [];
        for (let e of a) {
          let t = o(n, r.env, e);
          t.ok
            ? s++
            : c.push({
                id: e,
                mensaje: t.mensaje,
              });
        }
        return {
          ok: !0,
          hechos: s,
          fallados: c,
        };
      },
      {
        ok: !1,
        hechos: 0,
        fallados: [],
        mensaje: Jd,
      },
    );
  Af = (e, t) => G((n, r) => Qu(n, r.env, e, t), ef());
  jf = (e) => G((t, n) => $u(t, n.env, e), ef());
  Mf = (e) => G((t) => qu(t, e), void 0);
  Nf = (e) =>
    Qd((t) => {
      if (!$o(`root`))
        return {
          ok: !1,
          mensaje: es(`sin-permiso`),
        };
      let n =
        typeof e == `string` ? t.jugadores.find((t) => t.id === e) : void 0;
      return n
        ? n.esStaff
          ? {
              ok: !1,
              mensaje: es(`es-del-personal`),
            }
          : n.estado === `closed`
            ? {
                ok: !1,
                mensaje: es(`cerrada`),
              }
            : n.estado === `active`
              ? {
                  ok: !0,
                  usuario: n.username,
                  contrasena: Qo(),
                  mensaje: `${ts(n.username, `usuario`)} (demo)`,
                  entraCon: `usuario`,
                }
              : {
                  ok: !1,
                  mensaje: es(`bloqueada`),
                }
        : {
            ok: !1,
            mensaje: es(`no-es-de-tu-panel`),
          };
    }, ef());
  Pf = (e) =>
    Qd((t) => {
      let n =
        typeof e == `string` ? t.personal.find((t) => t.id === e) : void 0;
      if (!n)
        return {
          ok: !1,
          mensaje: as(`no-existe`),
        };
      let r = uu(t),
        i = is(
          {
            rol: `root`,
            id: t.yoId,
            casaId: r.id,
            esMadre: !0,
          },
          {
            id: n.id,
            rol: n.role,
            casaId: n.casaId,
            esMadre: n.casaId === r.id,
            esDemo: n.demo,
            archivado: !1,
            activo: n.activo,
          },
        );
      if (!i.ok)
        return {
          ok: !1,
          mensaje: as(i.motivo),
        };
      let a = t.jugadores.some((e) => e.esStaff && e.username === n.username);
      return {
        ok: !0,
        usuario: n.username,
        contrasena: Qo(),
        mensaje: `${os(n.username, !0, n.segundoFactor, 48, a)} (demo)`,
        entraConUsuario: !0,
      };
    }, ef());
  Ff = (e) => G((t, n) => ed(t, n.env, e), ef());
  If = (e, t) => G((n, r) => td(n, r.env, e, t), ef());
  Lf = (e, t) => G((n, r) => nd(n, r.env, e, t), ef());
  Rf = (e) => G((t, n) => rd(t, n.env, e), ef());
  zf = (e, t, n) => G((r, i) => id(r, i.env, e, t, n), ef());
  Bf = (e) =>
    Qd((t) => od(t, e), {
      ok: !1,
      movimientos: [],
    });
  Vf = (e) => G((t, n) => sd(t, n.env, e), ef());
  Hf = (e) => G((t, n) => cd(t, n.env, e), void 0);
  Uf = (e, t) => G((n, r) => ud(n, r.env, e, t), ef());
  Wf = (e, t, n) => G((r, i) => dd(r, i.env, e, t, n), ef());
  Gf = () =>
    Qd(
      (e) => {
        let t = ds(
            e.personal
              .filter((e) => e.activo && e.enReparto && e.whatsapp)
              .map((e) => ({
                adminId: e.id,
                whatsapp: e.whatsapp,
              })),
            e.reparto,
          ),
          n = _d(e),
          r = uu(e);
        return {
          ok: !0,
          modo: e.reparto.modo,
          prioridadAdminId: e.reparto.prioridadAdminId,
          prioridadPct: e.reparto.prioridadPct,
          aliasHabilitado: !0,
          gente: e.personal
            .filter((e) => e.activo && !e.demo)
            .sort(
              (e, t) =>
                Number(t.casaId === r.id) - Number(e.casaId === r.id) ||
                e.username.localeCompare(t.username),
            )
            .map((e) => ({
              id: e.id,
              username: e.username,
              role: e.role,
              numero: e.whatsapp ? zs(e.whatsapp) : ``,
              enReparto: e.enReparto && !!e.whatsapp,
              esMadre: e.casaId === r.id,
              parte: Math.round((t.get(e.id) ?? 0) * 100),
              alias: e.alias ?? ``,
              aliasTitular: e.alias ? (e.aliasTitular ?? ``) : ``,
              aliasRoto: !1,
              aliasVisible: n.has(e.id),
            })),
        };
      },
      {
        ok: !1,
        gente: [],
        modo: `equitativo`,
        prioridadAdminId: null,
        prioridadPct: 70,
        aliasHabilitado: !1,
      },
    );
  Kf = (e, t) => G((n, r) => pd(n, r.env, e, t), tf);
  qf = (e, t, n) => G((r, i) => md(r, i.env, e, t, n), tf);
  Jf = (e, t) => G((n, r) => hd(n, r.env, e, t), tf);
  Yf = (e, t, n) => G((r, i) => gd(r, i.env, e, t, n), tf);
  Xf = () =>
    Qd(
      (e) => ({
        ok: !0,
        e164: e.config.numeroGeneral,
        visible: Fs(e.config.numeroGeneral),
        desdeElCodigo: !e.config.numeroGeneralGuardado,
      }),
      {
        ok: !1,
      },
    );
  Zf = (e) => G((t, n) => vd(t, n.env, e), tf);
  Qf = () =>
    Qd(
      (e) => ({
        ok: !0,
        prendido: e.config.bonoPrendido,
        guardado: e.config.bonoGuardado,
      }),
      {
        ok: !1,
        sinPermiso: !0,
        mensaje: Jd,
      },
    );
  $f = (e) => G((t, n) => yd(t, n.env, e), tf);
  ep = () =>
    Qd(
      (e) => {
        let t = uu(e);
        return {
          ok: !0,
          soyMadre: !0,
          gente: e.personal.map((n) => ({
            id: n.id,
            username: n.username,
            role: n.role,
            casa:
              n.casaId === t.id
                ? Xd.casaNombre
                : (e.casas.find((e) => e.id === n.casaId)?.nombre ?? ``),
            esMadre: n.casaId === t.id,
            demo: n.demo,
            activo: n.activo,
            soyYo: n.id === e.yoId,
          })),
        };
      },
      {
        ok: !1,
        soyMadre: !1,
        gente: [],
      },
    );
  tp = (e, t) => G((n, r) => bd(n, r.env, e, t), tf);
  np = () =>
    Qd(
      (e) => ({
        ok: !0,
        link: e.miLink.link,
        registrados: e.miLink.registrados,
        cargaron: e.miLink.cargaron,
        registroAbierto: !0,
      }),
      {
        ok: !1,
      },
    );
  rp = () => G((e, t) => Sd(e, t.env), tf);
  ip = (e) => G((t, n) => Cd(t, n.env, e), tf);
  ap = () =>
    Promise.resolve({
      ok: !1,
      mensaje: Jd,
    });
  op = () =>
    Qd((e) => Kd(e, Xd.casaNombre), {
      ok: !1,
      mensaje: Jd,
    });
  sp = (e) =>
    Qd((t) => qd(t, Xd.casaNombre, e, Xd.almacen?.env.ahora() ?? Date.now()), {
      ok: !1,
      campo: `general`,
      mensaje: Jd,
    });
  cp = (e, t) => e.jugadores.find((e) => e.id === t)?.username ?? `jugador`;
  lp = (e) => e.mensajes.filter((e) => !e.oculto);
  up = (e, t) => {
    let n = lp(t),
      r = n[n.length - 1];
    return {
      id: t.id,
      jugador: cp(e, t.jugadorId),
      abierta: t.abierta,
      sinLeer: t.sinLeer,
      ultimoAt: new Date(r?.cuando ?? 0),
      ultimoDe: r?.deJugador === !1 ? `staff` : `jugador`,
      adelanto: r
        ? (r.texto || (r.adjunto ? `📷 Foto` : ``)).slice(0, 120)
        : ``,
    };
  };
  dp = (e) =>
    lp(e).map((e) => ({
      id: e.id,
      deJugador: e.deJugador,
      staffId: e.staffId,
      texto: e.texto,
      adjunto: e.adjunto !== null,
      cuando: new Date(e.cuando),
    }));
  fp = (e) => e.mensajes.length === 0 || lp(e).length > 0;
  pp = async () => (
    await $d(),
    Qd(
      (e) =>
        e.hilos.reduce((e, t) => e + (t.abierta && fp(t) ? t.sinLeer : 0), 0),
      0,
    )
  );
  mp = async (e = !0) => (
    await $d(),
    Qd(
      (t) => ({
        ok: !0,
        disponible: !0,
        hilos: t.hilos
          .filter((t) => (!e || t.abierta) && fp(t))
          .map((e) => up(t, e))
          .sort((e, t) => t.ultimoAt.getTime() - e.ultimoAt.getTime()),
      }),
      {
        ok: !1,
        hilos: [],
        disponible: !0,
      },
    )
  );
  hp = async (e) => {
    await $d();
    let t = Xd.almacen,
      n = t?.leer().hilos.find((t) => t.id === e);
    return !t || !n
      ? {
          ok: !1,
          mensajes: [],
        }
      : n.sinLeer === 0
        ? {
            ok: !0,
            mensajes: dp(n),
          }
        : G(
            (t) => {
              let n = t.hilos.find((t) => t.id === e);
              return n
                ? (Rd(t, e),
                  {
                    ok: !0,
                    mensajes: dp(n),
                  })
                : {
                    ok: !1,
                    mensajes: [],
                  };
            },
            {
              ok: !1,
              mensajes: [],
            },
          );
  };
  gp = async (e, t, n) => {
    let r = n?.get(`foto`),
      i = null;
    if (r instanceof Blob && r.size > 0) {
      if (r.size > 8 * 1024 * 1024)
        return {
          ok: !1,
          mensaje: `La foto pesa más de 8 MB.`,
        };
      let e = await qs(r);
      if (!e)
        return {
          ok: !1,
          mensaje: `Ese archivo no es una imagen.`,
        };
      i = e.dataUrl;
    }
    return G((n, r) => {
      let a = Id(n, r.env, e, t, i),
        o = n.hilos.find((t) => t.id === e);
      return a.ok && o
        ? {
            ok: !0,
            mensajes: dp(o),
          }
        : a;
    }, ef());
  };
  _p = (e, t) =>
    G((n) => Ld(n, e, t), {
      ok: !1,
    });
  vp = (e, t) => G((n, r) => zd(n, r.env, e, t), tf);
  yp = (e) =>
    Qd((t) => {
      let n = typeof e == `string` ? e.trim().toLowerCase() : ``;
      return n.length < 2
        ? []
        : t.jugadores
            .filter((e) => !e.esStaff && e.username.includes(n))
            .slice(0, 8)
            .map((e) => ({
              id: e.id,
              username: e.username,
            }));
    }, []);
  bp = (e) =>
    G((t, n) => {
      let r = t.jugadores.find((t) => t.id === e && !t.esStaff);
      if (!r)
        return {
          ok: !1,
          mensaje: `Ese jugador no es de tu casa.`,
        };
      let i = t.hilos.find((e) => e.jugadorId === r.id);
      return (
        i ||
          ((i = {
            id: n.env.id(),
            jugadorId: r.id,
            abierta: !0,
            sinLeer: 0,
            mensajes: [],
            pendientes: [],
            respondidas: 0,
          }),
          t.hilos.push(i)),
        (i.abierta = !0),
        {
          ok: !0,
          hilo: up(t, i),
        }
      );
    }, ef());
  xp = () =>
    Qd(
      (e) => ({
        puedeAdministrar: !0,
        carpetas: [...e.carpetas]
          .sort((e, t) => e.nombre.localeCompare(t.nombre, `es`))
          .map((t) => ({
            id: t.id,
            nombre: t.nombre,
            cuantos: e.flyers.filter((e) => e.carpetaId === t.id).length,
            creadaEn: new Date(t.creadaEn),
          })),
      }),
      {
        puedeAdministrar: !1,
        carpetas: [],
      },
    );
  Sp = (e) =>
    Qd(
      (t) =>
        t.carpetas.some((t) => t.id === e)
          ? {
              ok: !0,
              flyers: t.flyers
                .filter((t) => t.carpetaId === e)
                .sort((e, t) => t.subidoEn - e.subidoEn)
                .map((e) => ({
                  id: e.id,
                  carpetaId: e.carpetaId,
                  nombre: e.nombre,
                  archivo: e.id,
                  tipo: e.tipo,
                  pesoBytes: e.pesoBytes,
                  ancho: e.ancho,
                  alto: e.alto,
                  subidoEn: new Date(e.subidoEn),
                })),
            }
          : {
              ok: !1,
              flyers: [],
            },
      {
        ok: !1,
        flyers: [],
      },
    );
  Cp = (e) => G((t, n) => wd(t, n.env, e), tf);
  wp = (e) => G((t) => Td(t, e), tf);
  Tp = (e) => G((t) => kd(t, e), tf);
  Ep = async (e) => {
    let t = e.get(`carpetaId`),
      n = e
        .getAll(`archivos`)
        .filter((e) => typeof File < `u` && e instanceof File),
      r = [];
    for (let e of n.slice(0, 40)) {
      let t = e.name || `flyer`;
      if (e.size > 15 * 1024 * 1024) {
        r.push({
          nombre: t,
          dataUrl: null,
          ancho: null,
          alto: null,
          falla: `pesa más de 15 MB`,
        });
        continue;
      }
      let n = await qs(e);
      r.push(
        n
          ? {
              nombre: t,
              dataUrl: n.dataUrl,
              ancho: n.ancho,
              alto: n.alto,
            }
          : {
              nombre: t,
              dataUrl: null,
              ancho: null,
              alto: null,
              falla: `no es una imagen`,
            },
      );
    }
    return G((e, n) => Od(e, n.env, t, r), tf);
  };
  Dp = (e) =>
    Qd((t) => jd(t, e, Xd.casaNombre), {
      ok: !1,
      gente: [],
    });
  Op = (e, t, n) => G((r) => Md(r, e, t, n), tf);
  K = `app/(admin)/actions.ts`;
  kp = `app/(admin)/jugador-alta-actions.ts`;
  Ap = `app/(admin)/soporte-staff-actions.ts`;
  jp = `app/(admin)/flyers-actions.ts`;
  Mp = `app/(admin)/reparto-actions.ts`;
  Np = `app/(admin)/demo-actions.ts`;
  Pp = `app/(admin)/numero-general-actions.ts`;
  Fp = `app/(admin)/bono-lobby-actions.ts`;
  Ip = `app/(admin)/referidos-actions.ts`;
  Lp = `app/(admin)/logs-actions.ts`;
  Rp = {
    [`${K}#loadChipsAction`]: nf,
    [`${K}#unloadChipsAction`]: rf,
    [`${K}#dropRequestAction`]: af,
    [`${K}#freezeWalletAction`]: of,
    [`${K}#setAccountStatusAction`]: sf,
    [`${K}#agregarNotaAction`]: cf,
    [`${K}#notasDeAction`]: mf,
    [`${K}#jugadasDeAction`]: hf,
    [`${K}#anularMovimientoAction`]: lf,
    [`${K}#approveSecondWithdrawalAction`]: uf,
    [`${K}#rejectSecondWithdrawalAction`]: df,
    [`${K}#approveHeldAction`]: ff,
    [`${K}#rejectHeldAction`]: pf,
    [`${K}#fijarComisionAction`]: gf,
    [`${K}#asignarCajeroAction`]: _f,
    [`${K}#reservarPanelAction`]: vf,
    [`${K}#confirmarPanelAction`]: yf,
    [`${K}#cancelarPanelAction`]: bf,
    [`${K}#cambiarRolAction`]: xf,
    [`${K}#cambiarAccesoAction`]: Sf,
    [`${K}#eliminarPersonalAction`]: Cf,
    [`${K}#eliminarJugadorAction`]: wf,
    [`${K}#cuentasQueSeTrabarianAction`]: Tf,
    [`${K}#estadoLlaveAction`]: Ef,
    [`${K}#exentoDeCodigoAction`]: Df,
    [`${K}#registrarSalidaAction`]: Of,
    "app/(admin)/eliminar-varios-actions.ts#eliminarVariosAction": kf,
    [`${kp}#reservarJugadorAction`]: Af,
    [`${kp}#confirmarJugadorAction`]: jf,
    [`${kp}#cancelarJugadorAction`]: Mf,
    "app/(admin)/jugador-password-actions.ts#nuevaContrasenaJugadorAction": Nf,
    "app/(admin)/personal-password-actions.ts#nuevaContrasenaPersonalAction":
      Pf,
    [`${K}#crearCasaAction`]: Ff,
    [`${K}#cambiarActivaCasaAction`]: If,
    [`${K}#cambiarRojoCasaAction`]: Lf,
    [`${K}#eliminarCasaAction`]: Rf,
    [`${K}#recargarCupoAction`]: zf,
    [`${K}#movimientosDeCupoAction`]: Bf,
    [`${K}#fijarRtpAction`]: Vf,
    [`${K}#setMaintenanceAction`]: Hf,
    [`${K}#reintentarTrabadaAction`]: Uf,
    [`${K}#cerrarTrabadaAction`]: Wf,
    [`${Mp}#verRepartoAction`]: Gf,
    [`${Mp}#guardarNumeroAction`]: Kf,
    [`${Mp}#guardarAliasAction`]: qf,
    [`${Mp}#ponerEnRepartoAction`]: Jf,
    [`${Mp}#guardarAjustesRepartoAction`]: Yf,
    [`${Pp}#verNumeroGeneralAction`]: Xf,
    [`${Pp}#fijarNumeroGeneralAction`]: Zf,
    [`${Fp}#verBonoLobbyAction`]: Qf,
    [`${Fp}#fijarBonoLobbyAction`]: $f,
    [`${Np}#verDemoAction`]: ep,
    [`${Np}#cambiarDemoAction`]: tp,
    [`${Ip}#verMiLinkAction`]: np,
    [`${Ip}#crearMiLinkAction`]: rp,
    [`${Ip}#regenerarMiLinkAction`]: ip,
    "app/(admin)/marca-actions.ts#verVistaMarcaAction": ap,
    [`${Lp}#opcionesLogsAction`]: op,
    [`${Lp}#leerLogsAction`]: sp,
    [`${Ap}#contarSoporteSinLeerAction`]: pp,
    [`${Ap}#bandejaSoporteAction`]: mp,
    [`${Ap}#verHiloAction`]: hp,
    [`${Ap}#responderSoporteAction`]: gp,
    [`${Ap}#cambiarEstadoHiloAction`]: _p,
    [`${Ap}#eliminarConversacionAction`]: vp,
    [`${Ap}#buscarJugadorSoporteAction`]: yp,
    [`${Ap}#empezarConversacionAction`]: bp,
    [`${jp}#verGaleriaAction`]: xp,
    [`${jp}#verCarpetaAction`]: Sp,
    [`${jp}#crearCarpetaAction`]: Cp,
    [`${jp}#borrarCarpetaAction`]: wp,
    [`${jp}#subirFlyersAction`]: Ep,
    [`${jp}#borrarFlyerAction`]: Tp,
    [`${jp}#accesosDeCarpetaAction`]: Dp,
    [`${jp}#cambiarAccesoAction`]: Op,
  };
}
export { Yd, Xd, Rp, zp, initializeDemoApi };
