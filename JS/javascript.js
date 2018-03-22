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
<<<<<<< HEAD
  var motdArray = [" I did not hit her, it's not true! It's bullshit! I did not hit her! [throws water bottle]","Oh hi Mark!","Hi doggie!","You betrayed me! You're not good. You, you're just a chicken. Chip-chip-chip-chip-cheep-cheep."];
=======
  var motdArray = ["I did not hit her! I did naaaaht!","Oh hi Mark!","Hi doggie!"];
>>>>>>> 433ff1e17eb421a5c6a582178131d75fd5ae46ab

  document.getElementById("Title").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
  document.getElementById("subheader").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
}
