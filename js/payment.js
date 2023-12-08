document.addEventListener('DOMContentLoaded', function() {
    // Recuperar los datos del carrito del almacenamiento local
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const orderSummaryElement = document.querySelector('.order-summary');
    let total = 0;

    cartItems.forEach(item => {
        const productElement = document.createElement('p');
        productElement.textContent = `${item.nombre}: $${item.precio.toFixed(2)}`;
        orderSummaryElement.appendChild(productElement);

        total += item.precio;
    });

    const totalElement = document.createElement('p');
    totalElement.classList.add('order-total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    orderSummaryElement.appendChild(totalElement);
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var cardNumber = document.getElementById('card-number').value;
    var cardExpiration = document.getElementById('card-expiration').value;
    var cardCvv = document.getElementById('card-cvv').value;

    // Validar que todos los campos estén llenos
    if (!cardNumber || !cardExpiration || !cardCvv) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Validar el primer dígito de la tarjeta
    if (!['4', '5', '3'].includes(cardNumber.charAt(0))) {
        alert('Número de tarjeta inválido. Debe comenzar con 4, 5 o 3.');
        return;
    }

    // Validar la fecha de expiración
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Los meses en JavaScript van de 0 a 11

    var [expYear, expMonth] = cardExpiration.split('-').map(Number);
    if (expYear < currentYear || (expYear === currentYear && expMonth <= currentMonth)) {
        alert('La fecha de expiración de la tarjeta debe ser futura.');
        return;
    }

    // Procesar el pago si todas las validaciones pasan
    window.location.href = 'pago-realizado.html';
    // Aquí iría el código para procesar el pago o redirigir a otra página
});

