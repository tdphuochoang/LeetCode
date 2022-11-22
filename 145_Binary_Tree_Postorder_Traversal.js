var postorderTraversal = function (root) {
	let arr = [];
	let dfs = (root) => {
		if (!root) return null;
		if (root.left) dfs(root.left);
		if (root.right) dfs(root.right);
		arr.push(root.val);
	};

	dfs(root);
	return arr;
};
