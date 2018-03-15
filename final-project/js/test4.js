function alertMe() {
    alert("I am an alert box!");
}


!(function(){
    "use strict";

    var map;

    d3.json("../data/test-circles.json",main);


    function main(data) {
        addLmaps();
        drawFeatures(data);
    }

    function addLmaps() {


        map = new L.Map("mapid", {center: [37.8, -96.9], zoom: 1, minZoom: 1, zoomDelta: .5});


        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        // L.tileLayer.setOpacity(0.7);
        // tiles.setOpacity(0.7);

        // map = L.map('map').setView([39.702053　, 141.15448379999998], 5);
        //
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);


        // L.svg().addTo(map);





    }


    function projectPoint(x, y) {
        var point = map.latLngToLayerPoint(new L.LatLng(y, x));
        this.stream.point(point.x, point.y);
    }

    function drawFeatures(data) {
      var svg = d3.select(map.getPanes().overlayPane).append("svg");
      var g = svg.append("g").attr("class", "leaflet-zoom-hide");
        // var svg = d3.select("#map").select("svg");

      data.objects.forEach(function(d) {
          d.LatLng = new L.LatLng(d.circle[0],
                                  d.circle[1]);
            });

        var transform = d3.geoTransform({point: projectPoint});
        var path = d3.geoPath().projection(transform);

        var featureElement = svg.selectAll("circle")
            .data(data.objects)
            .enter()
            .append("circle")
            .style("opacity", 0.7)
            .style("fill", 'red')
            .attr('stroke', 'white')
            .attr("r", 50)

        // var featureElement = svg.selectAll("path")
        //     .data(data.features)
        //     .enter()
        //     .append("path")
        //     .attr("stroke", "gray")
        //     .attr("fill", "green")
        //     .attr("fill-opacity", 0.6);

        map.on("moveend", update);
        map.on("zoomend", update);








        update();


        function update() {
            featureElement.attr("d", path);
            featureElement.attr("cx",function(d) { return map.latLngToLayerPoint(d.LatLng).x});
            featureElement.attr("cy",function(d) { return map.latLngToLayerPoint(d.LatLng).y});
        }

    }


}());
