<!-- registro.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>    
<img src="resource/LogoPetix.png" alt="Imagen de encabezado" class="header-image">
<div class="container">
<h2>Registro</h2>
<form action="registrar.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" name="email" required><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required><br>

        <input type="submit" value="Registrar">
    </form>
    <p>¿Ya tienes una cuenta? <a href="index.html">Inicia sesión aquí</a></p>
</div>

</body>
</html>

    