describe('Test Logout User', () => {

    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })

    it('Logout', () => {
        cy.get('.button-collapse > .material-icons').click()
        cy.get(':nth-child(7) > .waves-effect > .material-icons').should('have.text', 'power_settings_new').click()
    })
})