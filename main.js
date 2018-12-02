var request = require('request');
var fs = require('fs');
var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


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
app.get('/kod1.png', function(req, res){
    res.sendFile(__dirname + '/client/kod1.png');
});
app.get('/kod2.png', function(req, res){
    res.sendFile(__dirname + '/client/kod2.png');
});
app.get('/kod3.png', function(req, res){
    res.sendFile(__dirname + '/client/kod3.png');
});
app.get('/cake.jpg', function(req, res){
    res.sendFile(__dirname + '/client/cake.jpg');
});

server.listen(process.env.PORT || 2000);
console.log("Server started on PORT 2000");

io.on('connection', function (socket) {
  socket.on('mainInput', function (searchWordInput) {
    
    console.log("Connected");
  });
});

