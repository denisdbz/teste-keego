Funcionalidade: Carrinho de Compras

  Cenário: Adicionar produto ao carrinho
    Dado que estou na página de produtos
    Quando eu buscar pelo produto "Blue top"
    E clicar no botão "Add to cart"
    Então o produto "Blue top" deve ser adicionado ao carrinho de compras

  Cenário: Validar o produto incluído no carrinho na tela de pagamento
    Dado que eu já tenha adicionado o produto ao carrinho
    Quando eu entrar na página do carrinho de compras
    Então o produto "Blue top" deve estar adicionado no carrinho de compras
