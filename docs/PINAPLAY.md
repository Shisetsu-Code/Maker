# Plantilla Pinaplay

Seleccionar **Pinaplay** en Maker. Incluye portadas adaptadas a computadora y celular, menú lateral, seis colecciones destacadas en filas horizontales y catálogo con búsqueda, proveedores y favoritos. «Ver todos» filtra el catálogo por la colección seleccionada. Mantiene los controles compartidos de nombre, logo, colores, tipografía y fondo. El panel es compartido.

La captura del 27/10/2026 permitió recuperar **571 juegos, 28 colecciones, cuatro portadas y 574 imágenes locales**. Las seis primeras colecciones se muestran en la portada; la cobertura corresponde al HAR y no al catálogo completo del operador. Las tarjetas del catálogo se muestran en lotes de 48. Se usan las variantes móviles de las portadas cuando están presentes; de lo contrario se conserva la variante de computadora.

## Sanitización

`scripts/sanitize-pinaplay-har.mjs` lee sólo respuestas públicas de `b.pinaplay.net`: `/api/v1/home/metadata`, `/api/v1/catalog/games` y `/api/v1/catalog/filters`. Proyecta campos de juegos, nombres de colecciones y sus referencias, y rutas locales de portadas. No publica el objeto de metadata completo.

Se admiten imágenes raster referenciadas y presentes en la captura: rutas de juegos/portadas de `minio.pokersistemas.com`, imágenes de `i.postimg.cc` y `/storage/drakon/` de `gator.drakon.casino`. Se valida firma y tamaño máximo de 8 MiB. Los archivos reciben nombres hash y sólo se guardan los usados. No se descargan recursos nuevos para completar huecos.

No se importan tokens del chat, configuración de autenticación o retiros, contadores de jugadores, rastreadores, cookies, cabeceras, enlaces de banners, scripts ni SVG. Los bytes raster se conservan: no se eliminan metadatos incrustados. Las portadas son referencias visuales, sin promociones vigentes.

## Regeneración

```sh
node scripts/sanitize-pinaplay-har.mjs "ruta/pinaplay.har"
node scripts/install-lobby-templates.mjs
```

El HAR permanece fuera del repositorio. Al usar otra captura, limpiar previamente los archivos generados obsoletos. `pinaplay-page.mjs` transforma el esqueleto común de lobby; `pinaplay.css` aporta la distribución y `pinaplay.js` monta las colecciones con nodos de texto. El controlador compartido usa el catálogo local y `/api/muestra/juego-demo`. No se ejecuta código capturado ni se conectan apuestas o pagos.

## Verificación

`npm test` comprueba proyección de datos, rechazo de APIs ajenas y uso limitado de imágenes. Con servidor activo, `DEMO_TEMPLATE=pinaplay` y `DEMO_ORIGIN` permiten ejecutar `tests/lobby-templates-browser-smoke.cjs` con Playwright disponible en `WORKSPACE_NODE_MODULES`. Verifica catálogo, portadas, búsqueda, favoritos, demo local, marca y móvil sin solicitudes externas.
