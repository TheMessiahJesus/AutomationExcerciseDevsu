import 'cypress-file-upload';
// Create a command that works like a global function to add products to the cart
Cypress.Commands.add('selectAddProduct', (productName, mainPageUrl) => { 
    cy.get("div[id*='tbodyid']").find('.hrefch').each(($e1, index, $list) => {
        //Save the product label name on a text constant
        const text=$e1.text();
        // Only add a product that exists in the product array
        if(text.includes(productName))
        {
          // Go to the href link that has the product information in order to add it to the cart
          cy.visit(mainPageUrl+$e1.attr('href')) 
          // Obtain stub to validate product alert on click (Product Added alert)
          // Give an alias to the stub, so we can use "get" on it.
          const alertShown = cy.stub().as("alertShown")
          cy.on ('window:alert', alertShown)
          // click over add to cart button
          cy.get('.col-sm-12 > .btn').click()   
          // By using get, we ensure this will be retried if the checkbox has not been called yet.
          cy.get("@alertShown").should("have.been.calledOnceWith", "Product added")
          // Wait until the post call is executed for the product to be added correctly
          cy.wait(2000)
          // Return to the main page after adding the product
          cy.visit(mainPageUrl)
        }
    }) .then(pendingCount => {
        // This then clause is used to assert the loop total object elements that currently exist as part of the .hrefch objects to prevent infinite loops and to
        // assure to go through eeach one of them
        cy.get("div[id*='tbodyid']").find('.hrefch')
         .should('have.length', Object.keys(pendingCount).length-1);   // Now test the number of object values to prevent time out
      })
})