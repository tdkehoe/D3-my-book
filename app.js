// d3.json("food.json", function(error, dataset) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(dataset);
//     d3.select("body").selectAll("p")
//     .data(dataset)
//     .enter().append("p")
//     .text(function(d) {
//       return (d.Food);
//     });
//   }
// });



d3.json("https://bonus.ly/api/v1/users?access_token=296b9968b8c684d371232d6dfe64ca3d", function(error, dataset) {
  if (error) {
    console.log(error);
  } else {
    console.log(dataset);
    var dataArray = [];
    dataArray.push(dataset);
    console.log(dataArray);
    d3.select("body").selectAll("p")
    .data(dataArray)
    .enter().append("p")
    .text(function(d) {
      return (d.success);
    });
  }
});



// d3.select("body").selectAll("p")
// .data(dataset)
// .enter().append("p")
// .text(function(d) {return d;} );

// var dataset = [ 5, 10, 15, 20, 25 ];

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




// d3.select("body")
// .data(dataset)
// .enter()
// .append("p")
// .text(function(d) {
//   return d;
// });
