describe('template spec', () => {
//Test Sign-up  
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type('ikhlas')
    cy.get('#sign-password').type('123456')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
       
  })
//Test Login
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername', {timeout:100}).type('ikhlas')
    cy.get('#loginpassword', {timeout:100}).type('123456')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('contain', 'Welcome')


//Test Logout
})
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername', {timeout:1000}).type('ikhlas')
    cy.get('#loginpassword', {timeout:1000}).type('123456')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary', {timeout:1000}).click()
    cy.get('#logout2').click()
    cy.get('#narvbarx').should('contain', 'Log In')

})
//Test Add to cart
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername', {timeout:1000}).type('ikhlas')
    cy.get('#loginpassword', {timeout:1000}).type('123456')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary', {timeout:1000}).click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should('contain', 'Samsung galaxy')

})
})
