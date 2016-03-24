var expect = require('chai').expect;
var snakeTraversal = require('../prompts/snakeTraversal/prompt');

describe('snakeTraversal', function (done) {

  it('should work on a 3x4', function (done) {
    var matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [10,11,12]];
    var res = [1, 4, 2, 3, 5, 7, 10, 8, 6, 9, 11, 12];
    expect(snakeTraversal(matrix)).to.deep.equal(res);
  });

  it('should work on 3x3', function (done) {
    var matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]];
    var res = [1, 4, 2, 3, 5, 7, 8, 6, 9];
    expect(snakeTraversal(matrix)).to.deep.equal(res);
  });

  it('should work on a 5x4', function (done) {
    var matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [17, 18, 19, 20]];
    var res = [1, 5, 2, 3, 6, 9, 13, 10, 7, 4, 8, 11, 14, 17, 18, 15, 12, 16, 19, 20];
    expect(snakeTraversal(matrix)).to.deep.equal(res);
  });
});
