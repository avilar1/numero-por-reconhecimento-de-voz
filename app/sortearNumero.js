const menorValor = 1;
const maiorValor = 100;
const nSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
return  parseInt(Math.random() * (maiorValor + 1));
}


const elementoMenorValor = document.getElementById("menor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior");
elementoMaiorValor.innerHTML = maiorValor;

const elementoNumeroSecreto = document.getElementById("numero-secreto");
console.log(nSecreto);


