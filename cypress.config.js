require("dotenv").config();

module.exports = {
  e2e: {
    urlBase: process.env.URL_BASE,
    puerto: process.env.PUERTO_PRINCIPAL,
    ambiente: process.env.AMBIENTE,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
