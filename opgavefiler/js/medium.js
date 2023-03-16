/* Opgave 1*/

let myBall = document.getElementById("ballOne");
let myBuhButton = document.getElementById("buhOneButton");

myBuhButton.addEventListener("click", () => {
  myBall.classList.toggle("animateRight");
});

/*opgave 2*/

let myBalls = document.getElementsByClassName("balls");
let myBuhTwoButton = document.getElementById("buhTwoButton");

myBuhTwoButton.addEventListener("click", () => {
  for (const myBall of myBalls) {
    myBall.classList.toggle("animateRight");
  }
});

/*opgave 3*/

const myHardBalls = document.getElementsByClassName("hardBalls");
let mybuhThreeButton = document.getElementById("buhThreeButton");

mybuhThreeButton.addEventListener("click", () => {
  let direction = "right";

  for (const OneSingleBalls of myHardBalls) {
    if (direction == "right") {
      OneSingleBalls.classList.toggle("animateRight");
      direction = "left";
    } else {
      OneSingleBalls.classList.toggle("animateLeft");
      direction = "right";
    }
  }
});
