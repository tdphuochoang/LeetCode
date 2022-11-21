var preorderTraversal = function (root) {
	let arr = [];
	let dfs = (root) => {
		if (!root) return null;
		arr.push(root.val);
		if (root.left) dfs(root.left);
		if (root.right) dfs(root.right);
	};
	dfs(root);
	return arr;
};
