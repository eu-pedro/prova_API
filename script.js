// CRIANDO VARIÁVEL PARA CARD-BODY RECEBER SEUS FILHOS
let cardBody = document.querySelector('#cardbody')

async function adicionarDados(){
  const url = 'https://swapi.dev/api/starships/'


  try {
    const resultado = await axios.get(url)
    console.log(resultado.data.results)
    const dados = resultado.data.results
    

    // CRIANDO ELEMENTOS HTML DINAMICAMENTE
    for(elementos of dados){ 

      // CRIANDO TÍTULO DO CARD
      const titulo = document.createElement('h5')
      titulo.classList.add('card-title')
      titulo.textContent = elementos.name

      // CRIANDO PARÁGRAFO DO CARD ( ONDE IRÁ O TEXTO )
      const texto = document.createElement('p')
      texto.classList.add('card-text')
      texto.textContent = `Modelo: ${elementos.model}`
      // ENVIANDO AS TAG'S FILHAS, PARA O PAI CARD-BODY
      cardBody.appendChild(titulo)
      cardBody.append(texto)
    }
    

  } catch (error) {
    console.log('${error}')
  }
}




// CRIANDO EVENTO DE CLIQUE NO BOTÃO 'ADICIONAR'

let adicionar = document.querySelector('#adicionar')

adicionar.addEventListener('click', adicionarDados)
    

