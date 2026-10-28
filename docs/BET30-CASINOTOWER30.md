# Bet30 y CasinoTower30

Dos plantillas independientes en el selector de Maker, con catálogo y portadas propios. Ambas admiten nombre, logo, colores, fuentes, fondos, vista móvil/computadora, categorías, búsqueda, proveedores y favoritos. Los juegos abren la demo local y el panel es compartido.

| Plantilla | Captura | Juegos | Grupos | Portadas raster | Imágenes locales |
| --- | --- | ---: | ---: | ---: | ---: |
| Bet30 | 27/10/2026 | 145 | 3 | 7 | 155 |
| CasinoTower30 | 28/10/2026 | 1.804 | 2 | 3 | 1.807 |

Son los recursos presentes en cada HAR. El catálogo completo del operador puede ser mayor. Bet30 conserva azul/rosa y tres accesos de experiencias; CasinoTower30 usa negro/dorado y carrusel sobre un fondo degradado. La plataforma de origen comparte estructura con Celuapuestas40, por lo que se reutiliza el controlador local manteniendo los recursos separados por plantilla.

## Sanitización

Se amplió `sanitize-celuapuestas40-har.mjs` para aceptar sólo los identificadores `celuapuestas40`, `bet30` y `casinotower30`. Para las dos nuevas marcas admite además `/rest/c/listadoComerciales.aspx` del mismo host de catálogo `wallet.casinoenvivo.club`. De ese endpoint extrae únicamente imágenes raster de `config.image` presentes en la captura. No copia acciones, enlaces, fechas, cuerpos JSON embebidos ni archivos de video; usa los pósteres raster capturados cuando existen.

Se conservan las restricciones del [importador de Celuapuestas40](CELUAPUESTAS40.md): proyección de campos públicos, miniaturas referenciadas, firmas raster, límite de 8 MiB y nombres hash. Se permite `/cms/img/banners/` en el CDN para las portadas. No se publican cookies, cabeceras, IP, compañía, cuentas, billetera, apuestas, sportsbook, scripts, chat o rastreadores. Los bytes de imágenes no se modifican ni se eliminan metadatos incrustados.

## Regenerar

```sh
node scripts/sanitize-celuapuestas40-har.mjs "ruta/bet30.har" bet30
node scripts/sanitize-celuapuestas40-har.mjs "ruta/casinotower30.har" casinotower30
node scripts/install-lobby-templates.mjs
```

El argumento de plantilla omitido conserva Celuapuestas40. Los HAR permanecen fuera del repositorio. Al cambiar de captura, limpiar antes archivos generados obsoletos; el importador no los borra automáticamente.

`casino-family-page.mjs` genera las páginas sobre el esqueleto común; `casino-family.css` define las distribuciones y `casino-family.js` monta los grupos. Los catálogos se sirven desde carpetas independientes. Cada vista carga tarjetas en lotes de 48 y usa `/api/muestra/juego-demo`, sin conexión a los proveedores originales.

## Verificar

`npm test` comprueba los contratos de importación. Después de `npm run build`, ejecutar `npm run test:browser` con Playwright instalado desde el lockfile del proyecto. El recorrido común cubre las trece plantillas, búsqueda, favoritos, juego local, marca y móvil; usar `DEMO_ORIGIN` para verificar un servidor existente. Ver [PRUEBAS.md](PRUEBAS.md).
