var expect = require('chai').expect;
var knightMoves = require('../prompts/knightMoves/solution.js');
describe('knightMoves', function() {
  it('should return 0 for a boardsize of 0', function() {
    expect(knightMoves([0, 0], 0, 3)).to.equal(0); 
  });
  it('should return a correct answer', function() {
    expect(knightMoves([1,1], 4, 2)).to.equal(10);
  });
  it('should return 0 for no possible moves', function() {
    expect(knightMoves([0,0], 1, 3)).to.equal(0);
  });
});
