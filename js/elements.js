//
// ─── THIS FILE HAS ALL THE REQUIRED FUNCTION TO DISPLAY AND REMOVE DIFFERENT ELEMENTS FROM THE HTML PAGE 
//

//
// ─── DISPLAYPELEMENT FUNCTION WILL GENERATE A PARAGRAPH ELEMENT AND APPEND IT TO THE BODY 
//
function displayPElement(id = "p", text) {
  var p = document.createElement("P");
  if (typeof text !== "undefined") {
    var textNode = document.createTextNode(text);
    p.appendChild(textNode);
    p.id = id;
  }
  document.body.appendChild(p);
}

//
// ─── DISPLAYH1ELEMENT FUNCTION WILL GENERATE A HEADING ELEMENT AND APPEND IT TO THE BODY 
//
function displayH1Element(id = "h1", text) {
  var h1 = document.createElement("h1");
  if (typeof text !== "undefined") {
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    h1.id = id;
    h1.style.textAlign = "center";
    h1.style.border = '1px solid white';
    h1.style.borderRadius = '15px';
  }
  document.body.appendChild(h1);
}

//
// ─── DISPLAYSUDOKUBOARD WILL GENERATE A TABLE AND INSERT ALL THE DATA FOR THE SUDOKU BOARD FROM DATA 
//
function displaySudokuBoard() {
  if (document.getElementById('newGame')) {
    removeElement('newGame');
    removeElement('learnGame');
    endGame();
    removeRandomCells();
  }
  if (document.getElementById('nextButton')) {
    removeElement('nextButton');
    removeElement('learningP');
    removeElement('sudokuBoard');
  }
  result = window.data.currentGame;
  var counter = 1;
  var div = document.createElement('div');
  var table = document.createElement("table");
  table.id = "sudokuBoard";
  for (var i = 0; i <= 8; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j <= 8; j++) {
      var td = document.createElement("td");
      text = result[counter];
      if (typeof text !== "undefined") {
        var textNode = document.createTextNode(text);
        if (text != 0) {
          td.appendChild(textNode);
        }
        td.id = counter;
        td.style.height = "6vh";
        td.setAttribute("onfocusout", "checkTheInput(" + counter + ")");
        if (text == 0) {
          td.contentEditable = true;
        }
        td.setAttribute("class", "cell");
      }
      tr.appendChild(td);
      counter++;
    }
    table.appendChild(tr);
  }
  table.style.width = "100%";
  div.appendChild(table);
  div.id = 'gameBoard';
  div.setAttribute('style', 'max-width:800px; margin:0 auto;');
  document.body.appendChild(div);
  displayGameOptions();
}

//
// ─── DISPLAYSUDOKULEARNINGBOARD IS THE SAME AS DISPLAY SUDOKUBOARD BUT IT WILL DISPLAY USING DIFFERENT DATA 
// 
function displaySudokuLearningBoard() {
  window.learningPage = 1;
  removeElement('newGame');
  removeElement('learnGame');
  result = window.data.demoGame;
  var counter = 1;
  var div = document.createElement('div');
  var table = document.createElement("table");
  table.id = "sudokuBoard";
  for (var i = 0; i <= 8; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j <= 8; j++) {
      var td = document.createElement("td");
      text = result[counter];
      if (typeof text !== "undefined") {
        var textNode = document.createTextNode(text);
        if (text != 0) {
          td.appendChild(textNode);
        }
        td.id = counter;
        td.style.height = "6vh";
        td.setAttribute("onfocusout", "checkTheInput(" + counter + ")");
        if (text == 0) {
          td.contentEditable = true;
        }
        td.setAttribute("class", "cell");
      }
      tr.appendChild(td);
      counter++;
    }
    table.appendChild(tr);
  }
  table.style.width = "100%";
  div.appendChild(table);
  div.id = 'gameBoard';
  div.setAttribute('style', 'max-width:800px; margin:0 auto;');
  document.body.appendChild(div);
  displayLearningMessage();
}

