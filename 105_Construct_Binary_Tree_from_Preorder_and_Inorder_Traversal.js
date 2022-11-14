var buildTree = function (preorder, inorder) {
	if (!preorder.length || !inorder.length) return null;
	let root = new TreeNode(preorder[0]);
	let idx = inorder.indexOf(root.val);
	root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
	root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1));
	return root;
};
