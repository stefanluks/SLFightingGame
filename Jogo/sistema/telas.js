import Tela from "../modelos/Tela.js";
import JogoConfig from "./jogo-config.js";

const Intro = new Tela({ nome: "Introdução", ativo: true });
const Menu = new Tela({ nome: "Menu", ativo: false, background: "../Jogo/assets/sprites/bg-menu.png" });
const Seletor = new Tela({ nome: "Seletor", ativo: false });
const Batalha = new Tela({ nome: "Batalha", ativo: false });

const canvas = document.querySelector("#jogo");

//Configuração da Introdução//
let posY = canvas.height;
let IntroFrame = 0;
let exibir = false;

Intro.Atualizar = (canvas, ctx) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "45px Arial";
    ctx.fillText(JogoConfig.config.nome_do_jogo, canvas.width / 3, posY);
    ctx.font = "18px Arial";
    ctx.fillText("Versão: " + JogoConfig.config.versao, canvas.width / 2 - 60, posY + 40);
    ctx.font = "8px Arial";
    ctx.fillText("Desenvolvido por Stefan Lucas", canvas.width - 120, canvas.height - 10);

    IntroFrame++;
    if (posY > 150) posY -= 5;
    else if (IntroFrame % 100 == 0) exibir = !exibir;

    if (posY <= 150 && exibir) {
        ctx.font = "20px Arial";
        ctx.fillText("Aperte enter para continuar", canvas.width / 2 - 130, canvas.height / 2 + 100);
    }
}

Intro.teclasApertada = {
    Enter: () => {
        console.log("enter!!")
        Intro.jogo.TrocarTela("Menu");
    }
}

//Configuração do Menu//

Menu.componentes = {
    btnJogarArcade: {
        x: 30,
        y: canvas.height - 210,
        w: 150,
        h: 50,
        text: "Arcade",
        bgColor: "blue",
        textColor: "white",
        font: "20px Arial",
        textXadd: 40,
        textYadd: 30,
        hover: false,
        bgColorHover: "red",
    },
    btnJogarVS: {
        x: 30,
        y: canvas.height - 150,
        w: 150,
        h: 50,
        text: "Versus",
        bgColor: "blue",
        textColor: "white",
        font: "20px Arial",
        textXadd: 40,
        textYadd: 30,
        hover: false,
        bgColorHover: "red",
    },
    btnControles: {
        x: 30,
        y: canvas.height - 90,
        w: 150,
        h: 50,
        text: "Controles",
        bgColor: "blue",
        textColor: "white",
        font: "20px Arial",
        textXadd: 40,
        textYadd: 30,
        hover: false,
        bgColorHover: "red",
    }
}


Menu.Atualizar = (canvas, ctx) => {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Menu.background, 0, 0, canvas.width, canvas.height);
    //botões do menu
    let btnArcade = Menu.componentes.btnJogarArcade;
    if (btnArcade.hover) ctx.fillStyle = btnArcade.bgColorHover;
    else ctx.fillStyle = btnArcade.bgColor;
    ctx.fillRect(btnArcade.x, btnArcade.y, btnArcade.w, btnArcade.h);
    ctx.fillStyle = btnArcade.textColor;
    ctx.font = btnArcade.font;
    ctx.fillText(btnArcade.text, btnArcade.x + btnArcade.textXadd, btnArcade.y + btnArcade.textYadd);
    let btnVS = Menu.componentes.btnJogarVS;
    if (btnVS.hover) ctx.fillStyle = btnVS.bgColorHover;
    else ctx.fillStyle = btnVS.bgColor;
    ctx.fillRect(btnVS.x, btnVS.y, btnVS.w, btnVS.h);
    ctx.fillStyle = btnVS.textColor;
    ctx.font = btnVS.font;
    ctx.fillText(btnVS.text, btnVS.x + btnVS.textXadd, btnVS.y + btnVS.textYadd);
    let btnControles = Menu.componentes.btnControles;
    if (btnControles.hover) ctx.fillStyle = btnControles.bgColorHover;
    else ctx.fillStyle = btnControles.bgColor;
    ctx.fillRect(btnControles.x, btnControles.y, btnControles.w, btnControles.h);
    ctx.fillStyle = btnControles.textColor;
    ctx.font = btnControles.font;
    ctx.fillText(btnControles.text, btnControles.x + btnControles.textXadd, btnControles.y + btnControles.textYadd);
}

