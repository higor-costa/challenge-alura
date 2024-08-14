'use strict';

const caixaTexto = acessaElementosDom('#caixaTexto');
const botaoCriptografar = acessaElementosDom('#botao-criptografar');
const botaoDescriptografar = acessaElementosDom('#botao-descriptografar');
const botaoCopiar = acessaElementosDom('#botao-copiar');
const textoDecodificado = acessaElementosDom('#texto-decodificado');
const conteinerResultado = acessaElementosDom('#conteiner-resultado');
const mensagemPadrao = acessaElementosDom('#mensagem-padrao');

function acessaElementosDom(elemento) {
  return document.querySelector(elemento);
}

function descriptografiaTexto() {
  const texto = caixaTexto.value;
  const textoDescriptografado = texto.replace(/(ai|enter|imes|ober|ufat)/g, (chave) => {
    switch (chave) {
      case 'ai':
        return 'a';
      case 'enter':
        return 'e';
      case 'imes':
        return 'i';
      case 'ober':
        return 'o';
      case 'ufat':
        return 'u';
      default:
      return letra;
    }
  });

  exibeResultadoDecodificacao(textoDescriptografado);
}

function exibeResultadoDecodificacao(texto) {
  textoDecodificado.innerText = `${texto}`;
  mensagemPadrao.style.display = 'none'; 
  conteinerResultado.style.display = 'flex'; 
}

function criptografaTexto(texto) {
  const textoCriptografado = texto.replace(/[aeiou]/g, (letra) => {
    switch (letra) {
      case 'a':
        return 'ai';
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return letra;
    }
  });

  exibeResultadoDecodificacao(textoCriptografado);
}

function verificaSeTextoValido() {
  const textoParaDecodificar = caixaTexto.value;
  const RegExp = /[A-ZÀ-Öà-ö@#$%^&*()_+={}\[\]|\\;:'"<>/`~]/u;

  RegExp.test(textoParaDecodificar)
    ? alert('O texto deve conter apenas letras minúsculas sem acentos. Caracteres especiais são permitidos somente se forem: ! ? , .')
    : criptografaTexto(textoParaDecodificar);
}

function copiarTexto() {
  navigator.clipboard
    .writeText(textoDecodificado.innerText)
    .then(() => {
      botaoCopiar.innerText = 'Copiado!';
      setTimeout(() => {
        botaoCopiar.innerText = 'Copiar';
      }, 1000);
    })
    .catch((err) => console.log('erro ao copiar texto: ', err));
}

botaoCriptografar.addEventListener('click', verificaSeTextoValido);
botaoDescriptografar.addEventListener('click', descriptografiaTexto);
botaoCopiar.addEventListener('click', copiarTexto);