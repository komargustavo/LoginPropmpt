// a. Definir dos constantes (variables) llamadas usuario y password y asignar el valor administrador y 1234 respectivamente
// b. Preguntar al usuario que ingresa al sitio a través de dos prompts el usuario y la contraseña del sistema
// c. Si el usuario y la contraseña coinciden con las del sistema (variable usuario y password) mostrar en el navegador un mensaje de bienvenida
// d. Si no coinciden mostrar usuario o contraseña incorrectos

// Variables
const usuario = document.querySelector('#usuario');
const contraseña = document.querySelector('#contraseña');
const mensaje = document.querySelector('#mensajes');


function carga() {
    addEventListener();

}
function addEventListener() {
    usuario.addEventListener('blur', validar());
    contraseña.addEventListener('blur', validar());
}

function validar() {
    if (usuario.value == "administrador" && contraseña.value == "1234") {
        mensaje.innerHTML = ("bienvenido")
    } else {
        mensaje.innerHTML = ("Usuario ó contraseña incorrecta");
    }
}