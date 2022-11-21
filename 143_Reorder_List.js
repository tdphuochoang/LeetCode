var reorderList = function (head) {
	let myArr = [];
	let node = head;
	while (node) {
		myArr.push(node);
		node = node.next;
	}
	for (let i = 0; i < myArr.length; i++) {
		let tail = myArr.length - i - 1;
		if (i >= tail) {
			myArr[i].next = null;
			return head;
		}
		myArr[i].next = myArr[tail];
		myArr[tail].next = myArr[i + 1];
	}
};
