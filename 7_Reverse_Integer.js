/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  const my_arr = Math.abs(x).toString().split("");
  const reverse = my_arr.reverse().join("");
  console.log(reverse);
  const num = reverse;
  if (isNegative && num > Math.pow(2, 31)) {
    return 0;
  }
  if (!isNegative && num > Math.pow(2, 31) - 1) {
    return 0;
  }
  return isNegative ? -num : num;
};
