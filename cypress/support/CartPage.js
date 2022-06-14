const Locaters ={
    "cartSumaryCard":'button[data-omni-text="cart-continue-text"]',
    "payNowTitle" : "Pay Now",
    "itemRemoveIcon":'button[class="data-omni-remove"]'
}



export const click_payNow = ()=>{
    cy.get(Locaters.cartSumaryCard).contains(Locaters.payNowTitle).click({force:true})

    cy.wait(1000)
}

export const deleteAllItemsFromCart = ()=>{
    cy.get(Locaters.itemRemoveIcon).each((item,index,list)=>{

        cy.wrap(item).click({force:true})
        cy.wait(1000)

})
}