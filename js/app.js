var app = angular.module("fmf", []);

$("#nav button").click( function(event){
    window["load" + $(event.target).html() + "Tab"]();
});

$(".port_manage").click( function(event){
    loadManageTab($(event.target).closest(".port").find(".port_name").html());
});

$(".port_compare").click( function(event){
    loadCompareTab($(event.target).closest(".port").find(".port_name").html());
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
    $(".compareNavPort.selected").removeClass("selected");
    $(event.target).closest(".compareNavPort").addClass("selected");
});

$(function() {
    loadHomeTab();
});

function loadHomeTab(username){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html((username != null)?username:"Welcome")

    $("#homeWrapper").show();
    $("#homeButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(0, 94, 184)");
    $("#homeButton").css("border-bottom","0px inset rgb(0, 94, 184)");
    $("#homeButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });
}

function loadManageTab(portname){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");

    $("#banner").html((portname != null)?portname:"Portfolio 1")

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

    $("#banner").html((portname != null)?portname:"Portfolio 1")

    $("#compareWrapper").show();
    $("#compareButton").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", "rgb(39, 175, 175)");
    $("#compareButton").css("border-bottom","0px inset rgb(39, 175, 175)");
    $("#compareButton").animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });

    loadScatter();
}
