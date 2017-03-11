//require express - and instantiate it as a server  object
var express = require("express");
//reqire express-session for rare cases when using session

var session = require('express-session');
var app = express();

app.use(session({secret: 'codingdojorocks'}));  // string for encryption
//requie body_parser and then use it to handle POSTs
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));



// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + '/static'));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
/*app.all('*', function(request, response, next) {
  console.log('URL requested: ' + request.originalUrl)
  next()

})*/

//lookup req.params...variablename
//find variable name for various pieces of data

app.use(function(req, res, next) {
  req.getUrl = function() {
    return req.protocol + "://" + req.get('host') + req.originalUrl;
  }
console.log("Full Request: " + req.getUrl());
  return next();
});


// root route
app.get('/', function(request, response) {
  response.render('index', {title:'my Express Project'});
})

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    req.session.name = req.body.name;
    console.log('Name stored in sesssion:' + req.session.name);
    // redirect the user back to the root route.
    res.redirect('/')
});

//route to display one user of id passed in get
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});




//NOTE: normally server "told to listen" after all rules are set/written
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
