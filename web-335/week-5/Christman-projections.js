/**
	Title: projections.js
    Author: Professor Richard Krasso
    Date: June 23, 2023
    Description: For this week's assignment, we are building and executing queries for the WEB-335 users collection we created in MongoDB.
    Modified by: Michae Christman
    Sources Used:
    MongoDB Query Guide (under Weekly Resources tab)
*/

// I typed an insertOne query to add a new user to the user's collection.
db.users.insertOne({
  firstName: 'Béla',
  lastName: 'Bartók',
  employeeId: '1013',
  email: 'bvjbartok@gmail.com',
  dateCreated: new Date(),
});

// I typed a updateOne query to update Mozart's email address to mozart@me.com.
db.users.updateOne(
  { _id: ObjectId('6488eeab3a72dab146fd71d3') },
  { $set: { email: 'mozart@me.com' } }
);

// I typed a findOne query to verify that Mozart's email address was updated.
db.users.findOne({ lastName: 'Mozart' });

// I typed a find query to list all documents and use projections to display only the firstName, lastName and email fields.
db.users.find({}, { firstName: 1, lastName: 1, email: 1 });
