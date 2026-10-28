# Maker editor source

These modules recover the application logic from `public/muestra/socio.js` at
`b6d354e9108f72598f319b02a358d01a4089671c`. The original capture did not contain
module source maps or license comments in that bundle. The reconstruction keeps
its algorithms, Spanish copy, CSS class names and browser-facing contracts.

`../entries/socio.js` is the browser entry. Its initialization order is intentional:

1. `initializeSocioSession()` restores the socio namespace and consumes the
   optional invitation parameters.
2. `initializeBrandEditor()` mounts the existing controls, restores the saved
   brand, and creates its preview iframes.
3. `initializeSocioShell()` adds presentation mode, downloads, responsive controls,
   maintenance overlays and tours.

The entry runs once per document, as the original script did. The pure helper
modules may be imported independently by Node tests; DOM work belongs to the
initializers or functions called by them.

## Module boundaries

| Module | Responsibility |
| --- | --- |
| `template-registry.js` | Thirteen stable template identifiers, labels, defaults, iframe keys and routes |
| `session.js` | Existing socio link and storage namespace |
| `brand.js` | Brand normalization, classic theme variables and color calculations |
| `theme-azul.js`, `theme-blaze.js`, `theme-brasa.js` | Template-specific color and contrast algorithms |
| `brand-codec.js` | Version-one URL/hash serialization and migration rules |
| `brand-editor.js` | Controls, state, image/logo processing, preview lifecycle and diagnostics |
| `recolor.js`, `azul-images.js` | Artwork recoloring, caching and template image groups |
| `view-cache.js` | Captured view asset recovery checks |
| `design-export.js` | Existing download shape and demo-event payload helpers |
| `maintenance.js` | Demo maintenance overlay and storage observation |
| `full-design.js` | Presentation mode, history, fullscreen and keyboard behavior |
| `tour-steps.js`, `guided-tour.js` | Tour content, targeting, scrolling and interaction |
| `socio-shell.js` | Download actions, responsive shell, menu and integration of the above |

## Compatibility contracts

Keep the short brand keys (`p`, `b`, `f`, `t`, `s`, `n`, etc.), template identifiers,
`v=1` link format, and current local/session storage keys. They are persisted user
data, not internal variable names. The logo remains stored separately from the
brand code, and the download retains the `rushybet-diseno-1` format plus `ajustes`.

The editor exposes the existing `window.__dmMarca`, `window.__demoListo`,
`window.__demoDiag` and `window.__demoTiempos` surfaces. Views keep the `__demo`
bridge and the `vars`, `disc`, `imgs`, and `listo` message types. The separate
design/content editor continues to handle `design-extras`; this extraction does
not replace that protocol or change the sharing/persistence model.

The template registry replaces the captured bundle's duplicated lists and route
branches. The existing HTML selector is retained for markup parity; its
`data-valor` identifiers must match the registry when adding a template.

## Editing and verification

Change these modules and compile the entry to `/muestra/socio.js`. Do not run the
historical text-patching installers on the generated bundle. Those installers
remain useful only when recovering an old capture; their changes are already
represented by this source.

`tests/editor-source.test.mjs` exercises route/cache isolation, default migration,
customized color retention and compatibility with saved version-one links.
Browser checks must also cover logo upload, reset/undo, reload, lobby/panel,
desktop/mobile, presentation mode and tours because these rely on browser APIs.
