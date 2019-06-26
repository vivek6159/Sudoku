//
// ─── ALL THE FUNCTIONALITY IS IN THIS FILE TO DEVELOPE  AND PLAY GAME ───────────
//

//
// ─── THIS FUNCTION TAKES AN ARRAY OF VALUES AS INPUT AND SELECT ONE OF THE ITEM FROM THE ARRAY RANDOMLY 
//
function generateRandomValue(possible = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    var index = Math.floor(Math.random() * (possible.length - 1));
    return possible[index];
}
//
// ─── SAMPLE OUTPUT : 6 ──────────────────────────────────────────────────────────
//


//
// ─── THIS FUNCTION WILL TAKE INDEX AS AN INPUT AND GIVE US THE COLUMN WHICH IT BELONGS IN THE 9X9 METRiCS
//
function getColumn(index) {
    if (index % 9 != 0) {
        return index % 9;
    } else {
        return 9;
    }
}
//
// ─── SAMPLE INPUT : 81   SAMPLE OUTPUT : 9 ──────────────────────────────────────
//


//
// ─── THIS FUNCTION WILL TAKE INDEX AS AN INPUT AND GIVE US THE ROW WHICH IT BELONGS IN THE 9X9 METRiCS
//
function getRow(index) {
    if (index % 9 == 0) {
        return Math.floor(index / 9);
    } else if (index != 81) {
        return Math.floor(index / 9) + 1;
    } else {
        return 9;
    }
}
//
// ─── SAMPLE INPUT : 9   SAMPLE OUTPUT : 1 ──────────────────────────────────────
//

//
// ─── THIS FUNCTION WILL GENERATE AN EMPTY ARRAY TO START ────────────────────────
//
function generateGame() {
    result = [];
    for (var i = 0; i <= 81; i++) {
        result[i] = 0;
    }
    return result;
}

//
// ─── THIS FUNCTION WILL TAKE INDEX AS AN INPUT AND RETURN ALL THE INDEXES OF THE ROW FOR THAT INDEX 
//
function getRowIndexes(index) {
    result = [];
    result[0] = 9 * (getRow(index) - 1) + 1;
    for (var i = 1; i <= 8; i++) {
        result[i] = result[i - 1] + 1;
    }
    return result;
}
//
// ─── SAMPLE INPUT : 1   SAMPLE OUTPUT : [1, 2, 3, 4, 5, 6, 7, 8, 9] ──────────────────────────────────────
//

//
// ─── THIS FUNCTION WILL TAKE INDEX AS AN INPUT AND RETURN ALL THE INDEXES OF THE COLUMN FOR THAT INDEX 
//
function getColIndexes(index) {
    result = [];
    result[0] = getColumn(index);
    for (var i = 1; i <= 8; i++) {
        result[i] = result[i - 1] + 9;
    }
    return result;
}
//
// ─── SAMPLE INPUT : 1   SAMPLE OUTPUT : [1, 10, 19, 28, 37, 46, 55, 64, 73] ──────────────────────────────────────
//



//
// ─── THIS FUNCTION WILL RETURN INDEXES OF THE CELLS WHICH ARE EMPTY IN THE GAME BOARD 
//
function getFreeBoardCells() {
    indexes = [];
    for (var i = 1; i <= window.data.currentGame.length; i++) {
        if (window.data.currentGame[i] == 0) {
            indexes.push(i);
        }
    }
    return indexes;
}

//
// ─── THIS FUNCTION WILL RETURN INDEXES OF THE CELLS WHICH ARE NOT EMPTY IN THE GAME BOARD 
//
function getTakenCells() {
    indexes = [];
    for (var i = 1; i <= 81; i++) {
        if (window.data.currentGame[i] != 0) {
            indexes.push(i);
        }
    }
    return indexes;
}

//
// ─── THIS FUNCTION WILL RETURN TOTAL REMAINING NUMBER OD CELLS ON THE GAME BOARD 
//
function getRemainingTotal() {
    data = window.data.currentGame;
    counter = 0;
    for (var i = 0; i <= data.length; i++) {
        if (data[i] == 0) {
            counter++;
        }
    }
    return counter;
}

