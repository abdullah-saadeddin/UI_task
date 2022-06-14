

const Locaters = {
    "cockeisAccept":'a[an-la="cookie bar:accept"]',
    "lanuageCloseButton": 'button[an-la="cookie bar:close"]',
    "HighlitsSection":"This Week's Highlights",
    "deviceNameLabel":"div[class='showcase-card-tab-card__product-name-text-wrap']",
    "s21Name":"Galaxy S21 FE 5G"
}


export const clickAcceptCockeis = ()=>{
    cy.get(Locaters.cockeisAccept).click()
}

export const closeLanguageBar = ()=>{
    cy.get(Locaters.lanuageCloseButton).click()
}

export const scrollToHiglitsSection = ()=>{
    cy.contains(Locaters.HighlitsSection).scrollIntoView()
}

export const openS21Page = ()=>{

    cy.get(Locaters.deviceNameLabel).contains(Locaters.s21Name).click()
}