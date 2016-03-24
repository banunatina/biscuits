var expect = require('chai').expect;
var houseRobbers = require('../prompts/houseRobbers/prompt');

describe('house Robbers', function (done) {
  it('should find the max amount of profit', function (done) {
    var testCase = [123, 12345, 1, 2, 543, 41];
    expect(houseRobbers(testCase)).to.equal(12888);
  });
});
