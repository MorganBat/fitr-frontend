describe('The Login test', () => {
  it('successfully logs in', () => {
    cy.visit('/login')
    cy.get('[placeholder="Email"]').type("test4@gmail.com") // Insert email
    cy.get('[placeholder="Password').type("test4") // Insert password
    cy.contains("Login").click() // Click login button
  })
})