# Aui_UI_task
- Cypress version is 9.7.0
- Each page used in the test flow has a file in the support folder, which contains the Locaters and the methods related to the page,  methods were used in the main test spec file.
- Please consider that the selected device configuration may be out of stock when you run the test, you can skip the device configuration test.
- there are a lot of assertions, but I chose the main ones.

- this code used to handle website excptions 
    ``` javascript
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    ```

- I used this method to handle elements that do not appear every time
    ```javascript
    cy.get('html').then((page)=>{
        if(page.find(Locaters.AddonsPageHeader).length > 0 )
        {
            
            cy.get(Locaters.AddonsPageHeader).contains(Locaters.ContinueTitle).click()
        }
       
    })
    ```
- the data used in the test was wrapped and can be accessed using 'this' in any test but we should use function() as a declaration of the test
    ```javascript
        it("open s21 device Page",function(){
        HomePage.clickAcceptCockeis();
        HomePage.closeLanguageBar();
        HomePage.scrollToHiglitsSection();
        HomePage.openS21Page();
    })
    ```

## Thanks for your time  
