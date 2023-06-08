/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	const signFunc = (x) => {
		if (x > 0) {
			return 1;
		} else if (x < 0) {
			return -1;
		} else {
			return 0;
		}
	};
	let product = nums.reduce((acc, curr) => acc * curr);
	return signFunc(product);
};
