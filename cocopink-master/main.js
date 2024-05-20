    //FORMULARIO DE CONTACTO

    var formulario = document.getElementById('formulario');
var campoCorreo = document.getElementById('correo');
var campoTelefono = document.getElementById('telefono');

formulario.addEventListener('submit', function(event) {

    if (!campoCorreo.value.match(/^\S+@\S+.\S+$/)) {
        alert('ingresa un correo válido.');
        event.preventDefault(); 
    }


    if (!campoTelefono.value.match(/^\d{10}$/)) {
        alert('ingresa un número de teléfono válido');
        event.preventDefault(); 
    }
});
