function Login(){
  var firstname = document.getElementById("firstname");
  var surname = document.getElementById("surname");
  var username = document.getElementById("username");
  var password = document.getElementById("password");

 db.collection('UserInfo').find().toArray(function(err, result) {
 if (err) throw err;
 var output = "<h1>Info</h1>";
 for (var i = 0; i < result.length; i++) {
 output += "<div>"
 output += "<p>" + result[i].username + ", " + result[i].password + ", "+ result[i].firstname + ", "+ result[i].surname + ", </p>"
 output += "</div>"
 }
 console.log(output);

  var userdata = "{username:"+username+", password:"+password+", firstname:"+firstname+", surname:"+surname+"}"
  db.collection('UserInfo').save(userdata, function(err, result) {
    if (err) throw err;
    console.log('Saved')
    res.redirect('/')
  })
})
}
