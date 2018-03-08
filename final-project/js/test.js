


// var map = L.map('map_molen').setView([lat, lng], zoom);
var map = new L.Map("mapid", {center: [37.8, -96.9], zoom: 4, minZoom: 4, zoomDelta: .5});


var map_tile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.svg().addTo(map); //do not need

//var svg = d3.select("#map").select("svg"); //does not work... no overay-pane
var svg = d3.select(map.getPanes().overlayPane).append("svg"); //passing svg to leaflet overlayPane
g = svg.append("g").attr("class", "leaflet-zoom-hide"); //hide svg element on zooming
// heatmap = svg.append("heatmap")
// hexBin = svg.append("hexbin")
// choropleth = svg.append("choropleth")

// set up each of these for each different svg element
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


        // var circles = g.selectAll("circle")
        //     .data(collection.objects)
        //     .enter().append("circle")
        //     .style("opacity", 0.7)
        //     .style("fill", 'red')
        //     .attr('stroke', 'white')
        //     .attr("r", 50)

        function projectPoint(x, y) {
              var point = map.latLngToLayerPoint(new L.LatLng(y, x));
              this.stream.point(point.x, point.y);
              }
        var transform = d3.geoTransform({point: projectPoint}),
            path = d3.geoPath().projection(transform);
        // var feature = g.selectAll("path")
        //     .data(collection.features)
        //     .enter().append("path");
        var feature = g.selectAll("circle")
            .data(collection.objects)
            .enter().append("circle")
            .style("opacity", 0.7)
            .style("fill", 'red')
            .attr('stroke', 'white')
            .attr("r", 50)
        feature.attr("d", path);
        var bounds = path.bounds(collection),
            topLeft = bounds[0],
            bottomRight = bounds[1];
        svg .attr("width", bottomRight[0] - topLeft[0])
            .attr("height", bottomRight[1] - topLeft[1])
            .style("left", topLeft[0] + "px")
            .style("top", topLeft[1] + "px");

        g   .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

        // map.on("viewreset", update);
		// update();
        //
        // function update() {
		// 	circles.attr("transform",
		// 	function(d) {
        //         console.log(d)
		// 		return "translate("+
		// 			map.latLngToLayerPoint(d.LatLng).x +","+
		// 			map.latLngToLayerPoint(d.LatLng).y +")";
        // 				}
        // 			)
        // 		}

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
