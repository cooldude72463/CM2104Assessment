$(function(){
  $('#searchform').submit(function(){
    var searchterms = $("#searchbox").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

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
  $("#mostPopular").html(htmlstring);
}
