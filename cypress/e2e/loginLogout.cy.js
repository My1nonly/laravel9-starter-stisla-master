describe('Login, checking user list and logout', () => {
    it('passes', () => {
      cy.visit('http://localhost:8000/')
    })
    it('Email and password filled', () => {
      cy.get('input[name="email"]').type('superadmin@gmail.com')
      cy.get('input[name="password"]').type('password')
      cy.get('.btn')
      .contains('Login')
      .click()
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas')
      .click()
      cy.get(':nth-child(2) > .has-dropdown > span').click()
      cy.get('.active > .dropdown-menu > li > .nav-link')
      .click()
      cy.get('.navbar-right > :nth-child(2) > .nav-link')
      .click()
      cy.get('.text-danger').click()
    })
  })
  describe('User', () => {
    it('Checking user list', () => {
      
    })
  })
  describe('Logout', () => {
    it('Pressing logout button', () => {
      
    })
  })