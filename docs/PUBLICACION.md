# Publicación y recuperación

## Cloudflare

El Worker `rushybet-replica` mantiene el enlace existente. `wrangler.jsonc` contiene el identificador de cuenta, recursos estáticos y rutas. No contiene credenciales.

```sh
npm ci
npm test
npx wrangler deploy --dry-run
npx wrangler login
npm run deploy
```

En otra cuenta, cambiar `account_id` y autenticar con ella. No subir archivos `.env`, HAR o credenciales. Después de publicar, ejecutar las pruebas de funcionamiento con `DEMO_ORIGIN` apuntando a la URL y revisar el editor en navegador.

## GitHub Maker

La versión nueva reemplaza los archivos antiguos en la rama principal mediante un commit normal. No se fuerza el historial ni se borra el repositorio. El estado previo está en el commit `86ca4078769509ba9fd26dea5765f048dda2eca3`.

Para inspeccionar lo anterior, usar un checkout separado de ese commit. Para restaurarlo como contenido actual, crear una rama, restaurar los archivos del commit anterior y registrar una nueva revisión. Revisar antes de llevarla a la rama principal. Esto conserva tanto la versión nueva como la anterior.

La actualización no altera otros repositorios. GitHub y Cloudflare son destinos independientes: subir código no publica automáticamente el Worker.
