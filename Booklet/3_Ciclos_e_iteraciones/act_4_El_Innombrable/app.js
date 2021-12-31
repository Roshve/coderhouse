let nombre = prompt('ingresa un nombre'); 
let nombres = '';
while (nombre != 'Voldemort'){
  nombres += nombre + "\n"
  nombre = prompt('ingresa un nombre')
}
alert(nombres);