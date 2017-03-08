function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
// call the each function
each([1,2,3], function(num) { console.log(num + " I am from the callback!"); }) //so many alerts!

/*
each_.each(list, iteratee, [context]) Alias: forEach
Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.

_.each([1, 2, 3], alert);
=> alerts each number in turn...
_.each({one: 1, two: 2, three: 3}, alert);
=> alerts each number value in turn...
Note: Collection functions work on arrays, objects, and array-like objects such as arguments, NodeList and similar. But it works by duck-typing, so avoid passing objects with a numeric length property. It's also good to note that an each loop cannot be broken out of — to break, use _.find instead.
*/
