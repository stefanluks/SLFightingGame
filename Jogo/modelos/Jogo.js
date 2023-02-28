export default class Jogo {
    constructor(canvas, contexto, configuracoes) {
        this.canvas = canvas;
        this.contexto = contexto;
        this.telas = configuracoes.telas;
        this.nome_do_jogo = configuracoes.nome_do_jogo;
        this.versao = configuracoes.versao;
        this.executando = false;
        this.telaAtiva = {};
        this.parametros = {};
    }

    Iniciar() {
        this.executando = true;
        this.telas.forEach(tela => {
            tela.jogo = this;
            if (tela.ativo) this.telaAtiva = tela;
        });
        this.canvas.addEventListener("click", event => this.MouseClique(event));
        this.telaAtiva.Iniciar();
    }

    Atualizar() {
        this.telaAtiva.Atualizar(this.canvas, this.contexto);
    }

    TeclaPressionada(tecla) {
        this.telaAtiva.TeclaPressionada(tecla);
    }

    TeclaApertada(tecla) {
        this.telaAtiva.TeclaApertada(tecla);
    }

    TeclaSolta(tecla) {
        this.telaAtiva.TeclaSolta(tecla);
    }

    TrocarTela(nome_da_tela) {
        this.telas.forEach(tela => {
            tela.ativo = false;
            if (tela.nome == nome_da_tela) this.telaAtiva = tela;
        });
        this.telaAtiva.ativo = true;
    }

    MovimentoDoMouse(evento) {
        this.telaAtiva.MovimentoDoMouse(evento);
    }

    MouseClique(evento) {
        this.telaAtiva.MouseClique(evento);
    }
}