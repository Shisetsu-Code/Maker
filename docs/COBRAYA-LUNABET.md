# Cobraya y Lunabet

Seleccionar Cobraya o Lunabet en el personalizador. Ambas admiten marca, colores, tipografía, logo, fondo propio, vista móvil y computadora, búsqueda, filtro por proveedor y favoritos. El panel es compartido. Las tarjetas abren juegos locales de demostración; registro, ingresos y promociones son simulaciones.

| Captura | Juegos recuperados | Banners | Imágenes locales |
| --- | ---: | ---: | ---: |
| Cobraya, 15/10/2026 | 1.434 | 7 | 1.440 |
| Lunabet, 15/10/2026 | 144 | 2 | 146 |

La cobertura corresponde a las respuestas presentes en los HAR, no al catálogo completo del operador. La distribución se reconstruyó con código propio; no se ejecuta el JavaScript capturado. Comparten el controlador local `bateupix.js` y usan `lobby-templates.css`, con portada ancha, navegación superior y proveedores horizontales.

## Sanitización

`scripts/sanitize-lobby-har.mjs` acepta únicamente respuestas del dominio correspondiente, de `/api/lobby`, `/api/games/list` y `/api/banners`. Proyecta campos públicos del catálogo y conserva sólo imágenes raster referenciadas, verificando firma y límite de tamaño. Los nombres de archivo son hashes. No exporta cookies, cabeceras, cuentas, sesiones, enlaces de banners, endpoints de pagos o sportsbook, scripts ni SVG. Antes de publicar, la [limpieza de privacidad](PRIVACIDAD-Y-VALIDACION.md) retira metadatos descriptivos internos y comprueba la decodificación de las imágenes. Los nueve banners fueron revisados visualmente.

## Regenerar

```sh
node scripts/sanitize-lobby-har.mjs cobraya "ruta/cobraya.har"
node scripts/sanitize-lobby-har.mjs lunabet "ruta/lunabet.har"
node scripts/install-lobby-templates.mjs
```

Los HAR permanecen fuera del repositorio. Al usar otra captura, retirar previamente los recursos generados obsoletos: el sanitizador agrega o reemplaza archivos, no limpia imágenes antiguas automáticamente. La instalación del selector también forma parte de `add-template.mjs` y `register-bateupix.mjs`.

## Verificación

`npm test` verifica la proyección y rechazo de datos no permitidos. Con el servidor activo, ejecutar `tests/lobby-templates-browser-smoke.cjs` con `DEMO_TEMPLATE=cobraya` o `lunabet` y `WORKSPACE_NODE_MODULES` apuntando a Playwright. `DEMO_ORIGIN` permite verificar otra publicación. Comprueba catálogo, miniaturas, búsqueda, favoritos, lanzamiento local, personalización, móvil y ausencia de solicitudes externas.
