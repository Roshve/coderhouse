function entrada() {
    let valor = prompt("Usuario ingresa un valor")
    function process(valor) {
        valor = valor.length
        return valor
    }
    return process()
}

entrada();