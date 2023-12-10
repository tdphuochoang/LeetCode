/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let goal = nums.length - 1;
	for (let j = nums.length - 1; j > -1; j--) {
		if (j + nums[j] >= goal) {
			goal = j;
		}
	}

	return goal === 0 ? true : false;
};
