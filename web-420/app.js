/*
    ==================
    Title: app.js
    Author: Michael Christman
    Date: May 25th, 2023
    Description: App.js file for the WEB-420 week 1 assignment
*/

//Required NPM modules 
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerJS = require('swagger-jsdoc');
const app = express();

//Local server wired
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Options and Open API modules with additional API details and methods
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'], 
}
const openapiSpecifications = swaggerJS(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecifications));
