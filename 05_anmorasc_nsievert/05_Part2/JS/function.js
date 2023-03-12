var countDownDate = new Date("May 02, 2021 24:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
hours = zweistelligefuehrendeNull(hours);
minutes = zweistelligefuehrendeNull(minutes);
seconds = zweistelligefuehrendeNull(seconds);

document.getElementById("demotage").innerHTML = days + " Tag";
document.getElementById("demouhrzeit").innerHTML = hours + ":" + minutes + ":" + seconds;

function zweistelligefuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0': '') + zahl;
		return zahl;
}

if (days > 1) {
    document.getElementById("demotage").innerHTML = days + " Tag"+"e";
    document.getElementById("demouhrzeit").innerHTML = hours + ":" + minutes + ":" + seconds;
}

if (days < 1) {
    document.getElementById("demotage").innerHTML = days + " Tag"+"e";
    document.getElementsByTagName('html')[0].style.backgroundColor = 'red';
}

if (minutes < 5) {
		document.getElementById('audiofile').play();
}

if (distance < 0) {
    document.getElementById("demotage").innerHTML = "zu";
    document.getElementById("demouhrzeit").innerHTML = "spät!";
    document.getElementsByTagName('html')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('h1')[0].style.color = 'black';
    document.getElementsByTagName('h1')[1].style.color = 'black';
}

}, 1000);

// Quellen: 	https://www.w3schools.com/jsref/met_win_setinterval.asp
//						https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
//						https://www.w3schools.com/howto/howto_js_countdown.asp
//						https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
