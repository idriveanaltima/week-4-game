$(document).ready(function() {

var wins = 0;
var losses = 0;
var crystalNumber = 0;
var crystalTotal = 0;

$("#crystal1").html("<img style='height: 100px; width: 100px; border-radius: 50%' src='assets/images/crystal1.gif'/>")
$("#crystal2").html("<img style='height: 100px; width: 100px; border-radius: 50%' src='assets/images/crystal2.gif'/>")
$("#crystal3").html("<img style='height: 100px; width: 100px; border-radius: 50%' src='assets/images/crystal3.gif'/>")
$("#crystal4").html("<img style='height: 100px; width: 100px; border-radius: 50%' src='assets/images/crystal4.gif'/>")

//function for getting the button value and printing it

$(".row4").on("click", ".crystal", function () {
  if(crystalTotal < crystalNumber) {
    crystalTotal += parseInt($(this).attr("value"));
    $("#crystalTotal").text(crystalTotal);
    } else if (crystalTotal === crystalNumber) {
      wins++;
      $("#wins").text(wins);
      reset();
    }else {
      losses++;
      $("#losses").text(losses);
      reset();
    }
});

//function for generating a random crystal number

function randomCrystal(min, max) {
  crystalNumber = Math.floor(Math.random() * (max - min)) + min;
  $("#randomNumber").text(crystalNumber)
  return crystalNumber
}

function reset () {
  randomCrystal(19,120);
  crystalTotal = 0;
  $("#crystalTotal").text(crystalTotal);
}

randomCrystal(19,120);

});