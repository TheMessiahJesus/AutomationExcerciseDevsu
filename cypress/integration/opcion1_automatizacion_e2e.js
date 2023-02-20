/// <reference types="Cypress" />
// The describe block represents the developed test scenario
describe('DB001_D001_TS001: Verificar que el flujo completo de compra de los productos funciona de manera adecuada', function() {
  before(() => {
    // root-level hook
    // runs once before all tests and loads the data filled inside the fixtures/example.json folder
    cy.fixture('example').then(function(data){
      this.data = data
    })
  })    
  // The it block represents the developed test case
  it('DB001_D001_TS001_TC001: Verificar que se realiza exitosamente la compra de productos mediante la revisión completa del flujo', function() {
      cy.viewport(1024, 768);
      // Recover main e2e url that is contempled as a global variable inside the cypress.config.js file
      const e2eURL = Cypress.env('urlE2E');
      cy.visit(e2eURL);   
      // 1) Agregar 2 productos al carrito
      this.data.productName.forEach(function (element, pageUrl) {
        cy.selectAddProduct(element, e2eURL)
        cy.wait(2000);
      })
      // 2) Visualizar el carrito
      cy.get('#cartur').click()
      cy.wait(2000);
      // Check if the row table cart values equals to the total one displayed on screen
      let sum = 0;
      cy.get('tr td:nth-child(3)').each(($ele) => {
        sum = sum + +($ele.text())
      })
      cy.get('h3[id*="totalp"]').invoke('text').then((totalValue) => {
        // Assert exact amounts validation
        expect(+totalValue).to.equal(sum)
      })
      // 3) Completar el formulario de compra
      cy.get("button[class*='btn btn-success']").contains('Place Order').click();
      cy.wait(2000);
      // Fill form values
      cy.get('.form-group>#name').type("Jose Salgado");      
      cy.get(".form-group>input[id*='country']").should('be.visible').type("Ecuador");
      cy.get(".form-group>input[id*='city']").should('be.visible').type("Quito");
      cy.get(".form-group>input[id*='card']").should('be.visible').type("1234-5678-9123-4567");
      cy.get(".form-group>input[id*='month']").should('be.visible').type("02");
      cy.get(".form-group>input[id*='year']").should('be.visible').type("2023");
       // Submit contact form fulfilled values form
       cy.wait(2000);
       // Click over purchase button to confirm the products acquisition
       cy.get("button[class*='btn btn-primary']").contains('Purchase').click();
       cy.wait(2000);
       // 4) Finalizar la compra
       // Assert purchase confirmation message matches with what it was expected
       cy.get("div[class*='sweet-alert']").then(function(element)
      {
        const actualText=element.text()        
        expect(actualText.includes("Thank you for your purchase!")).to.be.true
      })
       // Click over the details ok confirmation button
       cy.get("button[class*='confirm']").contains('OK').click();      
    })
  })