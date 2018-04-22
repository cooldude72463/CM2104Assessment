function Login(){
  var firstname = document.getElementById("firstname");
  var surname = document.getElementById("surname");
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  var userdata = "{username:"+username+", password:"+password+", firstname:"+firstname+", surname:"+surname+"}"
  db.collection('UserInfo').save(userdata, function(err, result) {
    if (err) throw err;
    console.log('Saved')
    res.redirect('/')
  })
}
