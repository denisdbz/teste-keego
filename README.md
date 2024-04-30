# Testes Automatizados com Cypress

Este repositório contém testes automatizados para um site de e-commerce e para a API do Trello, escritos utilizando o framework Cypress.

## Pré-requisitos

- Node.js
- Cypress (instalado globalmente ou localmente no projeto)

## Instalação

1. Clone o repositório:

   git clone https://github.com/denisdbz/teste-keego.git

   Instale as dependências:
npm install

Rodando os Testes

Front-end

Para rodar os testes de front-end, use o comando:

npx cypress run "cypress/e2e/integration/nome-do-arquivo.cy.js"

Substitua nome-do-arquivo.cy.js pelo nome do arquivo de teste que você deseja executar.

API
Para rodar os testes de API, use o comando:

npx cypress run "cypress/e2e/api-tests/nome-do-arquvo.cy.js"

Substitua nome-do-arquivo.js pelo nome do arquivo de teste de API que você deseja executar.
