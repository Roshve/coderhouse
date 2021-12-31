function redondeo(valor){
  return Math.round(valor)
}
for (let i = 0; i < 5; i++) {
  const a = redondeo(parseFloat(prompt("Ingresa un numero decimal")));
  alert("Es: " + a)
}

