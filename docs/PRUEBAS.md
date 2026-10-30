# Pruebas y límites

## Automatizadas

- `npm test`: recuperación HAR, API demo, adaptaciones, ajustes y contenido. Los textos y parámetros importados se acotan; el orden de secciones queda completo y sin duplicados.
- `npm run test:runtime`: requiere servidor activo; comprueba entradas, vistas, recursos, imágenes y API de juego local.
- `tests/editor-browser-smoke.cjs`: requiere Playwright y Microsoft Edge. Verifica fuente, escala anidada/dinámica, imagen de fondo, ocultado, cambio de plantilla/panel, imagen y título de portada, ocultar/reordenar secciones, exportar/importar, restablecer y recargar.
- `tests/element-editor-browser-smoke.cjs`: selección visual, texto/estilos, imagen, visibilidad, historial, persistencia, archivos, tarjetas dinámicas y aislamiento del panel compartido.
- `tests/element-editor-coverage-browser.cjs`: edición sobre textos existentes en las 17 plantillas y selección móvil.
- `tests/element-overlap-browser.cjs`: dos fragmentos de un mismo título conservan estilos y texto sin ciclos de mutaciones.

Con Playwright disponible en el proyecto, ejecutar `node tests/editor-browser-smoke.cjs`. En Codex se puede usar el paquete incluido indicando su carpeta en `WORKSPACE_NODE_MODULES`. `DEMO_ORIGIN` permite ejecutar las mismas comprobaciones contra Cloudflare.

## Revisión visual

Comprobar escritorio y simulación de celular, fondos muy claros/oscuros, nombres largos, selección de logo y lectura del texto. Las pruebas no representan una comparación de cada píxel ni una auditoría completa de todos los juegos.

## Limitaciones conocidas

- Catálogo Resort de ocho juegos; los motores de terceros no se integraron.
- La edición visual se aplica a las 17 plantillas. El reordenamiento explícito de secciones sigue siendo específico de Resort.
- El panel y sus operaciones siguen siendo una simulación.
- El enlace de marca no incluye los ajustes adicionales; se trasladan por JSON.
- Fondos, portadas y cambios de elementos se guardan localmente, sujetos a los [límites de recursos y navegador](EDICION-VISUAL.md).
- Algunos recursos no capturados del catálogo original usan URLs externas.
- Dos fondos heredados opcionales de Azul faltan también en el origen.
