var expect = require('chai').expect;
var getMaxProfit = require('../prompts/getMaxProfit/solution.js');

describe('stockPrices', function() {

  it('should return the best profit that could have been made', function(done) {
    var stockPrices = [10, 7, 5, 8, 11, 9];
    expect(getMaxProfit(stockPrices)).to.equal(6);
  });

  it('should return 0 if no profit can be made', function(done) {
    var stockPrices = [9, 6, 3, 1];
    expect(getMaxProfit(stockPrices)).to.equal(0);
  });
});
