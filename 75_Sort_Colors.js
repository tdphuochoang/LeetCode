/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zero = 0;
  let last = nums.length - 1;
  for (let i = 0; i <= last; i++) {
    if (nums[i] == 0) {
      [nums[i], nums[zero]] = [nums[zero], nums[i]];
      zero++;
    } else if (nums[i] == 2) {
      [nums[i], nums[last]] = [nums[last], nums[i]];
      last--;
      i--;
    }
  }
};
