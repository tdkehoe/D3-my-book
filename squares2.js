var makeSquare = function(canvasWidth, canvasHeight, position, x, y, width, height, fill) {
  d3.select("body")
  .append("svg")
  .attr("width", canvasWidth)
  .attr("height", canvasHeight)
  .style("position", position)
  .append("rect")
  .attr("x", x)
  .attr("y", y)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", fill);
};

makeSquare(500, 50, "absolute", 0, 0, 30, 30, "purple");
makeSquare(500, 50, "absolute", 20, 5, 30, 30, "blue");
makeSquare(500, 50, "absolute", 40, 10, 30, 30, "green");
makeSquare(500, 50, "absolute", 60, 15, 30, 30, "yellow");
makeSquare(500, 50, "absolute", 80, 20, 30, 30, "red");
