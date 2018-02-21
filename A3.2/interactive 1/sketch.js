var nytResponse;
var headlines = [];
var thisDay = [];
var time=[];
var week = new Date().getDay();



var SUNheight=window.innerHeight/8;
var MONheight=2*window.innerHeight/8;
var TUEheight=3*window.innerHeight/8;
var WEDheight=4*window.innerHeight/8;
var THUheight=5*window.innerHeight/8;
var FRIheight=6*window.innerHeight/8;
var SATheight=7*window.innerHeight/8;


var HT=[SUNheight,MONheight,TUEheight,WEDheight,THUheight,FRIheight,SATheight];
var WN=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];


var startWidth=window.innerWidth/7;
var lineStartWidth = window.innerWidth/5;
var lineEndWidth = 6*window.innerWidth/7;


var count=0;


function preload(){
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "03d70f7f755e40b2b3b03f3b7d23d545";
  url += "?api-key=" + apikey;
  nytResponse = loadJSON(url);
}



function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  
}


function draw(){
  noLoop();

  fill(255,120);


  fill(255);
  textSize(window.innerWidth/50);
  text("Daily Real Time Top Stories by Published time",lineStartWidth,window.innerHeight/20);


  textSize(window.innerWidth/80);
  textAlign(RIGHT);

  textStyle(BOLD);
  textFont("Sans");
  for (var i=0; i<WN.length; i++){
    text(WN[i],startWidth,HT[i]);
  }
  
  stroke(255,120);
  strokeWeight(window.innerWidth/500);

  for (var i =0; i<HT.length; i++){
    line(lineStartWidth,HT[i],lineEndWidth, HT[i]);
  }


  var interval = (6*window.innerWidth/7-window.innerWidth/5)/8;
  var H = window.innerHeight/80;


  for (var i =0; i<HT.length; i++){
    for(var j=0; j<8; j++){
      strokeWeight(window.innerWidth/500);
      line(lineStartWidth+j*interval,HT[i],lineStartWidth+j*interval,HT[i]+H);
      strokeWeight();
      textAlign(CENTER);
      textSize(1.5*H);
      text(0+j*3, lineStartWidth+j*interval,HT[i]+3*H);
    }
  }


  //console.log(week);
  extractElement();
  drawData();

}


function drawData(){
  for (var i=1; i<=24; i++){
    count=0;
    for (var j=0; j<time.length; j++){                    
      if(i==time[j]){
        count=count+1;      
      }
    }
    textSize(window.innerWidth/80);
    textAlign(RIGHT);
    
    for (var n =0; n<7; n++){
      if(week==n){
        fill(255);
        text(WN[n],startWidth,HT[n]);     
        fill(255,215,0,120);
        ellipse(i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,HT[n],15*count,15*count);

      } 
    }   
  }

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


function mouseMoved(e) {

for (var i=1; i<=24; i++){
  count=0;
    for (var j=0; j<time.length; j++){                    
      if(i==time[j]){
        count=count+1;      
      }
    }
    textAlign(CENTER);    
    for (var n =0; n<7; n++){
      if(week==n){
        fill(255,120);  
        if(dist(e.clientX, e.clientY,i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,HT[n])<15*count/2){
          textSize(64);
          text(count,i*(lineEndWidth-lineStartWidth)/24+lineStartWidth,HT[n]);
        } 
      } 
    }   
  }
  return false;
}









