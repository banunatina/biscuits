var Graph = function () {
  this.storage = {};
};

Graph.prototype.addNode = function (node) {
  this.storage[node] = {};
};

Graph.prototype.getNode = function (node) {
  return this.storage[node];
};

Graph.prototype.addEdge = function (startNode, endNode, weight) {
  if (!this.storage[startNode]) {
    this.addNode(startNode);
  } else if (!this.storage[endNode]) {
    this.addNode(endNode);
  }
  this.storage[startNode][endNode] = weight;
};

Graph.prototype.getEdgeWeight = function (startNode, endNode) {
  if (this.storage[startNode] && this.storage[endNode]) {
    return this.storage[startNode][endNode];
  } else {
    return null;
  }
};

Graph.prototype.removeEdge = function (startNode, endNode) {
  delete this.storage[startNode][endNode];
};

Graph.prototype.removeNode = function (node) {
  delete this.storage[node];
};

module.exports = Graph;
