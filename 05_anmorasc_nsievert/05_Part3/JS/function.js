function rollTheDice() {
var rand = Math.floor(Math.random()*6)+1;
var diceone = "IMG/w"+rand+".png";

var rand1 = Math.floor(Math.random()*6)+1;
var dicetwo = "IMG/w"+rand1+".png";

if (rand1 == 2 && rand == 1 || rand1 == 1 && rand == 2) {
      document.getElementById('meier').innerHTML="MEIER"; }
else {document.getElementById('meier').innerHTML="";}

if (rand >= rand1) {
      document.querySelector('.dice1').setAttribute('src', diceone);
      document.querySelector('.dice2').setAttribute('src', dicetwo);
      document.getElementById('dice1text').innerHTML=rand;
      document.getElementById('dice2text').innerHTML=rand1;
} else {
      document.querySelector('.dice1').setAttribute('src', dicetwo);
      document.querySelector('.dice2').setAttribute('src', diceone);
      document.getElementById('dice2text').innerHTML=rand;
      document.getElementById('dice1text').innerHTML=rand1;
}
}

//Quellen:  https://www.w3schools.com/js/js_comparisons.asp
//          https://codepen.io/Pyremell/pen/eZGGXX/
//          https://www.youtube.com/watch?v=T7JNHDFp7UI&ab_channel=vfxdojo
