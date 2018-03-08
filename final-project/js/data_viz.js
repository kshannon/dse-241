


// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var map = new L.Map("mapid", {center: [37.8, -96.9], zoom: 4});
    // .addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"));

map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

var positron = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);


var GeoJsonData = d3.json("us-states.json", function(error, collection));

var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(map);

geojson.eachLayer(function (layer) {
    layer.bindPopup(layer.feature.properties.name);
});

map.fitBounds(geojson.getBounds());


// var svg = d3.select(map.getPanes().overlayPane).append("svg"),
//     g = svg.append("g").attr("class", "leaflet-zoom-hide");
//
//
// d3.json("us-states.json", function(error, collection) {
//   if (error) throw error;
//
//   // code here
//   function projectPoint(x, y) {
//   var point = map.latLngToLayerPoint(new L.LatLng(y, x));
//   this.stream.point(point.x, point.y);
// }
//
// var transform = d3.geo.transform({point: projectPoint}),
//     path = d3.geo.path().projection(transform);
//
// var feature = g.selectAll("path")
//     .data(collection.features)
//   .enter().append("path");
//
//
// feature.attr("d", path);
//
//
// var bounds = path.bounds(collection),
//     topLeft = bounds[0],
//     bottomRight = bounds[1];
//
//
//
// svg .attr("width", bottomRight[0] - topLeft[0])
//     .attr("height", bottomRight[1] - topLeft[1])
//     .style("left", topLeft[0] + "px")
//     .style("top", topLeft[1] + "px");
//
// g   .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
//
// });
