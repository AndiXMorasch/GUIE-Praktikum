var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

console.log('Width: ' + windowWidth + ' Height: ' + windowHeight);

function wischen(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    document.getElementById("coordinates").innerHTML = "Coordinates: " + x + ", " + y;
    console.log(event);
  }

//Startcode from: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_touch_touches
function countTouches(event) {
    var z = event.touches.length;
    document.getElementById("fingers").innerHTML = "Current fingers on screen: " + z;
  }

//Endcode from: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_touch_touches

//Startcode from: https://stackoverflow.com/questions/28378375/click-event-counter-in-javascript/28378584

// Use an IIFE to hold count and reference to element in a closure
var addUp = (function(zählen) {
  var count = 0;


  return function (zählen) {
    var element = document.getElementById("number");
    if (element) element.innerHTML = ++count;
  }
}());

// Attach as a listener
document.addEventListener("click", addUp, false);
document.addEventListener("touch", addUp,false);

//Endcode from: https://stackoverflow.com/questions/28378375/click-event-counter-in-javascript/28378584

//Startcode from:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dom

document.getElementById("website").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("gesture").innerHTML = "Gesture: clicked";
}

document.getElementById("website").ontouchstart = function() {tapped()};

function tapped() {
  document.getElementById("gesture").innerHTML = "Gesture: tapped";
}


//Endcode from:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dom
