/// <reference types="cypress" />

import * as targets from '../target/targets'

//Element
const title = 'Testers Hotel'
const usrnameTxtField = ':nth-child(1) > input'
const pwdTxtField = ':nth-child(2) > input'
const loginInBtn = '.btn'

//Action


function checkLoginPageTitle(cy) {
    cy.title().should('eq', 'Testers Hotel')
    
}

function performLogIn(cy){
    cy.contains('Login')
    cy.get(usrnameTxtField).type(targets.userName)
    cy.get(pwdTxtField).type(targets.password)
    cy.get(loginInBtn).click()
    cy.contains('Tester Hotel Overview')

}


module.exports
{
        checkLoginPageTitle;
        performLogIn
}