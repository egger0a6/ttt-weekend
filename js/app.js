/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let turn, winner, board;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".board-square");
const messageEl = document.querySelector("#message");


/*----------------------------- Event Listeners -----------------------------*/



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
    messageEl.textContent = `Congratulations! ${(turn === 1) ? "X" : "O"} won!`
  }
}

// render() forEach callback function
function renderSquare(sqr, indx) {
  if (sqr === 1) {
    console.log(squareEls[indx]);
    squareEls[indx].style.backgroundColor = "blue";
  }
  else if (sqr === -1) {
    squareEls[indx].style.backgroundColor = "red";
  }
  else {
    // TODO style square based on null
  }
}