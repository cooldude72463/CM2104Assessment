function searchH(){
  var searchbox = document.getElementById("searchbox");
  var searchvalue = searchbox.value;

  if(searchvalue != ""){
    return true;
  } else {
    alert("please type a search query!");
    return false;
  }
}

function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
}

function motd(){
  var motdArray = ["I did not hit her! I did naaaaht!","Oh hi Mark!","Hi doggie!"];

  document.getElementById("Title").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
  document.getElementById("subheader").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
}
