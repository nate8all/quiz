/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore = 0;
    });

});

function quest1(answer){
    if (answer === "pizza") {
        return 3;
    }
    else if (answer === "chicken"){
        return 6;
    }
    else if (answer === "fish") {
        return 9;
    }
    else {
        return 12;
    }
}
