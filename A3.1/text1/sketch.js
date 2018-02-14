var nytResponse;
var headlines = [];
var counts = {};
var keys = [];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "03d70f7f755e40b2b3b03f3b7d23d545"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  
  createCanvas(window.innerWidth, window.innerHeight);
  //createCanvas(1800,1080);
  background(255);

  setupwords();

}



function setupwords(){

  for (var i = 0; i < nytResponse.results.length; i++) {

    var h = nytResponse.results[i].title;
    append(headlines, h);
  }

  var hd = join(headlines,' ');
  var tokens = splitTokens(hd, "\t ',.?!:;");


  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();

    if (counts[word] === undefined) {
      counts[word] = 1;
      keys.push(word);
    } else{
      counts[word] = counts[word] + 1;
    }
    
    //console.log(counts);
  }


  for (var i = 0; i < keys.length; i++){
    var key = keys[i];
    var count = counts[key];
    textSize(count*window.innerWidth/120);
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var x = random(width);
    var y = random(height);
    text(key,x,y);
    fill(r,g,b,125);
  }

}





