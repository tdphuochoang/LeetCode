var detectCycle = function (head) {
	let mySet = new Set();
	while (head) {
		if (mySet.has(head)) {
			return head;
		}
		mySet.add(head);
		head = head.next;
	}
	return null;
};
