//Funçao de Rolar Para Topo
function rolarParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pgManutecao (){
    alert("Pagina em Manutenção. Tente novamente mais tarde!")
}

let cadastrar = document.querySelector("#cadastrarCliente")

cadastrar.addEventListener("click", () => {
    pgManutecao()
})