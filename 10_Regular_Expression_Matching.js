/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let my_regex = new RegExp(p);
  return s.match(my_regex) ? s === s.match(my_regex)[0] : false;
};
