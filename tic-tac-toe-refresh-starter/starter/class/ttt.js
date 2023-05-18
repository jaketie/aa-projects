const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("w", "go up", cursor.up());
    Screen.addCommand("s", "go down", cursor.down());
    Screen.addCommand("a", "go left", cursor.left());
    Screen.addCommand("d", "go right", cursor.right());


    Screen.render();
  }

  static checkWin(grid) {
    debugger;
    if (grid.every(row => row.every(el => el === ' ') === true)) return false;
    for (row in grid) {
      if (row.every(space => space === space) === true) return space;
      }
    }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}
grid = [['X','X','X'],
[' ',' ',' '],
[' ',' ',' ']]

TTT.checkWin(grid);

module.exports = TTT;
