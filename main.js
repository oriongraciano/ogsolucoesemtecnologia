//Funçao de Rolar Para Topo
function rolarParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função de Abrir Modal
const openModalButton = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector(".modal");

openModalButton.addEventListener("click", function() {
    modal.style.display ="flex"
 })

 closeModal.addEventListener("click", function() {
    modal.style.display ="none"
 })