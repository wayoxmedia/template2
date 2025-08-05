"use strict";
// Este es un comentario de una sola línea

/**
  * Ejemplo de código para un formulario de registro de usuario
  */


/*
Vamos a hacer un código que recopile los datos que el usuario introdujo en un formulario
y los vamos a procesar, primero lo validamos, lo enviamos al servidor
y si la información fue procesada correctamente, mostramos un mensaje de éxito,
pero si la información no se pudo procesar en el servidor, mostramos un mensaje de error

Veo que mi formulario requiere obtener 3 elementos que el usuario potencialmente introdujo
Entonces tengo que crear 3 variables para poder acceder a esos elementos
y poder manipularlos. En este caso, los elementos son:
1. El nombre del usuario
2. La contraseña del usuario
3. El checkbox donde el usuario decide si quiere que sus datos sean recordados.

Potencialmente, quiero tener acceso al boton de enviar el formulario.
Podemos hacerlo usando vanilla javascript (ECMAScript 6 o ES6) o usando jQuery.

Los elementos de un form los vamos a llamar usando la siguiente notación:
los inputs, empiezan con 'ipt' (input),
los selects, empiezan con 'sel' (select),
y los botones, empiezan 'btn' (button).
Los radios empiezan con 'rdo' (radio),
y los checkboxes empiezan con 'chk' (checkbox).
Las opciones en un select empiezan con 'opt'
y los textos de un textarea empiezan con 'txt' (text area).


Recordemos que La web y JavaScript trabajan con asincronía.

*/
$(document).ready(function() {
  debugger;
  // Definir nuestras variables o constantes, usando jQuery
  let iptPassword = $('#iptPassword');
  let iptEmail = $('#iptEmail');
  let chkRememberMe = $('#chkRememberMe');
  let btnSubmit = $('#btnSubmit');

  console.log('El DOM ha sido cargado y está listo para ser manipulado');

  // Definir nuestros eventos
  btnSubmit.on('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón submit
    debugger;
    let iptPassword = $('#iptPassword');
    let iptEmail = $('#iptEmail');
    let chkRememberMe = $('#chkRememberMe');
    // Cambiar el label de email a nombre de usuario
    let lblEmail = $('#lblEmail');
    lblEmail.text('Nombre de Usuario');

    let iptEmailValue = iptEmail.val();
    console.log('El valor del input de email es:', iptEmailValue);
  });



  // Definir nuestras funciones
});


// Una constante es un elemento en nuestro código que nunca va a cambiar
// Una variable es un elemento que puede cambiar en el tiempo




