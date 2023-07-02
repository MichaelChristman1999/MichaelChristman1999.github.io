/*
Title: Christman-composer.js
Author: Professor Richard Krasso
Date: June 17th, 2023
Modified By: Michael Christman
Description: Composers JavaScript file
Sources Used: 
WEB 420 GitHub Repository
Assignment 4 Instructions
SoapUI Guide
*/


// Mongoose require statement
const mongoose = require('mongoose');

// Assigning the mongoose Schema object to a variable named Schema
const Schema = mongoose.Schema;

// Creating the composers Schema
const composerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String }
});

// Mongoose model export statement
module.exports = mongoose.model("Composer", composerSchema);
