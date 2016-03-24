/*
  Zombie Paths!!!
  You are given an array of arrays
  [
    ['a', 'b', 300],
    ['b', 'c', 12],
    ['a', 'd', 32],
    ['d', 'c', 30],
    ['b', 'e', 3000],
    ['d', 'e', 1000]
  ]

  Position[0] = a street corner
  Position[1] = a connecting street corner
  Position[2] = Number of zombies between street corners

  You have a zombie blaster, which you can only use once to BLAST away
  all of the zombies.

  Find the shortest path from point 'a' to 'e'

*/
var ds = require('../../ds');
var Graph = ds.Graph;

// HINT HINT....
var /* MYSTERY DS */ = ds./* MYSTERY DS */;

var zombiePaths = function (map, start, end) {
  // TODO: Implement
};








/////////////////////////////////////////////////////////////
// HELPERS
/////////////////////////////////////////////////////////////

var parseMap = function (map) {
  var graph = new Graph();
  map.forEach(function (testCase) {
    graph.addEdge(testCase[0], testCase[1], testCase[2]);
  });
  return graph;
};

var copy = function (extendingObj) {
  var copy = {};
  for (var key in extendingObj) {
    if (Array.isArray(extendingObj[key])) {
      copy[key] = extendingObj[key].slice();
    } else {
      copy[key] = extendingObj[key];
    }
  }
  return copy;
};

module.exports = zombiePaths;
