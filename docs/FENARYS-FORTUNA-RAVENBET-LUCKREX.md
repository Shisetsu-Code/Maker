# Fenarys, Fortuna SJK, RavenBet y LuckRex

Las cuatro capturas recibidas corresponden a casinos. Se agregaron como plantillas independientes al Maker, con recursos locales y código de interfaz propio; no se ejecuta el JavaScript capturado. Comparten búsqueda, categorías, proveedores, favoritos, carga en lotes de 48, personalización de marca y panel demo.

| Plantilla | Captura | Juegos recuperados | Grupos | Portadas | Imágenes locales |
| --- | --- | ---: | ---: | ---: | ---: |
| Fenarys | 29/10/2026 | 153 | 10 | Hero propio con mascota recuperada | 154 |
| Fortuna SJK | 29/10/2026 | 273 | 8 | 2 | 277 |
| RavenBet | 29/10/2026 | 129 | 5 | 9 | 143 |
| LuckRex | 29/10/2026 | 2.028 | 12 | 4 | 2.026 |

La cobertura depende de las respuestas de catálogo y miniaturas presentes en cada HAR; no representa el total del operador. Algunas miniaturas se comparten entre juegos. Las imágenes de portadas y categorías se revisaron visualmente. Los textos de presentación son de demostración y las promociones mostradas en imágenes son referencias, sin vigencia.

## Distribución

- Fenarys: hero con mascota, tipografía grande y acentos dorados.
- Fortuna SJK: portada fotográfica, verde y accesos de casino, vivo y crash.
- RavenBet: hero rojo/negro y tarjetas de categorías con ilustraciones recortadas.
- LuckRex: negro/dorado, menú lateral en computadora, portadas y dos accesos destacados.

Las categorías sólo filtran juegos recuperados. Si una experiencia no tiene un grupo correspondiente, muestra un aviso demo. Los juegos abren `/api/muestra/juego-demo`; no hay conexión a los motores originales, billeteras o apuestas.

## Sanitización

`scripts/sanitize-modern-har.mjs` acepta únicamente cuatro identificadores registrados y sus dominios exactos. Para Fenarys, Fortuna SJK y RavenBet importa `/api/games`; para LuckRex, `/api/lobby`. De `/api/banners` copia sólo imágenes públicas referenciadas. Proyecta título, identificador de juego/proveedor, categoría y ruta local, sin conservar la respuesta completa.

Se aceptan imágenes raster referenciadas del dominio correspondiente, `cdn.softswiss.net/i/`, `cdn.content360.games/covers/`, `client.int.qtlauncher.com/images/` y `platipusgaming.cloud`. Se resuelven los envoltorios `/_next/image` y se conserva el parámetro `id` de Qt para evitar mezclar portadas de juegos que comparten la misma ruta. Se valida firma y tamaño máximo de 8 MiB; sólo se guardan los archivos usados, con nombres hash. La validación en navegador comprueba su decodificación.

Las capturas incluyen respuestas de autenticación y cuentas. No se copian tokens, perfiles, saldos, transacciones, claves, configuración de pagos o chat, datos de analítica, cookies, cabeceras, enlaces de lanzamiento, scripts, video ni SVG. Antes de publicar, la [limpieza de privacidad](PRIVACIDAD-Y-VALIDACION.md) retira metadatos descriptivos internos y comprueba la decodificación de las imágenes. No se completan recursos faltantes con solicitudes externas.

## Regenerar

```sh
node scripts/sanitize-modern-har.mjs fenarys "ruta/fenarys.har"
node scripts/sanitize-modern-har.mjs fortunasjk "ruta/fortunasjk.har"
node scripts/sanitize-modern-har.mjs ravenbet "ruta/ravenbet.har"
node scripts/sanitize-modern-har.mjs luckrex "ruta/luckrex.har"
node scripts/install-lobby-templates.mjs
```

Los HAR permanecen fuera del repositorio. Si cambia la captura, limpiar previamente los recursos generados obsoletos; el importador no los elimina automáticamente. La página se genera con `modern-lobbies-page.mjs`, los estilos están en `modern-lobbies.css` y las categorías en `modern-lobbies.js`, sobre el controlador compartido.

## Verificación

`npm test` comprueba proyección, fuentes permitidas y resolución de imágenes Qt/Next. Con servidor activo, `tests/lobby-templates-browser-smoke.cjs` admite `DEMO_TEMPLATE=fenarys`, `fortunasjk`, `ravenbet` o `luckrex`, junto a `DEMO_ORIGIN` y Playwright en `WORKSPACE_NODE_MODULES`. Verifica la plantilla, catálogo, imágenes iniciales, categorías, búsqueda, favoritos, juego local, marca y móvil sin solicitudes externas. `template-picker-browser-smoke.cjs` comprueba las 17 opciones del Maker, teclado, recarga y selección móvil.
