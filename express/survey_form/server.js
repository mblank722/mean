//require express - and instantiate it as a server  object
var express = require("express");
//reqire express-session for rare cases when using session

var session = require('express-session');
var app = express();


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
  response.render('index', {title:'Survey Form - Express'});
})


// route to process new user form data:
app.post('/results', function (req, res){
    console.log("\nPOST User DATA: \n", req.body)
    //code to add user to db goes here!
    // req.session.name = req.body.name;
    // console.log("req seesion: " + req.session);

    user = {
			name: req.body.name,
			location: req.body.location,
			language: req.body.language,
			comment: req.body.comment
		};


    console.log("one more time", user)

    // redirect the user back to the root route.
    res.render('results', {user:user,})
});



//NOTE: normally server "told to listen" after all rules are set/written
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
}
);
