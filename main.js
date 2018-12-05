var request = require('request');
var fs = require('fs');
var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var POCET_KODOV = 3;                            // POCET KODOV --- ZMENIT NA 45 KED BUDU VSETKY KODY V PNG

app.get('', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/client.js', function(req, res){
    res.sendFile(__dirname + '/client/client.js');
});
app.get('/jquery-3.3.1.min.js', function(req, res){
    res.sendFile(__dirname + '/client/jquery-3.3.1.min.js');
});
app.get('/style.css', function(req, res){
    res.sendFile(__dirname + '/client/style.css');
});
app.get('/default.css', function(req, res){
    res.sendFile(__dirname + '/client/default.css');
});
app.get('/index.css', function(req, res){
    res.sendFile(__dirname + '/client/index.css');
});
// NACITANIE OBRAZKOV KODOV
for (let i = 1; i <= POCET_KODOV; i++){
    app.get(`/kod${i}.jpg`, function(req, res){
        res.sendFile(__dirname + `/client/imgs/kod${i}.jpg`);
    });
}

app.get('/cake.jpg', function(req, res){
    res.sendFile(__dirname + '/client/cake.jpg');
});

// inicializacia servera
server.listen(process.env.PORT || 2000);
console.log("Server started on PORT 2000");

// pripojenie na klienta
io.on('connection', function (socket) {
  socket.on('mainInput', function (searchWordInput) {
    console.log("Connected");
  });

  socket.on('finalResults', function(results){
      console.log(results);
  })
});

