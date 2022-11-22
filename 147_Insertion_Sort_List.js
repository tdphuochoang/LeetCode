/*Solution 1*/
var insertionSortList = function (head) {
	let arr = [];
	let node = head;
	while (node) {
		arr.push(node.val);
		node = node.next;
	}
	let insertionSort = (arr) => {
		for (let i = 1; i < arr.length; i++) {
			for (let j = i; j > 0; j--) {
				if (arr[j] < arr[j - 1]) {
					const temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				} else {
					break;
				}
			}
		}
		return arr;
	};

	let sortedArr = insertionSort(arr);
	let result = sortedArr.reverse().reduce((acc, curr) => {
		if (acc == null) {
			acc = new ListNode(curr);
		} else {
			acc = new ListNode(curr, acc);
		}
		return acc;
	}, null);

	return result;
};
