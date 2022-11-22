var sortList = function (head) {
	let arr = [];
	let node = head;
	while (node) {
		arr.push(node.val);
		node = node.next;
	}
	let sortArr = arr.sort((a, b) => a - b);
	let result = sortArr.reverse().reduce((acc, curr) => {
		if (acc == null) {
			acc = new ListNode(curr);
		} else {
			acc = new ListNode(curr, acc);
		}
		return acc;
	}, null);

	return result;
};
