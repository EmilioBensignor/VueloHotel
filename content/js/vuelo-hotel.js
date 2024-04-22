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

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    nombre: document.getElementById('nombre').value,
  };
  console.log(formData);
}

function validateForm() {
  const nombre = document.getElementById('nombre').value;
  const errorNombre = document.getElementById('errorNombre');
  if (nombre.trim() === '') {
    errorNombre.textContent = 'El nombre es requerido';
    return false;
  } else {
    errorNombre.textContent = '';
  }
  return true;
}

document.getElementById('vueloHotel').addEventListener('submit', function (event) {
  if (!validateForm()) {
    event.preventDefault();
  } else {
    handleSubmit(event);
  }
});


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