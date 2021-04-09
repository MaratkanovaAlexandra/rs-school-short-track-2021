/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i0 = 0;
  let il = array.length - 1;
  let index = -1;
  let found = false;
  while (!found && i0 <= il) {
    const i = Math.floor((i0 + il) / 2);
    if (array[i] === value) {
      found = true;
      index = i;
    } else if (array[i] > value) {
      il = i - 1;
    } else {
      i0 = i + 1;
    }
  }
  return index;
}

module.exports = findIndex;
