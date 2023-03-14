var clock = document.getElementsByClassName('clock');


function getCurrentTime() {

var currentDate = new Date();
var mil = currentDate.getMilliseconds();
var sec = currentDate.getSeconds();
var min = currentDate.getMinutes();
var hou = currentDate.getHours();
mil = dreistelligefuehrendeNull(mil);
sec = zweistelligefuehrendeNull(sec);
min = zweistelligefuehrendeNull(min);

var currentClock = hou + ':' + min + ':' + sec + '.' + mil;
console.log(currentClock);

clock[0].innerText = currentClock;
}

function zweistelligefuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0': '') + zahl;
		return zahl;
}

function dreistelligefuehrendeNull(zahl) {
		if (zahl < 10) return '00' + zahl;
		else if (zahl < 100) return '0' + zahl;
		else return '' + zahl;
}

setInterval(getCurrentTime, 1);

//Quellen:		Vorlesung, Herrn Schöning vom 26.04.2021
//						https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Date/Uhr
//						https://www.urbanstudio.de/blog/javascript-uhr-anzeigen-systemzeit/
