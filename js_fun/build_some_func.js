// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
//

function runningLogger () {
  console.log('I am running!')
}
// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
//

function multiplyByTen (val) {
  return console.log('multby10: ' + (val * 10));
}


// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
//
function stringReturnOne () {
    return 'string one'
}

function stringReturnTwo () {
    return 'string two'
}

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
//
function caller(func0){
  if (typeof func0 === 'function'){
    func0();
    return func0;
  }
  else {
    console.log(func0)
  }
}




// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
//

function myDoubleConsoleLog (func1, func2){
  if (typeof func1 === 'function' && typeof func2 === 'function'){
    console.log(func1());
    console.log(func2());
  }
}


// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2 (func3) {
  console.log('starting');
  setTimeout(caller(func3), 2000);
  console.log('ending')
  return 'interesting'
}
// function helper (caller(func3)){


// caller(runningLogger);
// // multiplyByTen(5);
// caller(stringReturnOne);
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

myDoubleConsoleLog(caller2(stringReturnOne), stringReturnTwo);
