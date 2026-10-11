# Rushybet Replica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recuperar toda la muestra de Rushybet y publicar una réplica de demostración verificable en GitHub privado y Cloudflare.

**Architecture:** Conservar los documentos, scripts, estilos y rutas recuperados de los HAR. Servirlos mediante Workers Static Assets y adaptar únicamente las dependencias externas necesarias mediante un Worker y datos de demostración.

**Tech Stack:** Node.js, HTML, CSS, JavaScript, pruebas nativas de Node, Cloudflare Workers y Wrangler, GitHub CLI.

**Spec:** `outputs/rushybet-replica-especificacion.md`.

## Global Constraints

- Replicar toda la muestra capturada en los dos HAR del usuario: personalizador, lobby, panel y variantes visuales.
- La primera entrega conservará la apariencia y las interacciones de demostración; las mejoras se definirán después de comparar esta base con el original.
- Crear un repositorio privado llamado rushybet-replica en la cuenta GitHub conectada Shisetsu-Code.
- Excluir HAR completos, cookies, cabeceras de autorización, credenciales y datos de sesión.
- No se declarará fidelidad 1:1 verificada hasta contar con una comparación visual suficiente.
- Trabajar en este chat mediante el método que el usuario seleccione. Guardar informes y entregables visibles en `outputs/`; intermediarios en `work/`.

## Review Focus

1. Recursos duplicados con respuestas fallidas o incompletas: elegir una respuesta válida, conservando la ruta correcta.
2. URLs externas con parámetros de sesión: localizar recursos sin copiar credenciales ni ejecutar sesiones capturadas.
3. Rutas codificadas o con segmentos de escape: impedir escritura fuera del directorio de salida y evitar colisiones silenciosas.
4. Cambios rápidos de plantilla, dispositivo y vista: mantener la personalización y evitar vistas en blanco.
5. APIs o juegos externos ausentes: presentar estados de demostración útiles sin aparentar una operación real completada.

---

## Estructura de archivos

- `scripts/har-recovery.mjs`: selección, decodificación y extracción de respuestas; no conserva solicitudes ni cabeceras.
- `scripts/recover.mjs`: entrada CLI, recibe rutas HAR mediante argumentos y escribe aplicación e inventario.
- `scripts/check-assets.mjs`: comprueba referencias locales y genera el informe de faltantes.
- `tests/har-recovery.test.mjs`: pruebas de recuperación sobre fixtures sintéticos.
- `public/muestra/`: seis documentos principales y dependencias con sus rutas originales.
- `public/assets/external/`: recursos externos recuperados, con identificadores estables sin parámetros sensibles.
- `public/index.html`: entrada que dirige al personalizador.
- `src/demo-api.mjs`: contratos de demostración identificados en los consumidores recuperados.
- `src/worker.mjs`: enrutamiento de API y delegación de recursos al binding ASSETS.
- `tests/demo-api.test.mjs`: pruebas de contratos y aislamiento de servicios externos.
- `wrangler.jsonc`, `package.json`, `.gitignore`, `README.md`: despliegue reproducible e instrucciones.
- `work/recovery-manifest.json`: inventario intermedio de recursos; excluido del repositorio.
- `outputs/rushybet-replica-validacion.md`: páginas y estados probados, diferencias, faltantes y enlaces finales.

## Tarea 1: Recuperar una base local reproducible

**Interfaces:** `recoverArchives(paths: string[], outputDir: string): Promise<RecoveryReport>`, exportada desde `scripts/har-recovery.mjs`. `RecoveryReport` contiene `written: number`, `missing: string[]` y `conflicts: string[]`; los identificadores no incluyen queries ni cabeceras. El CLI acepta `--out <directorio> <HAR1> <HAR2>`.

- [ ] Inspeccionar el historial local y confirmar que solo contiene los documentos de esta tarea; mantener el trabajo en este checkout nuevo y dedicado.
- [ ] Escribir pruebas sintéticas `prefersSuccessfulBody`, `decodesBinaryBase64`, `rejectsTraversal`, `reportsPathCollision` y `omitsSessionData`. Afirmar que una respuesta 200 válida gana a una 404, que bytes base64 se recuperan exactamente, que ningún archivo sale de `outputDir`, que las colisiones se reportan y que un token centinela de la solicitud no aparece en la salida.
- [ ] Ejecutar `rtk proxy node --test tests/har-recovery.test.mjs`; comprobar fallo por módulo todavía inexistente.
- [ ] Implementar la recuperación con selección determinista de cuerpos válidos, validación de ruta y extracción de recursos del dominio original y externos necesarios. Leer ambos HAR originales sin copiarlos al repositorio. Escanear los cuerpos candidatos por datos sensibles antes de incluirlos.
- [ ] Ejecutar las pruebas y recuperar ambos HAR hacia `public/`. Comprobar que están presentes los seis HTML principales y sus scripts y estilos identificados.
- [ ] Implementar `check-assets.mjs` para resolver referencias HTML/CSS y rutas literales usadas por scripts; informar por separado las referencias dinámicas que requieran verificación en navegador. Localizar fuentes y recursos externos recuperados y actualizar sus referencias conservando el contenido visual.
- [ ] Crear la entrada al personalizador y documentar el comando de recuperación. Guardar inventario intermedio y lista de faltantes; comprobar que los archivos publicados no incluyen HAR ni solicitudes capturadas.
- [ ] Guardar esta base en un commit con `rtk git add` y `rtk git commit`.

