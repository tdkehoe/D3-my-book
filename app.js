// d3.json("food.json", function(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });


var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body")
.data(dataset)
.append("p")
.text(dataset);
