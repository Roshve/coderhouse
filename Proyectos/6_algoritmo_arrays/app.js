/* 5. Conceptos generales: Arrays
    Luis Alejandro Cova Ascanio
*/

/* class SingIn {
  constructor(username, password, firtsName, lastName) {
    this.username = username.toString();
    this.password = password.toString();
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.agree = false;
  }

  check(desagree) {
    if (desagree == 1) {
      this.agree = true
      alert("Bienvenido a MasRespuestos.com")
    } else {
      alert("Vuelve a reiniciar")
    }
  }
}

const user1 = new SingIn(
  prompt("Ingrese su username"),
  prompt('ingrese su contraseña'),
  prompt('ingrese su primer nombre'),
  prompt('Ingrese su apellido'),
)
user1.check(prompt("Escriba 1 si esta deacuerdo con los terminos y condiciones"))
 */
class Anime {
  constructor(title, type, category, condition, votes, episodes) {
    this.title = title;
    this.type = type;
    this.category = category;
    this.condition = condition;
    this.votes = votes;
    this.episodes = episodes;
  }
}

let animes = [];

for (let index = 0; index < 2; index++) {
  let anime = new Anime(
    prompt('Ingrese el titulo del anime'),
    prompt('Ingrese el tipo de anime'),
    prompt('Ingrese la categoria del anime'),
    prompt('Ingrese la estatus del anime'),
    prompt('Ingrese los votos del anime'),
    prompt('Ingrese la cantidad de episodios del anime'),
  );

  animes.push(anime)
}
/* animes.forEach(function(anime){
  return alert(`Anime: ${anime.title} - ${anime.type} - ${anime.category} - ${anime.condition} - ${anime.votes} - ${anime.episodes}`)
}) */

animes.map(function (anime) {
  return alert(`Anime: ${anime.title} - ${anime.type} - ${anime.category} - ${anime.condition} - ${anime.votes} - ${anime.episodes}`)
})

/* function ask(question) {
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

menu() */