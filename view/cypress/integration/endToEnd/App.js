/// <reference types="Cypress" />

describe('App', () => {
  context('Componants', () => {
    before(() => {
      cy.visit('http://localhost:3000');
    });
    it('should have a header with the name of the app', () => {
      cy.get('[data-test=cyHeader]').contains('Super ToDo');
    });
    it('should have a add button componant', () => {
      cy.get('[data-test=cyBtnAdd]').should('exist');
    });
    it('should have an item list', () => {
      cy.get('[data-test="cyItems"]').should('exist');
    });
    context('Item header', () => {
      it('should have the header', () => {
        cy.get('[data-test=cyItemHeader]').should('exist');

        cy.contains('th', 'ID');
        cy.contains('th', 'Complete');
        cy.contains('th', 'Description');
        cy.contains('th', 'Date du');
        cy.contains('th', 'Edit');
        cy.contains('th', 'Delete');
      });
    });
    context('Items', () => {
      it('should have the index of the item', () => {
        cy.get("[data-test='cyItemId']").should('exist');
      });
      it('should have a checkbox to complete the task', () => {
        cy.get("[data-test='cyItemCheckBox']").should('exist');
      });
      it('should have a description', () => {
        cy.get("[data-test='cyItemDescription']").should('exist');
      });
      it('should have a limit date', () => {
        cy.get("[data-test='cyItemDate']").should('exist');
      });
      it('should have an edit button', () => {
        cy.get("[data-test='cyItemEditBtn']").should('exist');
      });
      it('should have a delete button', () => {
        cy.get("[data-test='cyItemDeleteBtn']").should('exist');
      });
    });
  });

  context('Header', () => {
    before(() => {
      cy.visit('http://localhost:3000');
    });
    it('should go to the home page if clicked', () => {
      cy.get('[data-test="cyHeader"]').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  context('Adding a task', () => {
    before(() => {
      cy.visit('http://localhost:3000');
    });
    it('should go to the add page', () => {
      cy.get('[data-test="cyBtnAdd"]').click();
      cy.location('pathname').should('eq', '/add');
    });

    it('should fill the form', () => {
      cy.get('[data-test="cyTxtBoxDescription"]').type('test');
      cy.get('[data-test="cyCheckDeadline"]').click();
      cy.get('[data-test="cyTxtBoxDeadline"]').type('27-11-1990');
    });

    it('should add the new task to the list', () => {
      cy.get('[data-test="cyBtnAdd"]').click();
      cy.location('pathname').should('eq', '/');
      cy.contains('test');
    });
  });
});
