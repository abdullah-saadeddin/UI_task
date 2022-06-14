const Locaters = {

    "firstNameInput":"input[name='firstName']",
    "lastNameInput":"input[name='lastName']",
    "AddressLine1Input":"input[name='line1']",
    "AddressLine2Input":"input[name='line2']",
    "PinCodeInput":"input[name='postalCode']",
    "LandMarkInput":"input[name='landmark']",
    "EmailInput":'input[name="email"]',
    "MobileNumberInput":"input[name='phone']",
    "AlternateMobileNumberInput":"input[name='alternate']",
    "workAddressType" : "input[value='work']",
    "nextPageButton" : 'div[class="order-p6-summary-price-details row-full for-desktop"]  button[data-omni="checkout:order detail1:next"]'

}

const get_input_Error_Label = (inputLocater)=>{
    return cy.get(inputLocater + " ~ div[class='input-error-msg']")
}

export const selectAllInputs = ()=>{
    cy.get(Locaters.firstNameInput).click()
    cy.get(Locaters.lastNameInput).click()
    cy.get(Locaters.AddressLine1Input).click()
    cy.get(Locaters.AddressLine2Input).click()
    cy.get(Locaters.PinCodeInput).click()
    cy.get(Locaters.LandMarkInput).click()
    cy.get(Locaters.EmailInput).click()
    cy.get(Locaters.MobileNumberInput).click()
    cy.get(Locaters.AlternateMobileNumberInput).click()
    cy.get(Locaters.workAddressType).check({force:true})

}

export const check_All_RequiredInputs_emptyError = ()=>{
    get_input_Error_Label(Locaters.firstNameInput).should("contain.text","This is a required field.")
    get_input_Error_Label(Locaters.lastNameInput).should("contain.text","This is a required field.")
    get_input_Error_Label(Locaters.PinCodeInput).should("contain.text","This is a required field.")
    get_input_Error_Label(Locaters.MobileNumberInput).should("contain.text","This is a required field.")
    get_input_Error_Label(Locaters.EmailInput).should("contain.text","This is a required field.")
}

export const fill_user_Data = (userInfo)=>{
    cy.get(Locaters.firstNameInput).clear().type(userInfo.firstName)
    cy.get(Locaters.lastNameInput).clear().type(userInfo.lastName)
    cy.get(Locaters.AddressLine1Input).clear().type(userInfo.Address1)
    cy.get(Locaters.AddressLine2Input).clear().type(userInfo.Address2)
    cy.get(Locaters.PinCodeInput).clear().type(userInfo.pinCode)
    cy.get(Locaters.EmailInput).clear().type(userInfo.email)
    cy.get(Locaters.MobileNumberInput).clear().type(userInfo.mobileNumber)
}

export const check_all_input_error_empty = ()=>{
    get_input_Error_Label(Locaters.firstNameInput).should("not.contain.text")
    get_input_Error_Label(Locaters.lastNameInput).should("not.contain.text")
    get_input_Error_Label(Locaters.PinCodeInput).should("not.contain.text")
    get_input_Error_Label(Locaters.MobileNumberInput).should("not.contain.text")
    get_input_Error_Label(Locaters.EmailInput).should("not.contain.text")
}

export const check_all_input_error_wrong = ()=>{
    get_input_Error_Label(Locaters.firstNameInput).should("contain.text","The First Name field format is invalid.")
    get_input_Error_Label(Locaters.lastNameInput).should("contain.text","The Last Name field format is invalid.")
    get_input_Error_Label(Locaters.PinCodeInput).should("contain.text","Please enter a valid Pincode.")
    get_input_Error_Label(Locaters.MobileNumberInput).should("contain.text","Please enter a valid mobile number.")
    get_input_Error_Label(Locaters.EmailInput).should("contain.text","The Email field format is invalid.")
}

export const check_NextButton_Disabled = ()=>{
    cy.get(Locaters.nextPageButton).should("be.disabled")
}

export const check_NextButton_Enabled = ()=>{
    cy.get(Locaters.nextPageButton).should("be.enabled")
}