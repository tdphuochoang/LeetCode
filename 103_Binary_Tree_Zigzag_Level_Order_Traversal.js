var zigzagLevelOrder = function (root) {
	if (!root) return [];
	let queue = [root];
	let result = [];
	let i = 0;
	while (queue.length) {
		let len = queue.length;
		let temp = queue.map((node) => node.val);
		i % 2 === 0 ? result.push(temp) : result.push(temp.reverse());
		i++;
		while (len--) {
			let node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return result;
};
