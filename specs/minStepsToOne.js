var expect = require('chai').expect;
var minStepsToOne = require('../prompts/minStepsToOne/solution');

describe('minStepsToOne', function (done) {
  it('should count the min number of steps to 1', function (done) {
    expect(minStepsToOne(10)).to.equal(3);
    done();
  });
});
