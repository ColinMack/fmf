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
        lname:"Mack",
        about_me:"Handsome, suave",
        age_group:"18-24",
        location:"San Francisco",
        school:"Georgetown University",
        employer:"BlackRock",
        available_funds:1000
    },
    wbuck: {
        fname:"Weston",
        lname:"Buck",
        about_me:"Wears glasses",
        age_group:"30+",
        location:"San Francisco",
        school:"Kansas University",
        employer:"BlackRock",
        available_funds:5000
    },
    lreeves: {
        fname:"Lauren",
        lname:"Reeves",
        about_me:"Has friend named Josh",
        age_group:"18-24",
        location:"San Francisco",
        school:"University of Michigan",
        employer:"BlackRock",
        available_funds:5000
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

    var portname = (portname != null)?portname:user_ports[user][0].name;
    var manage_port = user_ports[user][0];
    $("#banner").html(portname);

    $("#manageNav").empty();
    _.each(user_ports["cmack"], function(port, index) {
        var tmpl = _.template($('#nav-template').html());
        var elem = $(tmpl(port));
        if(user_ports[user][index].name==portname){
            elem.addClass("selected");
            manage_port = port;
        }
        $("#manageNav").append(elem);
    });
    $(".navPort").click(function(event) {
        $(".navPort.selected").removeClass("selected");
        var navPort = $(event.target).closest(".navPort")
        navPort.addClass("selected");
        $("#banner").html(navPort.find(".portName").html());
    });


    _.each(funds, function(fund, index) {
        var tmpl = _.template($('#fund-row-template').html());
        fund["price"] = (perf_data_hash[fund.cusip] != null)?perf_data_hash[fund.cusip]['3/10/2017'].toFixed(2):0.00;
        var elem = $(tmpl(fund));
        $("#fund_table").append(elem);
        elem.click(function(event){
            $("#menu_fund").val(fund.description);
            $("#menu_shares").val(1);
            $("#menu_cost").val(fund["price"]);
        });
    });

    /*_.each(manage_port.contents, function(fund, index) {
        var tmpl = _.template($('#fund-row-template').html());
        fund["price"] = (perf_data_hash[fund.cusip] != null)?perf_data_hash[fund.cusip]['3/10/2017'].toFixed(2):0.00;
        var elem = $(tmpl(fund));
        $("#sell_fund_table").append(elem);
        elem.click(function(event){
            $("#sell_menu_fund").val(fund.description);
            $("#sell_menu_shares").val(1);
            $("#sell_menu_cost").val(fund["price"]);
        });
    });*/

    $("#port_new_value").html(portname + " New Value:")
    $("#sell_port_new_value").html(portname + " New Value:")


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

    var portname = (portname != null)?portname:user_ports[user][0].name;
    $("#banner").html(portname);

    $("#compareNav").empty();
    _.each(user_ports["cmack"], function(port, index) {
        var tmpl = _.template($('#nav-template').html());
        var elem = $(tmpl(port));
        if(user_ports[user][index].name==portname){
            elem.addClass("selected");
        }
        $("#compareNav").append(elem);
    });
    $(".navPort").click(function(event) {
        $(".navPort.selected").removeClass("selected");
        var navPort = $(event.target).closest(".navPort")
        navPort.addClass("selected");
        loadPieChart(_.filter(user_ports[user], function(d){if(d.name==navPort.find(".portName").html())return d;})[0]);
        $("#banner").html(navPort.find(".portName").html());
    });
    loadPieChart(_.filter(user_ports[user], function(d){if(d.name==portname)return d;})[0]);
    $("#compareWrapper").show();
    $("#compareButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(39, 175, 175)");
    $("#compareButton").css("border-bottom","0px inset rgb(39, 175, 175)");
    $("#compareButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });

    
}

$("#goToMyProfile").click(function(event){
    window.location.href='profile/';
});

$("#manage_buy").click(function(event){
    $("#sellTab").hide();
    $("#buyTab").show();
});

$("#manage_sell").click(function(event){
    $("#buyTab").hide();
    $("#sellTab").show();
});



