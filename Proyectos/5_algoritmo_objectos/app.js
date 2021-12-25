/* 3. Conceptos generales: Funciones
    Luis Alejandro Cova Ascanio
*/

function ask(question) {
    return prompt(question)
}

function opcion1() {
    return alert("¿Que tipo de respuesto desea buscar?\n")
}

function opcion2() {
    let email = ask("Usuario necesito un email valido")
    let firtsName = ask("Usuario necesito tu primer nombre")
    let lastName = ask("Usuario necesito tu apellido")
    let message = ask("Usuario necesito un mensaje que desees enviar")
    return alert(`Correo Electronico: ${email}\nNombre Completo: ${firtsName} ${lastName}\nMensaje: ${message}`)
}

function menu() {
    let opcion = ask("Bienvenido al MasRespuesto.com para poder ofrecerle un producto de primera calidad uses las opciones del menu para saber lo que desea \n\n1) Comprar Respuestos de Autos\n2) Contactanos\n3) Cotizador")
    opcion = parseInt(opcion)
    if (opcion === 1) {
        return alert("Usted a escogido la opcion 1")
    } else if (opcion === 2) {
        return opcion2()
    } else if (opcion === 3) {
        return alert("Usted a escogido la opcion 3")
    } else {
        return alert("Porfavor escoja una opcion valida")
    }
}

menu()