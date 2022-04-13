/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let k = 0;
  let max = 0;
  for (i = 0; i < s.length; i++) {
    for (j = k; j < i; j++) {
      if (s[i] === s[j]) {
        console.log(s[i] + " " + i);
        console.log(s[j] + " " + j);
        k = j + 1;
        break;
      }
    }
    if (i - k + 1 > max) {
      console.log("i : " + i);
      console.log("k : " + k);
      console.log("Max : " + (i - k + 1));
      max = i - k + 1;
    }
  }
  return max;
};
