/* eslint-disable no-console */
function find_pivot(arr) {
  let lIdx = 0;
  let rIdx = arr.length - 1;
  let midIdx = Math.floor(arr.length / 2);
  while (midIdx <= rIdx) {
    const middle = arr[midIdx];
    if (middle > arr[rIdx]) {
      lIdx = midIdx;
      midIdx = Math.floor((lIdx + rIdx) / 2);
    } else {
      rIdx = midIdx;
      midIdx = Math.floor((lIdx + rIdx) / 2);
    }
    if (rIdx - lIdx <= 1) {
      return arr[rIdx] < arr[lIdx] ? rIdx : lIdx;
    }
  }
}

console.log('pivot: ', find_pivot([4, 5, 6, 7, 9, 10]));
console.log('pivot: ', find_pivot([7, 1, 2, 3, 4]));
console.log('pivot: ', find_pivot([]));
console.log('pivot: ', find_pivot([1]));
console.log('pivot: ', find_pivot([1, 2, 3, 4, 5]));
console.log('pivot: ', find_pivot([2, 3, 4, 1]));