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

function getResultsFromTMDB(value){
  var url = "https://api.themoviedb.org/3/search/movie?api_key=95e3a26ca455cd0b5d455ae9fa52acad&language=en-US&page=1&include_adult=false&query="+value;
  $.getJSON(url, function(jsondata){
    addResultTitles(jsondata);
  });
}


function ShowMovies(){
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
  //console.log(value);
  getResultsFromTMDB(value);
  return false;
}

function addResultTitles(jsondata){
  var htmlstring = "";
  //console.log(jsondata);
  var counter = 0;

  for(var i = 0; i < jsondata.results.length; i++){
    if(jsondata.results[i].title == null){

    } else {
      console.log(jsondata.results[i].title);
      var title = jsondata.results[i].title;
      var poster = "http://image.tmdb.org/t/p/w92" + jsondata.results[i].poster_path;
      var string = title;
      var url = string[0];

      for(i = 1; i < string.length; i++){
        if(string[i] == " "){
          url += "+"
        } else {
          url += string[i]
        }
      }

      var img = "<img src="+poster+" alt=Poster for "+title+">";

      var link = "MoviePage?q=" + url;
      var temp1 = "<div class = movieLink>"
      var temp2 = "<a href="+ link +">"
      var temp3 = "<div class = poster>" + img + "</div>"
      var temp4 = "<div class = title>" + title + "</div>"
      var temp5 = "</div>"
      var htmlstring = temp1 + temp2 + temp3 + temp4 + temp5
      $("#searchResults").append(htmlstring);
      //console.log(htmlstring);

      counter++;
      console.log(counter);
    }
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
  getResultsFromTMDB2(value);
  return false;
}

function getResultsFromTMDB2(value){
  var url = "https://api.themoviedb.org/3/search/movie?api_key=95e3a26ca455cd0b5d455ae9fa52acad&language=en-US&page=1&include_adult=false&query="+value;
  $.getJSON(url, function(jsondata){
    addResult(jsondata)
  });
}

function addResult(jsondata){
  var htmlstring = "";
  var title = jsondata.results[0].title;
  var poster = "http://image.tmdb.org/t/p/w92" + jsondata.results[0].poster_path;
  var description = jsondata.results[0].overview;

  var img = "<img src="+poster+" alt=poster>";
  if(title == null){

  } else {
    var imgString =  "<div class = image>" +  img + "</div>";
    var titleString = "<div class = title>" + title + "</div>";
    var descriptionString = "<div class = description>" + description + "</div>";
    //var yearString = "<div class = year>Release Year:" + year + "</div></div>";
    htmlstring = imgString + titleString + descriptionString;
    console.log(htmlstring);
    //htmlstring = "<div class = oneMovie> <div class = image>" +  img + "</div> <div class = title> Title:" + title + "  </div> <div class = year>Release Year:" + year + "</div></div>";
    $("#searchResults").append(htmlstring);


  }
}



function motd(){
  var motdArray = [" I did not hit her, it's not true! It's bullshit! I did not hit her! [throws water bottle]","Oh hi Mark!","Hi doggie!","You betrayed me! You're not good. You, you're just a chicken. Chip-chip-chip-chip-cheep-cheep."];

  document.getElementById("Title").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
  //document.getElementById("subheader").innerHTML = motdArray[Math.floor((Math.random() * motdArray.length-1) + 1)];
}
