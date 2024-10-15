document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = false; // Simular si el usuario está logueado (cambiar a false para no logueado)

    // Opciones del menú
    const loginLink = document.getElementById('login');
    const registerLink = document.getElementById('register');
    const cartLink = document.getElementById('cart');
    const logoutLink = document.getElementById('logout');

    // Precios de los productos
    const prices = document.querySelectorAll('.price');

    // Productos
    const products = document.querySelectorAll('.product');

    // Verificar si el usuario está logueado
    if (isLoggedIn) {
        // Usuario logueado: ocultar opciones de inicio y registro, mostrar carrito y cerrar sesión
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        cartLink.style.display = 'block';
        logoutLink.style.display = 'block';

        // Mostrar precios
        prices.forEach(price => {
            price.style.display = 'inline';
        });

        // Habilitar clic en productos
        products.forEach(product => {
            product.addEventListener('click', function() {
                const productId = this.getAttribute('data-product-id');
                window.location.href = `product-detail.html?product=${productId}`; // Redirigir a la página de detalles del producto
            });
        });
    } else {
        // Usuario no logueado: ocultar carrito y cerrar sesión, mostrar inicio y registro
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        cartLink.style.display = 'none';
        logoutLink.style.display = 'none';

        // Deshabilitar clic en productos
        products.forEach(product => {
            product.addEventListener('click', function() {
                alert("Por favor, inicie sesión para ver los detalles del producto.");
            });
        });
    }
});
