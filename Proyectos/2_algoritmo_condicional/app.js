/* 2. Conceptos generales: sintaxis y variables
    Luis Alejandro Cova Ascanio
*/

alert("Simulemos que te registras, simulemos por que todavia no llegamos a manipular el dom")
let firstName = prompt("Ingresa tu primer nombre")
let lastName = prompt("Ingresa tu apellido")
let userName = prompt("Ingresa un nombre de usuario cool")
let email = prompt("Porfavor ingresa un email de confiaza, tranqui que no te voy a robar tus datos. Ni enviar spam")
let password = prompt("Bueno me fastidie dame una constraseña barbara")
let passwordConfirm = prompt("Repiteme la contraseña pls")


if ((firstName == "") || (lastName == "")) {
    alert("Porfavor tomate este registro enserio")
} else {
    alert("Vamos Bien te tomo los datos del nombre y el apellido")
}

if  (userName.length <= 3 ) {
    alert("Brother ponele un poco mas de imaginación a tu Nombre de usuario no puede ser menor de tres")
} else if (userName.length >= 12) {
    alert(`Calmate un poco bro, tu Nombre de usuario supera lo que puedo guardar en memoria\n\nTiene que ser menor de 12 caracteres`)
} else {
    alert("Que bonito user name " + userName)
}

if (email.includes("@") == false) {
    alert("Brother escribe el arroba para saber que es un mail, no soy adivino")
} else if (email.includes(".") == false) {
    alert("Brother escribe el (.) para saber que es un mail, no soy adivino")
} else if (email.includes("com") == false){
    alert("Brother escribe el (com) para saber que es un mail, no soy adivino")
} else {
    alert("Me gusta ese mail " + email)
}

if (password !== passwordConfirm) {
    alert("Brother escribe bien la contraseña no te pido mucho")
} else {
    alert("Todo bien por ahora")
}