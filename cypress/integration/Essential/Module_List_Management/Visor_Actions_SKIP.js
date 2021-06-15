describe('Acciones en Visor', () => {
    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })

    it('My cases other', () => {
        cy.contains('My cases').click()
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-27 > .mat-option-text').contains('MG').click()
        cy.get(':nth-child(5) > .col').contains('22675485').click()
        cy.contains('MG : MAMOGRAFIA_BILATERAL_', {timeout:15000}).should('be.visible')
        cy.get('.pacs-buttons > :nth-child(3)').click()
    })
})