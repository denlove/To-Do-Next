describe('Navigation', () => {
    it('should navigate to the "About page"', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a[href*="about"]').click()
        cy.url().should('include', '/about')
        cy.get('h1').contains('About')
    })

    it('should navigate to the "Help page"', () => {
        cy.visit('http://localhost:3000/')
        cy.get('a[href*="help"]').click()
        cy.url().should('include', '/help')
        cy.get('h1').contains('Help')
    })
})
