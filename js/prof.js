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

$(".edit").click( function(event){
    if($(event.target).hasClass("active")){
        $(event.target).removeClass("active");
        $(event.target).html("Edit");
        $(event.target).closest(".prof_block:not(.header)").find(".prof_block.content input:not(.name,.age)").attr("readonly", true);
    }
    else{
        $(event.target).addClass("active");
        $(event.target).html("Save");
        $(event.target).closest(".prof_block:not(.header)").find(".prof_block.content input:not(.name,.age)").attr("readonly", false);
    }

});

$("#dashButton").click(function(event){
    window.location.href='../';
});



