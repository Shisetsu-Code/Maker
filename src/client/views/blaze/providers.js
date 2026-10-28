/**
 * blaze / providers.
 * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.
 * Initialization is explicit; the view entry calls it in the original order.
 */
import * as React from "react";
import * as JSXRuntime from "react/jsx-runtime";
import { A } from "./game-catalog.js";
import { renderContent, asArray, N } from "./element-adapter.js";
function renderProvidersLayout(e) {
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
              children: `Proveedores`,
            }),
            `
    `,
            (0, JSXRuntime.jsxs)(`div`, {
              style: {
                fontSize: `13px`,
                color: `var(--bb-text-3,#6B6C73)`,
                fontWeight: `600`,
              },
              children: [renderContent(e.count), ` estudios`],
            }),
            `
  `,
          ],
        }),
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
              placeholder: `Buscar proveedor`,
            }),
            `
  `,
          ],
        }),
        `
  `,
        (0, JSXRuntime.jsxs)(`div`, {
          style: {
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fill,minmax(180px,1fr))`,
            gap: `10px`,
          },
          children: [
            `
    `,
            asArray(e.providers).map((e, t) =>
              (0, JSXRuntime.jsxs)(
                React.Fragment,
                {
                  children: [
                    `
      `,
                    (0, JSXRuntime.jsxs)(`div`, {
                      className: `bb8-0`,
                      style: {
                        height: `96px`,
                        borderRadius: `8px`,
                        background: `var(--bb-surface,#EFEFF1)`,
                        border: `1px solid var(--bb-surface-2,#E5E5E8)`,
                        display: `flex`,
                        flexDirection: `column`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        gap: `4px`,
                        cursor: `pointer`,
                        padding: `10px`,
                        textAlign: `center`,
                      },
                      onClick: e?.open,
                      children: [
                        `
        `,
                        (0, JSXRuntime.jsx)(`span`, {
                          style: {
                            fontWeight: `800`,
                            fontSize: `15px`,
                          },
                          children: renderContent(e?.name),
                        }),
                        `
        `,
                        (0, JSXRuntime.jsxs)(`span`, {
                          style: {
                            fontSize: `12px`,
                            fontWeight: `600`,
                            color: `var(--bb-text-3,#6B6C73)`,
                          },
                          children: [renderContent(e?.games), ` juegos`],
                        }),
                        `
      `,
                      ],
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
        e.none
          ? (0, JSXRuntime.jsxs)(JSXRuntime.Fragment, {
              children: [
                `
    `,
                (0, JSXRuntime.jsx)(`div`, {
                  style: {
                    padding: `40px`,
                    textAlign: `center`,
                    background: `var(--bb-surface,#EFEFF1)`,
                    borderRadius: `8px`,
                    color: `var(--bb-text-3,#6B6C73)`,
                    fontWeight: `600`,
                    fontSize: `13px`,
                  },
                  children: `No encontramos proveedores con ese nombre.`,
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
let bt;
var ProvidersController;
function initializeProviders() {
  bt = A.proveedoresConteo;
  ProvidersController = class extends React.Component {
    state = {
      q: ``,
    };
    renderVals() {
      let e = this.state.q.trim().toLowerCase(),
        t = bt.filter(([t]) => !e || t.toLowerCase().includes(e));
      return {
        count: bt.length,
        q: this.state.q,
        onQ: (e) =>
          this.setState({
            q: e.target.value,
          }),
        providers: t.map(([e, t]) => ({
          name: e,
          games: t,
          open: () =>
            this.props.onNav?.(`category`, {
              cat: `provider`,
              provider: e,
            }),
        })),
        none: t.length === 0,
      };
    }
    render() {
      return renderProvidersLayout({
        ...this.props,
        ...this.renderVals(),
      });
    }
  };
}
export { ProvidersController, initializeProviders };
