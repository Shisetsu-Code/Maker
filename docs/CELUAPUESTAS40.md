# Plantilla Celuapuestas40

Seleccionar **Celuapuestas40** en Maker. La portada presenta tres accesos: Casino, Casino en vivo y Deportes. El segundo filtra las mesas capturadas; Deportes abre un aviso demo. El selector horizontal permite explorar 29 grupos de catálogo. Conserva búsqueda, proveedores, favoritos, carga en lotes de 48, personalización de nombre/logo/colores/tipografía/fondo y panel compartido.

La captura del 27/10/2026 permitió recuperar **1.122 juegos y 1.125 imágenes locales**, incluidas las tres portadas. Sólo aparecen juegos cuya miniatura está presente en el HAR; no equivale al catálogo completo del operador. La interfaz se reconstruye con código propio, sin ejecutar el JavaScript original.

## Sanitización

`scripts/sanitize-celuapuestas40-har.mjs` lee únicamente respuestas de `wallet.casinoenvivo.club/rest/c/listadoJuegos.aspx` y `listadoMarcas.aspx`, proyectando nombre, código y proveedor de juegos, agrupación e imagen pública. No copia los objetos completos, ni IP, identificadores de compañía, datos de billetera, sesiones o cuentas. Los grupos repetidos se unen sin duplicar juegos.

Las miniaturas se admiten sólo desde `cdn.casinoenvivo.club/cms/img/logos/`; las tres portadas tienen rutas explícitas bajo `/static/img/home/`. Se normaliza la barra inicial duplicada presente en la captura. Se validan firmas raster y tamaño máximo de 8 MiB; sólo se publican archivos referenciados, renombrados mediante hash. Se conservan sus bytes, sin eliminación de metadatos incrustados.

No se importa configuración de sportsbook, cuotas, billetera, apuestas, pagos, chat, analítica, cookies, cabeceras, scripts ni SVG. Todos los lanzamientos se resuelven con `/api/muestra/juego-demo`, sin conectarse al operador o a los proveedores originales.

## Regenerar

```sh
node scripts/sanitize-celuapuestas40-har.mjs "ruta/captura.har"
node scripts/install-lobby-templates.mjs
```

El HAR permanece fuera del repositorio. Si cambia la captura, limpiar antes los recursos generados obsoletos. La página se genera con `celuapuestas40-page.mjs`; `celuapuestas40.css` define su distribución y `celuapuestas40.js` monta los grupos sobre el controlador compartido.

## Verificar

`npm test` comprueba los contratos de importación. Después de `npm run build`, ejecutar `npm run test:browser` con Playwright instalado desde el lockfile del proyecto. El recorrido común cubre las trece plantillas, búsqueda, favoritos, juego local, marca y móvil; usar `DEMO_ORIGIN` para verificar un servidor existente. Ver [PRUEBAS.md](PRUEBAS.md).
