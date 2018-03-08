


// var map = L.map('map_molen').setView([lat, lng], zoom);
var map = new L.Map("mapid", {center: [37.8, -96.9], zoom: 4, minZoom: 4, zoomDelta: .5});


var map_tile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.svg().addTo(map);

// var svg = d3.select("#map").select("svg");
svg = d3.select(map.getPanes().overlayPane).append("svg");
// g = svg.append("g")

// svg = d3.select(map.getPanes().overlayPane).append("svg");
//
// // With our SVG element set up, it is good practise to organise different SVG element, into
// // Groups. Here we create a group "g" with the class "leaflet-zoom-hide"
g = svg.append("g").attr("class", "leaflet-zoom-hide");

d3.json("../data/circles.json", function(error, collection) {
    /* Add a LatLng object to each item in the dataset */
    if (error) {
        console.log(error);
        alert(error);
    }
    else {
        collection.objects.forEach(function(d) {
            d.LatLng = new L.LatLng(d.circle.coordinates[0],
                                    d.circle.coordinates[1]);
            console.log(d)

        g.selectAll("circle")
            .data(collection.objects)
            .enter().append("circle")
            .style("opacity", 0.7)
            .style("fill", 'red')
            .attr('stroke', 'white')
            .attr("r", 50)
        });
        // var bounds = path.bounds(collection),
        //     topLeft = bounds[0],
        //     bottomRight = bounds[1];
        //
        // svg .attr("width", bottomRight[0] - topLeft[0])
        //     .attr("height", bottomRight[1] - topLeft[1])
        //     .style("left", topLeft[0] + "px")
        //     .style("top", topLeft[1] + "px");
        //
        // g   .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
    };
});

//
// /* Initialize SVG layer */
// var svgLayer = L.svg();
//     svgLayer.addTo(map);
//
//
//
//
//     // map._initPathRoot()
//     //
// 	// /* We simply pick up the SVG from the map object */
// 	// var svg = d3.select("#map").select("svg"),
// 	// g = svg.append("g");
//
//
//
//
// var svg = d3.select(map.getPanes().overlayPane).append("svg"),
//     g = svg.append("g").attr("class", "leaflet-zoom-hide");
//
//
//     var svgLayer = L.svg();
//     svgLayer.addTo(map);
//
//     var svg = d3.select("#map").select("svg");
//     var g = d3.select("#map").select("svg").select('g');
//     g.attr("class", "leaflet-zoom-hide");
//
//
//
// 	var statesData = d3.json("../data/circles.json", function(collection) {
// 		/* Add a LatLng object to each item in the dataset */
// 		collection.objects.forEach(function(d) {
// 			d.LatLng = new L.LatLng(d.circle.coordinates[0],
// 									d.circle.coordinates[1])
// 		})
//
//     L.geoJson(statesData).addTo(map);
//
// 		var feature = g.selectAll("circle")
// 			.data(collection.objects)
// 			.enter().append("circle")
// 			.style("stroke", "black")
// 			.style("opacity", .6)
// 			.style("fill", "red")
// 			.attr("r", 20);
//
// 		// map.on("viewreset", update);
//         map.on("moveend", update)
// 		update();
//
// 		function update() {
// 			feature.attr("transform",
// 			function(d) {
// 				return "translate("+
// 					map.latLngToLayerPoint(d.LatLng).x +","+
// 					map.latLngToLayerPoint(d.LatLng).y +")";
// 				}
// 			)
// 		}
// 	})
