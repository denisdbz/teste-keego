describe('Teste da API do Trello', () => {
    it('Deve enviar um GET para a API do Trello, exibir o campo "name" da estrutura "list" e validar o status code', () => {
        cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
            .then((response) => {
                expect(response.status).to.eq(200)
                cy.log('Name da lista:', response.body.data.list.name)
            })
    })
})