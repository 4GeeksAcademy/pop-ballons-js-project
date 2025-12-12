import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const balloonPopper = document.querySelector("#balloon-pop")
  // create an array of colors
  const colors = ['red', 'blue', 'green', 'yellow']
  // Variable to keep track of remaining balloons
  let balloonsRemaining = 0;


  function createBalloon() {
    // bellow is the var that i created and the one im gonna be using inside the appendChild 'balloon'
    const balloon = document.createElement('div')
    //this is how i style using .css bellow to line 19 
    balloon.style.backgroundColor = 'red'
    balloon.style.borderRadius = '50%'
    // balloon.style.height = '150px'
    balloon.style.width = '25%'
    // This property ensures that the element maintains a perfect square shape
    balloon.style.aspectRatio = "1 / 1"
    balloon.style.backgroundColor = getRandomColor()
    balloon.className = 'col-3'
    balloon.addEventListener("click", function (e) {
      // we add the parameter balloon with function name //Pass the event target to ensure we are referencing the clicked element
      makeBalloonDisappear(balloon)
    })
    //  this how i added to the balloonPopper 'div'
    balloonPopper.appendChild(balloon)
    balloonsRemaining++; // added Increment count when a balloon is created
  };
  // this function would pop the balloon 
  function makeBalloonDisappear(balloon) {
    balloon.style.backgroundColor = null
    balloonsRemaining--; // Decrement count when popped
    console.log(`Balloons left: ${balloonsRemaining}`);
    // Optional: Check if all balloons are popped by the user
    if (balloonsRemaining === 0) {
      alert("You popped all the balloons! Game Over!");
    }
  }
  // this function will select a random color from Array 'colors'
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
  }
  // this is how i loop it 20 times
  for (let i = 0; i < 12; i++) {
    createBalloon()
  }
  // ADD TIMER LOGIC HERE
  function endGame() {
    // Select all divs inside balloonPopper that still have a background color (haven't been popped)
    const remainingBalloons = document.querySelectorAll('#balloon-pop div[style*="background-color"]');

    remainingBalloons.forEach(balloon => {
      makeBalloonDisappear(balloon);
    });

    alert("Time is up! The game has ended.");
    // Optional: Prevent further clicking after time runs out
    balloonPopper.style.pointerEvents = 'none';
  }

  // Set the timer: 30000 milliseconds = 30 seconds
  const gameDurationMs = 10000;
  setTimeout(endGame, gameDurationMs);

  console.log(`Game started. Timer set for ${gameDurationMs / 1000} seconds.`);
}

