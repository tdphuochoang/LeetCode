var sortedListToBST = function (head) {
	let myArr = [];
	//Convert to array
	while (head) {
		myArr.push(head.val);
		head = head.next;
	}
	let convertFunc = (myArr) => {
		if (!myArr.length || myArr === null) {
			return null;
		}
		let mid = Math.floor(myArr.length / 2);
		let root = new TreeNode(myArr[mid]);
		root.left = convertFunc(myArr.slice(0, mid));
		root.right = convertFunc(myArr.slice(mid + 1));
		return root;
	};
	return convertFunc(myArr);
};
