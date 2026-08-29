# Census CRUD Application

This project is a MEAN stack Census application that I created for the Week 5 Final Practical Exam.

The application allows a user to create, view, update, and delete Census records. The Census records are stored in MongoDB and the frontend was built with Angular.

The application includes the following information for each Census record:

- Year of the Census
- Census Taker's Name
- Number of People in Household
- Street
- City
- State
- Zip Code

The main Census list displays the required information in the order listed in the assignment.

## Running the Application

Start MongoDB if it is not already running.

Start the backend from:

`node-rest-api/node-backend`

Run:

`node index.js`

The backend runs on:

`http://localhost:8000`

Then start the Angular application from the main project folder with:

`ng serve`

The application runs on:

`http://localhost:4200`

## Screenshots

Screenshots are included in this repository showing the Census application working with Create, Read, Update, and Delete functionality, along with the Census collection in MongoDB Compass.
