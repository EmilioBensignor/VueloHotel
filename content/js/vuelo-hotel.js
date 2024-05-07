const paisResidencia = document.getElementById('paisResidencia');
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');
const opcion3Estrellas = document.getElementById('opcion3Estrellas');
const opcion4Estrellas = document.getElementById('opcion4Estrellas');
const opcion5Estrellas = document.getElementById('opcion5Estrellas');
const img3Estrellas = document.getElementById('img3Estrellas');
const img4Estrellas = document.getElementById('img4Estrellas');
const img5Estrellas = document.getElementById('img5Estrellas');

const optionsPaisResidencia = [
  "Selecciona tu país",
  "Argentina",
  "Brasil",
  "Chile",
  "India",
  "Indonesia",
  "Canada",
  "Australia",
  "Francia",
  "Italia",
];
const optionsOrigen = [
  "Ingresa origen",
  "Argentina",
  "Brasil",
  "Chile",
  "India",
  "Indonesia",
  "Canada",
  "Australia",
  "Francia",
  "Italia",
];
const optionsDestino = [
  "Ingresa destino",
  "Argentina",
  "Brasil",
  "Chile",
  "India",
  "Indonesia",
  "Canada",
  "Australia",
  "Francia",
  "Italia",
];

for (let i = 0; i < optionsPaisResidencia.length; i++) {
  paisResidencia.innerHTML += `
    <option value="${optionsPaisResidencia[i]}">${optionsPaisResidencia[i]}</option>
  `
}
for (let i = 0; i < optionsOrigen.length; i++) {
  origen.innerHTML += `
    <option value="${optionsOrigen[i]}">${optionsOrigen[i]}</option>
  `
}
for (let i = 0; i < optionsDestino.length; i++) {
  destino.innerHTML += `
    <option value="${optionsDestino[i]}">${optionsDestino[i]}</option>
  `
}

opcion3Estrellas.addEventListener("change", cambiarEstrellas);
opcion4Estrellas.addEventListener("change", cambiarEstrellas);
opcion5Estrellas.addEventListener("change", cambiarEstrellas);

function cambiarEstrellas(event) {
  const opcionSeleccionada = event.target;
  if (opcionSeleccionada.id === '3-estrellas' && opcionSeleccionada.checked) {
    img3Estrellas.src = "../content/img/3-estrellas-seleccionado.svg";
    img4Estrellas.src = "../content/img/4-estrellas.svg";
    img5Estrellas.src = "../content/img/5-estrellas.svg";
  } else if (opcionSeleccionada.id === '4-estrellas' && opcionSeleccionada.checked) {
    img3Estrellas.src = "../content/img/3-estrellas.svg";
    img4Estrellas.src = "../content/img/4-estrellas-seleccionado.svg";
    img5Estrellas.src = "../content/img/5-estrellas.svg";
  } else if (opcionSeleccionada.id === '5-estrellas' && opcionSeleccionada.checked) {
    img3Estrellas.src = "../content/img/3-estrellas.svg";
    img4Estrellas.src = "../content/img/4-estrellas.svg";
    img5Estrellas.src = "../content/img/5-estrellas-seleccionado.svg";
  }
}

function mostrarError(elemento, mensaje) {
  const errorIcon = document.createElement('img');
  errorIcon.src = "/content/img/formVueloHotel/icon-error.svg";
  errorIcon.className = 'errorIcon';
  const errorText = document.createElement('p');
  errorText.className = 'error';
  errorText.textContent = mensaje;
  elemento.innerHTML = '';
  elemento.appendChild(errorIcon);
  elemento.appendChild(errorText);
}

function validarNombre(nombre, errorNombre) {
  if (nombre.trim() === '') {
    mostrarError(errorNombre, 'El nombre es requerido');
    return false;
  } else if (nombre.trim().length >= 20) {
    mostrarError(errorNombre, 'El nombre debe tener menos de 20 caracteres');
    return false;
  } else if (nombre.trim().length < 2) {
    mostrarError(errorNombre, 'El nombre de tener al menos 2 caracteres');
    return false;
  } else {
    errorNombre.innerHTML = '';
    return true;
  }
}

function validarPaisResidencia(paisResidencia, errorPaisResidencia) {
  if (paisResidencia === 'Selecciona tu país') {
    mostrarError(errorPaisResidencia, 'Elige un país')
  } else {
    errorPaisResidencia.innerHTML = '';
    return true;
  }
}

function validarMail(mail, errorMail) {
  if (mail.trim() === '') {
    mostrarError(errorMail, 'El mail es requerido');
    return false;
  } else if (!/.+@.+\..+/.test(mail)) {
    mostrarError(errorMail, 'El mail es inválido');
    return false;
  } else {
    errorMail.innerHTML = '';
    return true;
  }
}

function validarNumeroWhatsapp(numeroWhatsapp, area, errorWhatsapp) {
  if (numeroWhatsapp.trim() === '' || area.trim() === '') {
    mostrarError(errorWhatsapp, 'Área y número son requeridos');
    return false;
  } else if (parseInt(numeroWhatsapp) <= 0) {
    mostrarError(errorWhatsapp, 'El número de WhatsApp no es válido');
    return false;
  } else {
    errorWhatsapp.innerHTML = '';
    return true;
  }
}

function validarFechas(fechaSalida, fechaVuelta, errorFechas) {
  if (fechaSalida.trim() === '' || fechaVuelta.trim() === '') {
    mostrarError(errorFechas, 'Las fechas son requeridas');
    return false;
  } else {
    var salida = new Date(fechaSalida);
    var vuelta = new Date(fechaVuelta);

    if (salida >= vuelta) {
      mostrarError(errorFechas, 'La fecha de vuelta debe ser posterior a la fecha de salida');
      return false;
    } else if (salida.getTime() === vuelta.getTime()) {
      mostrarError(errorFechas, 'Las fechas de salida y vuelta no pueden ser iguales');
      return false;
    } else {
      errorFechas.innerHTML = '';
      return true;
    }
  }
}

