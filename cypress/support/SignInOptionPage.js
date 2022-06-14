const Locaters = {
    "GuestButton":"#b2C_Continue_Guest"
}



export const continue_as_Guest = ()=>{
    cy.get('html').then((page)=>{
            
        if(page.find(Locaters.GuestButton).length > 0 )
        {
            cy.get(Locaters.GuestButton).click()
        }
    })
}