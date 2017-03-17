
//require mongoose?
var mongoose = require('mongoose');
//import Puppy model?
var Puppy = mongoose.model('Puppy');
var puppies =require('../controllers/puppies.js')

// place routes in function adn ready for export
module.exports = function(app) {
  // Routes:
  // 1. Root Request - Display all puppies
  app.get('/', function(req, res) {
    puppies.show_all(req,res)
  })


  //2. Display new puppy form
  app.get('/puppies/new', function(req, res) {

    puppies.create(req,res)
    //res.render('new_puppy');
  })

  //3. Display one puppy for modify
  app.get('/puppies/edit/:id', function(req, res) {
    puppies.edit_puppy(req,res)
    // Puppy.findOne ({_id: req.params.id}, function(err,puppy){
    //   console.log("id: " + req.params.id);
    //   res.render('edit_puppy',{puppy:puppy});
    // })
  })

  //4. Display one puppy's for delete
  app.get('/puppies/destroy/:id', function(req, res) {
    puppies.delete_puppy(req,res)

    // Puppy.findOne ({_id: req.params.id}, function(err,puppy){
    //   console.log("id: " + req.params.id);
    //   // ...delete 1 record by a certain key/vaue.
    //
    //   res.render('delete_puppy',{puppy:puppy});
    // })
  })

  //5. Display one puppy's info
  app.get('/puppies/:id', function(req, res) {
      puppies.show(req,res)
      // Puppy.findOne ({_id: req.params.id}, function(err,puppy){
      //   console.log("id: " + req.params.id);
      //   res.render('show_puppy',{puppy:puppy});
      // })

  })


  //6. Add Puppy Request
  app.post('/puppies', function(req, res) {
      console.log("POST DATA", req.body);
      puppies.add(req,res)
      // Add the puppy from req.body to the database.
      // var puppy = new Puppy({name: req.body.name, age: req.body.age});
      // puppy.save(function(err) {
      // if(err) {
      //   console.log('Oops - something went wrong');
      //   console.log(err);
      //   res.redirect('/');
      // } else {
      //   console.log('successfully added a puppy!');
      //   console.log('Name: ', puppy.name, 'Age: ', puppy.age);
      //   res.redirect('/');
      //   }
      // })
  })

  //7. Delete Puppy Request
  //app.post('/puppies/destroy/:id', function(req, res) {
    //  console.log("POST DATA", req.body);
      // Delete the puppy from the database.
      //puppies.delete(req,res)
      // Puppy.remove({_id: req.params.id}, function(err){
      //  // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      //   if(err) {
      //     console.log('Oops - something went wrong');
      //     console.log(err);
      //     res.redirect('/');
      //   } else {
      //     console.log('successfully deleted a puppy!');
      //
      //     res.redirect('/');
      //   }
      // })
  // })

  //7. Edit Puppy Request
  app.post('/puppies/:id', function(req, res) {
      console.log("POST DATA", req.body);
      puppies.edit(req, res)
      // Add the puppy from req.body to the database.
      //6. Add Puppy Request
      // Puppy.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
      //  // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      //   if(err) {
      //     console.log('Oops - something went wrong');
      //     console.log(err);
      //     res.redirect('/');
      //   } else {
      //     console.log('successfully modified a puppy!');
      //     console.log('Name: ', req.name, 'Age: ', req.age);
      //     res.redirect('/');
      //   }
      // })
  })
  //7. Delete Puppy Request
  app.post('/puppies/destroy/:id', function(req, res) {
      console.log("POST DATA", req.body);
      puppies.delete(req,res);
      // Add the puppy from req.body to the database.
      //6. Add Puppy Request
      //Puppy.remove({_id: req.params.id}, function(err){
       // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      //   if(err) {
      //     console.log('Oops - something went wrong');
      //     console.log(err);
      //     res.redirect('/');
      //   } else {
      //     console.log('successfully deleted a puppy!');
      //     console.log('Name: ', puppy.name, 'Age: ', puppy.age);
      //     res.redirect('/');
      //   }
      // })
  })
}
