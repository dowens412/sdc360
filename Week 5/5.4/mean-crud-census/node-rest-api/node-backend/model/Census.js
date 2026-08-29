const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    year: { type: String },
    census_taker: { type: String },
    people_in_household: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);
