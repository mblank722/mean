// Turn the following problems from JS Fundamentals Part I into functions that take variable inputs
//
// Create a simples for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumFunc(start, end) {
var sum = 0;
for (var i=start; i <= end  ; i++) {
    sum += i;
  }
  console.log(sum)
}

// Write a loop that will go through an array, find the minimum value, and then return it


y=[1, 5, 90, 25, -3, 0];

function arrayMin(arr) {
  var min = 0;
  for (var i=0; i < arr.length ; i++) {
    if (arr[i] < min){
        min = y[i];
        // console.log('i: ', i);
        // console.log('min: ', min);
        // console.log('y[i]: ', y[i]);
    }
  }
  console.log('min: '+min);
  return min;
}
// arrayMin(y);




// Write a loop that will go through an array, find the average of all of the values, and then return it

y=[1, 5, 90, 25, -3, 0];
function arrayAvg() {
  var sum = 0;
  for (var i=0; i < y.length ; i++) {
      sum += y[i];
        // console.log('i: ', i);
        // console.log('min: ', min);
        // console.log('y[i]: ', y[i]);
    }
  var avg = sum/y.length
  console.log(avg);
  return (avg);
}

// arrayAvg(y);




// Rewrite these 3 as anonymous functions assigned to variables.
// SUM:
var sumFuncAnon = function (start, end) {
  var sum = 0;
  for (var i=start; i <= end  ; i++) {
      sum += i;
    }
    console.log('Anon sum: ' + sum)
}

// min

var arrayMinAnon = function (arr) {
  var min = 0;
  for (var i=0; i < arr.length ; i++) {
    if (arr[i] < min){
        min = y[i];
        // console.log('i: ', i);
        // console.log('min: ', min);
        // console.log('y[i]: ', y[i]);
    }
  }
  console.log('Anon min: '+ min);
  return min;
}

y=[1, 5, 90, 25, -3, 0];
// arrayMinAnon(y);

// Average:
y=[1, 5, 90, 25, -3, 0];
var arrayAvgAnon = function () {
  var sum = 0;
  for (var i=0; i < y.length ; i++) {
      sum += y[i];
    }
  var avg = sum/y.length
  console.log('Anon Avg: ' +avg);
  return (avg);
}

// arrayAvgAnon(y);

//
// Rewrite these as methods of an object
var mathObject ={

  sumFuncAnon:function (start, end) {
    var sum = 0;
    for (var i=start; i <= end  ; i++) {
        sum += i;
      }
      console.log('Anon sum: ' + sum)
  }
,

  arrayMinAnon:function (arr) {
    var min = 0;
    for (var i=0; i < arr.length ; i++) {
      if (arr[i] < min){
          min = y[i];
          // console.log('i: ', i);
          // console.log('min: ', min);
          // console.log('y[i]: ', y[i]);
      }
    }
    console.log('Anon min: '+ min);
    return min;
  }
,

  arrayAvgAnon:function () {
    var sum = 0;
    for (var i=0; i < y.length ; i++) {
        sum += y[i];
          // console.log('i: ', i);
          // console.log('min: ', min);
          // console.log('y[i]: ', y[i]);
      }
    var avg = sum/y.length
    console.log('Anon Avg: ' +avg);
    return (avg);
  }
}

// Create a JavaScript object called person with the following properties/methods

// Properties
// name - set this as your own name
// distance_traveled - set this initially as zero

// Methods
// say_name - should alert the object’s name property

// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.

// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
  name:"Jay"
  ,distance_traveled: 0
  , say_name:function(){console.log("name: " + this.name)}
  , say_something:function(in_say){console.log(this.name + ", says "+ in_say)}
  , walk:function(){
      this.distance_traveled = this.distance_traveled + 3;
      console.log(this.name + " is walking.");
    }
  , run:function(){
      this.distance_traveled = this.distance_traveled + 10;
      console.log(this.name + " is running.");
    }
  , crawl:function(){
      this.distance_traveled = this.distance_traveled + 1;
      console.log(this.name + " is crawling.")
    }
}
person.say_name()
person.say_something("test")
person.walk()
person.run()
person.crawl()
