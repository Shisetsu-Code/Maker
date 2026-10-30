# Plantilla externa Bateupix

La plantilla se reconstruye con código propio a partir de la captura aportada. No se ejecutan los scripts, manifiesto PWA, seguimiento o configuración de negocio del sitio externo.

## Recursos incluidos

Se publican únicamente las 1.007 imágenes referenciadas por el catálogo y los tres banners. Se exige respuesta 200, base64 y una firma de archivo compatible con PNG, JPEG, WebP o AVIF. Los archivos tienen nombres hash generados desde origen y ruta, nunca desde una URL con parámetros de sesión. Las imágenes no usadas quedan excluidas.

El catálogo contiene 1.004 juegos con los únicos campos `id`, `name`, `code`, `provider`, `image` y `category`. Las portadas y tres banners se sirven localmente. Se descartan cookies, cabeceras, scripts, metadatos de proveedores, respuestas de cuentas y pagos, destinos de enlaces y parámetros de URLs. El HAR completo no se publica.

Antes de publicar, la [limpieza de privacidad](PRIVACIDAD-Y-VALIDACION.md) retira metadatos descriptivos internos y comprueba la decodificación de las imágenes. El menú muestra doce proveedores y los restantes se pueden buscar. Se verificó la decodificación de las 1.007 imágenes, pero esto no es una auditoría general de archivos HAR.

Los banners conservan su contenido gráfico original, pero están identificados como imágenes de referencia con promociones no vigentes. No se copian afirmaciones de autorización legal del sitio, destinos de pago o contacto.

## Comportamiento

Seleccionar Bateupix en el personalizador. Usa su menú lateral, portada y catálogo en computadora, con menú y navegación inferior en celular. Recibe nombre, logo, colores y ajustes de tipografía/fondo de Maker. El panel sigue siendo compartido. Las funciones de banners y orden personalizable siguen correspondiendo a Resort.

Ingreso, registro, promociones y soporte muestran avisos de demostración. Los juegos llaman únicamente al lanzador demo de Maker y abren una vista informativa local. No se integran motores de juegos ni cuentas externas. Los favoritos son de sesión y el catálogo se presenta en grupos de 48.

## Recuperar

```sh
node scripts/sanitize-bateupix.mjs "captura-bateupix.har"
node scripts/register-bateupix.mjs
```

La recuperación original de Rushybet, seguida de `add-template.mjs`, conserva el registro Bateupix. Las fuentes compartidas omiten variantes sin archivo local; idiomas no cubiertos usan el respaldo del sistema.

## Verificación

`tests/bateupix-sanitizer.test.mjs` comprueba exclusión de campos sensibles, código y cuerpos de imagen inválidos. `tests/bateupix-browser-smoke.cjs` verifica banner decodificado, catálogo, búsqueda, favoritos, juego demo, registro simulado, vista de celular, cambio de marca y cero solicitudes HTTP externas durante ese recorrido. Esto no constituye una auditoría completa de todos los recursos ni fidelidad de cada píxel.
