
var touched = 0;

function zufallsfarbe() {
    var Zufallsfarbe = "";
    for (var zaehler = 1; zaehler < 7; zaehler++) {
     var Farbe = "0123456789ABCDEF";
     var RND = Math.round(Math.random() * 15);
     Zufallsfarbe += Farbe.substr(RND, 1);
    }

    document.getElementById("farbe").style.backgroundColor = "#" + Zufallsfarbe;
    document.getElementById("farbe").innerHTML = "Tapped";
    console.log("tap");
    touched = 1;
    event.preventDefault();
   }

   function zufallsfarbe1() {
    var Zufallsfarbe = "";
    for (var zaehler = 1; zaehler < 7; zaehler++) {
     var Farbe = "0123456789ABCDEF";
     var RND = Math.round(Math.random() * 15);
     Zufallsfarbe += Farbe.substr(RND, 1);
    }

    document.getElementById("farbe1").style.backgroundColor = "#" + Zufallsfarbe;
    document.getElementById("farbe1").innerHTML = "Tapped";
}

function zufallsfarbe2() {
    var Zufallsfarbe = "";
    for (var zaehler = 1; zaehler < 7; zaehler++) {
     var Farbe = "0123456789ABCDEF";
     var RND = Math.round(Math.random() * 15);
     Zufallsfarbe += Farbe.substr(RND, 1);
    }

    document.getElementById("farbe2").style.backgroundColor = "#" + Zufallsfarbe;
    document.getElementById("farbe2").innerHTML = "Tapped";
}

function red(){

//    if(touched != 1) {
      document.getElementById("farbe").style.backgroundColor ='red';
      document.getElementById("farbe").innerHTML = "Clicked";
      document.getElementById("farbe1").style.backgroundColor = "rgba(128, 128, 128, 0.274)";
      document.getElementById("farbe2").style.backgroundColor = "rgba(128, 128, 128, 0.274)";
      console.log("click");
//    }
}

function red1(){
    document.getElementById("farbe1").style.backgroundColor ='red';
    document.getElementById("farbe1").innerHTML = "Clicked";
}

function red2(){
    document.getElementById("farbe2").style.backgroundColor ='red';
    document.getElementById("farbe2").innerHTML = "Clicked";
}

// Quellen: https://stackoverflow.com/questions/1484506/random-color-generator
// https://www.mediaevent.de/javascript/touch-events.html
// https://www.w3schools.com/jsref/obj_touchevent.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
