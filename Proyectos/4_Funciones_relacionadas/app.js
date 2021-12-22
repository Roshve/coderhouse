/* 4. Conceptos generales: Funciones Relacionales
    Luis Alejandro Cova Ascanio
*/
const pesos = () => {
    const pesos = parseFloat(prompt("Ingrese su saldo en pesos"));
    return pesos
}    

const convertionDolar = (valor) => {
    let dolar = 200.50
    valor = (valor / dolar).toFixed(2)
    alert(`Tus pesos convertidos en dolares es el siguiente ${valor}`)
    return valor
}

const impuestoDolar = (valor) => {
    const iva = 0.65
    valor = (valor * iva).toFixed(2)
    return alert(`Tus pesos mas impuestos son ${valor}`)
}

impuestoDolar(convertionDolar(pesos()));