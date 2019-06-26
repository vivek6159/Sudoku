//
// ─── AT THE TIME OF PAGE LOAD THIS FUNCTION WILL BE CALLED AND SET THE GAME TO START BY THE PLAYER 
//

window.onload = loadTheGame;

//
// ─── THIS FUNCTION WILL USE THE FUNCTION OF FUNCTION.JS FILE AND LOAD THE GAME ───
//
function loadTheGame() {
  endGame();
  removeRandomCells();
  displayMenu();
  addBackgroundSound();
}