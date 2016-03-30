var expect = require('chai').expect;
var zombiePaths = require('../prompts/zombiePaths/solution');



describe('zombiePaths', function (done) {
  it('should find the shortest path from a to e', function (done) {
    var testCase = [
      [ 'a', 'b', 1686 ],
      [ 'b', 'c', 731 ],
      [ 'a', 'd', 305 ],
      [ 'd', 'c', 184 ],
      [ 'b', 'e', 844 ],
      [ 'd', 'e', 313 ] ];
    console.log('Test Case', testCase);
    var expected = {
      path: [ 'a', 'd', 'e' ],
      totalWeight: 305,
      usedBlaster: true };
    expect(zombiePaths(testCase, 'a', 'e')).to.deep.equal(expected);
    done();
  });

  it('should find the shortest path from a to e', function (done) {
    var testCase = [
      [ 'a', 'b', 280 ],
      [ 'b', 'c', 737 ],
      [ 'a', 'd', 318.5 ],
      [ 'd', 'c', 521 ],
      [ 'b', 'e', 539 ],
      [ 'd', 'e', 462 ] ];
    var expected = {
      path: [ 'a', 'b', 'e' ],
      totalWeight: 280,
      usedBlaster: true };
    expect(zombiePaths(testCase, 'a', 'e')).to.deep.equal(expected);
    done();
  });
});
