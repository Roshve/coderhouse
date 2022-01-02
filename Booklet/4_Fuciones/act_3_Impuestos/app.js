let precio = parseFloat(prompt('Ingresa un precio'));
let porcentaje = parseFloat(prompt('Ingresa un porcentaje'));

function impuesto(valorPrecio, valorPorcentaje) {
  valorPorcentaje = (valorPrecio * valorPorcentaje) / 100
  return alert(valorPrecio + valorPorcentaje)
}

for (let index = 0; index < 5; index++) {
  impuesto(precio, porcentaje)
}
