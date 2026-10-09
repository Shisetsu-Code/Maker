# Maker: verificación funcional del cliente

Alcance: probar el editor y el gestor en localhost dentro de GitHub Actions. No publicar, no incorporar API/chat y no iniciar aún la auditoría de seguridad.

Se conservan los ocho recorridos originales y se agregan catorce en Chromium y Firefox sobre el mismo `dist/`. Cubren enlaces recibidos y recargas, pantalla ampliada, feedback de color, conservación de contenido, portada/HTML, importación atómica, archivo de plantillas, nuevas composiciones, editor en celular, navegación/FAQ, sliders/fuentes, recuperación de campos, material incompatible y coexistencia de versiones.

## Reproducción inicial

Corrida 37895091203, commit 276e0597eb2231d718a4a099703b96c6f362c523. En Chromium pasaron los ocho escenarios originales. Los catorce nuevos detectaron cuatro fallos funcionales y cuatro errores de localización exacta de controles. El registro se conserva en Actions.

- El enlace inicial se aplicaba en cada recarga y sustituía la copia editada. Corrección: guardar primero la copia recibida y consumir el fragmento del enlace una sola vez, únicamente si se pudo guardar.
- Escape quitaba la ampliación pero no actualizaba el nombre/estado del botón. Corrección: una función compartida para entrar/salir, también desde el iframe.
- El selector nativo de color actualizaba el sitio pero no el indicador de contraste ni la paleta seleccionada. Corrección: sincronizar esos indicadores sin reconstruir el campo que tiene el foco.
- Los enlaces `#mk-...` de `srcdoc` navegaban al documento del editor en vez de desplazarse dentro de la vista previa. Corrección: navegación interna desde el documento padre sin habilitar scripts en el sandbox.
- Los nombres implícitos de selectores y áreas de texto incluían contenido variable. Se añadieron etiquetas accesibles explícitas; el selector de tipo de portada se distingue de la casilla de sección Portada.

Las pruebas están en `tests/functional.py`; capturas, trazas y JSON en `artifacts/<browser>/functional/`. Ningún resultado funcional equivale a una auditoría de seguridad. Las correcciones deben pasar nuevamente las suites completas antes de considerarse verificadas.
