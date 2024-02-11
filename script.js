var clear = document.querySelector("#b");
var cells = document.querySelectorAll("td");
var winner = document.querySelector("#gameover");
var turn = document.querySelector("#turn");
var clicks = 0;

clear.addEventListener("click", function() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  winner.textContent = "";
  clicks = 0;
  showTurn();
})

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (){
        if (this.textContent === "" && clicks % 2 === 0 && winner.textContent === "") {
          this.textContent = "X";
          clicks++;
        }
        else if (this.textContent !== "X" && this.textContent !== "O" && winner.textContent === "") {
          this.textContent = "O";
          clicks++;
        }
    });
}

function showWinner(text) {
  if (text === "X") {
    winner.textContent = "X Gon Give it To Ya!";
  }
  else {
    winner.textContent = "OOO Snap!";
  }
  turn.textContent = "";
}

function showTurn() {
  if (clicks % 2 == 0) {
    turn.textContent = "X";
  }
  else {
    turn.textContent = "O";
  }
}

function checkRow(table) {
  for (var i = 1; i < table.length; i+=3) {
    if (table[i].textContent !== "" && table[i].textContent === table[i-1].textContent && table[i].textContent === table[i+1].textContent) {
      showWinner(table[i].textContent);
      break;
    }
  }
}

function checkCol(table) {
  for (var i = 3; i < table.length; i++) {
    if (table[i].textContent !== "" && table[i].textContent === table[i-3].textContent && table[i].textContent === table[i+3].textContent) {
      showWinner(table[i].textContent);
      break;
    }
  }
}

function checkDia(table) {
  var base = 4;
  for (var i = 2; i < 5; i+=2) {
    if (table[base].textContent !== "" && table[base].textContent === table[base-i].textContent && table[base].textContent === table[base+i].textContent) {
      showWinner(table[base].textContent);
      break;
    }
  }
}

function checkWinner() {
  showTurn();
  checkRow(cells);
  checkCol(cells);
  checkDia(cells);
}
