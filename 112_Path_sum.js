var hasPathSum = function (root, targetSum) {
	if (!root || root === null) return false;
	let addUp = (root, sum, targetSum) => {
		if (root === null) return false;
		sum += root.val;
		if (root.left === null && root.right === null) {
			return targetSum === sum;
		}
		return (
			addUp(root.left, sum, targetSum) || addUp(root.right, sum, targetSum)
		);
	};

	return addUp(root, 0, targetSum);
};
