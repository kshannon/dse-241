
d3.json("data/exercise2-olympics.json", function(dataset) {


  // Animation for changing the concentric rings when
  // one of them is clicked.
  function arcTween(d) {
      var xd = d3.interpolate(x.domain(),
                  [d.x, d.x + d.dx]),
          yd = d3.interpolate(y.domain(),
                  [d.y, 1]),
          yr = d3.interpolate(y.range(),
                  [d.y ? 20 : 0, radius]);
      return function(d, i) {
          return i ?
              function(t) {
                  return arc(d);
              } :
              function(t) {
                  x.domain(xd(t));
                  y.domain(yd(t)).range(yr(t));
                  return arc(d);
              };
      };
  }

  // Handle clicks on arcs (data points)
  function click(d) {
      path.transition()
          .duration(750)
          .attrTween("d", arcTween(d));
      mouseout();
  };

  var formatComma = d3.format(",")  // Add comma into numbers for thousands place

  // Medals won appears when mouse goes over arc
  function mouseover(d) {

      var medalCount = d.key + ": " +
          formatComma(d.value) + " medal" +
          (d.value > 1 ? "s" : "");

      medalsWon.text(medalCount)
          .transition()
          .attr("fill-opacity", 1);
  };

  // Medals won disappears when mouse goes out of arc
  function mouseout() {
      medalsWon.transition().attr("fill-opacity", 0);
  };

  // Function to define the color for the data d
  var color = function(d) {

      var colors;

      if (!d.parent) {

          // Create a categorical color scale
          // so that every country has its own color

          // colors = d3.schemeCategory10() --V4 TODO
          colors = d3.scale.category10().domain(d3.range(0,10));

          // White for the center circle
          d.color = "#fff";

      } else if (d.children) {

          // Children of a node are progressively brighter
          // in color magnitude channel
          var startColor = d3.hcl(d.color).darker(),
              endColor   = d3.hcl(d.color).brighter();

          // Create the color scale

          // colors = d3.scaleLinear() --V4 TODO
          colors = d3.scale.linear()
                  // .interpolate(d3.interpolateHclLong) --V4 TODO
                  .interpolate(d3.interpolateHcl)
                  .range([
                      startColor.toString(),
                      endColor.toString()
                  ])
                  .domain([0,d.children.length+1]);

      }

      if (d.children) {

          // Children color scheme
          d.children.map(function(child, i) {
              return {value: child.value, idx: i};
          }).sort(function(a,b) {
              return b.value - a.value
          }).forEach(function(child, i) {
              d.children[child.idx].color = colors(i);
          });
      }

      return d.color;
  };

  // Define the dimensions of the circles visualization.

  var total_width = 600, total_height = 600;
  var margin = {top: 30, right: 30, bottom: 30, left: 30},
      width = total_width - margin.left - margin.right,
      height = total_height - margin.top - margin.bottom,
      radius = Math.min(width, height) / 2;

  // Create the d3 graph and allow it to scale with window
  var svg = d3.select("#olympics-viz").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" +
              (margin.left + width  / 2) + "," +
              (margin.top  + height / 2) + ")");


  // var x = d3.scaleLinear().range([0,2 * Math.PI]);  --V4 TODO
  // var y = d3.scaleSqrt().range([10, radius]);  --V4 TODO
  var x = d3.scale.linear()
      .range([0, 2 * Math.PI]);
  var y = d3.scale.sqrt()
      .range([9, radius]);

  // Use d3.nest property to create hierarchical tree
  // of the JSON dataset.

  // var partition = d3.partition() --V4 TODO
  var partition = d3.layout.partition()
      // .sort(function(a, b) { return (a.Country > b.Country); })
      .sort(function(a, b) { return (a.Year > b.Year); })
      // .sort(function(a, b) { return (a.Gender > b.Gender); })
      // .sort(function(a, b) { return (a.Sport > b.Sport); })
      .children(function(d) {
          //console.log(d.values)
          return Array.isArray(d.values) ? d.values : null;
      })
      .value(function(d) {
          return d.values;
      });


  // This creates the concentric rings based
  //  on individual arcs. Arc length is proportional to 
  //  percentage of medals for that category. 
  var inter_ring_spacing = 4.0
  var arc = d3.svg.arc()
      .startAngle(function(d) {
          return Math.max(0,
              Math.min(2 * Math.PI, x(d.x)));
      })
      .endAngle(function(d) {
          return Math.max(0,
              Math.min(2 * Math.PI, x(d.x + d.dx)));
      })
      .innerRadius(function(d) {
          return Math.max(0, y(d.y) + inter_ring_spacing);
      })
      .outerRadius(function(d) {
          return Math.max(0, y(d.y + d.dy));
      });

  // Extract the hierachy from the raw data
  // Using `d3.nest` operations. The data's
  // hierarchy is Country->Year->Gender->Sport
  var hierarchy = {
      key: "Olympic Medals",
      values: d3.nest()
          .key(function(d) { return d.Country; })
          .key(function(d) { return d.Year; })
          .key(function(d) { return d.Gender; })
          .key(function(d) { return d.Sport; })
          .rollup(function(leaves) {
              return leaves.length;
          })
          .entries(dataset)
  };

  // Construct the visualization.
  var path = svg.selectAll("path")
      .data(partition.nodes(hierarchy))
    .enter().append("path")
      .attr("d", arc)
      .attr("stroke", "#fff")
      .attr("fill-rule", "evenodd")
      .attr("fill", color)
      .on("click", click)
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  // Add a container for the tooltip.
  var medalsWon = svg.append("text")
      .attr("font-size", 16)
      .attr("font-weight", "bolder")
      .attr("fill-opacity", 0)
      .attr("text-anchor", "middle")
      .style("pointer-events", "none");

  // Add the title to the viz.
  var viz_title = svg.append("text")
      .attr("font-size", 18)
      .attr("fill", "#000")
      .attr("text-anchor", "middle")
      .attr("transform", "translate(" + 0 + "," + (-height/2 - 8)  +")")
      .text("Total Olympic Medal Counts");

});
