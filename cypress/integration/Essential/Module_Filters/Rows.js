describe('Test rows', () => {

    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })
  
    it('filter 20', () => {
        cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-18').click()
    })

    it('filter 30', () => {
        cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-19').click()
    })

    it('filter 10', () => {
        cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-17').click()
    })
})