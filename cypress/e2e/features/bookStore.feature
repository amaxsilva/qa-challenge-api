# language: pt
Funcionalidade: Gestão de Livros na Bookstore
    Como um novo usuário da plataforma
    Quero realizar o aluguel de livros
    Para validar se os títulos aparecem corretamente no meu perfil

    Cenário: Criar usuário e alugar dois livros com sucesso
        Dado que eu crio um novo usuário
        E gero um token de acesso válido
        E verifico que o usuário está autorizado
        E listo os livros disponíveis na Bookstore
        Quando eu seleciono dois livros disponíveis
        Então os livros devem estar listados no detalhe do meu usuário