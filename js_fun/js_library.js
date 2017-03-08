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
      return self.new_arr
    },
    reduce: function(arr, callback) {
      var self=this;
      self.sum=0;
      for (var i = 0; i < arr.length; i++) {
        self.sum += callback(arr[i])
      }
      return self.sum
    },
    find: function() {
        // code here;
    },
    filter: function(arr,callback) {
      var self=this;
      self.new_arr = [];
      for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])){
          self.new_arr.push(arr[i]);
        }
      }
      return self.new_arr
        // code here;
    },
    reject: function(arr, callback) {
      var self=this;
      self.new_arr = [];
      for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i])){
          self.new_arr.push(arr[i]);
        }
      }
      return self.new_arr
    }
}

test=_.map([3,2,1], function (num){return  num*num;});
console.log(test);
test2=_.map([3,2,1], function (num){return  87;});
console.log(test2);
test3=_.reduce([3,2,1], function (num){return  num*num;});
console.log(test3);
test4=_.reduce([3,2,1], function (num){return  num;});
console.log(test4);
test=_.filter([10,9,8,7,6,5,4,3,2,1], function (num){return  num%2===0;});
console.log(test);
test2=_.filter([10,9,8,7,6,5,4,3,2,1], function (num){return  num%2===1;});
console.log(test2);
test3=_.reject([10,9,8,7,6,5,4,3,2,1], function (num){return  num%2===0;});
console.log(test3);
test4=_.reject([10,9,8,7,6,5,4,3,2,1], function (num){return  num%2===1;});
console.log(test4);
