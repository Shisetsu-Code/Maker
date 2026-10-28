# Pruebas y límites

## Preparación reproducible

El proyecto fija Node.js 24.22.1, npm 12.2.1 y Playwright 1.64.1. Usar las versiones de `.nvmrc`, `package.json` y `package-lock.json`. El runner importa el Playwright instalado por `npm ci`; no utiliza Edge ni módulos globales.

```sh
npm ci
npm run build
npx --no-install playwright install --with-deps chromium firefox
npm test
node --test tests/browser/static-server.test.mjs
npm run lint
npm run check:assets
BROWSERS=chromium,firefox npm run test:browser
npx --no-install wrangler deploy --dry-run
```

La construcción genera `dist/public`. Ninguna prueba necesita el HAR privado ni credenciales de Cloudflare. `work/`, `dist/`, las capturas y los archivos de ajustes descargados son resultados locales ignorados por Git.

## Qué comprueba cada capa

| Comando                                            | Cobertura                                                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `npm test`                                         | Contratos de la API demo, marca, ajustes, contenido, recuperación y construcción.                           |
| `npm run check:assets`                             | Referencias estáticas completas, recursos de los catálogos y alias del Worker en el resultado distribuible. |
| `node --test tests/browser/static-server.test.mjs` | Entrada HTML, alias de cartas, API demo real y restricción de archivos al directorio servido.               |
| `npm run test:runtime`                             | Rutas y respuestas del Worker servido por Wrangler; necesita un servidor ya activo.                         |
| `npm run test:browser`                             | Las 13 plantillas y el panel, escritorio y móvil, selector, persistencia, editor y catálogos locales.       |
| `npx wrangler deploy --dry-run`                    | Empaquetado del Worker y configuración de distribución, sin publicar.                                       |

Las pruebas de navegador cubren los 13 valores del selector: `clasica`, `azul`, `blaze`, `brasa`, `duplicada` (Resort), `bateupix`, `casinotower30`, `bet30`, `celuapuestas40`, `pinaplay`, `multisala`, `lunabet` y `cobraya`. Cada vista se captura a 1440 × 1000 y 393 × 852, además del panel en ambos tamaños. Se comprueba que el documento del editor no desborde horizontalmente.

Los flujos verifican selección con ratón y teclado, URL y recarga, cambio lobby/panel, colores, nombre, subida y eliminación de logo, fuentes, escala sin multiplicarse entre padres e hijos, imágenes de fondo, ocultado del fondo, cambios de plantilla, portada y secciones de Resort, exportación JSON, importación, restablecimiento y persistencia en el navegador. Los ocho catálogos locales comprueban búsqueda, favoritos, apertura del juego demo en el mismo origen, registro simulado, navegación móvil y sus controles específicos.

## Navegador sobre archivos o sobre Wrangler

Sin `DEMO_ORIGIN`, el runner inicia y cierra automáticamente `scripts/serve-static.mjs`, que sirve `dist/public` y usa `src/demo-api.mjs`. Este servidor facilita pruebas de interfaz; las particularidades de Workers se prueban aparte con Wrangler.

Para iniciar el runtime real local, en una terminal:

```sh
npm run dev -- --local
```

En otra terminal:

```sh
DEMO_ORIGIN=http://127.0.0.1:8787 npm run test:runtime
DEMO_ORIGIN=http://127.0.0.1:8787 BROWSERS=chromium,firefox npm run test:browser
```

`DEMO_ORIGIN` también acepta un entorno de prueba ya publicado. Usar una instancia demo: los flujos modifican almacenamiento local y llaman únicamente a los endpoints de demostración. El runner bloquea y registra las solicitudes a otros orígenes para que el resultado no dependa de servicios externos. Las pruebas no vuelven a ejecutar tráfico del HAR.

## Referencia y comparación visual

La referencia de la reconstrucción procede del commit `b6d354e9108f72598f319b02a358d01a4089671c`. Se sirve directamente su carpeta `public`, sin reconstruirla con herramientas nuevas:

```sh
mkdir -p work/rebuild/baseline
git archive b6d354e9108f72598f319b02a358d01a4089671c public | tar -x -C work/rebuild/baseline
BROWSERS=chromium,firefox npm run test:browser -- --baseline
npm run build
BROWSERS=chromium,firefox npm run test:browser -- --compare
```

El runner fija fecha y hora iniciales, semilla aleatoria, zona horaria, idioma, escala de pantalla y dimensiones; el reloj avanza para que las duraciones y los loaders funcionen. Las capturas desactivan animaciones y esperan las fuentes e imágenes visibles, el cierre del recorrido guiado y el fin de la pantalla de carga; no aplican máscaras ni reglas CSS para ocultar la interfaz. La referencia y el candidato deben ejecutarse con el mismo navegador y entorno. La comparación rechaza versiones distintas del navegador y nuevos recursos fallidos que no aparecían en la referencia. En Azul de escritorio, el carrusel tiene desplazamiento por JavaScript: la captura utiliza su pausa nativa al pasar el cursor sobre el padding y fija el desplazamiento al inicio, manteniendo todas las imágenes visibles. En Brasa se espera y se cierra la sugerencia de chat con su control, se selecciona el primer destacado y se mantiene la pausa nativa del carrusel al pasar el cursor sobre su encabezado.

