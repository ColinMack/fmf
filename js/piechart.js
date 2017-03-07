var data = [
	{
		fund_type:"U.S. Stocks",
		shares: 35,
		color: "#27AFAF"
	}, 
	{
		fund_type:"European Stocks",
		shares: 42,
		color:"#82bc00"
	}/*, 
	{
		fund_type:"Asian Stocks",
		shares: 130,
		color:"#0081C9"
	},
	{
		fund_type:"Emerging Markets Stocks",
		shares: 70,
		color:"orange"
	}*/
];
var color = ["#27AFAF", "#82bc00", "#0081C9"]

var loadScatter = function(){
    $("#piechart").empty();

    var width = 400,
    height = 400,
    radius = Math.min(width, height) / 2;

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(125);

    var pie = d3.pie().sort(null).value(function(d) {
    	return d.shares; 
    });

    var tooltip = $("#piechart_tooltip");
    var default_tooltip = $("#piechart_tooltip_default tbody");

    var default_content = default_tooltip.find(".content").empty();

    var total = d3.sum(data.map(function(d) {
        return d.shares;
    }));

    _.each(data, function(fund){
        var percent = Math.round(1000 * fund.shares / total) / 10;
    	default_content.append("<tr><td class=\"percent\">" + percent +  "%</td><td class=\"label\" style=\"color:" + fund.color + "\">" + fund.fund_type + "</td><tr>");
    });

    var svg = d3.select("#piechart").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");

    var path = g.append("path").attr("d", arc).style("fill", function(d) { 
        return d.data.color; 
    });

    path.on('mouseover', function(d) {
    	default_tooltip.hide();
        var percent = Math.round(1000 * d.data.shares / total) / 10;
        tooltip.find('.label').html(d.data.fund_type);
        tooltip.find('.label').css("color", d.data.color);
        tooltip.find('.shares').html(d.data.shares + " Shares");
        tooltip.find('.percent').html(percent + "%");
        tooltip.show();
    });
      
	path.on('mouseout', function() {
		tooltip.hide();
		default_tooltip.show();
	});   

};
