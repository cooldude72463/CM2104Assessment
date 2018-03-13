function test(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.omdbapi.com/?apikey=2f754ceb&", false);
  xhr.send();
  alert(xhr.status);
  alert(xhr.statusText);
}
