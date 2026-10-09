# Maker: verificación funcional del cliente

Alcance pedido: probar el editor y el gestor en localhost dentro de GitHub Actions. No publicar, no incorporar API/chat y no iniciar aún la auditoría de seguridad.

Plan de verificación: ejecutar los ocho recorridos originales y catorce recorridos adicionales en Chromium y Firefox, sirviendo exactamente `dist/`. Comprobar enlace recibido + edición + recarga, pantalla ampliada, feedback de color, conservación de contenido al alternar plantillas/materiales, portada e imágenes exportadas, importación atómica, archivo de plantillas, nuevas composiciones, editor en celular, navegación/FAQ, sliders/fuentes, campos inválidos, material incompatible y coexistencia de versiones.

Las pruebas adicionales están en `tests/functional.py`. Cada escenario usa un contexto limpio y genera capturas, trazas y JSON bajo `artifacts/<browser>/functional/`. Los errores encontrados se reproducen antes de corregirlos. Las pruebas no constituyen una auditoría de seguridad ni prueban integración con servicios externos.
