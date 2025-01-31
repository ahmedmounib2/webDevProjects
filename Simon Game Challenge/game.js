buttonColours = ["blue", "red", "green", "yellow"];

userClickedPattern = [];
gamePattern = [];

var gameStarted = false;

var level = 0;

$(document).on("keypress", function () {
  if (!gameStarted) {
    $("h1").text('"Level ' + level + '".');

    nextSequence();
    gameStarted == true;
  }
});

function nextSequence() {
  userClickedPattern = [];

  level++;

  $("h1").text('"Level ' + level + '".');

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var selectedButton = $("#" + randomChosenColour);
  selectedButton.fadeOut("fast").fadeIn("fast");
  makeSound(randomChosenColour);
}

$(".btn").on("click", function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  makeSound(this.id);
  animatePress(this.id);
  checkAnswer(userClickedPattern.length - 1);
});

function makeSound(key) {
  switch (key) {
    case "red":
      var redSound = new Audio("./sounds/red.mp3");
      redSound.play();
      break;
    case "blue":
      var blueSound = new Audio("./sounds/blue.mp3");
      blueSound.play();
      break;
    case "green":
      var greenSound = new Audio("./sounds/green.mp3");
      greenSound.play();
      break;
    case "yellow":
      var yellowSound = new Audio("./sounds/yellow.mp3");
      yellowSound.play();
      break;

    default:
      console.log(randomChosenColour);
  }
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var wrongSound = new Audio("./sounds/wrong.mp3");
    wrongSound.play();
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over!, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
