/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const st = String(n).split('');
  let max = 0;
  let s = st.slice(0);

  for (let i = 0; i < s.length; i++) {
    s.splice(s.indexOf(s[i]), 1);
    const sn = +(s.join(''));
    if (sn > max) max = sn;
    s = st.slice(0);
  }
  return max;
}

module.exports = deleteDigit;
