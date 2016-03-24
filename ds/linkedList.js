var LinkedList =function() {
  this.head = null;
  this.tail = null;
};
var Node = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function() {
  var temp = this.head.next;
  var old = this.head;
  delete this.head;
  this.head = temp;

  return old.value;
};

LinkedList.prototype.contains = function(target, currentNode) {
  currentNode = currentNode || this.head;
  if(currentNode.value === target){
    return true;
  }
  if(currentNode === this.tail){
    return false;
  }
  return this.contains(target, currentNode.next);
};

LinkedList.prototype.traverse = function (cb, currentNode) {
  currentNode = currentNode === undefined ? this.head : currentNode;
  if (currentNode === null) {
    return;
  }
  cb(currentNode);
  this.traverse(cb, currentNode.next);
};

module.exports = LinkedList;
