var APIKEY = "";
var endpoint = "http://webservice.recruit.co.jp/ab-road-air/ticket/v1/";

function createCondition(departure, destination){
  return {
    key: APIKEY,
    city: destination,
    dept_detail: departure,
    format: "jsonp"
  };
}

function dataLoaded(data){
  console.log(data);
  alert(data.results.results_available + "件見つかりました");
}

function search(){
  jQuery.ajax({
    url: endpoint,
    data: createCondition("HND", "SFO"),
    dataType: "jsonp",
    success:dataLoaded
  });
}

var start = document.querySelector("#start");
start.addEventListener("click", search);
