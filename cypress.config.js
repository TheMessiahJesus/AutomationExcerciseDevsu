const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "55izn5",
  reporter : 'mochawesome',
  env :{
    // This variable holds the e2e option 1 exercise link
    urlE2E:"https://www.demoblaze.com/",
    // This variable holds the API option 2 exercise link
    urlAPI:"https://petstore.swagger.io/v2/pet"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // This variable holds the path where the executable test cases are, as well as the extension in which those test cases run i.e.: *.js
    specPattern: 'cypress/integration/*.js'
  },
});
