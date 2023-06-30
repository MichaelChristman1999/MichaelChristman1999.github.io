/**
	Title: Christman_aggregate_queries.js
    Author: Professor Richard Krasso
    Date: June 30th, 2023
    Description: Creating & executing aggregate queries in MongoDB.
    Sources Used:
    MongoDB Query Guide
    mongosh Guide
 */

// Loading the houses.js script from week six of the courses GitHub repository.
load('houses.js');

// Writing a query to search for all of the documents in the houses collection.
db.houses.find();

// Writing a query to searching for all of the documents in the student’s collection.
db.students.find();

// Writing a query to add a document to the student’s collection.
db.students.insertOne({
  firstName: 'Jennifer',
  lastName: 'Hoitenga',
  studentId: 's123',
  houseId: 'h867',
});

// Query to prove the document was added.
db.students.find({ firstName: 'Jennifer' });

// Writing a query to delete the document.
db.students.deleteOne({ firstName: 'Jennifer' });

// Query to prove the document was deleted.
db.students.find({ firstName: 'Jennifer' });

// Writing a query to show a list of students by house.
db.houses.aggregate([
  {
    $lookup: {
      from: 'students',
      localField: 'houseId',
      foreignField: 'houseId',
      as: 'inhabitants',
    },
  },
]);

// Writing a query to show a list of students for house Gryffindor.
db.houses.aggregate([
  {
    $lookup: {
      from: 'students',
      pipeline: [{ $match: { houseId: 'h1007' } }],
      as: 'GryffindorInhabitants',
    },
  },
]);

// Writing a query to show a list of students for the Eagle mascot.
db.houses.aggregate([
  { $match: { mascot: 'Eagle' } },
  {
    $lookup: { from: 'students', localField: 'houseId', foreignField: 'houseId', as: 'Ravenclaw' },
  },
]);
