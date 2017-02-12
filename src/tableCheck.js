function isTableOk() {

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

    function isGridOk(grid, row, col, num) {

        function isBoxOk(grid, row, col, num) {

            const origRow = row;
            const origCol = col;

            row = Math.floor(row / 3) * 3;
            col = Math.floor(col / 3) * 3;

            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    if (row + r !== origRow || col + c !== origCol) {
                        if (grid[row + r][col + c] === num) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        function isRowOk(grid, row, col, num) {

            const origCol = col;
            for (let col = 0; col < 9; col++) {
                if (origCol !== col) {
                    if (grid[row][col] === num) {
                        return false;
                    }
                }
            }
            return true;
        }

        function isColOk(grid, row, col, num) {

            const origRow = row;

            for (let row = 0; row < 9; row++)
                if (origRow !== row) {
                    if (grid[row][col] === num) {
                        return false;
                    }
                }
            return true;
        }

        return (isColOk(grid, row, col, num) && isBoxOk(grid, row, col, num) && isRowOk(grid, row, col, num));
    }

    function loopCheck() {
        //LOOPING THROUGH GRID
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                if (grid[x][y] !== 0) {
                    if (!isGridOk(grid, x, y, grid[x][y])) {

                        return false;
                    }
                }
            }
        }
        return true;
    }

    return loopCheck();
}

export default isTableOk;