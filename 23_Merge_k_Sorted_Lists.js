/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	let myArr = [];
	//Push every value to myArr
	lists.forEach((list) => {
		while (list !== null) {
			myArr.push(list.val);
			list = list.next;
		}
	});
	//Sort myArr
	let sortedArr = myArr.sort((a, b) => a - b);
	//Convert myArr to linked list
	let head = sortedArr.reverse().reduce((acc, curr) => {
		if (acc == null) {
			acc = new ListNode(curr);
		} else {
			acc = new ListNode(curr, acc);
		}
		return acc;
	}, null);
	return head; //return the linked list
};
