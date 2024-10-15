// Función para validar el formulario de recuperación de contraseña
function validateRecoverForm() {
    const recoverEmail = document.getElementById('recover-email').value;

    if (recoverEmail === "") {
        alert("Por favor, complete el campo de correo electrónico.");
        return false;
    }
    
    // Puedes agregar más validaciones si es necesario
    alert("Se ha enviado un enlace de recuperación a " + recoverEmail);
    return true;
}
