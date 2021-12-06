/* 1. Conceptos generales: sintaxis y variables
    Luis Alejandro Cova Ascanio
*/

let firstName = String(prompt("Ingresa tu nombre"));
let lastName = String(prompt("Ingresa tu apellido"));
alert("Hola usuario " + firstName + " " + lastName);

let randomNumber = parseInt(prompt("Ingresa un numero entero usuario: "));
let myNumber = 42;
alert("Tu numero sumado es: " + parseInt(randomNumber + myNumber))

let yourString1 = String(prompt("Ingresa un texto cualquiera: "))
let yourString2 = String(prompt("Ingresa nuevamente un texto cualquiera: "))
alert("Tu texto concatenado es: " + yourString1 + " " + yourString2)