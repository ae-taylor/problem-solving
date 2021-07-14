"use strict";

/** Function takes in a string and outputs
 * a reversed version of the input string.
 */
function reverseString(str) {

  let charsReversed = []
  for (let i = str.length - 1; i >= 0; i--) {
    charsReversed.push(str[i]);
  }
  return charsReversed.join('');
}

module.exports = { reverseString };