## Tarea 2: Adaptar la muestra para ejecución independiente

**Interfaces:** `handleDemoRequest(request: Request): Promise<Response | null>`, exportada desde `src/demo-api.mjs`; devuelve `null` para rutas que no controla. `src/worker.mjs` exporta `{ fetch(request, env): Promise<Response> }`; delega a `env.ASSETS.fetch(request)` cuando la API devuelve `null`.

- [ ] Inspeccionar los consumidores de `/api/demo/evento`, `/api/health`, `/api/monitoreo`, `/api/muestra/juego-demo`, `/api/soporte/`, `/api/torneo` y `/api/winners`; registrar en `work/api-contracts.json` los métodos, campos consumidos y estados esperados. Incluir solamente rutas realmente necesarias para recorrer la muestra.
- [ ] Escribir pruebas de cada contrato requerido con assertions sobre los campos que utiliza el consumidor. Agregar `neverContactsOriginalServices` y `missingGameHasDemoState`: interceptar `fetch` externo y comprobar cero llamadas; comprobar que un juego sin integración devuelve un estado que la interfaz presenta como demostración.
- [ ] Ejecutar `rtk proxy node --test tests/demo-api.test.mjs`; comprobar los fallos iniciales antes de implementar.
- [ ] Implementar `handleDemoRequest` con datos ficticios coherentes y estados explícitos para acciones no disponibles. Sustituir los enlaces de sesión o lanzadores externos por la experiencia local de demostración cuando el flujo lo requiera. Conservar estilos, controles y rutas recuperados.
- [ ] Configurar Worker y ASSETS en `wrangler.jsonc`, usando documentación actual y la versión instalada de Wrangler. Añadir scripts de ejecución, pruebas y despliegue, con versiones fijadas y archivo de dependencias si se necesitan paquetes.
- [ ] Ejecutar ambas suites; comprobar contratos, rutas API y recursos mediante una instancia local de Wrangler.
- [ ] Verificar en navegador que los cambios rápidos entre las variantes azul, blaze, brasa y clásica, lobby/panel y computadora/móvil conservan los parámetros admitidos y no dejan vistas vacías. Corregir los problemas observados y registrar las limitaciones.
- [ ] Guardar la adaptación verificada en un commit.

## Tarea 3: Comparación, publicación y entrega

**Interfaces:** aplicación de Tarea 2, comandos reproducibles documentados y reporte final en `outputs/rushybet-replica-validacion.md`.

- [ ] Revisar visualmente las seis vistas en computadora y móvil. Obtener referencia visual del original cuando sea accesible mediante navegación de solo lectura; no ejecutar acciones operativas. Registrar los estados comparados y cualquier diferencia material.
- [ ] Corregir únicamente diferencias necesarias para la réplica base; mantener las mejoras de producto fuera de esta etapa. Repetir las comprobaciones afectadas por cada corrección.
- [ ] Ejecutar la comprobación de recursos, las pruebas y la validación de configuración/despliegue de Wrangler. Revisar el contenido a publicar para excluir tokens, cookies, datos de sesión y archivos intermedios.
- [ ] Revisar la entrega completa mediante el método de revisión indicado por la guía de ejecución seleccionada; resolver hallazgos que impidan los criterios de aceptación.
- [ ] Comprobar el nombre en GitHub. Si está disponible, crear `Shisetsu-Code/rushybet-replica` privado y subir los commits. Si existe, inspeccionar si corresponde a esta tarea antes de reutilizarlo; usar un nombre disponible si pertenece a otro proyecto y comunicarlo.
- [ ] Comprobar autenticación de Cloudflare. Desplegar con Wrangler a una URL de prueba del proyecto y comprobar desde el navegador la entrada, variantes, lobby, panel y estados de demo. Si falta autenticación, completar lo independiente y solicitar el acceso pendiente.
- [ ] Completar README e informe final con enlaces, estados verificados, faltantes y pasos de reproducción; subir el informe final al repositorio.
- [ ] Entregar repo y URL de prueba. Identificar la réplica base mediante su commit para que las mejoras posteriores sean comparables y reversibles.

## Revisión del plan

El plan cubre recuperación, personalización, variantes, interacciones de muestra, recursos faltantes, aislamiento de sesiones, repositorio privado, despliegue y verificación visual. Las cinco condiciones de Review Focus tienen comprobaciones en las tareas que las implementan. Los contratos API se fijan a partir del código recuperado antes de escribir sus adaptadores, evitando inventar esquemas incompatibles.
