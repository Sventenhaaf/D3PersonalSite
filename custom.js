var svg = d3.select("svg")
var colors = ["#FE6610", "#346164", "#111111", "#346164", "#465D6D", "#346164", "#2C88AF", "#346164", "#00A8AF", "#346164"]
var indices = d3.range(0, colors.length);
svg.selectAll("rect")
    .data(indices, function(d) { return d; })
    .enter()
  .append("rect")
    .attr("class", "block")
    .attr("y", 30)
    .attr("x", function(d, i) { return i * 30 + 10; })
    .attr("width", 20)
    .attr("height", 20)
    .attr('opacity', 0)
    .style("fill", function(d) { return colors[d]; })
    .transition()
      .delay(function(d,i) {
        return Math.pow(i, 1/8) * 500;
      })
      .duration(300)
      .attr('opacity', 1)
      .attr('width', 24)
      .attr('height', 24)
    .transition()
      .duration(100)
      .attr('width', 20)
      .attr('height', 20)
      .ease("out");

var exitdata = [];
indices.forEach(function(el) { if (el % 2 === 0) { exitdata.push(el); }})
update(exitdata);

function update(data) {
  var stayblock = svg.selectAll("rect")
    .data(data, function(d) {return d - 1; })
        .attr("class", "update")
      .transition()
        .delay(1800)
        .duration(500)
        .attr("x", function(d) { return 15 * d + 10 })
        .ease("elastic")

  var byeblocks = svg.selectAll("rect")
    .data(data, function(d) { return d; });

  byeblocks.exit()
      .attr("class", "exit")
    .transition()
      .delay(1200)
      .style("fill", "#4CA8CF")
    .transition()
      .duration(750)
      .attr("y", 160)
      .style("fill-opacity", 1e-6)
      .remove();
}
