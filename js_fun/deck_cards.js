
function DeckConstructor(name, numWheels, numPass, speed) {
//PRIVATE
  var self=this;

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
  this.deck = [];

  DeckConstructor.prototype.reset = function (deck){
    var end_of_deck = false;
    var suits = ['d', 'c', 'h', 's']
    // while (!end_of_deck) {
    //   var cnt = 0
      for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 13, j++) {
          cnt++
          if (j < 11) {
            deck [cnt] = j + suits[i]
          } else if (j = 11) {
            deck [cnt] = 'j' + suits[i]
          } else if (j = 12) {
            deck [cnt] = 'q' + suits[i]
          } else {
            deck [cnt] = 'k' + suits[i]
          }

        }

      }

  DeckConstructor.prototype.shuffle = function (deck){};
  DeckConstructor.prototype.deal = function (deck){};

}
// var schwinn=new VehicleConstructor('Bike',2,1,15);
// schwinn.makeNoise=function(){console.log('ring, ring!')};
// schwinn.move();
// schwinn.checkMiles();
// schwinn.getVin();
// //console.log(schwinn)
//
// var accord=new VehicleConstructor('Sedan',2,4,70);
// accord.makeNoise=function(){console.log('honk, honk!')};
// accord.move();
// accord.checkMiles();
// //console.log(accord)
//
// var bus= new VehicleConstructor('Bus',8,14,40);
// bus.makeNoise=function(){console.log('loud honk, honk!')};
// bus.pickUp=function(new_pass){
//   this.numPass+=new_pass;
//   console.log('Passenger count: ' + this.numPass)
// };
// bus.pickUp(5);
// bus.pickUp(1);
// bus.move();
// bus.checkMiles();
// bus.move();
// bus.checkMiles();
// bus.getVin();
//
// //console.log(bus);
