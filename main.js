// Funçao de Rolar Para Topo
function rolarParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal de orçamento
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");

function abrirModal() {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
    const firstInput = modal.querySelector("input");
    if (firstInput) firstInput.focus();
}

function fecharModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
    document.body.style.overflow = "";
}

openModalButton.addEventListener("click", abrirModal);
closeModalButton.addEventListener("click", fecharModal);
modalOverlay.addEventListener("click", fecharModal);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        fecharModal();
    }
});

// Menu mobile
const navToggle = document.querySelector("#nav-toggle");
const mainNav = document.querySelector("#main-nav");

navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

mainNav.querySelectorAll(".nav-links").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});
