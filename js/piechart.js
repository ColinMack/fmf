var data = [30, 40, 30]
var color = ["#27AFAF", "#82bc00", "#0081C9"]

var loadScatter = function(){
    $("#piechart").empty();

    var width = 400,
    height = 400,
    radius = Math.min(width, height) / 2;

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(125);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { 
            return d; 
        });

    var svg = d3.select("#piechart").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");

    g.append("path").attr("d", arc).style("fill", function(d, index) { 
        return color[index]; 
    });

};
