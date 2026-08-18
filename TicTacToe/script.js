const GameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const placeMark = (index, mark) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, placeMark, resetBoard };
})();

const createPlayer = (name, mark) => {
  return { name, mark };
};

const GameController = (() => {
  const players = [createPlayer("Player1", "X"), createPlayer("Player2", "O")];

  let activePlayerIndex = 0;
  let isGameOver = false;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getCurrentPlayer = () => players[activePlayerIndex];

  const switchTurn = () => {
    activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
  };

  const playRound = (index) => {
    if (isGameOver) {
      console.log("Game is over! Restart to play again.");
      return;
    }

    const success = GameBoard.placeMark(index, getCurrentPlayer().mark);
    if (!success) {
      console.log("Slot already taken! Pick another one.");
      return;
    }
    const board = GameBoard.getBoard();

    const hasWon = winningCombinations.some((combo) =>
      combo.every((i) => board[i] === getCurrentPlayer().mark),
    );

    if (hasWon) {
      isGameOver = true;
      console.log(`${getCurrentPlayer.name} Wins!`);
      return;
    }

    if (board.every((cell) => cell !== "")) {
      isGameOver = true;
      console.log("It's a tie");
      return;
    }

    switchTurn();
    console.log(`It's now ${getCurrentPlayer().name}'s turn.`);
  };
  return { playRound, getCurrentPlayer };
})();
