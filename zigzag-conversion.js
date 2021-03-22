let convert = function (s, numRows) {
  // create a 2D array, with numRows rows
  // go through the string and keep track of row
  // add it the 2D array in the appropriate row
  let result = '';
  let rows = [];
  let ptr = 0;
  let row = 0;
  let isIncreasing = true;

  // initialize 2D array
  for (let i = 0; i < numRows; i++)
    rows.push([]);

  // put characters into rows
  while (ptr < s.length) {
    rows[row].push(s[ptr]);
    if (numRows > 1) {
      if (isIncreasing) {
        if (row === numRows - 1) {
          row--;
          isIncreasing = false;
        } else {
          row++;
        }
      } else {
        if (row === 0) {
          row++;
          isIncreasing = true;
        } else {
          row--;
        }
      }
    }
    ptr++;
  }

  // create string from rows
  result = rows.map(row => row.join(''));
  result = result.join('');
  return result;
};