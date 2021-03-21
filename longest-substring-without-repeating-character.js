let lengthOfLongestSubstring = function (s) {
  const indices = {};
  let longest = 0;
  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr2 < s.length) {
    const letter = s[ptr2];
    // eslint-disable-next-line eqeqeq
    if (indices[letter] != null) {
      if (ptr2 - ptr1 > longest) {
        longest = ptr2 - ptr1;
      }
      while (ptr1 < indices[letter]) {
        indices[s[ptr1]] = null;
        ptr1++;
      }
      ptr1++;
      indices[letter] = ptr2;

    } else {
      indices[letter] = ptr2;
      if (ptr2 - ptr1 + 1 > longest) {
        longest = ptr2 - ptr1 + 1;
      }
    }
    ptr2++;
  }
  return longest;
};