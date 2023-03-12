var iconWidth = 90;
var iconHeight = 100;

window.onload=function(){
    setIcon();
}

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

// Quelle: Vorlesung: Herr Schöning (27.05.2021)
