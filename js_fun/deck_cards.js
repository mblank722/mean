
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
    var suits = ['d', 'c', 'h', 's'];
    // while (!end_of_deck) {
     var cnt = 0
      for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 13; j++) {
          cnt++
          if (j < 11) {
            this.deck [cnt] = j + suits[i]
          } else if (j = 11) {
            this.deck [cnt] = 'j' + suits[i]
          } else if (j = 12) {
            this.deck [cnt] = 'q' + suits[i]
          } else {
            this.deck [cnt] = 'k' + suits[i]
          }
          console.log("cnt: " + cnt + " card: " + this.deck [cnt])
        }

      }

  DeckConstructor.prototype.shuffle = function (deck){};
  DeckConstructor.prototype.deal = function (deck){};

  }
}
deck1 = new DeckConstructor();
deck1.reset();
