/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let day = "";
  let month = "";
  let year = "";
  const months = {
    Jan: 01,
    Feb: 02,
    Mar: 03,
    Apr: 04,
    May: 05,
    Jun: 06,
    Jul: 07,
    Aug: 08,
    Sep: 09,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  const words = date.split(" ");
  words.forEach((e) => {
    if (e > 1000) {
      year = e;
    } else if (months[e]) {
      month = months[e];
      if (month < 10) {
        month = "0" + String(month);
      }
    } else {
      day = e.substring(0, e.length - 2);
      if (day < 10) {
        day = String(day);
        day = "0" + day;
      }
    }
  });
  var myarr = [year, month, day].join("-");
  return myarr;
};
