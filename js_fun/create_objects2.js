
function VehicleConstructor(name, numWheels, numPass,speed) {
  this.name = name;
  this.numWheels = numWheels;
  this.numPass = numPass;
  this.speed = speed;
  this.makeNoise = function(){
    console.log('buzz, buzz!');
  };
}
schwinn=new VehicleConstructor('Bike',2,1);
schwinn.makeNoise=function(){console.log('ring, ring!')}
schwinn.makeNoise()
console.log(schwinn)

accord=new VehicleConstructor('Sedan',2,4);
accord.makeNoise=function(){console.log('honk, honk!')}
accord.makeNoise()
console.log(accord)

bus= new VehicleConstructor('Bus',8,14);
bus.makeNoise=function(){console.log('loud honk, honk!')}
bus.pickUp=function(new_pass){
  numPass+=new_pass;
  console.log('Passenger count: '+ num_pass)
}
bus.makeNoise()
bus.pickUp(5)
bus.pickup(1)
console.log(bus)
