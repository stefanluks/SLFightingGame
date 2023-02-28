const Funcoes = {
    AjsutarTela: () => {
        return true;
    },
    AbrirModal: (modal) => {
        console.log(modal)
        modal.style.top = "0px";
    },
    FecharModal: (modal) => {
        modal.style.top = "-100%";
    }
}

export default Funcoes;