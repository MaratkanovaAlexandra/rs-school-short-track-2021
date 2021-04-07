/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const y = [];
  arr.forEach((e) => {
    if (e === -1) {
      y.push(arr.indexOf(e));
      arr.splice(arr.indexOf(e), 1, '*');
    }
  });
  const arr1 = arr.filter((e) => e !== '*');
  arr1.sort((a, b) => a - b);
  y.forEach((e) => { arr1.splice(e, 0, -1); });
  return arr1;
}

module.exports = sortByHeight;
