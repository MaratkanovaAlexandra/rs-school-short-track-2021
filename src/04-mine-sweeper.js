/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((e) => e.map((i) => { if (i) return -1; return 0; }));
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] !== -1) {
        let u = 0;
        if ((i - 1 >= 0) && (result[i - 1][j] === -1)) u += 1;
        if ((i + 1 < result.length) && (result[i + 1][j] === -1)) u += 1;
        if ((j - 1 >= 0) && (result[i][j - 1] === -1)) u += 1;
        if ((j + 1 < result[i].length) && (result[i][j + 1] === -1)) u += 1;

        if ((i - 1 >= 0) && (j - 1 >= 0) && (result[i - 1][j - 1] === -1)) u += 1;
        if ((i - 1 >= 0) && (j + 1 < result[i].length) && (result[i - 1][j + 1] === -1)) u += 1;
        if ((i + 1 < result.length) && (j - 1 >= 0) && (result[i + 1][j - 1] === -1)) u += 1;
        if ((i + 1 < result.length) && (j + 1 < result[i].length)
        && (result[i + 1][j + 1] === -1)) u += 1;
        result[i][j] = u;
      }
    }
  }
  const res = result.map((e) => e.map((i) => { if (i === -1) return 1; return i; }));
  return res;
}

module.exports = minesweeper;
