var isValid = function (s) {
	if (!s.length || s.length % 2 !== 0) {
		return false;
	}
	const myObj = {
		"(": ")",
		"{": "}",
		"[": "]",
	};
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (myObj[s[i]]) {
			stack.push(s[i]);
		} else if (s[i] !== myObj[stack.pop()]) {
			return false;
		}
	}
	return stack.length === 0;
};
