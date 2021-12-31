const entrada = () => {
  return prompt("Usuario ingresa un valor")
}

const procesamiento = (valor) => {
  return "Hola " + valor
}

const salida = (valor) => {
  return alert(valor)
}

salida(procesamiento(entrada()))