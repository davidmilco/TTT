var express = require('express');
var http = require("http");
var path = require('path');
var parser = require('body-parser');
var app = express();

app.use('/client', express.static(__dirname + '/../client'));
app.use(parser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.post('/api/winConditions', function (req, res) {
    var matrix = req.body;

    //create a copy of the matrix to rotate without affecting the original matrix
    var newMatrix = matrix.map(function (arr) {
        return arr.slice();
    });

    var rotatedMatrix = rotate(newMatrix);
    var checkRows = rowWin(matrix);
    var checkCols = rowWin(rotatedMatrix);
    var checkMainDiag = diagWin(matrix);
    var checkMinorDiag = diagWin(rotatedMatrix);
    var winnerFound = checkRows || checkCols || checkMainDiag || checkMinorDiag;
    res.status(200).send(winnerFound);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


var rowWin = function (matrix) {
    var rowLength = matrix.length;
    for (var x = 0; x < rowLength; x++) {
        var counter = 0;
        for (var y = 0; y < rowLength; y++) {
            if (matrix[x][0] === matrix[x][y] && matrix[x][0] !== '') {
                counter++;
            }
        }
        if (counter === rowLength) {
            return [true, matrix[x][0]];
        }
    }
    return false;
};

var diagWin = function (matrix) {
    var diagLength = matrix.length;
    var counter = 0;
    for (var a = 0; a < diagLength; a++) {
        if (matrix[0][0] === matrix[a][a] && matrix[0][0] !== '') {
            counter++;
        }
        if (counter === diagLength) {
            return [true, matrix[0][0]];
        }
    }
    return false;
};

var rotate = function (matrix) {
    matrix = matrix.reverse();
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
};

