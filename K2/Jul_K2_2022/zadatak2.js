$(document).ready(function () {
    let tableDimension = 3;
    let turn = "X";

    function checkVertical(y, checking) {
        let cnt = 0;
        for (let i = 0; i < tableDimension; i++) {
            if (getTableCell(i, y).text() == checking) {
                cnt++;
            }
        }
        if (cnt == 3) {
            return true;
        } else {
            return false;
        }
    }

    function checkHorizontal(x, checking) {
        let cnt = 0;
        for (let j = 0; j < tableDimension; j++) {
            if (getTableCell(x, j).text() == checking) {
                cnt++;
            }
        }
        if (cnt == 3) {
            return true;
        } else {
            return false;
        }
    }

    function checkDiagonal(x, y, checking) {
        let cnt = 0;
        if (x == y) {
            for (let i = 0; i < tableDimension; i++) {
                if (getTableCell(i, i).text() == checking) {
                    cnt++;
                }
            }
        }
        if (cnt == 3) {
            return 1;
        }
        cnt = 0;
        if (x == y || Math.abs(x - y) == 2) {
            for (let i = tableDimension - 1, j = 0; i >= 0 && j < tableDimension; i--, j++) {
                if (getTableCell(i, j).text() == checking) {
                    cnt++;
                }
            }
        } else {
            return 0;
        }
        if (cnt == 3) {
            return 2;
        }
        return 0;

    }

    function paintVertical(y) {
        for (let i = 0; i < tableDimension; i++) {
            getTableCell(i, y).css({
                "background-color": "green"
            });
        }
    }

    function paintHorizontal(x) {
        for (let j = 0; j < tableDimension; j++) {
            getTableCell(x, j).css({
                "background-color": "green"
            });
        }
    }

    function paintLeftDiagonal() {
        for (let i = 0; i < tableDimension; i++) {
            getTableCell(i, i).css({
                "background-color": "green"
            });
        }
    }

    function paintRightDiagonal() {
        for (let i = tableDimension - 1, j = 0; i >= 0 && j < tableDimension; i--, j++) {
            getTableCell(i, j).css({
                "background-color": "green"
            });
        }
    }

    function checkWinner(cell) {
        let x = getCoordinates(cell)[0];
        let y = getCoordinates(cell)[1];
        let checking = turn == "X" ? "O" : "X";
        if (checkVertical(y, checking)) {
            paintVertical(y);
            return true;
        } else if (checkHorizontal(x, checking)) {
            paintHorizontal(x);
            return true;
        } else if (checkDiagonal(x, y, checking) == 1) {
            paintLeftDiagonal();
            return true;
        } else if (checkDiagonal(x, y, checking) == 2) {
            paintRightDiagonal();
            return true;
        }
        return false;
    }

    function getTableCell(x, y) {
        return $("#tabela tr:eq(" + x + ") td:eq(" + y + ")");
    }

    function getCoordinates(cell) {
        for (let i = 0; i < tableDimension; i++) {
            for (let j = 0; j < tableDimension; j++) {
                if (getTableCell(i, j).get(0) == cell.get(0)) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    function drawSymbol(cell) {
        if (cell.text() != "") {
            return false;
        }
        if (turn == "X") {
            cell.text("X");
            turn = "O";
        } else {
            cell.text("O");
            turn = "X";
        }
        return true;
    }

    function paintTableRed() {
        $("td").css({
            "background-color": "red"
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function resetTable() {
        $("td").css({
            "background-color": "white"
        }).text("");
    }

    let cnt = 0;
    let gameOver = false;
    $("td").on("click", async function () {
        if (gameOver || !drawSymbol($(this))) {
            return;
        }
        cnt++;
        if (checkWinner($(this)) || cnt == tableDimension * tableDimension) {
            gameOver = true;
            if (cnt == tableDimension * tableDimension) {
                paintTableRed();
            }
            cnt = 0;
            await sleep(2000);
            resetTable();
            gameOver = false;
        }
    });
});