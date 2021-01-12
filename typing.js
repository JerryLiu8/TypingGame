// uses quotable api by lukePeavy: https://github.com/lukePeavey/quotable
const RANDOM_QUOTE = 'https://api.quotable.io/random'

document.getElementById("text").addEventListener('input', () => {
  const arrayQuote = document.getElementById("quote").querySelectorAll('span')
  const arrayValue = document.getElementById("text").value.split('')
  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  if (correct) renderQuote()
})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderQuote() {
  const quote = await getRandomQuote();
  document.getElementById("quote").innerHTML = '';
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    document.getElementById("quote").appendChild(characterSpan)
  })
  document.getElementById("text").value = ''
  }

renderQuote()
