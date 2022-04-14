/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = nums.findIndex((n) => n == target);
  return result;
};
