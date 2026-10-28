# Publicación y recuperación

## Qué se distribuye

`npm run build` genera `dist/public` a partir de las fuentes mantenidas y los recursos de `public`. `wrangler.jsonc` apunta a ese resultado y a `src/worker.mjs`. Conserva las URLs públicas del editor, las 13 plantillas y el panel. `public` no se utiliza como sustituto de una construcción pendiente.

El Worker `rushybet-replica` sirve los recursos y la API de demostración. El identificador de cuenta en la configuración no es una credencial. La reconstrucción del frontend no añade saldos, pagos, cuentas de jugadores ni servicios de casino operativos.

## Verificar sin publicar

Con Node.js 24.22.1 y npm 12.2.1:

```sh
npm ci
npm run build
npm run lint
npm test
npm run check:assets
npx --no-install playwright install --with-deps chromium firefox
BROWSERS=chromium,firefox npm run test:browser
npx --no-install wrangler deploy --dry-run
```

Ejecutar también las pruebas sobre Wrangler local y la comparación visual descritas en [PRUEBAS.md](PRUEBAS.md). El build y el dry-run no necesitan iniciar sesión. La CI realiza estas verificaciones y no despliega a Cloudflare.

`compatibility_date` selecciona comportamientos del runtime de Workers; no es la versión de Node ni la versión de Wrangler. Antes de modificarla, repetir las pruebas en el runtime local de la versión fijada de Wrangler. Node se usa para construir y ejecutar herramientas; el Worker se ejecuta en workerd. Referencias: [fechas de compatibilidad](https://developers.cloudflare.com/workers/configuration/compatibility-dates/) y [compatibilidad con Node.js](https://developers.cloudflare.com/workers/runtime-apis/nodejs/).

## Publicación manual del editor

Este procedimiento es para una publicación futura autorizada. La rama de reconstrucción y sus pruebas no lo ejecutan.

1. Revisar el diff, la evidencia, el nombre del Worker, la cuenta y las rutas de destino.
2. Autenticar en la cuenta de la empresa con `npx wrangler login` o un token de despliegue suministrado por el entorno. No guardarlo en el repositorio.
3. Ejecutar `npm run deploy`. El script `predeploy` vuelve a construir antes de publicar.
4. Ejecutar `DEMO_ORIGIN=https://URL-DE-PRUEBA npm run test:runtime` y la suite de navegador sobre el entorno publicado. Revisar visualmente escritorio y móvil.
5. Registrar el commit y el identificador de la versión/despliegue entregados por Cloudflare.

No incluir archivos `.env`, `.dev.vars`, HAR, cookies ni credenciales en commits, paquetes o artifacts. Subir una rama a GitHub y publicar un Worker son acciones independientes.

## Proyectos de clientes en Workers for Platforms

El destino de producto acordado es la cuenta de la empresa: cada proyecto se publica como un user Worker en un dispatch namespace y un Worker de despacho decide a cuál enviar cada dominio o ruta. Este repositorio todavía no provisiona namespaces, dominios, recursos por cliente ni el backend operativo. El editor permite revisar el diseño; no constituye por sí solo la plataforma de entrega.

Cloudflare documenta el despliegue conjunto de código y recursos estáticos a un namespace:

```sh
npm run build
npx --no-install wrangler deploy \
  --name proyecto-release-identificador \
  --dispatch-namespace namespace-de-la-empresa
```

El comando es una plantilla manual y **publica** cuando se ejecuta con autenticación válida. Requiere un namespace existente, permisos de la empresa y una configuración apropiada para ese user Worker. Revisar las opciones de rutas y `workers_dev` del Worker del editor antes de reutilizar su configuración; los proyectos se exponen a través del dispatcher, no mediante una URL independiente asumida. Las rutas, límites, bindings y secretos deben asignarse expresamente por proyecto.

La opción `--dispatch-namespace` está confirmada en la [referencia oficial de Wrangler](https://developers.cloudflare.com/workers/wrangler/commands/workers/) y en la [guía de static assets de Workers for Platforms](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/static-assets/). El [despacho dinámico](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/configuration/dynamic-dispatch/) describe cómo seleccionar un user Worker.

Para entregas con recuperación controlada, conservar releases con nombres distintos y cambiar la asignación de routing después de verificarlas. El rollback de la plataforma consistirá en volver a asignar el proyecto a una release conservada, junto con un plan compatible para sus datos. No asumir que los despliegues graduales o los comandos de rollback de Workers normales se aplican igual a los user Workers: consultar los [límites de Workers for Platforms](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/reference/limits/). Cambiar el código activo no revierte escrituras de bases de datos o APIs.

## Recuperación de código y mantenimiento

El punto de partida de esta reconstrucción es `b6d354e9108f72598f319b02a358d01a4089671c`; el estado anterior a la primera recuperación permanece en `86ca4078769509ba9fd26dea5765f048dda2eca3`. Inspeccionar versiones anteriores en un checkout separado. Una reversión de Git debe registrarse como un nuevo cambio revisado, sin forzar ni borrar el historial. Una reversión de código en Git no modifica automáticamente lo que está publicado en Cloudflare.

Dependabot revisa npm y GitHub Actions cada semana. React y React DOM se actualizan juntos, igual que Tailwind y su CLI. Revisar los cambios de Wrangler y sus dependencias transitivas como un conjunto compatible: no forzar una versión transitiva distinta sólo porque su nombre contenga un sufijo de prerelease. Cada actualización debe pasar build, contratos, runtime y revisión visual antes de publicarse.
