/// <reference types="cypress" />

const larguras = [1200, 1090]

larguras.forEach(largura => {
    describe(`Landing Page - ${largura}px`, () => {
        beforeEach(() => {
            cy.visit('/');
            // viewport: porção de visualização
            // Serão executados os testes nas duas larguras [1200 e 1900], na altura de 900.
            cy.viewport(largura, 900)
            cy.log('Largura: ', largura)
        });
        it('Navegar para o cadastro de aulas', () => {
            cy.get('div a.give-classes').click();
            // o comando podemos utilizar para capturar o texto da url atual da página
            cy.url().should('contain', 'give-classes')
        });

        it('Navegar para a pesquisa de professor', () => {
            cy.get('div a.study').click();
            cy.url().should('contain', 'study')     
        });
    });
});

