$(document).ready(function () {
    let tableDimension = 4;
    let numberOfBombs = parseInt(prompt("Unesite broj bombi: "));
    let bombCells = [];
    initializeBombs();
    printTableConsole();

    function initializeBombs() {
        bombCells = [];
        for (let i = 0; i < numberOfBombs; i++) {
            let x = Math.floor(Math.random() * tableDimension);
            let y = Math.floor(Math.random() * tableDimension);
            let randomCell = getTableCell(x, y);
            if (!inBombArray(randomCell)) {
                bombCells.push(randomCell);
            } else {
                i--;
            }
        }
    }

    function inBombArray(cell) {
        for (let i = 0; i < bombCells.length; i++) {
            if (bombCells[i].get(0) == cell.get(0)) {
                return true;
            }
        }
        return false;
    }

    function printTableConsole() {
        for (let i = 0; i < tableDimension; i++) {
            for (let j = 0; j < tableDimension; j++) {
                if (inBombArray(getTableCell(i, j))) {
                    console.log("X");
                } else {
                    console.log("O");
                }
            }
            console.log("\n");
        }
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
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function nearbyBombs(cell) {
        let x = getCoordinates(cell)[0];
        let y = getCoordinates(cell)[1];
        let num = 0;
        for (let i = x - 1; i <= x + 1; i++) {
            if (i < 0 || i >= tableDimension) {
                continue;
            }
            for (let j = y - 1; j <= y + 1; j++) {
                if (j < 0 || j >= tableDimension) {
                    continue;
                }
                if (inBombArray(getTableCell(i, j))) {
                    num++;
                }
            }
        }
        return num;
    }

    function makeTableRed() {
        $("td").css({
            "background-color": "red"
        }).text("");
    }

    function makeTableWhite() {
        $("td").css({
            "background-color": "white"
        });
    }

    let cnt = 0;
    $("td").on("click", async function () {
        if (inBombArray($(this))) {
            makeTableRed();
            await sleep(1000);
            alert("Izgubili ste");
            makeTableWhite();
            cnt = 0;
        } else {
            $(this).css({
                "background-color": "lightgreen"
            });
            $(this).text(nearbyBombs($(this)));
            cnt++;
            if (cnt + numberOfBombs == tableDimension * tableDimension) {
                await sleep(1000);
                alert("Pobedili ste");
                cnt = 0;
            }
        }
    });
});