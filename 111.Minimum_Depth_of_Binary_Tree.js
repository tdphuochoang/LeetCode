var minDepth = function (root) {
	if (!root) return 0;
	if (!root.left) {
		return 1 + minDepth(root.right);
	} else if (!root.right) {
		return 1 + minDepth(root.left);
	} else {
		return 1 + Math.min(minDepth(root.left), minDepth(root.right));
	}
};
