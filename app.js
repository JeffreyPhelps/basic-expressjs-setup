

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log('Someone went to the home page!');
  res.send('Hello World');
});

app.get('/dog', function (req, res) {
    console.log('Someone visited the dog page!');
  res.send('Woof!!!');
});

app.get('/bye', function (req, res) {
    console.log('Someone went to the bye bye page!');
  res.send('See Ya!');
});

app.get('*', function (req, res) {
    console.log('Someone went to a bogus page!');
  res.send('This is a bogus page!');
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});

