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
schwinn=VehicleConstructor('Bike',2,1);
schwinn.makeNoise=function(){console.log('ring, ring!')}
schwinn.makeNoise()
console.log(schwinn)

accord=VehicleConstructor('Sedan',2,4);
accord.makeNoise=function(){console.log('honk, honk!')}
accord.makeNoise()
console.log(accord)

bus=VehicleConstructor('Bus',8,32);
bus.makeNoise=function(){console.log('loud honk, honk!')}

bus.pickUp=function(new_pass){var pass_cnt=0;
  pass_cnt+=new_pass;
  console.log('Passenger count: '+ pass_cnt)
}
bus.makeNoise()
bus.pickUp(5)
console.log(bus)
