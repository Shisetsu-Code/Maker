# Límites y seguridad de la demo

Las plantillas son datos declarativos con claves y valores permitidos. Se rechazan formatos desconocidos, campos extra, IDs inválidos, tamaños excesivos y componentes no implementados. Los textos se escapan al renderizar. No se aceptan archivos SVG ni enlaces de imágenes remotas. Los raster se decodifican y reexportan mediante Canvas antes de guardarlos.

La vista previa tiene sandbox sin permisos de scripts. El HTML exportado bloquea scripts, conexiones y formularios mediante Content Security Policy. Su CSS proviene exclusivamente del motor propio. Las versiones de plantillas no se sobrescriben en silencio.

El gestor NO es un panel seguro de producción. No tiene identidad, roles ni almacenamiento compartido: solamente modifica datos locales del navegador. Cualquier autenticación o credencial de integración deberá implementarse en servidor en otra etapa. Nunca añadir claves de API a archivos JSON o al frontend.

GitHub Actions usa lectura para las verificaciones. Pages sólo dispone de permisos de despliegue y se encadena a verificaciones exitosas de un push del mismo repositorio; no publica artefactos de pull requests externos.
