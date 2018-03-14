$(function(){
    getResultsFromOMDB();
    return false;
});

function getResultsFromOMDB(){
  var url = "http://www.omdbapi.com/?apikey=a40072ee&t=";
  $.getJSON(url, function(jsondata){
    addResultTitles(jsondata);
  });
}

function addResultTitles(jsondata){

  var htmlstring = "";
  for(var i = 0; i < 10; i++){
    var title = jsondata.Search[i].Title;
    htmlstring+= "<li>" + title + "</li>";
  }
  $("#newestAddtion").html(htmlstring);
}
