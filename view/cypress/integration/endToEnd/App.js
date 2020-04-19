/// <reference types="Cypress" />

describe("App", () => {
  context("Componants", () => {
    beforeEach(() => {});

    it("should have a header with the name of the app", () => {
      cy.visit("http://localhost:3000");

      cy.get("[data-test=cyHeader]").contains("Super ToDo");
    });
    it("should have a add button componant", () => {
      cy.get("[data-test=cyAddBtn]").should("exist");
    });
    it("should have an item list", () => {
      cy.get('[data-test="cyItems"]').should("exist");
    });
  });
  context("Item header", () => {
    it("should have the header", () => {
      cy.get("[data-test=cyItemHeader]").should("exist");

      cy.contains("th", "ID");
      cy.contains("th", "Complete");
      cy.contains("th", "Description");
      cy.contains("th", "Date du");
      cy.contains("th", "Edit");
      cy.contains("th", "Delete");
    });
  });
  context("Items", () => {
    it("should have the index of the item", () => {
      cy.get("[data-test='cyItemId']").should("exist");
    });
    it("should have a checkbox to complete the task", () => {
      cy.get("[data-test='cyItemCheckBox']").should("exist");
    });
    it("should have a description", () => {
      cy.get("[data-test='cyItemDescription']").should("exist");
    });
    it("should have a limit date", () => {
      cy.get("[data-test='cyItemDate']").should("exist");
    });
    it("should have an edit button", () => {
      cy.get("[data-test='cyItemEditBtn']").should("exist");
    });
    it("should have a delete button", () => {
      cy.get("[data-test='cyItemDeleteBtn']").should("exist");
    });
  });
});
