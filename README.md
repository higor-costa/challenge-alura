# **Projeto de Lista de Tarefas utilizando ReactJS**

### Descrição:

Este projeto trata-se de um decodificador de texto, um desafio projeto proposto pelo programa One Next Education. Para a estrutura do projeto foram utilizadas HTML5 e CSS3, enquanto a lógica foi desenvolvida com JavaScript. Abaixo estão detalhadas as principais características e tecnologias utilizadas neste projeto.


### Interações:

- Digitar texto
- Criptografar texto
- Descriptografar texto
- Copiar texto resultante da criptografia/descriptografia

### Características:

- **Tecnologias Utilizadas:** HTML5, CSS3 e JavaScript

### Desenvolvimento:

#### Explicação da Expressão Regular:

Um expressão regular (RegExp) foi utilizada para checar se o texto está de acordo com as regras de négocio:

- **A-Z**: Corresponde a qualquer letra maiúscula
- **À-Ö**: Corresponde a letras maiúsculas com acento
- **à-ö**: Corresponde a letras minúsculas com acento
- **/u**: O modificador u indica que a expressão deve ser tratada como Unicode, o que é útil para caracteres acentuados

#### Como funciona a criptografia e a descriptografia:

**Método replace:**

O método replace é usado para substituir partes de uma string. Ele recebe dois parâmetros:
O primeiro é uma expressão regular (RegExp) ou uma string que define o que será substituído.
O segundo é uma função de callback que define o que substituirá a correspondência encontrada.

**Parâmetros do replace:**

***RegExp: /[aeiou]/g***

Esta expressão regular é usada para encontrar todas as vogais (a, e, i, o, u) no texto. O modificador **g** significa que a substituição deve ser feita globalmente, ou seja, em todas as ocorrências dessas vogais.

***Função de Callback:***

Esta função é chamada para cada correspondência encontrada pela RegExp. Ela recebe a vogal encontrada como parâmetro (letra), e com base neste valor, faz uma substituição específica usando uma estrutura switch.

***Estrutura switch:***

A função de callback usa um switch para determinar qual string substituir a vogal encontrada:

- Se a vogal for **a**, ela é substituída por **ai**
- Se a vogal for **e**, ela é substituída por **enter**
- Se a vogal for **i**, ela é substituída por **imes**
- Se a vogal for **o**, ela é substituída por **ober**
- Se a vogal for **u**, ela é substituída por **ufat**

O **default** é uma segurança que garante que, caso a letra não se encaixe em nenhum dos casos, ela será retornada sem alterações (embora neste contexto não seja necessário, já que a RegExp garante que só vogais serão passadas para a função).

Exemplo:
Suponha que o texto original seja "hello". O processo seria:

1. A função replace encontra as vogais **e** e **o** no texto.
2. Para **e**, a função de callback substitui e por **enter**.
3. Para **o**, a função de callback substitui o por **ober**.

O texto criptografado resultante seria **henterllober**.
  
### Instruções de Uso:

**Clonar o Repositório:** Clone este repositório para sua máquina local utilizando o comando:
```
git clone https://higor-costa.github.io/lista-de-tarefas
```

### Contribuição:

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença:

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.
