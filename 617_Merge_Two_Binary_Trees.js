var mergeTrees = function (root1, root2) {
	if (!root1) return root2;
	if (!root2) return root1;
	let bfs = (root1, root2) => {
		if (root1 === null && root2 === null) return null;
		if (root1 === null) return root2;
		if (root2 === null) return root1;
		root1.val += root2.val;
		root1.left = bfs(root1.left, root2.left);
		root1.right = bfs(root1.right, root2.right);
		return root1;
	};
	return bfs(root1, root2);
};
