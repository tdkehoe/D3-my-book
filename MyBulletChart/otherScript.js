var margin = {top: 5, right: 40, bottom: 20, left: 220},
width = 960 - margin.left - margin.right,
height = 50 - margin.top - margin.bottom;

var chart = d3.bullet()
.width(width)
.height(height);

d3.json("bullets.json", function(error, dataset) {
  if (error) throw error;

  var svg = d3.select(".techSkills").selectAll("svg")
  .data(dataset[0])
  .enter().append("svg")
  .attr("class", "techSkills")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g") // g is the graph?
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .call(chart);

  var title = svg.append("g")
  .style("text-anchor", "end")
  .attr("transform", "translate(-6," + height / 2 + ")");

  title.append("text")
  .attr("class", "title")
  .text(function(d) { return d.title; });

  title.append("text")
  .attr("class", "subtitle")
  .attr("dy", "1em")
  .text(function(d) { return d.subtitle; });

  d3.selectAll("button").on("click", function() {
    svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
  });
});

d3.json("bullets.json", function(error, dataset) {
  if (error) throw error;

  var svg = d3.select(".socialSkills").selectAll("svg")
  .data(dataset[1])
  .enter().append("svg")
  .attr("class", "socialSkills")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g") // g is the graph?
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .call(chart);

  var title = svg.append("g")
  .style("text-anchor", "end")
  .attr("transform", "translate(-6," + height / 2 + ")");

  title.append("text")
  .attr("class", "title")
  .text(function(d) { return d.title; });

  title.append("text")
  .attr("class", "subtitle")
  .attr("dy", "1em")
  .text(function(d) { return d.subtitle; });
});

d3.json("bullets.json", function(error, dataset) {
  if (error) throw error;

  var svg = d3.select(".tmgmtSkills").selectAll("svg")
  .data(dataset[2])
  .enter().append("svg")
  .attr("class", "tmgmtSkills")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g") // g is the graph?
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .call(chart);

  var title = svg.append("g")
  .style("text-anchor", "end")
  .attr("transform", "translate(-6," + height / 2 + ")");

  title.append("text")
  .attr("class", "title")
  .text(function(d) { return d.title; });

  title.append("text")
  .attr("class", "subtitle")
  .attr("dy", "1em")
  .text(function(d) { return d.subtitle; });
});

function randomize(d) {
  if (!d.randomizer) d.randomizer = randomizer(d);
  d.ranges = d.ranges.map(d.randomizer);
  d.markers = d.markers.map(d.randomizer);
  d.measures = d.measures.map(d.randomizer);
  return d;
}

function randomizer(d) {
  var k = d3.max(d.ranges) * .2;
  return function(d) {
    return Math.max(0, d + k * (Math.random() - .5));
  };
}
