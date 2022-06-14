/// <reference types="cypress" />

import * as HomePage from  '../../support/HomePage.js'
import * as DevicePage from "../../support/DevicePage.js"
import * as AddonsPage from "../../support/AddonsPage.js"
import * as Header from "../../support/Header.js"
import * as CartPage from "../../support/CartPage.js"
import * as SignInOptionPage from "../../support/SignInOptionPage.js"
import * as CheckOutPage from "../../support/CheckOutPage.js"
describe("puhrchave a galxy phone",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    before(()=>{
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit("www.samsung.com/in/")
    })
    beforeEach(()=>{
        cy.fixture("userInfo.json").as("userInfo")
        Cypress.Cookies.defaults({
            preserve:(c)=>{
                return true
            }
        })
    })

    it("open s21 device Page",function(){
        HomePage.clickAcceptCockeis();
        HomePage.closeLanguageBar();
        HomePage.scrollToHiglitsSection();
        HomePage.openS21Page();
    })

    it("Select Device Configration", function(){
        DevicePage.select_256gb_Option()
        DevicePage.see
        DevicePage.Select_exchange_NoThanks()
        DevicePage.Select_lavender_option()
        DevicePage.Click_continue_to_cart()
        cy.wait(1000)
        AddonsPage.Click_continue_to_cart()
        CartPage.click_payNow()

        SignInOptionPage.continue_as_Guest()
    })

    

    it("Empty user details" ,function(){


        CheckOutPage.selectAllInputs()
        CheckOutPage.check_All_RequiredInputs_emptyError()
        CheckOutPage.check_NextButton_Disabled()

    })
    it("Correct user details" ,function(){
       
        CheckOutPage.fill_user_Data(this.userInfo.correctUserInfo)
        CheckOutPage.check_NextButton_Enabled()
        CheckOutPage.check_all_input_error_empty()
 
    })
    it("Wrong user details" ,function(){

        CheckOutPage.fill_user_Data(this.userInfo.WrongUserInfo)
        CheckOutPage.check_NextButton_Disabled()
        CheckOutPage.check_all_input_error_wrong()

    })

    it("empty Cart ", function(){

        Header.clickSamsungLogo()
        Header.clickCartIcon()
        CartPage.deleteAllItemsFromCart()
    })
    after(function(){

        cy.clearLocalStorage()
        cy.clearCookies()
    })


})