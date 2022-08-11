const vitrine = document.querySelector(".listaProdutos");
const arrayCompras = [];

let botaoTodos = document.querySelector("#todos");
let botaoHortifruti = document.querySelector("#horti");
let botaoPanificadora = document.querySelector("#pani");
let botaoLaticinios = document.querySelector("#lati");
let botaoPesquisa = document.querySelector("#lente");
let inputPesquisa = document.querySelector(".campoBuscaPorNome");
let cestaDeCompras = document.querySelector(".cesta");
let logoCesta = document.querySelector(".cestinha");
let textoCesta = document.querySelector("#textoCesta");
let aside = document.querySelector(".asideCompras");

function criarCard(elemento) {
  let card = document.createElement("li");
  let imagem = document.createElement("img");
  let titulo = document.createElement("h3");
  let setor = document.createElement("p");
  let nutriList = document.createElement("ol");
  let aquisicao = document.createElement("div");
  let valor = document.createElement("span");
  let comprar = document.createElement("button");

  card.classList.add("card");
  imagem.classList.add("img");
  titulo.classList.add("nome");
  setor.classList.add("secao");
  nutriList.classList.add("nutriList");
  aquisicao.classList.add("aquisicao");
  valor.classList.add("preco");
  comprar.classList.add("comprar");

  imagem.src = elemento.img;
  titulo.innerText = `${elemento.nome}`;
  setor.innerText = `${elemento.secao}`;
  valor.innerText = `R$ ${elemento.preco}`;
  comprar.innerText = "Comprar"
  comprar.type = "submit";

  comprar.addEventListener("click", () =>{
    arrayCompras.unshift(elemento);
    cestaDeCompras.innerHTML = "";
    cestaDeCompras.classList.add("cestaCheia");
    addCarrinho(arrayCompras);

    if(arrayCompras.length <= 1){  
      criarPreco(); 
      calcularPreco(arrayCompras);
    }
    
    let totalValue = document.querySelector(".totalValue");
    let quantValue = document.querySelector(".quantValue");  
    quantValue.innerText = `${arrayCompras.length}`;
    totalValue.innerText = `${calcularPreco(arrayCompras)}`;
  })

  card.appendChild(imagem);
  card.appendChild(titulo);
  card.appendChild(setor);
  card.appendChild(nutriList);
  card.appendChild(aquisicao);
  aquisicao.appendChild(valor);
  aquisicao.appendChild(comprar);

  for(let nutriente = 0; nutriente < elemento.componentes.length; nutriente++){
    let nutri = document.createElement("li");
    nutri.classList.add("nutrientes");
    let valorNutri = elemento.componentes[nutriente]
    nutri.innerText = `${valorNutri}`
    nutriList.appendChild(nutri)
  }

  vitrine.appendChild(card);
}
produtos.forEach(criarCard)
 

function soma(acumulador, indexAtual) {
  return acumulador + indexAtual;
}

/* function subtrai(acumulador, indexAtual){
  return acumulador - indexAtual
} */

function setTodosProdutos() {
  
  botaoTodos.addEventListener("click", () => {
    vitrine.innerHTML = "";
    produtos.forEach((elemento) => {
      criarCard(elemento);
    });
  });
}
setTodosProdutos();

function setHortifruti() {
  botaoHortifruti.addEventListener("click", () => {
    vitrine.innerHTML = "";
    produtos.forEach((elemento) => {
      if (elemento.secao == "Hortifruti") {
        criarCard(elemento);
      }
    });
  });
}
setHortifruti();

function setPanificadora() {
  botaoPanificadora.addEventListener("click", () => {
    vitrine.innerHTML = "";
    produtos.forEach((elemento) => {
      if (elemento.secao == "Panificadora") {
        criarCard(elemento);
      }
    });
  });
}
setPanificadora();

function setLaticinios() {
  botaoLaticinios.addEventListener("click", () => {
    vitrine.innerHTML = "";
    produtos.forEach((elemento) => {
      if (elemento.secao == "Laticinio") {
        criarCard(elemento);
      }
    });
  });
}
setLaticinios();

