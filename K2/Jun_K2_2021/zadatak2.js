$(document).ready(function () {
    let tableDimension = 3;
    let numOfClicks = new Array(tableDimension * tableDimension);
    fillArray(numOfClicks, 0);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function paintGreen(cell) {
        $(cell).css({
            "background-color": "lightgreen"
        });
    }

    function paintBlue(cell) {
        $(cell).css({
            "background-color": "blue"
        });
    }

    function paintWhite(cell) {
        $(cell).css({
            "background-color": "white"
        });
    }

    function paintRed(cell) {
        $(cell).css({
            "background-color": "red"
        });
    }

    function fillArray(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = num;
        }
        return arr;
    }

    function getCoordinates(cell) {
        for (let i = 0; i < tableDimension; i++) {
            for (let j = 0; j < tableDimension; j++) {
                if (cell.get(0) == getTableCell(i, j).get(0)) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    function getTableCell(x, y) {
        return $("#tabela tr:eq(" + x + ") td:eq(" + y + ")");
    }

    async function cellClicked(cell) {
        let x = getCoordinates(cell)[0];
        let y = getCoordinates(cell)[1];
        let index = x * tableDimension + y;

        numOfClicks[index]++;
        if (numOfClicks[index] == 1) {
            paintGreen(cell);
            await sleep(1000);
            if (numOfClicks[index] == 1) {
                paintWhite(cell);
                numOfClicks[index] = 0;
            }
        } else if (numOfClicks[index] == 2) {
            paintBlue(cell);
        } else {
            numOfClicks[index] = 0;
            paintWhite(cell);
        }
    }

    let lastCell = null;
    async function mark(weight) {
        for (let i = 0; i < weight; i++) {
            await sleep(1000);
            let x = Math.floor(Math.random() * tableDimension);
            let y = Math.floor(Math.random() * tableDimension);
            let randomCell = getTableCell(x, y);
            while (lastCell && randomCell.get(0) == lastCell.get(0)) {
                x = Math.floor(Math.random() * tableDimension);
                y = Math.floor(Math.random() * tableDimension);
                randomCell = getTableCell(x, y);
            }
            if (lastCell) {
                paintWhite(lastCell);
            }
            paintRed(randomCell);
            lastCell = randomCell;
        }
        await sleep(1000);
        paintWhite(lastCell);
        lastCell = null;
    }

    function validateTezina() {
        if (/^[1-9]$/.test($("#tezina").val())) {
            return true;
        } else {
            return false;
        }
    }

    $("td").on("click", async function () {
        cellClicked($(this));
    });

    $("#dugme").on("click", async function () {
        if (!validateTezina()) {
            alert("Unesite broj od 1 do 9 za tezinu.");
            return;
        }
        let weight = $("#tezina").val();
        mark(weight);
    });
});