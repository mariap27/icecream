var intervalShake, intervalShot;
var liquidSound = new Audio("liquid.mp3");

function startShake() {
  intervalShake = setInterval("shake()", 50);
  intervalShot = setInterval("liquid()", 25000);
}

function shake(){
  var x = Math.round(10*Math.random());
  var y = Math.round(10*Math.random());
  document.getElementById("iceButton").style.top = (50-y)+"%";
  document.getElementById("iceButton").style.left = (50-x)+"%";
}

function liquid(){
  liquidSound.play();
}

function openWindow(){
  window.open("sugar/sugar.html", "_blank", "scrollbars=yes,resizable=yes,top=300,left=50,width=300,height=218,titlebar=no,location=no");
}
