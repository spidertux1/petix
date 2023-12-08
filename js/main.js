var contador = 0; // Variable global para el contador
var total = 0;            
            
        
function actualizarContador() {
    var contadorElemento = document.getElementById('contadorCarrito');
    contadorElemento.textContent = contador; // Actualiza el texto del contador
}

function actualizarTotal() {
    var totalElemento = document.getElementById('totalCarrito');
    totalElemento.textContent = 'Total: $' + total.toFixed(2); // Actualiza el texto del total
}

function agregarAlCarrito(nombre, precio) {
    var listaCarrito = document.getElementById('listaCarrito');
    var item = document.createElement('li');
    item.classList.add('item');
    item.innerHTML = nombre + ' - $' + precio + ' <span class="material-icons" onclick="eliminarDelCarrito(this, ' + precio + ')">delete</span>';
    listaCarrito.appendChild(item);
    
    total += precio;
    contador++; // Incrementa el contador
    actualizarContador(); // Actualiza el contador en la interfaz
    actualizarTotal(); // Actualiza el total
    verificarCarrito(); // Verifica el estado del carrito
}

function eliminarDelCarrito(button, precio) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);
    
    contador--; // Decrementa el contador
    total -= precio;
    actualizarContador(); // Actualiza el contador en la interfaz
    actualizarTotal(); // Actualiza el total
    verificarCarrito(); // Verifica el estado del carrito
}

function toggleCarrito() {
    var carrito = document.getElementById('carrito');
    var estadoCarrito = carrito.style.display;
    carrito.style.display = estadoCarrito === 'block' ? 'none' : 'block';
    verificarCarrito(); // Verifica el estado del carrito cuando se togglea
}

function verificarCarrito() {
    var listaCarrito = document.getElementById('listaCarrito');
    var mensajeCarritoVacio = document.getElementById('mensajeCarritoVacio');
    // No necesitas actualizar el contador aquí si ya lo estás haciendo en otra función
    mensajeCarritoVacio.style.display = listaCarrito.children.length === 0 ? 'block' : 'none';
}

document.getElementById('botonPagar').addEventListener('click', function() {
    if (total > 0) {
        // Guardar los datos del carrito en el almacenamiento local
        var cartItems = [];
        document.querySelectorAll('#listaCarrito .item').forEach(function(item) {
            cartItems.push({
                nombre: item.textContent.split(' - $')[0],
                precio: parseFloat(item.textContent.split(' - $')[1])
            });
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Redirigir a la página de pago
        window.location.href = 'pagina-de-pago.html';
    } else {
        alert('Tu carrito está vacío.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Borrar los datos del carrito si existen
    if (localStorage.getItem('cartItems')) {
        localStorage.removeItem('cartItems');
    }

    // El resto de tu código para la página principal...
});

// Espera a que el DOM se cargue completamente antes de adjuntar los manejadores de eventos
document.addEventListener('DOMContentLoaded', function () {
  // Agrega un manejador de eventos para cada enlace
  document.querySelector('a[href="#celulares"]').addEventListener('click', function (e) {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace
    mostrarContenido('celulares'); // Muestra el contenido de celulares
  });

  document.querySelector('a[href="#tabletas"]').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarContenido('tabletas');
  });

  document.querySelector('a[href="#laptops"]').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarContenido('laptops');
  });

  // Función para mostrar el contenido correspondiente y ocultar los otros
  function mostrarContenido(id) {
    // Oculta todos los contenedores de productos
    document.querySelectorAll('.info-celulares, .info-tabletas, .info-laptops').forEach(function (contenedor) {
      contenedor.style.display = 'none';
    });

    // Muestra el contenedor correspondiente
    document.getElementById(id).style.display = 'block';
  }
});






