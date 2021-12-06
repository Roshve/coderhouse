let producto = parseFloat(prompt("Ingrese el precio del producto"));
let descuento20 = producto / 100 * 20;
let descuento30 = producto / 100 * 30;
alert(`Tu descuento de 20% es: ${descuento20.toFixed(2)} \nTu descuento de 30% es: ${descuento30.toFixed(2)}`)