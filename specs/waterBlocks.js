var expect = require('chai').expect;
var waterBlocks = require('../prompts/waterBlocks/solution');

describe('water blocks', function (done) {
  it('should count how many blocks of water you get', function (done) {
    expect(waterBlocks([1,5,2,3,5,6])).to.equal(5);
    done();
  });
});
