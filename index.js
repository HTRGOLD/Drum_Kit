// This finds the first button and waits to listen for the first click and then it runs the code in the function "handleClick"
// We don't put it as handleClick() right away (also called straight away method call) because if you were to open the page, it'll immediately call that function. Instead, we want to set it as we wait for
// that click/action to happen AND THEN it passes the function as an input so it can be called at a later time.

// Detecting Button Press
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

// Detecting Keyboard press

document.addEventListener("keydown", function (e){
    makeSound(e.key);
    buttonAnimation(e.key);
    });

function makeSound(key) {
    switch(key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default: console.log();
    }

}

// When the button is pressed or clicked, the button will light up!
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);

  }
