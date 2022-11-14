/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
  Solution 1:
  Time complexity: O(n^2)
  Space complexity: O(1)
*/

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
};

/*
  Solution 2: Using hashmap
  Time complexity: O(n)
  Space complexity: O(n)
*/

var twoSum = function (nums, target) {
	let hashmap = {};
	for (let i = 0; i < nums.length; i++) {
		let pair = target - nums[i];
		if (hashmap[pair] !== undefined) {
			return [hashmap[pair], i];
		} else {
			hashmap[nums[i]] = i;
		}
	}
};
