let divisaDolar = 208;
let opciones = parseInt(prompt('Tipo de cotizacion que desee tomar\n\n1) Cambiar dolares a pesos\n2) Cambiar pesos a dolares'));

function cotizarDolar(pesos) {
  return alert(pesos / divisaDolar)
}

function cotizarPesos(dolar) {
  return alert(dolar * divisaDolar)
}

function menu(opcion) {
  if (opcion === 1) {
    cotizarDolar(parseInt(prompt('Ingrese el valor en pesos')))
  } else if (opcion === 2) {
    cotizarPesos(parseInt(prompt('Ingrese el valor en dolares')))
  } else {
    alert('no has ingresado un valor aceptable')
  }
}

menu(opciones)