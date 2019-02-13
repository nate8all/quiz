/* global $ */

$(document).ready(function() {
    $("#click").click(function() {
        var spiritAnimal = "TBD";
        var imgSrc = "https://spiritanimals.scholastic.com/assets/spiritanimals/landing/logo-b0b83afaa952bed75631a3433b4fcc7c.png";
        var name = $("#question1").val(); //this is q1
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var totalScore = 0;
        
        name.toLowerCase();
        q2Result.toLowerCase();
        q3Result.toLowerCase();
        q4Result.toLowerCase();
        q5Result.toLowerCase();
        
        totalScore += quest1(name);
        totalScore += quest2(q2Result);
        totalScore += quest3(q3Result);
        totalScore += quest4(q4Result);
        totalScore += quest5(q5Result);
        
        total(totalScore,spiritAnimal);
    });
});
        
function quest1(answer){
    if (answer.length <= 4) {
        //score1 =  3;
        return 3;
    }
    else if (answer.length >= 4 && answer.length < 6){
        //score1 = 9;
        return 9;
    }
    else if (answer.length >= 6 && answer.length < 8) {
        //score1 = 6;
        return 6;
    }
    else {
        //score1 = 12;
        return 12;
    }}
    
function quest2(answer){
    if (answer === "pizza") {
        //score2 = 3;
        return 3;
    }
    else if (answer === "chicken"){
        //score2 = 6;
        return 6;
    }
    else if (answer === "fish") {
        //score2 = 9;
        return 9;
    }
    else {
        //score2 = 12;
        return 12;
    }}
    
function quest3(answer){
    if (answer === "tokyo") {
        //score3 = 12;
        return 12;
    }
    else if (answer === "brazil"){
        //score3 = 6;
        return 6;
    }
    else if (answer === "sydney") {
        //score3 = 9;
        return 6;
    }
    else {
        //score3 = 3;
        return 3;
    }}
    
function quest4(answer){
    if (answer.length <= 4) {
        //score4 = 9;
        return 9;
    }
    else if (answer.length >= 4 && answer.length < 6){
        //score4 = 6;
        return 6;
    }
    else if (answer.length >= 6 && answer.length < 8) {
        //score4 = 3;
        return 3;
    }
    else {
        //score4 = 12;
        return 12;
    }}

function quest5(answer){
    if (answer === "hip hop") {
        //score5 = 3;
        return 3;
    }
    else if (answer === "rock n roll"){
        //score5 = 6;
        return 6;
    }
    else if (answer === "classical") {
        //score5 = 9;
        return 9;
    }
    else {
        //score5 = 12;
        return 12;
    }}
    
function total(score, animal) {
    if (score <= 15) {
        animal = "Duck";
        $(".result").html("<img id='resultphoto' src=\"https://cdn.vox-cdn.com/thumbor/Wd-2zsFlWxXz1HgmGEEwXx5iYBI=/0x0:1000x605/1200x800/filters:focal(420x223:580x383)/cdn.vox-cdn.com/uploads/chorus_image/image/48780381/duck.0.png\">");
        $(".result").append("<h1>Your Spirit Animal is the " + animal + "!</h1>");
        $(".result").append("<h3>Don't be too bummed. The duck is often seen to symbolize freedom, as well as high values and admirable since they posses many skills, like swimming and flying.</h3>");
    }
    else if (score > 15 && score <= 30) {
        animal = "Dolphin";
        $(".result").html("<img id='resultphoto' src=\"https://www.dolphindiscovery.com/imagesNuevo/imgsLocs/anguilla/anguilla-9.jpg?v=7.8.16\">");
        $(".result").append("<h1>Your Spirit Animal is the " + animal + "!</h1>");
        $(".result").append("<h3>Dolphins are known to be gentle, calming, smooth and easy-going. That must be the type of person you are!</h3>");
    }
    else if (score > 30 && score <= 45) {
        animal = "Elephant";
        $(".result").html("<img id='resultphoto' src=\"https://www.futurity.org/wp/wp-content/uploads/2018/08/elephant-close-up_1600.jpg\">");
        $(".result").append("<h1>Your Spirit Animal is the " + animal + "!</h1>");
        $(".result").append("<h3>According to other online sources, the elephant usually symbolizes strength, stability, honor, and perserverance. Go you!</h3>");
    }
    else if (score > 45 && score <= 60) {
        animal = "Lion, King of the Jungle";
        $(".result").html("<img id='resultphoto' src=\"https://www.gannett-cdn.com/presto/2018/10/19/PIND/17898f77-71af-484e-b39f-df4c132c47fd-Nyack.jpg?crop=1395,778,x0,y367&width=3200&height=1680&fit=bounds\">");
        $(".result").append("<h1>Your Spirit Animal is the " + animal + "!</h1>");
        $(".result").append("<h3>In terms of being a spirit animal, a lion can represent strength, assertiveness, might, courage, justice, and many ohers. et out that lion!</h3>");
    }}