/*Solution 1 */
var maxDepth = function (root) {
	let max = 0;

	const bfs = (node, level) => {
		if (node === null) return;
		if (level > max) max = level;
		bfs(node.left, level + 1);
		bfs(node.right, level + 1);
	};

	bfs(root, 1);
	return max;
};

/*Solution 2 */
var maxDepth = function (root) {
	if (!root) return 0;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
