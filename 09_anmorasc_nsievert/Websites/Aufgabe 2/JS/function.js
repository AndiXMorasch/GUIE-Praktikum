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

numberGenerator(arrayOfUniqueNumbers);

var items = [];

for(var i = 0; i < numberOfItems; i++) {
    var cell = arrayOfUniqueNumbers[i]; 
    var row = Math.floor(cell/elementsCountX);
    var column = cell-row*elementsCountX;

    console.log('row: ' + row + ' column: ' + column);

    items[i] = document.createElement('img');
    items[i].setAttribute("src", "./IMG/pinata.png") ;
    items[i].setAttribute("width", pinataWidth);
    items[i].setAttribute("height", pinataHeight);
    items[i].style.position ='absolute';
    items[i].style.left = column*pinataWidth +'px';
    items[i].style.top = row*pinataHeight + 'px';

    document.getElementById("item").appendChild(items[i]);
}
console.log('teste Zufallszahlen ohne Wiederholung: ' +arrayOfUniqueNumbers);
}
//Test
// Nummernvergabe an die pinatas
 var x = 12345687; 
 document.getElementById("test").innerHTML =
 x.toString();

var Nummernvergabe = [];

 var pinataGenerator = function (pinataNummer) {
    if (pinataNummer.length >= numberOfItems) return; 
        var newNumber = Math.floor(Math.random()* numberOfItems);
    if (pinataNummer.indexOf(newNumber) < 0) {
        pinataNummer.push(newNumber);
    }
    numberGenerator(pinataNummer);
}

// Test ende

