import GeraSenha from './GeraSenha';

const senhaGerada = document.querySelector('#senha-gerada');
const caracterSenha = document.querySelector('#caracter-senha');
const numeroSenha = document.querySelector('#numero-senha');
const maiusculas = document.querySelector('#maiusculas');
const minusculas = document.querySelector('#minusculas');
const simbolos = document.querySelector('#simbolos');
const botaoGerar = document.querySelector('#gerar-senha');

export default () => {
    botaoGerar.addEventListener('click', () => {
        senhaGerada.innerHTML = `<p class="fs-2 fw-medium"> ${gera()} </p>`;

        if(caracterSenha.value <= 6 || caracterSenha.value > 12) {
            return senhaGerada.innerHTML = `<p class="fs-2 fw-medium"> Não foi possivel gerar a senha. </p>`;
        }
    });
}

function gera() {
    const senha = GeraSenha(
        caracterSenha.value,
        maiusculas.checked,
        minusculas.checked,
        numeroSenha.checked,
        simbolos.checked
    );

    return senha || `<p class="fs-2 fw-medium"> Nada foi selecionado. </p>`;
}