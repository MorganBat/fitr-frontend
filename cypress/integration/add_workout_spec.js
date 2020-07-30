describe('The Add Workout test', () => {
    it('successfully adds a workout', () => {
      cy.visit('/login')
      cy.get('[placeholder="Email"]').type("test4@gmail.com") // Insert email
      cy.get('[placeholder="Password').type("test4") // Insert password
      cy.contains("Login").click() // Click login button
      cy.contains("Add a new Workout").click() // Clicks the create workout link
      cy.contains("Add Exercise").click() // Clicks to add a new exercises
    })
  })