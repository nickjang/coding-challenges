let longestPalindrome = function (s) {
  // odd palindrome, start from each character and check letters to the left and right
  // even palidrome, start from between two chracters, and check to the left and right
  let longest = '';
  let ptr1 = 0;
  let length = s.length;

  while (ptr1 < length) {
    // check for odd palindromes
    let l = ptr1;
    let r = ptr1;
    while (l >= 0 && r < length) {
      if (s[l] === s[r]) {
        // check if the string is longest
        if (r - l + 1 > longest.length) {
          longest = s.substring(l, r + 1);
        }
        l--;
        r++;
      } else {
        break;
      }
    }

    //check for even palindromes
    l = ptr1;
    r = ptr1 + 1;
    while (l >= 0 && r < length) {
      if (r < length) {
        if (s[l] === s[r]) {
          // check if the string is longest
          if (r - l + 1 > longest.length) {
            longest = s.substring(l, r + 1);
          }
          l--;
          r++;
        } else {
          break;
        }
      }
    }
    ptr1++;
  }
  return longest;
};