Funcionalidade: Testes da API do Trello

  Como um usuário
  Eu quero testar a API do Trello
  Para garantir que as funcionalidades estejam funcionando corretamente

  Cenário: Consultar uma ação específica
    Dado que eu tenho o ID de uma ação do Trello
    Quando eu faço uma requisição GET para a API do Trello com o ID da ação
    Então a resposta deve ter o status code 200
    E o campo "name" da estrutura "list" deve conter o nome da lista