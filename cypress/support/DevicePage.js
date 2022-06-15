const Locaters = {
    "size128gbOptionTitle":"128GB | 8GB",
    "size256gbOptionTitle":"256GB | 8GB",
    "noThanksOptionTitle":"No, thanks",
    "whiteColorOptionTitle":"White",
    "lavenderColorOptionTitle" : "Lavender",
    "orederTotalCard":'div[class="hubble-product__total-wrap"]',
    "continueTitle":'CONTINUE'
}


export const select_128gb_Option = ()=>{
    cy.contains(Locaters.size128gbOptionTitle).click({force:true})

}

export const select_256gb_Option = ()=>{
    cy.contains(Locaters.size256gbOptionTitle).click({force:true})

}

export const  Select_exchange_NoThanks= ()=>{
    cy.get("head").then((page)=>{
        if(page.find("#trade-in").length > 0 )
        {
            cy.contains(Locaters.noThanksOptionTitle).click({force:true})
        }
    })
    
}
export const  Select_white_option= ()=>{
    cy.contains(Locaters.whiteColorOptionTitle).scrollIntoView().click({force:true})
    
}

export const Select_lavender_option = ()=>{
    cy.contains(Locaters.lavenderColorOptionTitle).scrollIntoView().click({force:true})
}

export const  Click_continue_to_cart= ()=>{
    cy.get(Locaters.orederTotalCard).contains(Locaters.continueTitle).scrollIntoView()
    cy.get(Locaters.orederTotalCard).contains(Locaters.continueTitle).click()
}