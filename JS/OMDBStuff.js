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

  var htmlstring = "";
  for(var i = 0; i < 10; i++){
    var title = jsondata.Search[i].Title;
    var year = jsondata.Search[i].Year;
    htmlstring+= "<li>" + title + ", " + year + "</li>";
  }
  $("#searchResults").html(htmlstring);
}
