var BST = require('../ds').BinaryTree;
var deleteNode = require('../prompts/deleteANodeBST');


describe('Delete a node', function (done) {
  var bst;
  beforeEach(function (done) {
    bst = [12,8,16,10,6,14,18,9].reduce(function (tree, value) {
      tree.insert(value);
      return tree;
    }, new BST());
    done();
  });

  it('should delete the root node', function (done) {
    deleteNode(bst.root);
    var expected = bst.root.value === 14 || bst.root.value === 10;
    expect(expected).to.equal(true);
    done();
  });
});
