/// <reference types="cypress" />

import * as targets from '../target/targets'
import * as loginPage from '../pages/loginPage'
import * as mainPage from '../pages/mainPage'
import * as roomsPage from '../pages/roomsPage'
import * as clientsPage from '../pages/clientsPage'
import * as billsPage from '../pages/billsPage'
import * as reservationsPage from '../pages/reservationsPage'

//Test suite
describe("PO - regression test suite", function(){

    beforeEach(() =>{
        cy.visit(targets.url)
        loginPage.checkLoginPage(cy) //Checkar varje gång man loggar in
    })

    //Test case 
    it("TC - Valid Login", function(){
        
        loginPage.performLogin(cy)
        mainPage.CheckMainPage(cy)
        mainPage.performLogout(cy)
        loginPage.checkLoginPage(cy)
    })

    it("TC - Room Navigation", function(){
        loginPage.performLogin(cy)
        mainPage.CheckMainPage(cy) 
        mainPage.gotoRoomsPage(cy) //Assertions sker innuti funktionen
        roomsPage.gotoMainPage(cy) 
        mainPage.CheckMainPage(cy)
        mainPage.gotoClientsPage(cy) //assertions sker innuti funktionen
        clientsPage.gotoMainPage(cy)
        mainPage.CheckMainPage(cy)
        mainPage.gotoBillsPage(cy) //assertions sker innuti funktionen
        billsPage.gotoMainPage(cy)
        mainPage.CheckMainPage(cy)
        mainPage.gotoReservationsPage(cy) //assertions sker innuti funktionen
        reservationsPage.gotoMainPage(cy)
        mainPage.CheckMainPage(cy)
        mainPage.performLogout(cy)
        loginPage.checkLoginPage(cy)

    })


    it("TC - Edit room price error message", function(){
        loginPage.performLogin(cy)
        mainPage.CheckMainPage(cy)
        mainPage.gotoRoomsPage(cy) //Assertions sker innuti funktionen
        roomsPage.gotoeditFirstRoom(cy) //Assertions sker innuti funktionen
        roomsPage.changePriceAndSave(cy, '0') //Assertion sker innuti. oavsett om man sätter in 0 eller en valid siffra
        mainPage.performLogout(cy)
        loginPage.checkLoginPage(cy)
    })

    it("TC - Edit room price happy path", function(){
        loginPage.performLogin(cy)
        mainPage.CheckMainPage(cy)
        mainPage.gotoRoomsPage(cy) //Assertions sker innuti funktionen
        roomsPage.gotoeditFirstRoom(cy) //Assertions sker innuti funktionen
        roomsPage.changePriceAndSave(cy, '350') //Assertion sker innuti. oavsett om man sätter in 0 eller en valid siffra
        mainPage.performLogout(cy)
        loginPage.checkLoginPage(cy)
    })

    it("TC - Edit roomnumber and floor", function(){
        loginPage.performLogin(cy)
        mainPage.CheckMainPage(cy)
        mainPage.gotoRoomsPage(cy) //Assertions sker innuti funktionen
        roomsPage.gotoeditFirstRoom(cy) //Assertions sker innuti funktionen
        roomsPage.changeRoomAndFloor(cy, '15', '1536') //Assertion sker innuti. oavsett parameter
        mainPage.performLogout(cy)
        loginPage.checkLoginPage(cy)
    })

    it("TC - Create new client", function(){
        loginPage.performLogin(cy)
        mainPage.CheckMainPage(cy)
        mainPage.gotoClientsPage(cy) //assertions sker innuti funktionen
        clientsPage.createNewClient(cy, 'Abode Chikh', 'Abode.chikh@hotmail.com', '0736526336') //Assertions sker innuti oavsett inmattning i parameterna.
        mainPage.performLogout(cy)
        loginPage.checkLoginPage(cy)
    })


})