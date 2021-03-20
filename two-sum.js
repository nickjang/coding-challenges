let twoSum = function (nums, target) {
  let frequency = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (frequency[target - num] != null) {
      return [i, frequency[target - num]];
    }
    frequency[num] = i;
  }
};