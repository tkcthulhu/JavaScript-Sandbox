function initializePage() {
  startButton = document.createElement('button');
  const body = document.querySelector('body');
  info = document.createElement('div');
  input = document.createElement('input')
  startButton.textContent = 'Cleeck mee';
  
  body.appendChild(input)
  body.appendChild(startButton);
  body.appendChild(info)
  
  startButton.addEventListener('click', () => getData('https://rickandmortyapi.com/api/character'));
  startButton.id = 'stuff button';
  info.id = 'stuff';
  input.type = 'number';
  input.id = 'input'
}

let startButton = document.getElementById('stuff button');
let info = document.getElementById('stuff')
let input = document.getElementById('input')

async function getData(url) {
  try {
    const response = await axios.get(url);
    const userInput = input.value;
    info.innerText = response.data.results[userInput].name;
    console.log(response.data.results);
  } catch (error) {
    console.log(error);
  }
}

initializePage();