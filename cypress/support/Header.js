const Locaters = {
    "SamsungLogo":'a[class="gnb__logo"]',
    "cartIcon" : 'li[class="gnb__cart"] > a'
}


export const clickSamsungLogo = ()=>{
    cy.get(Locaters.SamsungLogo).click({force:true})
}

export const clickCartIcon = ()=>{
    cy.get(Locaters.cartIcon).click({force:true})
    cy.wait(1000)
    
}
