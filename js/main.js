document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

    
        var usuarioEmail = document.getElementById('Email_User').value.trim();
        var contrasena = document.getElementById('Password').value.trim();

        if (usuarioEmail === '' || contrasena === '') {
            alert('Por favor, completa todos los campos.');
        } else {

            window.location.href = '../Album.html';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var togglePassword = document.getElementById('togglePassword');
    var passwordInput = document.getElementById('Password');

    togglePassword.addEventListener('click', function (event) {
        event.preventDefault();

        var passwordVisible = passwordInput.getAttribute('data-password-visible');

        if (passwordVisible === 'true') {
            passwordInput.type = 'password';
            passwordInput.setAttribute('data-password-visible', 'false');
            togglePassword.textContent = 'Mostrar Contraseña';
        } else {
            passwordInput.type = 'text';
            passwordInput.setAttribute('data-password-visible', 'true');
            togglePassword.textContent = 'Ocultar Contraseña';
        }
    });
});