function pesquisa() {
  botaoPesquisa.addEventListener("click", () => {
    vitrine.innerHTML = "";
    produtos.forEach((elemento) => {
      if (inputPesquisa.value == elemento.nome.toLowerCase() || inputPesquisa.value == elemento.categoria.toLowerCase() || inputPesquisa.value == elemento.secao.toLowerCase() || inputPesquisa.value == elemento.nome.toUpperCase() || inputPesquisa.value == elemento.categoria.toUpperCase() || inputPesquisa.value == elemento.secao.toUpperCase()) {
        criarCard(elemento);
      }
    });
  });
}
pesquisa();

function addCarrinho(produtos) {
    produtos.forEach((produto) =>{
    let cardCompra = document.createElement("li");
    let imagemCompra = document.createElement("img");
    let infoCompra = document.createElement("div");
    let nomeCompra = document.createElement("p");
    let secaoCompra = document.createElement("p");
    let precoCompra = document.createElement("span");
    let removeCompra = document.createElement("button");
    let lixeira = document.createElement("img");

    cestaDeCompras.classList.add("cestaCheia")
    cardCompra.classList.add("cardCompra")
    imagemCompra.classList.add("imgCompra")
    infoCompra.classList.add("infoCompra")
    nomeCompra.classList.add("nomeCompra")
    secaoCompra.classList.add("secaoCompra")
    precoCompra.classList.add("precoCompra")
    removeCompra.classList.add("removeCompra")

    imagemCompra.src = produto.img;
    nomeCompra.innerText = `${produto.nome}`;
    secaoCompra.innerText = `${produto.secao}`;
    precoCompra.innerText = `R$ ${produto.preco}`;
    removeCompra.type = "submit";
    removeCompra.id = produto.id;
    lixeira.id = produto.id;
    lixeira.src = "./src/img/trash.png";

    cestaDeCompras.appendChild(cardCompra);
    cardCompra.appendChild(imagemCompra);
    cardCompra.appendChild(infoCompra);
    infoCompra.appendChild(nomeCompra);
    infoCompra.appendChild(secaoCompra);
    infoCompra.appendChild(precoCompra);
    cardCompra.appendChild(removeCompra);
    removeCompra.appendChild(lixeira);

    removeCompra.addEventListener("click", (element) => {
      let index = arrayCompras.findIndex((item) => item.id == element.target.id)
      console.log(arrayCompras)
      console.log(index)
      arrayCompras.splice(index,1);
      console.log(arrayCompras)
      cardCompra.remove();
      calcularPreco(arrayCompras);

      let totalValue = document.querySelector(".totalValue");
      let quantValue = document.querySelector(".quantValue");  
      quantValue.innerText = `${arrayCompras.length}`;
      totalValue.innerText = `${calcularPreco(arrayCompras)}`;

      if(arrayCompras.length == 0){
        cestaDeCompras.innerHTML =""
        cestaDeCompras.classList.remove("cestaCheia");
        cestaDeCompras.classList.add("cesta");
        cestaDeCompras.appendChild(logoCesta);
        cestaDeCompras.appendChild(textoCesta);
        removerPreco();
      }
    })
    })
}

function criarPreco(){
  let quantidade = document.createElement("div");
  let total = document.createElement("div");
  let quantText = document.createElement("p");
  let quantValue = document.createElement("p");
  let totalText = document.createElement("p");
  let totalValue = document.createElement("span");

  quantidade.classList.add("quantidade");
  total.classList.add("total");
  quantText.classList.add("quantText");
  quantValue.classList.add("quantValue");
  totalText.classList.add("totalText");
  totalValue.classList.add("totalValue");

  aside.appendChild(quantidade);
  aside.appendChild(total);
  quantidade.appendChild(quantText);
  quantidade.appendChild(quantValue);
  total.appendChild(totalText);
  total.appendChild(totalValue);

  quantText.innerText = "Quantidade";
  totalText.innerText = "Total";
}

function removerPreco(){
  let quantidade = document.querySelector(".quantidade");
  let total = document.querySelector(".total");
 
  aside.removeChild(quantidade);
  aside.removeChild(total);
}

function calcularPreco(array){
let accValor = []
array.forEach((element) => {
let precoNum = parseFloat(element.preco)
accValor.push(precoNum)}
)
let valorFinal = accValor.reduce(soma, 0).toFixed(2)
return valorFinal
}
