/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let min = 1000;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        const sum = [nums[i], nums[j], nums[k]].reduce((a, b) => a + b);
        const diff = Math.abs(target - sum);
        if (min > diff) {
          min = diff;
          result = sum;
        }
      }
    }
  }
  return result;
};
