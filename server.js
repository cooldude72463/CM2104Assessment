var express = require('express');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/profiles";
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser');

var app = express();


app.set('view engine', 'ejs');

//THIS CODE BELOW SHOULD CREATE A DATABASE

var usersDB;

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  usersDB = database;
  console.log('listening on 8080');
});

app.get('/', function(req, res) {
 res.render('pages/MainPage');
});

app.get('/SearchPage', function(req, res) {
 res.render('pages/SearchPage');
});

app.get('/MoviePage', function(req, res) {
 res.render('pages/MoviePage');
});

app.post('/adduser', function(req, res) {
  //Checks to see if you're logged in
  if(!req.session.loggedin){res.redirect('/login');return;}

  //NEED FUNCTION TO ADD THE USERS DATA TO THIS VARIABLE
  var userdata = "Put data here";

  //SAVES DATA TO UsersInfo.json
  db.collection('UsersInfo').save(userdata, function(err, result) {
    if (err) throw err;
    console.log('Saved')
    res.redirect('/')
  })
});


app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended:true}))

app.listen(8080);
console.log('8080 is the magic port');
