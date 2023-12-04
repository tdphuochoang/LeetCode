/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let i = 0;
	while (i < nums.length) {
		nums[i] === nums[i + 2] ? nums.splice(i, 1) : i++;
	}
	return nums.length;
};
