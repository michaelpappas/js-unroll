const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works with array of just one array", function () {
    expect(unroll([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);
  });

  it("throws error if not an array", function () {
    expect(unroll({})).toEqual("not valid");
  });
});
