//Declaring global variables for the game

var wins = 0;
var losses = 0;
var crystalNumber = 0;
var crystalTotal = 0;
//make sure the dom is loaded before traversing it

$(document).ready(function () {

  // addimg the images to the html

  $("#crystal1").html("<img style='height: 75px; width: 75px; border-radius: 50%' src='assets/images/crystal1.gif'/>")
  $("#crystal2").html("<img style='height: 75px; width: 75px; border-radius: 50%' src='assets/images/crystal2.gif'/>")
  $("#crystal3").html("<img style='height: 75px; width: 75px; border-radius: 50%' src='assets/images/crystal3.gif'/>")
  $("#crystal4").html("<img style='height: 75px; width: 75px; border-radius: 50%' src='assets/images/crystal4.gif'/>")

  //function for getting the button value and printing it

  $(".row4").on("click", ".crystal", function () {
    if (crystalTotal < crystalNumber) {
      crystalTotal += parseInt($(this).attr("value"));
      $("#crystalTotal").text(crystalTotal);
    } else if (crystalTotal === crystalNumber) {
      wins++;
      $("#wins").text(wins);
      reset();
    } else {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  //function for generating a random crystal number

  function randomNumber(min, max) {
    crystalNumber = Math.floor(Math.random() * (max - min)) + min;
    $("#randomNumber").text(crystalNumber)
  }

  //function for resetting the game
  function reset() {
    randomNumber(19, 120);
    crystalTotal = 0;
    $("#crystalTotal").text(crystalTotal);
  }

  //calling the functions on page load

  randomNumber(19, 120);

});