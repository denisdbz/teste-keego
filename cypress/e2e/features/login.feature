Funcionalidade: Login

  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando eu informar meu e-mail e senha corretos
    E clicar no botão de login
    Então devo ser redirecionado para a página principal

  Cenário: Login com e-mail inválido
    Dado que estou na página de login
    Quando eu informar um e-mail inválido
    E informar uma senha válida
    E clicar no botão de login
    Então devo ver uma mensagem de erro indicando que o e-mail é inválido

  Cenário: Login com senha inválida
    Dado que estou na página de login
    Quando eu informar um e-mail válido
    E informar uma senha inválida
    E clicar no botão de login
    Então devo ver uma mensagem de erro indicando que a senha é inválida