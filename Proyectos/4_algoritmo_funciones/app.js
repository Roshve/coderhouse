/* 3. Conceptos generales: Funciones
    Luis Alejandro Cova Ascanio
*/

function ask(question) {
    return prompt(question)
}

function menu() {
    const opcion = ask("Bienvenido al MasRespuesto.com para poder ofrecerle un producto de primera calidad uses las opciones del menu para saber lo que desea \n\n1) Comprar Respuestos de Autos\n2) Contactanos\n3) Cotizador")
    
}

menu()
const birthday = ask("Porfavor ingrese su año de nacimiento")
const firstName = ask("Porfavor ingrese su primer nombre")
const country = ask("Porfavor ingrese su pais de locación")

console.log(birthday)
console.log(firstName)
console.log(country)