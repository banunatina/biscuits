var expect = require('chai').expect;
var findElement = require('../findInMatrix/solution.js');

describe('findInMatrix', function() {
  var matrix, matrix2;

  before(function() {
    matrix = [[2, 5, 20],
              [7, 9, 31],
              [12, 60, 71]
             ];

    matrix2 = [[1, 5, 6],
               [2, 4, 8],
               [10, 11, 13]
              ];
  });

  it('should return -1 if element is not found in matrix', function(done) {
    expect(findElement(matrix, 3)).to.equal(-1);
    expect(findElement(matrix2, -4)).to.equal(-1);
    done();
  });

  it('should return coordinates of element if found', function(done) {
    expect(findElement(matrix, 31)).to.eql([1, 2]);
    expect(findElement(matrix2, 4)).to.eql([1, 1]);
    done();
  });
});
