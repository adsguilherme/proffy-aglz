/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Classes endpoint', () => {
    it('POST Cadastrar um novo professor', () => {
        // Request URL: http://localhost:3333/classes
        // Request Method: POST
        // Status Code: 201 Created
    
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Guilherme de Sousa",
                "avatar": "https://avatarfiles.alphacoders.com/228/228973.png",
                "whatsapp": "44999999999",
                "bio": "Xmen",
                "subject": "Inglês",
                "cost": 100,
                "schedule": [
                    {
                        "week_day": "1",
                        "from": "08:00",
                        "to": "09:00"
                    }
                ]
            }
        }).then((response) => {
            // asserções da resposta
        })
    });
});
