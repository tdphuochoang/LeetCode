/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let obj = {};

	//Create an object of each item count
	for (let i = 0; i < nums.length; i++) {
		obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
	}

	//Find the element with max count
	let keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
	return keys[0];
};
