


// var map = L.map('map_molen').setView([lat, lng], zoom);
var map = new L.Map("mapid", {center: [37.8, -96.9], zoom: 4, minZoom: 4, zoomDelta: .5});


var map_tile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.svg().addTo(map); //do not need

//var svg = d3.select("#map").select("svg"); //does not work... no overay-pane
var svg = d3.select(map.getPanes().overlayPane).append("svg"); //passing svg to leaflet overlayPane
svgCircles = svg.append("g").attr("class", "leaflet-zoom-hide"); //hide svg element on zooming
// heatmap = svg.append("heatmap")
// hexBin = svg.append("hexbin")
// choropleth = svg.append("choropleth")

// set up each of these for each different svg element
d3.json("../data/test-circles.json", function(error, collection) {
    /* Add a LatLng object to each item in the dataset */
    if (error) {
        console.log(error);
        alert(error);
    }
    else {
        var transform = d3.geoTransform({point: projectPoint});
        var path = d3.geoPath(transform)//.projection(transform);
            // console.log(typeof path); //path is a function

        collection.objects.forEach(function(d) {
            d.LatLng = new L.LatLng(d.circle[0],
                                    d.circle[1]);
              });

        var circles = svgCircles.selectAll("circle")
            .data(collection.objects)
            .enter()
            .append("circle")
            .style("opacity", 0.7)
            .style("fill", 'red')
            .attr('stroke', 'white')
            .attr("r", 50)
          console.log("no");
          console.log(circles);

        map.on("viewreset", update);
        console.log(collection.objects);
        update();

        // Reposition the SVG to cover the features.
        function update() {
          var bounds = path.bounds(collection.objects),
              topLeft = bounds[0],
              bottomRight = bounds[1];
              console.log('.........');
              console.log(topLeft);
              console.log(bottomRight);

          svg.attr("width", bottomRight[0] - topLeft[0])
              .attr("height", bottomRight[1] - topLeft[1])
              .style("left", topLeft[0] + "px")
              .style("top", topLeft[1] + "px");

          svgCircles.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

          circles.attr("d", path);
        }

        // Use Leaflet to implement a D3 geometric transformation.
        function projectPoint(x, y) {
          var point = map.latLngToLayerPoint(new L.LatLng(y, x));
          this.stream.point(point.x, point.y);
        }

      }
    });





        // var bounds = path.bounds(collection),
        //     topLeft = bounds[0],
        //     bottomRight = bounds[1];
        //     console.log(bounds[0]); //this prints out infintiey... hmmmmmmmmm
//https://stackoverflow.com/questions/40047326/overlaying-circles-on-leaflet-with-d3-results-in-not-positioned-properly

        // collection.objects.forEach(function(d) {
        //     d.LatLng = new L.LatLng(d.circle[0],
        //                             d.circle[1]);
        //     // console.log(d)
        // });
        // console.log(collection.objects);  // array of 4 elements
        // console.log(typeof collection.objects); // object

      //
      //   var circles = svgCircles.selectAll("circle")
      //       .data(collection.objects)
      //       .enter()
      //       .append("circle")
      //       .style("opacity", 0.7)
      //       .style("fill", 'red')
      //       .attr('stroke', 'white')
      //       .attr("r", 50)
      //     console.log("no");
      //     console.log(circles);
      //
      //   function projectPoint(x, y) {
      //       console.log('hjhjhhhj');
      //       console.log(y);
      //       console.log(typeof x);
      //       var point = map.latLngToLayerPoint(new L.LatLng(y, x));
      //       this.stream.point(point.x, point.y);
      //       console.log(x);
      //   }
      //
      //   function update() {
      //     console.log('.....');
      //       circles.attr("cx", function(d) {
      //           return map.latLngToLayerPoint(d.LatLng).x;
      //       });
      //       circles.attr("cy", function(d) {
      //           return map.latLngToLayerPoint(d.LatLng).y;
      //       });
      //       svg.attr("width", bottomRight[0] - topLeft[0])
      //           .attr("height", bottomRight[1] - topLeft[1])
      //           .style("left", topLeft[0] + "px")
      //           .style("top", topLeft[1] + "px");
      //
      //       svgCircles.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
      //   }
      //
      // map.on("viewreset", update);
      // update();
      // console.log(circles);
      // console.log("HI   !!!");

//   }
// });

        // var transform = d3.geoTransform({point: projectPoint}),
        //     path = d3.geoPath().projection(transform);
        // // var feature = g.selectAll("path")
        // //     .data(collection.features)
        // //     .enter().append("path");
        // feature.attr("d", path);
        // var bounds = path.bounds(collection),
        //     topLeft = bounds[0],
        //     bottomRight = bounds[1];
        // svg .attr("width", bottomRight[0] - topLeft[0])
        //     .attr("height", bottomRight[1] - topLeft[1])
        //     .style("left", topLeft[0] + "px")
        //     .style("top", topLeft[1] + "px");
        //
        // g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

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

        // });
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
//     };
// });

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
