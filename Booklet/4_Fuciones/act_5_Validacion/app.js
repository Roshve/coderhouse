function validacion(cadena) {
  return cadena != '';
}
let nuevaCadena = prompt('Ingresa una cadena')

while (nuevaCadena != 'ESC') {
  alert(validacion(nuevaCadena))
  nuevaCadena = prompt('Ingresa una cadena')
}