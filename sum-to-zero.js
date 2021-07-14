"use strict";

/** Function takes in an array of numbers and returns
 * true if any two numbers can sum to zero -
 * else, returns false.
 */
 function sumToZero(arr) {
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }

  return false;
}

module.exports = { sumToZero };