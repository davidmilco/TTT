$(document).ready(function () {
    var turnCount = 0;
    var boardState = [['empty', 'empty', 'empty'], ['empty', 'empty', 'empty'], ['empty', 'empty', 'empty']];
    $('.gameSquare').one('click', function (event) {
        turnCount++;
        if (turnCount % 2) {
            $(this).children().text('X').addClass("letterInput").addClass('x');
            updateBoard();
            winConditions(boardState);
            
        } else {
            $(this).children().text('O').addClass("letterInput").addClass('o');
            updateBoard();
            winConditions(boardState);
        }
    });

    var winConditions = function (boardState) {
        console.log("win conditions function run");
        console.log('Board State going in:', boardState);
        $.ajax({
            url: '/api/winConditions',
            type: 'POST',
            data: JSON.stringify(boardState),
            contentType: 'application/json',
            success: function (data) {
                console.log('success with return data of:', data);
            },
            error: function (data) {
                console.log('error with return data of:', data);
            }
        });
    }

    var updateBoard = function () {
        boardState[0][0] = $('.zeroZero').children().html();
        boardState[0][1] = $('.zeroOne').children().html();
        boardState[0][2] = $('.zeroTwo').children().html();
        boardState[1][0] = $('.oneZero').children().html();
        boardState[1][1] = $('.oneOne').children().html();
        boardState[1][2] = $('.oneTwo').children().html();
        boardState[2][0] = $('.twoZero').children().html();
        boardState[2][1] = $('.twoOne').children().html();
        boardState[2][2] = $('.twoTwo').children().html();      
    }
});
