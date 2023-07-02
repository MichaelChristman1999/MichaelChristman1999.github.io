""" Title: Christman_usersp1.py
    Author: Michael Christman
    Date: June 28, 2023
    Description: Exercise 6.3: Python with MongoDB
    Sources Used:
    WEB 335 Python Guide
"""

""" MongoClient import statement """
from pymongo import MongoClient

""" Connection string to the web335 DB """
client = MongoClient('mongodb+srv://web335_user:s3cret@bellevueuniversity.y9g9tgp.mongodb.net/web335DB')
print(client)

""" Extra print statement that creates a blank line for readability purposes """
print()

""" Variable that configures and allows access to the web335 database """
db = client['web335DB']

""" Displays all documents in the users collection """
print('Display all documents in the users collection:')
for user in db.users.find():
    print(user)

""" Extra print statement that creates a blank line for readability purposes """
print()

""" Displays documents where the specific employeeId value is '1011'. """
print('Display Employee ID 1011:')
print(db.users.find_one({'employeeId': '1011'}))

""" Extra print statement that creates a blank line for readability purposes """
print()

""" Displays documents where the lastName value is 'Mozart'. """
print('Display user with the lastName of Mozart:')
print(db.users.find_one({'lastName': 'Mozart'}))
