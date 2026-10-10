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

Es una captura del **frontend demostrativo**, no el código fuente del backend. Se bloquean conexiones a APIs del proveedor, WebSocket y operaciones reales; no se reutilizan los códigos de invitación del HAR. **No hay servicio de casinos, cuentas, pagos o publicación de sitios.** El primer paquete incluido en GitHub contiene 78 imágenes. El HAR aportado por el usuario incluye 1.007 imágenes estáticas recuperables de rutas públicas; sin el resto de las imágenes, algunas tarjetas pueden aparecer vacías.

Para recuperar **las imágenes del HAR original** en una copia local de Maker (no se transmiten tokens ni llamadas a servidores externos):

```bash
python scripts/extract_har_assets.py "ruta/a/archivo.har" --dest .
```

El extractor valida host, rutas, tipo de imagen, tamaño y firma binaria, evita sobrescribir archivos distintos por defecto, y reporta conflictos y duplicados. También crea **copias de compatibilidad** bajo `muestra/games-cartas/` y `muestra/rushybet/` cuando la captura contiene imágenes en las rutas raíz: las cuatro plantillas usan rutas relativas distintas y, sin estas copias, seguían apareciendo errores 404 aun recuperando las imágenes originales. Para probar sin escribir: `--dry-run`. El HAR completo **no** se publica en el repositorio, ya que puede contener datos sensibles. En GitHub Actions se prueba la seguridad funcional del extractor con un HAR sintético; esto no implica que los 1.007 recursos estén ya almacenados en GitHub. Cada corrida del navegador adjunta capturas estabilizadas, métricas de imágenes decodificadas y un inventario de respuestas HTTP 4xx en los artefactos de Actions. La fidelidad funcional y visual deberá validarse caso por caso antes de afirmar equivalencia 1:1.

Antes de redistribuir el material o usarlo comercialmente, verificar los permisos para código, imágenes y marcas de terceros.
