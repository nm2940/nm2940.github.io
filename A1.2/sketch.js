function setup() {
  createCanvas(640, 480);
}

function draw() {
	background('red');
	var s=second();
	var m=minute();
	var h=hour();
    //hour
	text(h + ":    :",60,250);
	textSize(120);
    //minute
    push();
	var min = map(m,0,60,0,60);
	rect(250,0,80,min*8);
    //second
    var sec = map(s,0,60,0,360);
    ellipse(500,200,sec/2,sec/2);
    rotate(sec);
}


