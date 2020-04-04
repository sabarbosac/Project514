// Create leaflet map.
var dir;
var map = new L.Map('map',{
    layers: MQ.mapLayer(),
    center: [ 39.419220, -111.950684],
    zoom: 6
})


// Create & add OSM layer.
var osm = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);


// Create & add WMS-layer.
var Stations = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-3160423bc3fc4d1f9cf8c5be05312747/wms', {
  layers: 'Station_Locations Station_Locations',
  format: 'image/png',
  transparent: true,
   }).addTo(map);


dir = MQ.routing.directions();

dir.route({
    locations: [
        { latLng: { lat: 40.232158, lng: -111.654464 }},
        { latLng: { lat: 40.299969, lng: -111.703100 }},
    ]
});

map.addLayer(MQ.routing.routeLayer({
    directions: dir,
    fitBounds: true
}));



//
//
//
// window.onload = function() {
//
//    var map,
//        dir;
//
//    map = L.map('map', {
//        layers: MQ.mapLayer(),
//        center: [ 39.419220,-111.950684 ],
//        zoom: 9
//    });
//
//    dir = MQ.routing.directions();
//
//    dir.route({
//        locations: [
//            'utah',
//            { latLng: { lat: 39.346797, lng: -111.547966 }},
//            { city: 'utah', state: 'ut' }
//        ]
//    });
//
//    map.addLayer(MQ.routing.routeLayer({
//        directions: dir,
//        fitBounds: true
//    }));
//}