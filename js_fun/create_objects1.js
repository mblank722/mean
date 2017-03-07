// // We are going to create our very own constructor.
//
// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
//
// Then complete the following tasks:
//
// // Each vehicle should have a makeNoise method
//
// Using the constructor,
// create a Bike
// Redefine the Bike’s makeNoise method to print “ring ring!”
// Create a Sedan
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
//
// Using the constructor,
// create a Bus
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, numWheels, numPass) {
  var vehicle = {
    name:name
    ,numWheels:numWheels
    ,numPass:numPass
    ,makeNoise:function(){console.log('buzz, buzz!')}
  }
  return vehicle;
}
vehicle1=VehicleConstructor('Bike',2,1);
vehicle1.makeNoise=function(){console.log('ring, ring!')}
vehicle1.makeNoise()
console.log(vehicle1)
