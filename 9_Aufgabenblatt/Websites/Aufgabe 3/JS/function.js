//Bildschirmmaße abfragen
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

console.log('Width: ' + windowWidth + ' Height: ' + windowHeight);

//Länge und Breite von Objekten festlegen
var pinataWidth = 120;
var pinataHeight = 100;

// Math.floor Zahlen abrunden
var elementsCountX = Math.floor(windowWidth/pinataWidth);
var elementsCountY = Math.floor(windowHeight/pinataHeight);
var maxElements = elementsCountX*elementsCountY;
var numberOfItems = 12;
console.log('Spalten: ' + elementsCountX + ' Zeilen: ' + elementsCountY);
console.log('Zellen total: ' + maxElements + ' Piniatas: ' + numberOfItems);

// Zufallszahlengenerator
var arrayOfUniqueNumbers = [];

var numberGenerator = function (liste) {
    if (liste.length >= numberOfItems) return;
        var newNumber = Math.floor(Math.random()* maxElements);
    if (liste.indexOf(newNumber) < 0) {
        liste.push(newNumber);
    }
    numberGenerator(liste);
}

window.onload=function() {
setIcon();
numberGenerator(arrayOfUniqueNumbers);
//pinataGenerator(pinataNummer);

var items = [];


for(var i = 0; i < numberOfItems; i++) {
    var cell = arrayOfUniqueNumbers[i] ;
    var row = Math.floor(cell/elementsCountX);
    var column = cell-row*elementsCountX;
    //var picNumber = Nummernvergabe;

    console.log('row: ' + row + ' column: ' + column);

    items[i] = document.createElement('img');
    items[i].setAttribute("src", "./IMG/pinata0.png") ;
    items[i].setAttribute("width", pinataWidth);
    items[i].setAttribute("height", pinataHeight);
    items[i].style.position ='absolute';
    items[i].style.textAlign = 'center';
    items[i].style.color = 'black';
    items[i].style.top = '50%';
    items[i].style.left = '50%';
    items[i].style.transform = 'translate (-50%,-50%)';
    items[i].style.left = column*pinataWidth +'px';
    items[i].style.top = row*pinataHeight + 'px';

    document.getElementById("item").appendChild(items[i])

}
console.log('teste Zufallszahlen ohne Wiederholung: ' +arrayOfUniqueNumbers);
}
//Test
// Nummernvergabe an die pinatas
 //var x = 12345687;
// document.getElementById("test").innerHTML =
// x.toString();

//var Nummernvergabe = [];

// var pinataGenerator = function (pinataNummer) {
//    if (pinataNummer.length >= numberOfItems) return;
 //       var newNumber = Math.floor(Math.random()* numberOfItems);
 //   if (pinataNummer.indexOf(newNumber) < 0) {
 //      pinataNummer.push(newNumber);
 //   }
 //   pinataGenerator(pinataNummer)
//}

// Test ende

// mouse icon

var iconWidth = 90;
var iconHeight = 100;



function setIcon(){
mouseIcon = document.createElement('img');
mouseIcon.setAttribute("src", "./IMG/kid.png") ;
mouseIcon.setAttribute("width", iconWidth);
mouseIcon.setAttribute("height", iconHeight);
mouseIcon.style.position ='absolute';
mouseIcon.style.left = 50 +'px';
mouseIcon.style.top = 50 + 'px';

document.getElementById("icon").appendChild(mouseIcon);
}

function moveIcon(x,y,movementX) {
    mouseIcon.style.top = y + 'px';
    if(movementX<0){
        mouseIcon.style.transform = 'scaleX(-1)';
        mouseIcon.style.left = x-40 +'px';
}
    else {
    mouseIcon.style.transform = 'scaleX(1)';
    mouseIcon.style.left = x-50 +'px';
}
}

window.addEventListener('mousemove', function(e) {
   console.log(e);
    //var x = e.clientX;
    //var y = e.clientY ;
    moveIcon(e.clientX, e.clientY, e.movementX)
    //var coor = "Coordinates: (" + x + "," + y + ")";
   // document.getElementById("icon").innerHTML = coor;

});

// end mouse icon

// Quelle: Vorlesung: Herr Schöning (27.05.2021)
