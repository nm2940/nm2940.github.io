var headlines = [];
var headline;
var nytResponse;

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "03d70f7f755e40b2b3b03f3b7d23d545"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0);

  headline = new extractHeadlines(0,height/2,1);
  headline.hd();
  textSize(8);
  
}

function draw() {
  background(0);
  headline.render();
}


function extractHeadlines(x,y,speed) {
  this.x=x;
  this.y=y;
  this.value;
  this.speed=speed;
  this.switchInterval = 60;

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    append(headlines, h);
  }

  this.hd=function(){
    if(frameCount % this.switchInterval ==0){
      this.value = headlines[getRandomIntInclusive(0,nytResponse.results.length)];
    }
  }

  this.render = function(){
    fill(0,255,70);
    text(this.value,this.x,this.y);
    this.move();
    this.hd();
  }

  this.move=function(){
    if(this.x>width){
      this.x=0;
    } else{
      this.x += this.speed;
    }
    
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}