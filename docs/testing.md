# Pruebas locales antes de Cloudflare

Decisión: no utilizar GitHub Pages. GitHub Actions es el entorno de prueba, no un alojamiento público. Cada ejecución inicia un servidor Node en `127.0.0.1:4173` dentro de su runner y lo apaga al finalizar. No hace falta instalar un runner en la PC del usuario.

## Flujo de verificación

1. `npm test` verifica el motor y la política de no desplegar.
2. `npm run build` crea `dist/` una sola vez.
3. Dos jobs descargan ese mismo artefacto y ejecutan `tests/localhost.py`: Chromium y Firefox, en paralelo.
4. Los ocho escenarios existentes comprueban edición, persistencia, importación, exportación HTML, validación, compartir, duplicar/archivar/restaurar, logos, secciones e historial.
5. El escenario visual recorre el catálogo compilado completo y sus materiales, en escritorio y vista previa móvil. Con el catálogo inicial son 24 vistas por navegador. También comprueba el editor a 390 px.
6. Se conservan capturas por combinación, trazas, errores HTTP/JavaScript y resumen JSON. El contexto principal bloquea y reporta solicitudes fuera de loopback. No se contactan servicios de la referencia original.

`tests/browser.py` conserva los escenarios base; `tests/localhost.py` es el punto de entrada recomendado y añade readiness HTTP real, prueba de `dist/`, cierre del servidor y evidencia por navegador. Los datos usados en las pruebas son ficticios.

## Ejecutar en una PC

```sh
npm test
npm run build
python -m pip install playwright==1.56.0
python -m playwright install chromium firefox
python tests/localhost.py
```

Para Firefox en PowerShell:

```powershell
$env:BROWSER = 'firefox'
python tests/localhost.py
Remove-Item Env:BROWSER
```

En Linux puede ser necesario `python -m playwright install --with-deps chromium firefox` para instalar las bibliotecas del sistema.

## Revisar resultados

En Actions, abrir la corrida de **Maker checks**. `maker-static-site` es el build, no una publicación ni una prueba de que todos los navegadores hayan pasado. Revisar los jobs de aceptación: ambos deben terminar correctamente. Los artefactos `maker-browser-evidence-chromium` y `maker-browser-evidence-firefox` incluyen `summary.json`, capturas y trazas. Retención: siete días; el código y los logs de Actions siguen la configuración del repositorio.

No hay workflow de Pages, credenciales de Cloudflare ni despliegue automático. Cloudflare queda para una etapa posterior, cuando el usuario lo indique. El gestor continúa siendo local al navegador: estas pruebas no convierten la demo en un SaaS autenticado o sincronizado.
