describe('Lojinha', () => {
  it('Logar', () => {
    cy.visit('http://165.227.93.41/lojinha-web/');

    cy.get('#usuario').focus().type('admin');

    cy.get('#senha').focus().type('admin');

    cy.get('.btn').click();
  });

  it('Visualizar Produto', () => {
    // login
    cy.visit('http://165.227.93.41/lojinha-web/');

    cy.get('#usuario').focus().type('admin');

    cy.get('#senha').focus().type('admin');

    cy.get('.btn').click();

    // Visualize
    cy.get('[rev="12345"] > .title > a').click();

    cy.get('#produtonome').should('have.value', 'TV SONY 291');
  });
});
