# Maker Studio

Editor visual del cliente y gestor de plantillas declarativas. Primera etapa: diseño, plantillas y exportación. Sin API de integración ni chat.

## Probar

Requiere Node.js 22 o superior. No hay dependencias de ejecución que instalar.

```sh
git clone https://github.com/Shisetsu-Code/Maker.git
cd Maker
npm run dev
```

Abrir `http://127.0.0.1:4173/Maker/`. No abrir `index.html` con doble clic: los módulos y el catálogo necesitan un servidor HTTP. El HTML exportado sí se puede abrir como archivo.

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

**Las cargas son locales al navegador.** Para distribuir un catálogo a todos los usuarios: exportarlo desde el gestor, revisar el JSON y reemplazar `templates/catalog.json` en el repositorio. La próxima publicación lo ofrecerá a los navegadores nuevos y lo combinará con las plantillas locales existentes.

## Guardado y privacidad

Esta demo no tiene autenticación ni backend. El gestor no es un área administrativa protegida. Los cambios se guardan en `localStorage` de este origen; no se sincronizan entre dispositivos. Descargar el proyecto es la copia de respaldo. Las imágenes se redimensionan en el navegador y viajan dentro del proyecto, no se suben a un servidor.

El enlace compartido incluye contenido, plantilla y estilo, pero omite logo y portada. Es público para cualquiera que lo reciba, no un enlace privado. No cargar datos sensibles en una demo.

## Pruebas y GitHub

```sh
npm test
npm run build
python -m pip install playwright==1.56.0
python -m playwright install chromium
python tests/browser.py
```

`Maker checks` ejecuta sintaxis, pruebas unitarias y aceptación Chromium en GitHub Actions. Guarda capturas/trazas en `maker-browser-evidence` y la aplicación estática en `maker-static-site` durante siete días. Los resultados vigentes están en la pestaña Actions; este README no sustituye una corrida real.

`Deploy Maker demo` publica `dist/` en GitHub Pages después de un push a main que haya superado las pruebas. Si Pages no estaba activado y falla el paso Configure Pages, elegir **Settings → Pages → Build and deployment → Source: GitHub Actions** y ejecutar ese workflow nuevamente. No se requieren tokens de terceros en el navegador.

## Arquitectura

`src/core.js`: contratos, validaciones, versiones, historial, enlaces y contraste.
`src/storage.js`: persistencia local con errores visibles.
`src/render.js` + `src/site.css`: renderer compartido, componentes y materiales.
`src/app.js` + `src/editor.css`: editor y catálogo.
`templates/`: catálogo inicial y ejemplo importable.

Implementación propia basada en el flujo de la referencia aportada: barra de controles, vista previa, personalización y código de diseño. No contiene el HAR, credenciales, endpoints, marcas ni recursos gráficos del proveedor original. No es una copia de su backend.

Próxima etapa, fuera de esta entrega: autenticación, catálogo compartido en servidor, publicación multisitio, Cloudflare, API de integración y chat.
