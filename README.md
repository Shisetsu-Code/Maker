# Configurador original — base 1:1 (reconstrucción HAR)

Objetivo: **primero reproducir el configurador original**, sin diseñar otra aplicación ni incorporar nuevas plantillas o efectos. Esta fase conserva las etiquetas, variables, navegación y scripts de la captura proporcionada, y sirve el sitio en `localhost` durante pruebas de GitHub Actions.

- Archivo principal: `muestra/socio.html` (también desde `/`).
- Plantillas de la captura: `clasica`, `azul`, `blaze`, `brasa`. Vista Lobby / Panel, computadora / celular, tutorial original y todas las perillas de personalización.
- Fuentes HTML, CSS y JS extraídas del HAR. Los HTML insertan únicamente un bloqueo de API y una CSP local; `socio.js` cambia exclusivamente el endpoint de envío a una ruta local sin backend. Las otras tres plantillas usan los scripts originales completos.
- `assets-parts/*.b64` incorpora un primer paquete de imágenes de la captura; `scripts/unpack_assets.py` las restaura, también bajo las rutas originales.

## Ejecución local

```bash
python scripts/unpack_assets.py
python -m http.server 4173 --bind 127.0.0.1
# http://127.0.0.1:4173/muestra/socio.html
```

Las pruebas en GitHub Actions arrancan el servidor local y verifican los navegadores Chromium y Firefox. No hay GitHub Pages ni despliegue a Cloudflare.

## Límites de la reproducción

Es una captura del **frontend demostrativo**, no el código fuente del backend. Se bloquean conexiones a APIs del proveedor, WebSocket y operaciones reales; no se reutilizan los códigos de invitación del HAR. **No hay servicio de casinos, cuentas, pagos o publicación de sitios.** La captura incluye parte de las imágenes del catálogo, pero no todo el contenido remoto: algunas tarjetas todavía pueden aparecer sin imagen. La fidelidad funcional y visual deberá validarse caso por caso antes de afirmar equivalencia 1:1.

Antes de redistribuir el material o usarlo comercialmente, verificar los permisos para código, imágenes y marcas de terceros.
