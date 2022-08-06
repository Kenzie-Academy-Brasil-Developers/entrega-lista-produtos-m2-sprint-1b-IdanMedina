const vitrine = document.querySelector(".listaProdutos");
let botaoTodos = document.querySelector("#todos");
let botaoHortifruti = document.querySelector("#horti");
let botaoPanificadora = document.querySelector("#pani");
let botaoLaticinios = document.querySelector("#lati");
let botaoPesquisa = document.querySelector("#lente");
let inputPesquisa = document.querySelector(".campoBuscaPorNome");
let precoTotal = document.querySelector("#nulo");
precoTotal.innerText = `R$ 0.00`;

function CriarCard(elemento) {
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
produtos.forEach(CriarCard)
 

function Soma(acumulador, indexAtual) {
  return acumulador + indexAtual;
}


function SetTodosProdutos() {
  
  botaoTodos.addEventListener("click", () => {
    vitrine.innerHTML = "";
    let accValor = [];
    produtos.forEach((elemento) => {
      let precoNum = parseFloat(elemento.preco)
      accValor.push(precoNum);
      CriarCard(elemento);
    });
    precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;
  });
}
SetTodosProdutos();

function SetHortifruti() {
  botaoHortifruti.addEventListener("click", () => {
    vitrine.innerHTML = "";
    let accValor = [];
    produtos.forEach((elemento) => {
      if (elemento.secao == "Hortifruti") {
        console.log(elemento)
        let precoNum = parseFloat(elemento.preco)
        accValor.push(precoNum);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;
    });
  });
}
SetHortifruti();

function SetPanificadora() {
  botaoPanificadora.addEventListener("click", () => {
    vitrine.innerHTML = "";
    let accValor = [];
    produtos.forEach((elemento) => {
      if (elemento.secao == "Panificadora") {
        let precoNum = parseFloat(elemento.preco)
      accValor.push(precoNum);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;
    });
  });
}
SetPanificadora();

function SetLaticinios() {
  botaoLaticinios.addEventListener("click", () => {
    vitrine.innerHTML = "";
    let accValor = [];
    produtos.forEach((elemento) => {
      if (elemento.secao == "Laticinio") {
        let precoNum = parseFloat(elemento.preco)
      accValor.push(precoNum);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;
    });
  });
}
SetLaticinios();

function Pesquisa() {
  botaoPesquisa.addEventListener("click", () => {
    vitrine.innerHTML = "";
    let accValor = [];
    produtos.forEach((elemento) => {
      if (inputPesquisa.value == elemento.nome.toLowerCase()) {
        let precoNum = parseFloat(elemento.preco)
      accValor.push(precoNum);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;

      if (inputPesquisa.value == elemento.categoria.toLowerCase()) {
        let precoNum = parseFloat(elemento.preco)
      accValor.push(precoNum);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;

      if (inputPesquisa.value == elemento.secao.toLowerCase()) {
        let precoNum = parseFloat(elemento.preco)
      accValor.push(precoNum);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;
    });
  });
}
Pesquisa();