function validarRutas(origen, destino, errorRutas){
  if (origen === 'Ingresa origen' || destino === 'Ingresa destino') {
    mostrarError(errorRutas, 'Las rutas son requeridas');
    return false;
  } 
  else if (origen.trim() === destino.trim()) {
    mostrarError(errorRutas, 'Las rutas no pueden ser iguales');
    return false;
  } else {
    errorRutas.innerHTML = '';
    return true;
  }
}

function validarEstrellasHotel(errorEstrellas) {
  const estrellasSeleccionadas = document.querySelector('input[name="estrellasHotel"]:checked');
  if (!estrellasSeleccionadas) {
    mostrarError(errorEstrellas, 'Selecciona una opción de estrellas');
    return false;
  } else {
    errorEstrellas.innerHTML = '';
    return true;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const btnCambio = document.getElementById('btnCambio');
  btnCambio.addEventListener('click', intercambiarOrigenDestino);
});

function intercambiarOrigenDestino() {
  const origen = $('#origen');
  const destino = $('#destino');

  const temp = origen.val();
  origen.val(destino.val()).trigger('change');
  destino.val(temp).trigger('change');
}


function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const errorNombre = document.getElementById('errorNombre');
  const paisResidencia = document.getElementById('paisResidencia').value;
  const errorPaisResidencia = document.getElementById('errorPaisResidencia');
  const numeroWhatsapp = document.getElementById('numeroWhatsapp').value;
  const area = document.getElementById('area').value;
  const errorWhatsapp = document.getElementById('errorWhatsapp');
  const mail = document.getElementById('mail').value;
  const errorMail = document.getElementById('errorMail');
  const fechaSalida = document.getElementById('fechaSalida').value;
  const fechaVuelta = document.getElementById('fechaVuelta').value;
  const errorFechas = document.getElementById('errorFechas');
  const origen = document.getElementById('origen').value;
  const destino = document.getElementById('destino').value;
  const errorRutas = document.getElementById('errorRutas');
  const errorEstrellas = document.getElementById('errorEstrellas');

  const nombreValido = validarNombre(nombre, errorNombre);
  const paisResidenciaValido = validarPaisResidencia(paisResidencia, errorPaisResidencia);
  const numeroWhatsappValido = validarNumeroWhatsapp(numeroWhatsapp, area, errorWhatsapp);
  const mailValido = validarMail(mail, errorMail);
  const fechasValido = validarFechas(fechaSalida, fechaVuelta, errorFechas);
  const rutasValido = validarRutas(origen, destino, errorRutas);
  const estrellasValidas = validarEstrellasHotel(errorEstrellas);

  return nombreValido && paisResidenciaValido && numeroWhatsappValido && mailValido && fechasValido && rutasValido && estrellasValidas;
}

document.getElementById('vueloHotel').addEventListener('submit', function (event) {
  event.preventDefault();
  if (validarFormulario()) {
    handleSubmit(event);
  }
});

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    nombre: document.getElementById('nombre').value,
    paisResidencia: document.getElementById('paisResidencia').value,
    area: document.getElementById('area').value,
    numeroWhatsapp: document.getElementById('numeroWhatsapp').value,
    mail: document.getElementById('mail').value,
    fechaSalida: document.getElementById('fechaSalida').value,
    fechaVuelta: document.getElementById('fechaVuelta').value,
    origen: document.getElementById('origen').value,
    destino: document.getElementById('destino').value,
    estrellasHotel: document.querySelector('input[name="estrellasHotel"]:checked').value,
  };
  console.log(formData);
  vaciarCampos();
};

function vaciarCampos() {
  document.getElementById('nombre').value = '';
  $('#paisResidencia').val('Selecciona tu país').trigger('change');
  document.getElementById('area').value = '';
  document.getElementById('numeroWhatsapp').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('fechaSalida').value = '';
  document.getElementById('fechaVuelta').value = '';
  $('#origen').val('Ingresa origen').trigger('change');
  $('#destino').val('Ingresa destino').trigger('change');
  document.getElementById('3-estrellas').checked = false;
  document.getElementById('4-estrellas').checked = false;
  document.getElementById('5-estrellas').checked = false;

  document.getElementById('img3Estrellas').src = "../content/img/3estrellas.png";
  document.getElementById('img4Estrellas').src = "../content/img/4estrellas.png";
  document.getElementById('img5Estrellas').src = "../content/img/5estrellas.png";
}



$(document).ready(function () {
  $('.selectPaisResidencia').select2();
});
$(document).ready(function () {
  $('.selectOrigen').select2();
});
$(document).ready(function () {
  $('.selectDestino').select2();
});

$(function () {
  $('input[name="fechaVuelta"]').daterangepicker({
    autoUpdateInput: false,
    singleDatePicker: true,
    showDropdowns: true,
    drops: 'auto',
    minDate: moment().startOf('hour'),
    locale: {
      cancelLabel: 'Clear'
    }
  });
  $('input[name="fechaVuelta"]').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('DD/MM/YYYY'));
  });
  $('input[name="fechaVuelta"]').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });
});

$(function () {
  $('input[name="fechaSalida"]').daterangepicker({
    autoUpdateInput: false,
    singleDatePicker: true,
    showDropdowns: true,
    drops: 'auto',
    minDate: moment().startOf('hour'),
    locale: {
      cancelLabel: 'Clear'
    }
  });
  $('input[name="fechaSalida"]').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.endDate.format('DD/MM/YYYY'));
  });
  $('input[name="fechaSalida"]').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });
});