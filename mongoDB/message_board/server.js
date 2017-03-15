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
mongoose.connect('mongodb://localhost/message_board');

//Define Schema
var Schema = mongoose.Schema;
//Define Post (sub)schema
var PostSchema = new mongoose.Schema({
 name: String,
 message: String,
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

//+
var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 name: String,
 message: String
})

mongoose.model('Post', PostSchema); // We are setting this Schema in our Models as '{Post}'

mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as '{Comment}'

//stroe models in variables
var Post = mongoose.model('Post'); // We are retrieving this Schema from our Models, named 'Post'
var Comment = mongoose.model('Comment'); // We are retrieving this Schema from our Models, named 'Comment'


// Use native promises - b/c mongoose promise library is deprecated; this allow
// db commands to operate
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

})

// Routes:
// Root Request
app.get('/', function(req, res) {
  // Retrieve the posts from the database -> render
  //Post.find({}, function(err, posts) {
  // the populate method is what grabs all of the comments using their IDs stored in the
  // comment property array of the post document!
  //for (var i = 0; i < posts.length; i++){
   Post.find({})
   .populate('comments')
   .exec(function(err, posts) {

     res.render('index', {posts: posts})
   })
  //}
})






// app.get('/', function(req, res) {
//     // Retrieve posts from the database and include them in the view page we will be rendering.
//     Post.find({}, function(err, posts) {
//       // data from form on the front end
//        var comment = new Comment(req.body);
//        //  set the reference like this:
//        //comment._post = posts._id;
//        // now save both to the DB
//           comment.save(function(err){
//           posts.comment.push(comment);
//           posts.save(function(err){
//           if(err) {
//             console.log('Oops - something went wrong');
//             console.log(err);
//             res.render('index', {err:err});
//           } else { // else console.log that we did well and then redirect to the root route
//             //console.log(users);
//             res.render('index', { posts:posts});
//           }
//         });
//       });
//   });
// });


//app.get('/', function(req, res) {
    // Retrieve the users from the database and include them in the view page we will be rendering.
    //Post.find({})//, function(err, posts) {
    //.populate('comments')
    //.exec(function(err, post) {
    // res.render('post', {post: post});
    //   });
    // // data from form on the front end
    //  var comment = new Comment(req.body);
    //  //  set the reference like this:
    //  comment._post = posts._id;
    //  // now save both to the DB
    //   comment.save(function(err){
    //     posts.comment.push(comment);
    //     posts.save(function(err){
    //     if(err) {
    //       console.log('Oops - something went wrong');
    //       console.log(err);
    //       res.render('index', {err:err});
    //     } else { // else console.log that we did well and then redirect to the root route
    //       //console.log(users
    //console.log('res.body: ', res.body);
    //      res.render('index', { posts:res});
    //})

  //});


// app.get('/', function(req, res) {
//     // Retrieve the users from the database and include them in the view page we will be rendering.
//     Post.find({}, function(err, posts) {
//       // data from form on the front end
//        var comment = new Comment(req.body);
//        //  set the reference like this:
//        comment._post = posts._id;
//        // now save both to the DB
//         comment.save(function(err){
//           posts.comment.push(comment);
//           posts.save(function(err){
//           if(err) {
//             console.log('Oops - something went wrong');
//             console.log(err);
//             res.render('index', {err:err});
//           } else { // else console.log that we did well and then redirect to the root route
//             //console.log(users);
//             res.render('index', { posts:posts});
//           }
//         });
//       });
//   });
// });

// Add User Route
app.post('/post/new', function(req, res) {
    console.log("Post data: ", req.body);
    // Add the user from req.body to the database.
    var post = new Post({name: req.body.name, message: req.body.message});

    post.save(function(err) {
    if(err) {
      console.log('Oops - something went wrong adding a post');
      console.log(err);
      res.redirect('/');
    } else {
      console.log('successfully added a post!');
      console.log('Name: ', post.name, 'Message: ', post.message);
      res.redirect('/');
      }
    })
})

// Add Comment Route
app.post('/comments/new/:id', function(req, res) {
    console.log("Comment data: ", req.body);
    Post.findOne({_id: req.params.id}, function(err, post){
      // data from form on the front end
      var comment = new Comment(req.body);
      //  set the reference like this:
      comment._post = post._id;
      // now save both to the DB
      comment.save(function(err){
        post.comments.push(comment);
        post.save(function(err){
          if(err) {
            console.log('Error');
           } else {

             res.redirect('/');
           }
         });
       });
    });
 });



  // // Add Comment Route
  // app.comment('/comments/new', function(req, res) {
  //     console.log("Comment data: ", req.body);
  //
  // // Add the comment from req.body to the database.
//     var comment = new Comment({name: req.body.name, message: req.body.comment});
//
//     comment.save(function(err) {
//     if(err) {
//       console.log('Oops - something went wrong adding a comment');
//       console.log(err);
//       res.redirect('/');
//     } else {
//       console.log('successfully added a comment!');
//       console.log('Name: ', comment.name, 'Message: ', comment.message);
//       res.redirect('/');
//       }
//     })
// })
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("Message Board app: listening on port 8000");
})
