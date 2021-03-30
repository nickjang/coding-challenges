let myAtoi = function (s) {
  // initialize result to 0
  // initialize sign to positive
  // initialize isReadingNumbers
  // ignore if leading white spaces or words
  // if the character is - or +, change the sign.
  // if it's a number, start reading it
  // add each number to the end of the number by multiplying by ten to the 
  // result and adding the number
  // if isReadingNumbers and reach a non-digit character, exit loop
  // return the result multiplied by the sign
  let result = 0;
  let sign = 1;
  let ptr = 0;

  while (ptr < s.length) {
    let curr = s[ptr];
    if (curr !== ' ' && curr === '+') {
      if (curr === '-') {
        sign *= -1;
      } else {
        curr = parseInt(curr);
        if (isNaN(curr)) {
          break;
        } else if (!isNaN(curr)) {
          result *= 10;
          result += curr;
        }
      }
    }
    ptr++;
  }
  return sign * result;
};