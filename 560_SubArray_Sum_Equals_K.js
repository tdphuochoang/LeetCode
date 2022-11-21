/*Using hashmap: O(n)*/
var subarraySum = function (nums, k) {
	let count = 0;
	let total = 0;
	let hashmap = { 0: 1 };
	for (let num of nums) {
		total += num;
		let sum = total - k;
		if (hashmap[sum]) count += hashmap[sum];
		hashmap[total] ? hashmap[total]++ : (hashmap[total] = 1);
	}
	return count;
};
