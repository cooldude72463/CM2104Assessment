function validate(){
  var searchbox = document.getElementById("searchbox");
	var searchvalue = searchbox.value;

	if(searchvalue != ""){
				return true;
			} else {
				alert("please type a search query!");
				return false;
			}
}

function yes(){
  var searchString = document.location.search;
  searchString = searchString.substring(1);
  var nvPairs = searchString.split("&");

	for (i = 0; i < nvPairs.length; i++) {
	   var nvPair = nvPairs[i].split("=");
	   var name = nvPair[0];
	   var value = nvPair[1];
  }

  var string = value.split("+");
  value = "";
  for(i = 0; i < string.length; i++){
    value += string[i] + " ";
  }
  console.log(value);
	getResultsFromOMDB(value);
  return false;
}

function getResultsFromOMDB(searchterms){
  var url = "http://www.omdbapi.com/?apikey=a40072ee&s=" + searchterms;
  $.getJSON(url, function(jsondata){
  addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){
  var url = "http://img.omdbapi.com/?apikey=a40072ee&s=";
  var htmlstring = "";
  for(var i = 0; i < 10; i++){
    var title = jsondata.Search[i].Title;
    var year = jsondata.Search[i].Year;
    //$.getJSON(url + title, function(jsondataP){
    htmlstring = "<div id = test>" + title + ", " + year + "</div>";
    $("#searchResults").append(htmlstring);
  }

}
