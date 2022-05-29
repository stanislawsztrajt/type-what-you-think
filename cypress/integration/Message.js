const title = Cypress.env("title");
const messagePath = Cypress.env("messagePath");

describe("renders the CreateMessage", () =>{
  it("renders correctly", () =>{
    cy.visit(messagePath)
    cy.get("#container").should("exist")
    cy.url().should("include", messagePath)
    cy.findByText(title).should("exist")
  })

  it("renders with uncorrectly url", () =>{
    cy.visit(`${messagePath}uncorrectly-url`)
    cy.get('#error').should("exist")
  })
})