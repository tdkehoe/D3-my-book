var dataset = [ 5, 10, 15, 20, 25 ];

// d3.select("body").selectAll("div")
// .data(dataset)
// .enter()
// .append("div")
// .attr("class", "bar")
// .style("width", function(d) {
//   var barWidth = d * 5; //Scale up by factor of 5
//   return barWidth + "px";
// })
// .text(function(d) {
//   return d;
// })
// .style("background-color", function(d) {
//   return "rgb(0, 0, " + (d * 10) + ")";
// });




var dataset = [ 5, 10, 15, 20, 25 ];

d3.data(dataset)
.select("body")
.append("p")
.text(dataset);

console.log(dataset);
