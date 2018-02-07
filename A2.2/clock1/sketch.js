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

  push();
  stroke(255, 102, 0);
  line(100, 500, 700, 500);
  fill(0, 150);
  noStroke();  
  ellipse(100+10*s, 500, 10, 10);
  ellipse(100+10*m, 500, 20, 20);
  ellipse(100+10*h, 500, 30, 30);
  noFill();
  stroke(255, 102, 0);
  curve(((100+10*s)+(100+10*m))/3,1000,100+10*s,500,100+10*m,500,2*((100+10*s)+(100+10*m))/3,1000);
  curve(((100+10*s)+(100+10*h))/3,3000,100+10*s,500,100+10*h,500,2*((100+10*s)+(100+10*h))/3,3000);
  curve(((100+10*m)+(100+10*h))/3,2000,100+10*m,500,100+10*h,500,2*((100+10*m)+(100+10*h))/3,2000);
  // fill(255, 102, 0);
  // noStroke();
  // textSize(15);
  // text(s, 93+10*s, 530);
  // textSize(20);
  // text(m, 90+10*m, 560);
  // textSize(30);
  // text(h, 85+10*h, 600);
  // pop();

}