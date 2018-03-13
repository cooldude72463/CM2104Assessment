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
