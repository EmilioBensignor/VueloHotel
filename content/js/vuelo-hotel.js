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
    img3Estrellas.src = "../content/img/3estrellasSeleccionado.png";
    img4Estrellas.src = "../content/img/4estrellas.png";
    img5Estrellas.src = "../content/img/5estrellas.png";
  } else if (opcionSeleccionada.id === '4-estrellas' && opcionSeleccionada.checked) {
    img3Estrellas.src = "../content/img/3estrellas.png";
    img4Estrellas.src = "../content/img/4estrellasSeleccionado.png";
    img5Estrellas.src = "../content/img/5estrellas.png";
  } else if (opcionSeleccionada.id === '5-estrellas' && opcionSeleccionada.checked) {
    img3Estrellas.src = "../content/img/3estrellas.png";
    img4Estrellas.src = "../content/img/4estrellas.png";
    img5Estrellas.src = "../content/img/5estrellasSeleccionado.png";
  }
}

function mostrarError(elemento, mensaje) {
  const errorIcon = document.createElement('img');
  errorIcon.src = "/content/img/error-icon.png";
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

function validarNumeroWhatsapp(numeroWhatsapp, area, errorWhatsapp){
  if (numeroWhatsapp.trim() === '' || area.trim() === '') {
    mostrarError(errorWhatsapp, 'El número y área son requeridos');
    return false;
  } else {
    errorWhatsapp.innerHTML = '';
    return true;
  }
}

function validarFechas(fechaSalida, fechaVuelta, errorFechas){
  if (fechaSalida.trim() === '' || fechaVuelta.trim() === '') {
    mostrarError(errorFechas, 'La fechas son requeridas');
    return false;
  } else if (fechaSalida.trim() ===  fechaVuelta.trim()) {
    mostrarError(errorFechas, 'La fechas no pueden ser iguales');
    return false;
    // AGREGAR QUE VUELTA TIENE QUE SER POSTERIOR A SALIDA
  } else {
    errorFechas.innerHTML = '';
    return true;
  }
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
  // AGREGAR RUTA Y CATEGORIA

  const nombreValido = validarNombre(nombre, errorNombre);
  const paisResidenciaValido = validarPaisResidencia(paisResidencia, errorPaisResidencia);
  const numeroWhatsappValido = validarNumeroWhatsapp(numeroWhatsapp, area, errorWhatsapp);
  const mailValido = validarMail(mail, errorMail);
  const fechasValido = validarFechas(fechaSalida, fechaVuelta, errorFechas);
  // Validar otros campos y almacenar los resultados

  return nombreValido && paisResidenciaValido && numeroWhatsappValido && mailValido && fechasValido;
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

  };
  console.log(formData);
  vaciarCampos();
};

function vaciarCampos() {
  document.getElementById('nombre').value = '';
  // Vaciar paisResidencia
  document.getElementById('area').value = '';
  document.getElementById('numeroWhatsapp').value = '';
  document.getElementById('mail').value = '';
  document.getElementById('fechaSalida').value = '';
  document.getElementById('fechaVuelta').value = '';
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