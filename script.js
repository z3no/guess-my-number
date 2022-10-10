"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🥳 Correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //state variable
let score = 20; //state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const changeStyling = function (
  bgColor,
  width,
  height,
  textColor,
  outlineColor
) {
  document.querySelector("body").style.backgroundColor = bgColor;
  document.querySelector(".number").style.width = width;
  document.querySelector(".number").style.height = height;
  document.querySelector(".number").style.color = textColor;
  document.querySelector(".number").style.outlineColor = outlineColor;
  document.querySelector(".button").style.color = textColor;
  document.querySelector(".check").style.color = textColor;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct number!");
    displaySecretNumber(secretNumber);
    changeStyling("#60b347", "18rem", "18rem", "#60b347", "#60b347");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "👆️ The number is too high!"
          : "👇️️ The number is too low!"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
  /*// When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "👆️ The number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "👇️️ The number is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayMessage("Take a guess...!");
  displaySecretNumber("?");
  document.querySelector(".guess").value = "";

  changeStyling("#1544c0", "15rem", "15rem", "#1544c0", "#1544c0");
});
