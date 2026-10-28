/**
 * classic-lobby / brand-theme.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import { El } from "./mobile-lobby.js";
let Kd;
let qd;
function Jd(e, t) {
  if (!e) return;
  let n = e instanceof Map ? e.get(t) : e[t];
  return typeof n == `string` && n !== `` ? n : void 0;
}
function Yd(e, t) {
  let n = t.replace(/^\.?\/+/, ``);
  return Jd(e, n) ?? Jd(e, `./${n}`) ?? Jd(e, `/${n}`);
}
function Xd(e, t) {
  return Yd(e, t) ?? `./${t.replace(/^\.?\/+/, ``)}`;
}
let Zd;
let $, Qd, $d;
function ef(e) {
  return {
    position: `absolute`,
    inset: 0,
    borderRadius: e,
    padding: `2px`,
    background: $(`anillo`),
    WebkitMask: $d,
    WebkitMaskComposite: `xor`,
    mask: $d,
    maskComposite: `exclude`,
    pointerEvents: `none`,
  };
}
function tf(e) {
  let t = e
    .normalize(`NFD`)
    .replace(/[̀-ͯ]/g, ``)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, ``)
    .replace(/^-+|-+$/g, ``);
  return t === `` ? `tucasino` : t.slice(0, 40);
}
function nf(e) {
  if (e === void 0 || !Number.isFinite(e) || e < 1) return;
  let t = Math.min(108, Math.max(54, 100 / e + 8));
  return [-4, 50 - t / 2, 108, t];
}
function deriveClassicTheme(e, t, n) {
  let r = t.nombre,
    i = r === Kd,
    a = t.logoPropio || t.logoTexto,
    o = (a ? Yd(n, `logo`) : void 0) ?? Xd(n, qd.logo),
    s =
      Yd(n, `isotipo`) ??
      `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-3.55%20-6.27%2042.98%2042.98%22%3E%3Cpath%20d%3D%22M%208.598%2030.442%20L%200%2015.55%20L%200%200%20L%2022.215%200%20L%2022.215%2013.411%20L%2022.215%2015.55%20L%2020.24%2015.55%20L%2013.617%2015.55%20L%2022.215%2030.442%20L%208.598%2030.442%20Z%22%20transform%3D%22translate(13.658%200)%22%20fill%3D%22%23FF5500%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2215.715%22%20width%3D%2213.658%22%20height%3D%2214.645%22%20fill%3D%22%23FF5500%22%2F%3E%3C%2Fsvg%3E`,
    c = (e) => Xd(n, e),
    l = (e, n, r, i) => {
      let a = {
        base: $(`puerta-base`),
        brillo: n,
        velo: r,
        arte: {
          src: i,
          estilo: e.arte.estilo,
        },
      };
      return (t.aro && (a.aro = ef(`14px`)), a);
    },
    u = {
      ...e,
      fondo: $(`f`),
      acento: $(`p-texto`),
      acentoClaro: $(`p-claro`),
      logo: {
        src: o,
        alt: r,
        estilo: t.logoPropio
          ? {
              height: `44px`,
              width: `auto`,
              display: `block`,
            }
          : e.logo.estilo,
      },
      cabeceraPadding: t.logoPropio ? `9px 16px 7px` : e.cabeceraPadding,
      cabeceraBorde: e.cabeceraBorde,
      superficie: $(`sup`),
      superficieBorde: `1px solid ${$(`sup-borde`)}`,
      masFondo: $(`b-mas`),
      masTinta: $(`b-ink`),
      billeteraBorde: t.aro ? `1px solid transparent` : e.billeteraBorde,
      billeteraTextura:
        t.imgOn && e.billeteraTextura
          ? {
              src: c(qd.textura),
              estilo: e.billeteraTextura.estilo,
            }
          : null,
      billeteraBrillo: t.imgOn ? null : $(`billetera-brillo`),
      billeteraFichas: {
        src: c(qd.cutFichas),
        estilo: e.billeteraFichas.estilo,
      },
      cargarFondo: $(`b-grad`),
      cargarTinta: $(`b-ink`),
      cargarSombra: $(`b-sombra`),
      retirarFondo: Qd(`f`, 0.82),
      retirarBorde: `1px solid ${$(`b-borde`)}`,
      campo: $(`campo`),
      campoBorde: e.campoBorde,
      pastillaBorde: e.pastillaBorde,
      pastillaActivaFondo: Qd(`b`, 0.16),
      pastillaActivaBorde: $(`b-borde`),
      puertaBorde: t.aro ? `1px solid transparent` : e.puertaBorde,
      vivo: l(e.vivo, $(`luz-puerta`), $(`velo-puerta`), c(qd.cutRuleta)),
      slots: l(e.slots, $(`luz-puerta`), $(`velo-puerta`), c(qd.popSlots)),
      deportes: l(e.deportes, $(`luz-dep`), $(`velo-dep`), c(qd.cutDeportes)),
      ganadorFondo: $(`ganador-fondo`),
      ganadorMarca:
        i && !t.logoPropio
          ? {
              src: c(qd.mark),
              estilo: e.ganadorMarca.estilo,
            }
          : {
              src: s,
              estilo: {
                width: `16px`,
                height: `16px`,
                opacity: 0.85,
                borderRadius: `4px`,
              },
            },
      vivoFondo: Qd(`p`, 0.13),
      buscadorBorde: `1px solid ${$(`busca-borde`)}`,
      buscadorHalo: `0 0 0 3px ${Qd(`p`, 0.1)}`,
      buscadorLupa: $(`p-claro`),
      cuentaRetirarFondo: Qd(`f`, 0.6),
      cuentaRetirarBorde: `1px solid ${$(`b-borde`)}`,
    };
  t.aro ? (u.billeteraAro = ef(`18px`)) : delete u.billeteraAro;
  let d = (e, t) => ({
      src: e,
      marco: t,
    }),
    f = [
      {
        bg: `rgba(255,255,255,.07)`,
        ring: `rgba(255,255,255,.14)`,
        fg: `#929292`,
        glow: `none`,
      },
      {
        bg: Qd(`p`, 0.14),
        ring: Qd(`p`, 0.45),
        fg: $(`p-claro`),
        glow: `none`,
      },
      {
        bg: $(`mult3-bg`),
        ring: $(`mult3-ring`),
        fg: $(`mult3-fg`),
        glow: $(`mult3-glow`),
      },
    ],
    p = {
      acento: $(`p-texto`),
      acentoBarra: $(`p-barra`),
      gradBoton: $(`b-grad`),
      tintaBoton: $(`b-ink-grande`),
      logo: {
        src: o,
        alt: r,
      },
      isotipo: {
        src: s,
        alt: r,
      },
      dominio: `${tf(r)}.com`,
      bannerFichas: c(qd.popFichas),
      bannerFondo: $(`img-bienvenida`),
      bannerPanel: $(`img-panel-r`),
      saldoBrillo: $(`saldo-brillo`),
      retirarFondo: Qd(`f`, 0.6),
      retirarSombra: `inset 0 0 0 1px ${$(`b-borde`)}`,
      promoBase: $(`img-promo-base`),
      promoArte: {
        vivo: d(c(qd.popVivo), {
          right: `calc(-3% + 6px)`,
          height: `calc(76% + 53px)`,
        }),
        slots: d(c(qd.popSlots), {
          right: `-3%`,
          height: `calc(75% + 43px)`,
        }),
        deportes: d(c(qd.popDeportes), {
          right: `-1%`,
          height: `calc(72% + 42px)`,
        }),
      },
      cajeroFondo: $(`cajero-fondo`),
      cajeroFoto: c(qd.recarga),
      cajeroTinta: $(`cajero-tinta`),
      vivoFondo: Qd(`p`, 0.12),
      vivoBorde: `inset 0 0 0 1px ${Qd(`p`, 0.35)}`,
      mult: f,
      deporteNaranja: $(`deporte`),
    },
    m = {
      nombre: r,
      botonFondo: $(`chat-boton`),
      botonTinta: $(`chat-ink`),
      botonSombra: $(`chat-sombra`),
      avatarFondo: Qd(`p`, 0.14),
      avatarTinta: $(`p-claro`),
      burbujaFondo: $(`b-grad`),
      burbujaTinta: $(`b-ink`),
      burbujaHora: Qd(`b-ink`, 0.6),
      acentoClaro: $(`p-claro`),
    },
    h = {
      logo: {
        src: o,
        alt: r,
        alto: t.logoPropio ? `32px` : `22px`,
      },
      fondo: $(`f`),
      marco: $(`marco`),
      hoja: $(`hoja`),
      hojaFilo: $(`filo-campo`),
      campo: $(`campo-app`),
      campoFilo: $(`filo-campo`),
      acento: $(`p-texto`),
      acentoSuave: Qd(`p`, 0.5),
      tintaAcento: $(`p-ink`),
      boton: $(`b-grad`),
      tintaBoton: $(`b-ink-grande`),
      secundario: $(`n-cerrar`),
      secundarioFilo: $(`filo-campo`),
      pedidoBorde: `1px solid ${Qd(`b-filo`, 0.55)}`,
      rotulo: null,
      aviso: $(`sup`),
      titulo: null,
      etiqueta: null,
      pastilla: null,
      cifra: null,
      cerrarFondo: $(`n-cerrar`),
      cerrarFilo: `rgba(255,255,255,0)`,
    },
    g = null;
  if (a) {
    g = {
      src: o,
      barrido: `diagonal`,
      frente: 0.26,
      grabado: `grayscale(1) brightness(.34)`,
      neon: [$(`neon-1`), $(`neon-2`), $(`neon-3`)],
      brillo: $(`brillo`),
    };
    let e = nf(t.logoPropio ? t.logoProporcion : 4.054054054054054);
    e && (g.ventana = e);
  }
  return {
    id: `demo`,
    css: ``,
    splash: {
      fondo: $(`f`),
    },
    cargador: g,
    movil: u,
    lobby: p,
    chat: m,
    app: h,
  };
}
function af() {
  let e = El;
  if (!e || typeof e != `object` || !e.logo || !e.vivo)
    throw Error(
      `tema-demo: falta PIEL_RUSHYBET_MOVIL (el transform T2 de LobbyMovil1a.tsx no se aplicó)`,
    );
  return e;
}
function of(e, t) {
  return deriveClassicTheme(af(), e, t);
}
function initializeBrandTheme() {
  Kd = `RushyBet`;
  Object.freeze({
    p: `#ff5500`,
    b: `auto`,
    ba: `liso`,
    f: `#0f0f0f`,
    t: `auto`,
    tb: !1,
    s: `auto`,
    x: `calido`,
    im: !0,
    ic: `p`,
    n: Kd,
    logo: !1,
  });
  qd = Object.freeze({
    logo: `rushybet/rushybet-logo.webp`,
    mark: `rushybet/v3/mark.png`,
    textura: `rushybet/v3/textura-banner.webp`,
    cutFichas: `rushybet/v3/cut-fichas.webp`,
    cutRuleta: `rushybet/v3/cut-ruleta.webp`,
    cutDeportes: `rushybet/v3/cut-deportes.webp`,
    popSlots: `rushybet/v2/pop-slots.webp`,
    popVivo: `rushybet/v2/pop-vivo.webp`,
    popDeportes: `rushybet/v2/pop-deportes.webp`,
    popFichas: `rushybet/v2/pop-fichas.webp`,
    bienvenida: `rushybet/v2/base-bienvenida.webp`,
    recarga: `rushybet/v2/recarga-fichas.webp`,
    panelR: `rushybet/v2/panel-r.webp`,
    baseCarta: `rushybet/v2/base-carta.webp`,
  });
  Object.freeze({
    calido: [`#f3ece7`, `#b3a69d`, `#8a7d75`, `#675d57`],
    neutro: [`#ededed`, `#a9a9ab`, `#808082`, `#5e5e60`],
    frio: [`#e9eef5`, `#a3acba`, `#7a8494`, `#596272`],
  });
  Zd = (e, ...t) => t.map((t) => [`--dm-${t}`, e]);
  Object.freeze(
    Object.fromEntries([
      ...Zd(
        `color`,
        `p`,
        `p-texto`,
        `p-claro`,
        `p-hondo`,
        `p-barra`,
        `p-tab`,
        `p-mas14`,
        `p-ink`,
        `p-ink-grande`,
        `p-crema`,
        `p-v4`,
      ),
      ...Zd(`color`, `cajero-tinta`),
      ...Zd(`color`, `avatar-1`, `avatar-2`),
      ...Zd(
        `color`,
        `b`,
        `b-ink`,
        `b-ink-grande`,
        `b-borde`,
        `sup-borde`,
        `busca-borde`,
        `chat-ink`,
        `vidrio-borde`,
      ),
      ...Zd(
        `color`,
        `f`,
        `f-afuera`,
        `sup`,
        `campo`,
        `riel`,
        `riel-lado`,
        `barra`,
        `hoja`,
        `campo-app`,
        `filo-campo`,
        `marco`,
        `f1`,
        `f3`,
      ),
      ...Zd(
        `color`,
        `calido`,
        `badge-aro`,
        `n-lista`,
        `n-campo`,
        `n-cerrar`,
        `n-pedido`,
      ),
      ...Zd(`color`, `t`, `t2`, `v4-sup`),
      ...Zd(
        `color`,
        `mult3-ring`,
        `mult3-fg`,
        `deporte`,
        `neon-1`,
        `neon-2`,
        `neon-3`,
        `brillo`,
      ),
      ...Zd(`color`, `tx`, `tx2`, `tx3`, `tx4`),
      ...Zd(`fondo`, `b-grad`, `b-mas`, `cajero-fondo`, `chat-boton`, `vidrio`),
      ...Zd(
        `fondo`,
        `velo-puerta`,
        `velo-dep`,
        `img-panel-r`,
        `puerta-base`,
        `ganador-fondo`,
        `img-promo-base`,
      ),
      ...Zd(
        `fondo`,
        `luz-puerta`,
        `luz-dep`,
        `mult3-bg`,
        `anillo`,
        `billetera-brillo`,
        `img-bienvenida`,
      ),
      ...Zd(`sombra`, `b-sombra`, `chat-sombra`, `vidrio-sombra`, `mult3-glow`),
      ...Zd(`sombraTexto`, `saldo-brillo`),
      ...Zd(
        `rgb`,
        `p-rgb`,
        `p-claro-rgb`,
        `b-rgb`,
        `b-ink-rgb`,
        `b-filo-rgb`,
        `b-activo-rgb`,
        `f-rgb`,
        `g1-rgb`,
        `g2-rgb`,
      ),
      ...Zd(`numero`, `glow-a`),
      ...Zd(`largo`, `logo-alto`),
    ]),
  );
  $ = (e) => `var(--dm-${e})`;
  Qd = (e, t) => `rgba(var(--dm-${e}-rgb),${String(t).replace(/^0\./, `.`)})`;
  $d = `linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)`;
}
export { of, initializeBrandTheme };
