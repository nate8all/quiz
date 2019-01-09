/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var spiritAnimal = "TBD";
        var imgSrc = "https://spiritanimals.scholastic.com/assets/spiritanimals/landing/logo-b0b83afaa952bed75631a3433b4fcc7c.png";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var totalScore = 0;
        totalScore += quest1(q1Result);
        totalScore += quest2(q2Result);
        totalScore += quest3(q3Result);
        totalScore += quest4(q4Result);
        totalScore += quest5(q5Result);
    });

});

function quest1(answer){
    if (answer.length <= 4) {
        return 3;
    }
    else if (answer.length >= 4 && answer.length < 6){
        return 9;
    }
    else if (answer.length >= 6 && answer.length < 8) {
        return 6;
    }
    else {
        return 12;
    }}
    
function quest2(answer){
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
    }}
    
function quest3(answer){
    if (answer === "Tokyo") {
        return 12;
    }
    else if (answer === "Brazil"){
        return 6;
    }
    else if (answer === "Sydney") {
        return 9;
    }
    else {
        return 3;
    }}
    
function quest4(answer){
    if (answer.length <= 4) {
        return 4;
    }
    else if (answer.length >= 4 && answer.length < 6){
        return 6;
    }
    else if (answer.length >= 6 && answer.length < 8) {
        return 8;
    }
    else {
        return 10;
    }}

function quest5(answer){
    if (answer === "Hip Hop") {
        return 3;
    }
    else if (answer === "Rock n Roll"){
        return 6;
    }
    else if (answer === "Classical") {
        return 9;
    }
    else {
        return 12;
    }}
