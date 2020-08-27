
const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/about', function(req,res){
    res.sendFile(__dirname + '/about.html')
});
app.listen(3000,function(req,res){
    console.log('server is running...')
})