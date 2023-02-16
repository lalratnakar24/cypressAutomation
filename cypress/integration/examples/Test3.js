/// <reference types="Cypress" />

//describe is test suite and IT is test cases/

describe('my2nd test suite',function()
{

    it('my2nd test cases',function()
    
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //click on the option 2

       // cy.get('#checkBoxOption1').check()
       // cy.get('input[value="option2"').check('option2','option1','option3')
       // cy.get('input[value="option2"').check().should('be.checked').and('have.value','option2')
      //  cy.get('input[value="option3"').check().should('be.checked')

        //Dynamic Dropdown

        cy.get('#autocomplete').type('ind')


        cy.get('.ui-menu-item div').each(($e1, index, list) => {

          if( $e1.text()==='India')
          {
            cy.wrap($e1).click()
          }


        })

   //static drop down. for static drop down always the tagname will be select.

       cy.get('select').select('Option1').should('have.value','option1')

       //handling invisible element

       cy.get('#displayed-text').should('be.visible')
       cy.get('input[value="Hide"]').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('input[value="Show"]').click()
       cy.get('#displayed-text').should('be.visible')

       //selecting Radio Buttons

       cy.get('input[value="radio1"]').click().should('be.checked')
       cy.get('input[value="radio2"]').check().should('be.checked')
       cy.get('input[value="radio1"]').should('not.be.checked')
       cy.get('input[value="radio3"]').should('not.be.checked')



    


        

   
   
   
   
    })


})