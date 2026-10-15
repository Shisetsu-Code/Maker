# Plantilla Multisala

Seleccionar **Multisala** en Maker. La portada conserva la identidad visual de la captura, con cinco accesos a salas, categorías, proveedores y catálogo. Admite los mismos controles de nombre, logo, colores, tipografía y fondo del editor. Los accesos a salas abren avisos demo; no navegan a operadores externos. El panel es compartido.

La captura del 15/10/2026 permitió recuperar **270 juegos y 276 imágenes**: miniaturas más una marca y cinco portadas de salas. No se consultan servicios originales para completar el catálogo. Las tarjetas se muestran en lotes de 48; búsqueda, proveedor y favoritos funcionan localmente.

## Datos recuperados

El sanitizador acepta sólo `/multisala/api/games` del dominio `multisala.net`. Proyecta título, slug, proveedor, categoría y miniatura local. Las seis imágenes de identidad/salas tienen rutas explícitamente permitidas. No importa configuración de pagos, datos de usuario, movimientos, tokens, soporte, notificaciones, scripts, SVG ni juegos embebidos del proveedor. Las imágenes raster conservan sus bytes; no se eliminan metadatos incrustados.

## Regenerar

```sh
node scripts/sanitize-lobby-har.mjs multisala "ruta/multisala.har"
node scripts/install-lobby-templates.mjs
```

El HAR no se publica. Si se usa otra captura, limpiar previamente los recursos generados obsoletos. La instalación también se ejecuta desde `add-template.mjs` y `register-bateupix.mjs`.

`scripts/multisala-page.mjs` genera la portada propia sobre los elementos comunes del catálogo; `multisala.css` define su distribución. El controlador compartido `bateupix.js` carga únicamente el JSON local. Los juegos usan `/api/muestra/juego-demo`; no hay apuestas ni pagos reales.

## Pruebas

`npm test` incluye el contrato de sanitización de Multisala. El recorrido de navegador se ejecuta con `DEMO_TEMPLATE=multisala` mediante `tests/lobby-templates-browser-smoke.cjs`; admite `DEMO_ORIGIN` y la ubicación de Playwright en `WORKSPACE_NODE_MODULES`. Comprueba catálogo, búsqueda, favoritos, juego local, registro simulado, personalización y móvil sin solicitudes externas.
