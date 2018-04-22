var express = require('express');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/MovieReviews";
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser());
app.set('view engine', 'ejs');

//THIS CODE BELOW SHOULD CREATE A DATABASE

var db;

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database;
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


app.post('/', function(req, res) {
  if(isset($_POST['form'])){
    if($_POST['form'] == "Login"){
          db.collection('UserInfo').save(req.body, function(err, result) {
            if (err) throw err;
            console.log('Saved')
            res.redirect('/')
          })
        }else if($_POST['form'] == "SignUp"){
          db.collection('UserInfo').find(req.body).toArray(function(err, result){
            if (err) throw err;
            for(int i = 0; i < result.length; i++){

            }
          })
        } else {
          console.log("What are you doing?");
        }
    }
})
/*
  db.collection('UserInfo').save(req.body, function(err, result) {
    if (err) throw err;
    console.log('Saved')
    res.redirect('/')
  })
});

app.post('/', function(req, res) {
  db.collection('UserInfo').find(req.body).toArray(function(err, result) {
    if (err) throw err;
    console.log(req.body.username);
  })
});
*/
app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));

app.listen(8080);
console.log('8080 is the magic port');
