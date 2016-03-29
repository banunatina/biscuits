/////////////////////////////////////////////////////////////
// Infix Calc
// -----------------------------------------------
// take a string and calcuate it without using eval
//
// ex:
// var infix = "1 + 2 * ( 20 / 5 )";
// infixCalc(infix) -> 9
// var infix = "1 + 2 - 3"
// infixCalc(infix) -> 0
// var infix = "1 + 3 + ( ( 4 / 2 ) * ( 8 * 4 ) )"
// infixCalc(infix) -> 68
// var infix = "( 8 * 3 ) + 2"
/////////////////////////////////////////////////////////////

Array.prototype.top = function () {
  return this[this.length - 1];
};

var calc = {
  '+' : function (a, b) {return a + b;},
  '-' : function (a, b) {return a - b;},
  '*' : function (a, b) {return a * b;},
  '/' : function (a, b) {return a / b;}
};

var tokenize = function (str) {
  return str.split(' ').map(function (token) {
    return isNaN(token) ? token : parseInt(token);
  });
};

var orderOfOps = function (top, token) {
  var ops = {
    ')': -1,
    '+': 0,
    '-': 0,
    '/': 1,
    '*': 1,
    '(': 2
  };
  return ops[top] > ops[token];
};



var infixToPostfix = function (tokens) {
  var stack = [];
  var res = [];
  tokens.forEach(function (token) {
    if (!isNaN(token)) {
      res.push(token);
    } else {
      var top = stack.top();
      while (stack.length && orderOfOps(top, token) && stack.top() !== '(') {
        res.push(stack.pop());
      }
      if (token !== ')') {
        stack.push(token);
      }
    }
  });
  while (stack.length) {
    var popped = stack.pop();
    if (popped !== '(') {
      res.push(popped);
    }
  }
  return res;
};

var postFixCalc = function (postFixExp) {
  var stack = [];
  postFixExp.forEach(function (token) {
    if (!isNaN(token)) {
      stack.push(token);
    } else {
      var right = stack.pop();
      var left = stack.pop();
      stack.push(calc[token](left, right));
    }
  });
  return stack.top();
};


var infixCalc = function (str) {
  return postFixCalc(infixToPostfix(tokenize(str)));
};

module.exports = infixCalc;
