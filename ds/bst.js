var Node = require('./bstNode');

var BST = function () {
  this.root = null;
  this.flattenedBST = {};
};

BST.prototype.insert = function (value, currentNode) {
  if (!this.root) {
    this.root = new Node(value);
    return;
  }

  currentNode = currentNode || this.root;

  if (value < currentNode.value) {
    if (!currentNode.left) {
      currentNode.left = new Node(value);
    } else {
      this.insert(value, currentNode.left);
    }
  } else if (value > currentNode.value) {
    if (!currentNode.right) {
      currentNode.right = new Node(value);
    } else {
      this.insert(value, currentNode.right);
    }
  } else {
    return;
  }

};

module.exports = BST;
