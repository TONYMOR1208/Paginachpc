// Función para mostrar y ocultar la contraseña
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const passwordToggle = passwordField.nextElementSibling;
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordToggle.textContent = '🙈';  // Cambiar ícono cuando se muestra la contraseña
    } else {
        passwordField.type = 'password';
        passwordToggle.textContent = '👁️';  // Cambiar ícono cuando se oculta
    }
}

// Función para validar el formulario de registro
function validateRegisterForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }
    
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    
    // Puedes agregar más validaciones si es necesario
    return true;
}
