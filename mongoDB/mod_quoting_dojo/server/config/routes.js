
var quotes = require('../controllers/quotes.js');


// set up routes for export after wrapping in a function
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render("index");
  })

  // ROUTES from Server.js
  app.post('/quotes', function(req,res){
    //call methods from quotes.js
    quotes.create(req,res)
  })

    // var quote = new Quote({name: req.body.name, quote: req.body.quote});
    // quote.save(function(err) {
    // if(err){
    //   console.log("something went wrong");
    //   } else {
    //     res.redirect('/main');
    //   }
    // })
//})

  app.get('/main', function (req, res) {
    quotes.show(req,res)
  })
    // Quote.find({}, function (err, quotes){
    //   res.render('main', {quotes:quotes});
    //});
  //})
//})
// end of routes
}
//end of app funcition wrpaaer for routes
