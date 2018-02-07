function setup(){
  createCanvas(800,700);
  frameRate(1);
  noStroke();
}

function draw(){
  background(255);
  stroke(0);

  var s = second();
  var m = minute();
  var h = hour();
  var cx = width/2;
  var cy = height/2;


  push();
  stroke(255, 102, 0);
  line(cx, cy, cx, cy-300);
  line(cx, cy, cx-300, cy+300);
  line(cx, cy, cx+300, cy+300);


  
  fill(0, 150);
  noStroke();  
  ellipse(cx+2.5*s/cos(45), cy+2.5*s/cos(45), 10, 10);
  ellipse(cx-2.5*m/cos(45), cy+2.5*m/cos(45), 20, 20);
  ellipse(cx, cy-10*h, 30, 30);
  noFill();
  stroke(255, 102, 0);
  line(cx+2.5*s/cos(45), cy+2.5*s/cos(45),cx-2.5*m/cos(45), cy+2.5*m/cos(45));
  line(cx+2.5*s/cos(45), cy+2.5*s/cos(45),cx, cy-10*h);
  line(cx, cy-10*h,cx-2.5*m/cos(45), cy+2.5*m/cos(45));


}