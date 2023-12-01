var merge = function (nums1, m, nums2, n) {
	/*Solution 1:
    Using two pointers
    Time complexity: O(m+n)
    */

	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;

	while (j >= 0) {
		if (i >= 0 && nums1[i] > nums2[j]) {
			nums1[k--] = nums1[i--];
		} else {
			nums1[k--] = nums2[j--];
		}
	}

	/*Solution 2:
    Using STL
    Time complexity: O((m+n)log(m+n))
    */

	// let j = 0;
	// for(let i = n; i < nums1.length; i++){
	//     if(j < nums2.length){
	//         nums1[n] = nums2[j];
	//         j++
	//     }
	// }
	// nums1.sort((a,b) => a - b)
};
