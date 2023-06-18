/*
 Title: Exercise 4.3 - MongoDB Shell
 Author: Richard Krasso
 Date: June 18th, 2023
 Modified By: Michael Christman
 Description: Building and executing MongoDB composers db queries
 Sources Used: 
 WEB 335 mongosh Guide (under Weekly Resources)
 BUWEB 335 GitHub Repo (user.js script file)
*/

// Loads the user.js script file from week 4 of the web-335 course's official GitHub repository
load("user.js")

// Searches for every document in the users collection
db.users.find()

// Searches for the user with the email address of jbach@me.com.
db.users.find({email:"jbach@me.com"})

// Searching for users with the last name, Mozart.
db.users.find({lastName:"Mozart"})

// Searches for users with the first name,Richard.
db.users.find({firstName:"Richard"})

// Searches for all users with an employee ID number of '1010'.
db.users.find({employeeId:"1010"})
