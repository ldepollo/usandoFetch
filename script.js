// Neste exercício você irá utilizar o fetch que vimos na aula para fazer uma requisição a uma API.

// Abra o link da documentação e encontre o endpoint que fornece dados de valor, marca, modelo e ano de um determinado carro (https://deividfortuna.github.io/fipe/).

// Crie um código em Javascript para obter os dados de um determinado carro através da API e mostre esses dados em uma página HTML. Você pode criar uma estilização para a página se preferir, mas seu CSS não será avaliado nesse exercício.

const btnCarregar = document.querySelector('.btnCarregar');
const textoContent = document.querySelector('.content');

const buscarDadosDeCarroNaApi = () => {
  return fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/2380/anos/1986-1')
    .then(response => response.json())
    .catch(err => console.log("Aconteceu algum erro ao carregar as informações!"));
}

const preencherConteudo = ({ Modelo, Marca, Valor, AnoModelo, Combustivel, MesReferencia }) => {
  textoContent.innerHTML = `<img src="./images/img-fusca.png" alt="Fusca 1986">
  <div class="carInfo">
  <p>Modelo: ${Modelo}<p>
  <p>Marca: ${Marca}<p>
  <p>Ano/Modelo: ${AnoModelo}<p>
  <p>Tipo de combustível: ${Combustivel}<p>
  <p>Valor: ${Valor}<p>
  <p>Mês de referência: ${MesReferencia}<p>
  </div>`
};

const carregarDados = () => {
  textoContent.textContent = `Carregando Informações...`

  buscarDadosDeCarroNaApi()
    .then(values => {
      preencherConteudo(values);
    })
    .catch(err => {
      textoContent.textContent = `Aconteceu algum erro ao carregar as informações :(`
    });

};

btnCarregar.addEventListener('click', carregarDados);