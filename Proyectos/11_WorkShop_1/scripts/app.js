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

const a = document.getElementById('titulo')
a.onchange = () => console.log(a.value);


let animes = [];

let anime = new Anime(
  document.getElementById('titulo'),
  document.getElementById('tipo'),
  document.getElementById('categoria'),
  document.getElementById('estatus'),
  document.getElementById('votos'),
  document.getElementById('episodios')
);

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
  document.getElementsByTagName('section')[0].appendChild(container);
}