describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

describe('factorial', function() {
  it("expect a factorial of 120 given 5", function() {
    expect(factorial(5)).to.equal(120);
  });

  it("expect a factorial of 1 given 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("expect invalid number to be returned for numbers less than 0", function() {
    expect(factorial(-1)).to.equal('invalid number');
  });
});
