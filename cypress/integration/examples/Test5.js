/// <reference types="Cypress" />
 

describe('my 3rd test suite', function()
{

it('myffirst test case',function()
{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('select').select('option2').should('have.value','option2')


})



})

