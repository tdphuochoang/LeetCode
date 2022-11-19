var longestCommonPrefix = function (strs) {
	if (strs.length == 0) {
		return "";
	}
	let commonPrefix = "";
	for (let i = 0; i < strs[0].length; i++) {
		for (j = 1; j < strs.length; j++) {
			if (strs[0][i] !== strs[j][i]) {
				return commonPrefix;
			}
		}
		commonPrefix += strs[0][i];
	}
	return commonPrefix;
};
