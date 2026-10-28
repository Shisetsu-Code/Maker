/**
 * blaze / demo-guards.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
var e, t, n, r, i, a, o, s, c;
let l, u, d;
function f(e) {
  if (!e) return;
  let t = d.indexOf(e);
  (t >= 0 && d.splice(t, 1), d.push(e), d.length > 6 && d.shift());
}
let p, m;
function h(e) {
  let t = e.target;
  return t instanceof Element
    ? (t.closest(`a,button,[role="button"],input,label,summary`) ?? t)
    : null;
}
function g(e) {
  if (!e || !e.isConnected) return null;
  let t = e.getBoundingClientRect();
  return t.width > 0 || t.height > 0 ? t : null;
}
function _(e, t = l) {
  let n = (window.__demoAvisos ??= []);
  if (
    (n.push({
      texto: t,
      t: Math.round(performance.now()),
    }),
    n.length > 40 && n.shift(),
    !document.body)
  )
    return;
  p ||
    ((p = document.createElement(`div`)),
    p.setAttribute(`role`, `status`),
    p.setAttribute(`aria-live`, `polite`),
    (p.className = `dm-aviso-demo`),
    Object.assign(p.style, {
      position: `fixed`,
      zIndex: `2147483000`,
      maxWidth: `min(320px, calc(100vw - 16px))`,
      boxSizing: `border-box`,
      padding: `9px 13px`,
      borderRadius: `11px`,
      background: `rgba(20,20,20,.96)`,
      color: `#ffffff`,
      font: `500 13px/1.35 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,
      boxShadow: `inset 0 0 0 1px rgba(255,255,255,.14), 0 12px 32px rgba(0,0,0,.55)`,
      pointerEvents: `none`,
      opacity: `0`,
      transform: `translateY(4px) scale(.97)`,
      transition: `opacity .18s ease, transform .22s cubic-bezier(.34,1.56,.64,1)`,
    }));
  let r = p;
  ((r.textContent = t), r.isConnected || document.body.appendChild(r));
  let i = g(e);
  for (let e = d.length - 1; !i && e >= 0; e--) i = g(d[e]);
  let a = document.documentElement.clientWidth || window.innerWidth,
    o = window.innerHeight;
  ((r.style.left = `0px`), (r.style.top = `0px`));
  let s = r.offsetWidth,
    c = r.offsetHeight,
    u,
    f;
  (i
    ? ((u = i.left + i.width / 2 - s / 2),
      (f = i.bottom + 8 + c <= o - 8 ? i.bottom + 8 : i.top - 8 - c))
    : ((u = a / 2 - s / 2), (f = o - c - 24)),
    (r.style.left = `${Math.round(Math.max(8, Math.min(a - s - 8, u)))}px`),
    (r.style.top = `${Math.round(Math.max(8, Math.min(o - c - 8, f)))}px`),
    requestAnimationFrame(() => {
      ((r.style.opacity = `1`), (r.style.transform = `none`));
    }),
    window.clearTimeout(m),
    (m = window.setTimeout(() => {
      ((r.style.opacity = `0`),
        (r.style.transform = `translateY(4px) scale(.97)`));
    }, 3400)));
}
function v(e) {
  let t = e.getAttribute(`href`) ?? ``;
  if (t === `` || t.startsWith(`#`) || /^javascript:/i.test(t))
    return {
      sale: !1,
      whatsapp: !1,
    };
  let n;
  try {
    n = new URL(e.href, window.location.href);
  } catch {
    return {
      sale: !0,
      whatsapp: !1,
    };
  }
  let r = /(^|\.)(wa\.me|whatsapp\.com)$/i.test(n.hostname),
    i = new URL(window.location.href),
    a =
      n.origin === i.origin &&
      n.pathname === i.pathname &&
      n.search === i.search;
  return {
    sale: r || !a || e.target === `_blank` || e.hasAttribute(`download`),
    whatsapp: r,
  };
}
function y(e) {
  if (e.type === `auxclick` && e.button !== 1) return;
  let t = e.target;
  if (!(t instanceof Element)) return;
  let n = t.closest(`a[href]`);
  if (!(n instanceof HTMLAnchorElement)) return;
  let r = v(n);
  r.sale &&
    (e.preventDefault(),
    _(n, r.whatsapp ? `Esto es una demo: no se manda ningún WhatsApp.` : u));
}
function installDemoGuards() {
  (document.addEventListener(`pointerdown`, (e) => f(h(e)), !0),
    document.addEventListener(
      `keydown`,
      (e) => {
        (e.key === `Enter` || e.key === ` `) && f(h(e));
      },
      !0,
    ),
    document.addEventListener(`click`, (e) => f(h(e)), !0),
    document.addEventListener(`click`, y, !0),
    document.addEventListener(`auxclick`, y, !0),
    (window.__demoAviso = (e, t) =>
      _(e, t ?? `Esto es una demo: no se guarda nada ni se mueve plata.`)),
    (window.open = () => (_(null, u), null)),
    (window.confirm = () => (_(null, l), !1)),
    (window.prompt = () => (_(null, l), null)),
    (window.alert = (e) => {
      _(null, e == null || String(e) === `` ? l : String(e));
    }));
  let e = !1;
  try {
    e = window.parent === window;
  } catch {
    e = !1;
  }
  if (e) {
    let e = () => {
      if (document.getElementById(`dm-cinta-demo`)) return;
      let e = document.createElement(`div`);
      ((e.id = `dm-cinta-demo`),
        (e.textContent = `DEMO`),
        e.setAttribute(`aria-label`, `Vista de demostración`),
        Object.assign(e.style, {
          position: `fixed`,
          left: `50%`,
          bottom: `6px`,
          transform: `translateX(-50%)`,
          zIndex: `2147483001`,
          padding: `4px 9px`,
          borderRadius: `999px`,
          background: `rgba(0,0,0,.72)`,
          color: `#ffffff`,
          font: `700 10.5px/1 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,
          letterSpacing: `.14em`,
          boxShadow: `inset 0 0 0 1px rgba(255,255,255,.22)`,
          pointerEvents: `none`,
        }),
        document.body.appendChild(e));
    };
    document.body
      ? e()
      : document.addEventListener(`DOMContentLoaded`, e, {
          once: !0,
        });
  }
}
function initializeDemoGuards() {
  e = Object.create;
  t = Object.defineProperty;
  n = Object.getOwnPropertyDescriptor;
  r = Object.getOwnPropertyNames;
  i = Object.getPrototypeOf;
  a = Object.prototype.hasOwnProperty;
  o = (e, t) => () => (
    t ||
      (e(
        (t = {
          exports: {},
        }).exports,
        t,
      ),
      (e = null)),
    t.exports
  );
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  };
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, {
            value: n,
            enumerable: !0,
          })
        : a,
      n,
    )
  );
  l = `Esto es una demo: no se guarda nada ni se mueve plata.`;
  u = `Esto es una demo: este enlace no se abre.`;
  d = [];
  p = null;
  m = 0;
  (installDemoGuards(),
    (() => {
      let e = `.image-slots.state.json`,
        t = (e) => {
          try {
            return /(^|\.)unsplash\.com$/.test(
              new URL(e, document.baseURI).hostname.replace(/\.$/, ``),
            );
          } catch {
            return !1;
          }
        },
        n = (e) => {
          try {
            let t = new URL(e);
            return /(^|\.)unsplash\.com$/.test(t.hostname.replace(/\.$/, ``))
              ? (t.searchParams.has(`utm_source`) ||
                  t.searchParams.set(`utm_source`, `claude_design`),
                t.searchParams.has(`utm_medium`) ||
                  t.searchParams.set(`utm_medium`, `referral`),
                t.toString())
              : e;
          } catch {
            return e;
          }
        },
        r = 1200,
        i = [`image/png`, `image/jpeg`, `image/webp`, `image/avif`],
        a = new Set(),
        o = {},
        s = new Set(),
        c = !1,
        l = null;
      function u() {
        return (
          l ||
          ((l = Promise.resolve({
            ok: !1,
          })
            .then((e) => (e.ok ? e.json() : null))
            .then((e) => {
              if (e && typeof e == `object`) {
                let t = Object.assign({}, e, o);
                for (let n in o)
                  t[n] &&
                    !t[n].u &&
                    e[n] &&
                    (t[n].u = typeof e[n] == `string` ? e[n] : e[n].u);
                for (let e of s) delete t[e];
                o = t;
              }
              s.clear();
            })
            .catch(() => {})
            .then(() => {
              ((c = !0), a.forEach((e) => e()));
            })),
          l)
        );
      }
      let d = !1,
        f = !1;
      function p() {
        if (!c) return;
        let t = window.omelette && window.omelette.writeFile;
        if (t)
          try {
            Promise.resolve(t(e, JSON.stringify(o))).catch(() => {});
          } catch {}
      }
      function m() {
        if (d) {
          f = !0;
          return;
        }
        let t = window.omelette && window.omelette.writeFile;
        t &&
          ((d = !0),
          Promise.resolve(t(e, JSON.stringify(o)))
            .catch(() => {})
            .then(() => {
              ((d = !1), f && ((f = !1), m()));
            }));
      }
      let h = (e) => Math.max(1, Math.min(5, e));
      function g(e) {
        let t = o[e];
        return t
          ? typeof t == `string`
            ? {
                u: t,
                s: 1,
                x: 0,
                y: 0,
              }
            : t
          : null;
      }
      function _(e, t) {
        e &&
          (t ? ((o[e] = t), s.delete(e)) : (delete o[e], c || s.add(e)),
          a.forEach((e) => e()),
          c ? m() : u().then(m));
      }
      async function v(e, t) {
        let n = await createImageBitmap(e);
        try {
          let e = Math.min(r, Math.max(1, Math.round(t * 2)) || r),
            i = Math.min(1, e / Math.max(n.width, n.height)),
            a = Math.max(1, Math.round(n.width * i)),
            o = Math.max(1, Math.round(n.height * i)),
            s = document.createElement(`canvas`);
          return (
            (s.width = a),
            (s.height = o),
            s.getContext(`2d`).drawImage(n, 0, 0, a, o),
            s.toDataURL(`image/webp`, 0.85)
          );
        } finally {
          n.close && n.close();
        }
      }
      class y extends HTMLElement {
        static get observedAttributes() {
          return [
            `shape`,
            `radius`,
            `mask`,
            `fit`,
            `placeholder`,
            `src`,
            `id`,
            `credit`,
            `credit-href`,
          ];
        }
        static cloneSlot(e, t) {
          if (typeof e != `string` || !e || !c) return null;
          let n = e.replace(/-\d+$/, ``) || e;
          for (let r = 2; r < 100; r++) {
            let i = n + `-` + r;
            if (i === e) continue;
            if (o[i] !== void 0) {
              let n = g(i),
                r = g(e);
              if (!(
                n &&
                r &&
                n.u &&
                n.u === r.u &&
                n.s === r.s &&
                n.x === r.x &&
                n.y === r.y &&
                (typeof t != `function` || t(i))
              ))
                continue;
              return i;
            }
            if (typeof t == `function` && !t(i)) continue;
            let a = g(e);
            return (a && _(i, Object.assign({}, a)), i);
          }
          return null;
        }
        constructor() {
          super();
          let e =
            this.shadowRoot ||
            this.attachShadow({
              mode: `open`,
              clonable: !0,
            });
          ((e.innerHTML =
            `<style>:host{display:block;position:relative;  font:13px/1.3 system-ui,-apple-system,sans-serif;  width:100%;height:100%;aspect-ratio:3/2}.empty .cap,.empty .sub{opacity:.75}.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);  -webkit-user-drag:none;user-select:none;touch-action:none}.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}:host([data-panning]) .spill{cursor:grabbing}.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;  pointer-events:none;-webkit-user-drag:none;user-select:none;  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);  transform:translate(-50%,-50%)}.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}:host([data-reframe]){z-index:10}:host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;  cursor:pointer;user-select:none}.empty svg{opacity:.45}.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}.empty .sub{font-size:11px}.empty .sub u{text-underline-offset:2px}.empty:hover .sub{opacity:1}:host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;  background:rgba(201,100,66,.10)}.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;  opacity:.35;transition:border-color .12s,opacity .12s}:host([data-over]) .ring{border-color:#c96442;opacity:1}:host([data-filled]) .ring{display:none}.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;  background:transparent;overflow:visible;  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;  white-space:nowrap}.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}:host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl  {opacity:1;pointer-events:auto}.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;  backdrop-filter:blur(6px)}.ctl button:hover{background:rgba(0,0,0,.8)}.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}:host([data-swapping]) .frame img{visibility:hidden}.loading{position:absolute;inset:0;display:none;align-items:center;  justify-content:center;pointer-events:none}:host([data-swapping]) .loading{display:flex}.loading::after{content:"";width:22px;height:22px;border-radius:50%;  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;  animation:om-slot-spin .7s linear infinite}@keyframes om-slot-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}.credit a{color:inherit;text-decoration:none}.credit a:hover,.credit a:focus-visible{text-decoration:underline}:host([data-filled][data-credit]) .credit{display:block}:host-context([data-om-exporting]) .ctl,:host-context([data-om-exporting]) .credit{display:none !important}@media print{.ctl,.credit{display:none !important}}.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;  background:#f2f1ef;color:#6e6c66;user-select:none;  font:13px/1.45 system-ui,-apple-system,sans-serif}.attr-error svg{opacity:.55}.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}:host([data-attribution-error]) .attr-error{display:flex}:host([data-attribution-error]) .ring{display:none}</style><div class="frame" part="frame">  <img part="image" alt="" draggable="false" style="display:none">  <div class="empty" part="empty"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>    <div class="cap"></div>    <div class="sub">or <u>browse files</u></div></div>  <div class="attr-error" part="attribution-error"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>    <div class="cap">This photo needs attribution</div></div>  <div class="loading" part="loading"></div>  <div class="ring" part="ring"></div></div><span class="credit" part="credit"></span><div class="spill" popover="manual" data-dc-edit-transparent>  <img class="ghost" alt="" draggable="false">  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div></div><div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>  <button data-act="edit" title="Reframe image">Edit</button></div><input type="file" accept="` +
            i.join(`,`) +
            `" hidden>`),
            (this._frame = e.querySelector(`.frame`)),
            (this._ring = e.querySelector(`.ring`)),
            (this._img = e.querySelector(`.frame img`)),
            (this._empty = e.querySelector(`.empty`)),
            (this._cap = e.querySelector(`.cap`)),
            (this._sub = e.querySelector(`.sub`)),
            (this._spill = e.querySelector(`.spill`)),
            (this._ctl = e.querySelector(`.ctl`)),
            (this._credit = e.querySelector(`.credit`)),
            (this._attrError = e.querySelector(`.attr-error`)),
            this._credit.addEventListener(`click`, (e) => e.stopPropagation()),
            this._credit.addEventListener(`dblclick`, (e) =>
              e.stopPropagation(),
            ),
            (this._ghost = e.querySelector(`.ghost`)),
            (this._err = null),
            (this._input = e.querySelector(`input`)),
            (this._depth = 0),
            (this._gen = 0),
            (this._swapGen = 0),
            (this._loadPending = !1),
            (this._hidShowing = !1),
            (this._view = {
              s: 1,
              x: 0,
              y: 0,
            }),
            (this._subFn = () => this._render()),
            e.addEventListener(`click`, (e) => {
              let t =
                e.target &&
                e.target.getAttribute &&
                e.target.getAttribute(`data-act`);
              if (
                t &&
                this.hasAttribute(`data-editable`) &&
                (t === `replace` &&
                  (this._exitReframe(!0),
                  this.dispatchEvent(
                    new CustomEvent(`image-slot:pick`, {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                        id: this.id || null,
                      },
                    }),
                  )),
                t === `edit`)
              ) {
                if (!this._reframes()) return;
                this.hasAttribute(`data-reframe`)
                  ? this._exitReframe(!0)
                  : this._enterReframe();
              }
            }),
            this._input.addEventListener(`change`, () => {
              let e = this._input.files && this._input.files[0];
              (e && this._ingest(e), (this._input.value = ``));
            }),
            this._img.addEventListener(`load`, () => {
              ((this._loadPending = !1),
                this._releaseMask(!0),
                this._applyView());
            }),
            this._img.addEventListener(`error`, () => {
              ((this._loadPending = !1), this._releaseMask(!0));
            }),
            this.addEventListener(`dblclick`, (e) => {
              !this.hasAttribute(`data-editable`) ||
                !this._reframes() ||
                (e.preventDefault(),
                this.hasAttribute(`data-reframe`)
                  ? this._exitReframe(!0)
                  : this._enterReframe());
            }),
            this._spill.addEventListener(`pointerdown`, (e) => {
              if (e.button !== 0 || !this.hasAttribute(`data-reframe`)) return;
              (e.preventDefault(),
                e.stopPropagation(),
                this._spill.setPointerCapture(e.pointerId));
              let t = this.getBoundingClientRect(),
                n = t.width || 1,
                r = t.height || 1,
                i = e.target.getAttribute && e.target.getAttribute(`data-c`),
                a;
              if (i) {
                let e = this._img.naturalWidth || 1,
                  o = this._img.naturalHeight || 1,
                  s =
                    (this.getAttribute(`fit`) || `cover`).toLowerCase() ===
                    `contain`
                      ? Math.min(n / e, r / o)
                      : Math.max(n / e, r / o),
                  c = i.includes(`e`) ? 1 : -1,
                  l = i.includes(`s`) ? 1 : -1,
                  u = this._view.s,
                  d = e * s * u,
                  f = o * s * u,
                  p = ((50 + this._view.x) / 100) * n,
                  m = ((50 + this._view.y) / 100) * r,
                  g = p - (c * d) / 2,
                  _ = m - (l * f) / 2,
                  v = Math.hypot(d, f),
                  y = (c * d) / v,
                  b = (l * f) / v;
                a = (e) => {
                  let i =
                      (e.clientX - t.left - g) * y +
                      (e.clientY - t.top - _) * b,
                    a = h((u * i) / v),
                    o = (v * a) / u;
                  ((this._view.s = a),
                    (this._view.x = ((g + (y * o) / 2) / n) * 100 - 50),
                    (this._view.y = ((_ + (b * o) / 2) / r) * 100 - 50),
                    this._clampView(),
                    this._applyView());
                };
              } else {
                this.setAttribute(`data-panning`, ``);
                let t = {
                  px: e.clientX,
                  py: e.clientY,
                  x: this._view.x,
                  y: this._view.y,
                };
                a = (e) => {
                  ((this._view.x = t.x + ((e.clientX - t.px) / n) * 100),
                    (this._view.y = t.y + ((e.clientY - t.py) / r) * 100),
                    this._clampView(),
                    this._applyView());
                };
              }
              let o = () => {
                try {
                  this._spill.releasePointerCapture(e.pointerId);
                } catch {}
                (this._spill.removeEventListener(`pointermove`, a),
                  this._spill.removeEventListener(`pointerup`, o),
                  this._spill.removeEventListener(`pointercancel`, o),
                  this.removeAttribute(`data-panning`),
                  (this._dragUp = null));
              };
              ((this._dragUp = o),
                this._spill.addEventListener(`pointermove`, a),
                this._spill.addEventListener(`pointerup`, o),
                this._spill.addEventListener(`pointercancel`, o));
            }),
            this.addEventListener(
              `wheel`,
              (e) => {
                if (!this.hasAttribute(`data-reframe`)) return;
                e.preventDefault();
                let t = this.getBoundingClientRect(),
                  n = ((e.clientX - t.left) / t.width) * 100 - 50,
                  r = ((e.clientY - t.top) / t.height) * 100 - 50,
                  i = this._view.s,
                  a = h(i * 1.0015 ** -e.deltaY);
                if (a === i) return;
                let o = a / i;
                ((this._view.s = a),
                  (this._view.x = n * (1 - o) + this._view.x * o),
                  (this._view.y = r * (1 - o) + this._view.y * o),
                  this._clampView(),
                  this._applyView());
              },
              {
                passive: !1,
              },
            ));
        }
        connectedCallback() {
          (!this.id &&
            !y._warned &&
            ((y._warned = !0),
            console.warn(
              `<image-slot> without an id will not persist its dropped image.`,
            )),
            this.addEventListener(`dragenter`, this),
            this.addEventListener(`dragover`, this),
            this.addEventListener(`dragleave`, this),
            this.addEventListener(`drop`, this),
            a.add(this._subFn),
            this.addEventListener(`pointerenter`, this._subFn),
            (this._ro = new ResizeObserver(() => this._render())),
            this._ro.observe(this),
            u(),
            this._render());
        }
        disconnectedCallback() {
          (a.delete(this._subFn),
            this.removeEventListener(`pointerenter`, this._subFn),
            this.removeEventListener(`dragenter`, this),
            this.removeEventListener(`dragover`, this),
            this.removeEventListener(`dragleave`, this),
            this.removeEventListener(`drop`, this),
            (this._ro &&= (this._ro.disconnect(), null)),
            this._exitReframe(!1));
        }
        _enterReframe() {
          if (!this.hasAttribute(`data-reframe`)) {
            (this.setAttribute(`data-reframe`, ``),
              this._signalReframe(!0),
              (this._pagehide = () => {
                (this._exitReframe(!0), p());
              }),
              window.addEventListener(`pagehide`, this._pagehide));
            try {
              this._spill.showPopover();
            } catch {}
            try {
              this._ctl.showPopover();
            } catch {}
            ((this._reposition = () => {
              this.hasAttribute(`data-reframe`) && this._applyView();
            }),
              window.addEventListener(`scroll`, this._reposition, !0),
              window.addEventListener(`resize`, this._reposition),
              (this._lastRect = ``),
              (this._watch = () => {
                if (!this.hasAttribute(`data-reframe`)) return;
                let e = this.getBoundingClientRect(),
                  t = e.left + `,` + e.top + `,` + e.width + `,` + e.height;
                (t !== this._lastRect &&
                  ((this._lastRect = t), this._applyView()),
                  (this._watchId = requestAnimationFrame(this._watch)));
              }),
              (this._watchId = requestAnimationFrame(this._watch)),
              this._applyView(),
              (this._outside = (e) => {
                (e.composedPath && e.composedPath().includes(this)) ||
                  this._exitReframe(!0);
              }),
              (this._esc = (e) => {
                e.key === `Escape` && this._exitReframe(!0);
              }),
              document.addEventListener(`pointerdown`, this._outside, !0),
              document.addEventListener(`keydown`, this._esc, !0));
          }
        }
        _exitReframe(e) {
          if (this.hasAttribute(`data-reframe`)) {
            (this._dragUp && this._dragUp(),
              this.removeAttribute(`data-reframe`),
              this.removeAttribute(`data-panning`),
              this._outside &&
                document.removeEventListener(`pointerdown`, this._outside, !0),
              this._esc &&
                document.removeEventListener(`keydown`, this._esc, !0),
              (this._outside = this._esc = null),
              (this._reposition &&=
                (window.removeEventListener(`scroll`, this._reposition, !0),
                window.removeEventListener(`resize`, this._reposition),
                null)),
              (this._watchId &&= (cancelAnimationFrame(this._watchId), 0)),
              (this._pagehide &&=
                (window.removeEventListener(`pagehide`, this._pagehide),
                null)));
            try {
              this._spill.hidePopover();
            } catch {}
            try {
              this._ctl.hidePopover();
            } catch {}
            ((this._ctl.style.left = ``),
              (this._ctl.style.top = ``),
              e && this._commitView(),
              this._signalReframe(!1));
          }
        }
        _signalReframe(e) {
          (this.isConnected ? this : document).dispatchEvent(
            new CustomEvent(`image-slot:reframe`, {
              bubbles: !0,
              composed: !0,
              detail: {
                active: e,
                id: this.id || null,
              },
            }),
          );
        }
        openFilePicker() {
          (this._exitReframe(!0), this._input.click());
        }
        attributeChangedCallback(e, t, n) {
          (e === `src` && t !== n && (this._gen++, (this._swapGen = 0)),
            this.shadowRoot && this._render());
        }
        handleEvent(e) {
          if (e.type === `dragenter` || e.type === `dragover`)
            (e.preventDefault(),
              e.stopPropagation(),
              e.dataTransfer && (e.dataTransfer.dropEffect = `copy`),
              e.type === `dragenter` && this._depth++,
              this.setAttribute(`data-over`, ``));
          else if (e.type === `dragleave`)
            --this._depth <= 0 &&
              ((this._depth = 0), this.removeAttribute(`data-over`));
          else if (e.type === `drop`) {
            (e.preventDefault(),
              e.stopPropagation(),
              (this._depth = 0),
              this.removeAttribute(`data-over`));
            let t =
              e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
            t && this._ingest(t);
          }
        }
        async _ingest(e) {
          if ((this._setError(null), !e || i.indexOf(e.type) < 0)) {
            this._setError(`Drop a PNG, JPEG, WebP, or AVIF image.`);
            return;
          }
          let t = ++this._gen;
          this.hasAttribute(`data-filled`) &&
            (this.setAttribute(`data-swapping`, ``), (this._swapGen = t));
          try {
            let n = await v(e, this.clientWidth || this.offsetWidth || r);
            if (t !== this._gen) return;
            (this._exitReframe(!1), (this._swapGen = 0));
            let i = {
              u: n,
              s: 1,
              x: 0,
              y: 0,
            };
            (_(this.id || ``, i),
              this.id || ((this._local = i), this._render()));
          } catch (e) {
            if (t !== this._gen) return;
            ((this._swapGen = 0),
              this._releaseMask(),
              this._setError(`Could not read that image.`),
              console.warn(`<image-slot> ingest failed:`, e));
          }
        }
        _setError(e) {
          if (((this._err &&= (this._err.remove(), null)), !e)) return;
          let t = document.createElement(`div`);
          ((t.className = `err`),
            (t.textContent = e),
            this.shadowRoot.appendChild(t),
            (this._err = t),
            setTimeout(() => {
              this._err === t && (t.remove(), (this._err = null));
            }, 3e3));
        }
        _reframes() {
          return this.hasAttribute(`data-filled`);
        }
        _releaseMask(e) {
          !this._swapGen &&
            !this._loadPending &&
            (e || this._img.complete) &&
            this.removeAttribute(`data-swapping`);
        }
        _geom() {
          let e = this._img.naturalWidth,
            t = this._img.naturalHeight,
            n = this.clientWidth,
            r = this.clientHeight;
          return !e || !t || !n || !r
            ? null
            : {
                iw: e,
                ih: t,
                fw: n,
                fh: r,
                base:
                  (this.getAttribute(`fit`) || `cover`).toLowerCase() ===
                  `contain`
                    ? Math.min(n / e, r / t)
                    : Math.max(n / e, r / t),
              };
        }
        _clampView() {
          let e = this._geom();
          if (!e) return;
          let t = Math.max(0, ((e.iw * e.base * this._view.s) / e.fw - 1) * 50),
            n = Math.max(0, ((e.ih * e.base * this._view.s) / e.fh - 1) * 50);
          ((this._view.x = Math.max(-t, Math.min(t, this._view.x))),
            (this._view.y = Math.max(-n, Math.min(n, this._view.y))));
        }
        _applyView() {
          let e = this._geom();
          if (this.hasAttribute(`data-reframe`)) {
            let e = !1;
            try {
              e = this._ctl.matches(`:popover-open`);
            } catch {}
            if (e) {
              let e = this.getBoundingClientRect();
              ((this._ctl.style.left = e.right - 8 + `px`),
                (this._ctl.style.top = e.top + 8 + `px`));
            }
          }
          if (!e) {
            let e =
              (this.getAttribute(`fit`) || `cover`).toLowerCase() === `contain`;
            ((this._img.style.width = `100%`),
              (this._img.style.height = `100%`),
              (this._img.style.left = `50%`),
              (this._img.style.top = `50%`),
              (this._img.style.objectFit = e ? `contain` : `cover`));
            return;
          }
          let t = e.base * this._view.s,
            n = ((e.iw * t) / e.fw) * 100 + `%`,
            r = ((e.ih * t) / e.fh) * 100 + `%`,
            i = 50 + this._view.x + `%`,
            a = 50 + this._view.y + `%`;
          if (
            ((this._img.style.width = n),
            (this._img.style.height = r),
            (this._img.style.left = i),
            (this._img.style.top = a),
            (this._img.style.objectFit = ``),
            this.hasAttribute(`data-reframe`))
          ) {
            let n = this.getBoundingClientRect(),
              r = e.fw ? n.width / e.fw : 1,
              i = e.fh ? n.height / e.fh : 1;
            ((this._spill.style.width = e.iw * t * r + `px`),
              (this._spill.style.height = e.ih * t * i + `px`),
              (this._spill.style.left =
                n.left + ((50 + this._view.x) / 100) * n.width + `px`),
              (this._spill.style.top =
                n.top + ((50 + this._view.y) / 100) * n.height + `px`));
          }
        }
        _commitView() {
          let e = {
            s: this._view.s,
            x: this._view.x,
            y: this._view.y,
          };
          (this._userUrl && (e.u = this._userUrl),
            this.id ? _(this.id, e) : (this._local = e));
        }
        _render() {
          let e = this.getAttribute(`mask`),
            r = (this.getAttribute(`shape`) || `rounded`).toLowerCase(),
            i = ``;
          if (r === `circle`) i = `50%`;
          else if (r === `pill`) i = `9999px`;
          else if (r === `rounded`) {
            let e = parseFloat(this.getAttribute(`radius`));
            i = (Number.isFinite(e) ? e : 12) + `px`;
          }
          ((this._frame.style.borderRadius = e ? `` : i),
            (this._frame.style.clipPath = e || ``),
            (this._ring.style.borderRadius = e ? `` : i),
            (this._ring.style.display = e ? `none` : ``));
          let a = !!(window.omelette && window.omelette.writeFile);
          (this.toggleAttribute(`data-editable`, a),
            (this._sub.style.display = a ? `` : `none`));
          let o = this.id ? g(this.id) : this._local;
          o && o.u && !/^data:image\//i.test(o.u) && (o = null);
          let s = this.getAttribute(`src`) || ``;
          this._userUrl = (o && o.u) || null;
          let c = this._userUrl || s;
          (this.hasAttribute(`data-reframe`) ||
            (this._view = {
              s: o && Number.isFinite(o.s) ? h(o.s) : 1,
              x: o && Number.isFinite(o.x) ? o.x : 0,
              y: o && Number.isFinite(o.y) ? o.y : 0,
            }),
            (this._cap.textContent =
              this.getAttribute(`placeholder`) || `Drop an image`));
          let l = (this.getAttribute(`credit`) || ``).trim(),
            u = !!(!l && !this._userUrl && s && t(s));
          if ((this.toggleAttribute(`data-attribution-error`, u), c && !u)) {
            let e = this._img.getAttribute(`src`);
            (e === c
              ? this._releaseMask()
              : ((e || this._hidShowing) &&
                  this.setAttribute(`data-swapping`, ``),
                (this._loadPending = !0),
                (this._img.src = c),
                (this._ghost.src = c)),
              (this._hidShowing = !1),
              (this._img.style.display = `block`),
              (this._empty.style.display = `none`),
              this.setAttribute(`data-filled`, ``),
              this._clampView(),
              this._applyView());
          } else
            (this.removeAttribute(`data-swapping`),
              (this._loadPending = !1),
              (this._hidShowing = u && !!this._img.getAttribute(`src`)),
              (this._img.style.display = `none`),
              this._img.removeAttribute(`src`),
              this._ghost.removeAttribute(`src`),
              (this._empty.style.display = u ? `none` : `flex`),
              this.removeAttribute(`data-filled`));
          let d = !!(c && l && !this._userUrl && !u);
          if (((this._credit.textContent = ``), d)) {
            let e = ``,
              t = this.getAttribute(`credit-href`) || ``;
            if (t)
              try {
                let r = new URL(t, document.baseURI);
                (r.protocol === `http:` || r.protocol === `https:`) &&
                  (e = n(r.href));
              } catch {}
            let r = (e, t) => {
                let n = document.createElement(`a`);
                return (
                  n.setAttribute(`target`, `_blank`),
                  n.setAttribute(`rel`, `noopener noreferrer`),
                  n.setAttribute(`href`, t),
                  (n.textContent = e),
                  n
                );
              },
              i = /^Photo by (.+) on Unsplash$/.exec(l);
            i
              ? (this._credit.appendChild(document.createTextNode(`Photo by `)),
                this._credit.appendChild(
                  e ? r(i[1], e) : document.createTextNode(i[1]),
                ),
                this._credit.appendChild(document.createTextNode(` on `)),
                this._credit.appendChild(
                  r(
                    `Unsplash`,
                    `https://unsplash.com/?utm_source=claude_design&utm_medium=referral`,
                  ),
                ))
              : e
                ? this._credit.appendChild(r(l, e))
                : (this._credit.textContent = l);
          }
          this.toggleAttribute(`data-credit`, d);
        }
      }
      customElements.get(`image-slot`) ||
        customElements.define(`image-slot`, y);
    })());
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
export { initializeDemoGuards };
