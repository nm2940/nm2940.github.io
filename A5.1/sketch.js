var num = 2000; 
var range = 6;

var ax = [];
var ay = [];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(hour());
}

function draw() {
  background(51);

  fill(0);
  textSize(30);
  text("Play wih Brownian Motion",20,20);


  // Shift all elements 1 place to the left
  for ( var i = 2; i < num; i++ ) {
    ax[i - 2] = ax[i];
    ay[i - 2] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-1,1)*minute();
  ay[num - 1] += minute()*random(-1,1);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    var val = j / num * 204.0 + 51;
    stroke(val);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    //fill(150,120);
    //ellipse(ax[j], ay[j],second()/2,second()/2);
  }


}