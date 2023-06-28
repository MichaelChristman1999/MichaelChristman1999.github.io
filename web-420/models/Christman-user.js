/*
Title: Christman-user.js
Author: Professor Richard Krasso
Date: June 28, 2023
Modified By: Michael Christman
Description: Create the user API for the web-420 RESTful APIs class
Sources Used: 
BUWEB web 420 GitHub repo
Assignment 6 Instructions
SoapUI Guide
*/

// Require statement for mongoose
const mongoose = require('mongoose');

// Assigning the mongoose.Schema object to a variable named Schema
const Schema = mongoose.Schema;

// Creating the userSchema
const userSchema = new Schema({
  userName: { type: String },
  password: { type: String },
  emailAddress: { type: String },
});

// Exporting the model
module.exports = mongoose.model('User', userSchema);
