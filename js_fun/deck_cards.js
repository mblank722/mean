
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
    var cnt = 0;

    var suits = ['d', 'c', 'h', 's'];
    // while (!end_of_deck) {
      for (var i = 0; i < 4; i++) {
        for (var x = 1; x < 14; x++) {

          if (x < 11) {
            this.deck[cnt] = x + suits[i];
            }
          else if (x === 11) {
            this.deck[cnt] = 'j' + suits[i];
            }
          else if (x === 12) {
            this.deck[cnt] = 'q' + suits[i];
          }
          else {
            this.deck[cnt] = 'k' + suits[i];
          }
          console.log("cnt: " + cnt + " card: " + this.deck [cnt]);
          cnt++;
          // if (cnt > 25)  break;
        }

      }

  DeckConstructor.prototype.shuffle = function (deck){
    var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
  };
  DeckConstructor.prototype.deal = function (deck){};

  }
}
deck1 = new DeckConstructor();
deck1.reset();
