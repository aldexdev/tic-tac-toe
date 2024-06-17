export const getBestMove = (board) => {
  // method to clone a board
  function cloneBoard(board) {
    return { ...board };
  }

  // method to chech if there is a winner
  function checkWinner(board) {
    const winCombs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Filas
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columnas
      [0, 4, 8],
      [2, 4, 6], // Diagonales
    ];
    for (let [a, b, c] of winCombs) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  // method to get the empty cells
  function getEmptyCells(board) {
    return Object.keys(board).filter((key) => board[key] === "");
  }

  // minmax algorithm
  function minimax(board, depth, isMaximizing) {
    const winner = checkWinner(board);
    if (winner === "X") return { score: -10 + depth };
    if (winner === "O") return { score: 10 - depth };
    if (getEmptyCells(board).length === 0) return { score: 0 };
    if (isMaximizing) {
      let bestScore = -Infinity;
      let bestMove = null;
      for (let cell of getEmptyCells(board)) {
        let newBoard = cloneBoard(board);
        newBoard[cell] = "O";
        let result = minimax(newBoard, depth + 1, false);
        if (result.score > bestScore) {
          bestScore = result.score;
          bestMove = cell;
        }
      }
      return { score: bestScore, move: bestMove };
    } else {
      let bestScore = Infinity;
      let bestMove = null;
      for (let cell of getEmptyCells(board)) {
        let newBoard = cloneBoard(board);
        newBoard[cell] = "X";
        let result = minimax(newBoard, depth + 1, true);
        if (result.score < bestScore) {
          bestScore = result.score;
          bestMove = cell;
        }
      }
      return { score: bestScore, move: bestMove };
    }
  }

  // get the best play based on minmax
  let bestMove = minimax(board, 0, true).move;

  // create a new board containing the play
  let newBoard = cloneBoard(board);
  if (bestMove !== null) {
    newBoard[bestMove] = "O";
  }

  return newBoard;
};
