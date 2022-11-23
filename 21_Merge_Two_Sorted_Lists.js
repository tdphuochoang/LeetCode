var mergeTwoLists = function (list1, list2) {
	let myList = new ListNode();
	let head = myList;

	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			myList.next = new ListNode(list1.val);
			list1 = list1.next;
		} else {
			myList.next = new ListNode(list2.val);
			list2 = list2.next;
		}
		myList = myList.next;
	}

	if (list1 !== null) {
		myList.next = list1;
	} else {
		myList.next = list2;
	}

	return head.next;
};
