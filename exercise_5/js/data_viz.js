var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);
var color = d3.scaleQuantize()
    .domain([1,9])
    .range(["#fc8d59", "#ffffbf", "#91bfdb" ]);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
	.force("link", d3.forceLink().distance(function(d) {return d.weight;}))
    .force("charge", d3.forceManyBody().strength(-1.7*height))
    .force("center", d3.forceCenter(width / 2, height / 2));
		
					
d3.json("graph.json", function(error, graph) {
  if (error) throw error;	
  
  svg.append("svg:defs").selectAll("marker")
    .data(["end"])      
    .enter().append("svg:marker")   
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 3.5)
    .attr("markerHeight", 3.5)
    .attr("orient", "auto")
    .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");
	
  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return d.weight; })
	  .attr("marker-end", "url(#end)");

	link.append("title")
      .text(function(d) { return "Weight = " +  (d.weight); });
	  
  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", function(d) { return 4.0*d.age; })
      .attr("fill", function(d) { return color(d.age); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
		  
  
  node.append("title")
      .text(function(d) { return "Sheep ID = " +  (d.id + 1) + "\nAge = " + (d.age); });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
  
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
