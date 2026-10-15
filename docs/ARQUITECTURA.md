# Arquitectura y mantenimiento

## Capas

- `public/muestra/socio.js`: personalizador original adaptado y selector de vistas. Es un bundle capturado; editar mediante adaptadores reproducibles y cambios puntuales.
- `design-settings.mjs`: normaliza tipografía, fondos y contenido importado; genera CSS limitado a valores permitidos.
- `design-editor.js`: monta controles, persiste ajustes y comunica vistas mediante mensajes del mismo origen. Las vistas aceptan cambios sólo desde su padre.
- `content-settings.mjs`: textos acotados, imágenes data locales y secciones permitidas; elimina claves y secciones desconocidas.
- `content-editor.js`: portada y orden de Resort. Los textos se asignan con `textContent`. No se interpreta HTML del usuario.
- `resort.html/css/js`: lobby propio; catálogo curado, búsqueda, favoritos y vistas de juego local.
- `bateupix.js`: controlador común de Bateupix, Cobraya, Lunabet y Multisala; cada plantilla carga su catálogo y recursos locales. Ver [Cobraya/Lunabet](COBRAYA-LUNABET.md) y [Multisala](MULTISALA.md).
- `src/worker.mjs` y `src/demo-api.mjs`: recursos estáticos, alias de miniaturas y contratos de demostración. Sin base de datos ni servicios de apuestas.

## Datos

El código de marca se conserva en el hash original. Los ajustes adicionales usan `rushybet:design-extras:v1` en localStorage; se normalizan al leer, importar o editar. Las imágenes se guardan como data URL comprimidas. Los ajustes se comparten por JSON; no se sincronizan entre equipos automáticamente.

La tipografía se aplica con CSS y tamaños base medidos sin escala. Los textos anidados y nuevos usan la misma escala, evitando multiplicaciones sucesivas. Las fuentes están recuperadas localmente.

## Recuperación de capturas

```sh
node scripts/recover.mjs --out public "captura1.har" "captura2.har"
node scripts/adapt-demo.mjs
node scripts/add-template.mjs
npm run check:assets
```

Los HAR permanecen fuera del repositorio. El manifiesto intermedio se genera en `work/`. El adaptador instala el editor y la descarga de ajustes; `add-template.mjs` registra Resort y no sobrescribe sus archivos propios. Antes de publicar una nueva captura, revisar conflictos, recursos faltantes y pruebas de navegador.

## Añadir una sección Resort

Añadir la sección al HTML y a `SECTION_NAMES`; extender el mapa de nodos en `applyContent`, incluir un valor inicial y probar ocultado/orden/restablecimiento. No mover elementos dentro del árbol de un componente React: Resort usa DOM propio para esta función.
