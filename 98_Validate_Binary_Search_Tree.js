var isValidBST = function (root) {
	if (!root) return false;
	let dfs = (root, min, max) => {
		if (!root) return true;
		let curr = root.val;
		if (root.val <= min || root.val >= max) return false;
		return dfs(root.left, min, curr) && dfs(root.right, curr, max);
	};
	return dfs(root, -Infinity, Infinity);
};
