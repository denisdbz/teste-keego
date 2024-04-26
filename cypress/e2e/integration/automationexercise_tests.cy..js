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
    cy.get('.alert.alert-danger').should('contain', 'E-mail inválido');
  });

  it('Deve exibir mensagem de erro para senha inválida', () => {
    cy.get('[data-qa="login-email"]').type('teste2021@teste.com.br');
    cy.get('[name="password"]').type('senhaInvalida');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.alert.alert-danger').should('contain', 'Senha inválida');
  });

  it('Deve redirecionar para a página principal após o login bem-sucedido', () => {
    cy.get('[data-qa="login-email"]').type('teste2021@teste.com.br');
    cy.get('[name="password"]').type('senhaValida');
    cy.get('[data-qa="login-button"]').click();
    cy.url().should('eq', 'https://www.automationexercise.com/');
  });
});

describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    searchProduct('Blusa Azul');
    cy.get('.btn.btn-default.add-to-cart').eq(0).click();
    cy.get('.alert.alert-success').should('contain', 'Produto adicionado');
  });

  it('Deve remover um produto do carrinho', () => {
    cy.visit('https://www.automationexercise.com/view_cart');
    cy.get('.btn.btn-default.remove-from-cart').eq(0).click();
    cy.get('.alert.alert-warning').should('contain', 'Produto removido');
  });

  it('Deve atualizar a quantidade de um produto no carrinho', () => {
    cy.visit('https://www.automationexercise.com/view_cart');
    cy.get('.product-quantity input').clear().type('2');
    cy.get('.product-quantity button[type="submit"]').click();
    cy.get('.alert.alert-success').should('contain', 'Quantidade atualizada');
  });
});