// d3.json("food.json", function(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });


var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body").selectAll("p")
.data(dataset)
.enter()
.append("p")
.text(function(d) {
  return "I can count up to " + d;
})
.style("color", function(d) {
  if (d % 2 == 0) { // if datum is an even number
    return "red";
  } else { // if datum is an odd number
    return "black";
  }
});
