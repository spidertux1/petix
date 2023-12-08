<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "d1a52002", "petix");

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

// Nombre de la tabla en la base de datos
$tabla = "usuario"; // Reemplaza esto con el nombre real de tu tabla

$sql = "INSERT INTO $tabla (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contrasena')";

if ($conexion->query($sql) === TRUE) {
    // Registro exitoso, redirigir a Inicio.html
    header('Location: Inicio.html');
    exit(); // Asegúrate de detener la ejecución después de la redirección
} else {
    echo "Error al registrar: " . $conexion->error;
}

// Cerrar la conexión
$conexion->close();
?>


