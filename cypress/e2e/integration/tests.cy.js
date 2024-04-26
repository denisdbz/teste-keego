/// <reference types="cypress"/>

// Função para realizar a busca por um produto
function searchProduct(productName) {
  cy.get('a[href="/products"]').click();
  cy.get('#search_product').type(productName);
  cy.get('#submit_search').click();
}

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login');
  });

  it('Deve exibir mensagem de erro para e-mail inválido', () => {
    cy.get('[data-qa="login-email"]').type('emailinvalido@teste.com');
    cy.get('[name="password"]').type('senhaValida');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p').should('contain', 'Your email or password is incorrect!');
  });

  it('Deve exibir mensagem de erro para senha inválida', () => {
    cy.get('[data-qa="login-email"]').type('teste2021@teste.com.br');
    cy.get('[name="password"]').type('senhaInvalida');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p').should('contain', 'Your email or password is incorrect!');
  });

  it('Deve redirecionar para a página principal após o login bem-sucedido', () => {
    cy.get('[data-qa="login-email"]').type('teste2021@teste.com.br');
    cy.get('[name="password"]').type('teste');
    cy.get('[data-qa="login-button"]').click();
    cy.url().should('eq', 'https://www.automationexercise.com/');
  });
});

describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    searchProduct('Blue top');
    cy.get('.btn.btn-default.add-to-cart').eq(0).click();
    cy.get('.modal-header').should('contain', 'Added!');
  });
});