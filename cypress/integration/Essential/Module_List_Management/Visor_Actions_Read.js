describe('Acciones en Visor', () => {
    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('paob')
        cy.get('#password-input').type('12345678')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })

    it('My cases', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-28 > .mat-option-text').click()
        cy.get(':nth-child(5) > .col').contains('4MR1').click()
        cy.contains('MR : NULL', {timeout:20000}).should('be.visible')
        cy.get('.action-viewer').click()
        cy.get('#confirm-read-modal > .modal-dialog > .modal-content > .modal-body > .btn').click()
    })


})