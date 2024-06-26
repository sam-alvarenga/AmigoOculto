
//Botões
const btnAddFriends = document.querySelector('.add');
const btnPrize = document.querySelector('.prize');
const btnReset = document.querySelector('.reset');

const txtFriends = document.querySelector('.friends-input');
const listaParticipantes = document.querySelector('.prize-draw');
const mensagemErro = document.querySelector('.mensagem-erro');
const sorteio = document.querySelector('.results');

let i = listaParticipantes.lenght - 1;
let friends = [];

btnAddFriends.addEventListener('click', () => {
    if (validateFriend()) {
        addFriends()

    }
});

//
txtFriends.addEventListener('click', () => {
    txtFriends.value = '';
})

btnReset.addEventListener('click', () => {
    reiniciar()

});

btnPrize.addEventListener('click', () => {
    sortear()
})

//Botão Adicionar Amigos
function addFriends() {
    if (friends.includes(txtFriends.value)) {
        mensagemErro.textContent = `${txtFriends.value} já está na lista! Adicione outro nome`;
        return;
    }

    LimparMsgErro()
    friends.push(txtFriends.value);
    listaParticipantes.textContent = friends.join(",");
    txtFriends.value = '';

}

function validateFriend() {
    if (txtFriends.value.length <= 3) {
        mensagemErro.textContent = "Erro - Insira um nome"
        return false;
    }
    return true;

}

function LimparMsgErro() {
    // console.log(LimparMsgErro)
    mensagemErro.textContent = '';
}

function mostrarErro(textoMensagem) {
    mensagemErro.textContent = `ERRO: ${textoMensagem}`;
}


//Botão Reiniciar

function reiniciar() {
    txtFriends.value = '';
    friends = [];
    listaParticipantes.innerHTML = '';
    sorteio.innerHTML = '';
}

// EMBARALHAMENTO

function embaralhar(listaNomes) {
    for (let indice = listaNomes.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaNomes[indice - 1], listaNomes[indiceAleatorio]] = [listaNomes[indiceAleatorio], listaNomes[indice - 1]];
    }
}

//BOTÂO SORTEIO

function sortear() {
    if (friends.length < 4) {
        mostrarErro('Adicionar ao menos 4 amigos')
        return;

    }
    embaralhar(friends);
    sorteio.innerHTML = "";
    for (let i = 0; i < friends.length; i++) {
        if (i == friends.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + '<span>' + friends[i] + ' ➜ ' + friends[0] + '</span>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + '<span>' + friends[i] + ' ➜ ' + friends[i + 1] + '</span>'
        }
    }

}


