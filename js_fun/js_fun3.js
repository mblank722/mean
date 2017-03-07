// JS Fundamentals Part III
// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.
//
// Running this in your terminal as you create it can be super helpful since we aren’t manipulating the DOM!
//
// The returned object should have a name property that is set to the value of the name argument that was passed into the function.
// Each returned person object should also have the other properties from JS Fundamentals Part II:
//
// distance_traveled - set this initially as zero say_name - should alert the
// object’s name property say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method. walk - have it alert for example “Jay is walking” and increase distance_traveled by 3 run - have it alert for example “Jay is running” and increase distance_traveled by 10 crawl - have it alert for example “Jay is crawling” and increase distance_traveled by 1
// Note that in all of the above examples “Jay” is the placeholder for the object’s name property.
//
// Change the function name to “personConstructor”
// We just created a blueprint for creating person objects!
//
// If you have prior exposure to OOP, think about how this “constructor” function is similar to “classes”.
//
// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

function personConstructor(name) {
  var person = {
    name:name
    ,distance_traveled: 0
    , say_name:function(){console.log("name: " + person.name)}
    , say_something:function(in_say){console.log(person.name + ", says "+ in_say + '!')}
    , walk:function(){
        person.distance_traveled = person.distance_traveled + 3;
        console.log(this.name + " is walking.");
      }
    , run:function(){
        person.distance_traveled = person.distance_traveled + 10;
        console.log(person.name + " is running.");
      }
    , crawl:function(){
        person.distance_traveled = person.distance_traveled + 1;
        console.log(person.name + " is crawling.")
      }
  }
  return person;
}
var jason=personConstructor('jason')
jason.crawl()
jason.walk()
jason.run()
jason.say_something('pony')
jason.say_name()



// ==============================================================================

function ninjaConstructor(name, cohort) {
  var ninja = {
    name:name
    ,cohort:cohort
    ,belt_level:'yellow_belt'
    ,levelUp:function(){
      console.log('initial belt: ' + ninja.belt_level)
      if (ninja.belt_level==='yellow_belt')
        {ninja.belt_level = 'red_belt'}
      else
        {ninja.belt_level = 'black_belt'}

      console.log('current belt: ' + ninja.belt_level)
    }
  }
  return ninja;
}
peter=ninjaConstructor('peter','cohort-3-17');
peter.levelUp();
peter.levelUp();
