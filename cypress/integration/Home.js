const titleHome = Cypress.env("titleHome");
const messageHomePath = Cypress.env("messageHomePath");

describe("renders the home page", () =>{
  it("renders correctly", () =>{
    cy.visit("/")
    cy.get("#container").should("exist")
    cy.findByText(titleHome).should("exist")
    
    cy.findByText(titleHome).click()
    cy.url().should("include", messageHomePath)
    cy.findByText(titleHome).should("exist")
  })
})