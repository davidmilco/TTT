var express = require('express');
var http = require("http");
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
