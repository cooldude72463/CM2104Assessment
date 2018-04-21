var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render('pages/MainPage');
});

app.get('/SearchPage', function(req, res) {
 res.render('pages/SearchPage');
});

app.get('/MoviePage', function(req, res) {
 res.render('pages/MoviePage');
});


app.use(express.static(__dirname + '/views'));

app.listen(8080);
console.log('8080 is the magic port');
