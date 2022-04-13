/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;
  let my_arr = [...new Array(n)].map((_) => []);
  let val = 1;
  while (left <= right && top <= bottom) {
    //moving from left to right
    for (let i = left; i <= right; i++) {
      my_arr[top][i] = val;
      val++;
    }
    //moving down
    for (let i = top + 1; i <= bottom; i++) {
      my_arr[i][right] = val;
      val++;
    }
    //moving right to left
    //move up
    if (left < right && top < bottom) {
      //moving right to left
      for (let i = right - 1; i > left; i--) {
        my_arr[bottom][i] = val;
        val++;
      }

      //move up
      for (let i = bottom; i > top; i--) {
        my_arr[i][left] = val;
        val++;
      }
    }
    top++;
    left++;
    bottom--;
    right--;
  }
  return my_arr;
};
