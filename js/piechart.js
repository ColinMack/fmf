var colors = ["#27AFAF", "#82bc00", "#0081C9", "#006747", "#0093639", "#B4DB0A", "#FFCC00", "#FCD015", "#CB333B", "#671E75"]

var loadPieChart = function(data, category){
    if(data.fund_type == "robo"){
        var ports = [{
            cusip:0,
            shares:100
        }]
    }
    else{
        var ports = data.contents;
    }

    var filterData = {};
	_.each(ports, function (port){
        var port_category = port_info[port.cusip][(category)?category:"description"];
		filterData[port_category] = (filterData[port_category])?  (filterData[port_category] + port.shares):port.shares;
	});

    var pieData = [];
    _.each(Object.keys(filterData), function(group, index){
        pieData.push({
            name:group,
            shares:filterData[group],
            color:colors[index]
        });
    });

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

    var total = d3.sum(pieData.map(function(d) {
        return d.shares;
    }));

    _.each(pieData, function(fund){
        var percent = Math.round(1000 * fund.shares / total) / 10;
    	default_content.append("<tr><td class=\"percent\">" + percent +  "%</td><td class=\"label\" style=\"color:" + fund.color + "\">" + fund.name + "</td><tr>");
    });

    var svg = d3.select("#piechart").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc").data(pie(pieData)).enter().append("g").attr("class", "arc");

    var path = g.append("path").attr("d", arc).style("fill", function(d) { 
        return d.data.color; 
    });

    path.on('mouseover', function(d) {
    	default_tooltip.hide();
        var percent = Math.round(1000 * d.data.shares / total) / 10;
        tooltip.find('.label').html(d.data.name);
        tooltip.find('.label').css("color", d.data.color);
        if(data.fund_type != "robo")tooltip.find('.shares').html(d.data.shares + " Shares");
        tooltip.find('.percent').html(percent + "%");
        tooltip.show();
    });
      
	path.on('mouseout', function() {
		tooltip.hide();
		default_tooltip.show();
	});   

};
