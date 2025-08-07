"use strict";
$(document).ready(function() {
  // Define Global Variables
  let $subscribeForm = $('#subscribeForm');
  let $selAddressType = $('#selAddressType');
  let $iptAddress = $('#iptAddress');
  let $btnSubmitSubscribe = $('#btnSubmitSubscribe');

  // Bind Events
  // When the form is submitted.
  $subscribeForm.on('submit', function(event) {
    event.preventDefault();
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

    // Buscamos que tipo de dirección se seleccionó.
    let selectedAddressTypeValue = $selAddressType.val();
    if (selectedAddressTypeValue === 'e') {
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
    }
    else if (selectedAddressTypeValue === 'p') {
      if ($iptAddress.val().length > 15) {
        isValid = false;
        arrErrors.push('El campo de dirección no puede exceder los 15 caracteres.');
      }
      if ($iptAddress.val().length < 8) {
        isValid = false;
        arrErrors.push('El campo de dirección debe tener al menos 8 caracteres.');
      }
      if (!isValidPhoneNumber($iptAddress.val())) {
        isValid = false;
        arrErrors.push('Por favor, ingrese solo números.');
      }
    }
    else {
      isValid = false;
      arrErrors.push('Por favor, seleccione un tipo de suscripción, ya sea correo o teléfono.');
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
          $pMessage.html(xhr.responseJSON.message || 'Ocurrió un error al procesar el formulario.');
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

  // When the address type is changed.
  $selAddressType.on('change', function () {
    let selectedValue = $(this).val();

    if (selectedValue === 'e') {
      $iptAddress.attr('placeholder', 'Su Email');
    }
    else if (selectedValue === 'p') {
      $iptAddress.attr('placeholder', 'Su Teléfono');
    }
    else {
      $iptAddress.attr('placeholder', '');
    }
  });

  // Create Functions

  function isValidEmailAddress(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
  }
});
