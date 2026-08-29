const express = require('express');
const app = express();

const censusRoute = express.Router();
let Census = require('../model/Census');

// Get all Census records
censusRoute.route('/').get((req, res) => {
  Census.find().then((response) => {
    res.status(200).json(response);
  })
  .catch((error) => {
    console.error(`Could not get census records: ${error}`);
  })
})

// Get a single Census record
censusRoute.route('/edit-census/:id').get((req, res) => {
  Census.findById(req.params.id).then((response) => {
    res.status(200).json(response);
  })
  .catch((error) => {
    console.error(`Could not get census record: ${error}`);
  })
})

// Add a Census record
censusRoute.route('/add-census').post((req, res) => {
  Census.create(req.body).then(() => {
    console.log('Census record added successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not save census record: ${error}`);
  })
})

// Update a Census record
censusRoute.route('/update-census/:id').put((req, res) => {
  Census.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).then((response) => {
    console.log('Census record updated successfully.');
    res.status(200).json(response);
  })
  .catch((error) => {
    console.error(`Could not update census record: ${error}`);
  })
})

// Delete a Census record
censusRoute.route('/delete-census/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Census.findByIdAndDelete(req.params.id).then(() => {
    console.log('Census record deleted successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not delete census record: ${error}`);
  })
})

module.exports = censusRoute;
