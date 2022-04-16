/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let my_arr = [nums1, nums2].flat().sort((a, b) => a - b);
  const len = my_arr.length;
  let median =
    len % 2 != 0
      ? my_arr[Math.floor(len / 2)]
      : (my_arr[len / 2] + my_arr[len / 2 - 1]) / 2;
  return median.toPrecision();
};
