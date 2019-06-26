window.data = {
    currentGame: [],
    demoGame: [],
};


for (var i = 0; i <= 81; i++) {

    function generateRandomValue(possible = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        var index = Math.floor(Math.random() * (possible.length - 1));
        return possible[index];
    }

    window.data.demoGame.push(generateRandomValue());
}