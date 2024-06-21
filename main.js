let friends = [];
const txtFriends = document.querySelector('.friends-input');
//Botões
const btnAddFriends = document.querySelector('.add');
const btnReset = document.querySelector('.reset');
const btnPrize  = document.querySelector('.prize')

const listaParticipantes = document.querySelector('.prize-draw');
const resultado = document.querySelector('.results');
const mensagemErro = document.querySelector('.mensagem-erro');

//Botão Adicionar Amigos
btnAddFriends.addEventListener('click', () => {
    if (validateFriend()) {
        addFriends()

    }
});

//
txtFriends.addEventListener('click', () => {
    txtFriends.value = '';
})

btnPrize.addEventListener('click', () => {
    btnSortear()
})

function addFriends() {
    if (friends.includes(txtFriends.value)) {
        mensagemErro.textContent = `${txtFriends.value} já está na lista! Adicione outro nome`;
        return;
    }
    friends.push(txtFriends.value);
    listaParticipantes.textContent = friends.join(",");
    txtFriends.value = '';

}

function validateFriend() {
    if (txtFriends.value.length <= 3) {
        mensagemErro.textContent = "Erro - Insira um nome"
        return false
    }
    return true;

}

btnReiniciar()
//Botão Reiniciar
function btnReiniciar() {
    btnReset.addEventListener('click', () => {
        txtFriends.value = '';
        friends = [];
        listaParticipantes.innerHTML = '';

    })
}

