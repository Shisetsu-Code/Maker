# Maker Studio

Editor visual del cliente y gestor de plantillas declarativas. Primera etapa: diseño, plantillas y exportación. Sin API de integración ni chat.

**Se desarrolla y prueba en localhost dentro de GitHub Actions. No se publica en GitHub Pages ni en Cloudflare todavía.** No hace falta configurar Pages ni instalar un runner en tu PC.

## Probar en tu PC

Requiere Node.js 22 o superior. No hay dependencias de ejecución que instalar.

```sh
git clone https://github.com/Shisetsu-Code/Maker.git
cd Maker
npm run dev
```

Abrir `http://127.0.0.1:4173/`. No abrir `index.html` con doble clic: los módulos y el catálogo necesitan un servidor HTTP. El HTML exportado sí se puede abrir como archivo.

## Qué incluye

- Editor de marca, colores, logo raster, portada, textos, tipografías y secciones.
- Cuatro distribuciones propias: Órbita, Prisma, Atlas y Vértice.
- Materiales Plano, Glass y Metal, independientes de la distribución.
- Vista previa de escritorio y celular, ampliación, deshacer/rehacer y guardado local.
- Importar, duplicar, archivar/restaurar y descargar plantillas JSON versionadas.
- Proyecto portable con su plantilla e imágenes; enlace de diseño sin imágenes.
- Exportación HTML autocontenida con el mismo renderer de la vista previa, sin JavaScript.

El catálogo ilustrativo es de muestra. No hay juegos, pagos, saldos operativos, cuentas ni chat.

## Plantillas dinámicas

En **Plantillas**, subir `templates/aurora.template.json` o duplicar una de las existentes. El archivo sólo admite el contrato `maker-template-1`: nada de HTML, CSS ni JavaScript ejecutable.

Las nuevas composiciones de bloques se cargan sin reconstruir el motor. Un componente o interacción que todavía no exista necesita desarrollo. Nombre y versión identifican una instantánea inmutable; un cambio requiere nueva versión o ID. Los proyectos incluyen su propia copia para no romperse al archivar plantillas.

**Las cargas son locales al navegador.** Para distribuir un catálogo a todos los usuarios: exportarlo desde el gestor, revisar el JSON y reemplazar `templates/catalog.json` en el repositorio. La próxima compilación lo incluirá y lo combinará con las plantillas locales existentes al abrir el editor.

## Guardado y privacidad

Esta demo no tiene autenticación ni backend. El gestor no es un área administrativa protegida. Los cambios se guardan en `localStorage` de este origen; no se sincronizan entre dispositivos. Descargar el proyecto es la copia de respaldo. Las imágenes se redimensionan en el navegador y viajan dentro del proyecto, no se suben a un servidor.

El enlace compartido incluye contenido, plantilla y estilo, pero omite logo y portada. No es un enlace privado. En localhost, sólo funciona para quien tenga la aplicación disponible en ese mismo origen; no crea un sitio en Internet. No cargar datos sensibles en una demo.

## Pruebas en GitHub Actions

**Maker checks** ejecuta pruebas unitarias y compila `dist/`. Después, dos jobs descargan exactamente ese build, lo sirven en `127.0.0.1:4173` dentro de runners de GitHub y lo prueban con Chromium y Firefox. El servidor se cierra al terminar; no queda una URL pública.

Se recorren todas las plantillas y materiales del catálogo en escritorio y móvil. Los artefactos de cada corrida incluyen:

- `maker-static-site`: aplicación compilada. Su existencia no implica que todas las pruebas hayan pasado.
- `maker-browser-evidence-chromium` y `maker-browser-evidence-firefox`: capturas por combinación, trazas, log de servidor y `summary.json` con SHA y resultados.

Los artefactos se conservan siete días. Revisar la pestaña Actions y el resultado de ambos jobs; este README no sustituye una corrida real. [Detalle del flujo y comandos locales](docs/testing.md).

```sh
npm test
npm run build
python -m pip install playwright==1.56.0
python -m playwright install chromium firefox
python tests/localhost.py
```

## Arquitectura

`src/core.js`: contratos, validaciones, versiones, historial, enlaces y contraste.
`src/storage.js`: persistencia local con errores visibles.
`src/render.js` + `src/site.css`: renderer compartido, componentes y materiales.
`src/app.js` + `src/editor.css`: editor y catálogo.
`templates/`: catálogo inicial y ejemplo importable.

Implementación propia basada en el flujo de la referencia aportada: barra de controles, vista previa, personalización y código de diseño. No contiene el HAR, credenciales, endpoints, marcas ni recursos gráficos del proveedor original. No es una copia de su backend.

Próxima etapa, fuera de esta entrega: autenticación, catálogo compartido en servidor, publicación multisitio en Cloudflare, API de integración y chat. No hay despliegues automáticos configurados.
