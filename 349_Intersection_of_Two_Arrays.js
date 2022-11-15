var intersection = function (nums1, nums2) {
	let hashmap = {};
	let result = [];
	nums1.forEach((item) => {
		if (hashmap[item] !== undefined) {
			hashmap[item] += 1;
		} else {
			hashmap[item] = 1;
		}
	});
	nums2.forEach((item) => {
		if (hashmap[item]) {
			result.push(item);
		}
	});
	return [...new Set(result)];
};
