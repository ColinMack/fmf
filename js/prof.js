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
        connections:["wbuck"],
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
        connections:["lreeves", "cmack"],
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
        connections:["wbuck"],
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
                    shares:5,
                    price:113.21
                },
                {
                    cusip:464287291,
                    shares:3,
                    price:120.17
                },
                {
                    cusip:464285105,
                    shares:15,
                    price:12.04
                }
            ]

        },
        {
            name:"Colin's Investment Portfolio",
            fund_type:"individual",
            deposited: 5000,
            contents:[
                {
                    cusip:464288596,
                    shares:2,
                    price:113.21
                },
                {
                    cusip:464287291,
                    shares:5,
                    price:120.17
                },
                {
                    cusip:464285105,
                    shares:40,
                    price:12.04
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
                    shares:50,
                    price:113.21
                },
                {
                    cusip:464287291,
                    shares:13,
                    price:120.17
                },
                {
                    cusip:464285105,
                    shares:70,
                    price:12.04
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

$(".edit").click( function(event){
    if($(event.target).hasClass("active")){
        $(event.target).removeClass("active");
        $(event.target).html("Edit");
        var elem = $(event.target).closest(".prof_block:not(.header)").find(".prof_block.content input:not(.name,.age)").attr("readonly", true).css("color", "black");
    }
    else{
        $(event.target).addClass("active");
        $(event.target).html("Save");
        $(event.target).closest(".prof_block:not(.header)").find(".prof_block.content input:not(.name,.age)").attr("readonly", false).css("color", "#dc7e00");
    }

});

$("#dashButton").click(function(event){
    window.location.href='../dashboard/';
});

$(function() {
    user_info["username"] = user;
    _.each($(".prof_block.content input"), function(input, index){
        $(input).val(user_info[user][$(input).attr("name")]);
    });

    _.each(user_ports[user], function(port, index) {
        var tmpl = _.template($('#port-template').html());
        var elem = $(tmpl(port));
        $("#port_block").append(elem);
    });

    

    loadStats();

});

function loadPorts(){
 return;
}

function loadAcheivements(){
return;
}

function loadStats(){
    var bps_weighted_avg = 0;
    var total_deposited = 0;
    _.each(user_ports[user], function(port, index) {
        if(port.fund_type != "robo" && port.fund_type != "test"){
            var bp_sum = 0;
            _.each(port.contents, function(port){
                bp_sum += port.price * port.shares;
            });
            total_deposited += bp_sum;
        }
    });

    _.each(user_ports[user], function(port, index) {
        var sum = 0;
        var bp_sum = 0;
        _.each(port.contents, function(port){
            if(port.fund_type != "robo" && port.fund_type != "test"){
                bp_sum += port.price * port.shares;
                sum += port_val[port.cusip] * port.shares;
            }
        });
        if(port.fund_type != "robo" && port.fund_type != "test"){
            var bps = ((sum-bp_sum)/bp_sum)*100;

            bps_weighted_avg += bps*(bp_sum/total_deposited);
        }
    });

    $("#weighted_avg_bps").html(bps_weighted_avg.toFixed(2) + "%");
    $("#num_connections").html(user_info[user].connections.length);

}



