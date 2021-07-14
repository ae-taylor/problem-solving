"use strict";

/** Function takes in a string and returns
 * true if the string could be rearranged
 * into a palindrome - otherwise, returns false.
 */
function isPalindromeAnagram(str) {
  let chars = {};

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  let oddCount = 0;
  for (let key in chars) {
    if (chars[key] % 2 !== 0) {
      oddCount++
    }
  }
  console.log(chars)
  console.log(oddCount)
  if (oddCount > 1) return false;
  return true;
}

module.exports = { isPalindromeAnagram }