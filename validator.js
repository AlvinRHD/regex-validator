function validate() {
  const validationType = document.getElementById('validation-type').value;
  const inputValue = document.getElementById('input-value').value;
  const result = document.getElementById('result');

  let regex;
  let message = '';

  switch (validationType) {
    case 'ipv4':
      regex =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      message = regex.test(inputValue)
        ? 'La dirección IPv4 es válida.'
        : 'La dirección IPv4 es inválida.';
      break;
    case 'url':
      regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^\/\/[^\s/$.?#].[^\s]*$/;
      message = regex.test(inputValue) ? 'La URL es válida.' : 'La URL es inválida.';
      break;
    case 'email':
      regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      message = regex.test(inputValue)
        ? 'El correo electrónico es válido.'
        : 'El correo electrónico es inválido.';
      break;
    default:
      message = 'Tipo de validación no reconocido.';
  }

  result.textContent = message;
  result.className = regex.test(inputValue) ? 'valid' : 'alert';
  result.style.display = 'block';
}
