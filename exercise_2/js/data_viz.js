// var div = d3.select("#chart").append("svg").append("div")

d3.json("data/exercise2-olympics.json", function(dataset) {

  // Define the dimensions of the visualization.
  var margin = {top: 30, right: 10, bottom: 20, left: 10},
      width = 600 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom,
      radius = Math.min(width, height) / 2;

  // Create the SVG container for the visualization and
  // define its dimensions. Within that container, add a
  // group element (`<g>`) that can be transformed via
  // a translation to account for the margins and to
  // center the visualization in the container.
  var svg = d3.select("#sunburst-viz").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" +
              (margin.left + width  / 2) + "," +
              (margin.top  + height / 2) + ")");


  // Define the scales that will translate data values
  // into visualization properties. The "x" scale
  // will represent angular position within the
  // visualization, so it ranges lnearly from 0 to
  // 2π. The "y" scale will reprent area, so it
  // ranges from 0 to the full radius of the
  // visualization. Since area varies as the square
  // of the radius, this scale takes the square
  // root of the input domain before mapping to
  // the output range.
  var x = d3.scale.linear()
      .range([0, 2 * Math.PI]);
  var y = d3.scale.sqrt()
      .range([10, radius]);

  // Define the function that creates a partition
  // layout from the dataset. Because we're using
  // `d3.nest` to construct the input dataset, the
  // children array will be stored in the `values`
  // property unless the node is a leaf node. In
  // that case the `values` property will hold
  // the data value itself.
  var partition = d3.layout.partition()
      .sort(function(a, b) { return (a.Country > b.Country); })
      .sort(function(a, b) { return (a.Year > b.Year); })
      .sort(function(a, b) { return (a.Gender > b.Gender); })
      .sort(function(a, b) { return (a.Sport > b.Sport); })
      .children(function(d) {
          // console.log(d.values)
          return Array.isArray(d.values) ?
              d.values : null;
      })
      .value(function(d) {
          // console.log(d.values)
          return d.values;
      });


  // Define a function that returns the color
  // for a data point. The input parameter
  // should be a data point as defined/created
  // by the partition layout.
  var color = function(d) {

      // This function builds the total
      // color palette incrementally so
      // we don't have to iterate through
      // the entire data structure.

      // We're going to need a color scale.
      // Normally we'll distribute the colors
      // in the scale to child nodes.
      var colors;

      // The root node is special since
      // we have to seed it with our
      // desired palette.
      if (!d.parent) {

          // Create a categorical color
          // scale to use both for the
          // root node's immediate
          // children. We're using the
          // 10-color predefined scale,
          // so set the domain to be
          // [0, ... 9] to ensure that
          // we can predictably generate
          // correct individual colors.
          colors = d3.scale.category10()
              .domain(d3.range(0,10));

          // White for the root node
          // itself. Center circle
          d.color = "#fff";

      } else if (d.children) {

          // Since this isn't the root node,
          // we construct the scale from the
          // node's assigned color. Our scale
          // will range from darker than the
          // node's color to brigher than the
          // node's color.
          var startColor = d3.hcl(d.color)
                              .darker(),
              endColor   = d3.hcl(d.color)
                              .brighter();

          // Create the scale
          colors = d3.scale.linear()
                  .interpolate(d3.interpolateHcl)
                  .range([
                      startColor.toString(),
                      endColor.toString()
                  ])
                  .domain([0,d.children.length+1]);

      }

      if (d.children) {

          // Now distribute those colors to
          // the child nodes. We want to do
          // it in sorted order, so we'll
          // have to calculate that. Because
          // JavaScript sorts arrays in place,
          // we use a mapped version.
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

  // Define the function that constructs the
  // path for an arc corresponding to a data
  // value.
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
  var tooltip = svg.append("text")
      .attr("font-size", 16)
      .attr("font-weight", "bolder")
      // .attr("background-color", "white")
      .attr("fill", "#000")
      .attr("fill-opacity", 0)
      .attr("text-anchor", "middle")
      .style("pointer-events", "none");

   // var imgtip = svg.append("svg:image")
   //    .attr('xlink:href','img/'+ toString(d.key)+'.png')
   //    .attr("width", 64)
   //    .attr("height", 64);

  // Add the title.
  svg.append("text")
      .attr("font-size", 18)
      .attr("fill", "#000")
      .attr("text-anchor", "middle")
      .attr("transform", "translate(" + 0 + "," + (-10 -height/2)  +")")
      .text("Total Olympic Medal Counts");

  // Handle clicks on data points. All
  // we need to do is start the transition
  // that updates the paths of the arcs.
  function click(d) {
      path.transition()
          .duration(750)
          .attrTween("d", arcTween(d));
      // Hide the tooltip since the
      // path "underneath" the cursor
      // will likely have changed.
      mouseout();
  };

  var formatComma = d3.format(",")  // Add comma into numbers for thousands place


  // Handle mouse moving over a data point
  // by enabling the tooltip.
  function mouseover(d) {
      tooltip.text(d.key + ": " +
          formatComma(d.value) + " medal" +
          (d.value > 1 ? "s" : ""))
          .transition()
          .attr("fill-opacity", 1);
       // imgtip.image(d)
       //    .attr("fill-opacity", 1);
  };


  // Handle mouse leaving a data point
  // by disabling the tooltip.
  function mouseout() {
      tooltip.transition()
          .attr("fill-opacity", 0);
      // imgtip.transition()
      //     .attr("fill-opacity", 0);

  };

  // Function to interpolate values for
  // the visualization elements during
  // a transition.
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
});
