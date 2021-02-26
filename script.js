const click = document.querySelector(".btn-submit");
click.addEventListener("click", function() {
    alert("Você clicou!!");
});
//EVENTO NOME
const inputNome = document.querySelector("#input-nome");
inputNome.addEventListener("focus", function() {
    inputNome.style.borderColor = "#5F7C8A"
});
inputNome.addEventListener("blur", function() {
    inputNome.style.borderColor = "#CCC"
});
//EVENTO EMAIL
const inputEmail = document.querySelector("#input-email");
inputEmail.addEventListener("focus", function() {
    inputEmail.style.borderColor = "#5F7C8A"
});
inputEmail.addEventListener("blur", function() {
    inputEmail.style.borderColor = "#CCC"
});
//EVENTO SENHA
const inputSenha = document.querySelector("#input-senha");
inputSenha.addEventListener("focus", function() {
    inputSenha.style.borderColor = "#5F7C8A"
});
inputSenha.addEventListener("blur", function() {
    inputSenha.style.borderColor = "#CCC"
});
//ABERTO A MELHORIAS...