import isTableOk from './tableCheck';
function solver() {

  if (isTableOk()) {
  } else {
    window.alert('Duplicates found. Correct your inputs and try again!');
    return;
  }

  let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      grid[x][y] = Number(document.getElementById("square" + x + y).value);
    }
  }

  function findUnassignedLocation(grid, row, col) {
    let done = false;
    let res = [-1, -1];

    while (!done) {
      if (row === 9) {
        done = true;
      }
      else {
        if (grid[row][col] === 0) {
          res[0] = row;
          res[1] = col;
          done = true;
        }
        else {
          if (col < 8) {
            col++;
          }
          else {
            row++;
            col = 0;
          }
        }
      }
    }
    return res;
  }

  function noConflicts(grid, row, col, num) {
    return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
  }

  function isBoxOk(grid, row, col, num) {

    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (grid[row + r][col + c] === num) {
          return false;
        }
      }
    }
    return true;
  }

  function isRowOk(grid, row, num) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === num) {
        return false;
      }
    }
    return true;
  }

  function isColOk(grid, col, num) {
    for (let row = 0; row < 9; row++)
      if (grid[row][col] === num) {
        return false;
      }
    return true;
  }

  function backtrack(grid, row, col) {
    let cell = findUnassignedLocation(grid, row, col);
    row = cell[0];
    col = cell[1];

    // base case: if no empty cell
    if (row === -1) {
      return true;
    }

    for (let num = 1; num <= 9; num++) {
      if (noConflicts(grid, row, col, num)) {
        grid[row][col] = num;

        if (backtrack(grid, row, col)) {
          return true;
        }

        // mark cell as empty (with 0)
        grid[row][col] = 0;
      }
    }
    // trigger backtracking
    return false;
  }

  function printGridHtml(grid) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        document.getElementById("square" + i + j).value = grid[i][j];
      }
    }
  }

  backtrack(grid, 0, 0);

  printGridHtml(grid);
}

export default solver;