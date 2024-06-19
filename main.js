let friend = [];
const textFriends = document.querySelector('.friends');
const btnAdicionar = document.querySelector('.add');
const listParticipantes = document.querySelector('.prize-draw');
const mensagemErro = document.querySelector('mensagem-erro');


/* botão adicionar amigos */
function btnAddFriends() {
    btnAddFriends.addEventListener('click', (event) => {
        event.preventDefaul()
        friend.push(textFriends.value);
        listParticipantes.textContent =`${textFriends.value}`;

    })
}

btnAddFriends()