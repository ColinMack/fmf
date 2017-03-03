var app = angular.module("fmf", []);

$("#nav button").click( function(event){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");
    $("#masthead").css("box-shadow", "0px 1px 80px " + "rgba(" + $(event.target).css("color").replace(/[^0-9$.,]/g, '') + ", 0.3)");
    $("#" + $(event.target).val() + "Wrapper").show();
    $("#" + $(event.target).val() + "Button").css("font-size", "24px");
    $("body").css("background-color", "rgba(" + $(event.target).css("color").replace(/[^0-9$.,]/g, '') + ", 0.7)");
    $(event.target).css("border-bottom","3px inset "+ $(event.target).css("color"));
});

$(".port").mouseover( function(event){
    $(event.currentTarget).find("#managecompare").show();
});
$(".port").mouseout( function(event){
    $(event.currentTarget).find("#managecompare").hide();
});


$(function() {
    $("#tabWrapper .tab").hide();
    $("#homeWrapper").show();
    $("#homeButton").css("font-size", "24px")
    $("#masthead").css("box-shadow", "0px 1px 80px rgba(0, 94, 184, 0.3)");
    $("body").css("background-color", "rgba(0, 94, 184, 0.7)");
    $("#homeButton").css("border-bottom","3px inset rgb(0, 94, 184)");
});