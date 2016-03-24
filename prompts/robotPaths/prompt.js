/////////////////////////////////////////////////////////////
// Robot Paths
// ----------------------------------
// Given a matrix, you can move right, or down.
// how many paths will it take for a robot to go from
// the top left corner to the bottom right corner?
//
// EXTRA CREDIT:
// Solve this with dynamic programming
/////////////////////////////////////////////////////////////


exports.countPaths = function (matrix, row, col) {
  // TODO: Solve me
};


exports.countPathsDynamic = function (n, m) {
  // TODO: Solve me
};

/////////////////////////////////////////////////////////////
// HELPERS
/////////////////////////////////////////////////////////////

function makeMatrix (n, m) {
  return range(n, range(m, 0));
}

function range (n, elm) {
  var out = [];
  for (var i = 0; i < n; i++) {
    if (Array.isArray(elm)) {
      out.push(elm.slice());
    } else {
      out.push(elm);
    }
  }
  return out;
}

function pluck (arr, prop) {
  return arr.map(function (item) {
    return item[prop];
  });
}
