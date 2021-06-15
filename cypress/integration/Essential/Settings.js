describe('Test setting', () => {

    it('Login', () => {
        cy.visit('/')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })
  
    it('Settings Folder Apply', () => {
        cy.get(':nth-child(3) > .modal-trigger').click()
        cy.get(':nth-child(2) > .collection-item > .switch > label > .lever').click()
        cy.get('form.ng-valid > .modal-footer').contains('Apply').click()
    })

    it('Settings Folder Cancel', () => {
        cy.get(':nth-child(3) > .modal-trigger').click()
        cy.get(':nth-child(3) > :nth-child(2) > .switch > label > .lever').click()
        cy.get(':nth-child(3) > .switch > label').click
        cy.get('form.ng-valid > .modal-footer').contains('Cancel').click()
    })
})