function setup() {
  createCanvas(640, 480);
}

function draw() {
	background('red');
	var s=second;
	var m=minute;
	var h=hour;

	text(h+':'+m+':'+s,5,50);


}


