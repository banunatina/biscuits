var expect = require('chai').expect;
var infixCalc = require('../prompts/infixCalc/solution');
describe('infixCalc', function (done) {
  it('should calculate an infix string', function (done) {
    var infix = "1 + 2 * (20 / 5)";
    expect(infixCalc(infix)).to.equal(eval(infix));
  });
});
