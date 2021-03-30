/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let ptr1 = 0;
  let ptr2 = height.length - 1;
  let maxArea = 0;
  while (ptr1 < ptr2) {
    let area = (ptr2 - ptr1) * Math.min(height[ptr1], height[ptr2]);
    if (area > maxArea) maxArea = area;
    if (height[ptr2] < height[ptr1]) {
      ptr2--;
    } else if (height[ptr1] < height[ptr2]) {
      ptr1++;
    } else {
      ptr1++;
      ptr2--;
    }
  }

  return maxArea;
};