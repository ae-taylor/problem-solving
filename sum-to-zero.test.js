const { sumToZero } = require("./sum-to-zero");

describe("sumToZero", function () {

  it("returns a function", function() {
    expect(sumToZero).toBeInstanceOf(Function);
  });
  
  it("outputs true correctly", function() {
    expect(sumToZero([-3, 0, 2, 5, 3])).toBe(true);
  });

  it("outputs false correctly", function() {
    expect(sumToZero([-2, 9, 8])).toBe(false);
  });

  it("outputs false for empty list", function() {
    expect(sumToZero([])).toBe(false);
  });
})