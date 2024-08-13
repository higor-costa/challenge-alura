'use strict';

const caixaTexto = acessaElementosDom('#caixaTexto');
const botaoCriptografar = acessaElementosDom('#botao-criptografar');
const textoDecodificado = acessaElementosDom('#texto-decodificado');
const conteinerResultado = acessaElementosDom('#conteiner-resultado');
const mensagemPadrao = acessaElementosDom('#mensagem-padrao');

function acessaElementosDom(elemento) {
  return document.querySelector(elemento);
}

function exibeResultadoCriptografia(textoCriptografo) {
  textoDecodificado.innerText = `${textoCriptografo}`;
  mensagemPadrao.style.display = 'none'; 
  conteinerResultado.style.display = 'flex'; 
}

function criptografaTexto(texto) {
  const textoCriptografo = texto.replace(/[aeiou]/g, (letra) => {
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
}

function verificaSeTextoValido() {
  const textoParaDecodificar = caixaTexto.value;
  const RegExp = /[A-ZÀ-ÖØ-Ýà-öø-ÿ]/u;
  // Explicação da Expressão Regular
  // [A-Z]: Corresponde a qualquer letra maiúscula do alfabeto inglês.
  // À-Ö: Corresponde a letras maiúsculas com acento no intervalo Unicode de À a Ö.
  // Ø-Ý: Corresponde a letras maiúsculas com acento no intervalo Unicode de Ø a Ý.
  // à-ö: Corresponde a letras minúsculas com acento no intervalo Unicode de à a ö.
  // ø-ÿ: Corresponde a letras minúsculas com acento no intervalo Unicode de ø a ÿ.
  // /u: O modificador u indica que a expressão deve ser tratada como Unicode, o que é útil para caracteres acentuados.

  RegExp.test(textoParaDecodificar)
    ? alert('O texto deve conter apenas letras minúsculas e sem acento.')
    : criptografaTexto(textoParaDecodificar);
}

botaoCriptografar.addEventListener('click', verificaSeTextoValido);