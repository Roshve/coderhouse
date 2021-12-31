let nombre = prompt('selecciona del 1 al 4'); 
let nombres = '';
while (nombre != 'ESC'){
  switch (nombre) {
    case '1':
      nombre = "Tomate";
      break
    case '2':
      nombre = "Papa";
      break
    case '3':
      nombre = "Carne"
      break
    case '4':
      nombre = "Pollo"
      break
    default:
      nombre = 'Error'
      break
  }
  nombres += nombre + "\n"
  nombre = prompt('selecciona del 1 al 4')
}
alert(nombres);