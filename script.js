const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoVoltar = document.getElementById("anterior")
const botaoAvancar = document.getElementById("proximo");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let estaTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-fill");
    botaoPlayPause.classList.add("bi-pause");

}

function trocarNomeFaixa() {
     nomeCapitulo.innerText = "Capitulo " + capituloAtual;

}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add("bi-play-fill");
    botaoPlayPause.classList.remove("bi-pause");
}

function tocarOuPausar() {
    if ( estaTocando === 0 ) {
        tocarFaixa();
        estaTocando = 1;
    }
    else {
        pausarFaixa();
        estaTocando = 0;
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos){ 
        capituloAtual = 1; 
    } else {

        capituloAtual = capituloAtual + 1 
    }

    audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa() {
    if (capituloAtual === 1){ 
        capituloAtual = numeroCapitulos; 
    } else {

        capituloAtual = capituloAtual - 1
    }
    
    audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1;
    trocarNomeFaixa();
}


botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
