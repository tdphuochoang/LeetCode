/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let pair = s.substring(i, i + 2);
    console.log(pair);
    if (roman.hasOwnProperty(pair)) {
      result += roman[pair];
      i++;
    } else {
      result += roman[s[i]];
    }
  }
  return result;
};
