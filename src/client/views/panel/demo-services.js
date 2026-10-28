/**
 * panel / demo-services.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
let zo, refreshDemo, createDemoRouter;
function createDemoDatabase() {
  let e = {
    select() {
      return e;
    },
    eq() {
      return e;
    },
    async maybeSingle() {
      return {
        data: {
          balance_cents: 1105200,
        },
        error: null,
      };
    },
  };
  return {
    from() {
      return e;
    },
    auth: {
      signOut: async () => ({
        error: null,
      }),
      getSession: async () => ({
        data: {
          session: null,
        },
      }),
      signInWithPassword: async () => ({
        error: {
          message: `demo`,
        },
      }),
      signUp: async () => ({
        data: null,
        error: {
          message: `demo`,
        },
      }),
      resetPasswordForEmail: async () => ({
        error: {
          message: `demo`,
        },
      }),
      signInWithOAuth: async () => ({
        error: {
          message: `demo`,
        },
      }),
    },
  };
}
function Uo(e) {
  return !e || e.demo === !0 ? !1 : e.esMadre && e.role === `root`;
}
let Wo;
function Go(e) {
  return Uo(e) ? Wo.includes(e.role) : !1;
}
function Ko(e, t) {
  let n = e.trim();
  return n.length === 0
    ? {
        ok: !1,
        motivo: `vacio`,
      }
    : n.length > 2e3
      ? {
          ok: !1,
          motivo: `muy-largo`,
        }
      : t >= 10
        ? {
            ok: !1,
            motivo: `demasiados`,
          }
        : {
            ok: !0,
            texto: n,
          };
}
function qo() {
  let e = (e) => {
      let t = new Uint32Array(1);
      return (crypto.getRandomValues(t), t[0] % e);
    },
    t = (t) => t[e(t.length)],
    n = () => t(`bcdfgklmnprstvz`) + t(`aeiou`);
  return (
    t(`ABCDEFGHJKLMNPQRSTUVWXYZ`) +
    n() +
    n() +
    String(10 + e(90)) +
    t(`!#$%*+`) +
    n()
  );
}
let Jo, Yo;
function Xo() {
  let e = new Uint32Array(1);
  return (crypto.getRandomValues(e), e[0]);
}
function Zo(e, t = Xo) {
  if (!Number.isInteger(e) || e < 1 || e > Yo)
    throw RangeError(`azarUniforme: n fuera de rango`);
  let n = Yo - (Yo % e);
  for (;;) {
    let r = t();
    if (r < n) return r % e;
  }
}
function Qo(e = Zo) {
  let t = ``;
  for (let n = 0; n < 4; n++) t += String(e(10));
  for (let n = 0; n < 2; n++) t += `abcdefghjkmnpqrstuvwxyz`.charAt(e(23));
  return t;
}
function $o(e) {
  return e === `root` || e === `admin`;
}
function es(e) {
  switch (e) {
    case `sin-permiso`:
      return `Sólo el dueño o un administrador del panel pueden ponerle una contraseña nueva a un jugador.`;
    case `no-es-de-tu-panel`:
      return `No encontramos ese jugador en tu panel.`;
    case `es-del-personal`:
      return `Esa cuenta también es del equipo: su contraseña se cambia desde Mi seguridad.`;
    case `cerrada`:
      return `Esa cuenta está cerrada. Para darle una contraseña nueva, primero hay que reabrirla.`;
    case `bloqueada`:
      return `Esa cuenta está bloqueada. Para darle una contraseña nueva, primero hay que desbloquearla.`;
    case `sin-acceso`:
      return `Esa cuenta no tiene usuario para entrar al sitio, así que no se le puede poner contraseña.`;
    case `solo-google`:
      return `Ese jugador entra con Google, no con contraseña: que siga entrando con su cuenta de Google.`;
    case `sin-confirmar`:
      return `Ese jugador nunca confirmó su correo: hasta que lo confirme no puede entrar, aunque le pongas una contraseña nueva.`;
    case `tope`:
      return `Ya pusiste 20 contraseñas nuevas en las últimas 24 horas. Es el tope por seguridad: probá más tarde.`;
  }
}
function ts(e, t) {
  return t === `usuario`
    ? `Listo. Pasale a ${e} esta contraseña: entra al sitio con su usuario y ahí mismo elige una propia. Se muestra una sola vez.`
    : `Listo. Pasale a ${e} esta contraseña: entra al sitio con el correo con el que se registró (no con el usuario) y ahí mismo elige una propia. Se muestra una sola vez.`;
}
let ns;
function rs(e) {
  return typeof e == `string` && Object.prototype.hasOwnProperty.call(ns, e)
    ? (ns[e] ?? 0)
    : 0;
}
function is(e, t) {
  let n = rs(e.rol);
  if (n === 0)
    return {
      ok: !1,
      motivo: `sin-rango`,
    };
  if (n === 1)
    return {
      ok: !1,
      motivo: `cajero`,
    };
  if (!e.id || !t.id || e.id === t.id)
    return {
      ok: !1,
      motivo: `uno-mismo`,
    };
  let r = !!e.casaId && e.casaId === t.casaId,
    i = rs(t.rol);
  if (r) {
    if (i >= n)
      return {
        ok: !1,
        motivo: `igual-o-mayor`,
      };
  } else if (!(e.rol === `root` && e.esMadre && !t.esMadre && t.casaId))
    return {
      ok: !1,
      motivo: `otra-casa`,
    };
  return i === 0
    ? {
        ok: !1,
        motivo: `rol-desconocido`,
      }
    : t.esDemo
      ? {
          ok: !1,
          motivo: `demo`,
        }
      : t.archivado
        ? {
            ok: !1,
            motivo: `archivado`,
          }
        : t.activo
          ? {
              ok: !0,
            }
          : {
              ok: !1,
              motivo: `sin-acceso`,
            };
}
function as(e) {
  switch (e) {
    case `sin-rango`:
      return `Tu cuenta no puede generar contraseñas.`;
    case `cajero`:
      return `Los cajeros no pueden generar contraseñas para nadie.`;
    case `uno-mismo`:
      return `Tu propia contraseña se cambia desde Mi seguridad.`;
    case `igual-o-mayor`:
      return `Sólo podés generarla para alguien de menor rango que vos en tu panel.`;
    case `otra-casa`:
    case `no-existe`:
      return `No encontramos a esa persona en tu panel.`;
    case `rol-desconocido`:
      return `A esa cuenta no se le puede generar una contraseña desde acá.`;
    case `demo`:
      return `Es una cuenta de muestra: no tiene contraseña para dar.`;
    case `archivado`:
      return `Esa persona ya no está en el equipo.`;
    case `sin-acceso`:
      return `Esa persona no tiene acceso al panel. Devolvéselo primero.`;
    case `sin-contrasena`:
      return `Esa cuenta no entra con contraseña (por ejemplo, entra con Google): no se le puede generar una.`;
    case `casa-apagada`:
      return `Ese panel está apagado. Prendelo primero.`;
    case `tope`:
      return `Ya generaste 20 contraseñas en las últimas 24 horas. Es el tope por seguridad: probá más tarde.`;
  }
}
function os(e, t, n, r, i = !1) {
  return `Listo. Pasale a ${e} esta contraseña: entra a la caja ${t ? `con su usuario` : `con el correo con el que se registró (no con el usuario)`} y ahí elige una propia. Si no la usa en ${r} h deja de valer.${n ? ` Al entrar primero pone el código de su autenticador actual; recién al elegir su contraseña se le borra y lo vuelve a configurar.` : ``}${i ? ` Como también es jugador, el sitio no le deja jugar hasta que la cambie en la caja.` : ``} Se muestra una sola vez.`;
}
function ss(e) {
  return e === null
    ? `

No se pudo revisar si otras cuentas del equipo quedan trabadas con esto: si pasa, lo dice el resultado.`
    : e.length === 0
      ? ``
      : `\n\nAdemás quedan afuera en el acto y necesitan contraseña nueva (y volver a configurar el autenticador): ${e.join(`, `)}.`;
}
function initializeDemoServices() {
  zo = ((e) => () => ({
    variable: `fuente-demo-${e}`,
    className: `fuente-demo-${e}-clase`,
    style: {
      fontFamily: e,
    },
  }))(`figtree`);
  refreshDemo = () => {
    let e = globalThis.__demoRefresh;
    typeof e == `function` && e();
  };
  createDemoRouter = () => ({
    refresh: refreshDemo,
    push() {},
    replace() {},
    back() {},
    prefetch() {},
  });
  Wo = [`root`, `admin`];
  Jo = /^[0-9]{4}[abcdefghjkmnpqrstuvwxyz]{2}$/;
  Yo = 2 ** 32;
  ns = {
    operator: 1,
    admin: 2,
    root: 3,
  };
}
export {
  zo,
  createDemoRouter,
  createDemoDatabase,
  Go,
  Ko,
  qo,
  Jo,
  Qo,
  $o,
  es,
  ts,
  rs,
  is,
  as,
  os,
  ss,
  initializeDemoServices,
};
