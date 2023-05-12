$(document).ready(function () {
    let tableDimension = 3;
    let generatedCells = [];
    let numOfCells;
    initializeRange();
    paintTableWhite();

    function initializeRange() {
        localStorage.setItem("numOfCells", 5);
    }

    $("#numOfCells").on("change", function () {
        localStorage.setItem("numOfCells", $("#numOfCells").val());
    });

    function paintTableWhite() {
        for (let i = 0; i < tableDimension; i++) {
            for (let j = 0; j < tableDimension; j++) {
                getTableCell(i, j).css({
                    "background-color": "white"
                });
            }
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getTableCell(x, y) {
        return $("#gameTable tr:eq(" + x + ") td:eq(" + y + ")");
    }

    function inArray(cell) {
        for (let i = 0; i < generatedCells.length; i++) {
            if (cell.get(0) == generatedCells[i].get(0)) {
                return true;
            }
        }
        return false;
    }

    function newDifferentCell() {
        let x = Math.floor(Math.random() * tableDimension);
        let y = Math.floor(Math.random() * tableDimension);
        let newCell = getTableCell(x, y);
        while (inArray(newCell)) {
            x = Math.floor(Math.random() * tableDimension);
            y = Math.floor(Math.random() * tableDimension);
            newCell = getTableCell(x, y);
        }
        return newCell;
    }

    let clickAllowed = false;
    async function startMemoryGame() {
        generatedCells = [];
        clickAllowed = false;
        for (let i = 0; i < numOfCells; i++) {
            await sleep(1000);
            if (generatedCells.length > 0) {
                paintTableWhite();
            }
            let randomTableCell = newDifferentCell();
            randomTableCell.css({
                "background-color": "blue"
            });
            generatedCells.push(randomTableCell);
        }
        await sleep(1000);
        paintTableWhite();
        clickAllowed = true;
    }

    $("#dugme").click(async function () {
        numOfCells = parseInt(localStorage.getItem("numOfCells"));
        startMemoryGame();
    });

    let currInd = 0;
    $("td").click(async function () {
        if (!clickAllowed) return;
        if ($(this).get(0) == generatedCells[currInd].get(0)) {
            $(this).css({
                "background-color": "lightgreen"
            });
            currInd++;
            await sleep(500);
            if (currInd == generatedCells.length) {
                alert("Bravo!");
                currInd = 0;
                paintTableWhite();
            }
        } else {
            $("td").css({
                "background-color": "red"
            });
            await sleep(1000);
            paintTableWhite();
            currInd = 0;
        }
    });
});