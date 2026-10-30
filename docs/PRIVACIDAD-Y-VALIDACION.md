# Privacidad y validación de plantillas

Revisión del 30 de octubre de 2026. Las 17 plantillas mantienen interacciones de demostración: no se conectan cuentas, apuestas, depósitos, retiros ni juegos reales.

## Cobertura funcional

| Grupo | Comprobaciones ejecutadas |
| --- | --- |
| Bateupix, Cobraya, Lunabet, Multisala, Pinaplay, Celuapuestas40, Bet30, CasinoTower30, Fenarys, Fortuna SJK, RavenBet, LuckRex | Todos los filtros visibles, proveedores y colecciones; búsquedas con/sin resultados; más juegos; favoritos; apertura/cierre de una demo local; avisos de navegación; banners anterior/siguiente; menú móvil y ancho a 393 px. |
| Resort (`duplicada`) | Categorías, favoritos, demo local, presentación móvil. |
| Rushybet, Azul, Blaze y Brasa | Navegación principal y búsquedas disponibles; aperturas de cuenta de demostración; cambio lobby/panel y presentación móvil. |
| Panel compartido | Inicio, Soporte, Paneles, Pendientes, Movimientos, Plata, Alertas, Premios, Flyers y Ajustes, probado desde las cuatro plantillas originales. |
| Editor | Selección y cambio de texto en las 17 plantillas; selección móvil; imágenes, estilos, ocultado, historial, persistencia, aislamiento por plantilla/pantalla e importación/exportación. |

Los controles de registro, pagos, soporte y promociones que abren avisos están soportados como demostraciones. No representan integraciones reales. Las pruebas no recorren cada juego ni cada combinación de estado, ni comparan cada píxel del HAR.

## Limpieza aplicada

- Se revisaron y decodificaron 10.349 imágenes raster publicadas. La primera limpieza reescribió 623 archivos; se retiraron EXIF, XMP, IPTC, comentarios y texto de edición donde correspondía. También se corrigieron CRC de PNG recuperados. Nueve capturas dañadas se sustituyeron por una imagen local que indica que la vista previa no está disponible.
- PNG, JPEG sin giro y WebP conservan los datos comprimidos de píxeles; JPEG, PNG y WebP con orientación EXIF se orientan antes de retirar sus metadatos. AVIF con metadatos se vuelve a codificar a calidad 95. GIF conserva sus fotogramas y bucle al retirar comentarios y extensiones descriptivas. Una imagen animada que requiera girar sus fotogramas, o un AVIF animado con metadatos, bloquea la publicación hasta una conversión compatible; no se aplana silenciosamente. Se conservan perfiles ICC y datos técnicos necesarios para color, transparencia y animación. Las pruebas sintéticas verifican píxeles, transparencia, orientación y eliminación de metadatos.
- Logos nuevos, fondos e imágenes de ajustes JSON pasan por una representación nueva de píxeles antes de compartirse. Las descargas limpian también imágenes de diseños guardados anteriormente. SVG de logo se rasteriza; la exportación ya no incluye el nombre del archivo original ni la fecha de creación generada.
- Las referencias de elementos omiten credenciales de URL, fragmentos y parámetros de autenticación/sesión. Se conservan parámetros de presentación necesarios para identificar imágenes.
- Se sustituyeron un correo, teléfono, alias y datos bancarios de ejemplo con apariencia real por valores explícitos de demostración. No se confirmó que fueran datos personales auténticos.
- Las vistas originales tienen una política de recursos locales y no envían referencia de navegación. Las fuentes se resuelven localmente; una imagen externa no recuperada usa un marcador local en lugar de solicitarse al casino original. Las plantillas nuevas conservan sus políticas más restrictivas.

Los HAR y archivos de trabajo permanecen fuera de `public/` y de Git. La revisión por patrones del contenido publicado no encontró credenciales con los patrones comprobados. Esto no demuestra ausencia absoluta de secretos ni reemplaza una auditoría exhaustiva de dependencias y todos los bundles capturados. El nombre de marca y los textos que el usuario decide incluir son contenido del diseño y se conservan.

## Antes de publicar o importar otra captura

```sh
python -m pip install -r requirements-privacy.txt
npm ci
npm run sanitize:assets
npm test
npm run test:privacy
npm run check:privacy
npm run deploy
```

`sanitize:assets` limpia las imágenes existentes y falla ante archivos dañados; no sustituye imágenes automáticamente. Revisar el resultado y cualquier imagen faltante antes de continuar. `check:privacy` es de sólo lectura: busca archivos privados, cuerpos HAR, rutas personales y patrones de credenciales, verifica la limpieza raster y decodifica sus píxeles. Los resultados informan rutas y categorías, nunca los valores encontrados. Wrangler lo ejecuta como paso de construcción, incluso con `deploy --dry-run`, y bloquea la publicación si falla. CI instala Pillow y ejecuta también los ocho casos de imágenes.

La recuperación genérica de la primera captura admite código del sitio original; no es un importador universal de código no confiable. Los importadores específicos sólo reconstruyen catálogos y recursos seleccionados. Ambos requieren la comprobación final de privacidad antes de publicar.

## Repetir pruebas de navegador

Usar `npm run dev` o `node scripts/local-test-server.mjs` (puerto 8802, mismo Worker y rutas que producción). Tener Playwright y Microsoft Edge disponibles; `WORKSPACE_NODE_MODULES` permite señalar una instalación existente de Playwright. Configurar `DEMO_ORIGIN` a la dirección local correspondiente.

```sh
node tests/template-navigation-browser.cjs
node tests/legacy-navigation-browser.cjs
node tests/element-editor-coverage-browser.cjs
node tests/element-editor-browser-smoke.cjs
node tests/editor-browser-smoke.cjs
node tests/image-privacy-browser.cjs
node tests/template-picker-browser-smoke.cjs
node tests/element-overlap-browser.cjs
```

Cada prueba usa un navegador de prueba independiente. No borra los ajustes del navegador del usuario.
