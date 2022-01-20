/* 8. Conceptos generales: DOM
    Luis Alejandro Cova Ascanio
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


for (const anime of animes) {
  let container = document.createElement('div');
  container.innerHTML = `<h3>${anime.title}</h3>
                          <p>${anime.type}</p>
                          <p>${anime.category}</p>
                          <p>${anime.condition}</p>
                          <p>${anime.votes}</p>
                          <p>${anime.episodes}</p>`;
  document.getElementsByTagName('aside')[0].appendChild(container);
}