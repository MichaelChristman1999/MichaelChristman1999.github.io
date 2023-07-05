""" Title: Christman_usersp2.py
    Author: Michael Christman
    Date: July 5th, 2023
    Description: Exercise 7.3 Python with MongoDB
    Sources Used:
    Learn Python in One Hour by Programming with Mosh YouTube
    WEB 335 Python Guide (under Weekly Resources)
"""

#Import statement to include MongoClient
from pymongo import MongoClient

# Import the Date and Time 
import datetime

# Build the connection string to the Mongo client
client = MongoClient('mongodb+srv://web335_user:s3cret@bellevueuniversity.y9g9tgp.mongodb.net/web335DB')
db = client['web335DB']
print(client)

# Blank line added for improved readability
print()

# Create a document for a new user to the collection
michael = {
    "firstName": "Michael",
    "lastName": "Christman",
    "employeeId": "867",
    "email": "mchristman99@gmail.com",
    "dateCreated": datetime.datetime.now()
}

# Variable that inserts the newly created document into the web335DB database
michaelUserId = db.users.insert_one(michael).inserted_id

# Print statement to display the newly created document
print(db.users.find_one({"employeeId": "867"}))

# Blank line added for improved readability
print()

# Update the email address of the new document
db.users.update_one(
    {"employeeId": "867"},
    {"$set": {"email": "mchristman22@bellevue.edu"}}
)

# Print statement to display the updated document
print(db.users.find_one({"employeeId": "867"}))

# Blank line added for improved readability
print()

#Statement to delete the document
result = db.users.delete_one({"employeeId": "867"})

#Verify that the document has been deleted from the collection
print(db.users.find_one({"employeeId": "867"}))
