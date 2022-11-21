function printSpriralOrder(rowEnd, colEnd, arr) {
  let [rowStart, colStart] = [0, 0];
  let res = '';
  while (rowStart < rowEnd && colStart < colEnd) {
    for (let i = colStart; i < colEnd; ++i) {
      res += arr[rowStart][i] + ' ';
    }
    rowStart++;

    for (let i = rowStart; i < rowEnd; ++i) {
      res += arr[i][colEnd - 1] + ' ';
    }
    colEnd--;

    if (rowStart < rowEnd) {
      for (let i = colEnd - 1; i >= colStart; --i) {
        res += arr[rowEnd - 1][i] + ' ';
      }
      rowEnd--;
    }

    if (colStart < colEnd) {
      for (let i = rowEnd - 1; i >= rowStart; --i) {
        res += arr[i][colStart] + ' ';
      }
      colStart++;
    }
  }
  console.log(res);
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let rowCount = arr.length;
let colCount = arr[0].length;

printSpriralOrder(rowCount, colCount, arr);

// time complexity: O(rows * columns) | space complexity: O(1)
