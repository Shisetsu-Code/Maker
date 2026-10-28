# Maker: reconstrucción reproducible para Cloudflare

## Objetivo autorizado

Reconstruir el Maker existente desde su código y el HAR inicial aportado, conservando su comportamiento y sus trece plantillas, con dependencias actuales y una compilación reproducible que priorice Cloudflare Workers. El usuario autorizó la ejecución el 28 de octubre de 2026 después de la discusión de arquitectura.

## Referencia y límites

- Referencia funcional: `b6d354e9108f72598f319b02a358d01a4089671c` de `main`.
- El HAR es evidencia privada de recuperación. No se publica, no se reproducen sus peticiones ni se incorporan cookies, cabeceras, credenciales o datos operativos.
- Conservar editor, selector de trece plantillas, lobby/panel, escritorio/móvil, colores, nombre, logo, tipografías, fondos, importación/exportación y edición de Resort.
- Conservar contratos de demostración, rutas públicas y recursos locales. No convertir la demo en una integración operativa de apuestas, pagos o cuentas.
- El sistema comercial prepago y el aprovisionamiento multiempresa discutidos son trabajo posterior: aquí se mantiene el comportamiento existente y se prepara su base para Workers for Platforms.
- Trabajar en `codex/rebuild-cloudflare`; no modificar ni desplegar `main` automáticamente.

## Enfoque elegido por el implementador

Recuperar la lógica existente como fuentes JavaScript ESM legibles, separar las bibliotecas incorporadas y compilar desde paquetes npm declarados. Esto conserva mejor la fidelidad que reescribir la interfaz desde una maqueta. Una actualización exclusiva de Wrangler dejaría sin resolver los bundles; reemplazar el Maker por la otra rama perdería las plantillas y el comportamiento actual.

El navegador recibe archivos generados desde `src/client/` y estilos generados desde `src/styles/`. Los recursos estáticos siguen en `public/`. La salida completa para Workers es `dist/public/`; no debe contener el HAR ni código fuente auxiliar. esbuild conserva los nombres de salida públicos y Tailwind regenera sus utilidades con la versión declarada. Las bibliotecas de React/Zod se importan desde npm, sin copias antiguas vendorizadas.

## Dependencias y operación

Versiones verificadas el 28/10/2026: Wrangler 4.154.0, React/React DOM 19.3.1, Zod 4.6.7, Tailwind/@tailwindcss/cli 4.3.3, esbuild 0.28.2, Playwright 1.64.1. Node 24.22.1 LTS y npm 12.2.1 se fijan para desarrollo y CI. Se conserva el conjunto de dependencias transitivas que soporta cada herramienta; no se fuerzan incompatibilidades para borrar etiquetas beta de dependencias internas de Wrangler.

La compilación y pruebas se ejecutan sin credenciales Cloudflare. El despliegue requiere configuración explícita y autenticación externa; soportar la salida para Workers y documentar el uso en un dispatch namespace WFP.

## Criterios de aceptación

1. Los trece diseños y el panel se cargan y mantienen sus controles y datos demo.
2. La actualización de una dependencia cambia efectivamente los bundles publicados; no quedan React/Zod antiguos en la salida.
3. Compilación desde un checkout limpio con `npm ci`, sin depender del HAR o paquetes globales.
4. Pruebas de navegador en escritorio y móvil; comparación visual contra la referencia, con desvíos investigados.
5. Pruebas unitarias, de runtime Workers, recursos y despliegue en seco verificadas.
6. CI reproduce la instalación, compilación y pruebas; actualizaciones de dependencias propuestas automáticamente.
7. La documentación describe el origen de las fuentes reconstruidas, cómo modificarlas y qué validación se realizó.
