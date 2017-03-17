/* to start project - mkdir cd to new dir then: mkdir (views, static)

make a package.json file:
yourcommandline> npm init -y
yourcommandline> npm install express --save
yourcommandline> npm install ejs --save
yourcommandline> npm install body-parser --save
yourcommandline> npm in
>npm install mongoose --save*/


// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//require mongoose
var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');

// Connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/puppies');

var PuppySchema = new mongoose.Schema({
 name: String,
 age: Number
})

// Set this Schema in models as 'Puppy'
mongoose.model('Puppy', PuppySchema);
// Retrieving Schema from model 'Puppy'
var Puppy = mongoose.model('Puppy');

// Use native promises
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS

app.set('view engine', 'ejs');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
//get requested URL and Verb
app.use(function(req, res, next) {
  req.getUrl = function() {
    return "(" + req.method + ") " + req.protocol + "://" + req.get('host') + req.originalUrl;
  }
  console.log("Request: " + req.getUrl());
  //console.log('request: ', req )
  return next();

})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("ModularPuppy Dashboard: listening on port 8000");
})
