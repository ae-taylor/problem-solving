const { reverseString } = require("./reverse-string");

describe("reverse-string", function () {

  it("returns a function", function() {
    expect(reverseString).toBeInstanceOf(Function);
  });
  
  it("reverses string as expected", function() {
    expect(reverseString('hello')).toBe("olleh");
  });

  it("handles empty string", function() {
    expect(reverseString('')).toBe("");
  });

})