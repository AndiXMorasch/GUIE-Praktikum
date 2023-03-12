//Startcode from:http://www.w3bai.com/de/js/tryit.php?filename=tryjs_addeventlistener_add_many

var x = document.getElementById("farbe");
x.addEventListener("click", red);
x.addEventListener("touchstart", zufallsfarbe);

var y = document.getElementById("farbe1");
y.addEventListener("click", red);
y.addEventListener("touchstart", zufallsfarbe);

var z = document.getElementById("farbe2");
z.addEventListener("click", red);
z.addEventListener("touchstart", zufallsfarbe);




function red(){
    document.getElementById("farbe").style.backgroundColor ='red';
    document.getElementById("farbe").innerHTML = "Clicked";
}

function zufallsfarbe() {
    var Zufallsfarbe = "";
    for (var zaehler = 1; zaehler < 7; zaehler++) {
     var Farbe = "0123456789ABCDEF";
     var RND = Math.round(Math.random() * 15);
     Zufallsfarbe += Farbe.substr(RND, 1);
    }

    document.getElementById("farbe").style.backgroundColor = "#" + Zufallsfarbe;
    document.getElementById("farbe").innerHTML = "Tapped";
   }

   // Quellen: https://stackoverflow.com/questions/1484506/random-color-generator
  // https://www.mediaevent.de/javascript/touch-events.html
  // https://www.w3schools.com/jsref/obj_touchevent.asp
  // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
