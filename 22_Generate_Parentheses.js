/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let result = [];
	function generate(leftCount, rightCount, partial) {
		if (leftCount > rightCount) return;
		if (!leftCount && !rightCount) result.push(partial);
		if (leftCount > 0) generate(leftCount - 1, rightCount, partial + "(");
		if (rightCount > 0) generate(leftCount, rightCount - 1, partial + ")");
	}

	generate(n, n, "");
	return result;
};
