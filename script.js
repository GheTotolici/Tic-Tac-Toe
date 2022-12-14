let allButtons = document.querySelectorAll(".buttons");
let displayMsg = document.getElementById("message");
let winningMoves = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
let xTurn = true;
displayMsg.innerHTML = "Player 'X' has the first move";

function disableButtons() {
    allButtons.forEach((element) => (element.disabled = true));
}

function checkWinner() {
    for (let i of winningMoves) {
        let [element1, element2, element3] = [
            allButtons[i[0]].innerText,
            allButtons[i[1]].innerText,
            allButtons[i[2]].innerText,
        ];
        if (element1 != "" && element1 == element2 && element2 == element3) {
            winningGame(element1);
        }
    }
}

function winningGame(letter) {
    disableButtons();
    if (letter == "X") {
        displayMsg.innerHTML = "Player " + letter + " has won";
    } else {
        displayMsg.innerHTML = "Player " + letter + " has won";
    }
}

let count = 0;
allButtons.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            displayMsg.innerHTML = "It's Player O's turn";
        } else {
            xTurn = true;
            element.innerText = "O";
            displayMsg.innerHTML = "It's Player X's turn";
        }
        ++count;
        if (count == 9) {
            displayMsg.innerHTML = "We have a Draw";
        }
        element.disabled = true;
        checkWinner();
    });
});

function restart() {
    location.reload();
}
