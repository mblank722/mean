/*function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}*/
//===========================
var _ = {
    map: function(arr, callback) {
      var self=this;
      self.new_arr = [];
      for (var i = 0; i < arr.length; i++) {
        self.new_arr[i] = callback(arr[i])
      }
      return this
    },
    reduce: function(arr, callback) {
      var self=this;
      self.sum;
      for (var i = 0; i < arr.length; i++) {
        self.sum += callback(self.sum)
      }
      return this
    },
    find: function() {
        // code here;
    },
    filter: function() {
        // code here;
    },
    reject: function() {
        // code here;
    }
}

test=_.map([3,2,1], function (num){return  num*num;});
console.log(test);
test2=_.map([3,2,1], function (num){return  87;});
console.log(test2);
test=_.reduce([3,2,1], function (num){return  num*num;});
console.log(test);
test2=_.reduce([3,2,1], function (num){return  87;});
console.log(test2);
