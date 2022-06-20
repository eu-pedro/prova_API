// CRIANDO VARIÁVEL PARA CARD-BODY RECEBER SEUS FILHOS
let divPai = document.querySelector('#divPai')

const url = 'https://swapi.dev/api/starships/'

async function adicionarDados(){
 


  try {
    const resultado = await axios.get(url)
    
    const dados = resultado.data.results
    
    console.log(dados)
    
    
     //CRIANDO AS DIV'S DINAMICAMENTE


      

    // DIV 1 
    const div1 = document.createElement('div')
    div1.classList.add('row')
    div1.classList.add('row-cols-6')
    div1.classList.add('row-cols-md-1')
    div1.classList.add('g-4')
    
    
    // DIV 2
    const div2 = document.createElement('div')
    div2.classList.add('col-6')
    
    

    // DIV - CARD BODY
    const cardBody = document.createElement('div')
    cardBody.classList.add('card')
    cardBody.classList.add('card-body')

    // H5
    const titulo5 = document.createElement('h5')
    titulo5.classList.add('card-title')
    titulo5.classList.add('text-center')
    titulo5.textContent = dados[x].name

    // PARÁGRAFO
    const p = document.createElement('p')
    p.classList.add('card-text')
    p.classList.add('text-center')
    p.textContent = `Modelo: ${dados[x].model}`
      
    div1.appendChild(div2)  
    div2.appendChild(cardBody)
    cardBody.appendChild(titulo5)
    cardBody.appendChild(p)
    divPai.appendChild(div1)

    

    
    

    
  }
  
  catch (error) {
    console.log('${error}')
  }
  




}



// dados.map(function(elemento){
    //   console.log(elemento)
    //   return elemento
      
    // },1)












// CRIANDO EVENTO DE CLIQUE NO BOTÃO 'ADICIONAR'

 let adicionar = document.querySelector('#adicionar')

 x = -1
 adicionar.addEventListener('click', ()=>{
 x++

    adicionarDados()
 })
  

  // CRIANDO FUNÇÃO DE REMOVER 

  function removerDados(){
    if(divPai.children.length > 0){
      divPai.removeChild(divPai.lastElementChild)
    }
    
    
  }
  




 // CRIANDO BOTÃO DE REMOVER DADOS

 let remover = document.querySelector('#remover')
 remover.addEventListener('click', removerDados)