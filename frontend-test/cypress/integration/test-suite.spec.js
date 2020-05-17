/// <reference types="cypress" />

import * as targets from '../target/targets'
import * as loginP from '../pages/loginPage'

//Test suite
describe("PO - regression test suite", function(){

    beforeEach(() =>{
        cy.visit(targets.url)
        //loginP.checkLoginPageTitle()
    })

    //Test case
    it("TC - Valid Login", function(){
        
        loginP.performLogin(cy)
        
    })

})