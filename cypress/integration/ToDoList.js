const todo = "It's my to do to tests";

describe("renders the ToDoList", () =>{
  it("renders correctly", () =>{
    cy.visit("/to-do-list")
    cy.get("#container").should("exist")

    cy.get('#todo').type(todo)
    cy.get("#createToDo").click()
    cy.findByText(`1. ${todo}`).should("exist")

    cy.get("#deleteToDo").click()
    cy.findByText(`1. ${todo}`).should("not.exist")
  })

  it("renders correctly with uncorrectly value", () =>{
    cy.visit("/to-do-list")
    cy.get("#container").should("exist")

    cy.get('#todo').type('to short')
    cy.get("#createToDo").click()
    cy.findByText(`1. ${todo}`).should("not.exist")
  })
})