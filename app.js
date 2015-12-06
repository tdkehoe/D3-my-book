d3.json("http://soda.demo.socrata.com/resource/earthquakes.json?$where=magnitude > 5.5", function(error, dataset) {
  if (error) {
    console.log(error);
  } else {
    console.log(dataset);
    d3.select("body").selectAll("p")
    .data(dataset)
    .enter().append("div")
    .attr("class", "bar")
    .style("width", function(d) {
      var barWidth = (d.magnitude -5) * 500;
      return barWidth + "px";
    })
    .text(function(d) {
      return d.region;
    })
  }
});
