export default class Tela {
    constructor({ nome, ativo = false }) {
        this.nome = nome;
        this.ativo = ativo;
        this.teclas = {};
        this.teclasApertada = {};
        this.teclasSolta = {};
        this.jogo = null;
        this.componentes = {};
    }

    Iniciar() {
        console.log("Iniciando tela: " + this.nome);
    }

    Atualizar(canvas, contexto) {
        console.log("Atualizando tela: " + this.nome);
    }

    Desenhar(canvas, contexto) {
        console.log("Desenhando tela: " + this.nome);
    }

    TeclaPressionada(tecla) {
        let funcaotecla = this.teclas[tecla];
        if (funcaotecla) funcaotecla();
    }

    TeclaApertada(tecla) {
        let funcaotecla = this.teclasApertada[tecla];
        if (funcaotecla) funcaotecla();
    }

    TeclaSolta(tecla) {
        let funcaotecla = this.teclasSolta[tecla];
        if (funcaotecla) funcaotecla();
    }

    MovimentoDoMouse(evento) {}

    MouseClique(evento) {}
}