var dataset = [ 5, 10, 15, 20, 25 ];

var scaleX = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, 420]);

console.log(scaleX);

d3.select("body").selectAll("div")
.data(dataset)
.enter().append("div")
.attr("class", "bar")

// .style("width", function(d) {
//   var barWidth = scaleX(d);
//   return barWidth + "px";
// })
// .append("div")
// .style("position", "absolute")

// .text(function(d) {
//   return d;
// })

.append("svg")
.attr("width", 420)
.attr("height", 20)
.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", function(d) {
  var barWidth = scaleX(d);
  return barWidth + "px";
})
.attr("height", 20)
.style("fill", "blue")

.append("svg")
.attr("position", "absolute")
.attr("width", 300)
.attr("height", 20)
.append("line")
.attr("x1", scaleX(d3.mean(dataset)))
.attr("y1", 0)
.attr("x2", scaleX(d3.mean(dataset)))
.attr("y2", 20)
.style("stroke", "red")
.style("stroke-width", "3")





;




// d3.select("body")
// .append("svg")
// .attr("width", 500)
// .attr("height", 10)
// .append("line")
// .attr("x1", 100)
// .attr("y1", 0)
// .attr("x2", 100)
// .attr("y2", 10)
// .style("stroke", "red")
// .style("stroke-width", "3");

// d3.select("body")
// .append("svg")
// .attr("width", 50)
// .attr("height", 50)
// .append("circle")
// .attr("cx", 25)
// .attr("cy", 25)
// .attr("r", 22)
// .style("fill", "blue")
// .style("stroke", "gray")
// .style("stroke-width", "2");










// d3.json("lucy-techSkills.json", function(error, dataset) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(dataset);
//     d3.select(".techSkills").selectAll("p")
//     .data(dataset)
//     .enter().append("div")
//     .attr("class", "bar")
//     .style("width", function(d) {
//       var barWidth = (d.score) * 50;
//       return barWidth + "px";
//     })
//
//     .style("width", function(d) {
//       var barWidth = (d.classAverage) * 50;
//       return barWidth + "px";
//     })
//
//     .text(function(d) {
//       return d.subject;
//     })
//     .style("background-color", function(d) {
//       return "rgb(0, 0, " + (d.score * 25) + ")";
//     });
//   }
// });
//
// d3.json("lucy-socialSkills.json", function(error, dataset) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(dataset);
//
//     d3.select(".socialSkills").selectAll("p")
//     .data(dataset)
//     .enter().append("div")
//     .attr("class", "bar")
//     .style("width", function(d) {
//       var barWidth = (d.score) * 50;
//       return barWidth + "px";
//     })
//     .text(function(d) {
//       return d.subject;
//     })
//     .style("background-color", function(d) {
//       return "rgb(0, " + (d.score * 25) + ", 0)";
//     });
//   }
// });
