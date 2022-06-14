
const Locaters = {
    AddonsPageHeader:"div.js-hubble-addon-page__top",
    ContinueTitle:"Continue"
}


export const  Click_continue_to_cart = () =>{
    //this method will not rise any issue if the addon page didn't load ...
    //  and the website moves to the cart page dirctily 
    // if the page loaded the button will be clicked 
    cy.get('html').then((page)=>{
        if(page.find(Locaters.AddonsPageHeader).length > 0 )
        {
            
            cy.get(Locaters.AddonsPageHeader).contains(Locaters.ContinueTitle).click()
        }
       
    })
}