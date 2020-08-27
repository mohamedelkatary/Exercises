const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



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