# Dependencias y política de actualización

Estado comprobado el **28 de octubre de 2026**. Las versiones directas se fijan sin rangos en `package.json`; `package-lock.json` registra el árbol completo y sus integridades. `npm ci` reproduce ese árbol.

| Uso | Paquete o herramienta | Versión |
|---|---|---|
| Construcción y herramientas | Node.js LTS | 24.22.1 |
| Gestor de paquetes | npm | 12.2.1 |
| Runtime de componentes del navegador | React y React DOM | 19.3.1 |
| Esquemas y validación | Zod | 4.6.7 |
| CSS | Tailwind y `@tailwindcss/cli` | 4.3.3 |
| Bundles | esbuild | 0.28.2 |
| Desarrollo y publicación Cloudflare | Wrangler | 4.154.0 |
| Pruebas de navegador | Playwright | 1.64.1 |
| Comparación de capturas | pixelmatch / pngjs | 8.0.0 / 7.0.0 |
| Comprobación de código | ESLint / globals | 10.13.0 / 17.13.0 |
| Formato | Prettier | 3.9.10 |
| Recuperación y análisis AST | Babel parser / types | 8.0.8 / 8.0.8 |
| Recuperación AST | Babel traverse / generator | 8.0.7 / 8.0.6 |

Las implementaciones antiguas de React, React DOM y Zod dentro de las capturas se retiraron. Ahora esbuild compila los paquetes instalados y documenta los archivos utilizados en `dist/build-metafile.json`. Babel permite auditar la extracción inicial y analizar referencias a recursos; no se envía al navegador. Tampoco se publican las herramientas de desarrollo ni los mapas de código.

## Qué significa compatibilidad con Cloudflare

Node es una herramienta de construcción. El Worker se ejecuta en **workerd** y utiliza APIs web y el binding `ASSETS`; no depende de un servidor Node permanente. La versión estable de Wrangler selecciona las versiones compatibles de workerd y Miniflare. No se fuerzan dependencias transitivas distintas mediante `overrides`.

Se usa Node 24 LTS como base de herramientas mantenida, aunque exista una rama Current más nueva. La `compatibility_date` del Worker es `2026-10-23`, correspondiente al runtime incluido en Wrangler 4.154.0. Cambiar esa fecha cambia comportamientos de Workers y exige repetir las pruebas; no actualiza React, Node ni npm.

Referencias primarias: [requisitos de Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/), [Wrangler 4.154.0](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.154.0), [compatibility dates](https://developers.cloudflare.com/workers/configuration/compatibility-dates/), [Node.js](https://nodejs.org/en/download) y los metadatos publicados en el [registro npm](https://registry.npmjs.org/).

## Mantener las versiones

Dependabot revisa npm y GitHub Actions cada semana. React y React DOM se actualizan juntos, igual que Tailwind y su CLI. La CI verifica instalación, build, lint, contratos, recursos, runtime de Cloudflare y navegador antes de que se apruebe una actualización.

Los cambios de versión se evalúan por compatibilidad y resultado, sin copiar código minificado de una nueva captura. Si una versión cambia la apariencia, los recorridos y las capturas deben explicar la diferencia antes de aceptarla. El build habitual trabaja con los recursos versionados y no descarga fuentes o recursos desde el sitio original.

`npm audit` sobre el lockfile actualizado devolvió **0 vulnerabilidades reportadas** durante esta reconstrucción. Es una comprobación de los avisos conocidos en ese momento, no una garantía permanente sobre el código o sus dependencias. Repetirla al actualizar y revisar los avisos nuevos.

## Instalación con npm 12

`allowScripts` permite únicamente los scripts de instalación revisados de `@parcel/watcher@2.5.1`, `esbuild@0.28.2` y `workerd@1.20261023.1`. Se fijan también sus versiones: preparan o verifican los binarios de plataforma; no se habilitan scripts indiscriminadamente.

Al actualizar esas herramientas, revisar sus scripts y actualizar la entrada correspondiente con `npm install-scripts approve --allow-scripts-pin=true nombre-del-paquete`. El comando registra la política en `package.json`; no ejecuta los scripts. Después repetir una instalación limpia y las pruebas de Wrangler. [Referencia oficial de npm](https://docs.npmjs.com/cli/commands/npm-install-scripts/).
