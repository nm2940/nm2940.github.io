var headlines = [];
var maxHeadLen, minHeadLen;


function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "03d70f7f755e40b2b3b03f3b7d23d545"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  textSize(7);

  noLoop(); 
  extractHeadlines();
}

function draw() {
  background(0);
  var margin = 40;

  translate(window.innerWidth/2, window.innerHeight/2);
  for (var i = 0; i < headlines.length; i++) {
      push();
      rotate(TWO_PI * i / 47);
      fill(255);
      text(headlines[i], 40,40);
      fill(120,100);
      var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
      rect(40,40,rectwidth, -1*7);
      pop();
       
  }
}


function extractHeadlines() {

  // console.log(nytResponse); 

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    
    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);
  }
}