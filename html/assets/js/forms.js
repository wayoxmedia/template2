"use strict";
$(document).ready(function() {
  let $subscribeForm = $('#subscribeForm');

  // Bind Events
  $subscribeForm.on('submit', function(event) {
    event.preventDefault();
    let $iptAddress = $('#iptAddress');
    let $selAddressType = $('#selAddressType');
    let $btnSubmitSubscribe = $('#btnSubmitSubscribe');
    let $pMessage = $('#pMessage');
    let arrErrors = [];
    let $ulErrors = $('#ulErrors');

    // Reset Elements and Errors (if any)
    $pMessage.html('');
    $pMessage.addClass('d-none');
    $pMessage.removeClass('text-danger');
    $ulErrors.empty();
    $ulErrors.addClass('d-none');

    // Start validation
    let isValid = true;
    // Validate form.
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

    if (isValid) {
      let formData = new FormData(this);
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
          $pMessage.html(data.message || 'Formulario enviado correctamente.');
          $pMessage.removeClass('d-none');
          $pMessage.addClass('text-success');
        },
        error: function(xhr) {
          $pMessage.html(xhr.responseJSON.messages || 'Ocurrió un error al procesar el formulario.');
          $pMessage.removeClass('d-none');
          $pMessage.addClass('text-danger');
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
      $pMessage.html(pErrorMsg);
      $pMessage.addClass('text-danger');
      $pMessage.removeClass('d-none');
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
