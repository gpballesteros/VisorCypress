describe('Test modality', () => {

    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })
  
    it('filter CT', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-26 > .mat-option-text').contains('CT').click()
    })

    it('filter CR', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-25 > .mat-option-text').contains('CR').click()
    })

    it('filter MG', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-27 > .mat-option-text').contains('MG').click()
    })

    it('filter MR', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-28 > .mat-option-text').contains('MR').click()
    })

    it('filter MN', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-29 > .mat-option-text').contains('MN').click()
    })

    it('filter OT', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-30 > .mat-option-text').contains('OT').click()
    })

    it('filter PT', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-31 > .mat-option-text').contains('PT').click()
    })

    it('filter US', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-32 > .mat-option-text').contains('US').click()
    })

    it('filter XA', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-33 > .mat-option-text').contains('XA').click()
    })

    it('filter ALL', () => {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-20 > .mat-option-text').contains('All').click()
    })
})