# Cinematic Family Trial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans for inline execution. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Probar nueve mundos Cinematic dentro del Maker con respaldo recuperable.

**Architecture:** Importar recursos propios de Temas en un subdirectorio local; adaptar el contrato del iframe y añadir un selector secundario al Maker. Guardar preferencias normalizadas y aislar reglas visuales por mundo. Publicar una versión de vista previa que conserve la versión activa.

**Tech Stack:** HTML/CSS, módulos JavaScript nativos, Node tests, Playwright/Edge, Cloudflare Workers Static Assets.

**Spec:** `docs/superpowers/specs/2026-10-31-cinematic-trial-design.md`

## Global Constraints

- Importar Temas desde `3370909b82c40ee1d8d91768dc6e22ed706132d8`.
- Una familia y nueve mundos; preservar las 17 plantillas anteriores.
- Recursos locales, sin backend nuevo ni operaciones reales.
- Conservar backup y publicar una vista previa separada.

## Review Focus

- Selector o evento de mundo desconocido: normalizar a una opción admitida.
- Cambio de mundo durante una carga: aplicar únicamente la última selección.
- Modo de selección visual activo al cambiar mundo: finalizar selección y separar reglas.
- Ajustes antiguos sin Cinematic: mantener compatibilidad y no borrar preferencias.
- Arte, logo o almacenamiento no disponibles: conservar navegación y mensajes útiles.

## Task 1: Respaldo y registro

- [x] ZIP, bundle y hashes verificados, rama remota de respaldo, base limpia con 43 tests.
- [x] Registrar familia en `scripts/install-cinematic.mjs`; prueba `tests/cinematic-registration.test.mjs` verifica whitelist, paleta, URL, frame independiente, etiqueta y registro idempotente.
- [x] Ver prueba fallar, implementar y ejecutar `npm test`.

## Task 2: Vista Cinematic y contrato Maker

- [x] Copiar archivos necesarios de Temas en `public/muestra/cinematic/`, con script de instalación reproducible y procedencia fuera de public.
- [x] Crear `public/muestra/cinematic-settings.mjs` y `cinematic/maker-bridge.mjs`; probar normalización, nueve mundos, paleta/color de marca y mensajes restringidos por origen/ventana.
- [x] Añadir nombre/logo, ocultar arte, sincronía de portada, selector interno y edición visual mediante `../design-editor.js`.
- [x] Ejecutar tests de módulos y navegador; corregir la prueba antes de implementar cada contrato nuevo.

## Task 3: Controles y persistencia

- [x] Crear `cinematic-controls.js/css`; mostrar mundo y modo de color sólo para Cinematic/lobby, conservar preferencias y query de vista previa.
- [x] Integrar exportación/importación/reset en `design-editor.js`, y scope por mundo en `element-editor.js`.
- [x] Prueba de navegador: los nueve mundos, estados persistentes, colores, marca, panel, aislamiento visual, JSON y móvil; comprobar fallos antes de implementar.

## Task 4: Verificación y entrega de prueba

- [x] Repetir pruebas del Maker afectadas y las nuevas, revisar capturas y limpiar metadatos nuevos.
- [x] Una revisión independiente del cambio; resolver problemas importantes con regresiones.
- [x] Crear PR sobre la rama de privacidad, publicar una Preview independiente, probar URL publicada, enlazar backup y documentación.

## Ledger

- Base: `c68639c`; 43/43 pruebas. ZIP CRC y bundle completos verificados; hashes en el manifiesto de backup.
- Ejecución directa de la prueba aprobada por el usuario; no hay pausa de aprobación adicional para la integración reversible.

- Implementación: 47/47 pruebas de módulos; navegador Cinematic completo, 18 opciones de selector, editor general, edición visual anterior y 17 plantillas originales pasan. Recursos nuevos: 18/18 decodificados, sin metadatos pendientes.
- Revisión independiente del cambio: sin problemas importantes confirmados; se verificaron con navegador los casos de logo blob y sincronización del selector de imagen.
- Entrega: PR #4 en borrador y Preview cinematic-trial. Recorrido de nueve mundos y cuatro tests HTTP publicados correctos; comprobación positiva de que la demo original conserva el estado anterior.
