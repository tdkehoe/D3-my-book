d3.json("lucy-techSkills.json", function(error, dataset) {
  if (error) {
    console.log(error);
  } else {
    console.log(dataset);
    d3.select(".techSkills").selectAll("div")
    .data(dataset)
    .enter().append("div")
    .attr("class", "bar")

    // d3.selectAll("div")
    // .text(function(d) { // labels
    //   return d.subject;
    // });


    .style("width", function(d) { // creates bar graph
      var barWidth = (d.score) * 50;
      return barWidth + "px";
    })
    .style("background-color", function(d) { // bar graph background color
      return "rgb(0, 0, " + (d.score * 25) + ")";
    });

  }
});

d3.json("lucy-socialSkills.json", function(error, dataset) {
  if (error) {
    console.log(error);
  } else {
    console.log(dataset);
    d3.select(".socialSkills").selectAll("div")
    .data(dataset)
    .enter().append("div")
    .attr("class", "bar")
    .style("width", function(d) {
      var barWidth = (d.score) * 50;
      return barWidth + "px";
    })
    .style("background-color", function(d) {
      return "rgb(0, " + (d.score * 25) + ", 0)";
    })
    .text(function(d) {
      return d.subject;
    });
  }
});
