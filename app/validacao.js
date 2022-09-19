function verificaSeChuteEValido(chute) {
    const numero = +chute;
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>
        valor inválido: fale um número entre
        ${menorValor} e ${maiorValor}
        </div>`
        return;
    }

    if(numero === nSecreto){
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou o número secreto!</h2>
        <h3>O número secreto era ${nSecreto}</h3>

        <button id="jogarNovamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > nSecreto){
        elementoChute.innerHTML += `
        <div>O número é menor <i class="fa-solid fa-down-long"></i> </div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número é maior <i class="fa-solid fa-up-long"></i> </div>
        `
    }

    
}



function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click',e => {
    if(e.target.id == 'jogarNovamente'){
        window.location.reload();
    }
})