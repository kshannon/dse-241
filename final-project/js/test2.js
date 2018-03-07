


var mymap = L.map('mapid', {center:[37.8, -96.9], zoom: 4, minZoom:4});
mymap.createPane('cicles');
mymap.getPane('cicles').style.zIndex = 650;
mymap.getPane('cicles').style.pointerEvents = 'none';

var mapTile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var mapTileCircles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    pane: 'circles'
}).addTo(mymap);

// var geojson = L.geoJson(points, geoJsonOptions).addTo(mymap);
// concole.log(points)

var svg = d3.select("#mapid").select("svg"),
g = svg.append("g");

// var svg = d3.select(mymap.getPanes().overlayPane).append("svg"),
//     var g = svg.append("g").attr("class", "leaflet-zoom-hide");


var points = d3.json("../data/test-circles.json", function(error, collection) {
  // console.log(error)
  if (error) throw error
  else {
      collection.objects.forEach(function(d) {
      latLng = d.circle;
      // console.log(latLong)
    });
    var circle = g.selectAll("circle")
			.data(collection.objects)
			.enter().append("circle")
			.style("stroke", "black")
			.style("opacity", .6)
			.style("fill", "red")
			.attr("r", 20);

      // map.on("viewreset", update);
		  // update();

		// function update() {
  	// 		feature.attr("transform",
  	// 		function(d) {
  	// 		     return "translate("+
  	// 				      map.latLngToLayerPoint(d.LatLng).x +","+
  	//               map.latLngToLayerPoint(d.LatLng).y +")";
		// 		});
    //   }
  }
});


// http://leafletjs.com/reference-1.3.0.html#map-viewreset
// http://leafletjs.com/reference-1.3.0.html#map-getpixelorigin