//
// ─── THIS WILL TAKE INDEX AS AN INPUT AND RETURN BLOCK INDEXES FOR THAT PARTICULAR INDEXES 
//
function getBlockIndexes(index) {
    block1 = [1, 2, 3, 10, 11, 12, 19, 20, 21];
    block2 = [4, 5, 6, 13, 14, 15, 22, 23, 24];
    block3 = [7, 8, 9, 16, 17, 18, 25, 26, 27];
    block4 = [28, 29, 30, 37, 38, 39, 46, 47, 48];
    block5 = [31, 32, 33, 40, 41, 42, 49, 50, 51];
    block6 = [34, 35, 36, 43, 44, 45, 52, 53, 54];
    block7 = [55, 56, 57, 64, 65, 66, 73, 74, 75];
    block8 = [58, 59, 60, 67, 68, 69, 76, 77, 78];
    block9 = [61, 62, 63, 70, 71, 72, 79, 80, 81];
    if (getRow(index) <= 3 && getColumn(index) <= 3) {
        return block1;
    } else if (
        [4, 5, 6].includes(getColumn(index)) &&
        [1, 2, 3].includes(getRow(index))
    ) {
        return block2;
    } else if (
        [7, 8, 9].includes(getColumn(index)) &&
        [1, 2, 3].includes(getRow(index))
    ) {
        return block3;
    } else if (
        [1, 2, 3].includes(getColumn(index)) &&
        [4, 5, 6].includes(getRow(index))
    ) {
        return block4;
    } else if (
        [4, 5, 6].includes(getColumn(index)) &&
        [4, 5, 6].includes(getRow(index))
    ) {
        return block5;
    } else if (
        [7, 8, 9].includes(getColumn(index)) &&
        [4, 5, 6].includes(getRow(index))
    ) {
        return block6;
    } else if (
        [1, 2, 3].includes(getColumn(index)) &&
        [7, 8, 9].includes(getRow(index))
    ) {
        return block7;
    } else if (
        [4, 5, 6].includes(getColumn(index)) &&
        [7, 8, 9].includes(getRow(index))
    ) {
        return block8;
    } else if (
        [7, 8, 9].includes(getColumn(index)) &&
        [7, 8, 9].includes(getRow(index))
    ) {
        return block9;
    }
}
//
// ─── SAMPLE INPUT : 1   SAMPLE OUTPUT : [1, 2, 3, 10, 11, 12, 19, 20, 21] ──────────────────────────────────────
//


//
// ─── ACCORDING TO SUDOKU RULES THERE ARE TOTAL 21 INDEXES WHICH WE HAVE TO CHECK BEFORE ADDING NEW NUMBER THIS FUNCTION WILL GIVE US THAT INDEXES 
//
function getNotIncludeIndexes(index) {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index;
    };

    rowIndexes = getRowIndexes(index);
    colIndexes = getColIndexes(index);
    blockIndexes = getBlockIndexes(index);
    if (rowIndexes != undefined && colIndexes != undefined) {
        result = blockIndexes.concat(rowIndexes).concat(colIndexes);
    }
    result = result.filter(unique);
    return result;
}
//
// ─── SAMPLE INPUT : 1   SAMPLE OUTPUT : [1, 2, 3, 10, 11, 12, 19, 20, 21, 4, 5, 6, 7, 8, 9, 28, 37, 46, 55, 64, 73] ──────────────────────────────────────
//

//
// ─── THIS FUNCTION WILL TAKE INDEX AS AN INPUT AND RETURN POSSIBLE VALUES ON THAT INDEX AS AN OUTPUT 
//
function getPossibleValues(index) {
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    possible = [];
    values = getNotIncludeValues(index);
    for (var i = 1; i <= 9; i++) {
        if (!values.includes(i)) {
            possible.push(i);
        }
    }
    shuffle(possible);
    return possible;
}
//
// ─── SAMPLE INPUT : 1   SAMPLE OUTPUT : [6, 9] ──────────────────────────────────────
//

//
// ─── THIS FUNCTION WILL RETURN BLOCK VALUES FOR PROVIDED INDEX ──────────────────
//
function getBlockValues(index) {
    result = [];
    indexes = getBlockIndexes(index);
    for (var i = 0; i < indexes.length; i++) {
        if (!result.includes(window.data.currentGame[i])) {
            result.push(window.data.currentGame[i]);
        }
    }
    return result;
}

