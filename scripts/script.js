var inputPhone = document.getElementById("phone");
inputPhone.oninvalid = function (event) {
  event.target.setCustomValidity("el teléfono ingresado no es válido");
};
