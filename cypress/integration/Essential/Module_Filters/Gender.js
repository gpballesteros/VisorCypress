describe('Test gender', () => {

    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })
  
    it('filter F', () => {
        cy.get('#mat-select-5 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-22').click()
    })

    it('filter M', () => {
        cy.get('#mat-select-5 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-23').click()
    })

    it('filter O', () => {
        cy.get('#mat-select-5 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-24').click()
    })

    it('filter All', () => {
        cy.get('#mat-select-5 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-21').click()
    })
})