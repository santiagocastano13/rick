const container = document.querySelector('main')
const URL = 'https://rickandmortyapi.com/api/character'

window.addEventListener('DOMContentLoaded', getApi(URL))

function getApi(URL) {
  fetch(URL)
  .then(response => response.json() )
  .then( data => {
    data.results.forEach(character => {
      createCard(character)
    });
  })
}















function createCard(character) {
  const card = document.createElement('div')
  card.classList.add('card')

  const imgCard = document.createElement('img')
  imgCard.src = character.image
  imgCard.alt = character.name

  const nameCharacter = document.createElement('h2')
  nameCharacter.textContent = character.name

  card.appendChild(imgCard)
  card.appendChild(nameCharacter)

  container.appendChild(card)
}