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
  let valor = document.createElement("span");

  card.classList.add("card");
  imagem.classList.add("img");
  titulo.classList.add("nome");
  setor.classList.add("secao");
  valor.classList.add("preco");

  vitrine.appendChild(card);
  card.appendChild(imagem);
  card.appendChild(titulo);
  card.appendChild(setor);
  card.appendChild(valor);

  imagem.src = elemento.img;
  titulo.innerText = `${elemento.nome}`;
  setor.innerText = `${elemento.secao}`;
  valor.innerText = `R$ ${elemento.preco},00`;
}

function SetTodosProdutos() {
  botaoTodos.addEventListener("click", () => {
    vitrine.innerHTML = "";
    let accValor = [];
    produtos.forEach((elemento) => {
      accValor.push(elemento.preco);
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
        accValor.push(elemento.preco);
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
        accValor.push(elemento.preco);
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
      if (elemento.secao == "Laticínio") {
        accValor.push(elemento.preco);
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
      if (inputPesquisa.value == elemento.nome) {
        accValor.push(elemento.preco);
        CriarCard(elemento);
      }
      precoTotal.innerText = `R$ ${accValor.reduce(Soma, 0).toFixed(2)}`;
    });
  });
}
Pesquisa();

function Soma(acumulador, indexAtual) {
  return acumulador + indexAtual;
}
