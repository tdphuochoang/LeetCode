/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let my_arr = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      my_arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      my_arr.push("Fizz");
    } else if (i % 5 == 0) {
      my_arr.push("Buzz");
    } else {
      my_arr.push(i.toString());
    }
  }
  return my_arr;
};
