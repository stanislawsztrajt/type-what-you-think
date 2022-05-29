const title = Cypress.env("title");

describe("renders the CreateMessage", () =>{
  it("renders correctly", () =>{
    cy.visit("/create-message")
    cy.get("#container").should("exist")

    cy.get('#title').type(title)
    cy.get('#message').type(title + title)
    cy.get('#createMessage').click()
    
    cy.url().should("include", "/")
  })

  it("renders correctly without correctly values", () =>{
    cy.visit("/create-message")
    cy.get("#container").should("exist")

    cy.get('#title').type('a')
    cy.get('#message').type('a')
    cy.get('#createMessage').click()
  
    cy.url().should("include", "/create-message")
  })
})