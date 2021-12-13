let giveNumber = prompt("Usuario necesito un numero ¡Te ordeno que lo escribas!")

if (giveNumber <= 1000) {
    alert("Presupuesto bajo, jajaja que probre")
} else if (giveNumber > 1000 && giveNumber <= 3000) {
    alert("Presupuesto medio, estas ahi bro.")
} else if (giveNumber > 3000) {
    alert("Presupuesto alto, seguro debes tener un lambo")
} else {
    alert("WTF")
}