var mymap;
var svg;
var g;
var bounds;
var padding = 200;
var pointPositions = [];
var circles;
var scaleSVG = true;
var radius = 60;
//vienna coords: 48.205, 16.375
var data = [
    {key: 0, coords: [48.205, 16.375]},
    {key: 1, coords: [46.610, 13.864]}
];
// function onLoadPage()
// {
//     initMap();
//     loadTestData(data);
// }
initMap();
loadTestData(data);
function initMap()
{
    //map is centered on austria
    var mymap = new L.Map("mapid", {center: [37.8, -96.9], zoom: 4, minZoom: 4, zoomDelta: .5});
    // mymap = L.map('mapid').setView([47.488,12.881], 7);
    //mapbox tiles need an access token (retrievable via free mapbox account)
    var map_tile = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    mymap.on('viewreset', updateView);
    mymap.on('zoom', updateView);
    //this svg holds the d3 visualizations
    svg = d3.select(mymap.getPanes().overlayPane).append("svg");
    g = svg.append("g").attr("class", "leaflet-zoom-hide");
}
function loadTestData(indata)
{
    //create lat/lng coords for each data item
    indata.forEach(createLatLng);
    circles = g.selectAll("circle")
        .data(indata)
        .enter()
        .append("circle")
        .attr("r", radius);
    updateView();
}
//assigns each input object a new LatLng variable based on a given x/y coordinate
//TODO: adapt to input data in terms of coordinate access
function createLatLng(d)
{
    d.LatLng = new L.LatLng(d.coords[0], d.coords[1]);
}
//calculate the projection of gis coordinates to the leaflet map layer (canvas coordinates)
function updatePosition(d)
{
    var newpoint = mymap.latLngToLayerPoint(d.LatLng);
    pointPositions.push(newpoint);
}
//triggered when zooming: projection to map and bounds need to be updated
function updateView()
{
    //clear old positions
    pointPositions = [];
    data.forEach(updatePosition);
    circles.attr("cx",function(d) { return mymap.latLngToLayerPoint(d.LatLng).x});
    circles.attr("cy",function(d) { return mymap.latLngToLayerPoint(d.LatLng).y});
    if(scaleSVG) circles.attr("r",function(d) { return radius/1400*Math.pow(2,mymap.getZoom())});
    bounds = calculateDataBounds(pointPositions);
    var topLeft = bounds[0];
    var bottomRight = bounds[1];
    svg .attr("width", bottomRight.x - topLeft.x + 2*padding)
        .attr("height", bottomRight.y- topLeft.y + 2*padding)
        .style("left", topLeft.x-padding + "px")
        .style("top", topLeft.y-padding + "px");
    g .attr("transform", "translate(" + (-topLeft.x+padding) + ","
        + (-topLeft.y+padding) + ")");
}
//calculate top left and bottom right extents of given features/shapes
function calculateDataBounds(features)
{
    var minx = 0, miny = 0, maxx = 0, maxy = 0;
    //find maxima
    for(var i=0; i<features.length; i++)
    {
        if(features[i].x > maxx) maxx = features[i].x;
        if(features[i].y > maxy) maxy = features[i].y;
    }
    minx = maxx;
    miny = maxy;
    //find minima
    for(var i=0; i<features.length; i++)
    {
        if(features[i].x < minx) minx = features[i].x;
        if(features[i].y < miny) miny = features[i].y;
    }
    var topleft = {};
    topleft.x = minx;
    topleft.y = miny;
    var bottomright = {};
    bottomright.x = maxx;
    bottomright.y = maxy;
    var bounds = [];
    bounds[0] = topleft;
    bounds[1] = bottomright;
    return bounds;
}
