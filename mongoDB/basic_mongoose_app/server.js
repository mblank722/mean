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
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//get URL
app.use(function(req, res, next) {
  req.getUrl = function() {
    return req.protocol + "://" + req.get('host') + req.originalUrl;
  }
  console.log("Full Request: " + req.getUrl());
  return next();

});

// Routes:
// Root Request
app.get('/', function(req, res) {
    // Retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function(err, users) {

    if(err) {
      console.log('Oops - something went wrong');
      console.log(err);
      res.render('index', {title:'Basic Mongoose', err:err});
    } else { // else console.log that we did well and then redirect to the root route
      //console.log(users);
      res.render('index', {title:'Basic Mongoose Main', users:users});
    }
  })

    //res.render('index', {title: 'Basic Mongoose Users', });

})

// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // Add the user from req.body to the database.
    var user = new User({name: req.body.name, age: req.body.age});

    user.save(function(err) {
    if(err) {
      console.log('Oops - something went wrong');
      console.log(err);
      res.redirect('/');
    } else {
      console.log('successfully added a user!');
      console.log('Name: ', user.name, 'Age: ', user.age);
      res.redirect('/');
      }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("Basic Mongood app: listening on port 8000");
})
