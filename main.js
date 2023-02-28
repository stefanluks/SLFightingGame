import Jogo from "./Jogo/modelos/Jogo.js";
import Funcoes from "./Jogo/pacotes/config-base/ajuste.js";
import JogoConfig from "./Jogo/sistema/jogo-config.js";

window.onload = () => {
    window.addEventListener("resize", Funcoes.AjsutarTela);

    Funcoes.AjsutarTela();

    document.querySelector("#btn-abrir-modal").addEventListener("click", () => {
        Funcoes.AbrirModal(document.querySelector("#modal-sobre"));
    });

    document.querySelector("#btn-fechar-modal").addEventListener("click", () => {
        Funcoes.FecharModal(document.querySelector("#modal-sobre"));
    });

    const canvas = document.querySelector("#jogo");
    canvas.width = 900;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");

    const JOGO = new Jogo(canvas, ctx, JogoConfig.config);

    JOGO.Iniciar();

    if (JOGO.executando) Atualizar();

    function Atualizar() {
        JOGO.Atualizar();
        requestAnimationFrame(Atualizar);
    }

    window.addEventListener("keydown", tecla => {
        JOGO.TeclaApertada(tecla.key);
    });
    window.addEventListener("keypress", tecla => {
        JOGO.TeclaPressionada(tecla.key);
    });
    window.addEventListener("keyup", tecla => {
        JOGO.TeclaSolta(tecla.key);
    });

    window.addEventListener("mousemove", event => { JOGO.MovimentoDoMouse(event); });
}