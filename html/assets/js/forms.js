"use strict";
$(document).ready(function() {
  let $subscribeForm = $('#subscribeForm');

  // Bind Events
  $subscribeForm.on('submit', function(event) {
    event.preventDefault();
    let $iptAddress = $('#iptAddress');
    let $selAddressType = $('#selAddressType');
    let $btnSubmitSubscribe = $('#btnSubmitSubscribe');
    let $pErrors = $('#pErrors');
    let arrErrors = [];
    let $ulErrors = $('#ulErrors');

    // Reset Elements and Errors (if any)
    $pErrors.html('');
    $pErrors.addClass('d-none');
    $pErrors.removeClass('text-danger');
    $ulErrors.empty();
    $ulErrors.addClass('d-none');

    let isValid = true;
    // Validar el formulario.
    if ($iptAddress.val() === '') {
      isValid = false;
      arrErrors.push('El campo de dirección no puede estar vacío.');
    }

    if ($iptAddress.val().length > 30) {
      isValid = false;
      arrErrors.push('El campo de dirección no puede exceder los 30 caracteres.');
    }

    if ($iptAddress.val().length < 6) {
      isValid = false;
      arrErrors.push('El campo de dirección debe tener al menos 6 caracteres.');
    }

    if (!isValidEmailAddress($iptAddress.val())) {
      isValid = false;
      arrErrors.push('Por favor, ingrese un correo electrónico válido.');
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
      let pluralOrNot;
      if (arrErrors.length > 1) {
        pluralOrNot = 'los siguientes errores';
      }
      else {
        pluralOrNot = 'el siguiente error';
      }

      let pErrorMsg = 'Por favor, corrija ' + pluralOrNot + ' antes de enviar el formulario.';
      $pErrors.html(pErrorMsg);
      $pErrors.addClass('text-danger');
      $pErrors.removeClass('d-none');
      // Add errors to the list
      arrErrors.forEach(function(error) {
        let li = $('<li></li>');
        li.text(error);
        li.addClass('text-danger');
        $ulErrors.append(li);
      });
      $ulErrors.removeClass('d-none');
    }
  });

  // Create Functions

  function isValidEmailAddress(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
