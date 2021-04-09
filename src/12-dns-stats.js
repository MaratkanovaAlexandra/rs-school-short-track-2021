/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = domains.map((e) => {
    const array = e.split('.');
    return array.reverse().join('.');
  });
  stats = stats.map((e) => {
    const res = [];
    const r = [];
    const n = e.split('.');
    for (let i = 0; i < n.length; i++) {
      res.push(`.${n[i]}`);
      r.push(res.join(''));
    }
    return r;
  });
  const result = {};
  stats.forEach((e) => e.forEach((i) => { result[i] = 0; }));
  stats.forEach((e) => e.forEach((i) => { result[i] += 1; }));
  return result;
}

module.exports = getDNSStats;
