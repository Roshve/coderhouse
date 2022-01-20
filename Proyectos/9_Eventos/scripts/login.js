$(document).ready(() => {
  $('body').prepend('<button id="btnjQuery">CLICK</button>');
  $('#btnjQuery').on('dblclick', () => {
    console.log("Respuesta al doble click");
  });
  $('body').prepend('<h1>Hola</h1>')

})

/* class SingIn {
    constructor(username, password, firtsName, lastName) {
        this.username = username.toString();
        this.password = password.toString();
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.agree = false;
    }

    check() {
        desagree = prompt("Escriba 1 si esta deacuerdo con los terminos y condiciones")
        if(desagree === 1) {
            this.agree = true
        } else {
            alert("vuelva a iniciar")
        }
    }
}

const user1 = new SingIn(
    prompt("Ingrese su username"),
    prompt('ingrese su contraseña'),
    prompt('ingrese su primer nombre'),
    prompt('Ingrese su apellido'),
)
user1.check() */