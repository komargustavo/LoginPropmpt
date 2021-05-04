// a. Definir dos constantes (variables) llamadas usuario y password y asignar el valor administrador y 1234 respectivamente
// b. Preguntar al usuario que ingresa al sitio a través de dos prompts el usuario y la contraseña del sistema
// c. Si el usuario y la contraseña coinciden con las del sistema (variable usuario y password) mostrar en el navegador un mensaje de bienvenida
// d. Si no coinciden mostrar usuario o contraseña incorrectos


let usuario, contraseña;
const mensaje_usuario = document.querySelector('#mensaje_usuario');
const mensaje_contraseña = document.querySelector('#mensaje_contraseña');
const mensaje = document.querySelector('#mensajes');

function carga() {
    usuario = prompt('Ingrese su Usuario: ');
    contraseña = prompt('Ingrese su contraseña: ');

    mensaje_usuario.innerHTML = (usuario);
    mensaje_contraseña.innerHTML = (contraseña);
    validar();
}


function validar() {
    if (usuario == "administrador" && contraseña == "1234") {
        mensaje.innerHTML = ('Bienvenido');
    } else {
        mensaje.innerHTML = ('usuario ó contraseña incorrectos');
    }
}
