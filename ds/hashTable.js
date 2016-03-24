/**
  *
  *
  *  ¯ _(ツ)_/¯ - Will Implement actual hashtable later.
  *
  *
  */
var HashTable = function () {
  this.storage = {};
};

HashTable.prototype.insert = function (key, value) {
  this.storage[key] = value;
  return;
};

HashTable.prototype.get = function (key) {
  return this.storage[key];
};

HashTable.prototype.remove = function (key) {
  var tmp = this.storage[key];
  delete this.storage[key];
  return tmp;
};
module.exports = HashTable;
