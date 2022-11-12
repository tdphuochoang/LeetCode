var longestPalindrome = function (s) {
	for (let m = s.length; m > 0; m--) {
		let i = 0,
			j = m;
		while (j <= s.length) {
			let substring = s.slice(i, j);
			if (isPalindrome(substring)) {
				return substring;
			} else {
				i++;
				j++;
			}
		}
	}

	return "";

	function isPalindrome(substr) {
		let i = 0,
			j = substr.length - 1;
		while (i < j) {
			if (substr[i] === substr[j]) {
				i++;
				j--;
			} else {
				return false;
			}
		}
		return true;
	}
};
