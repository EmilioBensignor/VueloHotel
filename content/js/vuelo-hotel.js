const paisResidencia = document.getElementById('paisResidencia');
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');

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