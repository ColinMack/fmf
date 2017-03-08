var app = angular.module("fmf", []);

var port_val = {
    464288596:141.98,
    464287291:148.94,
    464285105:40.81
};

var port_val_year_start = {
    464288596:135.50,
    464287291:101.36,
    464285105:35.90
};

var port_info = {
    0:{
        description:"FMF ROBO-ADVISED FUND",
    },
    464288596:{
        market:"United States",
        asset_class:"Fixed Income",
        description:"ISHARES GOVERNMENT CREDIT BOND ETF",
        ticker:"GBF US",
        currency:"USD",
        risk_region_country:"United States",
        SEDOL:"B1MYR16"
    },
    464287291:{
        market:"United States",
        asset_class:"Equity",
        description:"ISHARES GLOBAL TECH ETF",
        ticker:"IXN US",
        currency:"USD",
        risk_region_country:"World All",
        SEDOL:"2819204"
    },
    464285105:{
        market:"United States",
        asset_class:"Commodity",
        description:"ISHARES GOLD TRUST",
        ticker:"IAU US",
        currency:"USD",
        risk_region_country:"United States",
        SEDOL:"B05ND15"
    }
};

var user_info = {
    cmack: {
        fname:"Colin",
        lname:"Mack"
    },
    wbuck: {
        fname:"Weston",
        lname:"Buck"
    }
}

var user_ports = {
    cmack: [
        {
            name:"Colin's College Savings",
            fund_type:"529",
            deposited: 1500,
            contents:[
                {
                    cusip:464288596,
                    shares:5
                },
                {
                    cusip:464287291,
                    shares:3
                },
                {
                    cusip:464285105,
                    shares:15
                }
            ]

        },
        {
            name:"Colin's Investment Portfolio",
            fund_type:"individual",
            deposited: 500,
            contents:[
                {
                    cusip:464288596,
                    shares:25
                },
                {
                    cusip:464287291,
                    shares:13
                },
                {
                    cusip:464285105,
                    shares:15
                }
            ]

        },
        {
            name:"Colin's Test Portfolio",
            fund_type:"test",
            deposited: 10000,
            contents:[
                {
                    cusip:464288596,
                    shares:8
                },
                {
                    cusip:464287291,
                    shares:4
                },
                {
                    cusip:464285105,
                    shares:10
                }
            ]

        },
        {
            name:"Colin's Robo Fund",
            fund_type:"robo",
            deposited: 1000
        }
    ],
    wbuck: [
        {
            name:"Weston's College Savings",
            fund_type:"529",
            deposited: 1500,
            contents:[
                {
                    cusip:464288596,
                    shares:5
                },
                {
                    cusip:464287291,
                    shares:3
                },
                {
                    cusip:464285105,
                    shares:15
                }
            ]

        },
        {
            name:"Weston's Investment Portfolio",
            fund_type:"individual",
            deposited: 500,
            contents:[
                {
                    cusip:464288596,
                    shares:25
                },
                {
                    cusip:464287291,
                    shares:13
                },
                {
                    cusip:464285105,
                    shares:15
                }
            ]

        },
        {
            name:"Weston's Test Portfolio",
            fund_type:"test",
            deposited: 10000,
            contents:[
                {
                    cusip:464288596,
                    shares:8
                },
                {
                    cusip:464287291,
                    shares:4
                },
                {
                    cusip:464285105,
                    shares:10
                }
            ]

        },
        {
            name:"Weston's Robo Fund",
            fund_type:"robo",
            deposited: 1000
        }
    ]
};

var user = "cmack"

$("#nav button").click( function(event){
    window["load" + $(event.target).html() + "Tab"]();
});

$(".homeBlockCourse").click(function(event){
    loadLearnTabCourse($(event.target).closest("table").find(".courseTitle").html());
});

$(".socialRank").click(function(event){
    loadCompareTab("Social Stats");
});

$("#goToAllCoursesButton").click(function(){
    loadLearnTabCourse();
});
$("#goToAllInsightsButton").click(function(){
    loadLearnTab();
});


$("#goToSocialStatsButton").click(function(event){
    loadCompareTab("Social Stats");
});

$(".compareNavPort").click(function(event){

});

$(function() {
    loadHomeTab();
});

function loadHomeTab(){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html((user_info[user].fname != null)?"Welcome, " + user_info[user].fname + "!":"Welcome")

    $("#homeWrapper").show();
    $("#homeButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(0, 94, 184)");
    $("#homeButton").css("border-bottom","0px inset rgb(0, 94, 184)");
    $("#homeButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });

    _.each(user_ports["cmack"], function(port, index) {
        var tmpl = _.template($('#port-template').html());
        var elem = $(tmpl(port));
        var sum = 0;
        var bp_sum = 0;
        _.each(port.contents, function(port){
            bp_sum += port_val_year_start[port.cusip] * port.shares;
            sum += port_val[port.cusip] * port.shares;
        });
        elem.find(".port_val").html("$" + Math.round(sum*100)/100);
        
        elem.find(".port_bps").html((port.fund_type != "robo")?(Math.round(((sum-bp_sum)/bp_sum)*100)/100 + "%"):"");


        var row = $("#port_row" + Math.floor(index/2+1) + " #port" + (index%2+1));
        row.ready(function() {
            row.html(elem.get(0));
            $(".port_manage").click( function(event){
                loadManageTab($(event.target).closest(".port").find(".port_name").html());
            });

            $(".port_compare").click( function(event){
                loadCompareTab($(event.target).closest(".port").find(".port_name").html());
            });
        });
    });
    
}

function loadManageTab(portname){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html((portname != null)?portname:user_ports[user][0].name)

    $("#manageWrapper").show();
    $("#manageButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(0, 129, 201)");
    $("#manageButton").css("border-bottom","0px inset rgb(0, 129, 201)");
    $("#manageButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });

}

function loadLearnTab(){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html("Market Insights")

    $("#learnWrapper").show();
    $("#learnButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(17, 124, 142)");
    $("#learnButton").css("border-bottom","0px inset rgb(17, 124, 142)");
    $("#learnButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });
}

function loadLearnTabCourse(course){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html((course != null)?course:"All Courses")

    $("#learnWrapper").show();
    $("#learnButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(17, 124, 142)");
    $("#learnButton").css("border-bottom","0px inset rgb(17, 124, 142)");
    $("#learnButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });
}

function loadCompareTab(portname){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html((portname != null)?portname:user_ports[user][0].name)

    loadPieChart((portname != null)?(_.filter(user_ports[user], function(d){if(d.name==portname)return d;}))[0]:user_ports[user][0]);

    $("#compareNav").empty();
    _.each(user_ports["cmack"], function(port, index) {
        var tmpl = _.template($('#compareNav-template').html());
        var elem = $(tmpl(port));
        if(index==0){
            elem.addClass("selected");
        }
        $("#compareNav").append(elem);
    });
    $(".compareNavPort").click(function(event) {
        $(".compareNavPort.selected").removeClass("selected");
        var navPort = $(event.target).closest(".compareNavPort")
        navPort.addClass("selected");
        loadPieChart(_.filter(user_ports[user], function(d){if(d.name==navPort.find(".portName").html())return d;})[0]);
        $("#banner").html(navPort.find(".portName").html());
    });

    $("#compareWrapper").show();
    $("#compareButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(39, 175, 175)");
    $("#compareButton").css("border-bottom","0px inset rgb(39, 175, 175)");
    $("#compareButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });

    
}
