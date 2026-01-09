import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu crio um novo usuário', function () {
    //this ajuda a compartilhar variáveis entre os passos
    this.user = {
        //Date.now() retorna o número de milissegundos desde 1 de janeiro de 1970
        userName: `user_${Date.now()}`,
        password: 'Teste@1234'
    };

    cy.request({
        method: 'POST',
        url: '/Account/v1/User',
        body: this.user,
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.eq(201);
        this.userId = response.body.userID;
    });
    });

Given(`gero um token de acesso válido`, function () {
    cy.request({
    method: 'POST',
    url: '/Account/v1/GenerateToken',
    body: this.user
  }).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body.status).to.eq('Success');
    this.token = response.body.token;
  });
});

Given(`verifico que o usuário está autorizado`, function () {
    cy.request({
    method: 'POST',
    url: '/Account/v1/Authorized',
    body: this.user
  }).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.eq(true);
  });
});

Given(`listo os livros disponíveis na Bookstore`, function (){
    cy.request({
    method: 'GET',
    url: '/BookStore/v1/Books'
  }).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body.books.length).to.be.greaterThan(1);

    this.availableBooks = response.body.books;
  });
});

When(`eu seleciono dois livros disponíveis`, function () {
     cy.request({
    method: 'GET',
    url: '/BookStore/v1/Books'
  }).then(response => {
    expect(response.status).to.eq(200);
    //validar que há mais de um livro disponível
    expect(response.body.books.length).to.be.greaterThan(1);

    this.books = response.body.books.slice(0, 2);

    cy.request({
      method: 'POST',
      url: '/BookStore/v1/Books',
      headers: {
        Authorization: `Bearer ${this.token}`
      },
      body: {
        userId: this.userId,
        collectionOfIsbns: this.books.map(book => ({
          isbn: book.isbn
        }))
      }
    }).then(rentResponse => {
      expect(rentResponse.status).to.eq(201);
    });
  });
});

Then(`os livros devem estar listados no detalhe do meu usuário`, function () {
     cy.request({
    method: 'GET',
    url: `/Account/v1/User/${this.userId}`,
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  }).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body.books).to.have.length(2);
  });
});
