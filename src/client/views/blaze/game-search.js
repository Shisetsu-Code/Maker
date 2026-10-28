/**
 * blaze / game-search.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { A } from "./game-catalog.js";
import {
  Ae,
  renderContent,
  asArray,
  N,
  Ie,
  resolveStyle,
} from "./element-adapter.js";
function renderGameSearchLayout(e) {
  return (0, JSXRuntime.jsx)(JSXRuntime.Fragment, {
    children: (0, JSXRuntime.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `16px`,
        fontFamily: `'Manrope',sans-serif`,
        color: `var(--bb-text,#0A0A0B)`,
      },
      children: [
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `flex`,
            alignItems: `flex-end`,
            justifyContent: `space-between`,
            gap: `12px`,
            flexWrap: `wrap`,
          },
          children: [
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                display: `flex`,
                flexDirection: `column`,
                gap: `4px`,
              },
              children: [
                `
      `,
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    fontWeight: `800`,
                    fontSize: `22px`,
                  },
                  children: renderContent(e.title),
                }),
                `
      `,
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    fontSize: `13px`,
                    color: `var(--bb-text-3,#6B6C73)`,
                    fontWeight: `600`,
                  },
                  children: renderContent(e.subtitle),
                }),
                `
    `,
              ],
            }),
            `
    `,
            e.showSort
              ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        gap: `4px`,
                        padding: `4px`,
                        background: `var(--bb-surface,#EFEFF1)`,
                        borderRadius: `8px`,
                      },
                      children: [
                        `
        `,
                        asArray(e.sorts).map((e, t) =>
                          (0, JSXRuntime.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsx)(`button`, {
                                  style: resolveStyle(
                                    `border:none;border-radius:6px;padding:8px 12px;background:${e?.bg ?? ``};color:${e?.fg ?? ``};font-family:'Manrope',sans-serif;font-weight:700;font-size:12px;cursor:pointer;white-space:nowrap;`,
                                  ),
                                  onClick: e?.select,
                                  children: renderContent(e?.label),
                                }),
                                `
        `,
                              ],
                            },
                            t,
                          ),
                        ),
                        `
      `,
                      ],
                    }),
                    `
    `,
                  ],
                })
              : null,
            `
  `,
          ],
        }),
        `
  `,
        e.showSearch
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    gap: `10px`,
                    height: `44px`,
                    padding: `0 14px`,
                    background: `var(--bb-surface,#EFEFF1)`,
                    border: `1px solid var(--bb-border,#D8D8DC)`,
                    borderRadius: `6px`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`svg`, {
                      style: {
                        stroke: `var(--bb-text-4,#8A8B92)`,
                      },
                      width: `16`,
                      height: `16`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      strokeWidth: `2`,
                      children: [
                        (0, JSXRuntime.jsx)(`circle`, {
                          cx: `11`,
                          cy: `11`,
                          r: `7`,
                        }),
                        (0, JSXRuntime.jsx)(`path`, {
                          d: `M20 20l-4-4`,
                        }),
                      ],
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`input`, {
                      style: {
                        flex: `1`,
                        minWidth: `0`,
                        background: `transparent`,
                        border: `none`,
                        outline: `none`,
                        color: `var(--bb-text,#0A0A0B)`,
                        fontFamily: `'Manrope',sans-serif`,
                        fontSize: `14px`,
                      },
                      value: N(e.q),
                      onChange: e.onQ,
                      placeholder: e.searchPh,
                    }),
                    `
    `,
                  ],
                }),
                `
  `,
              ],
            })
          : null,
        `

  `,
        e.hasGames
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: resolveStyle(
                    `display:grid;grid-template-columns:${e.gridCols ?? ``};gap:12px ${e.gridGap ?? ``};`,
                  ),
                  children: [
                    `
      `,
                    asArray(e.games).map((t, n) =>
                      (0, JSXRuntime.jsxs)(
                        React.Fragment,
                        {
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                display: `flex`,
                                flexDirection: `column`,
                                gap: `6px`,
                                cursor: `pointer`,
                                minWidth: `0`,
                              },
                              onClick: t?.open,
                              children: [
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  className: `bb2-0`,
                                  style: {
                                    position: `relative`,
                                    aspectRatio: `3/4`,
                                    borderRadius: `6px`,
                                    overflow: `hidden`,
                                    background: `var(--bb-surface,#EFEFF1)`,
                                    transition: `transform .15s`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`image-slot`, {
                                      id: t?.slot,
                                      shape: `rect`,
                                      placeholder: t?.name,
                                      src: Ie(t?.img),
                                    }),
                                    `
            `,
                                    t?.live
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsxs)(
                                              `span`,
                                              {
                                                style: {
                                                  position: `absolute`,
                                                  top: `8px`,
                                                  left: `8px`,
                                                  pointerEvents: `none`,
                                                  display: `flex`,
                                                  alignItems: `center`,
                                                  gap: `5px`,
                                                  fontSize: `10px`,
                                                  fontWeight: `800`,
                                                  padding: `3px 7px`,
                                                  borderRadius: `4px`,
                                                  background: `var(--bb-bg-deep,#FFFFFF)`,
                                                  color: `var(--bb-text,#0A0A0B)`,
                                                },
                                                children: [
                                                  (0, JSXRuntime.jsx)(`span`, {
                                                    style: {
                                                      width: `6px`,
                                                      height: `6px`,
                                                      borderRadius: `50%`,
                                                      background: `var(--bb-acento,#0A0A0B)`,
                                                    },
                                                  }),
                                                  `EN VIVO`,
                                                ],
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                    `
            `,
                                    t?.isNew
                                      ? (0, JSXRuntime.jsx)(
                                          JSXRuntime.Fragment,
                                          {
                                            children: (0, JSXRuntime.jsx)(
                                              `span`,
                                              {
                                                style: {
                                                  position: `absolute`,
                                                  top: `8px`,
                                                  left: `8px`,
                                                  pointerEvents: `none`,
                                                  fontSize: `10px`,
                                                  fontWeight: `800`,
                                                  padding: `3px 7px`,
                                                  borderRadius: `4px`,
                                                  background: `var(--bb-acento,#0A0A0B)`,
                                                  color: `var(--bb-sobre,#FFFFFF)`,
                                                },
                                                children: `NUEVO`,
                                              },
                                            ),
                                          },
                                        )
                                      : null,
                                    `
          `,
                                  ],
                                }),
                                `
          `,
                                (0, JSXRuntime.jsxs)(`div`, {
                                  style: {
                                    display: `flex`,
                                    flexDirection: `column`,
                                    gap: `2px`,
                                    padding: `0 2px`,
                                    minWidth: `0`,
                                  },
                                  children: [
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: resolveStyle(
                                        `font-size:${e.tileFont ?? ``};font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                      ),
                                      children: renderContent(t?.name),
                                    }),
                                    `
            `,
                                    (0, JSXRuntime.jsx)(`div`, {
                                      style: resolveStyle(
                                        `font-size:${e.tileMeta ?? ``};color:var(--bb-text-3,#6B6C73);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,
                                      ),
                                      children: renderContent(t?.meta),
                                    }),
                                    `
          `,
                                  ],
                                }),
                                `
        `,
                              ],
                            }),
                            `
      `,
                          ],
                        },
                        n,
                      ),
                    ),
                    `
    `,
                  ],
                }),
                `
    `,
                e.canMore
                  ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
                      children: [
                        `
      `,
                        (0, JSXRuntime.jsxs)(`div`, {
                          style: {
                            display: `flex`,
                            flexDirection: `column`,
                            alignItems: `center`,
                            gap: `8px`,
                            paddingTop: `6px`,
                          },
                          children: [
                            `
        `,
                            (0, JSXRuntime.jsxs)(`div`, {
                              style: {
                                fontSize: `12px`,
                                color: `var(--bb-text-3,#6B6C73)`,
                                fontWeight: `600`,
                              },
                              children: [
                                `Mostrando `,
                                renderContent(e.shown),
                                ` de `,
                                renderContent(e.total),
                              ],
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`div`, {
                              style: {
                                width: `200px`,
                                height: `3px`,
                                borderRadius: `2px`,
                                background: `var(--bb-border,#D8D8DC)`,
                                overflow: `hidden`,
                              },
                              children: (0, JSXRuntime.jsx)(`div`, {
                                style: resolveStyle(
                                  `height:100%;width:${e.shownPct ?? ``};background:var(--bb-acento,#0A0A0B);`,
                                ),
                              }),
                            }),
                            `
        `,
                            (0, JSXRuntime.jsx)(`button`, {
                              className: `bb2-1`,
                              style: {
                                marginTop: `4px`,
                                height: `40px`,
                                padding: `0 20px`,
                                borderRadius: `6px`,
                                border: `1px solid var(--bb-border,#D8D8DC)`,
                                background: `var(--bb-surface,#EFEFF1)`,
                                color: `var(--bb-text,#0A0A0B)`,
                                fontFamily: `'Manrope',sans-serif`,
                                fontWeight: `700`,
                                fontSize: `13px`,
                                cursor: `pointer`,
                              },
                              onClick: e.more,
                              children: `Cargar más`,
                            }),
                            `
      `,
                          ],
                        }),
                        `
    `,
                      ],
                    })
                  : null,
                `
  `,
              ],
            })
          : null,
        `

  `,
        e.isEmpty
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsxs)(`div`, {
                  style: {
                    padding: `52px 20px`,
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    gap: `10px`,
                    textAlign: `center`,
                  },
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsx)(`svg`, {
                      style: {
                        stroke: `var(--bb-border-strong,#C2C2C7)`,
                      },
                      width: `38`,
                      height: `38`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      strokeWidth: `2`,
                      children: (0, JSXRuntime.jsx)(`path`, {
                        d: e.emptyIcon,
                      }),
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontWeight: `800`,
                        fontSize: `16px`,
                      },
                      children: renderContent(e.emptyTitle),
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`div`, {
                      style: {
                        fontSize: `13px`,
                        color: `var(--bb-text-3,#6B6C73)`,
                        fontWeight: `600`,
                        maxWidth: `380px`,
                        lineHeight: `1.5`,
                      },
                      children: renderContent(e.emptyText),
                    }),
                    `
      `,
                    (0, JSXRuntime.jsx)(`button`, {
                      style: {
                        marginTop: `6px`,
                        height: `40px`,
                        padding: `0 18px`,
                        borderRadius: `6px`,
                        border: `none`,
                        background: `var(--bb-acento,#0A0A0B)`,
                        color: `var(--bb-sobre,#FFFFFF)`,
                        fontFamily: `'Manrope',sans-serif`,
                        fontWeight: `800`,
                        fontSize: `13px`,
                        cursor: `pointer`,
                      },
                      onClick: e.explore,
                      children: `Explorar juegos`,
                    }),
                    `
    `,
                  ],
                }),
                `
  `,
              ],
            })
          : null,
      ],
    }),
  });
}
let We, Ge, Ke;
let qe, Je, Ye, Xe, Ze;
var GameSearchController;
function initializeGameSearch() {
  We = A.slots;
  Ge = A.vivo;
  Ke = A.nuevos;
  A.proveedores;
  qe = (e) =>
    `game-` +
    e
      .toLowerCase()
      .normalize(`NFD`)
      .replace(/[\u0300-\u036f]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-|-$/g, ``);
  Je = [
    ...We.map((e, t) => ({
      name: e,
      provider: A.prov(e),
      type: `slot`,
      players: (((t + 3) * 211) % 2400) + 60,
      order: t,
    })),
    ...Ge.map((e, t) => ({
      name: e,
      provider: A.prov(e),
      type: `live`,
      players: (((t + 5) * 377) % 3100) + 200,
      order: 20 + t,
    })),
    ...Ke.map((e, t) => ({
      name: e,
      provider: A.prov(e),
      type: `new`,
      players: (((t + 2) * 97) % 900) + 30,
      order: 40 + t,
    })),
  ];
  Ye = A.hot;
  Xe = {
    all: `Todos los juegos`,
    popular: `Populares`,
    slots: `Slots`,
    hot: `En racha`,
    live: `Casino en vivo`,
    new: `Nuevos`,
    fav: `Favoritos`,
    recent: `Recientes`,
  };
  Ze = {
    fav: `M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z`,
    recent: `M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2`,
    search: `M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4`,
  };
  GameSearchController = class extends React.Component {
    state = {
      q: ``,
      sort: `pop`,
      limit: 18,
      vw: Ae(),
    };
    componentDidMount() {
      ((this.onResize = () =>
        this.setState({
          vw: Ae(),
        })),
        window.addEventListener(`resize`, this.onResize),
        this.onResize());
    }
    componentWillUnmount() {
      window.removeEventListener(`resize`, this.onResize);
    }
    componentDidUpdate() {
      let e = (this.props.kind || ``) + `|` + (this.props.provider || ``);
      (this._lastKey === void 0 && (this._lastKey = e),
        e !== this._lastKey &&
          ((this._lastKey = e), !0) &&
          this.setState({
            q: ``,
            limit: 18,
            sort: `pop`,
          }));
    }
    renderVals() {
      let e = this.state,
        t = this.props.kind || `all`,
        n = this.props.favs || [],
        r = this.props.recent || [],
        i = this.props.demo === `empty`,
        a;
      ((a =
        t === `slots`
          ? Je.filter((e) => e.type === `slot`)
          : t === `live`
            ? Je.filter((e) => e.type === `live`)
            : t === `new`
              ? Je.filter((e) => e.type === `new`)
              : t === `hot`
                ? Ye.map((e) => Je.find((t) => t.name === e)).filter(Boolean)
                : t === `popular`
                  ? [...Je].sort((e, t) => t.players - e.players).slice(0, 18)
                  : t === `provider`
                    ? Je.filter((e) => e.provider === this.props.provider)
                    : t === `fav`
                      ? n.map(
                          (e) =>
                            Je.find((t) => t.name === e) || {
                              name: e,
                              provider: ``,
                              type: `slot`,
                              players: 0,
                              order: 99,
                            },
                        )
                      : t === `recent`
                        ? r.map(
                            (e) =>
                              Je.find((t) => t.name === e) || {
                                name: e,
                                provider: ``,
                                type: `slot`,
                                players: 0,
                                order: 99,
                              },
                          )
                        : Je),
        i && (a = []));
      let o = a.length,
        s = e.q.trim().toLowerCase();
      (s &&
        (a = a.filter(
          (e) =>
            e.name.toLowerCase().includes(s) ||
            e.provider.toLowerCase().includes(s),
        )),
        t !== `recent` &&
          t !== `hot` &&
          (e.sort === `az`
            ? (a = [...a].sort((e, t) => e.name.localeCompare(t.name, `es`)))
            : e.sort === `new`
              ? (a = [...a].sort((e, t) => t.order - e.order))
              : t !== `fav` &&
                (a = [...a].sort((e, t) => t.players - e.players))));
      let c = a.length,
        l = a.slice(0, e.limit),
        u = e.vw < 600,
        d = (e) => ({
          bg: e ? `var(--bb-acento,#0A0A0B)` : `transparent`,
          fg: e ? `var(--bb-sobre,#FFFFFF)` : `var(--bb-text-3,#6B6C73)`,
        }),
        f = t === `fav` || t === `recent`,
        p = c === 0,
        m = p && o > 0;
      return {
        gridCols: u
          ? `repeat(4,minmax(0,1fr))`
          : `repeat(auto-fill,minmax(130px,1fr))`,
        gridGap: u ? `8px` : `10px`,
        tileFont: u ? `11px` : `13px`,
        tileMeta: u ? `10px` : `11px`,
        title: t === `provider` ? this.props.provider : Xe[t],
        subtitle:
          t === `recent`
            ? `Los últimos juegos que abriste`
            : t === `fav`
              ? `Tus juegos guardados`
              : o + ` juegos`,
        showSort: !f && t !== `hot` && o > 0,
        showSearch: o > 0,
        sorts: [
          [`pop`, `Popularidad`],
          [`az`, `A–Z`],
          [`new`, `Novedades`],
        ].map(([t, n]) => ({
          label: n,
          ...d(e.sort === t),
          select: () =>
            this.setState({
              sort: t,
            }),
        })),
        q: e.q,
        onQ: (e) =>
          this.setState({
            q: e.target.value,
            limit: 18,
          }),
        searchPh:
          t === `provider`
            ? `Buscar en ` + this.props.provider
            : `Buscá por juego o proveedor`,
        hasGames: !p,
        games: l.map((e) => ({
          name: e.name,
          slot: qe(e.name),
          img: A.img(e.name),
          live: e.type === `live`,
          isNew: e.type === `new`,
          meta: u
            ? e.type === `live`
              ? `En vivo`
              : e.provider
            : e.type === `live`
              ? `Mesa · $ 500 – $ 5.000.000`
              : e.players
                ? e.provider +
                  ` · ` +
                  e.players.toLocaleString(`es-AR`, {
                    useGrouping: `always`,
                  }) +
                  ` jugando`
                : e.provider,
          open: () => this.props.onOpenGame?.(e.name, e.provider, qe(e.name)),
        })),
        canMore: c > e.limit,
        shown: l.length,
        total: c,
        shownPct: Math.round((l.length / Math.max(c, 1)) * 100) + `%`,
        more: () =>
          this.setState({
            limit: e.limit + 12,
          }),
        isEmpty: p,
        emptyIcon: m ? Ze.search : Ze[t] || Ze.search,
        emptyTitle: m
          ? `Sin resultados para «` + e.q + `»`
          : t === `fav`
            ? `Aún no tienes favoritos`
            : t === `recent`
              ? `Todavía no has jugado nada`
              : `No hay juegos en esta categoría`,
        emptyText: m
          ? `Probá con otro nombre o proveedor.`
          : t === `fav`
            ? `Marcá la estrella en cualquier juego y va a aparecer acá.`
            : t === `recent`
              ? `Los juegos que abras se guardan acá para volver rápido.`
              : `Sumamos juegos nuevos cada semana.`,
        explore: () =>
          m
            ? this.setState({
                q: ``,
              })
            : this.props.onNav?.(`home`),
      };
    }
    render() {
      return renderGameSearchLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { GameSearchController, initializeGameSearch };
