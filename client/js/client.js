$(document).ready(function () {
    var turnCount = 1;
    var boardState = [];
    $('.gameSquare').one('click', function (event) {
        if (turnCount % 2) {
            $(this).children().text('X').addClass("letterInput");
            turnCount++;
            winConditions();

        } else {
            $(this).children().text('O').addClass("letterInput");
            turnCount++;
            winConditions();
        }
    });

    var winConditions = function (boardState) {
        console.log("win conditions function run");
    }
});
