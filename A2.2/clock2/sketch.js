
var c1x, c1y, c2x, c2y, c3x, c3y; 
var secondsRadius;
var minutesRadius;
var hoursRadius;


function setup() {

  createCanvas(800, 700);
  stroke(255);

  var radius = min(width, height) / 4; 
  secondsRadius = radius * 0.6;
  minutesRadius = radius * 0.5;
  hoursRadius = radius * 0.4;


  c1x = width / 3;
  c1y = 2*height / 3;
  c2x = 2*width / 3;
  c2y = 2*height / 3;
  c3x = width / 2;
  c3y = height / 3;
}

function draw() {
  background(255);

  noFill();
  stroke(255, 102, 0)
  ellipse(c1x, c1y, 2 * secondsRadius, 2 * secondsRadius);
  ellipse(c2x, c2y, 2* minutesRadius, 2* minutesRadius);
  ellipse(c3x, c3y, 2* hoursRadius, 2* hoursRadius);  

  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  stroke(255, 102, 0)
  line(c2x + cos(m) * minutesRadius, c2y + sin(m) * minutesRadius, c1x + cos(s) * secondsRadius, c1y + sin(s) * secondsRadius);
  line(c3x + cos(h) * hoursRadius, c3y + sin(h) * hoursRadius, c2x + cos(m) * minutesRadius, c2y + sin(m) * minutesRadius);
  line(c1x + cos(s) * secondsRadius, c1y + sin(s) * secondsRadius, c3x + cos(h) * hoursRadius, c3y + sin(h) * hoursRadius);
  
  fill(0, 150);
  noStroke();
  ellipse(c1x + cos(s) * secondsRadius, c1y + sin(s) * secondsRadius, 30,30);
  ellipse(c2x + cos(m) * minutesRadius, c2y + sin(m) * minutesRadius, 20,20);
  ellipse(c3x + cos(h) * hoursRadius, c3y + sin(h) * hoursRadius,10,10); 

}