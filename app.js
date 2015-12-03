d3.json("food.json", function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
