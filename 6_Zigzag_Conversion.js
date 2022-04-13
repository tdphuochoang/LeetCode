/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let y = 0;
  let isZigging = true;
  const rows = [...new Array(numRows)].map((_) => []);
  if (numRows == 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    rows[y].push(char);
    if (y == numRows - 1) isZigging = false;
    if (y == 0) isZigging = true;
    y = isZigging ? y + 1 : y - 1;
  }
  const result = rows.flat().join("");
  return result;
};
