var data = [30, 40, 30]
var color = ["#27AFAF", "#117C8E", "#0081C9"]

var loadScatter = function(){

    var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(100);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.population; });

    var svg = d3.select("#piechart").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc").data(data).enter().append("g").attr("class", "arc");

    g.append("path").attr("d", arc).style("fill", function(d, index) { return color[index]; });

};
