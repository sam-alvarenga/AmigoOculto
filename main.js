let friend = [];
const textFriends = document.querySelector('.friends');
const btnAddFriends = document.querySelector('.add');
const listParticipantes = document.querySelector('.prize-draw');
const mensagemErro = document.querySelector('.mensagem-erro');

btnAddFriends.addEventListener('click', (event) => {
    if (validateFriend()) {
        addFriends();
    }
});
textFriends.addEventListener('click', () => {
    textFriends.value = '';
})

function addFriends() {
    if (friend.includes(textFriends.value)) {
        mensagemErro.textContent = `${textFriends.value} já está na lista! Adicione outro nome`;
        return;
    }
    friend.push(textFriends.value);
    listParticipantes.textContent = friend.join(",");
    textFriends.value = '';

}

function validatefriend() {
    if (textFriends.value.length === 0) {
        mensagemErro.textContent = "Erro - Insira um nome"
        return false
    }
    return true;

}