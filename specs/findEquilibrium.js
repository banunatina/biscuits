var findEquilibriumIndex = require('../prompts/findEquilibrium/prompt');
var expect = require('chai').expect;

describe('Find Equilibrium Index', function (done) {
  it('should find the thing', function (done) {
    var test1 = findEquilibriumIndex([1,2,3,6]);
    var test2 = findEquilibriumIndex([1,2,3,4,5,6,7,8,9,11]);
    expect(test1).to.equal(2);
    expect(test2).to.equal(6);
    done();
  });
});
