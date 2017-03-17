//require mongoose
var mongoose = require('mongoose');

//create Schema
var PuppySchema = new mongoose.Schema({
 name: String,
 age: Number
})

// Retrieving Schema from model 'Puppy'
var Puppy = mongoose.model('Puppy',PuppySchema);
