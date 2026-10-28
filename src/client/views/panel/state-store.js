/**
 * panel / state-store.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import {
  createDemoEnvironment,
  serializePanelState,
  parsePanelState,
  ru,
  au,
} from "./state-schema.js";
import { createDemoState } from "./demo-data.js";
function ZC(e) {
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function QC(e, t) {
  try {
    return (window.localStorage.setItem(e, t), !0);
  } catch {
    return !1;
  }
}
function createPanelStateStore(e, t, n = createDemoEnvironment()) {
  let r = `demo-socio:${e}:panel`,
    i = parsePanelState(ZC(r)) ?? createDemoState(n, t);
  au(i);
  let a = new Set(),
    o = !1,
    s = Promise.resolve(),
    c = () => {
      !QC(r, serializePanelState(i)) &&
        !o &&
        ((o = !0),
        console.warn(
          `[demo] este navegador no deja guardar: la demo vive mientras la pestaña esté abierta`,
        ));
    },
    l = () => {
      for (let e of [...a]) e();
    };
  c();
  try {
    window.addEventListener(`storage`, (e) => {
      if (e.key !== r) return;
      let t = parsePanelState(e.newValue);
      t && ((i = t), l());
    });
  } catch {}
  let u = (e) => {
    (au(e), (i = e), c());
  };
  return {
    env: n,
    leer: () => i,
    suscribir(e) {
      return (a.add(e), () => a.delete(e));
    },
    operar(e) {
      let t = ru(i),
        r = e(t, n);
      return (u(t), r);
    },
    operarAsync(e) {
      let t = s.then(async () => {
        let t = ru(i),
          r = await e(t, n);
        return (u(t), r);
      });
      return (
        (s = t.then(
          () => void 0,
          () => void 0,
        )),
        t
      );
    },
    avisar: l,
    reiniciar() {
      ((i = createDemoState(n, t)), c(), l());
    },
  };
}
let ew, tw;
function nw(e) {
  try {
    let t = new URLSearchParams(e).get(`k`) ?? ``;
    return ew.test(t) ? t : tw;
  } catch {
    return tw;
  }
}
let rw;
function iw(e, t) {
  let n = new Date(t);
  n.setHours(0, 0, 0, 0);
  let r = n.getTime(),
    i = new Set();
  for (let n of e.jugadas) n.cuando >= r && n.cuando <= t && i.add(n.jugadorId);
  for (let n of e.movimientos)
    n.cuando >= r && n.cuando <= t && i.add(n.jugadorId);
  let a = new Set(e.jugadores.filter((e) => !e.esStaff).map((e) => e.id));
  return [...i].filter((e) => a.has(e)).length;
}
function aw(e, t, n) {
  if (!t || !rw(e) || e.ok !== !0 || !rw(e.jugadores)) return e;
  let r = e.jugadores;
  if (!Array.isArray(r.porMinuto)) return e;
  let i = Math.max(
      1,
      t.jugadores.filter((e) => !e.esStaff && e.estado === `active`).length,
    ),
    a = r.porMinuto.map((e) => {
      let t = rw(e) ? e : {},
        n = Math.max(
          0,
          Math.round((typeof t.apuestas == `number` ? t.apuestas : 0) * 0.12),
        );
      return {
        hora: typeof t.hora == `string` ? t.hora : ``,
        apuestas: n,
        jugadores: n === 0 ? 0 : Math.max(1, Math.min(i, Math.round(n / 2.5))),
      };
    }),
    o =
      typeof r.ventanaAhoraMin == `number` && r.ventanaAhoraMin > 0
        ? r.ventanaAhoraMin
        : 5,
    s = a.slice(-o).reduce((e, t) => Math.max(e, t.jugadores), 0),
    c = Math.min(i, Math.max(iw(t, n), s)),
    l = null;
  for (let e of a)
    e.apuestas > 0 &&
      (!l || e.apuestas > l.apuestas) &&
      (l = {
        apuestas: e.apuestas,
        hora: e.hora,
      });
  return {
    ...e,
    jugadores: {
      ...r,
      jugandoAhora: Math.min(s, c),
      jugaronHoy: c,
      porMinuto: a,
      apuestasUltimaHora: a.reduce((e, t) => e + t.apuestas, 0),
      pico: l,
    },
  };
}
function ow(e, t = Date.now) {
  let n = globalThis,
    r = n.fetch;
  typeof r == `function` &&
    (n.fetch = async (n, i) => {
      let a = await r(n, i),
        o = typeof n == `string` ? n : n instanceof URL ? n.href : n.url;
      if (!/(^|\/\/[^/]+)\/api\/monitoreo(?=$|[?#/])/.test(o)) return a;
      try {
        let n = aw(await a.clone().json(), e(), t());
        return new Response(JSON.stringify(n), {
          status: a.status,
          headers: {
            "content-type": `application/json`,
          },
        });
      } catch {
        return a;
      }
    });
}
function initializeStateStore() {
  ew = /^[a-z0-9]{6,24}$/;
  tw = `sincodigo`;
  rw = (e) => typeof e == `object` && !!e && !Array.isArray(e);
}
export { createPanelStateStore, nw, ow, initializeStateStore };
