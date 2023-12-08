<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "d1a52002", "petix");

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtener datos del formulario
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Nombre de la tabla en la base de datos
$tabla = "usuario"; // Reemplaza esto con el nombre real de tu tabla

// Consultar la base de datos para verificar las credenciales
$sql = "SELECT * FROM $tabla WHERE email='$email'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    $fila = $resultado->fetch_assoc();
    if (password_verify($contrasena, $fila['contraseña'])) {
        // Inicio de sesión exitoso, redirigir a Inicio.html
        header('Location: Inicio.html');
        exit(); // Asegúrate de detener la ejecución después de la redirección
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado";
}

// Cerrar la conexión
$conexion->close();
?>
