/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const ind = [];
  const set = str.split('');
  for (let i = 0; i < set.length; i++) {
    const j = i + 1;
    let ingex = 1;
    while (set[i] === set[j]) {
      ingex++;
      set.splice(j, 1);
    }
    ind.push(ingex);
  }
  let result = '';
  for (let i = 0; i < set.length; i++) {
    if (ind[i] !== 1) {
      result += String(ind[i]);
    }
    result += set[i];
  }
  return result;
}

module.exports = encodeLine;
