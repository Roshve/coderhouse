let productOne = prompt("Usuario te ordeno que me digas 4 productos empezando por el primero")
let productTwo = prompt("Ingresa el Segundo producto te lo ordeno")
let productThree = prompt("Ingresa el Tercer producto o te pego")
let productFour = prompt("Ingresa el Ultimo producto")

if ((productOne != "") && (productTwo != "") && (productThree != "") && ( productFour != "") ){
    alert(`Estos son tus productos humano\n${productOne}\n${productTwo}\n${productThree}\n${productFour}`)
} else {
    alert("Te falto algun producto y no te voy a decir cual")
}