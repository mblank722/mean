
function VehicleConstructor(name, numWheels, numPass, speed) {
//PRIVATE
  var self=this;
  var distance_travelled = 0;
  var vin = 0;
  var updateDistanceTravelled = function(self){
    distance_travelled = distance_travelled + self.speed
    return self
  }
  var display_distance_travelled = function (self){
    distance_travelled;
    console.log('distance_travelled: ' + distance_travelled);
    return self
  }
  var createVin = function(){
      var x = Math.floor(Math.random() * 100000000000);
      // console.log('VIN: ' + x)
    return x
  }
  var returnVin = function(self) {
    console.log('VIN: ' + vin)
    return self
  }
//PUBLIC
  this.name = name;
  this.numWheels = numWheels;
  this.numPass = numPass;
  this.speed = speed;
  vin = createVin();
  VehicleConstructor.prototype.makeNoise = function(){
    console.log('buzz, buzz!');
    return self
  }
  VehicleConstructor.prototype.move = function(){
    updateDistanceTravelled(self);
    this.makeNoise();
    return self
  }
  VehicleConstructor.prototype.checkMiles = function(){
    display_distance_travelled();
    return self
  }
  // VehicleConstructor.prototype.setVin = function(self){
  //   createVin();
  //   return self;
  // }
  VehicleConstructor.prototype.getVin = function(self) {
    returnVin()
    return self;
  }
}

var schwinn=new VehicleConstructor('Bike',2,1,15);
schwinn.makeNoise=function(){console.log('ring, ring!')};
schwinn.move();
schwinn.checkMiles();
schwinn.getVin();
//console.log(schwinn)

var accord=new VehicleConstructor('Sedan',2,4,70);
accord.makeNoise=function(){console.log('honk, honk!')};
accord.move();
accord.checkMiles();
//console.log(accord)

var bus= new VehicleConstructor('Bus',8,14,40);
bus.makeNoise=function(){console.log('loud honk, honk!')};
bus.pickUp=function(new_pass){
  this.numPass+=new_pass;
  console.log('Passenger count: ' + this.numPass)
};
bus.pickUp(5);
bus.pickUp(1);
bus.move();
bus.checkMiles();
bus.move();
bus.checkMiles();
bus.getVin();

//console.log(bus);
