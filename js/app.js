/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0, 1, 2], 
                       [0, 3, 6], 
                       [0, 4, 8], 
                       [3, 4, 5], 
                       [2, 4, 6], 
                       [2, 5, 8], 
                       [1, 4, 7], 
                       [6, 7, 8]];


/*---------------------------- Variables (state) ----------------------------*/

let turn, winner, board;


/*------------------------ Cached Element References ------------------------*/

const squareEls  = document.querySelectorAll(".board-square");
const messageEl  = document.querySelector("#message");
const gameBoard  = document.querySelector(".board");
const resetBtnEl = document.querySelector("#reset-button");


/*----------------------------- Event Listeners -----------------------------*/

gameBoard.addEventListener("click", handleClick);
resetBtnEl.addEventListener("click", init);


/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  board = [ null, null, null,
            null, null, null,
            null, null, null];
  turn = 1;
  winner = null;

  render();
}


function render() {
  board.forEach(renderSquare);
  if(winner === null) {
    messageEl.textContent = `${(turn === 1) ? "X" : "O"}'s turn`;
  }
  else if (winner === "T") {
    messageEl.textContent = "Tie Game"
  }
  else {
    messageEl.textContent = `Congratulations! ${(winner === 1) ? "X" : "O"} won!`
  }
}

// render()'s forEach callback function
function renderSquare(sqr, indx) {
  if (sqr === 1) {
    squareEls[indx].style.backgroundColor = "blue";
  }
  else if (sqr === -1) {
    squareEls[indx].style.backgroundColor = "red";
  }
  else {
    squareEls[indx].style.backgroundColor = "grey";
  }
}

function handleClick(evt) {
  let sqIndex = parseInt(evt.target.id.slice(-1));
  if (board[sqIndex] || winner !== null) {
    return;
  }
  board[sqIndex] = turn;
  turn *= -1;

  console.log(getWinner());
  winner = getWinner();

  render();
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let comboArr = winningCombos[i]
    if (Math.abs(board[comboArr[0]] + board[comboArr[1]] + board[comboArr[2]]) === 3) {
      return board[comboArr[0]];
    }
  }
  if(!board.includes(null)) {
    return "T";
  }
  return null;
}