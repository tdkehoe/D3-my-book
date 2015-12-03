d3.csv("food.csv", function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
