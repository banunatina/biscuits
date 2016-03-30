var expect = require('chai').expect;
var largestContiguousSum = require('../prompts/largestContiguousSum/solution.js');
var array = [10,22,3,4,-5,23,-100,5];

describe('largestContiguousSum', function (done) {
  it('should find the largest contiguous sum', function (done) {
    expect(largestContiguousSum(array)).to.equal(57);
    done();
  });
});
