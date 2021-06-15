describe('Test folders', () => {

    it('Login', () => {
        cy.visit('http://52.152.167.84:8010')
        cy.get('#username-input').type('admin')
        cy.get('#password-input').type('Qc265?~z&>tlsc^m')
        cy.get('.btn').should('have.class', 'btn btn-login btn-block').click()
    })
  
    it('Create folders and Add List', () => {
        cy.get('a.valign').click()
        cy.get('#folder-options-name-input').type('Testing1')
        cy.get('.btn > .ng-star-inserted').click()
        cy.get('[routerlink="../new-static"]').click()
        cy.get('#studies-table-name-input').type('List Testing1')
        cy.get(':nth-child(6) > .check-label').click()
        cy.get('.btn').should('have.class', 'btn btn-pacs right').click()
        cy.get(':nth-child(9) > .col > :nth-child(1)').click()
    })
})