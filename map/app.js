// 地図の中心を決める
var places = {
  sfc: new google.maps.LatLng(35.388276, 139.427348),
  london: new google.maps.LatLng(51.4768703,-0.1798333)
};

// 地図を表示するためのオプションを設定する
var opt = {
  zoom: 15,
  center: places.sfc,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
 
// 地図を表示する。
var mapElement = document.querySelector("#map");
var map = new google.maps.Map(mapElement, opt);

var markers = {
  sfc: new google.maps.Marker({
    position: places.sfc,
    map: map,
    title: "SFC"
  }),
  london: new google.maps.Marker({
    position: places.london,
    map: map,
    title: "London"
  })
};

function moveTo(place){
  var latlng = places[place];
  if(latlng){
    map.panTo(latlng);
  }
}

function moveToSFC(){
  moveTo("sfc");
}

function moveToLondon(){
  moveTo("london");
}

var sfc = document.querySelector("#sfc");
sfc.addEventListener("click", moveToSFC);

var london = document.querySelector("#london");
london.addEventListener("click", moveToLondon);

function showDetails(marker){
  alert(marker.title);
}

function showSFCDetails(){
  showDetails(markers.sfc);
}

function showLondonDetails(){
  showDetails(markers.london);
}

google.maps.event.addListener(markers.sfc, "click", showSFCDetails);
google.maps.event.addListener(markers.london, "click", showLondonDetails);
