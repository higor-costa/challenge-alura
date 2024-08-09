'use strict';

const caixaTexto = acessaElementosDom('#caixaTexto');
const botaoCriptografar = acessaElementosDom('#botao-criptografar');

function acessaElementosDom(elemento) {
  return document.querySelector(elemento);
}
