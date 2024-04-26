# Testes Automatizados com Cypress

Este repositório contém testes automatizados para um site de e-commerce e para a API do Trello, escritos utilizando o framework Cypress.

## Pré-requisitos

- Node.js
- Cypress (instalado globalmente ou localmente no projeto)

## Instalação

1. Clone o repositório:

   git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

npm install
Rodando os Testes
Front-end
Para rodar os testes de front-end, use o comando:

npx cypress run --spec "cypress/integration/nome-do-arquivo.spec.js"
Substitua nome-do-arquivo.spec.js pelo nome do arquivo de teste que você deseja executar.

API
Para rodar os testes de API, use o comando:

npx cypress run --spec "cypress/integration/api-tests/nome-do-arquivo.spec.js"
Substitua nome-do-arquivo.spec.js pelo nome do arquivo de teste de API que você deseja executar.

Lembre-se de substituir `"seu-usuario/seu-repositorio"` pelo seu nome de usuário e nome do repositório no GitHub, e adaptar os comandos de acordo com a estrutura do seu projeto Cypress.