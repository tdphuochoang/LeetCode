/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k = k % nums.length;
	let diff = nums.length - k;
	let arr2 = nums.slice(diff);
	let arr3 = nums.slice(0, diff);
	let final = [...arr2, ...arr3];
	for (let i = 0; i < nums.length; i++) {
		nums[i] = final[i];
	}
};
