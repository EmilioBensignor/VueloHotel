const paisResidencia = document.getElementById('paisResidencia');

const optionsPaisResidencia = [
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

// HACER FOR DE OPTIONS

$(document).ready(function() {
  $('.selectPaisResidencia').select2();
});