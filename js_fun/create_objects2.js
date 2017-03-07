
function VehicleConstructor(name, numWheels, numPass,speed) {
//PRIVATE
  var self=this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += this.speed
  }
  var display_distance_travelled = function (){
    console.log('distance_travelled: ' + distance_travelled);
  }
//PUBLIC
  this.name = name;
  this.numWheels = numWheels;
  this.numPass = numPass;
  this.speed = speed;
  this.makeNoise = function(){
    console.log('buzz, buzz!');
  };
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  };
  this.checkMiles = function(){
    display_distance_travelled();
  };
}


schwinn=new VehicleConstructor('Bike',2,1,15);
schwinn.makeNoise=function(){console.log('ring, ring!')};
schwinn.move();
schwinn.checkMiles();
console.log(schwinn)

accord=new VehicleConstructor('Sedan',2,4,70);
accord.makeNoise=function(){console.log('honk, honk!')};
accord.move();
accord.checkMiles();
//console.log(accord)

bus= new VehicleConstructor('Bus',8,14,40);
bus.makeNoise=function(){console.log('loud honk, honk!')};
bus.pickUp=function(new_pass){
  this.numPass+=new_pass;
  console.log('Passenger count: ' + this.numPass)
};
bus.makeNoise();
bus.pickUp(5);
bus.pickUp(1);
bus.move();
bus.checkMiles();
//console.log(bus);
