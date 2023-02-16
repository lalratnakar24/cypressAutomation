//describe is test suite and IT is test cases/

describe("my first test",function()
{

it('my first test',function()
{
//go to rahulshety akademie
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//Allias wil help to assign locator to variable

cy.get('.products').as('productslocator')

//search for ca
cy.get('input[type="search"]').type('ca')
cy.wait(2000)

//check the list has 4 items
cy.get('.product:visible').should('have.length','4')

cy.get('@productslocator').find('.product').should('have.length','4')

// add the 2nd itwm in the search list to the cart.
cy.get('@productslocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()

{
    console.log('sf')
}

)

// add carrot to the cart
cy.get('@productslocator').find('.product').each(($el, index, $list) => {

    const productName= $el.find('h4.product-name').text()

if(productName.includes('Caul'))

    {
        cy.wrap($el).find('div button').click()
    }

})

//get the brand name form the page using promise resolution

//assert to chekc the text is matchint
cy.get('.brand').should('have.text','GREENKART').then(function(variable)
{
    cy.log('the got test is', variable.text(),'the expected is GREENKART')

})

//print in log the output
cy.get('.brand').then(function(variable)
{
    cy.log(variable.text())

})




})


})