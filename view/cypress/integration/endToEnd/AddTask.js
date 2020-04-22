/// <reference types="Cypress" />

describe('AddTask', () => {
  context('Componants', () => {
    before(() => {
      cy.visit('http://localhost:3000/new');
    });
    it('should have the header', () => {
      cy.get('[data-test=cyHeader]').contains('Super ToDo');
    });
    it('should have a sub title', () => {
      cy.contains('New Task');
    });
    it('should have a text box for the description', () => {
      cy.get('[data-test=cyTxtBoxDescription]').should('exist');
    });

    it('should have a check box for anabling a deadline', () => {
      cy.get('[data-test=cyCheckBoxDeadline]').should('exist');
    });

    it('should have a text box for the deadline', () => {
      cy.get('[data-test=cyTxtBoxDeadLine]').should('exist');
    });

    it('should have a confirm button', () => {
      cy.get('[data-test=cyBtnConfirm]').should('exist');
    });

    it('should have a cancel button', () => {
      cy.get('[data-test=cyBtnCancel]').should('exist');
    });
  });
});
