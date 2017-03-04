var app = angular.module("fmf", []);

$("#nav button").click( function(event){
    $("#tabWrapper .tab").hide();
    $("#nav button").css("border-bottom", "none");
    $("#nav button").css("font-size", "20px");
    $("#" + $(event.target).val() + "Wrapper").show();
    $("#" + $(event.target).val() + "Button").animate({fontSize:'24px'},{ duration: 200, queue: false });
    $("#banner").css("background-color", $(event.target).css("color"));
    $(event.target).css("border-bottom","0px inset "+ $(event.target).css("color"));
    $(event.target).animate({borderBottomWidth:'3px'}, { duration: 200, queue: false });
});

$(".port").mouseover( function(event){
    $(event.currentTarget).find("#managecompare div").show();
});
$(".port").mouseout( function(event){
    $(event.currentTarget).find("#managecompare div").hide();
});


$(function() {
    $("#tabWrapper .tab").hide();
    $("#homeWrapper").show();
    $("#homeButton").css("font-size", "24px")
     $("#banner").css("background-color", "rgb(0, 94, 184)");
    $("#homeButton").css("border-bottom","3px inset rgb(0, 94, 184)");
});
