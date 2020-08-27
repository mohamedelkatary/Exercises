const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/about', function(req,res){
    res.sendFile(__dirname + '/about.html')
});