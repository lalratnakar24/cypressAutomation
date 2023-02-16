/// <reference types = 'Cypress' />
import amazonHomepage from "../../support/PageObject/amazonHomepage"
import amazonloginPage from "../../support/PageObject/amazonloginPage"

before(function () {
    // runs once before all tests in the block
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  before(function(){
    cy.fixture('testdataAmazon').then(function(amazonData){
        this.data=amazonData
    })
  })


describe('AmazonHomepage Test',function(){

    it('testing top menuitems',function(){

        const amzHompage=new amazonHomepage()
        const amazonLoginPg= new amazonloginPage

    cy.visit("https://amazon.de")
    amzHompage.getHelloSigninButton().click()
    amazonLoginPg.getHelloSigninButton().type(this.data.email)
    
    })
})