describe('Visit Google', () => {
  beforeEach(() => {
    cy.wait(5000); // Wait for 5 seconds before visiting
    cy.visit('https://www.google.com/');
  });

  it('should have the correct URL', () => {
    cy.url().should('include', 'google.com');
  });

  it('should have the correct title', () => {
    cy.title().should('eq', 'Google');
  });
});
