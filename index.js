let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// function and for loop, use "this" for when you click on an instrument
for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);//make sound when clicked

    buttonAnimation(buttonInnerHTML);

  });

}

// another function, but it is about keypress, when you play a key or instrument
document.addEventListener("keypress", function(event) {

  makeSound(event.key);//creates sound when hitting a key

  buttonAnimation(event.key);

});

// Function keys and sound
function makeSound(key) {

  switch (key) {
    case "s":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "f":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "j":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "ñ":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;


    default: console.log(key);

  }
}

// animation when you click or touch the "instrument"
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  // button release timer

}
