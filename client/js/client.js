$(document).ready(function () {
    var turnCount = 0;
    var boardState = [['empty', 'empty', 'empty'], ['empty', 'empty', 'empty'], ['empty', 'empty', 'empty']];
    $('.gameSquare').one('click', function (event) {
        turnCount++;
        if (turnCount % 2) {
            $(this).children().text('X').addClass("letterInput");
            updateBoard();
            winConditions(boardState);
            
        } else {
            $(this).children().text('O').addClass("letterInput");
            updateBoard();
            winConditions(boardState);
        }
    });

    var winConditions = function (boardState) {
        $.ajax({
            url: '/api/winConditions',
            type: 'POST',
            data: JSON.stringify(boardState),
            contentType: 'application/json',
            success: function (data) {
                if (data[0] === true) {
                    alert(data[1] + ' has won!');
                    resetBoard();
                }
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

    var resetBoard = function () {
        location.reload();
    }
});
