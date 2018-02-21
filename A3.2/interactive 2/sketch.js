var headlines = [];
var headline = [];
var nytResponse;
var input, button;

var section = [];
var abstract = [];
var dates =[];


function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "03d70f7f755e40b2b3b03f3b7d23d545"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0);

  var y=0;
  var x=0;
  for(var i=0; i<=40; i++){
    var hdline = new extractHeadlines(random(-500,200),y,random(0.5,2));
    hdline.hd();
    headline.push(hdline);
    y +=height/40;
  }
  textSize(height/40);
  
  input = createInput();
  input.position(20,window.innerHeight/2);

 
}

function search(){
  extractElement();
  push()
  fill(255,150);
  text('Search Top Stories by inputting Serial Number, such as 1 or 23.',input.x, input.y+window.innerHeight/5/3);

  var keywords=input.value();
  	if(keywords<headlines.length){
  		fill(255);
  		text("Title: "+headlines[keywords],20,input.y+window.innerHeight/5/2);
  		text("Abstract: "+abstract[keywords],20,input.y+3.2*window.innerHeight/5/5);
  		text("Publish Date: "+dates[keywords],20,input.y+4*window.innerHeight/5/5);
  	}
  	else{
  	 	text("Sorry, there is no that much stories.",0,window.innerHeight/2);
  	 }
  	pop();
}

function draw() {
  background(0,150);
  headline.forEach(function(hdline){
    hdline.render();
  });

  fill(255,0,0,102);
  rect(0,input.y-10,window.innerWidth,window.innerHeight/5);



  search();
}





function extractElement(){
  for (var i = 0; i < nytResponse.results.length; i++){
		var s = nytResponse.results[i].section;
		var a = nytResponse.results[i].abstract;
		var d1 = nytResponse.results[i].published_date;
		var d2 = d1.substring(0,10) + " " + d1.substring(11, 19);

		append(section, s);
		append(abstract, a);
		append(dates, d2);
	};
}


function extractHeadlines(x,y,speed) {
  this.x=x;
  this.y=y;
  this.value;
  this.speed=speed;
  this.switchInterval = round(60,100);

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
    fill(0,255,70,180);
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
  return Math.floor(Math.random() * (max - min + 1)) + min;  
}