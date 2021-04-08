/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let st = String(n).split('');
  let str = '**';
  while (str.length > 1) {
    st = st.map((e) => +e);
    const result = st.reduce((sum, current) => sum + current, 0);
    st = String(result).split('');
    str = String(result);
  }
  return +str;
}

module.exports = getSumOfDigits;
