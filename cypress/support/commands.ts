/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

// -- This is a parent command --
Cypress.Commands.add('searchByQuery', (query: string) => {
  // cy.visit('/')
  cy.visit('http://localhost:3000')

  cy.get('input[name=q').type(query).parent('form').submit()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
