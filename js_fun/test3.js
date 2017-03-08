var a = 2;
var b = function() { console.log("something"); };

function doSomething(x) {
  console.log(typeof(x));
}

doSomething(a);
doSomething(b);
