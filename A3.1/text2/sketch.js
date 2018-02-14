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

  // Set the left and top margin
  var margin = 40;
  translate(margin, margin);

  var lineheight = 15;
  var rectheight = 8;

  for (var i = 0; i < headlines.length; i++) {

    var cx = window.innerWidth/2;
    var cy = window.innerHeight/2;

    // draw rectangle
    fill(120);
    var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
    rect(0, i*lineheight, rectwidth, -1*rectheight)

    // draw headline
    fill(255);
    text(headlines[i], 0, i*lineheight);
  }
}

function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

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

  // console.log(headlines); // make sure counted data looks as expected
  // console.log(maxHeadLen);
  // console.log(minHeadLen);
}