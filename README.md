Bienvenidos al FORO 
EN este foro podras crear, editar y eliminar Posteos Libremente, comparte informacion con otros usuarios.

Antes de comenzar, asegúrate de crear el archivo .env indicando la configuración necesaria, incluyendo el puerto que corresponda, el nombre de usuario y la contraseña de MySQL, tal como se muestra en el archivo .ejemplo.env proporcionado.

Una vez que hayas configurado el archivo .env, ejecuta el comando `npm install` para reconstruir los módulos de Node y asegurarte de que todas las dependencias estén instaladas correctamente.

Para poner en marcha el servidor, dirígete al archivo "app.js" y buscala opción `sequelize.sync`. Asegúrate de cambiar el valor de `true` a `false`. Esto evitará que Sequelize fuerce la creación de la tabla MySQL en cada inicio del servidor, lo que podría resultar en la pérdida de datos existentes en la base de datos al recrearla.

¡Listo! Con estos pasos, estarás listo para utilizar el foro y gestionar tus Posteos de manera eficiente.


![fer](https://github.com/Fernando-Nieva/Comision-21524-A-Fernando-Nieva/assets/36790887/270693c7-5a74-4a32-94dd-cfccbbe7e9c7)
