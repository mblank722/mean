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
mongoose.model('Puppy', PuppySchema); // We are setting this Schema in our Models as 'Puppy'
var Puppy = mongoose.model('Puppy') // We are retrieving this Schema from our Models, named 'Puppy'

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
    return "(" + req.method + ") " + req.protocol + "://" + req.get('host') + req.originalUrl;
  }
  console.log("Request: " + req.getUrl());
  //console.log('request: ', req )
  return next();

});

// Routes:
// 1. Root Request - Display all puppies
app.get('/', function(req, res) {
    Puppy.find({}, function(err, puppies) {
    if(err) {
      console.log('Oops - something went wrong');
      res.render('index', {title:'Puppy DashBoard', err:err});
    } else { // else console.log that we did well and then redirect to the root
      res.render('index', {title:'Puppy Dashboard', puppies:puppies});
    }
  })
})


//2. Display new puppy form
app.get('/puppies/new', function(req, res) {
    res.render('new_puppy');
})

//3. Display one puppy for modify
app.get('/puppies/edit/:id', function(req, res) {
  Puppy.findOne ({_id: req.params.id}, function(err,puppy){
    console.log("id: " + req.params.id);
    res.render('edit_puppy',{puppy:puppy});
  })
})

//4. Display one puppy's for delete
app.get('/puppies/destroy/:id', function(req, res) {
  Puppy.findOne ({_id: req.params.id}, function(err,puppy){
    console.log("id: " + req.params.id);
    // ...delete 1 record by a certain key/vaue.

    res.render('delete_puppy',{puppy:puppy});
  })
})

//5. Display one puppy's info
app.get('/puppies/:id', function(req, res) {

    Puppy.findOne ({_id: req.params.id}, function(err,puppy){
      console.log("id: " + req.params.id);
      res.render('show_puppy',{puppy:puppy});
    })

})


//6. Add Puppy Request
app.post('/puppies', function(req, res) {
    console.log("POST DATA", req.body);
    // Add the puppy from req.body to the database.
    var puppy = new Puppy({name: req.body.name, age: req.body.age});
    puppy.save(function(err) {
    if(err) {
      console.log('Oops - something went wrong');
      console.log(err);
      res.redirect('/');
    } else {
      console.log('successfully added a puppy!');
      console.log('Name: ', puppy.name, 'Age: ', puppy.age);
      res.redirect('/');
      }
    })
})

//7. Delete Puppy Request
app.post('/puppies/destroy/:id', function(req, res) {
    console.log("POST DATA", req.body);
    // Add the puppy from req.body to the database.
    //6. Add Puppy Request
    Puppy.remove({_id: req.params.id}, function(err){
     // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      if(err) {
        console.log('Oops - something went wrong');
        console.log(err);
        res.redirect('/');
      } else {
        console.log('successfully deleted a puppy!');
        
        res.redirect('/');
      }
    })
})

//7. Edit Puppy Request
app.post('/puppies/:id', function(req, res) {
    console.log("POST DATA", req.body);
    // Add the puppy from req.body to the database.
    //6. Add Puppy Request
    Puppy.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
     // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      if(err) {
        console.log('Oops - something went wrong');
        console.log(err);
        res.redirect('/');
      } else {
        console.log('successfully modified a puppy!');
        console.log('Name: ', req.name, 'Age: ', req.age);
        res.redirect('/');
      }
    })
})
//7. Delete Puppy Request
app.post('/puppies/destroy/:id', function(req, res) {
    console.log("POST DATA", req.body);
    // Add the puppy from req.body to the database.
    //6. Add Puppy Request
    Puppy.remove({_id: req.params.id}, function(err){
     // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      if(err) {
        console.log('Oops - something went wrong');
        console.log(err);
        res.redirect('/');
      } else {
        console.log('successfully deleted a puppy!');
        console.log('Name: ', puppy.name, 'Age: ', puppy.age);
        res.redirect('/');
      }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("Puppy Dashboard: listening on port 8000");
})
