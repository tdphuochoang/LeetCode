var isPalindrome = function (x) {
	let reverse_x = x.toString().split("").reverse().join("");
	return reverse_x === x.toString();
};
