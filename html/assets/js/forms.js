"use strict";
$(document).on('ready', function() {

  let $iptAddress = $('#iptAddress');
  let $selAddressType = $('#selAddressType');
  let $btnSubmitSubscribe = $('#btnSubmitSubscribe');
  let $subscribeForm = $('#subscribeForm');

  // Bind Events
  $subscribeForm.on('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    // Validar el formulario.
    if ($iptAddress.val() === '') {
      isValid = false;
      console.log('El campo de dirección no puede estar vacío.');
    }

    if ($iptAddress.val().length > 30) {
      isValid = false;
      console.log('El campo de dirección no puede exceder los 30 caracteres.');
    }

    if ($iptAddress.val().length < 6) {
      isValid = false;
      console.log('El campo de dirección debe tener al menos 6 caracteres.');
    }

    if (!validateEmail($iptAddress.val())) {
      isValid = false;
      console.log("Por favor, ingrese un correo electrónico válido.");
    }

    // Enviamos el formulario si la data es valida.
    if (isValid) {
      let formData = new FormData(this);
      // Si es valido, se envía el formulario.
      console.log('Formulario sera enviado porque es valido');
      $.ajax({
        url:  msaConfig.apiUrl + '/subscribe-form',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        headers: {
          'Accept': 'application/json',
        },
        success: function(data) {
          console.log('Request successful', data);
        },
        error: function(xhr) {
          if (msaConfig.LOCAL_ENV) {
            console.log('Request failed', xhr);
          }
        }
      });

    }
    else {
      // Si no es valido, se muestra un mensaje de error
      console.log('Formulario no es valido, no se enviará');
    }
  });

  // Create Functions

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
