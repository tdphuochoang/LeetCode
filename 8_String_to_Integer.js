/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let myRegex = /^[\s]*([-+]?\d+)/;
  let newStr = s.match(myRegex);
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(2, 31) * -1;
  let n = newStr ? Number(newStr[0]) : null;
  n = n < min ? min : n;
  n = n > max ? max : n;

  return n;
};
