
function DeckConstructor() {
//PRIVATE
  var self=this;

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
        }
      }
    }

  DeckConstructor.prototype.shuffle = function (){
      var m = this.deck.length, t, i;
  // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this.deck;
  };

  DeckConstructor.prototype.deal = function (){
    return this.deck.pop()
  }
}

function PlayerConstructor (name) {
  var self = this
  this.name = name;
  this.hand =[];
  this.take_card = function (deck) {
    var card=deck.deal()
    this.hand.push(card)

  }




}

deck1 = new DeckConstructor();
deck1.reset();
deck1.shuffle();
console.log(deck1.deal())
Bion= new PlayerConstructor('Bion');
Bion.take_card(deck1);
Bion.take_card(deck1);
Bion.take_card(deck1);
console.log(Bion.hand);
console.log(deck1.deck);
