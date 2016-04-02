var expect = require('chai').expect;
var combinationMath = require('../prompts/combinationMath/solution');

describe('should find combinations that equal a target', function (done) {
  it('should find all of the combinations', function (done) {
    var result = combinationMath('123123', 0); // going to get length
    var expected = 63;
    expect(result.length).to.equal(expected);
    done();
  });
});
