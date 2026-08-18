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
  const players = [
    createPlayer("Player 1", "X"),
    createPlayer("Player 2", "O"),
  ];

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
  const getIsGameOver = () => isGameOver;

  const switchTurn = () => {
    activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
  };

  const playRound = (index) => {
    if (isGameOver) {
      return "Game is over! Restart to play again.";
    }

    const success = GameBoard.placeMark(index, getCurrentPlayer().mark);
    if (!success) {
      return "Slot already taken! Pick another one.";
    }

    const board = GameBoard.getBoard();

    const hasWon = winningCombinations.some((combo) =>
      combo.every((i) => board[i] === getCurrentPlayer().mark),
    );

    if (hasWon) {
      isGameOver = true;
      return `${getCurrentPlayer().name} Wins!`;
    }

    if (board.every((cell) => cell !== "")) {
      isGameOver = true;
      return "It's a tie!";
    }

    switchTurn();
    return `${getCurrentPlayer().name}'s turn (${getCurrentPlayer().mark})`;
  };

  const resetGame = () => {
    activePlayerIndex = 0;
    isGameOver = false;
    GameBoard.resetBoard();
  };

  return { playRound, getCurrentPlayer, getIsGameOver, resetGame };
})();

const DisplayController = (() => {
  const boardElement = document.getElementById("gameboard");
  const messageElement = document.getElementById("message");
  const restartBtn = document.getElementById("restart-btn");

  const setMessage = (msg) => {
    messageElement.textContent = msg;
  };

  const renderBoard = () => {
    boardElement.innerHTML = "";
    const board = GameBoard.getBoard();

    board.forEach((cellValue, index) => {
      const square = document.createElement("button");
      square.classList.add("square");
      square.textContent = cellValue;

      square.addEventListener("click", () => {
        // Send move to GameController and directly update UI message with returned string
        const resultMessage = GameController.playRound(index);
        setMessage(resultMessage);

        // Refresh grid display
        renderBoard();
      });

      boardElement.appendChild(square);
    });
  };

  restartBtn.addEventListener("click", () => {
    GameController.resetGame();
    renderBoard();
    setMessage(
      `${GameController.getCurrentPlayer().name}'s turn (${GameController.getCurrentPlayer().mark})`,
    );
  });

  const init = () => {
    renderBoard();
    setMessage(
      `${GameController.getCurrentPlayer().name}'s turn (${GameController.getCurrentPlayer().mark})`,
    );
  };

  return { init };
})();

DisplayController.init();
