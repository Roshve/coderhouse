class Tienda {
  constructor(nombre, direccion, dueño, tipo) {
    this.name = nombre
    this.address = direccion
    this.owner = dueño
    this.type = tipo
  }
}

const macDonalds = new Tienda('Macdononals', 'Av. Santa Fe 2019', 'Ronald', 'Comida Rapida')
const pizzaHuts = new Tienda('PizzaHuts', 'Av. Laprida 999', 'Ricky', 'Comida Rapida')
const zara = new Tienda('Zara', 'Av. Azcuenaga 4215', 'Sara', 'Ropa')
console.log(macDonalds)
console.log(pizzaHuts)
console.log(zara)