/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('GET Connections endpoint', () => {
    it('', () => {
        // http://localhost:3333/connections
        // GET
        // 200

        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`,
        }).then((response) => {
            console.log(response);
            expect(response.status).to.eq(200)
            expect(response.duration).lessThan(10) // Além do lessThan pode ser utilizada a abreviação lt.
            
            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)

            // Outra forma que pode ser utilizado
            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => { return totalValue >= 5})

            // Content-Type: application/json; charset=utf-8
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});