//
// ─── THIS FUNCTION WILL RETURN THE VALUES WHICH CAN NOT BE INCLUDED FOR PROVIDED INDEX 
//
function getNotIncludeValues(index) {
    indexes = getNotIncludeIndexes(index);
    values = [];
    for (index of indexes) {
        values.push(window.data.currentGame[index]);
    }
    return values;
}


//
// ─── THIS FUNCTION WILL GENERATE A RANDOM VALUES AND PUT IT INTO THE DATA USING OTHER FUNCTIONS 
//
function generateAndPutValue(index) {
    var possible = getPossibleValues(index);
    var value = generateRandomValue(possible);
    window.data.currentGame[index] = value;
    return value;
}

//
// ─── THIS FUNCTION WILL CREATE A WHOLE GAME DATA ─────────────────────────────────────
//
function endGame() {
    counter = 1;
    while (counter <= 81) {
        if (generateAndPutValue(counter) == undefined) {
            incounter = 0;
            while (window.data.currentGame[counter] == undefined) {
                fixTheIssue(counter);
                incounter++;
                if (incounter > 5000) {
                    break;
                }
            }
        }
        counter++;
        if (counter > 5000) {
            break;
        }
    }
}

//
// ─── THIS FUNCTION WILL FIND OTHER POSSIBLE VALUES FOR GIVEN INDEX ──────────────
//
function getOtherPossibleValues(index) {
    otherValues = getPossibleValues(index);
    otherValues = otherValues.splice(
        otherValues.indexOf(window.data.currentGame[index]),
        1
    );
    return otherValues;
}

//
// ─── THIS FUNCTION WILL TAKE VALUE AND INDEX AS INPUTS AND PUT IT INTO THE DATA ─
//
function putValue(index, value) {
    window.data.currentGame[index] = value;
}


//
// ─── THIS FUNCTION WILL BACK TRACE THE DATA AND FIX IT TO FULFILL THE RULES ──────
//
function fixTheIssue(index) {
    indexes = getNotIncludeIndexes(index);
    for (index of indexes) {
        othervalues = getOtherPossibleValues(index);
        possibleindexes = getTakenCells();
        if (otherValues.length > 0 && possibleindexes.includes(index)) {
            putValue(index, othervalues[0]);
        }
    }
}

//
// ─── AT THE BEGINNING OF THE GAME TO PROVIDE EMPTY CELLS THIS FUNCTION WILL REMOVE RANDOM VALUES FROM THE ARRAY 
//
function removeRandomCells(level = 30) {
    counter = 0;
    possible = [];
    for (var i = 1; i <= 81; i++) {
        possible.push(i);
    }
    while (counter <= level) {
        index = generateRandomValue(possible);
        window.data.currentGame[index] = 0;
        possible.pop(index - 1);
        counter++;
    }
}

//
// ─── WHEN PLAYER GIVE INPUTS THIS FUNCTION WILL CHECK IT AND CHANGE THE COLOR ACCORDING THE RIGHT AND WRONG INPUT 
//
function checkTheInput(index) {
    possible = getPossibleValues(index);
    var input = parseInt(
        document.getElementById(index).innerText
    );


    window.data.currentGame[index] = input;
    if (possible.includes(parseInt(document.getElementById(index).innerText))) {
        document.getElementById(index).style.backgroundColor = "green";
    } else if (document.getElementById(index).innerText == "") {
        document.getElementById(index).style.removeAttribute(backgroundColor);
    } else {
        document.getElementById(index).style.backgroundColor = "red";
    }
}

//
// ─── THIS FUNCTION WILL REMOVE AN ELEMENT USING ID FROM THE HTML ────────────────
//
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

//
// ─── THIS FUNCTION WILL ADD BACKGROUND SOUND TO THE GAME ────────────────────────
//
function addBackgroundSound() {
    var audio = document.createElement('audio');
    audio.setAttribute('autoplay', 'true');
    audio.setAttribute('loop', 'true');
    var source = document.createElement('source');
    source.setAttribute('src', 'sounds/background.mp3');
    source.setAttribute('type', 'audio/mpeg');
    audio.appendChild(source);
    document.body.appendChild(audio);
}