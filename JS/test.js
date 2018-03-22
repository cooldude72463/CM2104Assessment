function test1(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.omdbapi.com/?apikey=a40072ee&", false);
  xhr.send();
  alert(xhr.status);
  alert(xhr.statusText);
}
