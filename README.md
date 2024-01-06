# Herramienta Web para visualizar estadísticas del juego Rollercoin

## To-Do
1. Modificar la forma que se solicitan los mineros para listarlos en la tabla cuando insertamos nuestro perfil, es decir, solicitar todos los mineros y a sus vez todos los mineros que tenemos. La respuesta de la API debe ser un json que dentro tenga todos los mineros en una clave-valor y también todos los mineros del usuario que hemos introducido en otra clave-valor. data : { "miners": [], "owned_miners": []}
2. Tras realiar la modificación de como se solicitan los datos una vez insertamos un usuario, añadir columna "owned" para poder filtrar por los que tenemos y los que no.