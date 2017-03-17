//require mongoose
var mongoose = require('mongoose');
// Retrieving Schema from model 'Puppy'
var Puppy = mongoose.model('Puppy');

//Prepare Puppies controller for export as a function

module.exports = {

  show_all: function(req, res) {
    Puppy.find({}, function (err, puppies){
      res.render('index', {title:'Puppy Dashboard', puppies:puppies});
    })
  },

  create: function (req, res) {
    res.render('new_puppy');
  },

  edit_puppy: function (req, res) {
    Puppy.findOne ({_id: req.params.id}, function(err,puppy){
      console.log("id: " + req.params.id);
      res.render('edit_puppy',{puppy:puppy});
    })
  },

  delete_puppy: function (req, res){
    // ...delete 1 record by a certain key/vaue.
    Puppy.findOne ({_id: req.params.id}, function(err,puppy){
      console.log("id: " + req.params.id);
      res.render('delete_puppy',{puppy:puppy});
    })
  },

  show: function (req,res) {
    Puppy.findOne ({_id: req.params.id}, function(err,puppy){
      console.log("id: " + req.params.id);
      res.render('show_puppy',{puppy:puppy});
    })
  },

  add: function (req,res) {
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
  },

  // delete: function (req,res) {
  //   // Delete the puppy from the database.
  //   Puppy.remove({_id: req.params.id}, function(err){
  //    // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
  //     if(err) {
  //       console.log('Oops - something went wrong');
  //       console.log(err);
  //       res.redirect('/');
  //     } else {
  //       console.log('successfully deleted a puppy!');
  //
  //       res.redirect('/');
  //     }
  //   })
  // },

  edit: function (req, res) {
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
      console.log('Name: ', req.body.name, 'Age: ', req.body.age);
      res.redirect('/');
    }
  })
},

  delete: function (req, res) {
    // Add the puppy from req.body to the database.
    //6. Add Puppy Request
//console.log("id: ",req.params.id);
    Puppy.remove({_id: req.params.id},  function(err){
     // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      if(err) {
        console.log('Oops - something went wrong');
        console.log(err);
        res.redirect('/');
      } else {
        console.log('successfully deleted a puppy!');
        console.log('Name: ', req.body.name, 'Age: ', req.body.age);
        res.redirect('/');
      }
    })
  }
}
