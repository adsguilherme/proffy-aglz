/// <reference types="cypress" />


describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Navegar para o cadastro de aulas', () => {
        cy.get('div a.give-classes').click();
        cy.url().should('contain', 'give-classes')
    });

    it('Navegar para a pesquisa de professor', () => {
        cy.get('div a.study').click();
        cy.url().should('contain', 'study')     
    });
});

