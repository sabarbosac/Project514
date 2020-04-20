// Create leaflet map.
var dir;
var map = new L.Map('map',{
    layers: MQ.mapLayer(),
    center: [ 39.419220, -111.950684],
    zoom: 6
})
////
//function createButton(label, container) {
//    var btn = L.DomUtil.create('button', '', container);
//    btn.setAttribute('type', 'button');
//    btn.innerHTML = label;
//    return btn;
//}
//
//map.on('click', function(e) {
//    var container = L.DomUtil.create('div'),
//        startBtn = createButton('Start from this location', container),
//        destBtn = createButton('Go to this location', container);
//
//    L.popup()
//        .setContent(container)
//        .setLatLng(e.latlng)
//        .openOn(map);
//});
//
//  L.DomEvent.on(startBtn, 'click', function() {
//        control.spliceWaypoints(0, 1, e.latlng);
//        map1.closePopup();
//    });
//
//        L.DomEvent.on(destBtn, 'click', function() {
//        control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
//        map1.closePopup();
//    });



// Create & add OSM layer.
var osm = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
var stationsJSON=JSON.parse(JSON.stringify(stationsGeoJSON));
var stationsObjectArray = stationsJSON.features;
console.log(stationsObjectArray);


function test (){
    let ipointlat= document.getElementById("ipointlat").value;
    let ipointlatFloat=Number(ipointlat);
    let ipointlon= document.getElementById("ipointlon").value;
    let ipointlonFloat=Number(ipointlon);

    let fpointlat= document.getElementById("fpointlat").value;
    let fpointlatFloat=Number(fpointlat);
    let fpointlon= document.getElementById("fpointlon").value;
    let fpointlonFloat=Number(fpointlon);

}

var buttons = document.getElementById("submit");
var layerRoutes;
buttons.addEventListener("click", function(){
    if(layerRoutes){
     map.removeLayer(layerRoutes);
    }
    var ipointlat= document.getElementById("ipointlat").value;
    var ipointlon= document.getElementById("ipointlon").value;

    var fpointlat= document.getElementById("fpointlat").value;
    var fpointlon= document.getElementById("fpointlon").value;



    var interStation = document.getElementById("stations_select");
    var indexStation  = interStation.selectedIndex;
    var selectedStation = stationsObjectArray[indexStation].properties;
    console.log(selectedStation)
    var stationLat = selectedStation["Latitude"];
    var stationLong = selectedStation ["Long"];
//  console.log(interStation.selectedIndex);
    dir.route({
        locations: [

              { latLng: { lat: ipointlat, lng: ipointlon }},


              { latLng: { lat: stationLat, lng: stationLong }},

              { latLng: { lat: fpointlat, lng: fpointlon }},
               //{ street: '935 pennsylvania ave', city: 'washington', state: 'dc' }

        ]
    });
    layerRoutes = MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true
    });
    map.addLayer(layerRoutes);
//    map.addLayer(MQ.routing.routeLayer({
//        directions: dir,
//        fitBounds: true
//    }));
});

var resetButton = document.getElementById("reset");
reset.addEventListener("click", function(){
    if(layerRoutes){
     map.removeLayer(layerRoutes);
    }
    var ipointlat= document.getElementById("ipointlat");
    var ipointlon= document.getElementById("ipointlon");
    var fpointlat= document.getElementById("fpointlat");
    var fpointlon= document.getElementById("fpointlon");
    console.log(ipointlat);
    console.log(ipointlon);
    console.log(fpointlat);
    console.log(fpointlon);
    ipointlat.value = '';
    ipointlon.value= '';
    fpointlon.value = '';
    fpointlat.value = '';

})

var url = "https://geoserver.hydroshare.org/geoserver/HS-3160423bc3fc4d1f9cf8c5be05312747/wms";
// Create & add WMS-layer.
//var Stations = L.tileLayer.wms(url, {
//  layers: 'stations_new Stations_new',
//  format: 'image/png',
//  transparent: true,
//   }).addTo(map);

 var Stations= L.tileLayer.betterWms(url, {
  layers: 'stations_new Stations_new',
  format: 'image/png',
  transparent: true,
  }).addTo(map);


// var Stations = L.tileLayer.wms(url, {
//  layers: 'Station_Locations Station_Locations',
//  format: 'image/png',
//  transparent: true,
//   }).addTo(map);


dir = MQ.routing.directions();

//dir.route({
//    locations: [
//
//          { latLng: { lat: ipointlat, lng: ipointlon }},
//          { latLng: { lat: fpointlat, lng: fpointlon }},
//
//       // { latLng: { lat: 40.232158, lng: -111.654464 }},
//       // { latLng: { lat: 40.299969, lng: -111.703100 }},
//    ]
//});
//
//map.addLayer(MQ.routing.routeLayer({
//    directions: dir,
//    fitBounds: true
//}));

