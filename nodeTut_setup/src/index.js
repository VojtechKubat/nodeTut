import express from "express";

var app = express();

app.get('/', function (req, res) {
    res.send("Hello express");
});

app.get('/yo', function (req, res) {
    res.send('yo');
});

var server = app.listen(3000, function() {
    console.log("Server is running on http://localhost:"+server.address().port);
});