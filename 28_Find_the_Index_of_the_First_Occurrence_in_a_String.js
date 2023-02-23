/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	let re = new RegExp(`${needle}`);
	let match = re.exec(haystack);
	if (!match) {
		return -1;
	}
	return match.index;
};
