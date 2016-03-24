var expect = require('chai').expect;
var robotPaths = require('../prompts/robotPaths/solution').countPaths;
var robotPathsDynamic = require('../prompts/robotPaths/solution').countPathsDynamic;

var range = function (n, elm) {
  var out = [];
  for (var i = 0; i < n; i++) {
    if (Array.isArray(elm)) {
      out.push(elm.slice());
    } else {
      out.push(elm);
    }
  }
  return out;
};

var testMatrix = range(5, range(5, 0));

describe('robot paths', function (done) {
  it('should count paths', function (done) {
    expect(countPaths(testMatrix).to.equal(70);
  });
  xit('should count paths dynamically', function (done) {
    expect(countPathsDynamic(testMatrix).to.equal(70);
  });
});
