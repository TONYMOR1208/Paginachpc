// Función para mostrar y ocultar la contraseña
function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordToggle = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.textContent = '🙈';  // Cambiar ícono cuando se muestra la contraseña
    } else {
        passwordField.type = 'password';
        passwordToggle.textContent = '👁️';  // Cambiar ícono cuando se oculta
    }
}

// Función para validar el formulario
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica si el correo electrónico y la contraseña están vacíos
    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    // Validación adicional para el correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex básico para validar el formato del correo
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Aquí podrías agregar una verificación real de las credenciales del usuario
    // Por ahora, asumiremos que el inicio de sesión es exitoso.

    // Redirigir a la página principal
    window.location.href = " Principal.html"; // Cambia esto por la URL de tu página principal

    // Si todas las validaciones pasan
    return false; // Previene el envío del formulario porque la redirección ya se maneja
}