La evidencia se escribe en `work/rebuild/test-results/baseline/<navegador>/` y `work/rebuild/test-results/current/<navegador>/`: capturas PNG, diferencias PNG cuando existen, el JSON exportado por el editor y un `report.json` con resultados, versión del navegador y recursos fallidos. La comparación usa Pixelmatch con umbral de color `0.1`; el límite predeterminado es un 1 % de píxeles diferentes por captura. El informe conserva la diferencia exacta, incluso por debajo del límite. Revisar visualmente los cambios y sus imágenes, especialmente texto, espaciado, imágenes y colores; pasar el umbral numérico no sustituye esa revisión.

La referencia original tiene un defecto caracterizado en la escala de texto dinámico: un hijo nuevo que hereda 24 px de un padre escalado desde 20 px puede terminar en 28,8 px al aplicar otra vez el factor 1,2. El runner espera que el observer procese ese hijo y guarda sus tamaños y bases en `textScale`. Sólo en `--baseline` acepta ese caso exacto y lo registra en `knownBaselineDefects`; el candidato debe conservar 24 px. Esta excepción no permite otros fallos ni modifica los archivos originales.

| Variable u opción                            | Uso                                                                                     |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| `BROWSERS=chromium,firefox`                  | Ejecuta ambos motores; por defecto, Chromium.                                           |
| `DEMO_ASSET_DIR=...`                         | Sirve otra carpeta estática cuando no hay `DEMO_ORIGIN`.                                |
| `TEST_RESULTS_DIR=...`                       | Cambia la carpeta raíz de evidencia.                                                    |
| `VISUAL_BASELINE_DIR=...`                    | Cambia la raíz que contiene las capturas de referencia por navegador.                   |
| `VISUAL_MAX_DIFF_RATIO=0.01`                 | Límite de diferencias; justificar y revisar cualquier cambio.                           |
| `BROWSER_TRACE=1`                            | Guarda una traza de Playwright por navegador.                                           |
| `TEMPLATES=clasica,duplicada`                | Reduce las plantillas durante el diagnóstico; no usar como aceptación completa.         |
| `BROWSER_CHECKS=editor-controls-persistence` | Ejecuta un caso específico para diagnóstico; el informe identifica los filtros activos. |
| `--previews-only`                            | Captura las vistas y omite flujos de controles y catálogos.                             |
| `PLAYWRIGHT_CHROMIUM_EXECUTABLE=...`         | Binario alternativo explícito para un entorno local; se registra su versión.            |
| `PLAYWRIGHT_FIREFOX_EXECUTABLE=...`          | Firefox compatible con Playwright proporcionado por el entorno.                         |

Cada ejecución reemplaza la evidencia anterior de los navegadores seleccionados en su carpeta de salida. Para diagnósticos parciales, usar otra carpeta con `TEST_RESULTS_DIR=work/rebuild/test-results/diagnostic`.

La CI instala los navegadores que corresponden a la versión bloqueada de Playwright. Los ejecutables alternativos son una salida local cuando una descarga no está disponible; no sustituyen la verificación de ambos motores en CI. Para abrir una traza: `npx playwright show-trace ruta/trace.zip`.

## CI y alcance

`Verify Maker` ejecuta instalación limpia, build, lint, unitarias, verificación de recursos, servidor auxiliar, Wrangler local, Chromium y Firefox contra referencia y candidato, y empaquetado de prueba. Publica evidencia como artifact incluso cuando falla una etapa. No contiene tokens ni pasos de despliegue. Dependabot propone actualizaciones de npm y GitHub Actions, sujetas a estas mismas comprobaciones.

La referencia visual debe actualizarse como una decisión revisada cuando se apruebe un cambio de diseño. No regenerarla para ocultar una diferencia inesperada.

## Limitaciones conocidas

- Resort mantiene su catálogo demo de ocho juegos; no se integraron motores de terceros.
- Los cambios de contenido y distribución sólo se aplican a Resort.
- El panel, registro y operaciones de juego siguen siendo simulaciones.
- El enlace de marca no incluye los ajustes adicionales; se trasladan por JSON.
- Fondos, logos y portadas se guardan en el navegador y están sujetos a su cuota.
- La comprobación estática no resuelve expresiones JavaScript dinámicas. Las pruebas de navegador cubren las rutas que recorren sus casos, sin explorar todas las combinaciones de controles y juegos. Los alias PNG/WebP de Azul se resuelven y su logo original ausente usa el recurso RushyBet disponible, conservando los logos personalizados.
- La comprobación móvil usa dimensiones de navegador; no sustituye pruebas en dispositivos físicos ni una auditoría completa de accesibilidad o de todos los juegos.
