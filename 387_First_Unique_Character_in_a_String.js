/* Solution 1 */
var firstUniqChar = function (s) {
	let idx = 0;

	while (idx < s.length) {
		let isUnique = true;
		for (let i = 0; i < s.length; i++) {
			if (idx !== i && s[idx] === s[i]) {
				isUnique = false;
				break;
			}
		}
		if (isUnique === true) {
			return idx;
		}
		idx++;
	}
	return -1;
};

/* Solution 2: Using hashmap */
var firstUniqChar = function (s) {
	let hashmap = {};
	for (let i = 0; i < s.length; i++) {
		if (hashmap[s[i]]) {
			hashmap[s[i]] += 1;
		} else {
			hashmap[s[i]] = 1;
		}
	}
	for (let j = 0; j < s.length; j++) {
		if (hashmap[s[j]] === 1) {
			return j;
		}
	}
	return -1;
};
