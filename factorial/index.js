/*

  QUESTION

  Have the function FirstFactorial(num) take the num parameter being passed
  and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
  For the test cases, the range will be between 1 and 18 and the input will
  always be an integer. 

  Use the Parameter Testing feature in the box below to test your
  code with different arguments.

*/

// First 

function FirstFactorial(num) {
 var total = num;
 var count = 1;
 
 for(count;count < num; count++ ) {
    total = count * total
 }
 
 return total;
}

// Refactor

const factorial = function(n) {
  return n <= 1 ? 1 : n * arguments.callee(n-1);
}


module.exports = factorial