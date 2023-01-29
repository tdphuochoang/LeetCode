/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	let myArr = [];
	//Convert linked list to arr
	while (head) {
		myArr.push(head.val);
		head = head.next;
	}
	let i = 0;
	let len = myArr.length;

	//If myArr.length is odd, temporarily remove the last item in the arr
	let last_item = len % 2 !== 0 ? myArr.pop() : null;
	while (i < myArr.length) {
		let temp = myArr[i];
		myArr[i] = myArr[i + 1];
		myArr[i + 1] = temp;
		i = i + 2;
	}

	//If myArr.length is odd, add the last item back to the arr
	len % 2 !== 0 && myArr.push(last_item);

	//Convert arr to linked list
	let mylist = myArr.reverse().reduce((acc, curr) => {
		if (acc == null) {
			acc = new ListNode(curr);
		} else {
			acc = new ListNode(curr, acc);
		}
		return acc;
	}, null);

	//Return the final linked list
	return mylist;
};
