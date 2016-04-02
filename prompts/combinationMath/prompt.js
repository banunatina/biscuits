Array.prototype.top = function () {
  return this[this.length - 1];
};

var operators = {
  '+': function (a, b) {return a+b;},
  '-': function (a, b) {return a-b;},
  '*': function (a, b) {return a*b;},
  '/': function (a, b) {return a/b;}
};

var orderOfOps = {
  ')': -1,
  '+': 0,
  '-': 0,
  '/': 1,
  '*': 1,
  '(': 2
};

var postFixCalc = function (tokens) {
  var stack = [];
  tokens.forEach(function (token) {
    if (!isNaN(token)) {
      stack.push(token);
    } else {
      var right = stack.pop();
      var left = stack.pop();
      stack.push(operators[token](left, right));
    }
  });
  return stack.pop();
};

var infixToPostFix = function (tokens) {
  var stack = [];
  var postFix = [];
  tokens.forEach(function (token) {
    if (!isNaN(token)) {
      postFix.push(token);
    } else {
      var top = stack.top();
      while (stack.length && stack.top() !== '(' && orderOfOps[token] < orderOfOps[top]) {
        postFix.push(stack.pop());
      }
      if (token !== ')') {
        stack.push(token);
      }
    }
  });
  while (stack.length) {
    var popped = stack.pop()
    if (popped !== '(') {
      postFix.push(popped);
    }
  }
  return postFix;
};

var tokenize = function (str) {
  var int = '';
  var tokens = [];
  for (var i in str) {
    if (!isNaN(str[i])) {
      int += str[i];
    } else {
      if (int !== '') {
        tokens.push(parseInt(int));
      }
      tokens.push(str[i]);
      int = '';
    }
  }
  tokens.push(parseInt(int));
  return tokens;
};


var evaluateInfix = function (string) {
  return postFixCalc(infixToPostFix(tokenize(str)));
};

function comboSum (str, target) {
  var operators = ['', '+', '-', '*', '/'];
  var results = [];
  var innerFn = function (remaining, built) {
    if (!remaining.length && evaluateInfix(built.join('')) === target) {
      results.push(built.join(''));
    } else if (!remaining.length) {
      return;
    } else {
      built.push(remaining[0]);
      for (var i = 0; i < operators.length; i++) {
        var tmp = built.slice();
        tmp.push(operators[i]);
        innerFn(remaining.slice(1), tmp);
      }
    }
  };
  innerFn(str.split(''), []);
  return results;
}
module.exports = comboSum;
