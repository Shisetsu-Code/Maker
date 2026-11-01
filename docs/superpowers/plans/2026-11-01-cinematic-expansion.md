# Cinematic expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Incorporar 18 mundos nuevos con arte nativo detallado, manteniendo los nueve existentes.
**Architecture:** Una familia Cinematic de 27 mundos, recursos locales individuales, adaptadores existentes de Maker.
**Tech Stack:** JavaScript nativo, Python/Pillow, Playwright, Cloudflare Preview.
**Spec:** docs/superpowers/specs/2026-11-01-cinematic-expansion-design.md

## Global Constraints
- Conservar nueve AVIF/PNG HD existentes y edición guardada por mundo.
- Fijar Temas en 7c4165ba90352dce24ef2c7e888b83db0a1a1499.
- 27 mundos permitidos; entradas desconocidas no forman rutas de recursos.
- Cada portada nueva: ilustración individual, mínimo 1200 px por lado, sin upscale.
- Publicación sólo en cinematic-trial; PR4 sin fusionar; maestros fuera de public.

## Review Focus
- Recarga de portadas personalizadas antiguas y nuevas conserva identidad.
- Cambio de mundo desde ambos selectores sincroniza editor y navegación.
- Registro desconocido se normaliza sin peticiones externas.
- JSON antiguo y nuevo conserva el mundo correcto y sus reglas.
- Reimportación no restaura recortes pequeños ni pierde los adaptadores Maker.

## Tasks
- [x] Respaldar estado actual; implementar ampliación de runtime/editor/importador y pruebas de 27 mundos. Generar paquete de revisión y revisar.
- [x] Generar 18 ilustraciones con imagegen; limpiar y empaquetar PNG/AVIF sin alterar nueve existentes. Verificar resolución, hashes, metadatos y presupuesto.
- [x] Probar módulos, imágenes y recorridos de navegador; revisar resultado visual; documentar.
- [x] Actualizar Preview existente; repetir recorrido publicado. Actualización PR4 y comunicación al cierre.

## Resultado de ejecución
- Respaldo remoto: backup/cinematic-nine-hd-20261101 en fb25702.
- Runtime revisado sin defectos importantes. Revisión final sin defectos importantes; reproducción del importador verificada byte por byte.
- 52 pruebas Node, tres de arte, ocho de privacidad correctas.
- Recorrido completo Maker de 27 mundos y distribución de los 18 nuevos en computadora/celular correctos, tanto localmente como sobre la Preview publicada.
- 27 portadas de 1254×1254 nativos, 14.883.890 bytes AVIF; nueve recursos anteriores intactos.
- Comprobación previa a publicar: 10.394 imágenes, ninguna inválida ni con metadatos pendientes.
- Preview: despliegue abc32a67-b7f0-46b1-9e09-e40366d4b39b. Producción no se modifica.
- Dos fallos de las nuevas pruebas de JSON/imagen se corrigieron esperando la selección/importación asíncrona; no exigieron cambios en el producto.
