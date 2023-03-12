function zufallsfarbe() {
    var Zufallsfarbe = "";
    for (var zaehler = 1; zaehler < 7; zaehler++) {
     var Farbe = "0123456789ABCDEF";
     var RND = Math.round(Math.random() * 15);
     Zufallsfarbe += Farbe.substr(RND, 1);
    }

    document.getElementById("farbe2").style.backgroundColor = "#" + Zufallsfarbe;
   }

   // Quellen: https://stackoverflow.com/questions/1484506/random-color-generator
  // https://www.mediaevent.de/javascript/touch-events.html
  // https://www.w3schools.com/jsref/obj_touchevent.asp
  // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
