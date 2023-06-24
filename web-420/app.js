/*
    ==================
    Title: app.js
    Author: Michael Christman
    Date: May 25th, 2023
    Description: App.js file for WEB-420 coursework weeks 1-9
*/
const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');

// Creating a new variable named app and assign it to express library.
const app = express();

// Setting the port to 3000.
const PORT = process.env.PORT || 3000;

// Setting the app to use express.json().
app.use(express.json());

// Setting the app to use url encoded.
app.use(express.urlencoded({ extended: true }));

// Setting up the routing for the /api endpoints
const composersAPI = require('./routes/Hoitenga-composer-routes');
const personAPI = require('./routes/Hoitenga-person-routes');

app.use('/api', composersAPI);
app.use('/api', personAPI);

// Connecting to Mongo
const CONN = 'mongodb+srv://web420_user:s3cr3t@bellevueuniversity.g473hiy.mongodb.net/web420DB';

// Showing Server Connection Messages
mongoose
  .connect(CONN)
  .then(() => {
    console.log('Connection to MongoDB database was successful');
  })
  .catch((err) => {
    console.log('MongoDB Error: ' + err.message);
  });

// Defining an object literal with named options.
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'WEB 420 RESTful APIs',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Files containing annotations for the OpenAPI specification.
};

// Creating a new variable name openapiSpecification & calling the swaggerJsdoc library using the options object literal.
const openapiSpecification = swaggerJsdoc(options);

// Wiring openapiSpecification variable to app variable.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Start the server and make it listen on port 3000.
app.listen(PORT, () => {
  console.log(`Application started and listening on port ${PORT}`);
});
