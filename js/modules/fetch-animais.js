import AnimaNumeros from "./anima-numeros.js";

export default function FetchAnimais(url, target) {
  // criar a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  //preenche cada animal no DOM
  function preencherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  //anima os numeros de cada animal
  function animaAnimaisNumero() {
    const animaNumero = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumero.init();
  }

  //puxa o animais atraves de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // espera a resposta do fetch e transforma o fetch em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //após a transformação do arquivo em JSON
      // cria
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
