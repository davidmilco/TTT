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
    console.log(req.body);
    res.status(200).send('dummy response');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
