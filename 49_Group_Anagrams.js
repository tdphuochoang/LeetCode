var groupAnagrams = function (strs) {
  let obj = {};
  strs.forEach((item) => {
    let my_arr = item.split("");
    let sorted_str = my_arr.sort().join("");
    if (obj[sorted_str]) {
      obj[sorted_str].push(item);
    } else {
      obj[sorted_str] = [item];
    }
  });
  return Object.values(obj);
};
