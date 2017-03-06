// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
//

function runningLogger () {
  console.log('I am running!')
}
// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
//

function multiplyByTen (val) {
  return val * 10;
}
multiplyByTen(5)

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
//
function stringReturnOne () {
    return 'string two'
}

function stringReturnOne () {
    return 'string two'
}

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
//
function caller(func0){
  if (typeof func0 === 'function')
    func0();
  else {
    console.log(func0)
  }
}

caller(runningLogger);
caller(4)

// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
//

function myDoubleConsoleLog (func1, func2{
  if (typeof func1 === 'function' && func2 === 'function')
    console.log(func1());
    console.log(func2());
}

myDoubleConsoleLog(runningLogger, multiplyByTen(9))
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2 (func3) {
  console.log('starting');
  setTimeout(caller(func3),6000);
  console.log('ending')
  return 'interesting'


}
