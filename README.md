# Rushybet replica

Demo publicada: https://rushybet-replica.braian-n-l.workers.dev
Repositorio privado: https://github.com/Shisetsu-Code/rushybet-replica

Réplica de la muestra capturada en dos HAR aportados por el usuario. Conserva personalizador, lobby, panel y las variantes Rushybet, RushyClub azul, BlazeBet y Brasa.

## Ejecutar

```sh
npm ci
npm test
npm run dev
```

Abrir `http://127.0.0.1:8787`. El enlace principal carga el personalizador con el estado de la captura; los colores, nombre, plantilla, vista y dispositivo pueden modificarse desde los controles originales.

## Publicar en Cloudflare

```sh
npx wrangler login
npm run deploy
```

`wrangler.jsonc` apunta al Worker de prueba `rushybet-replica`. Si se utiliza otra cuenta, actualizar `account_id`. El despliegue sirve recursos estáticos y únicamente datos de demostración; no requiere secretos ni bases de datos.

## Recuperar de nuevo

Los HAR no se incluyen en el repositorio. Con copias locales de las capturas:

```sh
node scripts/recover.mjs --out public "captura1.har" "captura2.har"
node scripts/adapt-demo.mjs
node scripts/add-template.mjs
npm run check:assets
```

Las imágenes adicionales recuperadas del sitio público permanecen incluidas. El inventario intermedio se escribe en `work/`, que está excluido del repositorio.

## Alcance

Rushybet 2 tiene una estructura nueva de casino resort: cabecera horizontal, portada editorial, categorías, juego destacado y cuadrícula. Sus archivos son `resort.html`, `resort.js` y `resort.css`. Incluye un catálogo curado de ocho juegos con búsqueda, favoritos de sesión y apertura de vistas demo. El panel utiliza la vista común. Se selecciona con `pl=duplicada` en el enlace. La marca, logo, colores del banner y botones se actualizan desde el personalizador; la superficie clara es propia de esta plantilla.

- Interfaz y recursos recuperados; datos del panel y sus operaciones de ejemplo se simulan en el navegador como en la muestra original.
- El botón de juego abre una vista local de demostración. Los juegos de terceros requieren integración propia.
- El envío de diseño no envía mensajes; la descarga del diseño conserva el flujo local de la muestra.
- Se excluyen solicitudes, cookies, cabeceras, tokens y URLs de sesión de los HAR.
- Las mejoras de producto se aplicarán después de revisar esta base.

La especificación, el plan y el informe de validación están en `outputs/`.
