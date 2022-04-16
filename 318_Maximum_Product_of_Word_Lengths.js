/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  function compare(x, y) {
    let j = 0;
    while (j < x.length) {
      if (y.includes(x[j]) == true) {
        return false;
      }
      j++;
    }

    return true;
  }
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (compare(words[i], words[j]) == true) {
        let total = words[i].length * words[j].length;
        if (total > max) {
          max = total;
        }
      }
    }
  }
  return max;
};