Menu.MovimentoDoMouse = evento => {
    let PosMouse = {
        x: evento.clientX - Menu.jogo.canvas.offsetLeft,
        y: evento.clientY - Menu.jogo.canvas.offsetTop
    }
    if (PosMouse.x >= Menu.componentes.btnJogarArcade.x &&
        PosMouse.x <= Menu.componentes.btnJogarArcade.x + Menu.componentes.btnJogarArcade.w &&
        PosMouse.y >= Menu.componentes.btnJogarArcade.y &&
        PosMouse.y <= Menu.componentes.btnJogarArcade.y + Menu.componentes.btnJogarArcade.h) {
        Menu.componentes.btnJogarArcade.hover = true;
    } else {
        Menu.componentes.btnJogarArcade.hover = false;
    }
    if (PosMouse.x >= Menu.componentes.btnJogarVS.x &&
        PosMouse.x <= Menu.componentes.btnJogarVS.x + Menu.componentes.btnJogarVS.w &&
        PosMouse.y >= Menu.componentes.btnJogarVS.y &&
        PosMouse.y <= Menu.componentes.btnJogarVS.y + Menu.componentes.btnJogarVS.h) {
        Menu.componentes.btnJogarVS.hover = true;
    } else {
        Menu.componentes.btnJogarVS.hover = false;
    }
    if (PosMouse.x >= Menu.componentes.btnControles.x &&
        PosMouse.x <= Menu.componentes.btnControles.x + Menu.componentes.btnControles.w &&
        PosMouse.y >= Menu.componentes.btnControles.y &&
        PosMouse.y <= Menu.componentes.btnControles.y + Menu.componentes.btnControles.h) {
        Menu.componentes.btnControles.hover = true;
    } else {
        Menu.componentes.btnControles.hover = false;
    }
}

Menu.MouseClique = evento => {
    if (Menu.componentes.btnJogarArcade.hover) {
        Menu.jogo.parametros["modo"] = "arcade";
        Menu.jogo.TrocarTela("Seletor");
    }
    if (Menu.componentes.btnJogarVS.hover) {
        Menu.jogo.parametros["modo"] = "versus";
        Menu.jogo.TrocarTela("Seletor");
    }
}

//Configuração do seletor de personagens

Seletor.componentes = {
    btnVoltar: {
        x: 10,
        y: 10,
        w: 70,
        h: 40,
        text: "Voltar",
        bgColor: "blue",
        textColor: "white",
        font: "20px Arial",
        textXadd: 10,
        textYadd: 25,
        hover: false,
        bgColorHover: "red",
    },
    personagens: [],
}

Seletor.Atualizar = (canvas, ctx) => {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillText(Seletor.jogo.parametros.modo, canvas.width / 2, canvas.height / 2);
    let btnVoltar = Seletor.componentes.btnVoltar;
    if (btnVoltar.hover) ctx.fillStyle = btnVoltar.bgColorHover;
    else ctx.fillStyle = btnVoltar.bgColor;
    ctx.fillRect(btnVoltar.x, btnVoltar.y, btnVoltar.w, btnVoltar.h);
    ctx.fillStyle = btnVoltar.textColor;
    ctx.font = btnVoltar.font;
    ctx.fillText(btnVoltar.text, btnVoltar.x + btnVoltar.textXadd, btnVoltar.y + btnVoltar.textYadd);
}

Seletor.MovimentoDoMouse = evento => {
    let PosMouse = {
        x: evento.clientX - Seletor.jogo.canvas.offsetLeft,
        y: evento.clientY - Seletor.jogo.canvas.offsetTop
    }
    if (PosMouse.x >= Seletor.componentes.btnVoltar.x &&
        PosMouse.x <= Seletor.componentes.btnVoltar.x + Seletor.componentes.btnVoltar.w &&
        PosMouse.y >= Seletor.componentes.btnVoltar.y &&
        PosMouse.y <= Seletor.componentes.btnVoltar.y + Seletor.componentes.btnVoltar.h) {
        Seletor.componentes.btnVoltar.hover = true;
    } else {
        Seletor.componentes.btnVoltar.hover = false;
    }
}

Seletor.MouseClique = evento => {
    if (Seletor.componentes.btnVoltar.hover) {
        Seletor.jogo.TrocarTela("Menu");
    }
}

const TELAS = [Intro, Menu, Seletor, Batalha];

export default TELAS;