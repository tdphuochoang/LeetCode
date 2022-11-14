var groupAnagrams = function (strs) {
	if (strs.length === 1) return [strs];
	let hashmap = {};
	strs.forEach((item) => {
		let split_str = item.split("").sort().join("");
		if (hashmap[split_str]) {
			hashmap[split_str].push(item);
		} else {
			hashmap[split_str] = [item];
		}
	});
	return Object.values(hashmap);
};