//
// ─── FOR LEARNING THE GAME THE FUNCTION DISPLAYLEARNINGMESSAGE WILL DISPLAY NECESSARY INFORMATION TO THE PLAYER 
//
function displayLearningMessage() {
  if (document.getElementById('learningP')) {
    removeElement('learningP');
    removeElement('nextButton');
  }
  displayH1Element('nextButton', "NEXT");
  if (window.learningPage == 1) {
    displayH1Element('learningP', "There are total 81 Cells in Sudoku");

  } else if (window.learningPage == 2) {
    displayH1Element('learningP', "For all rows the number 1 to 9 should not repeat again.");
    for (var i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'yellow';
      document.getElementById(i.toString()).style.color = 'black';
    }
  }
  else if (window.learningPage == 3) {
    displayH1Element('learningP', "Same rule also apply to all the columns");
    var i = 1;
    while (i <= 81) {
      document.getElementById(i.toString()).style.backgroundColor = 'yellow';
      document.getElementById(i.toString()).style.color = 'black';
      i = i + 9;
    }
    for (var i = 2; i <= 9; i++) {
      document.getElementById(i.toString()).style.backgroundColor = 'black';
      document.getElementById(i.toString()).style.color = 'white';
    }
  } else if (window.learningPage == 4) {
    displayH1Element('learningP', "For all the child cubes of size 3x3 the digits 1 to 9 must not repeat.");
    document.getElementById('2').style.backgroundColor = 'yellow';
    document.getElementById('3').style.backgroundColor = 'yellow';
    document.getElementById('11').style.backgroundColor = 'yellow';
    document.getElementById('12').style.backgroundColor = 'yellow';
    document.getElementById('20').style.backgroundColor = 'yellow';
    document.getElementById('21').style.backgroundColor = 'yellow';
    document.getElementById('2').style.color = 'black';
    document.getElementById('3').style.color = 'black';
    document.getElementById('11').style.color = 'black';
    document.getElementById('12').style.color = 'black';
    document.getElementById('20').style.color = 'black';
    document.getElementById('21').style.color = 'black';
    var i = 28;
    while (i <= 81) {
      document.getElementById(i.toString()).style.backgroundColor = 'black';
      document.getElementById(i.toString()).style.color = 'white';
      i = i + 9;
    }
  }
  else if (window.learningPage == 5) {
    displayH1Element('learningP', "To win the game finish all the empty cells with the possible digit according to rules.");
    document.getElementById('1').style.color = 'white';
    document.getElementById('10').style.color = 'white';
    document.getElementById('19').style.color = 'white';
    document.getElementById('2').style.color = 'white';
    document.getElementById('3').style.color = 'white';
    document.getElementById('11').style.color = 'white';
    document.getElementById('12').style.color = 'white';
    document.getElementById('20').style.color = 'white';
    document.getElementById('21').style.color = 'white';
    document.getElementById('1').style.backgroundColor = 'black';
    document.getElementById('10').style.backgroundColor = 'black';
    document.getElementById('19').style.backgroundColor = 'black';
    document.getElementById('2').style.backgroundColor = 'black';
    document.getElementById('3').style.backgroundColor = 'black';
    document.getElementById('11').style.backgroundColor = 'black';
    document.getElementById('12').style.backgroundColor = 'black';
    document.getElementById('20').style.backgroundColor = 'black';
    document.getElementById('21').style.backgroundColor = 'black';
    var i = 28;
    while (i <= 81) {
      document.getElementById(i.toString()).style.backgroundColor = 'black';
      i = i + 9;
    }
  } else if (window.learningPage == 6) {
    displayH1Element('learningP', "If you put the wrong digit then it will show the red background, So you can change that value.");
    document.getElementById('5').style.backgroundColor = 'red';
    document.getElementById('5').innerHTML = 6;
  } else if (window.learningPage == 7) {
    displayH1Element('learningP', "If you put the right value or correct the wrong input to right then it will show the green background.");
    document.getElementById('5').style.backgroundColor = 'green';
    document.getElementById('5').innerHTML = 5;
  }
  else if (window.learningPage == 8) {
    displayH1Element('learningP', "Now you can start playing the Game.");
    document.getElementById('5').style.backgroundColor = 'black';
  }
  if (document.getElementById('nextButton')) {
    if (window.learningPage == 8) {
      document.getElementById('nextButton').setAttribute('onclick', ' displaySudokuBoard()');
    } else {
      document.getElementById('nextButton').setAttribute('onclick', ' nextPage()');
    }

  }
}

//
// ─── THIS FUNCTION WILL HANDLE THE PAGE CHANGE AND POPULATE THE PROPER ELEMENTS 
//
function nextPage() {
  window.learningPage++;
  console.log(window.learningPage);
  displayLearningMessage();
}

//
// ─── WHEN USER WILL START THE GAME THIS FUNCTION WILL DISPLAY AVAILABLE OPTIONS TO THE USER 
//
function displayGameOptions() {
  displayH1Element('goToMenu', 'MENU');
  document.getElementById('goToMenu').setAttribute('onclick', 'displayMenu()');
}

//
// ─── THIS FUNCTION WILL GENERATE THE MENU ───────────────────────────────────────
//
function displayMenu() {
  if (document.getElementById('sudokuBoard')) {
    removeElement('sudokuBoard');
    removeElement('goToMenu');
  }
  if (document.getElementById('menu')) {
    removeElement('nextButton ');
    removeElement('learningP');
  }
  displayH1Element('newGame', "NEW GAME");
  document.getElementById('newGame').style.marginTop = '40vh';
  displayH1Element('learnGame', "LEARN HOW TO PLAY THE GAME");
  document.getElementById('newGame').setAttribute('onclick', 'displaySudokuBoard()');
  document.getElementById('learnGame').setAttribute('onclick', 'displaySudokuLearningBoard()');
}