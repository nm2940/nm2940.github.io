var nytResponse;
var headlines = [];
var thisDay = [];
var time=[];
var week = new Date().getDay();



function preload(){
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "03d70f7f755e40b2b3b03f3b7d23d545";
  url += "?api-key=" + apikey;
  nytResponse = loadJSON(url);
}



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  noLoop();
}



function draw(){
  fill(255,120);
  textSize(window.innerWidth/80);
  textAlign(RIGHT);

  var SUNheight=window.innerHeight/8;
  var MONheight=2*window.innerHeight/8;
  var TUEheight=3*window.innerHeight/8;
  var WEDheight=4*window.innerHeight/8;
  var THUheight=5*window.innerHeight/8;
  var FRIheight=6*window.innerHeight/8;
  var SATheight=7*window.innerHeight/8;

  var startWidth=window.innerWidth/7;


  textStyle(BOLD);
  textFont("Sans");
  text("SUNDAY",startWidth,SUNheight);
  text("MONDAY",startWidth,MONheight);
  text("TUESDAY",startWidth,TUEheight);
  text("WEDNESDAY",startWidth,WEDheight);
  text("THURSDAY",startWidth,THUheight);
  text("FRIDAY",startWidth,FRIheight);
  text("SATURDAY",startWidth,SATheight);
  

  var lineStartWidth = window.innerWidth/5;
  var lineEndWidth = 6*window.innerWidth/7;


  stroke(255,120);
  strokeWeight(window.innerWidth/500);
  line(lineStartWidth,SUNheight,lineEndWidth, SUNheight);
  line(lineStartWidth,MONheight,lineEndWidth, MONheight);
  line(lineStartWidth,TUEheight,lineEndWidth, TUEheight);
  line(lineStartWidth,WEDheight,lineEndWidth, WEDheight);
  line(lineStartWidth,THUheight,lineEndWidth, THUheight);
  line(lineStartWidth,FRIheight,lineEndWidth, FRIheight);
  line(lineStartWidth,SATheight,lineEndWidth, SATheight);

  var interval = (6*window.innerWidth/7-window.innerWidth/5)/8;
  var H = window.innerHeight/80;

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,SUNheight,lineStartWidth+i*interval,SUNheight+H);
    strokeWeight();
    textAlign(CENTER);
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,SUNheight+3*H);
  }

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,MONheight,lineStartWidth+i*interval,MONheight+H);
    strokeWeight();
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,MONheight+3*H);
  }

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,TUEheight,lineStartWidth+i*interval,TUEheight+H);
    strokeWeight();
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,TUEheight+3*H);
  }

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,WEDheight,lineStartWidth+i*interval,WEDheight+H);
    strokeWeight();
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,WEDheight+3*H);
  }

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,THUheight,lineStartWidth+i*interval,THUheight+H);
    strokeWeight();
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,THUheight+3*H);
  } 

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,FRIheight,lineStartWidth+i*interval,FRIheight+H);
    strokeWeight();
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,FRIheight+3*H);
  } 

  for(var i=0; i<8; i++){
    strokeWeight(window.innerWidth/500);
    line(lineStartWidth+i*interval,SATheight,lineStartWidth+i*interval,SATheight+H);
    strokeWeight();
    textSize(1.5*H);
    text(0+i*3, lineStartWidth+i*interval,SATheight+3*H);
  } 

  //console.log(week);
  extractElement();

  for (var i=1; i<=24; i++){
    var count=0;
    for (var j=0; j<time.length; j++){                    
      if(i==time[j]){
        count=count+1;      
      }
    }
    textSize(window.innerWidth/80);
    textAlign(RIGHT);
    if(week==0){
      fill(255);
      text("SUNDAY",startWidth,SUNheight);
      fill(255,215,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,SUNheight,15*count,15*count);
    }

    if(week==1){
      fill(255);
      text("MONDAY",startWidth,SUNheight);
      fill(255,69,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,MONheight,15*count,15*count);
    }

    if(week==2){
      fill(255);
      text("TUESDAY",startWidth,TUEheight);
      if(dist(mouseX, mouseY, i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,TUEheight) < 15*count/2){
        fill(255);
        textSize(64);
        text("count",i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,TUEheight);
      }
      fill(255,215,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,TUEheight,15*count,15*count);
    }

    if(week==3){
      fill(255);
      text("WEDNESDAY",startWidth,SUNheight);
      fill(255,69,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,WEDheight,15*count,15*count);
    }

    if(week==4){
      fill(255);
      text("THURSDAY",startWidth,SUNheight);
      fill(255,69,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,THUheight,15*count,15*count);
    }

    if(week==5){
      fill(255);
      text("FRIDAY",startWidth,SUNheight);
      fill(255,69,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,FRIheight,15*count,15*count);
    }

    if(week==6){
      fill(255);
      text("SATURDAY",startWidth,SUNheight);
      fill(255,69,0,120);
      ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,SATheight,15*count,15*count);
    }
  }


  //draw interactive


}



function extractElement(){

  var y = String(year());
  var m = String(month());
  var d = day();
  var h = String(hour());

  if (m.length == 1){
    var mo = "0" + m;
  } else {
    var mo = m;
  };

  if (d.length == 1){
    var da = "0" + d;
  } else {
    var da = d;
  };

  if (h.length == 1){
    var ho = "0" + h;
  } else {
    var ho = h;
  };
  
  var now = y + "-" + mo + "-" + da + " " + ho;

  //console.log(now.substring(6,10));
  
  for (var i = 0; i < nytResponse.results.length; i++){
    var h = nytResponse.results[i].title;
    var d1 = nytResponse.results[i].published_date;
    var d2 = d1.substring(0,10) + " " + d1.substring(11, 13);
    if(d1.substring(11, 12)==0){
      var d3=d1.substring(12, 13);
    }else {
      var d3 = d1.substring(11, 13);
    }
    
    if (now.substring(1,10)==d2.substring(1,10)){
      append(thisDay,d2);
      append(time,d3);
    }
    append(headlines, h);
  }
}