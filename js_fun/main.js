var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];


for (var i=0; i < x.length; i++){
  console.log(x[i]);
}

x.push(100);

for (var i=0; i < x.length; i++){
  console.log(x[i]);
}

// x = x + ["hello", "world", "JavaScript is Fun"];
//
// for (var i=0; i < x.length; i++){
//   console.log(x[i]);
// }

y=[1, 5, 90, 25, -3, 0];

var min = 0;
for (var i=0; i < y.length ; i++) {
  if (y[i] < min)
    {

      min = y[i];
      // console.log('i: ', i);
      // console.log('min: ', min);
      // console.log('y[i]: ', y[i]);
    }
  }
console.log(min);

y=[1, 5, 90, 25, -3, 0];

var sum = 0;
for (var i=0; i < y.length ; i++) {
    sum += y[i];
      // console.log('i: ', i);
      // console.log('min: ', min);
      // console.log('y[i]: ', y[i]);
  }
var avg = sum/y.length
console.log(avg);
