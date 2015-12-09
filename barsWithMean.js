var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body").selectAll("div")
.data(dataset)
.enter().append("div")
.attr("class", "bar")
.style("width", function(d) {
  var barWidth = d * 5; //Scale up by factor of 5
  return barWidth + "px";
})
.style("background-color", function(d) {
  return "rgb(0, 0, " + (d * 10) + ")";
})
.text(function(d) {
  return d;
});

d3.selectAll("div")
.data(dataset)
.append("svg")
.attr("width", 125)
.attr("height", 20)
.attr("position", "absolute")
.append("line")
.attr("x1", d3.mean(dataset) * 5)
.attr("y1", 0)
.attr("x2", d3.mean(dataset) * 5)
.attr("y2", 20)
.attr("stroke", "red")
.attr("stroke-width", 3);
