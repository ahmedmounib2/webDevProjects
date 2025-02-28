function rollDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  return randomNumber;
}

var x = rollDice();
var y = rollDice();
document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "./images/dice" + x + ".png");
document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "./images/dice" + y + ".png");

// draw
if (x == y) {
  document.querySelector("h1").innerHTML = "<em>Draw!</em>";
}
//win
else if (x > y) {
  document.querySelector("h1").innerHTML = "<em>🎉 Player 1 Wins!</em>";
} else {
  document.querySelector("h1").innerHTML = "<em>Player 2 Wins! 🎉</em>";
}
