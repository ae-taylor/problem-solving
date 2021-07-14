const { isPalindromeAnagram } = require("./palindrome-anagram");

describe("palindrome-anagram", function () {

  it("returns a function", function() {
    expect(isPalindromeAnagram).toBeInstanceOf(Function);
  });
  
  it("returns true as expected", function() {
    expect(isPalindromeAnagram('nono')).toBe(true);
  });

  it("returns false as expected", function() {
    expect(isPalindromeAnagram('dork')).toBe(false);
  });

})