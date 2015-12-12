/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, rooks, newBoard) {
  var newBoard = newBoard || new Board({n:n});
  var solution; //fixme
  var rooksPlayed = rooks || 0;
  
  if (rooksPlayed === n) {
    solution = newBoard.rows();
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
  }
  
  var col;
  
  for (col = 0; col < n; col++) {
    //Place rook on the square.
    newBoard.togglePiece(rooksPlayed, col);
    if (newBoard.hasAnyRooksConflicts()) {
      //Remove rook from square.
      newBoard.togglePiece(rooksPlayed, col);
    } else {
      return findNRooksSolution(n, rooksPlayed + 1, newBoard);
      //Remove rook from square.
      // newBoard.togglePiece(rooksPlayed, col);
    }
  }
  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var firstSolution;
  var searchBoard = function(n,queens,newBoard){
    
    var newBoard = newBoard || new Board({n:n});
  
    var solution;
  
    var queensPlayed = queens || 0;
    
    if (queensPlayed === n) {
      firstSolution = newBoard.rows();
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    } 
    
    var col;
    for (col = 0; col < n; col++) {
      //Place queen on the square.
      newBoard.togglePiece(queensPlayed, col);
  
      if ( !newBoard.hasAnyQueensConflicts() ) {
        searchBoard(n, queensPlayed + 1, newBoard);
      }
        newBoard.togglePiece(queensPlayed, col);
    }
  };
  searchBoard(n);
  return firstSolution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
