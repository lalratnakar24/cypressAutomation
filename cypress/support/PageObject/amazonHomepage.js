class amazonHomepage {

getReturnButton(){
    return cy.contains('RETURNS')
}


getHelloSigninButton()
{
    return cy.get('#nav-link-accountList-nav-line-1')
}


}

export default amazonHomepage;
