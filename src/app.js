import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const balloonPopper = document.querySelector("#balloon-pop")
  // create an array of colors
  const colors = ['red', 'blue', 'green', 'yellow']

  function createBalloon() {
    // bellow is the var that i created and the on eim gonna be using inside the appendChild 'balloon'
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
    balloon.addEventListener("click", function (e){
      // we add the parameter balloon with function name
      makeBalloonDisappear(balloon)
    })
    //  this how i added to the balloonPopper 'div'
    balloonPopper.appendChild(balloon)
  };
  // this function would pop the balloon 
  function makeBalloonDisappear(balloon){
    balloon.style.backgroundColor = null
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
};
