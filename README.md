# Maker — configurador recuperado del HAR original

Esta base **reemplaza el Maker anterior**. Se extrajeron del HAR aportado por el usuario el HTML, CSS, JavaScript y recursos de las cuatro vistas (lobby y panel). La estructura original de la interfaz, el motor de variables y el selector de plantilla se conservan; la marca y el título se cambiaron a Maker.

## Funcionamiento actual

- Lobby, panel de demostración y previsualización computadora/celular.
- Cuatro plantillas originales con etiquetas Maker Base, Maker Azul, Maker Neón y Maker Cobre.
- Colores, botones, fondos, tarjetas, efectos, recoloreo de imágenes, logo y nombre.
- Descarga local del diseño JSON y enlace con parámetros.
- **Modo demostración local:** APIs y WebSocket externos bloqueados, sin usuarios, cuentas, transacciones ni envío de diseños.

## Localhost

```bash
python3 -m http.server 4173 --bind 127.0.0.1
# abrir http://127.0.0.1:4173/muestra/socio.html
```

GitHub Actions debe probar en localhost con Chromium/Firefox antes de publicar. No existe workflow de despliegue a GitHub Pages ni a Cloudflare.

## Limitaciones

Esta es una reproducción local obtenida de recursos capturados en una sesión HAR, no el backend original ni una herramienta de publicación multicliente. Algunos recursos de juegos servidos desde CDNs de terceros no estaban disponibles o no se distribuyen; la vista puede presentar imágenes faltantes. Las plantillas dinámicas y temas nuevos se añaden sobre esta base en una etapa posterior.

Asegurar la titularidad o licencia de redistribución de recursos de terceros antes de publicar la copia fuera del repositorio privado o utilizarla comercialmente.
