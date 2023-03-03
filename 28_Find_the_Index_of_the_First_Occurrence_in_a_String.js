/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//Solution 1
var strStr = function (haystack, needle) {
	let nLen = needle.length;
	let i = 0;
	while (i < haystack.length - nLen + 1) {
		let temp = haystack.slice(i, i + nLen);
		if (temp === needle) {
			return i;
		}
		i++;
	}
	return -1;
};

//Solution 2
var strStr = function (haystack, needle) {
	let re = new RegExp(`${needle}`);
	let match = re.exec(haystack);
	if (!match) {
		return -1;
	}
	return match.index;
};
