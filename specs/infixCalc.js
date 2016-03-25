var expect = require('chai').expect;
var infixCalc = require('../prompts/infixCalc/solution');
describe('infixCalc', function (done) {
  it('should calculate an infix string', function (done) {
    var infixes = [
      "1 + 2 * (20 / 5)",
      "( ( 4 * 3 + 1 * 3 ) / 5 + 1 ) + 8",
      "1 + 3 + ( ( 4 / 2 ) * ( 8 * 4 ) )",
      "( 8 * 3 ) + 2",
      "1 + 2 * ( 20 / 5 )"
    ];
    var truth = infixes.every(function (infix) {
      return infixCalc(infix) === eval(infix);
    });
    expect(truth).to.equal(true);
  });
});
