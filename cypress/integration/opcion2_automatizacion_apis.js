/// <reference types="Cypress" />
// We add the swagger.json file by embedding it after downloading it from the petstore.swagger.io web page
import swagger from '../fixtures/swagger.json'
// The describe block represents the developed test scenario
describe('PS001_D001_TS001: Verificar que las apis de la página de servicios "PetStore" funcionen para los siguientes casos: 2 GET, 1 POST y 1 PUT', function() 
{
this.beforeEach(() => {
    // root-level hook
   // runs once before each of the tests and loads the data filled inside the fixtures/example.json folder
    cy.fixture('example').then(function(data){
        this.data = data
    })
})   
// Recover main API endpoint url that is contempled as a global variable inside the cypress.config.js file
const urlAPI = Cypress.env('urlAPI');
// The it block represents the developed test case #1
it('PS001_D001_TS001_TC001: Añadir una mascota a la tienda (POST)',function() {
    // Obtain the json fixture file to process different calls inside of it
    cy.fixture('/swagger.json', { fixture: 'swagger.json' }).then((value)=>{
        cy.request({
            method : 'POST',
            // recover api url that resides inside the cypress.config.js file
            url : urlAPI,
            // the body json values needed to add a new json object
            body : {
                // obtain the petid value that works as a global variable that resides inside the fixture/example.json folder
                "id": Number(this.data.petID),
                "category": {
                  "id": 1,
                  "name": "pug"
                },
                "name": "puggles",
                "photoUrls": [
                  "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=826&t=st=1676746445~exp=1676747045~hmac=665e5f8932a733e032f8c00bda11af199874f70625557d8a65e8960647640319"
                ],
                "tags": [
                  {
                    "id": 1,
                    "name": "friendly"
                  }
                ],
                "status": "available"
              }
        }).then((response)=>{
            // successful response assertion for a post 
            expect(response.status).to.eq(200)
            // Write the result json response in the web explorer console log with the posted json value
            console.log(response.body)
            // response.body is automatically serialized into JSON, so that we cam assert if the desired body values are met
            expect(response.body).to.have.property('id', Number(this.data.petID))
            expect(response.body).to.have.property('name', 'puggles')
            expect(response.body).to.have.property('status', 'available')
        })
    });
    })
// The it block represents the developed test case #2
it('PS001_D001_TS001_TC002: Consultar la mascota ingresada previamente (Búsqueda por ID)(GET)',function() {
    // Obtain the json fixture file to process different calls inside of it
    cy.log(this.data.petID)
    cy.fixture('/swagger.json', { fixture: 'swagger.json' }).then((value)=>{
        cy.request({
            method : 'GET',
            // receive global variable for a get by id
            url : urlAPI+'/'+this.data.petID
        }).then((response)=>{
             // successful response assertion for a get 
            expect(response.status).to.eq(200)
            // Write the result json response in the web explorer console log with the resulting value
            console.log(response.body)
            // Review if the newly entered value matches with the desired id
            expect(response.body).to.have.property('id', Number(this.data.petID))
        })
    });
})
// The it block represents the developed test case #3
it('PS001_D001_TS001_TC003: Actualizar el nombre de la mascota y el estatus de la mascota a "sold"(PUT)',function() {
    // Obtain the json fixture file to process different calls inside of it
    cy.fixture('/swagger.json', { fixture: 'swagger.json' }).then((value)=>{
        cy.request({
            method : 'PUT',
            url : urlAPI,
            body : {
                "id": Number(this.data.petID),
                "category": {
                  "id": 1,
                  "name": "pug"
                },
                // modify name
                "name": "MR PUGGSLY",
                "photoUrls": [
                  "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=826&t=st=1676746445~exp=1676747045~hmac=665e5f8932a733e032f8c00bda11af199874f70625557d8a65e8960647640319"
                ],
                "tags": [
                  {
                    "id": 1,
                    "name": "friendly"
                  }
                ],
                // modify status
                "status": "sold"
              }
        }).then((response)=>{
             // successful response assertion for a put
            expect(response.status).to.eq(200)
            // Write the result json response in the web explorer console log with the resulting value
            console.log(response.body)
            // Review if the retrieved value matches with the desired id, has the new name and the new status (sold)
            expect(response.body).to.have.property('id', Number(this.data.petID))
            expect(response.body).to.have.property('name', 'MR PUGGSLY')
            expect(response.body).to.have.property('status', 'sold')            
        })
    });
})
// The it block represents the developed test case #4
it('PS001_D001_TS001_TC004: Consultar la mascota modificada por estatus "sold"(GET)',function() {
    // Obtain the json fixture file to process different calls inside of it
    cy.fixture('/swagger.json', { fixture: 'swagger.json' }).then((value)=>{
        cy.request({
            method : 'GET',
            // change status from available to sold
            url : urlAPI+'/findByStatus?status=sold'
        }).then((response)=>{
             // successful response assertion for a get 
            expect(response.status).to.eq(200)
            // Write the result json response in the web explorer console log with the total resulting values
            console.log(response.body)
             // Check that we received our previously modified pet by using its id 
             response.body.forEach(pet=>{
                const petId = pet.id+"";
                if(petId===this.data.petId){
                    // Review if the new pet is now part of the sold list
                    expect(pet.status).to.eq("sold")
                }
             })
            // This line is commented due that it may cause lag on some computers, but it helps to 
            // review via log output if all of the results really are only sold and match with the desired 
            // numbered output according to the results obtained, based on the swagger .io page
            /*response.body.forEach(pet=>{
                cy.log(pet.id)
                expect(pet.status).to.eq("sold")
             }) */ 
        })
    });
})
})





